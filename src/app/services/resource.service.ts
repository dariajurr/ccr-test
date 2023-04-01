import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { IResource } from "../models/resource";

@Injectable({
  providedIn: 'root'
})

export class ResourceService {
  private url = 'https://reqres.in/api/unknown'
  constructor(
    private http: HttpClient,
  ) {

  }

  getAll(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this.url)
  }

}


