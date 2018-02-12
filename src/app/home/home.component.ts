import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // constructor() {}
  constructor(private _router: Router, public authService: AuthService, private _YelpService: YelpService) { }

  ngOnInit() {
  }

  // Arreglar router navigate
  options(): void {
    // alert('cambio de pantalla');
    console.log('Im following : ' + this._YelpService.LSGet('Following'));
    if (this._YelpService.LSGet('Following')) {
      // Si estoy siguiendo un path
      console.log('I NEED TO ROUTER NAVIGATE TO : ' + '/Journeys/' + this._YelpService.LSGet('Following'));
      this._router.navigate(['/journeys/' + this._YelpService.LSGet('Following')]);
    } else {
      this._router.navigate(['/options']);
    }
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
  // popover(): void {
  //   this._router.navigate(['/challenge']);
  // }
}
