import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './views/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './views/users/users.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeUserComponent } from './components/change-user/change-user.component';
import { LoginComponent } from './views/login/login.component';
import { ResursesComponent } from './views/resurses/resurses.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ModalComponent,
    ChangeUserComponent,
    LoginComponent,
    ResursesComponent,
    NavigationComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
