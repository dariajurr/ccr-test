import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit{
  users:IUser[] = [];
  
  constructor(
    private usersService: UsersService,
    public modalService: ModalService
    ) {

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(users => {
      this.users = users['data']
    });
  }
}
