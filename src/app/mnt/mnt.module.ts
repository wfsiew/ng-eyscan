import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from '../shared/shared.module';

import { MntRoutingModule } from './mnt-routing.module';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CompanyComponent } from './company/company.component';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { PrimaryScreenersComponent } from './accounts/primary-screeners/primary-screeners.component';
import { SecondaryGradersComponent } from './accounts/secondary-graders/secondary-graders.component';
import { PrimarySecondaryUserComponent } from './accounts/primary-secondary-user/primary-secondary-user.component';
import { AdminUserComponent } from './accounts/admin-user/admin-user.component';
import { AccountsCreateComponent } from './accounts/accounts-create/accounts-create.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationCreateComponent } from './application/application-create/application-create.component';
import { LanguageComponent } from './lookup/language/language.component';
import { PatientRaceComponent } from './lookup/patient-race/patient-race.component';
import { VisualAcuityComponent } from './lookup/visual-acuity/visual-acuity.component';
import { VunoFundusComponent } from './lookup/vuno-fundus/vuno-fundus.component';
import { LookupCreateComponent } from './lookup/lookup-create/lookup-create.component';
import { SystemComponent } from './system-param/system/system.component';
import { SysApplicationComponent } from './system-param/sys-application/sys-application.component';
import { SysApplicationCreateComponent } from './system-param/sys-application/sys-application-create/sys-application-create.component';
import { SystemCreateComponent } from './system-param/system/system-create/system-create.component';


@NgModule({
  declarations: [
    AccountInfoComponent,
    CompanyComponent,
    CompanyCreateComponent,
    PrimaryScreenersComponent,
    SecondaryGradersComponent,
    PrimarySecondaryUserComponent,
    AdminUserComponent,
    AccountsCreateComponent,
    ApplicationComponent,
    ApplicationCreateComponent,
    LanguageComponent,
    PatientRaceComponent,
    VisualAcuityComponent,
    VunoFundusComponent,
    LookupCreateComponent,
    SystemComponent,
    SysApplicationComponent,
    SysApplicationCreateComponent,
    SystemCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MntRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MntModule { }
