'use client'

import { useState, useEffect } from 'react'
import { AppShell, Text, Burger, useMantineTheme, rem, Button, Stack } from '@mantine/core'
import WorkspaceCreation from '../component/WorkspaceCreation'
import TaskManagement from '../component/TaskManagement'
import UserManagement from '../component/UserManagement'
import ActivityLog from '../component/ActivityLog'
import { Workspace as WorkspaceType } from '../hooks/Types'
import { useMediaQuery } from '@mantine/hooks'
import axios from 'axios'

export default function Workspace() {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    const [currentWorkspace, setCurrentWorkspace] = useState<WorkspaceType | null>(null)
    const [workspaces, setWorkspaces] = useState<WorkspaceType[]>([])
    const isMobile = useMediaQuery(`(max-width: ${rem(768)})`)

    useEffect(() => {

        const fetchWorkspaces = async () => {
            try {
                const response = await axios.get('http://localhost:5000/workspaces')
                setWorkspaces(response.data)
                if (response.data.length > 0 && !currentWorkspace) {
                    setCurrentWorkspace(response.data[0])
                }
            } catch (error) {
                console.error('Failed to fetch workspaces:', error)
            }
        }
        fetchWorkspaces()
    }, [currentWorkspace])

    return (
        <AppShell
            padding="md"
            navbar={{
                width: { base: 0, sm: 300 },
                breakpoint: 'sm',
                collapsed: { mobile: !opened, desktop: false }
            }}
            header={{ height: 60 }}
        >
            <AppShell.Navbar p="md">
                <Stack>
                    <Text fw={700}>Workspaces</Text>
                    {workspaces.map((workspace) => (
                        <Button
                            key={workspace.id}
                            variant={currentWorkspace?.id === workspace.id ? "filled" : "light"}
                            onClick={() => setCurrentWorkspace(workspace)}
                        >
                            {workspace.name}
                        </Button>
                    ))}
                </Stack>
            </AppShell.Navbar>

            <AppShell.Header p="md">
                <div className="flex items-center h-full">
                    {isMobile && (
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />
                    )}
                    <Text>{currentWorkspace ? currentWorkspace.name : 'Workspace Management'}</Text>
                </div>
            </AppShell.Header>

            <AppShell.Main>
                {currentWorkspace ? (
                    <div className="space-y-8">
                        <TaskManagement workspace={currentWorkspace} />
                        <UserManagement workspace={currentWorkspace} />
                        <ActivityLog workspace={currentWorkspace} />
                    </div>
                ) : (
                    <WorkspaceCreation onWorkspaceCreated={setCurrentWorkspace} />
                )}
            </AppShell.Main>
        </AppShell>
    )
}
