import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // constructor() {}
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  options(): void {
    // alert('cambio de pantalla');
    this._router.navigate(['/options']);
  }

  popover(): void {
    this._router.navigate(['/challenge']);
  }
}
