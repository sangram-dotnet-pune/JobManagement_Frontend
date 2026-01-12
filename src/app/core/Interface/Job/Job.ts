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
  createdAt: string;   // ISO string from backend
  createdBy: UserSummary;
}