import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  foodie(): void {
    this._router.navigate(['/home']);
  }

  openNav() {
  }

  closeNav() {
  }

}