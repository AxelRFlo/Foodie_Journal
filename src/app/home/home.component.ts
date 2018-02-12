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

  homee(): void {
    this._router.navigate(['/home']);
  }

  challenge(): void {
    this._router.navigate(['/challenge']);
  }

  about(): void {
    this._router.navigate(['/about']);
  }
  // popover(): void {
  //   this._router.navigate(['/challenge']);
  // }
}
