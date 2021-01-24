import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../first-module/services/auth.service';
import {Routes} from '../constants/Routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const {MAIN, UNAUTHORIZED} = Routes.ERROR_MODULE;

    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate([`${MAIN}${UNAUTHORIZED}`]);
  }
}
