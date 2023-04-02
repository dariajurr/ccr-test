import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  token: string
  error: string

  constructor(
    private authService: AuthService,
    private router: Router,
    public modalService: ModalService,
    ) {

  }

  loginForm = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ]),
  })

  get _email() {
    return this.loginForm.get('email') as FormControl
  }

  get _password() {
    return this.loginForm.get('password') as FormControl
  }

  submit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        this.modalService.open()
        this.token = `Succes! Your token: ${data['token']}`
        this.loginForm.reset()
      },
      error: (error) => {
        this.error = `Error: ${error.error.error}. Try to use correct data. 
        Email: eve.holt@reqres.in, password: pistol`
        this.modalService.open()
      }
    });
  }
}
