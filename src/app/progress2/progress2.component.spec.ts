import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progress2Component } from './progress2.component';

describe('Progress2Component', () => {
  let component: Progress2Component;
  let fixture: ComponentFixture<Progress2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progress2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progress2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
