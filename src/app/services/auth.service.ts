import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { ModalService } from "./modal.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private url = 'https://reqres.in/api'
  constructor(
    private http: HttpClient,
    private modalService: ModalService
  ) {

  }

  login(data)  {
    const body = {
      email: data['email'],
      password: data['password']
    }
    return this.http.post(`${this.url}/login`, body)
  }
 
  register(data) {
    const body = {
      email: data['email'],
      password: data['password']
    }
    return this.http.post(`${this.url}/register`, body)
  }
}


