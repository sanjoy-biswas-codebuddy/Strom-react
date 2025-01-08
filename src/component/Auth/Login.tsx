import { useForm } from "react-hook-form";
import { login } from "../services/auth";
import InputField from '../shared/InputField';

interface LoginFormInputs {
    email: string;
    password: string;
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<LoginFormInputs>();

    const onSubmit = async (data: LoginFormInputs) => {
        try {
            const user = await login(data.email, data.password);
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = '/dashboard';
            }
        } catch (error) {
            setError('root', {
                type: 'manual',
                message: 'Invalid credentials'
            });
        }
    };

    return (
        <div className="py-5 max-w-screen-xl mx-auto">
            <h1 className='text-center text-[40px]'>Log In</h1>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                    <div style={{ marginBottom: '15px' }}>
                        <InputField
                            label="Email"
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                    </div>

                    <div style={{ marginBottom: '15px' }}>

                        <InputField
                            label="Password"
                            id="password"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                    </div>

                    {errors.root && <p style={{ color: 'red' }}>{errors.root.message}</p>}
                    <button type="submit" className="font-medium rounded-[30px] text-base px-4 lg:px-8 py-2 lg:py-3 mr-2 focus:outline-none uppercase text-white bg-[#FB0201] border border-[#FB0201] hover:bg-white hover:text-[#FB0201] focus:[#FB0201] w-full">Login</button>
                </form>
            </div>

        </div>
    );
};

export default Login;
