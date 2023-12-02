import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ILogin } from '../models/ilogin';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUserData(): Observable<ILogin>{
    return this.http.get<ILogin>(this.baseUrl+'/users/{id}?id=12');
  }
  
  getAdminData(): Observable<ILogin>{
    // return this.http.get(this.baseUrl+'/admin/getdata');
    return this.http.get<ILogin>(this.baseUrl+'/users/get-all-user/1');
  }
}
