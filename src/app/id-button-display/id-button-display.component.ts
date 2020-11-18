import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../data/employee';
import { EMPLOYEES} from '../../data/employees';

@Component({
  selector: 'app-id-button-display',
  templateUrl: './id-button-display.component.html',
  styleUrls: ['./id-button-display.component.scss']
})
export class IdButtonDisplayComponent implements OnInit {
  EMPLOYEES = EMPLOYEES;
  selectedEmployee: Employee;
  model = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    console.log(`Selected Employee: ${employee}`);
  }

}
