import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private AuthService: AuthService, private router: Router) {}

  exit() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }
}
