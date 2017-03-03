import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  newuser;
  constructor(private userService: UserService) {

  }


  adduser(newuser) {
    if (newuser.first_name === '' || newuser.first_name === '' || newuser.avatar === '') {
      alert('All fields are required')
    } else {
      this.userService.adduser(newuser)
        .subscribe(newuser => {
          this.newuser = newuser;
          console.log(this.newuser.createdAt)
        });
    }

  }
  ngOnInit() {
  }

}
