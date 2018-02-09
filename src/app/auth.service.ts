import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { OAuthProvider } from '@firebase/auth-types';


@Injectable()
export class AuthService {
  userDetails: any;
  private user: Observable<firebase.User>;  
  loggedIn = false;


  constructor(private _firebaseAuth: AngularFireAuth, public af: AngularFireAuth, private _router: Router ) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );

  }

  signup(displayName: string, email: string, password: string) {
    this._firebaseAuth
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
    this._firebaseAuth
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
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  

  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this._router.navigate(['/home']));
  
  }


  
}