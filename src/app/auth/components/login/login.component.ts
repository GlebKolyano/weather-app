import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  public isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthorized();
  }

  public signOut() {
    this.authService.signOut();
  }

  public signIn() {
    this.authService.signIn();
  }
}
