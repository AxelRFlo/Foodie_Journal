import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbauthComponent } from './fbauth.component';

describe('FbauthComponent', () => {
  let component: FbauthComponent;
  let fixture: ComponentFixture<FbauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FbauthComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
