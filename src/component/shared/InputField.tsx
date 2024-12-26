/** @jsx React.createElement */
import { forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, id, className, ...props }, ref) => {
        return (
            <div>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <input
                    ref={ref}
                    id={id}
                    className={className}
                    {...props}
                />
            </div>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField; 