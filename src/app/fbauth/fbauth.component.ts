import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-fbauth',
  templateUrl: './fbauth.component.html',
  styleUrls: ['./fbauth.component.scss']
})
export class FbauthComponent implements OnInit {

  /* Variables for the credentials (Signup /login form)*/
  name: string;
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  /* Click events (Template) */
  signup() {
    this.authService.signup(this.name, this.email, this.password);
    this.name = this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();

  }

}
