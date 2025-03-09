import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    let isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      this.authService.logout();
      this.router.navigateByUrl('/');
    }

    return isAuthenticated;
  }
}
