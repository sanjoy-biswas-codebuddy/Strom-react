'use client'

import { useState, useEffect } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button, TextInput, Select, Box, Text, Table } from '@mantine/core'
import { updateTask } from '../utils/api'
import { Task as TaskType } from '../hooks/Types'

interface TaskFilter {
    status: string
    assignedTo: string
    search: string
}

interface Task {
    id: string;
    title: string;
    status: 'todo' | 'in_progress' | 'completed'
    assignedTo?: string
}

interface Workspace {
    id: string
    name: string
    users: Array<{ id: string; name: string }>
}

interface TaskManagementProps {
    workspace: Workspace
}

export default function TaskManagement({ workspace }: TaskManagementProps) {
    const [filter, setFilter] = useState<TaskFilter>({ status: '', assignedTo: '', search: '' })
    const queryClient = useQueryClient()
    const [tasksData, setTasksData] = useState<Task[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:5000/tasks?workspaceId=${workspace.id}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks')
                }
                const data = await response.json()
                setTasksData(data)
            } catch (error) {
                console.error('Error fetching tasks:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchTasks()
    }, [workspace.id]) // Added workspace.id as dependency

    const updateTaskMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks', workspace.id] })
        },
    })

    const handleUpdateTask = (taskId: string, updates: Partial<TaskType>) => {
        updateTaskMutation.mutate({ taskId, updates })
    }

    const filteredTasks = tasksData.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(filter.search.toLowerCase())
        const matchesStatus = !filter.status || task.status === filter.status
        const matchesAssignee = !filter.assignedTo || task.assignedTo === filter.assignedTo
        return matchesSearch && matchesStatus && matchesAssignee
    })

    if (isLoading) return <div>Loading tasks...</div>

    return (
        <Box className="space-y-4">
            <Text size="xl" fw={700}>
                Task Management
            </Text>
            <Box className="space-y-2">
                <TextInput
                    placeholder="Search tasks"
                    value={filter.search}
                    onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                />
                <Select
                    placeholder="Filter by status"
                    data={[
                        { value: 'todo', label: 'To Do' },
                        { value: 'in_progress', label: 'In Progress' },
                        { value: 'completed', label: 'Completed' }
                    ]}
                    value={filter.status}
                    onChange={(value) => setFilter({ ...filter, status: value || '' })}
                />
                <Select
                    placeholder="Filter by assignee"
                    data={workspace?.users?.map((user) => ({ value: user.id, label: user.name })) || []}
                    value={filter.assignedTo}
                    onChange={(value) => setFilter({ ...filter, assignedTo: value || '' })}
                />
            </Box>

            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Title</Table.Th>
                        <Table.Th>Status</Table.Th>
                        <Table.Th>Assigned To</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {filteredTasks.length ? (
                        filteredTasks.map((task: Task) => (
                            <Table.Tr key={task.id}>
                                <Table.Td>{task.title}</Table.Td>
                                <Table.Td>{task.status}</Table.Td>
                                <Table.Td>{workspace?.users?.find((u) => u.id === task.assignedTo)?.name || 'Unassigned'}</Table.Td>
                                <Table.Td>
                                    <Button onClick={() => handleUpdateTask(String(task.id), { status: 'completed' })}>
                                        Mark as Done
                                    </Button>
                                </Table.Td>
                            </Table.Tr>
                        ))
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={4} style={{ textAlign: 'center' }}>
                                No tasks available
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </Box>
    )
}
