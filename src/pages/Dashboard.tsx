import React from "react";
import { useNavigate } from 'react-router-dom';


const MailSent: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Signin")
    }
    return (
        <div className="text-center text-green-600 mb-4">
            <p className="text-lg font-semibold mb-4">Thank you for your message!</p>
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