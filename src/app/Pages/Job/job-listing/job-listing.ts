import { Component, OnInit, signal } from '@angular/core';
import { JobApiService } from '../../../core/Services/api.Service/Job.api.Service/job.api.service';
import { Job } from '../../../core/Interface/Job/Job';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobCard } from '../job-card/job-card';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [CommonModule, JobCard, FormsModule],
  templateUrl: './job-listing.html',
  styleUrl: './job-listing.css',
})
export class JobListing implements OnInit {

  jobs = signal<Job[]>([]);
  isLoading = signal<boolean>(true);
  searchTerm: string = '';
locationTerm: string = '';
  filteredJobs: Job[] = [];
  constructor(private jobService: JobApiService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getAllJobs().subscribe({
      next: (jobs: Job[]) => {
        this.jobs.set(jobs);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  trackByJobId(index: number, job: Job) {
    return job.id;
  }


 
filterJobs() {
  const term = this.searchTerm.toLowerCase().trim();
  const location = this.locationTerm.toLowerCase().trim();

  this.filteredJobs = this.jobs().filter((job) =>
    (job.title.toLowerCase().includes(term) ||
     job.description.toLowerCase().includes(term)) &&
    job.location?.toLowerCase().includes(location)
  );
}
}
