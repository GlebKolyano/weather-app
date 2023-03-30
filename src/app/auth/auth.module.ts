import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './constants/firebase-config';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, HttpClientModule, AngularFireModule.initializeApp(firebaseConfig)],
  exports: [LoginComponent],
})
export class AuthModule {}
