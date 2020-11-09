import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeViewComponent } from './add-employee-view.component';

describe('AddEmployeeViewComponent', () => {
  let component: AddEmployeeViewComponent;
  let fixture: ComponentFixture<AddEmployeeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
