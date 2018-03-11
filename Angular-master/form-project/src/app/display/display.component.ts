import { Component, OnInit } from '@angular/core';
import {Data} from './data';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  data : Data = new Data();
  
  dataArray: Data[]= [];

  constructor() { }

  onSave(name : string, mobileNo: string ){
    this.data.name = name;
    this.data.mobile = mobileNo;
    this.dataArray.push(this.data);
  }

  ngOnInit() {
  }

}
