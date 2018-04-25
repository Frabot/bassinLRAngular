import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BateauPage} from "../bateau/bateau";
import {MuseePage} from "../musee/musee";
import {MeteoPage} from "../meteo/meteo";
import {TemoignagePage} from "../temoignage/temoignage";
import {MeteoProvider} from "../../providers/meteo/meteo.provider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test;

  constructor(public navCtrl: NavController, private meteoService: MeteoProvider) {

  }

  ngOnInit() {
      //Appel du service meteo pour la homepage
      this.meteoService.getMeteo().then( (data:any)=> {
          this.test = data;
          console.log(this.test);
      });
  }



    goToPage(page){
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
