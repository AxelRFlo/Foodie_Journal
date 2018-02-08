import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantInfoComponent } from './restaurant-info.component';

describe('RestaurantInfoComponent', () => {
  let component: RestaurantInfoComponent;
  let fixture: ComponentFixture<RestaurantInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
