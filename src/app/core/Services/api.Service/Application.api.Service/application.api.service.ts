import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppliedJob } from '../../../Interface/Job/AppliedJob';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationApiService {

  private baseUrl = 'http://localhost:5055/api/Application';

  constructor(private http: HttpClient) {}

  applyJob(data: any) {
    return this.http.post(`${this.baseUrl}/apply`, data);
  }

  getAppliedJobs(): Observable<AppliedJob[]> {
    return this.http.get<AppliedJob[]>(`${this.baseUrl}/applied`);
  }
}
