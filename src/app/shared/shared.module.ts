import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserGuideComponent } from './components/user-guide/user-guide.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { ErrorBoxComponent } from './components/error-box/error-box.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    SafehtmlPipe,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    UserGuideComponent,
    MessageBoxComponent,
    ErrorBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [BsModalService],
  exports: [
    TranslateModule,
    SafehtmlPipe,
    HeaderComponent,
  ]
})
export class SharedModule { }


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/');
}