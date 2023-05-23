import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser, IUserResponse } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.services';
import { Location } from '@angular/common';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  id: string = '';
  user: IUser = {};

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location,
    public ModalService: ModalService
  ) {
    this.id = this.route.snapshot.params['id'];

    this.usersService
      .getActiveUser(this.id)
      .subscribe((user: IUserResponse) => {
        this.user = user.data || {};
      });
  }

  goBack() {
    this.location.back();
  }

  changedUser(user: IUser) {
    this.user = user;
  }
}
