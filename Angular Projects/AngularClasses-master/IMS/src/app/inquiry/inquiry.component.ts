import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Inquiry } from './inquiry';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  //Old way
  //inquiry = {name:"",mobileNo:"",email:"",course:""};
  friendsName : string[] = ["keyur","denish","vinit"];
  inquiryList : Inquiry[] = [];
  inquiry : Inquiry;

  

  constructor() { }

  ngOnInit() {
  }

  saveInquiry(name:string,mobileNo:string,email:string,course:string){
    console.log("Hello:"+ name);
    this.inquiry = new Inquiry();
    this.inquiry.name = name;
    this.inquiry.mobileNo = mobileNo;
    this.inquiry.email = email;
    this.inquiry.course = course;
    this.inquiryList.push(this.inquiry);    
  }
  addNewFriend(friendName){
    console.log(friendName);
    this.friendsName.push(friendName);
  }
}
