import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../Interface/Auth/LoginResponse';
import { RegisterResponse } from '../../Interface/Auth/RegisterResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
   constructor(private http:HttpClient) {}

   login(email: string, password: string): Observable<LoginResponse> {
       return this.http.post<LoginResponse>('http://localhost:5055/api/Auth/login', { email, password });

  }

    isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

   register(FullName: string, email: string, password: string, phone: string, roleId: number): Observable<RegisterResponse> {
   return this.http.post<RegisterResponse>('http://localhost:5055/api/Auth/register', { FullName, email, password ,phone,roleId});
  }
}
