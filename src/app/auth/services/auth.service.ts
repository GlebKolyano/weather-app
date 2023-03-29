import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GoogleEnv } from 'src/app/constants/googleEnv';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, getAuth, signInWithPopup } from '@angular/fire/auth';
import { LocalService } from 'src/app/core/services/local.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authState$ = new BehaviorSubject<boolean>(this.isAuthorized());

  constructor(private fireauth: AngularFireAuth, private localService: LocalService) {}

  public get accessToken(): string {
    return this.localService.get('token');
  }

  private isAuthorized(): boolean {
    return this.localService.exists('token');
  }

  public async signOut() {
    await this.fireauth.signOut();
    this.localService.remove('token');
    this.authState$.next(false);
  }

  public async signIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    provider.addScope(GoogleEnv.SCOPES);

    const response = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential!.accessToken;

    this.localService.set('token', JSON.stringify(token));
    this.authState$.next(true);
  }
}
