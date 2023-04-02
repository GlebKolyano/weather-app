import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GoogleEnv } from 'src/app/constants/google-env';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, getAuth, signInWithPopup } from '@angular/fire/auth';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LocalStorageFieldNames } from 'src/app/core/constants/local-storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserAuthorized$ = new BehaviorSubject<boolean>(this.isTokenExist());

  constructor(private fireauth: AngularFireAuth, private localService: LocalStorageService) {}

  public get accessToken(): string {
    return this.localService.get(LocalStorageFieldNames.token);
  }

  public isAuthorized(): Observable<boolean> {
    return this.isUserAuthorized$.asObservable();
  }

  private isTokenExist(): boolean {
    return this.localService.exists(LocalStorageFieldNames.token);
  }

  public async signOut() {
    await this.fireauth.signOut();
    this.localService.remove(LocalStorageFieldNames.token);
    this.isUserAuthorized$.next(false);
  }

  public async signIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    provider.addScope(GoogleEnv.SCOPES);

    const response = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential?.accessToken;

    this.localService.set(LocalStorageFieldNames.token, JSON.stringify(token));
    this.isUserAuthorized$.next(true);
  }
}
