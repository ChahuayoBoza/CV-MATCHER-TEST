import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'jobs-search',
  templateUrl: './jobs-search.component.html',
  // styleUrls: ['./jobs-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsSearchComponent {
  searchTitle: string = '';
  searchLocation: string = '';

  @Output() search = new EventEmitter<{ title: string, location: string }>();

  onSearch() {
    // this.search.emit({ title: this.searchTitle, location: this.searchLocation });
    
  }
}
