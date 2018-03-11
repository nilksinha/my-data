import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent }  from './home/home.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { AddpersonComponent }  from './addperson/addperson.component';
import { ManagepersonComponent }  from './manageperson/manageperson.component';
import { UpdatepersonComponent }  from './updateperson/updateperson.component';
import { AuthGuardService } from './authentication/auth-guard.service'; 
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
    {path: 'login',component: LoginComponent},    
    {path: 'home', component: HomeComponent},      
    {
          path: '',          
          canActivateChild: [ AuthGuardService ],
          children: [
          {
             path: 'viewdetail/:id',
             component: ViewdetailComponent
          }
        ]
    },
    { path: 'add-person', component: AddpersonComponent,canActivate: [ AuthGuardService ] },	
    { path: 'manage-person', component: ManagepersonComponent,canActivate: [ AuthGuardService ] },	
    { path: 'update-person/:id', component: UpdatepersonComponent }	
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ } 