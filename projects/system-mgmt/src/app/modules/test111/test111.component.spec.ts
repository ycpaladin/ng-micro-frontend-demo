import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test111Component } from './test111.component';

describe('Test111Component', () => {
  let component: Test111Component;
  let fixture: ComponentFixture<Test111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
