import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import { AuthService } from "../../providers/auth-service/auth-service";


import {enableProdMode} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {TopScore} from "../../providers/auth-service/topscore";
import {StatusAbsensi} from "../../providers/auth-service/statusabsensi";
import {StatusAbsensiWeek} from "../../providers/auth-service/statusabsensiweek";
import {StatusAbsensiWeekOff} from "../../providers/auth-service/statusabsensiweekoff";
import {StatusAbsensiMonth} from "../../providers/auth-service/statusabsensimonth";
import {StatusAbsensiMonthOff} from "../../providers/auth-service/statusabsensimonthoff";
import {HomePage} from "../home/home";
import {StatusNOOToday} from "../../providers/auth-service/nootoday";
import {StatusNOOWeek} from "../../providers/auth-service/nooweek";
import {StatusNOOMonth} from "../../providers/auth-service/noomonth";
import {StatusPOToday} from "../../providers/auth-service/poperformancetoday";
import {StatusPOWeek} from "../../providers/auth-service/poperformanceweek";
import {StatusPOMonth} from "../../providers/auth-service/poperformancemonth";
import {StatusSalesPToday} from "../../providers/auth-service/salesperformancetoday";
import {StatusSalesPWeek} from "../../providers/auth-service/salesperformanceweek";
import {StatusSalesPMonth} from "../../providers/auth-service/salesperformancemonth";
import {StatusCollectToday} from "../../providers/auth-service/collecttoday";
import {StatusCollectMonth} from "../../providers/auth-service/collectmonth";
import {StatusCollectWeek} from "../../providers/auth-service/collectweek";
import {StatusVisitasiToday} from "../../providers/auth-service/visitasitoday";
import {StatusVisitasiWeek} from "../../providers/auth-service/visitasiweek";
import {StatusVisitasiMonth} from "../../providers/auth-service/visitasimonth";
import {StatusTimeINAwal} from "../../providers/auth-service/timeinawal";
import {StatusTimeINAkhir} from "../../providers/auth-service/timeinakhir";
import {StatusTimeOutAkhir} from "../../providers/auth-service/timeoutakhir";
import {StatusTimeOutAwal} from "../../providers/auth-service/timeoutawal";
import {CumulativeTopScore} from "../../providers/auth-service/topscorecumulative";
import {DataAllDashboard} from "../../providers/auth-service/alldashboard";


new HttpClientModule();
enableProdMode();

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  resposeData : any;
  resposeDataTopScore : any;
  resposeDataStatusAbsensi : any;
  resposeDataStatusAbsensiWeek : any;
  resposeDataStatusAbsensiWeekOff : any;
  resposeDataStatusAbsensiMonth : any;
  resposeDataStatusAbsensiMonthOff : any;
  resposeDataStatusNOOToday : any;
  resposeDataStatusNOOWeek : any;
  resposeDataStatusNOOMonth : any;
  resposeDataStatusPOToday : any;
  resposeDataStatusPOWeek : any;
  resposeDataStatusPOMonth : any;
  resposeDataStatusSalesPToday : any;
  resposeDataStatusSalesPWeek : any;
  resposeDataStatusSalesPMonth : any;
  resposeDataStatusCollectToday : any;
  resposeDataStatusCollectWeek : any;
  resposeDataStatusCollectMonth : any;
  resposeDataStatusVisitasiToday : any;
  resposeDataStatusVisitasiWeek : any;
  resposeDataStatusVisitasiMonth : any;
  resposeDataStatusTimeINAwal : any;
  resposeDataStatusTimeINAkhir : any;
  resposeDataStatusTimeOutAwal : any;
  resposeDataStatusTimeOutAkhir : any;
  resposeDatacumulativeTopScore : any;
  resposeDataAllDashboard:any;

  userData = {"username":"", "userpassword":""};
  dataCabang = {"cabang":""};
  userDatanya:any;


  public rows=[];
  public keys=[];
  public keyspersen=[];
  public rowsWeek=[];
  public keysWeek=[];
  public keysinawal=[];
  public keysinakhir=[];
  public keysoutawal=[];
  public keysoutakhir=[];

  public dataTopScores : any[];
  public dataStatusAbsensi: any[];
  public gaMasuk:any;
  public dataStatusAbsensiWeek: any[];
  public gaMasukWeek:any;
  public dataAbsensiMasukMonth : any;
  public gaMasukMonth: any;
  public dataNOOTodays: any;
  public dataNOOWeeks: any;
  public dataNOOMonths: any;
  public dataPOTodays: any;
  public dataPOWeeks: any;
  public dataPOMonths: any;
  public dataSalesPTodays: any;
  public dataSalesPWeeks: any;
  public dataSalesPMonths: any;
  public dataCollectTodays: any;
  public dataCollectWeeks: any;
  public dataCollectMonths: any;
  public dataVisitasiTodays: any;
  public dataVisitasiWeeks: any;
  public dataVisitasiMonths: any;
  public dataTimeINAwal : any;
  public dataTimeINAkhir : any;
  public dataTimeOutAwal : any;
  public dataTimeOutAkhir : any;
