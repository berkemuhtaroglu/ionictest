import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page2Page } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { ProfilPage } from '../pages/profil/profil';
import { UpdatePage } from '../pages/update/update';
import { AddstudentPage } from '../pages/addstudent/addstudent';
import { SeestudentPage } from '../pages/seestudent/seestudent';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
