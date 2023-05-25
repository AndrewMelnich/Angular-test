import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';
import { UserComponent } from './views/user/user.component';
import { LoginComponent } from './views/login/login.component';
import { ResursesComponent } from './views/resurses/resurses.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { authGuard } from './guards/auth.guard';
import { notAuthGuard } from './guards/notAuth.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [notAuthGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [notAuthGuard],
  },
  {
    path: 'resurses',
    component: ResursesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
