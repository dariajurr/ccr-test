import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { IUser } from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private url = 'https://reqres.in/api/users'
  constructor(
    private http: HttpClient
  ) {

  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.url}?page=2`)
  }

  getOne(id: number): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.url}/${id}`)
  }

  updateUser(id: number, user) {
    const body = {
      "name": `${user.name}`,
      "job": `${user.job}`
    }
    return this.http.put(`${this.url}/${id}`, body)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}


