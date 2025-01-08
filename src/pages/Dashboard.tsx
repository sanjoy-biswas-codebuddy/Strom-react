import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { IUser } from "../component/modal/IUser";
import { UserServices } from "../component/services/UserService";

interface IState {
    users: IUser[]
}

const MailSent: React.FC = () => {
    const [data, setData] = useState<IState>({
        users: UserServices.getUsers()
    })

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Workspaces")
    }
    return (
        <div className="text-center text-green-600 mb-4">
            <p className="text-lg font-semibold mb-4">Thank you for your message!</p>

            <div className="py-5 max-w-screen-xl mx-auto text-black">
                <div className="shadow-sm overflow-hidden my-8">
                    <table className="w-full border-collapse table-auto w-full text-sm border">
                        <thead>
                            <tr>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left">Id</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left">Email</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left">Age</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800">
                            {data.users.map((user) => (
                                <tr key={user.id}>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">{user.id}</td>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                                        <Link to={`${user.name}`} className="text-blue-600">
                                            {user.name}
                                        </Link>
                                    </td>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">{user.email}</td>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">{user.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>



            <button
                onClick={handleClick}
                className="font-medium rounded-[30px] text-base px-4 lg:px-8 py-2 lg:py-3 mr-2 focus:outline-none uppercase text-white bg-[#FB0201] border border-[#FB0201] hover:bg-white hover:text-[#FB0201] focus:[#FB0201]"
            >
                Check Workspace
            </button>
        </div>
    );
}

export default MailSent;