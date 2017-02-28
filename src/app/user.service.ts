import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
 users: any;
  constructor() {
    this.users =  [ { "userId": 5, "firstName": "Piet", "lastName": "Friet", "age": 72, "email": "pietfriet@gmail.com", "profilePictureUrl": "http://retailparkroermond.com/nl/horeca/piet-friet/afbeeldingen/piet-friet-l.png", "_id": "8m0nGYgSttzCNG0t" }, { "userId": 5, "firstName": "Piet", "lastName": "Friet", "age": 72, "email": "pietfriet@gmail.com", "profilePictureUrl": "http://retailparkroermond.com/nl/horeca/piet-friet/afbeeldingen/piet-friet-l.png", "_id": "ZyYZfe7yLtqTmrGm" } ]
  }


  get() {
    return this.users;
  }


}



