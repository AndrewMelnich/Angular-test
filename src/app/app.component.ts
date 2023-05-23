import { Component, OnInit } from '@angular/core';
import { IUser, Response } from './models/user';
import { UsersService } from './services/users.services';
// import { users as data} from './data/users';
// import { Response } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  find(arg0: (user: any) => boolean): IUser {
    throw new Error('Method not implemented.');
  }
  // find(arg0: (user: IUser) => boolean): IUser {
  //   throw new Error('Method not implemented.');
  // }

  // title = 'users';

  // users: IUser[] = [];

  // constructor(private usersService: UsersService) {}

  // ngOnInit(): void {
  //   this.usersService.getAll().subscribe((users: Response) => {
  //     this.users = users?.data || [];
  //     console.log(this.users);
  //   });
  // }
}
