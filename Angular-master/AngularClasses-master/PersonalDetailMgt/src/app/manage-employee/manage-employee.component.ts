import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  selectedEmp:Employee = new Employee();
  empNameList : string[] = ["keyur","denish","vnit"]; 

  employees : Employee[]= [
    {
    "empId":27,
    "name":"keyur",
    "city":"navsari",
    "mobileNo":"7387029671",
    "deptName":"IT"
    },
    {
    "empId":26,
    "name":"denish",
    "city":"surat",
    "mobileNo":"7387029123",
    "deptName":"IT"
    },
    {
    "empId":44,
    "name":"vnit",
    "city":"bardoli",
    "mobileNo":"7387029121",
    "deptName":"SALES"
    }
];

  constructor() { }

  ngOnInit() {
    console.log("Hi...");
  }

  selectedEmployee(emp:Employee):void{
    this.selectedEmp = emp;
    console.log("Hi...How Are You? "+emp.name);
  }
  sayHello():void{
    console.log("Hi...");
  }
}
