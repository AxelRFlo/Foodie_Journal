import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  foodie(): void {
    this._router.navigate(['/home']);
  }

  foods(id): void {
    this._router.navigate(['/journeys/'+id]);
  }

  openNav() {
  }

  closeNav() {
  }

}
