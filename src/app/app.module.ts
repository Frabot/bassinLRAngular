import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GaleriePage } from '../pages/galerie/galerie';
import { BateauPage } from '../pages/bateau/bateau';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MeteoProvider } from '../providers/meteo/meteo.provider';
import { ApiSymfonyProvider } from '../providers/api-symfony/api-symfony.provider';

@NgModule({
  declarations: [
    MyApp,
    GaleriePage,
    BateauPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GaleriePage,
    BateauPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeteoProvider,
    ApiSymfonyProvider
  ]
})
export class AppModule {}
