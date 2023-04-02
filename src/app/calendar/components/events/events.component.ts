import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { getEvents } from '../../store/events.actions';
import { selectEvents } from '../../store/events.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent implements OnInit {
  public events$ = this.store.select(selectEvents);

  constructor(private authService: AuthService, private store: Store) {}

  public ngOnInit(): void {
    this.authService.isUserAuthorized$.subscribe((isAuthorized) => {
      if (isAuthorized) this.store.dispatch(getEvents());
    });
  }

  public isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthorized();
  }
}
