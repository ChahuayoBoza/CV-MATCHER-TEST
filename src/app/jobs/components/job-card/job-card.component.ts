import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';
import { JobInterface } from '../../models/job.model';

@Component({
  selector: 'job-card',
  imports: [],
  templateUrl: './job-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent {

  public job = input.required<JobInterface>();

}
