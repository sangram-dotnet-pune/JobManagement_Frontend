import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobApiService } from '../../../core/Services/api.Service/Job.api.Service/job.api.service';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-application.html',
  styleUrl: './create-application.css'
})
export class CreateJob {

  jobForm: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private jobService: JobApiService,
    private router: Router
  ) {
    
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      employmentType: ['', Validators.required],
      minSalary: ['', Validators.required],
      maxSalary: ['', Validators.required],
    });
  }

  submitJob(): void {
    if (this.jobForm.invalid) return;

    this.loading = true;

    const payload = {
      title: this.jobForm.value.title,
      description: this.jobForm.value.description,
      location: this.jobForm.value.location,
      employmentType: this.jobForm.value.employmentType,
      minSalary: Number(this.jobForm.value.minSalary),
      maxSalary: Number(this.jobForm.value.maxSalary),
    };

    this.jobService.postJob(payload).subscribe({
      next: () => {
        this.loading = false;
        
        this.router.navigate(['/hrDashboard/jobs']);
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Failed to create job. Please try again.';
      }
    });
  }
}
