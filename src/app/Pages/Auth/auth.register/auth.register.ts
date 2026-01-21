import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/Services/Auth.Service/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { noSpaceValidator, noSpecialCharValidator } from '../../../Shared/Validators/Username/username.validator';

@Component({
  selector: 'app-auth.register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './auth.register.html',
  styleUrl: './auth.register.css',
})
export class AuthRegister {


  constructor(private authService: AuthService,private router: Router){}
selectedRole = signal<number>(1);
isRegistered = signal<boolean>(false);
   registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2),noSpaceValidator,noSpecialCharValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });


  onSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.phone,
      this.selectedRole()
    ).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.isRegistered.set(true);
       
         setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
    
      },
      error: (error) => {
        console.error('Registration failed:', error);
      }
    });
  }



  setRole(role: number) {
    this.selectedRole.set(role);
  }
}
