import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDateInputComponent } from './generic-date-input.component';

describe('GenericDateInputComponent', () => {
  let component: GenericDateInputComponent;
  let fixture: ComponentFixture<GenericDateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
