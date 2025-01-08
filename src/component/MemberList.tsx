
import React from "react";

const MemberList: React.FC = () => {
    // Fetch members from backend or use context
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Members</h2>
            <ul>
                {/* Render members here */}
                <li className="mb-2">Sample Member</li>
            </ul>
        </div>
    );
};

export default MemberList;
