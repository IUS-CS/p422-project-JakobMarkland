import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeViewComponent } from './edit-employee-view.component';

describe('EditEmployeeViewComponent', () => {
  let component: EditEmployeeViewComponent;
  let fixture: ComponentFixture<EditEmployeeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
