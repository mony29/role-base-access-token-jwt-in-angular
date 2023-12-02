// import { IStatus } from "./istatus";

import { ILogin } from "./ilogin";

export interface LoginResponse extends ILogin{
    access_token(access_token: any): unknown;
    token:string, 
    refreshToken :string,
    expiration:string,
    name:string,
    username :string
}