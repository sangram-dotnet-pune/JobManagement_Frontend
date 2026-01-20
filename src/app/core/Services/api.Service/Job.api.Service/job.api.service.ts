import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../../Interface/Job/Job';
import { ApplicationResponse } from '../../../Interface/Job/ApplicationResponse';
import { CreateJob } from '../../../Interface/Job/CreateJob';



@Injectable({
  providedIn: 'root',
})
export class JobApiService {
  

  
 constructor(private http:HttpClient) {}




    getAllJobs() : Observable<Job []> {
    return this.http.get<Job[]>('http://localhost:5055/api/Job');
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`http://localhost:5055/api/Job/${id}`);
  }
  postJob(job:CreateJob) {
          return this.http.post('http://localhost:5055/api/Job/create', job);
      }


  getApplicationsByJobId(id: string): Observable<ApplicationResponse[]> {
    return this.http.get<ApplicationResponse[]>(`http://localhost:5055/api/Application/job/${id}`);
  }
  
}
