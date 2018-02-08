import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

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



  homee(): void {
    this._router.navigate(['/home']);
  }

  // popover(): void {
  //   this._router.navigate(['/challenge']);
  // }
}
