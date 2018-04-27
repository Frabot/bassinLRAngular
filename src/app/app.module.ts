import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
import {MeteoPage} from "../pages/meteo/meteo";
import {MuseePage} from "../pages/musee/musee";
import {TemoignagePage} from "../pages/temoignage/temoignage";
import {ListeTemoignagesPage} from "../pages/liste-temoignages/liste-temoignages";
import {ListeBateauxPage} from "../pages/liste-bateaux/liste-bateaux";
import {ListeBateauxTemoignagesPage} from "../pages/liste-bateaux-temoignages/liste-bateaux-temoignages";

@NgModule({
  declarations: [
    MyApp,
    GaleriePage,
    BateauPage,
    HomePage,
    TabsPage,
    MuseePage,
    ListeTemoignagesPage,
    TemoignagePage,
    MeteoPage,
    ListeBateauxPage,
    ListeBateauxTemoignagesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp , {
        backButtonText: ''
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GaleriePage,
    BateauPage,
    HomePage,
    TabsPage,
    MuseePage,
    ListeTemoignagesPage,
    TemoignagePage,
    MeteoPage,
    ListeBateauxPage,
    ListeBateauxTemoignagesPage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeteoProvider,
    ApiSymfonyProvider
  ]
})
export class AppModule {}
