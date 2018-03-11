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
  inquiry : Inquiry = new Inquiry();


  @ViewChild("name")
  name:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  saveInquiry(name:string,mobileNo:string,email:string,course:string){
    console.log("Hello:"+ name);
    console.log(this.name.nativeElement.value);
    this.inquiry.name = name;
    this.inquiry.mobileNo = mobileNo;
    this.inquiry.email = email;
    this.inquiry.course = course;
    this.inquiryList.push(this.inquiry);    
    this.name.nativeElement.value = '';
  }
  addNewFriend(friendName){
    console.log(friendName);
    this.friendsName.push(friendName);
  }
}
