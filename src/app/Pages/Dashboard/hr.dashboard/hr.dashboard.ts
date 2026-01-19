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
   { label: 'Jobs', icon: '💼', route: '/hrDashboard/jobs' },

 
  { label: 'Profile', icon: '👤', route: '/hrDashboard/profile' },
  { label: 'Notifications', icon: '🔔', route: '/hrDashboard/notifications' },
  { label: 'Logout', icon: '🚪', action: 'logout' }
];
}
