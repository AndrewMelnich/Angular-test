import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public ModalService: ModalService // private UserComponent: UserComponent
  ) {}
  // user = this.UserComponent.user;
  // avatar = this.user.avatar;
  // first_name = this.user.first_name;
  // last_name = this.user.last_name;
  // email = this.user.email;

  ngOnInit(): void {
    // console.log(this.name);
  }
}
