import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MntRoutingModule } from './mnt-routing.module';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CompanyComponent } from './company/company.component';
import { PrimaryScreenersComponent } from './accounts/primary-screeners/primary-screeners.component';
import { SecondaryGradersComponent } from './accounts/secondary-graders/secondary-graders.component';
import { PrimarySecondaryUserComponent } from './accounts/primary-secondary-user/primary-secondary-user.component';
import { AdminUserComponent } from './accounts/admin-user/admin-user.component';
import { ApplicationComponent } from './application/application.component';
import { LookupComponent } from './lookup/lookup.component';
import { SystemComponent } from './system-param/system/system.component';
import { SysApplicationComponent } from './system-param/sys-application/sys-application.component';


@NgModule({
  declarations: [
    AccountInfoComponent,
    CompanyComponent,
    PrimaryScreenersComponent,
    SecondaryGradersComponent,
    PrimarySecondaryUserComponent,
    AdminUserComponent,
    ApplicationComponent,
    LookupComponent,
    SystemComponent,
    SysApplicationComponent
  ],
  imports: [
    CommonModule,
    MntRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MntModule { }