public dataAllDashboard1 : any;

  public rowspotoday =[];
  public rowspoweek =[];
  public rowspomonths = [];
  public rowssalesptoday =[];
  public rowssalespweek =[];
  public rowssalespmonths = [];
  public rowscollecttoday =[];
  public rowscollectweek =[];
  public rowscollectmonths = [];
  public rowsvisitasitoday =[];
  public rowsvisitasiweek =[];
  public rowsvisitasimonths = [];
  public rowsvisitasitodaypersen =[];
  public rowsvisitasiweekpersen =[];
  public rowsvisitasimonthspersen = [];
  public rowsinawal=[];
  public rowsinakhir=[];
  public rowsoutawal=[];
  public rowsoutakhir=[];

  public hasilvisittoday:any;
  public hasilvisitweek:any;
  public hasilvisitmonth:any;

  public jaminawal:any;
  public jaminakhir:any;
  public jamoutawal:any;
  public jamoutakhir:any;

  public datacumulativeTopScore:any;

  constructor(
    public dataAllDashboard: DataAllDashboard,
    public cumulativeTopScore: CumulativeTopScore, public statusTimeOutAwal: StatusTimeOutAwal,
    public statusTimeOutAkhir: StatusTimeOutAkhir, public statusTimeINAkhir: StatusTimeINAkhir,
    public statusTimeINAwal: StatusTimeINAwal, public statusVisitasiMonth: StatusVisitasiMonth,
    public statusVisitasiWeek: StatusVisitasiWeek, public statusVisitasiToday: StatusVisitasiToday,
    public statusCollectMonth: StatusCollectMonth, public statusCollectWeek: StatusCollectWeek,
    public statusCollectToday: StatusCollectToday, public statusSalesPMonth: StatusSalesPMonth,
    public statusSalesPWeek: StatusSalesPWeek, public statusSalesPToday: StatusSalesPToday,
    public statusPOMonth: StatusPOMonth, public statusPOWeek: StatusPOWeek, public statusPOToday: StatusPOToday,
    public statusNOOMonth: StatusNOOMonth,  public statusNOOWeek: StatusNOOWeek, public statusNOOToday: StatusNOOToday,
    public nav: NavParams, public statusAbsensiMonthOff: StatusAbsensiMonthOff, public statusAbsensiMonth: StatusAbsensiMonth,
    public statusAbsensiWeekOff: StatusAbsensiWeekOff, public statusAbsensiWeek: StatusAbsensiWeek,
    public statusAbsensi: StatusAbsensi, public topScore: TopScore, public navCtrl: NavController,
    public authService: AuthService, private toastCtrl:ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  datadashboard(){
    this.dataAllDashboard.postData(this.dataCabang).then((result) =>{
      this.resposeDataAllDashboard = result;

      const dataAllDashboard = JSON.parse(JSON.stringify(this.resposeDataAllDashboard));
     this.dataAllDashboard1 = dataAllDashboard
      console.log(this.dataAllDashboard1);
      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });

  }

  datatopscore(){
    this.topScore.postData().then((result) =>{
      this.resposeDataTopScore = result;
      console.log(this.resposeDataTopScore);
      const dataTopScore = JSON.parse(JSON.stringify(this.resposeDataTopScore));
      console.log(dataTopScore[0]['SPV_NAMA']);
      this.dataTopScores = dataTopScore[0]['SPV_NAMA'];

      //localStorage.setItem('dataTopScore', JSON.stringify(this.resposeDataTopScore) )
      //console.log(JSON.stringify(this.resposeDataTopScore))
    }, (err) => {
      //Connection failed message
      return this.presentToast(err);
    });
  }

  datastatusabsensi(){
    this.statusAbsensi.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusAbsensi = result;
      console.log(this.resposeDataStatusAbsensi);
      const dataAbsensiMasuk = JSON.parse(JSON.stringify(this.resposeDataStatusAbsensi));
      this.keys = this.getKeys(dataAbsensiMasuk, "jml");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rows.push([this.sumByKey(dataAbsensiMasuk, "jml", this.keys[i], "jml")]);
      }
      console.log(this.rows);
      this.dataStatusAbsensi = this.rows[0];
      this.gaMasuk = dataAbsensiMasuk.length - this.rows[0];

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusabsensiweek(){
    this.statusAbsensiWeek.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusAbsensiWeek = result;
      console.log(this.resposeDataStatusAbsensiWeek);
      const dataAbsensiMasukWeek = JSON.parse(JSON.stringify(this.resposeDataStatusAbsensiWeek));
      console.log(dataAbsensiMasukWeek.length);
      this.dataStatusAbsensiWeek = dataAbsensiMasukWeek.length;

      //localStorage.setItem('dataStatusAbsensiWeek', JSON.stringify(this.resposeDataStatusAbsensiWeek) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensiWeek))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusabsensiweekoff(){
    this.statusAbsensiWeekOff.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusAbsensiWeekOff = result;
      console.log(this.resposeDataStatusAbsensiWeekOff);
      const dataAbsensiMasukWeekOff = JSON.parse(JSON.stringify(this.resposeDataStatusAbsensiWeekOff));
      console.log(dataAbsensiMasukWeekOff.length);
      this.gaMasukWeek = dataAbsensiMasukWeekOff.length;

      //localStorage.setItem('dataStatusAbsensiWeekOff', JSON.stringify(this.resposeDataStatusAbsensiWeekOff) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensiWeekOff))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusabsensimonth(){
    this.statusAbsensiMonth.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusAbsensiMonth = result;
      console.log(this.resposeDataStatusAbsensiMonth);
      const dataAbsensiMasukMonth = JSON.parse(JSON.stringify(this.resposeDataStatusAbsensiMonth));
      console.log(dataAbsensiMasukMonth.length);
      this.dataAbsensiMasukMonth = dataAbsensiMasukMonth.length;

      //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusabsensimonthoff(){
    this.statusAbsensiMonthOff.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusAbsensiMonthOff = result;
      console.log(this.resposeDataStatusAbsensiMonthOff);
      const dataAbsensiMasukMonthOff = JSON.parse(JSON.stringify(this.resposeDataStatusAbsensiMonthOff));
      console.log(dataAbsensiMasukMonthOff.length);
      this.gaMasukMonth = dataAbsensiMasukMonthOff.length;
      this.navCtrl.push(HomePage, {
        dataTopScores1: this.dataTopScores,
        dataStatusAbsensi1: this.dataStatusAbsensi,
        gaMasuk1: this.gaMasuk,
        dataStatusAbsensiWeek1: this.dataStatusAbsensiWeek,
        gaMasukWeek1: this.gaMasukWeek,
        dataAbsensiMasukMonth1: this.dataAbsensiMasukMonth,
        gaMasukMonth1: this.gaMasukMonth,
        dataNOOToday1: this.dataNOOTodays,
        dataNOOWeek1: this.dataNOOWeeks,
        dataNOOMonth1: this.dataNOOMonths,
        dataPOToday1 : this.dataPOTodays,
        dataPOWeek1: this.dataPOWeeks,
        dataPOMonth1: this.dataPOMonths,
        dataSalesPToday1: this.dataSalesPTodays,
        dataSalesPWeek1: this.dataSalesPWeeks,
        dataSalesPMonth1: this.dataSalesPMonths,
        dataCollectToday1: this.dataCollectTodays,
        dataCollectWeek1: this.dataCollectWeeks,
        dataCollectMonth1: this.dataCollectMonths,
        dataVisitToday1: this.dataVisitasiTodays,
        dataVisitWeek1: this.dataVisitasiWeeks,
        dataVisitMonth1: this.dataVisitasiMonths,
        dataVisitPersenToday1 : this.hasilvisittoday,
        dataVisitPersenWeek1 : this.hasilvisitweek,
        dataVisitPersenMonth1 : this.hasilvisitmonth,
        dataTimeINAwal1: this.dataTimeINAwal,
        dataTimeINAkhir1: this.dataTimeINAkhir,
        dataTimeOutAwal1: this.dataTimeOutAwal,
        dataTimeOutAkhir1: this.dataTimeOutAkhir,
        jaminawal1: this.jaminawal,
        jaminakhir1: this.jaminakhir,
        jamoutawal1: this.jamoutawal,
        jamoutakhir1: this.jamoutakhir,
        cumulativeTopScore1: this.datacumulativeTopScore
      });
      //localStorage.setItem('dataStatusAbsensiMonthOff', JSON.stringify(this.resposeDataStatusAbsensiMonthOff) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonthOff))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusnootoday(){
    this.statusNOOToday.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusNOOToday = result;
      console.log(this.resposeDataStatusNOOToday);
      const dataNOOToday = JSON.parse(JSON.stringify(this.resposeDataStatusNOOToday));
      console.log(dataNOOToday.length);
      this.dataNOOTodays = dataNOOToday.length;

      //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusnooweek(){
    this.statusNOOWeek.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusNOOWeek = result;
      console.log(this.resposeDataStatusNOOWeek);
      const dataNOOWeek = JSON.parse(JSON.stringify(this.resposeDataStatusNOOWeek));
      console.log(dataNOOWeek.length);
      this.dataNOOWeeks = dataNOOWeek.length;

      //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusnoomonth(){
    this.statusNOOMonth.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusNOOMonth = result;
      console.log(this.resposeDataStatusNOOMonth);
      const dataNOOMonth = JSON.parse(JSON.stringify(this.resposeDataStatusNOOMonth));
      console.log(dataNOOMonth.length);
      this.dataNOOMonths = dataNOOMonth.length;

      //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatuspotoday(){
    this.statusPOToday.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusPOToday = result;
      console.log(this.resposeDataStatusPOToday);
      const dataPOToday = JSON.parse(JSON.stringify(this.resposeDataStatusPOToday));
      this.keys = this.getKeys(dataPOToday, "TotalQTYValue");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowspotoday.push([this.sumByKey(dataPOToday, "TotalQTYValue", this.keys[i], "TotalQTYValue")]);
      }
      console.log(this.rowspotoday);
      console.log(this.sumJSON(this.rowspotoday));
      this.dataPOTodays = this.to2DecWithComma(this.sumJSON(this.rowspotoday));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatuspoweek(){
    this.statusPOWeek.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusPOWeek = result;
      console.log(this.resposeDataStatusPOWeek);
      const dataPOWeek = JSON.parse(JSON.stringify(this.resposeDataStatusPOWeek));
      this.keys = this.getKeys(dataPOWeek, "TotalQTYValue");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowspoweek.push([this.sumByKey(dataPOWeek, "TotalQTYValue", this.keys[i], "TotalQTYValue")]);
      }
      console.log(this.rowspoweek);
      console.log(this.sumJSON(this.rowspoweek));
      this.dataPOWeeks = this.to2DecWithComma(this.sumJSON(this.rowspoweek));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatuspomonth(){
    this.statusPOMonth.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusPOMonth = result;
      console.log(this.resposeDataStatusPOMonth);
      const dataPOMonth = JSON.parse(JSON.stringify(this.resposeDataStatusPOMonth));
      this.keys = this.getKeys(dataPOMonth, "TotalQTYValue");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowspomonths.push([this.sumByKey(dataPOMonth, "TotalQTYValue", this.keys[i], "TotalQTYValue")]);
      }
      console.log(this.rowspomonths);
      console.log(this.sumJSON(this.rowspomonths));
      this.dataPOMonths =  this.to2DecWithComma(this.sumJSON(this.rowspomonths));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatussalesptoday(){
    this.statusSalesPToday.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusSalesPToday = result;
      console.log(this.resposeDataStatusSalesPToday);
      const dataSalesToday = JSON.parse(JSON.stringify(this.resposeDataStatusSalesPToday));
      this.keys = this.getKeys(dataSalesToday, "sales");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowssalesptoday.push([this.sumByKey(dataSalesToday, "sales", this.keys[i], "sales")]);
      }
      console.log(this.rowssalesptoday);
      console.log(this.sumJSON(this.rowssalesptoday));
      this.dataSalesPTodays =  this.to2DecWithComma(this.sumJSON(this.rowssalesptoday));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatussalespweek(){
    this.statusSalesPWeek.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusSalesPWeek = result;
      console.log(this.resposeDataStatusSalesPWeek);
      const dataSalesWeek = JSON.parse(JSON.stringify(this.resposeDataStatusSalesPWeek));
      this.keys = this.getKeys(dataSalesWeek, "sales");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowssalespweek.push([this.sumByKey(dataSalesWeek, "sales", this.keys[i], "sales")]);
      }
      console.log(this.rowssalespweek);
      console.log(this.sumJSON(this.rowssalespweek));
      this.dataSalesPWeeks =  this.to2DecWithComma(this.sumJSON(this.rowssalespweek));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatussalespmonth(){
    this.statusSalesPMonth.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusSalesPMonth = result;
      console.log(this.resposeDataStatusSalesPMonth);
      const dataSalesMonth = JSON.parse(JSON.stringify(this.resposeDataStatusSalesPMonth));
      this.keys = this.getKeys(dataSalesMonth, "sales");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowssalespmonths.push([this.sumByKey(dataSalesMonth, "sales", this.keys[i], "sales")]);
      }
      console.log(this.rowssalespmonths);
      console.log(this.sumJSON(this.rowssalespmonths));
      this.dataSalesPMonths =  this.to2DecWithComma(this.sumJSON(this.rowssalespmonths));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatuscollecttoday(){
    this.statusCollectToday.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusCollectToday = result;
      console.log(this.resposeDataStatusCollectToday);
      const dataCollectToday = JSON.parse(JSON.stringify(this.resposeDataStatusCollectToday));
      this.keys = this.getKeys(dataCollectToday, "Collect");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowscollecttoday.push([this.sumByKey(dataCollectToday, "Collect", this.keys[i], "Collect")]);
      }
      console.log(this.rowscollecttoday);
      console.log(this.sumJSON(this.rowscollecttoday));
      this.dataCollectTodays =  this.to2DecWithComma(this.sumJSON(this.rowscollecttoday));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatuscollectweek(){
    this.statusCollectWeek.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusCollectWeek = result;
      console.log(this.resposeDataStatusCollectWeek);
      const dataCollectWeek = JSON.parse(JSON.stringify(this.resposeDataStatusCollectWeek));
      this.keys = this.getKeys(dataCollectWeek, "Collect");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowscollectweek.push([this.sumByKey(dataCollectWeek, "Collect", this.keys[i], "Collect")]);
      }
      console.log(this.rowscollectweek);
      console.log(this.sumJSON(this.rowscollectweek));
      this.dataCollectWeeks =  this.to2DecWithComma(this.sumJSON(this.rowscollectweek));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatuscollectmonth(){
    this.statusCollectMonth.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusCollectMonth = result;
      console.log(this.resposeDataStatusCollectMonth);
      const dataCollectMonth = JSON.parse(JSON.stringify(this.resposeDataStatusCollectMonth));
      this.keys = this.getKeys(dataCollectMonth, "Collect");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowscollectmonths.push([this.sumByKey(dataCollectMonth, "Collect", this.keys[i], "Collect")]);
      }
      console.log(this.rowscollectmonths);
      console.log(this.sumJSON(this.rowscollectmonths));
      this.dataCollectMonths =  this.to2DecWithComma(this.sumJSON(this.rowscollectmonths));


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusvisitasitoday(){
    this.statusVisitasiToday.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusVisitasiToday = result;
      console.log(this.resposeDataStatusVisitasiToday);
      const dataVisitasiToday = JSON.parse(JSON.stringify(this.resposeDataStatusVisitasiToday));
      this.keys = this.getKeys(dataVisitasiToday, "outletHari");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowsvisitasitoday.push([this.sumByKey(dataVisitasiToday, "outletHari", this.keys[i], "outletHari")]);
      }
      console.log("Visit : " +this.rowsvisitasitoday);

      this.dataVisitasiTodays =  this.rowsvisitasitoday;

      this.keyspersen = this.getKeys(dataVisitasiToday, "jumlahPersenHari");
      for(let i=0, len=this.keyspersen.length; i<len; i++) {
        this.rowsvisitasitodaypersen.push([this.sumByKey(dataVisitasiToday, "jumlahPersenHari", this.keys[i], "jumlahPersenHari")]);
      }
      console.log("Persen : " +this.rowsvisitasitoday);
      this.hasilvisittoday = this.rowsvisitasitodaypersen;

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusvisitasiweek(){
    this.statusVisitasiWeek.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusVisitasiWeek = result;
      console.log(this.resposeDataStatusVisitasiWeek);
      const dataVisitasiWeek = JSON.parse(JSON.stringify(this.resposeDataStatusVisitasiWeek));
      this.keys = this.getKeys(dataVisitasiWeek, "outletWeek");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowsvisitasiweek.push([this.sumByKey(dataVisitasiWeek, "outletWeek", this.keys[i], "outletWeek")]);
      }
      console.log("Visit : " +this.rowsvisitasiweek);

      this.dataVisitasiWeeks =  this.rowsvisitasiweek;

      this.keyspersen = this.getKeys(dataVisitasiWeek, "jumlahPersenWeek");
      for(let i=0, len=this.keyspersen.length; i<len; i++) {
        this.rowsvisitasiweekpersen.push([this.sumByKey(dataVisitasiWeek, "jumlahPersenWeek", this.keys[i], "jumlahPersenWeek")]);
      }
      console.log("Persen : " +this.rowsvisitasiweekpersen);
      this.hasilvisitweek = this.rowsvisitasiweekpersen;

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatusvisitasimonth(){
    this.statusVisitasiMonth.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusVisitasiMonth = result;
      console.log(this.resposeDataStatusVisitasiMonth);
      const dataVisitasiMonth = JSON.parse(JSON.stringify(this.resposeDataStatusVisitasiMonth));
      this.keys = this.getKeys(dataVisitasiMonth, "outletBulan");
      for(let i=0, len=this.keys.length; i<len; i++) {
        this.rowsvisitasimonths.push([this.sumByKey(dataVisitasiMonth, "outletBulan", this.keys[i], "outletBulan")]);
      }
      console.log("Visit : " +this.rowsvisitasimonths);

      this.dataVisitasiMonths =  this.rowsvisitasimonths;

      this.keyspersen = this.getKeys(dataVisitasiMonth, "jumlahPersenBulan");
      for(let i=0, len=this.keyspersen.length; i<len; i++) {
        this.rowsvisitasimonthspersen.push([this.sumByKey(dataVisitasiMonth, "jumlahPersenBulan", this.keys[i], "jumlahPersenBulan")]);
      }
      console.log("Persen : " +this.rowsvisitasimonthspersen);
      this.hasilvisitmonth = this.rowsvisitasimonthspersen;

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatustimeinawal(){
    this.statusTimeINAwal.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusTimeINAwal = result;
      console.log(this.resposeDataStatusTimeINAwal);
      const dataTimeINAwal = JSON.parse(JSON.stringify(this.resposeDataStatusTimeINAwal));

      console.log("Visit : " + dataTimeINAwal[0]['Nama_Lengkap']);
      this.dataTimeINAwal =  dataTimeINAwal[0]['Nama_Lengkap'];

      console.log("Persen : " + dataTimeINAwal[0]['jml']);
      this.jaminawal = dataTimeINAwal[0]['jml'];
      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatustimeinakhir(){
    this.statusTimeINAkhir.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusTimeINAkhir = result;
      console.log(this.resposeDataStatusTimeINAkhir);
      const dataTimeINAkhir = JSON.parse(JSON.stringify(this.resposeDataStatusTimeINAkhir));

      console.log("Visit : " + dataTimeINAkhir[0]['Nama_Lengkap']);
      this.dataTimeINAkhir =  dataTimeINAkhir[0]['Nama_Lengkap'];

      console.log("Persen : " + dataTimeINAkhir[0]['jml']);
      this.jaminakhir = dataTimeINAkhir[0]['jml'];
      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatustimeoutakhir(){
    this.statusTimeOutAkhir.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusTimeOutAkhir = result;
      console.log(this.resposeDataStatusTimeOutAkhir);
      const dataTimeOutAkhir = JSON.parse(JSON.stringify(this.resposeDataStatusTimeOutAkhir));

      console.log("Visit : " + dataTimeOutAkhir[0]['Nama_lengkap']);
      this.dataTimeOutAkhir =  dataTimeOutAkhir[0]['Nama_lengkap'];

      console.log("Persen : " + dataTimeOutAkhir[0]['jml']);
      this.jamoutakhir = dataTimeOutAkhir[0]['jml'];
      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datastatustimeoutawal(){
    this.statusTimeOutAwal.postData(this.dataCabang).then((result) =>{
      this.resposeDataStatusTimeOutAwal = result;
      console.log(this.resposeDataStatusTimeOutAwal);
      const dataTimeOutAwal = JSON.parse(JSON.stringify(this.resposeDataStatusTimeOutAwal));

      console.log("Visit : " +dataTimeOutAwal[0]['Nama_Lengkap']);
      this.dataTimeOutAwal= dataTimeOutAwal[0]['Nama_Lengkap'];

      console.log("Persen : " + dataTimeOutAwal[0]['jml']);
      this.jamoutawal = dataTimeOutAwal[0]['jml'];
      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  datacumulativetopscore(){
    this.cumulativeTopScore.postData(this.dataCabang).then((result) =>{
      this.resposeDatacumulativeTopScore = result;
      console.log(this.resposeDatacumulativeTopScore);
      const datacumulativeTopScore = JSON.parse(JSON.stringify(this.resposeDatacumulativeTopScore));

      console.log("Visit : " + this.to2DecWithComma(datacumulativeTopScore));
      this.datacumulativeTopScore= this.to2DecWithComma(datacumulativeTopScore);


      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
  }

  login(){

    if(this.userData.username && this.userData.userpassword){

      this.authService.postData(this.userData).then((result) =>{
        this.resposeData = result;
        console.log(this.resposeData);
        if(this.resposeData){
          const data = JSON.parse(JSON.stringify(this.resposeData));
          this.userDatanya = data;
          this.dataCabang.cabang = this.userDatanya[0]['Cabang_ID'];
          console.log("cabang : " + this.dataCabang.cabang);
          console.log("UsrID : " + this.userDatanya[0]['Usr_ID']);
          localStorage.setItem('userDatanya', JSON.stringify(this.resposeData) )
          this.navCtrl.push(HomePage);
         /* this.datatopscore();
          this.datastatusabsensi();
          this.datastatusabsensiweek();
          this.datastatusabsensiweekoff();
          this.datastatusabsensimonth();
          this.datastatusabsensimonthoff();
          this.datastatusnootoday();
          this.datastatusnooweek();
          this.datastatusnoomonth();
          this.datastatuspotoday();
          this.datastatuspoweek();
          this.datastatuspomonth();
          this.datastatussalesptoday();
          this.datastatussalespweek();
          this.datastatussalespmonth();
          this.datastatuscollecttoday();
          this.datastatuscollectweek();
          this.datastatuscollectmonth();
          this.datastatusvisitasitoday();
          this.datastatusvisitasiweek();
          this.datastatusvisitasimonth();
          this.datastatustimeinawal();
          this.datastatustimeinakhir();
          this.datastatustimeoutawal();
          this.datastatustimeoutakhir();
          this.datacumulativetopscore(); */
        }
        else{
          return this.presentToast("Please give valid username and password");
        }
      }, (err) => {
        //Connection failed message
        return this.presentToast(err);
      });
    }
    else{
      return this.presentToast("Give username and password");
    }

  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    return toast.present();
  }

  /**
   * Enumerate all key values based on groupBy key name
   * @param {Array} array An array of objects to use
   * @param {String} groypBy Name of the key to use for grouping
   * @returns {Array} An array of all unique values found for the key
   */
  getKeys(array, groupBy){
// list all keys
    let keys = [];

      for (let i = 0, len = array.length; i < len; i++)
        if (keys.indexOf(array[i][groupBy]) == -1)
          keys.push(array[i][groupBy]);
      return keys;

  }

  /**
   * Calc the sum of the values of a key in an array of objects
   * @param {Array} array An array of objects to use
   * @param {String} keyField Name of the key to use for grouping
   * @param {String} keyValue Filter only objects with this value
   * @param {String} valueField The key name of the thing to calc sum of
   * @returns {Number} Sum
   */
  sumByKey(array, keyField, keyValue, valueField){
    let sum = 0;
    for(let i=0, len=array.length; i<len; i++)
      if(array[i][keyField] == keyValue)
        sum += parseFloat(array[i][valueField])
    return sum;
  }

  sumJSON(array){
    let sumi = 0;
    for(let a= 0, len = array.length; a<len; a++){
      sumi += parseFloat(array[a]) /1000000;

    }
    return sumi;
  }

  to2DecWithComma(num)
  {
    num="" + Math.floor(num*100.0 + 0.5)/100.0;

    let i=num.indexOf(".");

    if ( i<0 ) num+=",00";
    else {
      num=num.substring(0,i) + "," + num.substring(i + 1);
      let nDec=(num.length - i) - 1;
      if ( nDec==0 ) num+="00";
      else if ( nDec==1 ) num+="0";
      else if ( nDec>2 ) num=num.substring(0,i + 3);
    }

    return num;
  }



}
