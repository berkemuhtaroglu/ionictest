import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeestudentPage } from './seestudent';

@NgModule({
  declarations: [
    SeestudentPage,
  ],
  imports: [
    IonicPageModule.forChild(SeestudentPage),
  ],
  exports: [
    SeestudentPage
  ]
})
export class SeestudentPageModule {}
