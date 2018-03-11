import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service'
import { User } from '../authentication/user';

@Component({
   selector: 'logout',	
   template: `<button input='input' (click)="logout()">Logout</button>`
})
export class LogoutComponent implements OnInit{ 
    invalidCredentialMsg: string;
    loggedInUser: User;
    constructor(private authService: AuthService, private router: Router) {
    }
    ngOnInit() {
       this.loggedInUser = this.authService.getLoggedInUser();
    }		
    logout() {
       this.authService.logoutUser();
       this.router.navigate([ this.authService.getLoginUrl() ]);	
    }
} 