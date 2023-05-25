import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  password = '';
  email = 'janet.weaver@reqres.in';

  formAuth = new FormGroup({
    password: new FormControl(this.password),
    email: new FormControl(this.email),
  });

  registration() {
    console.log(this.formAuth.value);

    this.authService
      .registration({
        password: this.formAuth.value.password as string,
        email: this.formAuth.value.email as string,
      })
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
