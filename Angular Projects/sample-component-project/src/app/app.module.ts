import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SucessComponentComponent } from './sucess-component/sucess-component.component';
import { FailureComponentComponent } from './app-failure.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessComponentComponent,
    FailureComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,FailureComponentComponent ]
})
export class AppModule { }
