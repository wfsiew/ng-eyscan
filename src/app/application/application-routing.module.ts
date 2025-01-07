import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitImageComponent } from './submit-image/submit-image.component';
import { PrimaryCareComponent } from './primary-care/primary-care.component';
import { ManagementComponent } from './reports/management/management.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
