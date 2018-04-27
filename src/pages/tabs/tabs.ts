import { Component } from '@angular/core';

import { GaleriePage } from '../galerie/galerie';
import { HomePage } from '../home/home';
import {ListeBateauxPage} from "../liste-bateaux/liste-bateaux";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListeBateauxPage;
  tab3Root = GaleriePage;

  constructor() {

  }
}
