
import {Component, enableProdMode} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {TopScore} from "../../providers/auth-service/topscore";
import {StatusAbsensi} from "../../providers/auth-service/statusabsensi";
import {StatusCollectMonth} from "../../providers/auth-service/collectmonth";
import {StatusNOOToday} from "../../providers/auth-service/nootoday";
import {StatusNOOWeek} from "../../providers/auth-service/nooweek";
import {StatusAbsensiMonth} from "../../providers/auth-service/statusabsensimonth";
import {StatusAbsensiMonthOff} from "../../providers/auth-service/statusabsensimonthoff";
import {StatusNOOMonth} from "../../providers/auth-service/noomonth";
import {StatusPOToday} from "../../providers/auth-service/poperformancetoday";
import {StatusPOWeek} from "../../providers/auth-service/poperformanceweek";
import {StatusPOMonth} from "../../providers/auth-service/poperformancemonth";
import {StatusSalesPToday} from "../../providers/auth-service/salesperformancetoday";
import {StatusSalesPWeek} from "../../providers/auth-service/salesperformanceweek";
import {StatusSalesPMonth} from "../../providers/auth-service/salesperformancemonth";
import {StatusCollectToday} from "../../providers/auth-service/collecttoday";
import {StatusCollectWeek} from "../../providers/auth-service/collectweek";
import {StatusVisitasiToday} from "../../providers/auth-service/visitasitoday";
import {StatusVisitasiWeek} from "../../providers/auth-service/visitasiweek";
import {StatusVisitasiMonth} from "../../providers/auth-service/visitasimonth";
import {StatusTimeINAwal} from "../../providers/auth-service/timeinawal";
import {StatusTimeINAkhir} from "../../providers/auth-service/timeinakhir";
import {StatusTimeOutAkhir} from "../../providers/auth-service/timeoutakhir";
import {StatusTimeOutAwal} from "../../providers/auth-service/timeoutawal";
import {CumulativeTopScore} from "../../providers/auth-service/topscorecumulative";
import {StatusAbsensiWeekOff} from "../../providers/auth-service/statusabsensiweekoff";
import {StatusAbsensiWeek} from "../../providers/auth-service/statusabsensiweek";
import {HttpClientModule} from "@angular/common/http";
import {ModalcumulativePage} from "../modalcumulative/modalcumulative";
import {ModalabsentodayonPage} from "../modalabsentodayon/modalabsentodayon";
import {ModalabsentodayoffPage} from "../modalabsentodayoff/modalabsentodayoff";
import {ModalabsenweekonPage} from "../modalabsenweekon/modalabsenweekon";
import {ModalabsenweekoffPage} from "../modalabsenweekoff/modalabsenweekoff";
import {ModalabsenmonthonPage} from "../modalabsenmonthon/modalabsenmonthon";
import {ModalabsenmonthoffPage} from "../modalabsenmonthoff/modalabsenmonthoff";
import {ModalnootodayPage} from "../modalnootoday/modalnootoday";
import {ModalnooweekPage} from "../modalnooweek/modalnooweek";
import {ModalnoomonthPage} from "../modalnoomonth/modalnoomonth";
import {ModalpotodayPage} from "../modalpotoday/modalpotoday";
import {ModalpoweekPage} from "../modalpoweek/modalpoweek";
import {ModalpomonthPage} from "../modalpomonth/modalpomonth";
import {ModalsalesweekPage} from "../modalsalesweek/modalsalesweek";
import {ModalsalestodayPage} from "../modalsalestoday/modalsalestoday";
import {ModalsalesmonthPage} from "../modalsalesmonth/modalsalesmonth";
import {ModalcollecttodayPage} from "../modalcollecttoday/modalcollecttoday";
import {ModalcollectweekPage} from "../modalcollectweek/modalcollectweek";
import {ModalcollectmonthPage} from "../modalcollectmonth/modalcollectmonth";
import {DataAllDashboard} from "../../providers/auth-service/alldashboard";



new HttpClientModule();
enableProdMode();
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})

