import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiSymfonyProvider} from "../../providers/api-symfony/api-symfony.provider";
import { Temoin} from "../../providers/model-class/model-class";
import {TemoignagePage} from "../temoignage/temoignage";

/**
 * Generated class for the ListeTemoignagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-temoignages',
  templateUrl: 'liste-temoignages.html',
})
export class ListeTemoignagesPage {
  temoins: Temoin[];
  shouldShow;
  //Pour verifier la selection d
    selectedTemoin : Temoin;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiSymfonyProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeTemoignagesPage');
  }

    ngOnInit() {
        this.shouldShow = false;
        this.apiProvider.getAllTemoins().then((data: Temoin[]) => {
            this.temoins = data;
        });
    }

    //A la selection d'un temoin
    onSelect(temoin: Temoin): void {
        this.selectedTemoin = temoin;
    }

    temoignageSelectionne(temoignage): void {
        this.navCtrl.push(TemoignagePage, {'temoignage': temoignage});
    }
}
