import { Component, OnInit } from '@angular/core';
import { IResource } from 'src/app/models/resource';
import { IUser } from 'src/app/models/user';
import { ModalService } from 'src/app/services/modal.service';
import { ResourceService } from 'src/app/services/resource.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  users:IUser[] = [];
  resources:IResource[] = [];
  
  constructor(
    private usersService: UsersService,
    private resourceService: ResourceService,
    public modalService: ModalService
    ) {

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(users => {
      this.users = users['data']
      console.log('this.users: ', this.users);
    });

    this.resourceService.getAll().subscribe(resource => {
      this.resources = resource['data']
      console.log('this.resource: ', this.resources);
    });
  }
}
