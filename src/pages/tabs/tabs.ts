import { Component } from '@angular/core';

import { GaleriePage } from '../galerie/galerie';
import { BateauPage } from '../bateau/bateau';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BateauPage;
  tab3Root = GaleriePage;

  constructor() {

  }
}
