import { Injectable } from '@angular/core';
import { Http } from '@angular/http';




@Injectable()
export class UserService {
  private apiUrl: string = 'https://reqres.in/api/users/';


  constructor(private http: Http) { }


  get() {
    return this.http.get(this.apiUrl)
      .map(res => res.json().data)
  }

  adduser(newuser) {
    return this.http.post(this.apiUrl, newuser)
      .map(user => user.json())
  }

  deleteuser(id) {
    return this.http.delete(`${this.apiUrl}${id}`)
  }
}



