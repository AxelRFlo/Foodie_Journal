import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { auth } from 'firebase/app';
import { AuthTokenProvider } from '@firebase/database/dist/esm/src/core/AuthTokenProvider';
import * as firebase from 'firebase/app';
import { User } from '@firebase/auth-types';



@Component({
  selector: 'app-fbauth',
  templateUrl: './fbauth.component.html',
  styleUrls: ['./fbauth.component.scss']
})
export class FbauthComponent implements OnInit {


  /* Variables for the credentials (Signup /login form)*/

  email: string;
  password: string;



  constructor(public authService: AuthService, private _router: Router) { }


  ngOnInit() {
  }

  // sign up de firebase sin poder guardar el nombre de usuario
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';

  }

  // Logout te manda al home page
  logout() {
    this.authService.logout();
    this._router.navigate(['/home']);
  }






}


