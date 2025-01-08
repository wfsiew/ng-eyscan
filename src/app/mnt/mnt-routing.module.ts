import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CompanyComponent } from './company/company.component';
import { PrimaryScreenersComponent } from './accounts/primary-screeners/primary-screeners.component';
import { SecondaryGradersComponent } from './accounts/secondary-graders/secondary-graders.component';
import { PrimarySecondaryUserComponent } from './accounts/primary-secondary-user/primary-secondary-user.component';
import { AdminUserComponent } from './accounts/admin-user/admin-user.component';
import { ApplicationComponent } from './application/application.component';
import { LanguageComponent } from './lookup/language/language.component';
import { PatientRaceComponent } from './lookup/patient-race/patient-race.component';
import { VisualAcuityComponent } from './lookup/visual-acuity/visual-acuity.component';
import { VunoFundusComponent } from './lookup/vuno-fundus/vuno-fundus.component';
import { SystemComponent } from './system-param/system/system.component';
import { SysApplicationComponent } from './system-param/sys-application/sys-application.component';


const routes: Routes = [
  {
    path: 'user',
    component: AccountInfoComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'accounts',
    children: [
      {
        path: 'primary-screeners',
        component: PrimaryScreenersComponent
      },
      {
        path:'secondary-graders',
        component: SecondaryGradersComponent
      },
      {
        path: 'primary-secondary-user',
        component: PrimarySecondaryUserComponent
      },
      {
        path: 'admin-user',
        component: AdminUserComponent
      }
    ]
  },
  {
    path: 'application',
    component: ApplicationComponent
  },
  {
    path: 'lookup',
    children: [
      {
        path: 'language',
        component: LanguageComponent
      },
      {
        path: 'patient-race',
        component: PatientRaceComponent
      },
      {
        path: 'visual-acuity',
        component: VisualAcuityComponent
      },
      {
        path: 'vuno-fundus',
        component: VunoFundusComponent
      }
    ]
  },
  {
    path: 'system-param',
    children: [
      {
        path: 'system',
        component: SystemComponent
      },
      {
        path: 'application',
        component: SysApplicationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MntRoutingModule { }
