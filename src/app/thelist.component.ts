import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-thelist',
  templateUrl: './thelist.component.html',
  styleUrls: ['./thelist.component.css']
})
export class ThelistComponent implements OnInit {
  viewform: boolean = false;
  users;
  api;
  constructor(private userService: UserService, private http: Http) {

    // this.users = this.userService.get();
    this.users = this.http.get('/v1/users').map(res => res.json());
    
  }




  ngOnInit() {
  }
}
