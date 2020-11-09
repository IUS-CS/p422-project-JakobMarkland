import { Component, OnInit } from '@angular/core';
import { Employee } from '../../data/employee';
import { EMPLOYEES} from '../../data/employees';

@Component({
  selector: 'app-single-employee-view',
  templateUrl: './single-employee-view.component.html',
  styleUrls: ['./single-employee-view.component.scss']
})

export class SingleEmployeeViewComponent implements OnInit {
  Employees = EMPLOYEES;
  singleEmployee = this.Employees[0];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
}
