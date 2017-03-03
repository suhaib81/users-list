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

  }


  delete(id) {
    this.userService.deleteuser(id)
      .subscribe(data => console.log('deleted' + id));
  }



  ngOnInit() {



    this.userService.get()
      .subscribe(users => this.users = users);




  }
}
