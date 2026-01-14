import { Component, OnInit } from '@angular/core';
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

  profile: UserSummary=null!;
  loading = true;
  errorMessage = '';

  constructor(private UserApiService: UserApiService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.UserApiService.getProfile().subscribe({
      next: (res) => {
        this.profile = res;
        this.loading = false;
        console.log(this.profile);
      },
      error: () => {
        this.errorMessage = 'Unable to load profile details';
        this.loading = false;
      }
    });
  }
}
