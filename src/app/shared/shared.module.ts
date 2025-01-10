import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SafehtmlPipe } from '../safehtml.pipe';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserGuideComponent } from './user-guide/user-guide.component';



@NgModule({
  declarations: [SafehtmlPipe, HeaderComponent, AboutComponent, ContactComponent, UserGuideComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  providers: [BsModalService],
  exports: [
    SafehtmlPipe,
    HeaderComponent
  ]
})
export class SharedModule { }
