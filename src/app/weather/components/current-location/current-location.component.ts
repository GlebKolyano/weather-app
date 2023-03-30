import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLocation } from '../../store/selectors/location.selectors';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentLocationComponent {
  public location$ = this.store.select(selectLocation);
  constructor(private store: Store) {}
}
