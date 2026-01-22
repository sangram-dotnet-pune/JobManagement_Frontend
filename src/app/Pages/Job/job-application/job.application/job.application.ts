import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../../../core/Interface/Job/Job';
import { JobApiService } from '../../../../core/Services/api.Service/Job.api.Service/job.api.service';
import { ApplicationApiService } from '../../../../core/Services/api.Service/Application.api.Service/application.api.service';
import { CurrencyPipe, CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/Services/Auth.Service/auth.service';

@Component({
  selector: 'app-job.application',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, DatePipe, ReactiveFormsModule],
  templateUrl: './job.application.html',
  styleUrl: './job.application.css',
})
export class JobApplication implements OnInit {
  job = signal<Job | null>(null);
  isLoading = signal(true);
  errorMessage = signal<string | null>(null);
  applyError = signal<string | null>(null);

  applyForm: FormGroup;

  constructor(
    private router: Router,
    private jobService: JobApiService,
    private applicationService: ApplicationApiService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.authService.setLogoutDisabled(true);
    this.applyForm = this.fb.group({
      applicantName: ['', Validators.required],
      applicantEmail: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      graduationYear: ['', Validators.required],
      qualification: ['', Validators.required],
      resumeLink: ['', Validators.required],
      coverLetter: [''],
    });
  }

  ngOnInit(): void {
    const jobId = this.activeRoute.snapshot.paramMap.get('id');

    if (jobId) {
      this.jobService.getJobById(jobId).subscribe({
        next: (data) => {
          this.job.set(data);
          this.isLoading.set(false);
        },
        error: () => {
          this.errorMessage.set('Could not load job details.');
          this.isLoading.set(false);
        },
      });
    }
  }
  onDestroy(): void {
    this.authService.setLogoutDisabled(false);
  }

  onSubmitApplication(): void {
    if (this.applyForm.invalid || !this.job()) return;
    this.applyError.set(null);

    const payload = {
      jobId: this.job()!.id,
      applicantName: this.applyForm.value.applicantName,
      applicantEmail: this.applyForm.value.applicantEmail,
      phone: this.applyForm.value.phone,
      address: this.applyForm.value.address,
      graduationYear: Number(this.applyForm.value.graduationYear),
      qualification: this.applyForm.value.qualification,
      resumeLink: this.applyForm.value.resumeLink,
      coverLetter: this.applyForm.value.coverLetter,
    };

    this.applicationService.applyJob(payload).subscribe({
      next: () => {
        
        this.router.navigate(['/applicantDashboard/applied']);
      },
      error: (err) => {
        console.error(err);

        if (err?.error?.message) {
          this.applyError.set(err.error.message);
        } else {
          this.applyError.set('Failed to apply for job. Please try again.');
        }
      },
    });
  }
  onCancel(): void {
    window.close();
  }
}
