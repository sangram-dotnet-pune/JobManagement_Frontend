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
  {
    label: 'Job Listings',
    icon: 'work',
    iconClass: 'icon-primary',
    route: '/applicantDashboard/jobs'
  },
  {
    label: 'Applied Jobs',
    icon: 'check_circle',
    iconClass: 'icon-primary',
    route: '/applicantDashboard/applied'
  },
  {
    label: 'Saved Jobs',
    icon: 'bookmark',
    iconClass: 'icon-secondary',
    route: '/applicantDashboard/saved'
  },
  {
    label: 'Profile',
    icon: 'person',
    iconClass: 'icon-info',
    route: '/applicantDashboard/profile'
  },
  {
    label: 'Notifications',
    icon: 'notifications',
    iconClass: 'icon-secondary',
    route: '/applicantDashboard/notifications'
  },
  {
    label: 'Logout',
    icon: 'logout',
    iconClass: 'icon-muted',
    action: 'logout'
  }
];


}
