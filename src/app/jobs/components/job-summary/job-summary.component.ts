import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'job-summary',
  imports: [],
  templateUrl: './job-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobSummaryComponent { }
