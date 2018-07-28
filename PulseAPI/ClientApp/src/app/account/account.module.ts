import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRealComponent } from './login-real/login-real.component';
import { RegisterAccountComponent } from './registration-account/registration-account.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, AppMaterialModule
  ],
  declarations: [
    RegisterAccountComponent,
    LoginRealComponent,
    LoginFormComponent]
})
export class AccountModule { }
