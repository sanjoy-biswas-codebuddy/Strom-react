import React from "react";
import { useParams } from 'react-router-dom'

interface IParams {
    id: number
}

const UserDetails: React.FC = () => {
    const { id } = useParams<IParams | any>(

    )
    return (
        <div className="py-5 max-w-screen-xl mx-auto text-black">
            <h1 className="text-[50px]">
                Hello: <span>{id}</span>
            </h1>
        </div>
    )
}

export default UserDetails;

