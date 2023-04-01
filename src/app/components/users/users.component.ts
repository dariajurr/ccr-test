import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() user:IUser

  constructor(
    private userService: UsersService,
    public modalService: ModalService
    ) {

  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(ID => {
      this.modalService.open();
    })
  }
}
