import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';
import { EmployeeDetailComponent } from './employeedetail/employeedetail.component';
import { AppRoutingModule } from './app.routing';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageemployeeComponent,
    EmployeeDetailComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
