import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AppRoutings } from '../configs/app-routings';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAccess();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAccess();
  }

  private checkAccess(): boolean {
    if (this.authService.isLoggedIn) {
      return true; // L'utente è autenticato, consente l'accesso alla pagina
    } else {
      // L'utente non è autenticato, reindirizza alla pagina di login
      this.router.navigate([AppRoutings.loginPage]);
      return false;
    }
  }
}
