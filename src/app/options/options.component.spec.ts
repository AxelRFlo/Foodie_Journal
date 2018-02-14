import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OptionsComponent } from './options.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('OptionsComponent', () => {
  let routers: RouterModule;
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async(() => {
    routers = {};
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ OptionsComponent ],
      providers: [
        {provide: RouterModule, useValue: routers},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
