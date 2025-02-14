export interface JobInterface {
  job_id: number;
  code: string;
  title: string;
  company: string;
  company_image: string;
  url: string;
  description: string;
  posted_date: string;
  expiration_date: string;
  keyword: string;
  job_source_id: number;
  job_category_id: number;
  work_modality_id: number;
  country_id: number;
  location: string;
  salary_min: number | null; // Permitir null si es necesario
  salary_max: number | null; // Permitir null si es necesario
  currency_type: string;
  years_experience: number;
  job_seniority_id: number;
  job_type_id: number;
  technical_skills: string;
  is_processed: boolean;
  created_at: string;
}
