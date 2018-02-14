import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeComponent } from './challenge.component';
import { RouterModule } from '@angular/router/src/router_module';
import { ActivatedRoute } from '@angular/router/src/router_state';

describe('ChallengeComponent', () => {
  let component: ChallengeComponent;
  let fixture: ComponentFixture<ChallengeComponent>;
  let routers: RouterModule;
  // let activatedroutes: ActivatedRoute;

  beforeEach(async(() => {
    routers = {};
    TestBed.configureTestingModule({
      declarations: [ ChallengeComponent ],
      imports: [RouterModule ],
      providers: [
        {provide: RouterModule, useValue: routers}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
