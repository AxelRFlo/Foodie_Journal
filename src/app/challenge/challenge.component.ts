import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  disableBtn : boolean;
  next(){
      this.disableBtn = !this.disableBtn;
  }
  
  private challengeState: number = 0;
  buttonText = { 0:"Mark as Started", 1:"Mark as Completed", 2:"Way to go! Take the next challenge" };

  constructor(private _router: Router) { }

  ngOnInit() {
  }

}
