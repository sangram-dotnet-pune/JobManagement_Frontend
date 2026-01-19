import { Component, Input, signal } from '@angular/core';
import { JobApplication } from '../../../core/Interface/Job/Job';
import { CommonModule } from '@angular/common';
import { JobApiService } from '../../../core/Services/api.Service/Job.api.Service/job.api.service';
import { ApplicationResponse } from '../../../core/Interface/Job/ApplicationResponse';

@Component({
  selector: 'app-applicant-list',
  imports: [CommonModule],
  templateUrl: './applicant-list.html',
  styleUrl: './applicant-list.css',
})
export class ApplicantList {

  constructor(private jobApiService: JobApiService) {}

  @Input() jobId!: number;

  Jobapplications = signal<JobApplication[]>([]);
  applications: ApplicationResponse[] = [];

  ngOnChanges() {
    if (this.jobId) {
      this.loadApplications(this.jobId);
    }
  }

  loadApplications(jobId: number) {
    this.jobApiService.getApplicationsByJobId(jobId.toString()).subscribe({
      next: (applications: ApplicationResponse[]) => {

        this.applications = applications;

        this.Jobapplications.set(applications.map(app => ({
          id: app.id,
          applicantName: app.applicantName,
          email: app.applicantEmail,
          status: app.status
        })));
      },
      error: (err) => {
        console.error('Failed to load applications', err);
        this.Jobapplications.set([]);
        this.applications = [];
      }
    });
  }
}
