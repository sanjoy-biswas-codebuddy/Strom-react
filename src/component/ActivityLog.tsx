'use client'

import { List, Text, Box } from '@mantine/core'
import { getActivityLog } from '../utils/api'
import { usePolling } from '../hooks/usePolling'
import { Activity as ActivityType } from '../hooks/Types'

interface Workspace {
    id: string
}

interface ActivityLogProps {
    workspace: Workspace
}

export default function ActivityLog({ workspace }: ActivityLogProps) {
    const { data: activities, isLoading } = usePolling(['activities', workspace.id], () =>
        getActivityLog(workspace.id)
    )

    if (isLoading) return <div>Loading activity log...</div>

    return (
        <Box className="space-y-4">
            <Text size="xl" fw={700}>
                Activity Log
            </Text>
            <List>
                {activities && activities.length > 0 ? (
                    activities.map((activity: ActivityType) => (
                        <List.Item key={activity.id}>
                            {activity.description} - {new Date(activity.timestamp).toLocaleString()}
                        </List.Item>
                    ))
                ) : (
                    <Text c="dimmed">No activities to display</Text>
                )}
            </List>
        </Box>
    )
}
