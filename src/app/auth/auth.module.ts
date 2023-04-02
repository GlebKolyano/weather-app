import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { MatButtonModule } from '@angular/material/button';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule,
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
