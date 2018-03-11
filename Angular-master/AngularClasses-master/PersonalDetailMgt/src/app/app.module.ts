import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { EducationComponent } from './education/education.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddressComponent,
    EducationComponent,
    ProfessionalComponent,
    ManageEmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
