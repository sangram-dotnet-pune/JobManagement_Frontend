export interface ApplicationResponse {
  id: number;
  jobId: number;
  applicantId: number;
  resumeUrl?: string;
  coverLetter?: string;
  status: string;
  appliedAt: Date;
  updatedAt?: Date;
  applicantName: string;
  applicantEmail: string;
  phone: string;
  address: string;
  graduationYear: number;
  qualification: string;
}