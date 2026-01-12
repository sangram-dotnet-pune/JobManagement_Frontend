import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  @Input() sidebarItems: any[] = [];

  constructor(private router: Router) {}

   navigate(item: any) {
    if (item.action === 'logout') {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    } else if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  isActive(route: string): boolean {
   return this.router.isActive(route, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
   return this.router.url.startsWith(route); 
  }
}
