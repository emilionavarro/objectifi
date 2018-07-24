import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStringComponent } from './my-string.component';

describe('MyStringComponent', () => {
  let component: MyStringComponent;
  let fixture: ComponentFixture<MyStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
