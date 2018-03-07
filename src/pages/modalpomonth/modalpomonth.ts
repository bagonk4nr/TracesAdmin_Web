import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModalsPoToday} from "../../providers/modals/potoday";
import {ModalsPoMonth} from "../../providers/modals/pomonth";

/**
 * Generated class for the ModalpomonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalpomonth',
  templateUrl: 'modalpomonth.html',
})
export class ModalpomonthPage {

  sendAbsenData = {"cabangid":""};
  resposeDetailAbsenOn:any;
  dataDetailAbsenOn1:any;
  constructor( public modalsPoMonth: ModalsPoMonth,
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


    this.modalsPoMonth.postData(this.sendAbsenData).then((result) =>{
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
