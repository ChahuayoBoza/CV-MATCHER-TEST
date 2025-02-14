import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { JobsListComponent } from "../../jobs/components/jobs-list/jobs-list.component";
import { JobsSearchComponent } from "../../jobs/components/jobs-search/jobs-search.component";
import { JobSummaryComponent } from "../../jobs/components/job-summary/job-summary.component";
import { JobDetailComponent } from '../../jobs/components/job-detail/job-detail.component';

@Component({
  imports: [JobsListComponent, JobsSearchComponent, JobDetailComponent],
  templateUrl: './jobs-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NamePageComponent {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() : void {
    this.title.setTitle('Jobs Page');
    this.meta.updateTag({ name: 'JobsPage', content: 'Jose David Chahuayo Boza' });
    this.meta.updateTag({ name: 'og:title', content: 'Jose David Chahuayo Boza' });
  }

}
