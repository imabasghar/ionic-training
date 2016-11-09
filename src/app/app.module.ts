import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {UsersPage} from "../pages/users/users";
import {UserDetailsPage} from "../pages/details/details";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    UsersPage,
    HomePage,
    TabsPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    UsersPage,
    HomePage,
    TabsPage,
    UserDetailsPage
  ],
  providers: []
})
export class AppModule {}
