import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { HomeComponent } from './home/home.component';
import { SubmitImageComponent } from './submit-image/submit-image.component';
import { PrimaryCareComponent } from './primary-care/primary-care.component';
import { ManagementComponent } from './reports/management/management.component';
import { AccountInfoComponent } from './account-info/account-info.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'forgotpwd',
    component: ForgotpwdComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'submit-image',
    component: SubmitImageComponent
  },
  {
    path: 'primary',
    component: PrimaryCareComponent
  },
  {
    path: 'reports',
    children: [
      {
        path: 'mgmt',
        component: ManagementComponent
      }
    ]
  },
  {
    path: 'mnt/user',
    component: AccountInfoComponent
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
