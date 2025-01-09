import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafehtmlPipe } from '../safehtml.pipe';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [SafehtmlPipe, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SafehtmlPipe,
    HeaderComponent
  ]
})
export class SharedModule { }
