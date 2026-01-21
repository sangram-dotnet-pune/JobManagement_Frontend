import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../../core/Interface/Job/Job';
;

@Pipe({
  name: 'jobFilter',
  standalone: true
})
export class JobFilterPipe implements PipeTransform {

  transform(jobs: Job[], searchTerm: string): Job[] {
    if (!jobs || !searchTerm) {
      return jobs;
    }

    const term = searchTerm.toLowerCase().trim();

    return jobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.description.toLowerCase().includes(term) ||
      job.location?.toLowerCase().includes(term)
    );
  }
}
