import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { PersonService } from './service/person.service';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { ManagepersonComponent } from './manageperson/manageperson.component';
import { UpdatepersonComponent } from './updateperson/updateperson.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './authentication/auth.service';
import { AuthGuardService } from './authentication/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewdetailComponent,
    AddpersonComponent,
    ManagepersonComponent,
    UpdatepersonComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
        PersonService,
        AuthService,
        AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
