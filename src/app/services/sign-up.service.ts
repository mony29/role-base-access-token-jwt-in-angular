import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.bashUrl;

  constructor(private http: HttpClient) { }

  login(){

  }

  signup(){

  }
  
}