export class HomePage   {
  public dataTopScores1 : any[];
  public dataStatusAbsensi1: any[];
  public gaMasuk1:any;
  public dataStatusAbsensiWeek1: any[];
  public gaMasukWeek1:any;
  public dataAbsensiMasukMonth1 : any;
  public gaMasukMonth1: any;
  public dataNOOToday1: any;
  public dataNOOWeek1:any;
  public dataNOOMonth1:any;
  public dataPOToday1: any;
  public dataPOWeek1:any;
  public dataPOMonth1:any;
  public dataSalesPToday1: any;
  public dataSalesPWeek1:any;
  public dataSalesPMonth1:any;
  public dataCollectToday1: any;
  public dataCollectWeek1:any;
  public dataCollectMonth1:any;
  public dataVisitToday1:any;
  public dataVisitWeek1:any;
  public dataVisitMonth1:any;
  public dataVisitPersenToday1:any;
  public dataVisitPersenWeek1:any;
  public dataVisitPersenMonth1:any;
  public dataAVGVisitToday:any;
  public dataAVGVisitWeek:any;
  public dataAVGVisitMonth:any;
  public dataTimeINAwal1:any;
  public dataTimeINAkhir1:any;
  public dataTimeOutAwal1:any;
  public dataTimeOutAkhir1:any;
  public jaminawal1:any;
  public jaminakhir1:any;
  public jamoutawal:any;
  public jamoutakhir1:any;
  public cumulativeTopScore1:any;

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

  dataCabang = {"cabang":""};
  userDatanya:any;


  private rows=[];
  private keys=[];
  private keyspersen=[];

  private dataTopScores : any[];
  private dataStatusAbsensi: any[];
  private gaMasuk:any;
  private dataStatusAbsensiWeek: any[];
  private gaMasukWeek:any;
  private dataAbsensiMasukMonth : any;
  private gaMasukMonth: any;
  private dataNOOTodays: any;
  private dataNOOWeeks: any;
  private dataNOOMonths: any;
  private dataPOTodays: any;
  private dataPOWeeks: any;
  private dataPOMonths: any;
  private dataSalesPTodays: any;
  private dataSalesPWeeks: any;
  private dataSalesPMonths: any;
  private dataCollectTodays: any;
  private dataCollectWeeks: any;
  private dataCollectMonths: any;
  private dataVisitasiTodays: any;
  private dataVisitasiWeeks: any;
  private dataVisitasiMonths: any;
  private dataTimeINAwal : any;
  private dataTimeINAkhir : any;
  private dataTimeOutAwal : any;
  private dataTimeOutAkhir : any;
  private jamoutawal1 : any;

  private rowspotoday =[];
  private rowspoweek =[];
  private rowspomonths = [];
  private rowssalesptoday =[];
  private rowssalespweek =[];
  private rowssalespmonths = [];
  private rowscollecttoday =[];
  private rowscollectweek =[];
  private rowscollectmonths = [];
  private rowsvisitasitoday =[];
  private rowsvisitasiweek =[];
  private rowsvisitasimonths = [];
  private rowsvisitasitodaypersen =[];
  private rowsvisitasiweekpersen =[];
  private rowsvisitasimonthspersen = [];


  private hasilvisittoday:any;
  private hasilvisitweek:any;
  private hasilvisitmonth:any;

  private jaminawal:any;
  private jaminakhir:any;

  private jamoutakhir:any;

  private datacumulativeTopScore:any;

  outletData = {"outletid":"", "outletname":"", "useridemp":""};

