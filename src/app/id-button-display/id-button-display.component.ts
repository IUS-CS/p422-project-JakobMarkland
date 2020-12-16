import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../data/employee';
import { EMPLOYEES} from '../../data/employees';
import {EmployeeDataService} from '../employee-data.service';

@Component({
  selector: 'app-id-button-display',
  templateUrl: './id-button-display.component.html',
  styleUrls: ['./id-button-display.component.scss']
})
export class IdButtonDisplayComponent implements OnInit {
  EMPLOYEES = EMPLOYEES;
  selectedEmployee: Employee;
  selectedEmployeeId: number;
  employeeData: any;
  employeeIDArray = [];

  model = 1;

  constructor( private employeeDataService: EmployeeDataService) { }

  ngOnInit(): void {
    this.employeeData = this.employeeDataService;
    this.getAllEmployeeIds();
    console.log("All Employee Data: ", this.employeeData);
    this.selectEmployee(2119251);
    console.log("Selected Employee: ", this.selectedEmployee);
  }

  /*onSelect(employee: Employee): void {
    if (this.selectedEmployee && this.selectedEmployee.name === employee.name) {
      this.selectedEmployee = null;
      return;
    }
    this.selectedEmployee = employee;
    console.log(`Selected a profile: ${employee.name}`);
  }

  onClearSelection(): void {
    this.selectedEmployee = null;
  }*/

  public selectEmployee(employeeId: number): void {
    this.selectedEmployee = this.employeeDataService.getEmployeeId(employeeId);
  }

  public getAllEmployeeIds(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.employeeData.length; i++) {
      this.employeeIDArray[i].push(this.employeeData[i].employeeId);
    }
    console.log("Employee ID Array: ", this.employeeIDArray);
  }

}
