import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SharedModule } from 'src/app/shared/shared.module';

import { ApplicationRoutingModule } from './application-routing.module';
import { HomeComponent } from './home/home.component';
import { SubmitImageComponent } from './submit-image/submit-image.component';
import { PrimaryCareComponent } from './primary-care/primary-care.component';
import { SecondaryGraderComponent } from './secondary-grader/secondary-grader/secondary-grader.component';
import { SecondaryGraderQueueComponent } from './secondary-grader/secondary-grader-queue/secondary-grader-queue.component';
import { SecondaryGraderNonReferComponent } from './secondary-grader/secondary-grader-non-refer/secondary-grader-non-refer.component';
import { SecondaryGraderReferComponent } from './secondary-grader/secondary-grader-refer/secondary-grader-refer.component';
import { ManagementComponent } from './reports/management/management.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { GuideComponent } from './submit-image/guide/guide.component';
import { AcquireImageComponent } from './submit-image/acquire-image/acquire-image.component';


@NgModule({
  declarations: [
    HomeComponent,
    SubmitImageComponent,
    PrimaryCareComponent,
    SecondaryGraderComponent,
    SecondaryGraderQueueComponent,
    SecondaryGraderNonReferComponent,
    SecondaryGraderReferComponent,
    ManagementComponent,
    ManageDataComponent,
    GuideComponent,
    AcquireImageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    ModalModule,
    CarouselModule,
    CollapseModule,
  ],
  providers: [
    BsModalService
  ]
})
export class ApplicationModule { }
