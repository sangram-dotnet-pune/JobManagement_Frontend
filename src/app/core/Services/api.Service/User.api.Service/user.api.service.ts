import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSummary } from '../../../Interface/Job/UserSummary';   

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  

  
 constructor(private http:HttpClient) {}




    getProfile():Observable<UserSummary>{
    return this.http.get<UserSummary>('http://localhost:5055/api/User/profile');
  }
  
}