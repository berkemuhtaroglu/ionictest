import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { db } from '../../base';

/**
 * Generated class for the UpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  newuser = {
    email: '',
    firstname:'',
    surname:''
  }

  user: any;
  uid: string;
  inputFlag = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
    this.uid = navParams.get('uid');
    console.log(this.uid);
  }
  updatedata(){
    db.ref(`users/${this.uid}`).set({
      firstname: this.user.firstname,
      surname : this.user.surname
    });
    console.log(this.user);
    // .once('value').then((snapshot) => {
    //   console.log(snapshot.val());
    // })
  }
}
