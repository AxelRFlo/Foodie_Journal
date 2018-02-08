import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  foodieJ(): void {
    this._router.navigate(['/home']);
  }

  openNav() {
  }

  closeNav() {
  }

}
