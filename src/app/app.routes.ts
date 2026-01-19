import { Routes } from '@angular/router';


import { AuthLogin } from './Pages/Auth/auth.login/auth.login';
import { AuthRegister } from './Pages/Auth/auth.register/auth.register';
import { ApplicantDashboard } from './Pages/Dashboard/applicant.dashboard/applicant.dashboard';
import { JobListing } from './Pages/Job/job-listing/job-listing';
import { ApplicantProfile } from './Pages/Dashboard/applicant.profile/applicant.profile';
import { JobApplication } from './Pages/Job/job-application/job.application/job.application';
import { AppliedJobs } from './Pages/Job/AppliedJobs/appliedjobs';
import { HrDashboard } from './Pages/Dashboard/hr.dashboard/hr.dashboard';
import { JobPage } from './Pages/HR-features/job-page/job-page';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: AuthLogin },
  { path: 'register', component: AuthRegister },

  {
    path: 'applicantDashboard',
    component: ApplicantDashboard,
    children: [
      { path: 'jobs', component: JobListing },
      { path: 'profile', component: ApplicantProfile },

     
      { path: 'applied', component: AppliedJobs }
    ]
    },{
       path:'hrDashboard',component:HrDashboard,
       children:[
       { path: 'jobs', component: JobPage }, 
      {path: 'profile',component:ApplicantProfile}
       ]
    },
    
    { path: 'apply/:id', component: JobApplication }
];
