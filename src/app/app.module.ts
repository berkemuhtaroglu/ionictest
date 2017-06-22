import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Page2Page } from '../pages/page2/page2';
import { ProfilPage } from '../pages/profil/profil';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UpdatePage } from '../pages/update/update';
import { AddstudentPage } from '../pages/addstudent/addstudent';
import { SeestudentPage } from '../pages/seestudent/seestudent';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2Page,
    ProfilPage,
    UpdatePage,
    AddstudentPage,
    SeestudentPage
      
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2Page,
    ProfilPage,
    UpdatePage,
    AddstudentPage,
    SeestudentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
