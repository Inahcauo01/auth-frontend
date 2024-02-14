import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  Login(loginObj: any): Observable<any> {
    return this.http.post('http://localhost:8081/api/v1/auth/login', loginObj);
  }

  IsLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }
}
