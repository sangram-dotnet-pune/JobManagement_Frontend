import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/Services/Auth.Service/auth.service';
import { LoginResponse } from '../../../core/Interface/Auth/LoginResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth.login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './auth.login.html',
  styleUrl: './auth.login.css',
})
export class AuthLogin {
  constructor(private authService: AuthService, private router: Router){}

   loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  loginResponse:LoginResponse={
     userId: 0,
    email: "",
    role: "",
    token: ""
  };

  onSubmit() {
   console.log(this.loginForm.value);
    this.authService.login(

      this.loginForm.value.email,
      this.loginForm.value.password,
  
    ).subscribe({
      next: (response) => {
      
        this.loginResponse = response;
        localStorage.setItem('token',   this.loginResponse.token);
        localStorage.setItem('role',   this.loginResponse.role);
        console.log('Login successful, token stored.',this.loginResponse);

        if(response.role === 'APPLICANT'){
          this.router.navigate(['/applicantDashboard']);
        }

        if(response.role === 'HR'){
          this.router.navigate(['/hrDashboard']);
        }
        
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
}
