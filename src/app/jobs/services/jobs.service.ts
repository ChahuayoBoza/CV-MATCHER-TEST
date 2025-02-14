import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobInterface } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private dataUrl = '/data/jobs.json';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<JobInterface[]> {
    return this.http.get<JobInterface[]>(this.dataUrl);
  }
}
