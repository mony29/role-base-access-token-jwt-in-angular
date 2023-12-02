import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt"; // npm install @auth0/angular-jwt 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  isLoggedIn(){
    return !!this.getAccessToken();
    // return !!this.getAccessToken() && !this.isTokenExpired();
  }

  addUsername(username: string){
    localStorage.setItem('username', username);
  }

  addAccessToken(accessToken: string){
    localStorage.setItem('access_token', accessToken);
  }

  addRefreshToken(refreshToken: string){
    localStorage.setItem('refresh_token', refreshToken);
  }

  getUsername(){
    return localStorage.getItem('username');
  }
  
  getAccessToken(){
    return localStorage.getItem('access_token');
  }

  getRefreshToken(){
    return localStorage.getItem('refresh_token');
  }

  // check if token is expired
  isTokenExpired(){
    // const token: string = this.getAccessToken()??"";
    // if(!token){
    //   return false;
    // }
    // const tokenSplit: string = token.split('')[1];
    // const decodedString:string = atob(tokenSplit);
    // const jsonString:string = JSON.parse(decodedString);
    // const expiry = (jsonString).exp;
    // return (Math.floor((new Date()).getTime()/1000) >= expiry);
  }

  logout(){
   localStorage.removeItem('username');
   localStorage.removeItem('access_token'); 
   localStorage.removeItem('refresh_token');

   this.router.navigate(['/login']);
  }

  getUserRole(){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getAccessToken()??"");
    const role = decodedToken[''];
    // console.log("decodedToken", JSON.stringify(decodedToken))
    return role;
  }
}
