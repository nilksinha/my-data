import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import {LoggingService} from '../services/logging.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  @ViewChild("f")
  frm:NgForm;
  isSubmitted:boolean = false;

  constructor(private logService:LoggingService) { }

  ngOnInit() {
    console.log("====when loaded==="+this.user);
    this.logService.logMessage("Inside Login Component");
  }

  login(){
    console.log(this.frm.value);
    this.isSubmitted = true;
    console.log("object value"+this.user.userName);
  }

}
