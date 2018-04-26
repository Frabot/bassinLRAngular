import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Temoignage} from "../../providers/model-class/model-class";

/**
 * Generated class for the TemoignagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temoignage',
  templateUrl: 'temoignage.html',
})
export class TemoignagePage {
    public temoignage: Temoignage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.temoignage = this.navParams.get('temoignage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemoignagePage');
  }

}
