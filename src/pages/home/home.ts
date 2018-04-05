import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BateauPage} from "../bateau/bateau";
import {MuseePage} from "../musee/musee";
import {MeteoPage} from "../meteo/meteo";
import {TemoignagePage} from "../temoignage/temoignage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {

  }

    goToPage(page){
      console.log("AHHHHH");
        switch(page){
            case "Musee":
                this.navCtrl.push(MuseePage);
                break;
            case "Bateaux":
                this.navCtrl.push(BateauPage);
                break;
            case "Meteo":
                this.navCtrl.push(MeteoPage);
                break;
            case "Temoignage":
                this.navCtrl.push(TemoignagePage);
                break;
        }
    }
}
