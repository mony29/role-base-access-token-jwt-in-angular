export interface IUser {
    success: boolean;
    date: Date;
    payload: {
        username: string;
        address: string;
    }
}