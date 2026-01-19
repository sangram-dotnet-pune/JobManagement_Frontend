import { UserSummary } from "./UserSummary";


export interface Job {
  id: number;
  title: string;
  description: string;
  location?: string;
  employmentType?: string;
  experienceLevel?: string;
  salaryMin?: number;
  salaryMax?: number;
  status: string;
  createdAt: string;  
  createdBy: UserSummary;
}

export interface HrJob {
  id: number;
  title: string;
  location: string;
  applicationsCount: number;
}


export interface JobApplication {
  id: number;
  applicantName: string;
  email: string;
  status: string;
}
