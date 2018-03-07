import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StatusOutlet} from "../../providers/outlet/outlet";
import {Subject} from "rxjs/Subject";
import {Http} from "@angular/http";
import {ComboRSM} from "../../providers/outlet/comborsm";
import {ComboJenis} from "../../providers/outlet/combojenis";
import { ModalController } from 'ionic-angular';
import { DetailoutletPage } from '../detailoutlet/detailoutlet';
import {MapoutletPage} from '../mapoutlet/mapoutlet';

/**
 * Generated class for the OutletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class Outlets{
  outletnamasales: string;
  outletid: string;
  outletname: string;
  outletalamat: string;
  outletpropinsi: string;
  wsoutletstatusactivation: string;
  outletlatitude: string;
  outletlongitude: string;
  outletmapicon: string;
}

@IonicPage()
@Component({
  selector: 'page-outlet',
  templateUrl: 'outlet.html',
})
export class OutletPage  {
  dateAwal:any;
  dateAkhir:any;
  dtTrigger: Subject<any> = new Subject();
  outletData = {"outletid":"", "outletname":"", "usrid":""};
  outletDatas = {"outletid":"", "outletname":"", "usrid":""};
  mapData = {"latitude":"", "longitude":"", "icon":""};
  resposeDataComboRSM: any;
  dataComboRSM1: any;
  dataComboJenis1:any;
  myDate: any;
  myDate1: any;
  mySelect: any;
  mySelect1: any;
  resposeDataOutlet:any;
  dataOutlets : Outlets[] = [];
  sendDataFilter = {"usridnya":"", "tanggalawal":"", "tanggalakhir":"", "pakairsm":"", "rsm":"", "pakaijenis":"", "jenis":""};
  sendDataFilters = {"usridnya":"", "tanggalawal":"", "tanggalakhir":"", "pakairsm":"", "rsm":"", "pakaijenis":"", "jenis":""};
  constructor( public modalCtrl: ModalController,
    public comboJenis: ComboJenis, public comboRSM: ComboRSM, public http: Http, public statusOutlet: StatusOutlet, public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {

    this.comborsmasm();
    this.combojenis();
    this.myDate = new Date().toISOString();
    this.myDate1 = new Date().toISOString();
    this.mySelect = "9998";
    this.mySelect1 = "";
    this.loaddata();
    console.log('ionViewDidLoad OutletPage');
  }

  loaddata(){
    this.loadDataUser();

   this.statusOutlet.postData(this.sendDataFilter)
      .then((result) =>{
      this.resposeDataOutlet = result;
      console.log(this.resposeDataOutlet);
      const dataOutlet = JSON.parse(JSON.stringify(this.resposeDataOutlet));
      this.dataOutlets = dataOutlet;

      this.dtTrigger.next();

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });

  }

  modalShow(data: any, data1: any){
    this.outletDatas.outletid = data;
    this.outletDatas.outletname = data1;
    const dataUser = JSON.parse(localStorage.getItem('userDatanya'));
    this.outletDatas.usrid = dataUser[0]['Usr_ID'];
    console.log(this.outletDatas.outletid);
    console.log(this.outletDatas.usrid);
    this.showdetailoutlet();
  }

  showdetailoutlet(){
    let obj = this.outletDatas;
    let myModal = this.modalCtrl.create(DetailoutletPage, obj);
    myModal.present();
  }

  showMaps(data:any, data1:any, data2:any){
    this.mapData.latitude = data;
    this.mapData.longitude = data1;
    this.mapData.icon = data2;
    console.log(this.mapData.icon);
    let obj1 = this.mapData;
    let modalMaps = this.modalCtrl.create(MapoutletPage, obj1);
    modalMaps.present();
  }

  loadDataUser(){
    const dataUser = JSON.parse(localStorage.getItem('userDatanya'));
    this.sendDataFilter.usridnya = dataUser[0]['Usr_ID'];
    this.dateAwal = new Date().toISOString();
    this.dateAwal = this.dateAwal.substring(0, 10);
    this.sendDataFilter.tanggalawal = this.dateAwal;

    this.dateAkhir = new Date().toISOString();
    this.dateAkhir = this.dateAkhir.substring(0, 10);
    this.sendDataFilter.tanggalakhir = this.dateAkhir;

    this.sendDataFilter.pakaijenis='';
    this.sendDataFilter.jenis='';
  }

  filterOutlet() {
    const dataUser = JSON.parse(localStorage.getItem('userDatanya'));
    this.sendDataFilters.usridnya = dataUser[0]['Usr_ID'];

    this.dateAwal = this.myDate.toString();
    this.dateAwal = this.dateAwal.substring(0, 10);
    this.sendDataFilters.tanggalawal = this.dateAwal;

    this.dateAkhir = this.myDate1.toString();
    this.dateAkhir = this.dateAkhir.substring(0, 10);
    this.sendDataFilters.tanggalakhir = this.dateAkhir;

    this.sendDataFilters.rsm = this.mySelect.toString();
    if(this.sendDataFilters.rsm != ""){
      this.sendDataFilters.pakairsm = '';
    }
    this.sendDataFilters.jenis = this.mySelect1.toString();
    this.sendDataFilters.pakaijenis = '';

    console.log(this.sendDataFilters.tanggalawal);
    console.log(this.sendDataFilters.tanggalakhir);
    console.log(this.sendDataFilters.rsm);
    console.log(this.sendDataFilters.jenis);
    console.log(this.sendDataFilters.usridnya);
    console.log(this.sendDataFilters);
    this.statusOutlet.postData(this.sendDataFilters)
      .then((result) =>{
        this.resposeDataOutlet = result;
        console.log(this.resposeDataOutlet);
        const dataOutlet = JSON.parse(JSON.stringify(this.resposeDataOutlet));
        this.dataOutlets = dataOutlet;

        this.dtTrigger.next();

        //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
        //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
      }, (err) => {
        //Connection failed message
        return console.log(err);
      });

  }


  comborsmasm(){
    this.comboRSM.postData().then((result) =>{
      this.resposeDataComboRSM = result;
      console.log(this.resposeDataComboRSM);
      const dataComboRSM = JSON.parse(JSON.stringify(this.resposeDataComboRSM));

      this.dataComboRSM1 =  dataComboRSM;

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  combojenis(){
    this.comboJenis.postData().then((result) =>{
      this.resposeDataComboRSM = result;
      console.log(this.resposeDataComboRSM);
      const dataComboJenis = JSON.parse(JSON.stringify(this.resposeDataComboRSM));

      this.dataComboJenis1 =  dataComboJenis;

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

}
