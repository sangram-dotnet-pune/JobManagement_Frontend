import { CanActivateFn } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('role');
  
  if (!role || (role !== 'HR' && role !== 'APPLICANT')) {
    console.warn('Access denied - Users must be logged in to access this route.');
    return false;
  }


  if (role === 'HR' && state.url.includes('applicantDashboard')) {
    window.location.href = '/hrDashboard';
    return false;
  }

  if (role === 'APPLICANT' && state.url.includes('hrDashboard')) {
    window.location.href = '/applicantDashboard';
    return false;
  }

  return true;
};
