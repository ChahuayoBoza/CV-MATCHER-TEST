import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JobSummaryComponent } from '../job-summary/job-summary.component';
import { JobInterface } from '../../models/job.model';

@Component({
  selector: 'job-detail',
  imports: [JobSummaryComponent],
  templateUrl: './job-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobDetailComponent {



}
