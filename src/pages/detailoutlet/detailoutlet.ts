import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailOutlet} from "../../providers/auth-service/detailoutletnya";

/**
 * Generated class for the DetailoutletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailoutlet',
  templateUrl: 'detailoutlet.html',
})



export class DetailoutletPage {

  resposeDetailOutlet: any;
  outletData = {"outletid":"", "outletname":"", "usrid":""};
  dataDetailOutlet1: any;
  outletname:any;
  telephon:any;
  alamat:any;
  propinsi:any;
  kabupaten:any;
  kecamatan:any;
  kelurahan:any;
  statusbangunan:any;
  lamaberdiri:any;
  lokasioutlet:any;
  jenisoutlet:any;
  lamatop:any;
  statuspembayaran:any;
  namasales:any;
  namapemilik:any;
  note:any;
  photooutlet:any;
  photopemilik:any;
  photoktp:any;
  photooutlet1:any;
  photopemilik1:any;
  photoktp1:any;

  constructor(public detailOutlets: DetailOutlet, public navCtrl: NavController, public navParams: NavParams) {

    this.outletData.outletid = this.navParams.get("outletid");
    this.outletData.outletname = this.navParams.get("outletname");
    this.outletData.usrid = this.navParams.get("usrid");
    console.log(this.outletData.outletid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailoutletPage');
    this.datacumulativetopscore();
  }

  datacumulativetopscore(){
    this.outletData.outletid = this.navParams.get("outletid");
    this.outletData.outletname = this.navParams.get("outletname");
    this.outletData.usrid = this.navParams.get("usrid");
    console.log(this.outletData.outletid);
    this.detailOutlets.postData(this.outletData).then((result) =>{
      this.resposeDetailOutlet = result;
      console.log(this.resposeDetailOutlet);
      const dataDetailOutlet = JSON.parse(JSON.stringify(this.resposeDetailOutlet));
      this.dataDetailOutlet1= dataDetailOutlet;
      this.outletname = this.dataDetailOutlet1[0]['outletname'];
      this.telephon =  this.dataDetailOutlet1[0]['outletnotelp'];
      this.alamat = this.dataDetailOutlet1[0]['outletalamat'];
      this.propinsi = this.dataDetailOutlet1[0]['outletpropinsi'];
      this.kabupaten = this.dataDetailOutlet1[0]['outletkabupaten'];
      this.kecamatan = this.dataDetailOutlet1[0]['outletkecamatan'];
      this.kelurahan = this.dataDetailOutlet1[0]['outletkelurahan'];
      this.statusbangunan = this.dataDetailOutlet1[0]['wsstatusbangunan'];
      this.lamaberdiri = this.dataDetailOutlet1[0]['wslamaberdiri'];
      this.lokasioutlet = this.dataDetailOutlet1[0]['outletletak'];
      this.jenisoutlet = this.dataDetailOutlet1[0]['outletstatus'];
      this.lamatop = this.dataDetailOutlet1[0]['outletlamatop'];
      this.statuspembayaran = this.dataDetailOutlet1[0]['wssistempembayaranTOP'];
      this.namasales = this.dataDetailOutlet1[0]['outletnamasales'];
      this.namapemilik = this.dataDetailOutlet1[0]['wsowneroutlet'];
      this.note = this.dataDetailOutlet1[0]['outletnote'];
      this.photooutlet = this.dataDetailOutlet1[0]['outletfoto'];
      this.photopemilik = this.dataDetailOutlet1[0]['pemilikfoto'];
      this.photoktp = this.dataDetailOutlet1[0]['ktpfoto'];

      let filepath = "https://taysbakers.com/traceimages/";
      this.photooutlet1 = filepath + this.photooutlet;
      this.photopemilik1 =  filepath + this.photopemilik;
      this.photoktp1 = filepath + this.photoktp;

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
