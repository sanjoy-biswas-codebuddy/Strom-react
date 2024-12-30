import React, { forwardRef } from 'react';
import classNames from 'classnames';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, id, className, error, ...props }, ref) => {
        return (
            <div className="mb-4">
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
                <input
                    ref={ref}
                    id={id}
                    className={classNames(
                        "mt-1 block w-full rounded-md shadow-sm sm:text-sm",
                        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
                        error && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500",
                        className
                    )}
                    {...props}
                />

            </div>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField;
