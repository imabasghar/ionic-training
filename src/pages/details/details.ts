/**
 * Created by iasghar on 11/3/2016.
 */

import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class UserDetailsPage {

  user: User;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

      this.user = this.navParams.get('user')
  }

}
