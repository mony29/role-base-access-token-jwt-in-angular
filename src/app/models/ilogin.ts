// import { IStatus } from "./istatus";

export interface ILogin {
    success: boolean;
    date: Date;
    payload: {
        username: string;
        password: string;
        token:string
    }
}
