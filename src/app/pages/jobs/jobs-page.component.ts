import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { JobsListComponent } from "../../jobs/components/jobs-list/jobs-list.component";
import { JobsSearchComponent } from "../../jobs/components/jobs-search/jobs-search.component";
import { JobSummaryComponent } from "../../jobs/components/job-summary/job-summary.component";
import { JobInterface } from '../../jobs/models/job.model';
import jobsData from '../../jobs/services/data/data-jobs.json';

@Component({
  imports: [JobsListComponent, JobsSearchComponent, JobSummaryComponent],
  templateUrl: './jobs-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class JobsPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  jobs: JobInterface[] = jobsData as JobInterface[];
  filteredJobs: JobInterface[] = this.jobs;

  ngOnInit(): void {
    this.title.setTitle('Jobs Page');
    this.meta.updateTag({ name: 'JobsPage', content: 'Jose David Chahuayo Boza' });
    this.meta.updateTag({ name: 'og:title', content: 'Jose David Chahuayo Boza' });

    console.log(this.jobs);
  }

  onSearch(criteria: { title: string, location: string }) {
    this.filteredJobs = this.jobs.filter(job =>
      job.title.includes(criteria.title) && job.location.includes(criteria.location)
    );
  }

}
