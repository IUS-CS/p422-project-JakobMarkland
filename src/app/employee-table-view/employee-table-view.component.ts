import { Component, OnInit } from '@angular/core';
import { Employee } from '../../data/employee';
import { EMPLOYEES} from '../../data/employees';

@Component({
  selector: 'app-employee-table-view',
  templateUrl: './employee-table-view.component.html',
  styleUrls: ['./employee-table-view.component.scss']
})
export class EmployeeTableViewComponent implements OnInit {

  EMPLOYEES = EMPLOYEES;
  selectedEmployee: Employee;
  model = 1;
  constructor() { }

  ngOnInit(): void {
    console.log(EMPLOYEES);
  }

  onSelect(employee: Employee): void {
    if (this.selectedEmployee && this.selectedEmployee.employeeId === employee.employeeId) {
      this.selectedEmployee = null;
      return;
    }
    this.selectedEmployee = employee;
    console.log(`Selected an employee: ${employee.employeeId}`);
  }
}
