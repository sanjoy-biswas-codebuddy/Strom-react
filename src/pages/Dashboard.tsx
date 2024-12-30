import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IUser } from "../component/modal/IUser";
import { UserServices } from "../component/services/UserService";

interface IState {
    users: IUser[]
}

const MailSent: React.FC = () => {
    const [data, setSata] = useState<IState>({
        users: UserServices.getUsers()
    })

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Signin")
    }
    return (
        <div className="text-center text-green-600 mb-4">
            <p className="text-lg font-semibold mb-4">Thank you for your message!</p>

            <div className="py-5 max-w-screen-xl mx-auto text-black">
                <table className="w-full border">
                    <thead>
                        <tr>
                            <th className="border">Id</th>
                            <th className="border">Name</th>
                            <th className="border">Email</th>
                            <th className="border">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.users.map((user) => (
                            <tr key={user.id}>
                                <td className="border">{user.id}</td>
                                <td className="border">{user.name}</td>
                                <td className="border">{user.email}</td>
                                <td className="border">{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            <button
                onClick={handleClick}
                className="font-medium rounded-[30px] text-base px-4 lg:px-8 py-2 lg:py-3 mr-2 focus:outline-none uppercase text-white bg-[#FB0201] border border-[#FB0201] hover:bg-white hover:text-[#FB0201] focus:[#FB0201]"
            >
                Send another message
            </button>
        </div>
    );
}

export default MailSent;