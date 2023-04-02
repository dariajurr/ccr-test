import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    name: new FormControl<string>('', [
      Validators.required
    ]),
    job: new FormControl<string>('', [
      Validators.required
    ]),
  })

  get _name() {
    return this.editForm.get('name') as FormControl
  }

  get _job() {
    return this.editForm.get('job') as FormControl
  }

  submit() {
    this.usersService.updateUser(this.userID, this.editForm.value).subscribe(data => {
      this.status = `Succes! User data updated. Name: ${data['name']}. Job: ${data['job']}. Updated at: ${data['updatedAt']}`
    });
  }
}
