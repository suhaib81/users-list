import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-thelist',
  templateUrl: './thelist.component.html',
  styleUrls: ['./thelist.component.css']
})
export class ThelistComponent implements OnInit {
  viewform: boolean = false;
  users;
  constructor(private userService: UserService) {

    this.users = this.userService.get();

  }


  ngOnInit() {
  }
}
