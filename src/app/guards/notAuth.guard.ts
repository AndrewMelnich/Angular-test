import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const notAuthGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const authService = inject(AuthService);
  console.log(route.routeConfig?.path);

  if (authService.isLoggedIn$.value) {
    router.navigate(['/']);
    return authService.isLoggedIn$.value;
  }
  return true;
};
