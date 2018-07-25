import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericStringInputComponent } from './generic-string-input.component';

describe('GenericStringInputComponent', () => {
  let component: GenericStringInputComponent;
  let fixture: ComponentFixture<GenericStringInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericStringInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericStringInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
