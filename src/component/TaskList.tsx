// src/components/TaskList.tsx
import React from 'react';
// import { Task } from '../hooks/Types';

// interface TaskListProps {
//     tasks?: Task[];
// }

const TaskList: React.FC = () => {
    // Fetch tasks from backend or use context
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Tasks</h2>
            <ul>
                {/* Render tasks here */}
                <li className="mb-2">Sample Task</li>
            </ul>
        </div>
    );
};

export default TaskList;
