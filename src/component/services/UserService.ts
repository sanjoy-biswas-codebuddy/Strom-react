import { IUser } from "./../modal/IUser";

export class UserServices {
    private static users: IUser[] = [
        { id: 1, name: "Sanjoy", email: "sanjoy@mailsent.com", age: 37 },
        { id: 2, name: "Papai", email: "papai@mailsent.com", age: 36 },
        { id: 3, name: "Sonai", email: "sonai@mailsent.com", age: 38 }
    ];

    public static getUsers(): IUser[] {
        return this.users;
    }

    // public static addUser(user: IUser): void {
    //     this.users.push(user);
    // }
}