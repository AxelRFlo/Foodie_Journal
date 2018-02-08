import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { OAuthProvider } from '@firebase/auth-types';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;  
  loggedIn = false;


  constructor(private firebaseAuth: AngularFireAuth, public af: AngularFireAuth, private _router: Router ) {
    this.user = firebaseAuth.authState;

  }

  signup(displayName: string, email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this._router.navigate(['/options']);
        this.loggedIn = true;
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this._router.navigate(['/options']);
        this.loggedIn = true;
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
  signInWithGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this._router.navigate(['/home']);
  }


  
}