import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor( private AuthService: AuthService, private router: Router){}

  password = '';
  email = 'janet.weaver@reqres.in';

  formLogin = new FormGroup({
    password: new FormControl(this.password),
    email: new FormControl(this.email),
  });

  login(){
    this.AuthService.login({
      password: this.formLogin.value.password as string,
      email: this.formLogin.value.email as string
    }).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
