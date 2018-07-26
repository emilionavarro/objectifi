import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericNumberInputComponent } from './generic-number-input.component';

describe('GenericNumberInputComponent', () => {
  let component: GenericNumberInputComponent;
  let fixture: ComponentFixture<GenericNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
