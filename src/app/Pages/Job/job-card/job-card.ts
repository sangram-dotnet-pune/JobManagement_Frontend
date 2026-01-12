import { Component, Input } from '@angular/core';
import { Job } from '../../../core/Interface/Job/Job';
import { CommonModule, CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-job-card',
   standalone: true,   
  imports: [CurrencyPipe,DatePipe,JsonPipe,CommonModule],
  templateUrl: './job-card.html',
  styleUrl: './job-card.css',
})
export class JobCard {


   @Input() job!: Job;


  
}
