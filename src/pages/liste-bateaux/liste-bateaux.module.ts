import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeBateauxPage } from './liste-bateaux';

@NgModule({
  declarations: [
    ListeBateauxPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeBateauxPage),
  ],
})
export class ListeBateauxPageModule {}
