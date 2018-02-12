import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // constructor() {}
  constructor(private _router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  options(): void {
    // alert('cambio de pantalla');
    this._router.navigate(['/options']);
  }

isLoggedIn(): any {
  this.authService.loggedIn = !this.authService.loggedIn;

}

loggedIn() {
  if ( this.authService.isLoggedIn() ) {
      return true;
  }
  this._router.navigate(['']);
  return false;
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
