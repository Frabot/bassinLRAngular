import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MuseePage } from './musee';

@NgModule({
  declarations: [
    MuseePage,
  ],
  imports: [
    IonicPageModule.forChild(MuseePage),
  ],
})
export class MuseePageModule {}
