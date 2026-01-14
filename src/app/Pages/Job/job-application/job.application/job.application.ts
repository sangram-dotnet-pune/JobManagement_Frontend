import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../../../core/Interface/Job/Job';
import { JobApiService } from '../../../../core/Services/api.Service/Job.api.Service/job.api.service';
import { CurrencyPipe, CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-job.application',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, DatePipe, ReactiveFormsModule],
  templateUrl: './job.application.html',
  styleUrl: './job.application.css',
})
export class JobApplication implements OnInit {
  // Define Signals
  job = signal<Job | null>(null);
  isLoading = signal<boolean>(true);
  errorMessage = signal<string | null>(null);

  applyForm: FormGroup;

  constructor(
    private router: Router,
    private jobService: JobApiService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.applyForm = this.fb.group({
      applicantName: ['', Validators.required],
      applicantEmail: ['', [Validators.required, Validators.email]],
      resumeLink: ['', Validators.required],
      coverLetter: ['']
    });
  }

  ngOnInit(): void {
    const jobId = this.activeRoute.snapshot.paramMap.get('id');

    if (jobId) {
      this.jobService.getJobById(jobId).subscribe({
        next: (data) => {
          this.job.set(data); // Updating the signal
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error fetching job', err);
          this.errorMessage.set('Could not load job details.');
          this.isLoading.set(false);
        }
      });
    }
  }

  onSubmitApplication() {
    if (this.applyForm.valid) {
      const applicationData = {
        jobId: this.job()?.id,
        ...this.applyForm.value
      };
      console.log('Submitting Application:', applicationData);
      // Call your submission service here
    }
  }
}