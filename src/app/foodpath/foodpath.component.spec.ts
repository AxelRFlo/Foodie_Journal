import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpathComponent } from './foodpath.component';

describe('FoodpathComponent', () => {
  let component: FoodpathComponent;
  let fixture: ComponentFixture<FoodpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
