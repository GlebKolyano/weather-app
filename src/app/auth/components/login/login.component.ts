import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  public isLoggedIn(): BehaviorSubject<boolean> {
    return this.authService.authState$;
  }

  public signOut() {
    this.authService.signOut();
  }

  public signIn() {
    this.authService.signIn();
  }
}
