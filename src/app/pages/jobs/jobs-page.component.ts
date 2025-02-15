import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { JobCardComponent } from "../../jobs/components/job-card/job-card.component";
import { JobsSearchComponent } from "../../jobs/components/jobs-search/jobs-search.component";
import { JobSummaryComponent } from "../../jobs/components/job-summary/job-summary.component";
import { JobInterface } from '../../jobs/models/job.model';
import jobsData from '../../jobs/services/data/data-jobs.json';
import { JobDetailComponent } from '../../jobs/components/job-detail/job-detail.component';
import { JobsListComponent } from '../../jobs/components/jobs-list/jobs-list.component';
import { JobsService } from '../../jobs/services/jobs.service';
import NamePageComponent from '../name/name-page.component';
import { ActivatedRoute, Router } from '@angular/router';


import {toSignal} from '@angular/core/rxjs-interop'
import { map } from 'rxjs';

@Component({
  imports: [JobsSearchComponent, JobDetailComponent, JobsListComponent, NamePageComponent],
  templateUrl: './jobs-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class JobsPageComponent implements OnInit {

  private jobsService = inject(JobsService);

  private title = inject(Title);
  private meta = inject(Meta);

  public jobs = signal<JobInterface[]>([]);

  public route = inject(ActivatedRoute);
  private router = inject(Router);

  public currentJob = toSignal(
    this.route.queryParamMap.pipe(
      map(params => params.get('title') ?? ''),
    )
  )

  // jobs: JobInterface[] = jobsData as JobInterface[];
  // filteredJobs: JobInterface[] = this.jobs;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(console.log)
    this.title.setTitle('Jobs Page');
    this.meta.updateTag({ name: 'JobsPage', content: 'Jose David Chahuayo Boza' });
    this.meta.updateTag({ name: 'og:title', content: 'Jose David Chahuayo Boza' });

    this.route.queryParams.subscribe(params => {
      const title = params['title'] || '';
      const location = params['location'] || '';
      const modality = params['modality'] || '';
      const experience = params['experience'] ? +params['experience'] : undefined;

      this.loadJobs(title, location, modality, experience);
    });

  }

  // updateUrlWithParams(title: string, location: string, modality: number, experience?: number) {
  //   this.router.navigate([], {
  //     relativeTo: this.route,
  //     queryParams: { title, location, modality, experience },
  //     queryParamsHandling: 'merge', // mantiene los parámetros existentes y agrega los nuevos
  //   });
  // }

  // onSearch(title: string, location: string, modality: number, experience?: number) {
  //   this.updateUrlWithParams(title, location, modality, experience);
  //   this.loadJobs(title, location, modality, experience);
  // }


  loadJobs(title?: string, location?: string, modality?: number, experience?: number) {
    this.jobsService.getJobs(title, location, modality, experience).subscribe(jobs => {
      this.jobs.set(jobs);
    });
  }
}