  resposeDataAllDashboard:any;
  dataAllDashboard1:any;
  constructor(
    public dataAllDashboard: DataAllDashboard,
    public modalCtrl: ModalController,
               public cumulativeTopScore: CumulativeTopScore, public statusTimeOutAwal: StatusTimeOutAwal,
               public statusTimeOutAkhir: StatusTimeOutAkhir, public statusTimeINAkhir: StatusTimeINAkhir,
               public statusTimeINAwal: StatusTimeINAwal,
               public statusVisitasiMonth: StatusVisitasiMonth,
               public statusVisitasiWeek: StatusVisitasiWeek, public statusVisitasiToday: StatusVisitasiToday,
               public statusCollectMonth: StatusCollectMonth, public statusCollectWeek: StatusCollectWeek,
               public statusCollectToday: StatusCollectToday, public statusSalesPMonth: StatusSalesPMonth,
               public statusSalesPWeek: StatusSalesPWeek, public statusSalesPToday: StatusSalesPToday,
               public statusPOMonth: StatusPOMonth, public statusPOWeek: StatusPOWeek,
               public statusPOToday: StatusPOToday, public statusNOOMonth: StatusNOOMonth,
               public statusNOOWeek: StatusNOOWeek, public statusNOOToday: StatusNOOToday,
               public statusAbsensiMonthOff: StatusAbsensiMonthOff,
               public statusAbsensiMonth: StatusAbsensiMonth,
               public statusAbsensiWeekOff: StatusAbsensiWeekOff,
               public statusAbsensiWeek: StatusAbsensiWeek,
               public statusAbsensi: StatusAbsensi, public topScore: TopScore,
               public nav: NavParams, public navCtrl: NavController) {


    /* const data = JSON.parse(localStorage.getItem('dataTopScore'));
     this.dataTopScores = data;

     const dataAbsensiMasuk = JSON.parse(localStorage.getItem('dataStatusAbsensi'));
     this.keys = this.getKeys(dataAbsensiMasuk, "jml");
     for(let i=0, len=this.keys.length; i<len; i++) {
       this.rows.push([this.sumByKey(dataAbsensiMasuk, "jml", this.keys[i], "jml")]);
     }
     console.log(this.rows);
     this.dataStatusAbsensi = this.rows[0];
     this.gaMasuk = dataAbsensiMasuk.length - this.rows[0];


     const dataAbsensiMasukWeek = JSON.parse(localStorage.getItem('dataStatusAbsensiWeek'));
     console.log(dataAbsensiMasukWeek.length);
     this.dataStatusAbsensiWeek = dataAbsensiMasukWeek.length;

     const dataAbsensiMasukWeekOff = JSON.parse(localStorage.getItem('dataStatusAbsensiWeekOff'));
     console.log(dataAbsensiMasukWeekOff.length);
     this.gaMasukWeek = dataAbsensiMasukWeekOff.length;

     const dataAbsensiMasukMonth = JSON.parse(localStorage.getItem('dataStatusAbsensiMonth'));
     console.log(dataAbsensiMasukMonth.length);
     this.dataAbsensiMasukMonth = dataAbsensiMasukMonth.length;

     const dataAbsensiMasukMonthOff = JSON.parse(localStorage.getItem('dataStatusAbsensiMonthOff'));
     console.log(dataAbsensiMasukMonthOff.length);
     this.gaMasukMonth = dataAbsensiMasukMonthOff.length; */

  }

 /* fromLogin(){
    this.dataTopScores1 = this.nav.get('dataTopScores1');
    this.dataStatusAbsensi1= this.nav.get('dataStatusAbsensi1');
    this.gaMasuk1 = this.nav.get('gaMasuk1');
    this.dataStatusAbsensiWeek1 = this.nav.get('dataStatusAbsensiWeek1');
    this.gaMasukWeek1 = this.nav.get('gaMasukWeek1');
    this.dataAbsensiMasukMonth1 = this.nav.get('dataAbsensiMasukMonth1');
    this.gaMasukMonth1 = this.nav.get('gaMasukMonth1');
    this.dataNOOToday1 = this.nav.get('dataNOOToday1');
    this.dataNOOWeek1 = this.nav.get('dataNOOWeek1');
    this.dataNOOMonth1 = this.nav.get('dataNOOMonth1');
    this.dataPOToday1 = this.nav.get('dataPOToday1');
    this.dataPOWeek1 = this.nav.get('dataPOWeek1');
    this.dataPOMonth1 = this.nav.get('dataPOMonth1');
    this.dataSalesPToday1 = this.nav.get('dataSalesPToday1');
    this.dataSalesPWeek1 = this.nav.get('dataSalesPWeek1');
    this.dataSalesPMonth1 = this.nav.get('dataSalesPMonth1');
    this.dataCollectToday1 = this.nav.get('dataCollectToday1');
    this.dataCollectWeek1 = this.nav.get('dataCollectWeek1');
    this.dataCollectMonth1 = this.nav.get('dataCollectMonth1');
    this.dataVisitToday1 = this.nav.get('dataVisitToday1');
    this.dataVisitWeek1 = this.nav.get('dataVisitWeek1');
    this.dataVisitMonth1 = this.nav.get('dataVisitMonth1');
    this.dataVisitPersenToday1 = this.nav.get('dataVisitPersenToday1');
    this.dataVisitPersenWeek1 = this.nav.get('dataVisitPersenWeek1');
    this.dataVisitPersenMonth1 = this.nav.get('dataVisitPersenMonth1');
    this.dataTimeINAwal1 = this.nav.get('dataTimeINAwal1');
    this.dataTimeINAkhir1 = this.nav.get('dataTimeINAkhir1');
    this.dataTimeOutAwal1 = this.nav.get('dataTimeOutAwal1');
    this.dataTimeOutAkhir1 = this.nav.get('dataTimeOutAkhir1');
    this.jaminawal1 = this.nav.get('jaminawal1');
    this.jaminakhir1 = this.nav.get('jaminakhir1');
    this.jamoutawal = this.nav.get('jamoutawal');
    this.jamoutakhir1 = this.nav.get('jamoutakhir1');
    this.cumulativeTopScore1 = this.nav.get('cumulativeTopScore1');
  } */

