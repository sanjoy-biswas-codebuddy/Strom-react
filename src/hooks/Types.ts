export type Role = 'Admin' | 'Member';

export interface Activity {
    id: string;
    description: string;
    timestamp: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: 'todo' | 'in_progress' | 'completed';
    assignedTo?: string;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface Workspace {
    id: string;
    name: string;
    description?: string;
    users: User[];
    tasks: Task[];
} 