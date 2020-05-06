import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { FormLoginComponent } from './pages/auth/login/form-login/form-login.component';
import { FormRegisterComponent } from './pages/auth/login/form-register/form-register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', component: LoginComponent,
    children: [
      {path: '', component: FormLoginComponent},
      {path: 'register', component: FormRegisterComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
