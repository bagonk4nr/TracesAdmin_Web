import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutletPage } from './outlet';
import { DataTablesModule } from 'angular-datatables';


@NgModule({

  declarations: [
    OutletPage, DataTablesModule,
  ],
  imports: [
    IonicPageModule.forChild(OutletPage), DataTablesModule
  ],
})

export class OutletPageModule {


}
