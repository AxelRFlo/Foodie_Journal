import { Injectable } from '@angular/core';

import { AngularFireAuth, AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { YelpService } from './services/yelp.service';
import { OAuthProvider, FacebookAuthProvider } from '@firebase/auth-types';
import { _getAngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class AuthService {
  userDetails: any;
  private user: Observable<firebase.User>;
  private currentUser: Observable<firebase.User>;
  loggedIn = false;

  following: any;

  constructor(private _firebaseAuth: AngularFireAuth, public af: AngularFireAuth, private _router: Router,
    private _YelpService: YelpService ) {
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

  signup(displayName: string, email: string, password: string, photoUrl: string) {
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        this.user = firebase.auth().currentUser;
    })
      .then(function () {
        // aún no funciona esto: 
        this.user.updateProfile({
            displayName: 'Example User',
            photoURL: 'https://example.com/jane-q-user/profile.jpg'
        });
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
        // Si existe la variable
        if (this._YelpService.LSGet('Following')) {
          // Hacemos redirect a la página que esta siguiendo
          this.following = this._YelpService.LSGet('Following');
          console.log("I'm following: '" + this.following);
          this._router.navigate(['/journeys/' + this.following]);
        } else {
        this._router.navigate(['/options']);
      }
        this.loggedIn = true;
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
  
  // para iniciar sesión a través de google, con popup
  signInWithGoogle() {
    this.af.auth.signInWithPopup (
      new firebase.auth.GoogleAuthProvider()
  );
  }

  signInWithFacebook() {
    this.af.auth.signInWithPopup (
      new firebase.auth.FacebookAuthProvider()
  );
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