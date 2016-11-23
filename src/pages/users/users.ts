import {Component} from '@angular/core';
import {Http} from '@angular/http'
import {NavController, LoadingController, AlertController, ToastController} from 'ionic-angular';
import {User} from "../../models/user";
import {UserDetailsPage} from "../details/details";
import 'rxjs/add/operator/delay'
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users:Array<User> = [];

  constructor(public navCtrl:NavController,
              private http:Http,
              private toastCtrl: ToastController,
              private alertCtrl:AlertController,
              private loadingCtrl:LoadingController) {

  }

  ionViewDidEnter() {
    let loader = this.loadingCtrl.create({
      content: 'Fetching Users'
    })
    loader.present();
    this.http.get('users.json').delay(2000)
      .subscribe(result => {
        this.users = result.json();
        loader.dismiss();
      });
  }

  showDeleteAlert(user) {
    let alert = this.alertCtrl.create({
      title: 'Delete User',
      content: 'Are you sure you want to delete this user',
      buttons: [{
        text: 'No',
        handler: () => {
          console.log("No");
        }
      },
        {
          text: 'Yes',
          handler: () => {
            this.deleteUser(user);
          }
        }]
    })
    alert.present();
  }

  deleteUser(user) {
    let toast = this.toastCtrl.create({
      message: 'User has been succesfully deleted',
      position: 'middle',
      duration: 3000, 
      showCloseButton: true
    })
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    toast.present();
  }

  showUserDetails(user:User) {
    this.navCtrl.push(UserDetailsPage, {user: user})
  }

}
