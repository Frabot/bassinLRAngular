import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Bateau, Temoin} from "../../providers/model-class/model-class";

/**
 * Generated class for the ListeBateauxTemoignagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-bateaux-temoignages',
  templateUrl: 'liste-bateaux-temoignages.html',
})
export class ListeBateauxTemoignagesPage {
    public bateau: Bateau;
    shouldShow;

    //Pour verifier la selection d
    selectedTemoin : Temoin;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.bateau = this.navParams.get('bateau');
    }

    ngOnInit() {
        this.shouldShow = false;
    }

    //A la selection d'un temoin
    onSelect(temoin: Temoin): void {
        this.selectedTemoin = temoin;
    }
}
