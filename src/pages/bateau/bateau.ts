import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Bateau} from "../../providers/model-class/model-class";
import {ListeBateauxTemoignagesPage} from "../liste-bateaux-temoignages/liste-bateaux-temoignages";

@Component({
  selector: 'page-bateau',
  templateUrl: 'bateau.html'
})
export class BateauPage {
    public bateau: Bateau;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.bateau = this.navParams.get('bateau');
    }

    ngOnInit() {

    }

    voirTemoignages(temoins):void {
        this.navCtrl.push(ListeBateauxTemoignagesPage, {'temoins': temoins});
    }
}
