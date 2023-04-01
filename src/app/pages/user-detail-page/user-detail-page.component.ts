import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit {
  title = 'User Details';
  user:IUser
  userID:number
  status:string

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    public modalService: ModalService
    ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.userID = params.get('userId')
      this.usersService.getOne(this.userID).subscribe(users => {
        this.user = users['data']
      });
    });
  }

  userForm = new FormGroup({
    name: new FormControl<string>(''),
    job: new FormControl<string>('')
  })
}
