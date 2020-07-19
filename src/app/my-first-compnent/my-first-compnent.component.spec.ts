import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCompnentComponent } from './my-first-compnent.component';

describe('MyFirstCompnentComponent', () => {
  let component: MyFirstCompnentComponent;
  let fixture: ComponentFixture<MyFirstCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstCompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
