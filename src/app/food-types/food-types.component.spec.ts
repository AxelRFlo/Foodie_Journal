import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypesComponent } from './food-types.component';

describe('FoodTypesComponent', () => {
  let component: FoodTypesComponent;
  let fixture: ComponentFixture<FoodTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
