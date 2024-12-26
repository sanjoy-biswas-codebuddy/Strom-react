import React, { useState } from 'react';
import MailSent from './MailSent';

interface FormData {
    fname: string;
    lname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    fname?: string;
    lname?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fname.trim()) {
            newErrors.fname = 'First Name is required';
        }
        if (!formData.lname.trim()) {
            newErrors.lname = 'Last Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (formData.password.length < 10 ||
            !/[A-Z]/.test(formData.password) ||
            !/[a-z]/.test(formData.password) ||
            !/\d/.test(formData.password) ||
            !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            newErrors.password = "Password must contain at least 10 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.";
        }
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitted(true);
            setFormData({ fname: '', lname: '', email: '', password: '', confirmPassword: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    return (
        <div className='py-5 max-w-screen-xl mx-auto'>
            <h1 className='text-center text-[40px]'>Sign Up</h1>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                {submitted ? (
                    <MailSent setSubmitted={setSubmitted} />
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fname ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.fname && (
                                <p className="mt-1 text-sm text-red-600">{errors.fname}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lname ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.lname && (
                                <p className="mt-1 text-sm text-red-600">{errors.lname}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                            )}
                        </div>


                        <button
                            type="submit"
                            disabled={submitting}
                            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium 
              ${submitting
                                    ? 'bg-blue-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                }`}
                        >
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>


                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactForm;