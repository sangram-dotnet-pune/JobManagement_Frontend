import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../../Interface/Job/Job';

@Injectable({
  providedIn: 'root',
})
export class JobApiService {
  

  
 constructor(private http:HttpClient) {}




    getAllJobs() : Observable<Job []> {
    return this.http.get<Job[]>('http://localhost:5055/api/Job');
  }
}
