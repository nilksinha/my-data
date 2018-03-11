import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InquiryComponent]
})
export class AppModule { }
