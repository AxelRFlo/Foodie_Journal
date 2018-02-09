import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { auth } from 'firebase/app';
import { FirebaseAuth } from '@firebase/auth-types';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';


  constructor(public authService: AuthService, private _router: Router, public af: AngularFireAuth) { }

  ngOnInit() {
  }

  foodie(): void {
    this._router.navigate(['/home']);
  }

  openNav() {
  }

  closeNav() {
  }

  logout() {
    this.authService.logout();
    this._router.navigate(['/home']);
  }

  isLoggedIn () {
    if ( this.authService.isLoggedIn() ) {
      return true;
  }
  return false;
}

  }


}