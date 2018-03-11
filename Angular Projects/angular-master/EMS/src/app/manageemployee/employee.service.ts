import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { employeeList } from './employeedata.mock';

@Injectable()
export class EmployeeService {
  getEmployeeList(): Promise<Employee[]> {
    return Promise.resolve(employeeList);
  }
}