import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiService } from '../../../core/Services/api.Service/User.api.Service/user.api.service';
import { UserSummary } from '../../../core/Interface/Job/UserSummary';

@Component({
  selector: 'app-applicant-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applicant.profile.html',
  styleUrls: ['./applicant.profile.css']
})
export class ApplicantProfile implements OnInit {

 
  profile = signal<UserSummary | null>(null);
  loading = signal<boolean>(true);
  errorMessage = signal<string>('');

  constructor(private userApiService: UserApiService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.userApiService.getProfile().subscribe({
      next: (res) => {
        this.profile.set(res);          
        this.loading.set(false);
        console.log(this.profile());
      },
      error: () => {
        this.errorMessage.set('Unable to load profile details');
        this.loading.set(false);
      }
    });
  }
}
