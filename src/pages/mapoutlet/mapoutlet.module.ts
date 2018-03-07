import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapoutletPage } from './mapoutlet';

@NgModule({
  declarations: [
    MapoutletPage,
  ],
  imports: [
    IonicPageModule.forChild(MapoutletPage),
  ],
})
export class MapoutletPageModule {}