  ionViewDidLoad() {
    this.reloadData();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.reloadData();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 30000);
  }

  modalShow(){

    let myModal = this.modalCtrl.create(ModalcumulativePage);
    myModal.present();

  }

  modalShow1(){
    let myModal = this.modalCtrl.create(ModalabsentodayonPage);
    myModal.present();

  }

  modalShow2(){
    let myModal = this.modalCtrl.create(ModalabsentodayoffPage);
    myModal.present();

  }

  modalShow3(){
    let myModal = this.modalCtrl.create(ModalabsenweekonPage);
    myModal.present();

  }

  modalShow4(){
    let myModal = this.modalCtrl.create(ModalabsenweekoffPage);
    myModal.present();

  }

  modalShow5(){
    let myModal = this.modalCtrl.create(ModalabsenmonthonPage);
    myModal.present();

  }

  modalShow6(){
    let myModal = this.modalCtrl.create(ModalabsenmonthoffPage);
    myModal.present();

  }

  modalShow7(){
    let myModal = this.modalCtrl.create(ModalnootodayPage);
    myModal.present();

  }

  modalShow8(){
    let myModal = this.modalCtrl.create(ModalnooweekPage);
    myModal.present();

  }

  modalShow9(){
    let myModal = this.modalCtrl.create(ModalnoomonthPage);
    myModal.present();

  }

  modalShow10(){
    let myModal = this.modalCtrl.create(ModalpotodayPage);
    myModal.present();

  }

  modalShow11(){
    let myModal = this.modalCtrl.create(ModalpoweekPage);
    myModal.present();

  }

  modalShow12(){
    let myModal = this.modalCtrl.create(ModalpomonthPage);
    myModal.present();

  }

  modalShow13(){
    let myModal = this.modalCtrl.create(ModalsalestodayPage);
    myModal.present();

  }

  modalShow14(){
    let myModal = this.modalCtrl.create(ModalsalesweekPage);
    myModal.present();

  }

  modalShow15(){
    let myModal = this.modalCtrl.create(ModalsalesmonthPage);
    myModal.present();

  }

  modalShow16(){
    let myModal = this.modalCtrl.create(ModalcollecttodayPage);
    myModal.present();

  }

  modalShow17(){
    let myModal = this.modalCtrl.create(ModalcollectweekPage);
    myModal.present();

  }

  modalShow18(){
    let myModal = this.modalCtrl.create(ModalcollectmonthPage);
    myModal.present();

  }

  reloadData(){
    const dataAbsensiMasuk = JSON.parse(localStorage.getItem('userDatanya'));
    this.dataCabang.cabang = dataAbsensiMasuk[0]['Cabang_ID'];
    this.datadashboard();

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

  /*loadData(){
    this.dataTopScores1= //this.dataAllDashboard1['spvname'],
      this. dataStatusAbsensi1= this.dataStatusAbsensi,
      this.gaMasuk1= this.gaMasuk,
      this.dataStatusAbsensiWeek1= this.dataStatusAbsensiWeek,
      this.gaMasukWeek1= this.gaMasukWeek,
      this.dataAbsensiMasukMonth1= this.dataAbsensiMasukMonth,
      this.gaMasukMonth1= this.gaMasukMonth,
      this.dataNOOToday1= this.dataNOOTodays,
      this.dataNOOWeek1= this.dataNOOWeeks,
      this.dataNOOMonth1= this.dataNOOMonths,
      this.dataPOToday1 = this.dataPOTodays,
      this.dataPOWeek1= this.dataPOWeeks,
      this.dataPOMonth1= this.dataPOMonths,
      this.dataSalesPToday1= this.dataSalesPTodays,
      this.dataSalesPWeek1= this.dataSalesPWeeks,
      this.dataSalesPMonth1= this.dataSalesPMonths,
      this.dataCollectToday1= this.dataCollectTodays,
      this.dataCollectWeek1= this.dataCollectWeeks,
      this.dataCollectMonth1= this.dataCollectMonths,
      this.dataVisitToday1= this.dataVisitasiTodays,
      this.dataVisitWeek1= this.dataVisitasiWeeks,
      this.dataVisitMonth1= this.dataVisitasiMonths,
      this.dataVisitPersenToday1 = this.hasilvisittoday,
      this.dataVisitPersenWeek1 = this.hasilvisitweek,
      this.dataVisitPersenMonth1 = this.hasilvisitmonth,
      this.dataTimeINAwal1= this.dataTimeINAwal,
      this.dataTimeINAkhir1= this.dataTimeINAkhir,
      this.dataTimeOutAwal1= this.dataTimeOutAwal,
      this.dataTimeOutAkhir1= this.dataTimeOutAkhir,
      this.jaminawal1= this.jaminawal,
      this.jaminakhir1= this.jaminakhir,
      this.jamoutawal1= this.jamoutawal,
      this.jamoutakhir1= this.jamoutakhir,
      this.cumulativeTopScore1=""; //this.dataAllDashboard1['jumlahrangking']
  }*/

  datadashboard(){
    this.dataAllDashboard.postData(this.dataCabang).then((result) =>{
      this.resposeDataAllDashboard = result;

      const dataAllDashboard = JSON.parse(JSON.stringify(this.resposeDataAllDashboard));
      this.dataAllDashboard1 = dataAllDashboard;
      console.log(this.dataAllDashboard1);

      this.dataTopScores1= this.dataAllDashboard1['spvname'],
        this. dataStatusAbsensi1= this.dataAllDashboard1['jumlahmasuktoday'],
        this.gaMasuk1= this.dataAllDashboard1['jumlahofftoday'],
        this.dataStatusAbsensiWeek1= this.dataAllDashboard1['jumlahonweek'],
        this.gaMasukWeek1= this.dataAllDashboard1['jumlahoffweek'],
        this.dataAbsensiMasukMonth1= this.dataAllDashboard1['jumlahonmonth'],
        this.gaMasukMonth1= this.dataAllDashboard1['jumlahoffmonth'],
        this.dataNOOToday1= this.dataAllDashboard1['jmlnootoday'],
        this.dataNOOWeek1= this.dataAllDashboard1['jmlnooweek'],
        this.dataNOOMonth1= this.dataAllDashboard1['jmlnoomonth'],
        this.dataPOToday1 = this.dataAllDashboard1['POToday'],
        this.dataPOWeek1= this.dataAllDashboard1['POWeek'],
        this.dataPOMonth1= this.dataAllDashboard1['POMonth'],
        this.dataSalesPToday1= this.dataAllDashboard1['SalesToday'],
        this.dataSalesPWeek1= this.dataAllDashboard1['SalesWeek'],
        this.dataSalesPMonth1= this.dataAllDashboard1['SalesMonth'],
        this.dataCollectToday1= this.dataAllDashboard1['CollectToday'],
        this.dataCollectWeek1= this.dataAllDashboard1['CollectWeekly'],
        this.dataCollectMonth1= this.dataAllDashboard1['CollectMonthly'],
        this.dataVisitToday1= this.dataAllDashboard1['outletToday'],
        this.dataVisitWeek1= this.dataAllDashboard1['outletWeek'],
        this.dataVisitMonth1= this.dataAllDashboard1['outletBulan'],
        this.dataVisitPersenToday1 = this.dataAllDashboard1['targettoday'],
        this.dataVisitPersenWeek1 = this.dataAllDashboard1['targetweek'],
        this.dataVisitPersenMonth1 = this.dataAllDashboard1['targetmonth'],
        this.dataAVGVisitToday =  this.dataAllDashboard1['AvgVisitToday'],
        this.dataAVGVisitWeek =  this.dataAllDashboard1['AvgVisitWeek'],
        this.dataAVGVisitMonth =  this.dataAllDashboard1['AvgVisitMonth'],
        this.dataTimeINAwal1= this.dataAllDashboard1['timeinawalnamalengkap'],
        this.dataTimeINAkhir1= this.dataAllDashboard1['timeinakhirnamalengkap'],
        this.dataTimeOutAwal1= this.dataAllDashboard1['timeoutawalnamalengkap'],
        this.dataTimeOutAkhir1= this.dataAllDashboard1['timeoutakhirnamalengkap'],
        this.jaminawal1= this.dataAllDashboard1['jaminnya'],
        this.jaminakhir1= this.dataAllDashboard1['jaminakhirnya'],
        this.jamoutawal1= this.dataAllDashboard1['jamoutawalnya'],
        this.jamoutakhir1= this.dataAllDashboard1['jamoutakhirnya'],
        this.cumulativeTopScore1= this.dataAllDashboard1['jumlahrangking']


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
      return console.log(err);
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

      console.log("NilaiTopScore : " + datacumulativeTopScore[0]['jumlahrangking']);
      this.datacumulativeTopScore= datacumulativeTopScore[0]['jumlahrangking'];
     // this.loadData();

      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
    }, (err) => {
      //Connection failed message
      return console.log(err);
    });
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
