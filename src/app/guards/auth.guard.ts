import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../modules/auth/auth.service';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router,
    private authService: AuthService,
    private jwtHelper: JwtHelperService) {}

  public canActivate(): boolean {
    const token = this.authService.getUserToken().replace("Bearer ", "")
    
    if (!token) {
        this.router.navigate(['/auth/login'])
        return false
    }

    if (!this.isAuthenticated(token)) {
        this.router.navigate(['/auth/login'])
        return false
    }
    
    return true
  }

  private isAuthenticated(token: string): boolean {
    return !this.jwtHelper.isTokenExpired(token)
  }
}
