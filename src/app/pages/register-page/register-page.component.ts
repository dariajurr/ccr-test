import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  status: string
  title: string="Reg"

  constructor(
    private authService: AuthService,
    private router: Router,
    public modalService: ModalService,
    ) {

  }

  registerForm = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ]),
  })

  get _email() {
    return this.registerForm.get('email') as FormControl
  }

  get _password() {
    return this.registerForm.get('password') as FormControl
  }

  submit() {
    this.authService.register(this.registerForm.value).subscribe({
      next: (data) => {
        this.status = `Succes! Your token: ${data['token']}`
        this.modalService.open()
        this.registerForm.reset()
      },
      error: (error) => {
        console.log('error: ', error.error.error);
        this.status = `${error.error.error}. Try to use correct data. 
        Email: eve.holt@reqres.in, password: pistol`
        this.modalService.open()
      }
    });
  }
}
