import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpathsComponent } from './navpaths.component';

describe('NavpathsComponent', () => {
  let component: NavpathsComponent;
  let fixture: ComponentFixture<NavpathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
