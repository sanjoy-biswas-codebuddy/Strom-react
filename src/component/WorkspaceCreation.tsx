'use client'

import { useForm } from '@mantine/form'
import { TextInput, Button, Box } from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import { createWorkspace } from '../utils/api'
import { Workspace } from '../hooks/Types'

interface WorkspaceFormData {
    name: string
    description: string
}

interface WorkspaceCreationProps {
    onWorkspaceCreated: (workspace: Workspace) => void
}

export default function WorkspaceCreation({ onWorkspaceCreated }: WorkspaceCreationProps) {
    const form = useForm<WorkspaceFormData>({
        initialValues: {
            name: '',
            description: '',
        },
        validate: {
            name: (value: string) => (value.length > 0 ? null : 'Workspace name is required'),
        },
    })

    const mutation = useMutation({
        mutationFn: createWorkspace,
        onSuccess: (data: Workspace) => {
            onWorkspaceCreated(data)
        },
    })

    const handleSubmit = form.onSubmit((values: WorkspaceFormData) => {
        mutation.mutate(values)
    })

    return (
        <Box mx="auto" className="max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextInput
                    required
                    label="Workspace Name"
                    placeholder="Enter workspace name"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    label="Description"
                    placeholder="Enter workspace description"
                    {...form.getInputProps('description')}
                />
                <Button type="submit" loading={mutation.isPending} className="w-full">
                    Create Workspace
                </Button>
            </form>
        </Box>
    )
}
