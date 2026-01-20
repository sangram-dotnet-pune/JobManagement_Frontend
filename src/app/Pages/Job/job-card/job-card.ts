import { Component, Input } from '@angular/core';
import { Job } from '../../../core/Interface/Job/Job';
import { CommonModule, CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
   standalone: true,   
  imports: [CurrencyPipe,DatePipe,JsonPipe,CommonModule],
  templateUrl: './job-card.html',
  styleUrl: './job-card.css',
})
export class JobCard {


   @Input() job!: Job;

   constructor(private router: Router) {}

  onApply() {
    
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/apply', this.job.id])
    );

   
    window.open(url, '_blank');
  }
}
