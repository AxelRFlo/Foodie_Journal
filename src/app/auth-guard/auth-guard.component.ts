import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router, private authService: AuthService) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if ( this.authService.isLoggedIn() ) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    }

        canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
            if ( this.authService.isLoggedIn() ) {
                return true;
            }
            return false;
        }
        }
    

