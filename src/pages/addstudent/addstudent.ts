import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { db } from '../../base';
/**
 * Generated class for the AddstudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addstudent',
  templateUrl: 'addstudent.html',
})
export class AddstudentPage {
  student = {
    firstname : '' ,
    surname : '',
    tel_no : '',
    fathername : '',
    birthday : '',
    email : '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createStudent() {
    const {firstname, surname, tel_no, fathername, birthday, email,  } = this.student
    db.ref(`students/${Date.now().toString().slice(6, 13)}`).set({
        firstname: firstname,
        surname: surname,
        tel_no: tel_no,
        fathername: fathername,
        birthday: birthday,
        email: email,
    }).then((msg) => {
      this.student.firstname = '';
    })
    .catch((err) => console.error(err));
  }

}
