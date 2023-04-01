import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss']
})
export class EditUserFormComponent {
  @Input() title:string
  @Input() userID: number
  @Input() status:string

  constructor(
    private usersService: UsersService
    ) {

  }

  editForm = new FormGroup({
    name: new FormControl<string>(''),
    job: new FormControl<string>('')
  })

  submit() {
    this.usersService.updateUser(this.userID, this.editForm.value).subscribe(data => {
      this.status = `Succes! User data updated. Name: ${data['name']}. Job: ${data['job']}. Updated at: ${data['updatedAt']}`
      console.log('users: ', data);
    });
  }
}
