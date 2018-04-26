import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiSymfonyProvider} from "../../providers/api-symfony/api-symfony.provider";
import {Bateau} from "../../providers/model-class/model-class";

/**
 * Generated class for the ListeBateauxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-bateaux',
  templateUrl: 'liste-bateaux.html',
})
export class ListeBateauxPage {
    bateaux: Bateau[];
    constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiSymfonyProvider) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ListeBateauxPage');
    }

    ngOnInit() {
        this.apiProvider.getAllBateaux().then((data: Bateau[]) => {
            this.bateaux = data;
        });
    }
}
