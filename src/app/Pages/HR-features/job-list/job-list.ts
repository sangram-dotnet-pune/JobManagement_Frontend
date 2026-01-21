import { Component, EventEmitter, Output, signal } from '@angular/core';
import { HrJob, Job } from '../../../core/Interface/Job/Job';
import { CommonModule } from '@angular/common';
import { forkJoin, map, switchMap } from 'rxjs';
import { JobApiService } from '../../../core/Services/api.Service/Job.api.Service/job.api.service';

@Component({
  selector: 'app-job-list',
  imports: [CommonModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList {

  constructor(private JobApiService: JobApiService) {}

  @Output() jobSelected = new EventEmitter<number>();

  jobs = signal<HrJob[]>([]);
  selectedJobId: number | null = null; // ⭐ added

  ngOnInit(): void {
    this.loadHrJobs();
  }

  loadHrJobs() {
    this.JobApiService.getAllJobs().pipe(
      switchMap((jobs: Job[]) => {
        const requests = jobs.map(job =>
          this.JobApiService.getApplicationsByJobId(job.id.toString()).pipe(
            map(applications => ({
              id: job.id,
              title: job.title,
              location: job.location ?? 'N/A',
              applicationsCount: applications.length
            }))
          )
        );
        return forkJoin(requests);
      })
    ).subscribe({
      next: (hrJobs: HrJob[]) => {
        this.jobs.set(hrJobs);
      },
      error: err => {
        console.error('Failed to load HR jobs', err);
      }
    });
  }

  expireJob(jobId: number) {
    if (!confirm('Are you sure you want to expire this job?')) {
      return;
    }

    this.JobApiService.deleteJob(jobId).subscribe({
      next: () => {
        this.loadHrJobs();
        if (this.selectedJobId === jobId) {
          this.selectedJobId = null;
        }
      },
      error: () => {
        alert('Failed to expire job');
      }
    });
  }

  selectJob(jobId: number) {
    this.selectedJobId = jobId;  
    this.jobSelected.emit(jobId);
  }
}
