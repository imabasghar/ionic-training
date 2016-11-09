import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {User} from "../../models/user";
import {UserDetailsPage} from "../details/details";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: Array<User> = [];
  constructor(public navCtrl: NavController) {
    let user1 = new User();
    user1.userId = 1;
    user1.userName = 'Ali';
    user1.designation = 'SE';

    let user2 = new User();
    user2.userId = 2;
    user2.userName = 'Aun';
    user2.designation = 'LSE';

    this.users.push(user1);
    this.users.push(user2);
  }

  showUserDetails(user: User) {
    this.navCtrl.push(UserDetailsPage, {user: user})
  }

}
