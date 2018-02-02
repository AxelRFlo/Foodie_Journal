import { Injectable } from '@angular/core';

@Injectable()
export class UserTrackingService {

  username = '';
  email = '';
  isLoggedin = '';
  userTracking = [];
  constructor() { }

}
