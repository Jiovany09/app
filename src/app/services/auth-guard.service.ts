import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import {UserService} from './user.service';


UserService
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public _userService: UserService,

              public router: Router) { }

  canActivate(

      next: ActivatedRouteSnapshot,

      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {



    if (!this._userService.getToken()) {
      localStorage.removeItem('identity');
      localStorage.removeItem('token')

      this.router.navigate(['login']);

      return false;

    }

    return true;

  }
}
