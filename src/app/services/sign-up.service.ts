import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../models/ilogin';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.baseUrl;
  // private baseUrl = environment.bashUrl+'/authorization';

  constructor(private http: HttpClient) { }

  login(model: ILogin) {
    return this.http.post<LoginResponse>(this.baseUrl + '/users/login', model);
  }

  signup() {
    // I skip signup method=
  }

  changePassword(){

  }

}
