import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JobInterface } from '../models/job.model';
import jobsData from './data/data-jobs.json';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {}

  // getJobs(): Observable<JobInterface[]> {
  //   return of(jobsData as JobInterface[]);
  // }

  getJobs(title?: string, location?: string, modality?: number, experience?: number): Observable<JobInterface[]> {
    let filteredJobs = jobsData as JobInterface[];

    if (title) {
      filteredJobs = filteredJobs.filter(job => job.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (location) {
      filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
    }

    if (modality) {
      filteredJobs = filteredJobs.filter(job => job.work_modality_id === modality);
    }

    if (experience !== undefined) {
      filteredJobs = filteredJobs.filter(job => job.years_experience === experience);
    }

    return of(filteredJobs);
  }

}
