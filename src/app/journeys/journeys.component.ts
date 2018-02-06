import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  foodieJo(): void {
    this._router.navigate(['/home']);
  }

  openNav() {
  }

  closeNav() {
  }

}
