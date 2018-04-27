import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MuseePage} from "../musee/musee";
import {MeteoPage} from "../meteo/meteo";
import {MeteoProvider} from "../../providers/meteo/meteo.provider";
import {Meteo} from "../../providers/model-class/model-class";
import {ListeTemoignagesPage} from "../liste-temoignages/liste-temoignages";
import {ListeBateauxPage} from "../liste-bateaux/liste-bateaux";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  meteo: Meteo[];
  horlogeRouge = true;
  //Car il n'y a qu'un musee dans tous les cas
  heureActuelle = new Date().getHours();

    constructor(public navCtrl: NavController, private meteoService: MeteoProvider) {

  }

  ngOnInit() {

      if (this.heureActuelle >= 10 && this.heureActuelle <= 2) {
          document.body.style.background = "Red";
          this.horlogeRouge = false;
      } else {
          document.body.style.background = "Blue";
          console.log("hoooo");
      }
  }



    goToPage(page){
        switch(page){
            case "Musee":
                this.navCtrl.push(MuseePage);
                break;
            case "Liste_bateaux":
                this.navCtrl.push(ListeBateauxPage);
                break;
            case "Meteo":
                this.navCtrl.push(MeteoPage);
                break;
            case "Liste_temoignages":
                this.navCtrl.push(ListeTemoignagesPage);
                break;
        }
    }
}
