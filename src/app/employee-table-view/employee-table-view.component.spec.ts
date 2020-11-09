import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableViewComponent } from './employee-table-view.component';

describe('EmployeeTableViewComponent', () => {
  let component: EmployeeTableViewComponent;
  let fixture: ComponentFixture<EmployeeTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
