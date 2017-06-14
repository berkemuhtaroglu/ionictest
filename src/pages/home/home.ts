import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2Page } from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nextPage() {
    this.navCtrl.push(Page2Page)
    console.log("oh!");
  }

}
