import { Component, Inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppliedJob } from '../../../core/Interface/Job/AppliedJob';
import { ApplicationApiService } from '../../../core/Services/api.Service/Application.api.Service/application.api.service';


@Component({
  selector: 'app-applied-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appliedjobs.html',
  styleUrl: './appliedjobs.css'
})
export class AppliedJobs implements OnInit {

  appliedJobs = signal<AppliedJob[]>([]);
  loading = signal<boolean>(true);
  errorMessage = signal<string | null>(null);

  constructor(
    
    private applicationService: ApplicationApiService
  ) {}

  ngOnInit(): void {
    this.fetchAppliedJobs();
  }

  private fetchAppliedJobs(): void {
    this.loading.set(true);

    this.applicationService.getAppliedJobs().subscribe({
      next: (res: AppliedJob[]) => {
        this.appliedJobs.set(res);
        this.loading.set(false);
      
      },
      error: () => {
        this.errorMessage.set('Unable to load applied jobs.');
        this.loading.set(false);
      }
    });
  }
}
