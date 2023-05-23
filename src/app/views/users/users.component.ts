import { Component, OnInit } from '@angular/core';
import { IUser, Response } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  // find(arg0: (user: IUser) => boolean): IUser {
  //   throw new Error('Method not implemented.');
  // }

  title = 'users';

  users: IUser[] = [];

  constructor(private usersService: UsersService) {}
  localUsersService = this.usersService;

  getAllUsers() {
    this.usersService.getAll().subscribe((users: Response) => {
      this.users = users?.data || [];
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  deleteUser(id: number = 1) {
    console.log(id);
    if (id) {
      this.usersService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter((user) => user.id !== id);
      });
    } else {
      throw new Error('Id is not defind');
    }
  }
}
