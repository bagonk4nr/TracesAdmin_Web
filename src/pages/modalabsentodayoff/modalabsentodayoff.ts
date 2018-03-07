import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModalsAbsenTodayOff} from "../../providers/modals/absentodayoff";

/**
 * Generated class for the ModalabsentodayoffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalabsentodayoff',
  templateUrl: 'modalabsentodayoff.html',
})
export class ModalabsentodayoffPage {
  sendAbsenData = {"cabangid":""};
  resposeDetailAbsenOn:any;
  dataDetailAbsenOn1:any;
  constructor( public modalsAbsenTodayOff: ModalsAbsenTodayOff,
               public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalabsentodayonPage');
    this.loaddata();
  }
  loaddata(){
    this.sendata();

  }

  sendata(){
    const dataUser = JSON.parse(localStorage.getItem('userDatanya'));
    this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];


    this.modalsAbsenTodayOff.postData(this.sendAbsenData).then((result) =>{
      this.resposeDetailAbsenOn = result;

      const dataDetailAbsenOn = JSON.parse(JSON.stringify(this.resposeDetailAbsenOn));
      console.log(dataDetailAbsenOn);
      this.dataDetailAbsenOn1 =  dataDetailAbsenOn;

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  closeModal() {
    this.navCtrl.pop();
  }
}
