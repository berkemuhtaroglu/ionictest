import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddstudentPage } from './addstudent';

@NgModule({
  declarations: [
    AddstudentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddstudentPage),
  ],
  exports: [
    AddstudentPage
  ]
})
export class AddstudentPageModule {}
