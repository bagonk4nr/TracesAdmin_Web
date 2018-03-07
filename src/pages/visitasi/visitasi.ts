import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ComboSales} from "../../providers/trackings/combosales";
import {StatusVisitasi} from "../../providers/visitasis/visitasis";
import {Subject} from "rxjs/Subject";
import {MapoutletPage} from "../mapoutlet/mapoutlet";

/**
 * Generated class for the VisitasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitasi',
  templateUrl: 'visitasi.html',
})
export class VisitasiPage {
  dateAwal:any;
  dateAkhir:any;
  dtTrigger: Subject<any> = new Subject();
  resposeDataVisitasi:any;
  resposeDataComboSales:any;
  dataComboSales1:any;
  myDate: any;
  myDate1: any;
  dataVisitasis:any;
  visitasiData = {"usridnya":"", "tanggalawal":"", "tanggalakhir":""};
  mapData = {"latitude":"", "longitude":"", "icon":""};

  constructor(
    public modalCtrl: ModalController,
    public statusVisitasi:StatusVisitasi,
    public comboSales: ComboSales,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.myDate = new Date().toISOString();
    this.myDate1 = new Date().toISOString();
    console.log('ionViewDidLoad VisitasiPage');
    this.combosales();
    this. loaddata();

  }

  loaddata(){
    this.lodadatatable();
    this.statusVisitasi.postData(this.visitasiData)
      .then((result) =>{
        this.resposeDataVisitasi = result;
        console.log(this.resposeDataVisitasi);
        const dataOutlet = JSON.parse(JSON.stringify(this.resposeDataVisitasi));
        this.dataVisitasis = dataOutlet;

        this.dtTrigger.next();

        //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
        //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
      }, (err) => {
        //Connection failed message
        return console.log(err);
      });
  }

  lodadatatable(){
    const dataUser = JSON.parse(localStorage.getItem('userDatanya'));
    this.visitasiData.usridnya = dataUser[0]['Usr_ID'];
    this.dateAwal = new Date().toISOString();
    this.dateAwal = this.dateAwal.substring(0, 10);
    this.visitasiData.tanggalawal = this.dateAwal;

    this.dateAkhir = new Date().toISOString();
    this.dateAkhir = this.dateAkhir.substring(0, 10);
    this.visitasiData.tanggalakhir = this.dateAkhir;
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

  showMaps1(data:any, data1:any, data2:any){
    this.mapData.latitude = data;
    this.mapData.longitude = data1;
    this.mapData.icon = data2;
    console.log(this.mapData.icon);
    let obj1 = this.mapData;
    let modalMaps = this.modalCtrl.create(MapoutletPage, obj1);
    modalMaps.present();
  }

  filterOutlet() {

    const dataUser = JSON.parse(localStorage.getItem('userDatanya'));
    this.visitasiData.usridnya = dataUser[0]['Usr_ID'];

    this.dateAwal = this.myDate.toString();
    this.dateAwal = this.dateAwal.substring(0, 10);
    this.visitasiData.tanggalawal = this.dateAwal;

    this.dateAkhir = this.myDate1.toString();
    this.dateAkhir = this.dateAkhir.substring(0, 10);
    this.visitasiData.tanggalakhir = this.dateAkhir;

    this.statusVisitasi.postData(this.visitasiData)
      .then((result) =>{
        this.resposeDataVisitasi = result;
        console.log(this.resposeDataVisitasi);
        const dataOutlet = JSON.parse(JSON.stringify(this.resposeDataVisitasi));
        this.dataVisitasis = dataOutlet;

        this.dtTrigger.next();

        //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
        //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
      }, (err) => {
        //Connection failed message
        return console.log(err);
      });

  }

  combosales(){
    this.comboSales.postData().then((result) =>{
      this.resposeDataComboSales = result;
      console.log(this.resposeDataComboSales);
      const dataComboSales = JSON.parse(JSON.stringify(this.resposeDataComboSales));

      this.dataComboSales1 =  dataComboSales;

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

}
