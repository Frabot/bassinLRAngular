import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiSymfonyProvider} from "../../providers/api-symfony/api-symfony.provider";
import {Bateau, Temoignage} from "../../providers/model-class/model-class";

@Component({
  selector: 'page-galerie',
  templateUrl: 'galerie.html'
})
export class GaleriePage {
  bateaux: Bateau[];
  temoignages: Temoignage[];
  constructor(public navCtrl: NavController, public apiProvider: ApiSymfonyProvider) {

  }

    ngOnInit() {
        this.apiProvider.getAllBateaux().then((data: Bateau[]) => {
            this.bateaux = data;
        });
        this.apiProvider.getAllTemoignages().then((data: Temoignage[]) => {
            this.temoignages = data;
        });
    }

}
