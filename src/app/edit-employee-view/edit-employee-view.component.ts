import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Employee} from '../../data/employee';
import {FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee-view',
  templateUrl: './edit-employee-view.component.html',
  styleUrls: ['./edit-employee-view.component.scss']
})
export class EditEmployeeViewComponent implements OnInit {
  @Input() employee: Employee;
  @Output() finishedEditing = new EventEmitter<boolean>();

  person = new FormGroup({
    employeeId: new FormControl(),
    name: new FormControl(),
    manager: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]),
    department: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    payrate: new FormControl('', [Validators.required, Validators.min(7.25)]),
    ssn: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  save(): void {
    if (this.person.valid) {
      this.employee.manager = this.person.value.manager;
      this.employee.department = this.person.value.department;
      this.employee.payrate = this.person.value.payrate;

      this.finishedEditing.emit(true);
    }
  }

  cancel(): void {
    this.reset();
    this.finishedEditing.emit(true);
  }

  reset(): void {
    this.person.reset({
      manager: this.employee.manager,
      department: this.employee.department,
      payrate: this.employee.payrate,
    });
  }



}
