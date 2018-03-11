import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  sscPer: number =  72.14;
  hscPer: number = 66.50;
  graduationPer: number = 60.00;
  masterPer:number = 65.00;

  constructor() { }

  ngOnInit() {
  }

}
