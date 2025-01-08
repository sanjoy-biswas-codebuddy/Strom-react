import { IUser } from '../modal/IUser';

export const login = async (email: string, password: string) => {
    try {
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();
        const user = users.find((user: IUser & { password: string }) =>
            user.email === email && user.password === password
        );

        if (!user) {
            throw new Error('Invalid credentials');
        }

        return user;
    } catch (error) {
        throw error;
    }
};
