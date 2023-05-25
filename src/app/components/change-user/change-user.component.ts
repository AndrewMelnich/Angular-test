import { Component, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { UserComponent } from '../../views/user/user.component';
import { UsersService } from '../../services/users.services';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../../models/user';
@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.scss'],
})
export class ChangeUserComponent {
  constructor(
    public ModalService: ModalService,
    private UserComponent: UserComponent,
    private UsersService: UsersService
  ) {}

  @Output() onChanged = new EventEmitter<IUser>();

  user = this.UserComponent.user;
  avatar = this.user.avatar;
  first_name = this.user.first_name;
  last_name = this.user.last_name;
  email = this.user.email;
  id = this.user.id;

  form = new FormGroup({
    id: new FormControl(this.id),
    email: new FormControl(this.email),
    first_name: new FormControl(this.first_name),
    last_name: new FormControl(this.last_name),
    avatar: new FormControl(this.avatar),
  });

  submit() {
    // console.log(this.form.value);
    this.UsersService.putActiveUser({
      id: this.form.value.id as number,
      email: this.form.value.email as string,
      first_name: this.form.value.first_name as string,
      last_name: this.form.value.last_name as string,
      avatar: this.form.value.avatar as string,
    }).subscribe((user) => {
      console.log(user);
      this.onChanged.emit(user);
      this.ModalService.close();
    });
  }
}
