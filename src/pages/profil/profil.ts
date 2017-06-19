import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdatePage } from '../update/update'

/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  user: any;
  inputFlag = true;
  uid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
    this.uid = navParams.get('uid');
  }


  add() {
     this.navCtrl.push(UpdatePage,  {
        user: this.user,
        uid: this.uid
      })
  }

}
