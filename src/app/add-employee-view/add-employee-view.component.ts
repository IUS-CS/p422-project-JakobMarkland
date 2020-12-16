import {Component, Input, OnInit} from '@angular/core';
import { EMPLOYEES} from '../../data/employees';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../data/employee';

@Component({
  selector: 'app-add-employee-view',
  templateUrl: './add-employee-view.component.html',
  styleUrls: ['./add-employee-view.component.scss']
})
export class AddEmployeeViewComponent implements OnInit {
  @Input() employee: Employee;
  EMPLOYEES = EMPLOYEES;

  person = new FormGroup({
    employeeId: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]{7})$/)]),
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    manager: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]),
    department: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    payrate: new FormControl('', [Validators.required, Validators.min(7.25)]),
    ssn: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]{9})$/)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    // tslint:disable-next-line:max-line-length
    EMPLOYEES.push({employeeId: this.person.value.employeeId, name: this.person.value.name, manager: this.person.value.manager, department: this.person.value.department, payrate: this.person.value.payrate, ssn: this.person.value.ssn});
    console.log("Employees: ", EMPLOYEES);
  }

}
