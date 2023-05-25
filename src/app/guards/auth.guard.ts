import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const authService = inject(AuthService);
  if (!authService.isLoggedIn$.value) {
    router.navigate(['/login']);
    return authService.isLoggedIn$.value;
  }

  return authService.isLoggedIn$.value;
};
