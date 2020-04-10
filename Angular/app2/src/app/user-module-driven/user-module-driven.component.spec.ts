import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModuleDrivenComponent } from './user-module-driven.component';

describe('UserModuleDrivenComponent', () => {
  let component: UserModuleDrivenComponent;
  let fixture: ComponentFixture<UserModuleDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModuleDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModuleDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
