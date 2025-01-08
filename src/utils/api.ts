import axios, { AxiosError } from 'axios'
import { Activity } from '../hooks/Types'

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const createWorkspace = async (data: { name: string; description: string }) => {
    try {
        const response = await api.post('/workspaces', data)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Failed to create workspace')
        }
        throw error
    }
}

export const getTasks = async (workspaceId: string, filter: any) => {
    try {
        const response = await api.get(`/workspaces/${workspaceId}/tasks`, { params: filter })
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Failed to fetch tasks')
        }
        throw error
    }
}

export const updateTask = async ({ taskId, updates }: { taskId: string; updates: any }) => {
    try {
        const response = await api.patch(`/tasks/${taskId}`, updates)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Failed to update task')
        }
        throw error
    }
}

export const createTask = async ({ workspaceId, task }: { workspaceId: string; task: any }) => {
    try {
        const response = await api.post(`/workspaces/${workspaceId}/tasks`, task)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Failed to create task')
        }
        throw error
    }
}

export const getUsers = async (workspaceId: string) => {
    try {
        const response = await api.get(`/workspaces/${workspaceId}/users`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Failed to fetch users')
        }
        throw error
    }
}

export const updateUserRole = async ({
    workspaceId,
    userId,
    role,
}: {
    workspaceId: string
    userId: string
    role: string
}) => {
    try {
        const response = await api.patch(`/workspaces/${workspaceId}/users/${userId}`, { role })
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Failed to update user role')
        }
        throw error
    }
}

export const inviteUser = async ({
    workspaceId,
    email,
    role,
}: {
    workspaceId: string
    email: string
    role: string
}) => {
    try {
        const response = await api.post(`/workspaces/${workspaceId}/invite`, { email, role })
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Failed to invite user')
        }
        throw error
    }
}

export async function getActivityLog(workspaceId: string): Promise<Activity[]> {
    try {
        const response = await api.get(`/workspaces/${workspaceId}/activities`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Failed to fetch activity log')
        }
        throw error
    }
}
