
import React from "react";


interface MailSentProps {
    setSubmitted: (value: boolean) => void;
}

const MailSent: React.FC<MailSentProps> = ({ setSubmitted }) => {
    return (
        <div className="text-center text-green-600 mb-4">
            <p className="text-lg font-semibold">Thank you for your message!</p>
            <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-blue-600 hover:text-blue-800 underline"
            >
                Send another message
            </button>
        </div>
    );
}

export default MailSent;