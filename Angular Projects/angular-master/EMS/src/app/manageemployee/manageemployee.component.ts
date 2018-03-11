import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-manageemployee',
  templateUrl: './manageemployee.component.html',
  styleUrls: ['./manageemployee.component.css'],
  providers: [EmployeeService]
})
export class ManageemployeeComponent implements OnInit {

  employeeList: Employee [];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList(): void {
     this.employeeService.getEmployeeList().then(
       employeeList => this.employeeList = employeeList);
  }


}
