import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PopoverComponent } from '../popover/popover.component'
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public popover: PopoverComponent;

  // constructor() {}
  constructor(private _router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  options(): void {
    // alert('cambio de pantalla');
    if (this.authService.isLoggedIn()){
      this._router.navigate(['/options']);
    }
    alert('Please Login to continue!')
    
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
