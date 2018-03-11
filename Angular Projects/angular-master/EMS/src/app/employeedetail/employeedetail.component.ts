import { Component,OnInit } from '@angular/core';
import { Employee } from '../manageemployee/Employee';
import { Dept } from './dept';
export const DEPT :Dept[]=[{
    deptId:10,
    deptName:"IT"
},
{
    deptId:20,
    deptName:"SALES"
},
{
    deptId:30,
    deptName:"Purchase"
}
];

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

    newEmployee: Employee = new Employee(); 

    departments = DEPT;

    msg: string = 'test';
    submitted: boolean = false;
 


    ngOnInit() {
        this.newEmployee.empId = 123;
        this.newEmployee.name = 'Keyur';
        this.newEmployee.city = 'surat';
        this.newEmployee.mobileNo = '7387029671';
        console.log(this.departments);
    }
   

    save(): void {
        this.submitted = true;
        this.msg = 'save clicked';
    }


}