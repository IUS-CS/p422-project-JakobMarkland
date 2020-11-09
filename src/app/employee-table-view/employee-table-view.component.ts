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
  constructor() { }

  ngOnInit(): void {
    console.log(EMPLOYEES);
  }

}
