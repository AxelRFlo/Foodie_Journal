import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { auth } from 'firebase/app';



@Component({
  selector: 'app-fbauth',
  templateUrl: './fbauth.component.html',
  styleUrls: ['./fbauth.component.scss']
})
export class FbauthComponent implements OnInit {

  /* Variables for the credentials (Signup /login form)*/
  displayName: string;
  email: string;
  password: string;
  photoUrl: string;
 

  constructor(public authService: AuthService, private _router: Router, public af: AngularFireAuth) { }
 

  ngOnInit() {
  }
  /* Click events (Template) */
  signup() {
    this.authService.signup(this.displayName, this.email, this.password, this.photoUrl);
    this.displayName = this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';

  }

  logout() {
    this.authService.logout();
    this._router.navigate(['/home']);
  }

  signInWithGoogle(){

  }
  
  
  
}
  

