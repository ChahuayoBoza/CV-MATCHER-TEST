import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobSummaryComponent } from "../job-summary/job-summary.component";

@Component({
  selector: 'jobs-list',
  imports: [JobSummaryComponent],
  templateUrl: './jobs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsListComponent { }
