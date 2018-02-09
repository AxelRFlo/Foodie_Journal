import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCommentsComponent } from './challenge-comments.component';

describe('ChallengeCommentsComponent', () => {
  let component: ChallengeCommentsComponent;
  let fixture: ComponentFixture<ChallengeCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
