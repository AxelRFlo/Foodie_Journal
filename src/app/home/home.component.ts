import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { YelpService } from '../services/yelp.service';
import { PopoverComponent } from '../popover/popover.component';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public popover: PopoverComponent;

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
      console.log('I NEED TO ROUTER NAVIGATE TO : ' + '/journeys/' + this._YelpService.LSGet('Following'));
      this._router.navigate(['/journeys/' + this._YelpService.LSGet('Following')]);
    } else {
      this._router.navigate(['/options']);
    }
    if (this.authService.isLoggedIn()){
      this._router.navigate(['/options']);
    }
    //alert('Please Login to continue!');
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
