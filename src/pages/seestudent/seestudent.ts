import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { db } from '../../base';

@Component({
  selector: 'page-seestudent',
  templateUrl: 'seestudent.html',
})

  
export class SeestudentPage {
  searchTerm: string = '';
  students: Array<any>;
  loadedStudents:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.initializeItems();
  }

  ionViewDidLoad() {
    this.getStudents();
  }

  getStudents() {
    const dbref = db.ref('students');
    let students = [];
    dbref.on('value', (snapshot) => {
      //  snapshot.val();
      for (let data in snapshot.val()) {
        const student = snapshot.val()[data]
        students.push(student);
      }
      this.students = students;
      this.loadedStudents = students;
    });
  }

  initializeItems(): void {
    this.students = this.loadedStudents;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      const filter = this.students.filter(student => {
        return student.firstname.toLowerCase().indexOf(val.toLowerCase())> -1
      });
      this.students = filter;
      console.log(this.students)
    }
    return this.students;
  }
}

