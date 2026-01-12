import { Component } from '@angular/core';
import { JobListing } from '../../Job/job-listing/job-listing';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../../Shared/components/sidebar/sidebar';

@Component({
  selector: 'app-applicant.dashboard',
  imports: [JobListing,RouterOutlet,Sidebar],
  templateUrl: './applicant.dashboard.html',
  styleUrl: './applicant.dashboard.css',
})
export class ApplicantDashboard {

  sidebarItems = [
  { label: 'Job Listings', icon: '💼', route: '/applicantDashboard/jobs' },
  { label: 'Applied Jobs', icon: '✅', route: '/applicantDashboard/applied' },
  { label: 'Saved Jobs', icon: '🔖', route: '/applicantDashboard/saved' },
  { label: 'Profile', icon: '👤', route: '/applicantDashboard/profile' },
  { label: 'Notifications', icon: '🔔', route: '/applicantDashboard/notifications' },
  { label: 'Logout', icon: '🚪', action: 'logout' }
];

}
