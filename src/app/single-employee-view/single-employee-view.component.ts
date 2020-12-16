import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Employee } from '../../data/employee';
import { EMPLOYEES} from '../../data/employees';

@Component({
  selector: 'app-single-employee-view',
  templateUrl: './single-employee-view.component.html',
  styleUrls: ['./single-employee-view.component.scss']
})

export class SingleEmployeeViewComponent implements OnInit, OnChanges {
  @Input() employee: Employee;
  Employees = EMPLOYEES;

  public editing = false;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {}

  ngOnChanges(): void {
    this.editing = false;
  }

  edit(): void {
    this.editing = !this.editing;
  }
}
