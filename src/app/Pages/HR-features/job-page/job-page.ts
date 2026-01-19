import { Component, EventEmitter, Output } from '@angular/core';
import { HrJob } from '../../../core/Interface/Job/Job';
import { JobList } from '../job-list/job-list';
import { ApplicantList } from '../applicant-list/applicant-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-page',
  imports: [JobList,ApplicantList,CommonModule],
  templateUrl: './job-page.html',
  styleUrl: './job-page.css',
})
export class JobPage {

    selectedJobId!: number;

  onJobSelected(jobId: number) {
    this.selectedJobId = jobId;
  }
}
