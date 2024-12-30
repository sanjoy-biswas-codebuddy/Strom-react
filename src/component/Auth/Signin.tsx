import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../shared/InputField';
import { useNavigate } from 'react-router-dom';

interface FormData {
    fname: string;
    lname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const ContactForm = () => {
    const navigate = useNavigate();

    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>();

    const password = watch('password');

    const onSubmit = async (data: FormData) => {
        setSubmitting(true);
        try {
            console.log('Form submitted:', data);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            navigate("/Dashboard")
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='py-5 max-w-screen-xl mx-auto'>
            <h1 className='text-center text-[40px]'>Sign Up</h1>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <InputField
                            label="First Name"
                            id="fname"
                            {...register('fname', {
                                required: 'First Name is required'
                            })}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.fname && (
                            <p className="mt-1 text-sm text-red-600">{errors.fname.message}</p>
                        )}
                    </div>

                    <div>
                        <InputField
                            label="Last Name"
                            id="lname"
                            {...register('lname', {
                                required: 'Last Name is required'
                            })}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.lname && (
                            <p className="mt-1 text-sm text-red-600">{errors.lname.message}</p>
                        )}
                    </div>

                    <div>
                        <InputField
                            label="Email"
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email format'
                                }
                            })}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <InputField
                            label="Password"
                            id="password"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 10,
                                    message: 'Password must be at least 10 characters'
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/,
                                    message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                                }
                            })}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>

                    <div>
                        <InputField
                            label="Confirm Password"
                            id="confirmPassword"
                            type="password"
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: value =>
                                    value === password || 'Passwords do not match'
                            })}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="font-medium rounded-[30px] text-base px-4 lg:px-8 py-2 lg:py-3 mr-2 focus:outline-none uppercase text-white bg-[#FB0201] border border-[#FB0201] hover:bg-white hover:text-[#FB0201] focus:[#FB0201] w-full"
                    >
                        {submitting ? 'Submitting...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;