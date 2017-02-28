import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
  users: any;
  constructor(private http: Http) {
    this.users = [{ "userId": 5, "firstName": "Piet", "lastName": "Friet", "age": 72, "email": "pietfriet@gmail.com", "profilePictureUrl": "http://retailparkroermond.com/nl/horeca/piet-friet/afbeeldingen/piet-friet-l.png", "_id": "8m0nGYgSttzCNG0t" }, { "userId": 5, "firstName": "Piet", "lastName": "Friet", "age": 72, "email": "pietfriet@gmail.com", "profilePictureUrl": "http://retailparkroermond.com/nl/horeca/piet-friet/afbeeldingen/piet-friet-l.png", "_id": "ZyYZfe7yLtqTmrGm" }]
  }


  get() {
    return this.http
      .get('/v1/users')
      .map(res => res.json());
  }


}



