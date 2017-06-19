import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})

export class Page2Page {

  user: any;
  uid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
    this.uid = navParams.get('uid');
  }

  pp() {
      this.navCtrl.push(ProfilPage,  {
        user: this.user,
        uid: this.uid
      })
    }
 
}
