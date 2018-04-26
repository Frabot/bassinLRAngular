import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeTemoignagesPage } from './liste-temoignages';

@NgModule({
  declarations: [
    ListeTemoignagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeTemoignagesPage),
  ],
})
export class ListeTemoignagesPageModule {}
