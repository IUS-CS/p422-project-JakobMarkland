import { Injectable } from '@angular/core';

export class Employee {
  employeeId: number;
  name: string;
  manager: string;
  department: string;
  payrate: number;
  ssn: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private employees: Employee[] = [
    {
      employeeId: 2119250,
      name: 'Jakob Markland',
      manager: 'Jeff Doe',
      department: 'Manufacturing',
      payrate: 15.75,
      ssn: 300301234
    },
    {
      employeeId: 2119251,
      name: 'Conner Mayfield',
      manager: 'Jeff Doe',
      department: 'Manufacturing',
      payrate: 17.20,
      ssn: 207831642
    },
    {
      employeeId: 2119252,
      name: 'Bobby Johnson',
      manager: 'Mark Smith',
      department: 'Inspection',
      payrate: 13.60,
      ssn: 378103833
    },
    {
      employeeId: 2119253,
      name: 'Amy Fox',
      manager: 'Mark Smith',
      department: 'Accounting',
      payrate: 17.35,
      ssn: 194500157
    },
    {
      employeeId: 2119254,
      name: 'Jane Newman',
      manager: 'Martha Madow',
      department: 'Accounting',
      payrate: 18.85,
      ssn: 401237810
    }
  ];

  constructor() { }

  public getEmployeeId(employeeId: number): Employee {
    const res = this.employees.find(c => c.employeeId === employeeId);
    if (!res) {
      return null;
    }
    return res;
  }
}
