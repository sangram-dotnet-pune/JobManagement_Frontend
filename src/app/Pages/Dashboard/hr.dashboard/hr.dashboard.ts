import { Component } from '@angular/core';
import { Sidebar } from '../../../Shared/components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hr.dashboard',
  imports: [Sidebar,RouterOutlet,CommonModule],
  templateUrl: './hr.dashboard.html',
  styleUrl: './hr.dashboard.css',
})
export class HrDashboard {

  sidebarItems = [
  {
    label: 'Jobs',
    icon: 'work_outline',
    iconClass: 'icon-primary',
    route: '/hrDashboard/jobs'
  },
  {
    label: 'Post a Job',
    icon: 'post_add',
    iconClass: 'icon-success',
    route: '/hrDashboard/postJob'
  },
  {
    label:'shortlisted',
    icon:'check_circle',
    route:'/hrDashboard/shortlisted',
  },
  {
    label: 'Profile',
    icon: 'person_outline',
    iconClass: 'icon-info',
    route: '/hrDashboard/profile'
  },
  {
    label: 'Notifications',
    icon: 'notifications_none',
    iconClass: 'icon-secondary',
    route: '/hrDashboard/notifications'
  },
  {
    label: 'Logout',
    icon: 'logout',
    iconClass: 'icon-muted',
    action: 'logout'
  }
];

}
