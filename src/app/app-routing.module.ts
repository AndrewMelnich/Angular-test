import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';
// import { UsersService } from './services/users.services';
// import { UserComponent } from './components/user/user.component'
import { UserComponent } from './views/user/user.component';
import { LoginComponent } from './views/login/login.component';
import { ResursesComponent } from './views/resurses/resurses.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'resurses',
    component: ResursesComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
