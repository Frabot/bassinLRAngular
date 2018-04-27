import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeBateauxTemoignagesPage } from './liste-bateaux-temoignages';

@NgModule({
  declarations: [
    ListeBateauxTemoignagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeBateauxTemoignagesPage),
  ],
})
export class ListeBateauxTemoignagesPageModule {}
