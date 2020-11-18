import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdButtonDisplayComponent } from './id-button-display.component';

describe('IdButtonDisplayComponent', () => {
  let component: IdButtonDisplayComponent;
  let fixture: ComponentFixture<IdButtonDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdButtonDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdButtonDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
