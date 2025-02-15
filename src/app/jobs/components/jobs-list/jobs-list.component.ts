import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JobCardComponent } from "../job-card/job-card.component";
import { JobInterface } from '../../models/job.model';

@Component({
  selector: 'jobs-list',
  imports: [JobCardComponent],
  templateUrl: './jobs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsListComponent {

  public jobs = input.required<JobInterface[]>();
}
