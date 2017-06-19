import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { auth, db } from '../../base';
import { AngularFireAuth } from 'angularfire2/auth'

import { Page2Page } from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    user = {
    email: '',
    pass: '',
    Firstname:'',
    Surname:''
  }

  private currentUser: firebase.User

  constructor(
    public navCtrl: NavController, 
    private alertCtrl: AlertController) {
    auth.onAuthStateChanged((user) => {
      if(user) {
        // if there is a user , its sets current user to user id
        db.ref(`users/${user.uid}`).once('value').then((snapshot) => {
          this.onSignInSuccess(snapshot.val());
        })
      } else {
        console.log('not logged in');
      }
    })

  }

  logIn(): void {
    const { email, pass } = this.user;

    const promise = auth.signInWithEmailAndPassword(email, pass);
    
    promise.catch((e:any) => {
      this.onNoAccount(e.code, e.message)
    })

    promise.then((user) => {
      db.ref(`users/${user.uid}`).once('value').then((snapshot) => {
        this.onSignInSuccess(snapshot.val());
      })
     })
     
  }

  signUp(): void {
    const {email, pass, Firstname, Surname } = this.user

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.then((user) => {
      db.ref(`users/${user.uid}`).set({
        email: email,
        firstname: Firstname,
        surname: Surname,
      }).then(() => {
        this.onSignInSuccess(this.user);
      })
    })
    promise.catch((e:any) => {
      if(e.code === "auth/weak-password") {
        this.onNoAccount('weak-password', 'Password should be at least 6 characters')    
        }
    })
  }
  
  private onSignInSuccess(data): void {
    this.navCtrl.setRoot(Page2Page, {
      user: data
    })
  }


  
  private onNoAccount(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
      
    });
    alert.present();
    this.navCtrl.push(HomePage)
  }

}