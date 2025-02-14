import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobSummaryComponent } from '../job-summary/job-summary.component';

@Component({
  selector: 'job-detail',
  imports: [JobSummaryComponent],
  templateUrl: './job-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobDetailComponent { }
