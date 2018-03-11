import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';
import { EmployeeDetailComponent } from './employeedetail/employeedetail.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'home',component:AppComponent},  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manageemployee',     component: ManageemployeeComponent },  
  { path: 'empdetail',     component: EmployeeDetailComponent } ,
  { path: 'userdetail', component:UserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
