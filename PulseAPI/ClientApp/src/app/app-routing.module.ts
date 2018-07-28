import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { LoginRealComponent } from './account/login-real/login-real.component';
import { RegisterAccountComponent } from './account/registration-account/registration-account.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent,canActivate: [AuthGuard] },
      {path:  'create-certificate', component : CreateCertificateComponent},
      {path:  'users', component : UsersComponent}
    ]
  },
  { path: 'login', component: LoginFormComponent},
  {path: 'login-real',component : LoginRealComponent},
  {path:'register', component : RegisterAccountComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
