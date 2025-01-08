'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Table, Select, Box, Text, TextInput, Button } from '@mantine/core'
import { getUsers, updateUserRole, inviteUser } from '../utils/api'
import { User as UserType, Role } from '../hooks/Types'
import { useState } from 'react'

interface User extends UserType { }

interface Workspace {
    id: string
}

interface UserManagementProps {
    workspace: Workspace
}

export default function UserManagement({ workspace }: UserManagementProps) {
    const queryClient = useQueryClient()
    const [inviteEmail, setInviteEmail] = useState('')
    const [inviteRole, setInviteRole] = useState<Role>('Member')

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users', workspace.id],
        queryFn: () => getUsers(workspace.id)
    })

    const updateRoleMutation = useMutation({
        mutationFn: updateUserRole,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users', workspace.id] })
        },
    })

    const inviteUserMutation = useMutation({
        mutationFn: inviteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users', workspace.id] })
            setInviteEmail('')
            setInviteRole('Member')
        },
    })

    const handleUpdateRole = (userId: string, newRole: Role) => {
        updateRoleMutation.mutate({ workspaceId: workspace.id, userId, role: newRole })
    }

    const handleInviteUser = (e: React.FormEvent) => {
        e.preventDefault()
        if (inviteEmail) {
            inviteUserMutation.mutate({ workspaceId: workspace.id, email: inviteEmail, role: inviteRole })
        }
    }

    if (isLoading) return <div>Loading users...</div>

    return (
        <Box className="space-y-4">
            <Text size="xl" fw={700}>
                User Management
            </Text>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Select
                                    value={user.role}
                                    onChange={(value) => handleUpdateRole(user.id, value as Role)}
                                    data={['Admin', 'Member']}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Box component="form" onSubmit={handleInviteUser} className="space-y-4">
                <Text size="lg" fw={500}>Invite New User</Text>
                <TextInput
                    required
                    label="Email"
                    placeholder="Enter email address"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                />
                <Select
                    label="Role"
                    value={inviteRole}
                    onChange={(value) => setInviteRole(value as Role)}
                    data={['Admin', 'Member']}
                />
                <Button type="submit" loading={inviteUserMutation.isPending}>
                    Invite User
                </Button>
            </Box>
        </Box>
    )
}
