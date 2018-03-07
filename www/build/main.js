webpackJsonp([27],Array(53).concat([
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_topscore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_statusabsensi__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_collectmonth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_nootoday__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_nooweek__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_statusabsensimonth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_statusabsensimonthoff__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_noomonth__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_poperformancetoday__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_poperformanceweek__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_poperformancemonth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_salesperformancetoday__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_salesperformanceweek__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_salesperformancemonth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_collecttoday__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_collectweek__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_visitasitoday__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_visitasiweek__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_visitasimonth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_timeinawal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_timeinakhir__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_timeoutakhir__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_timeoutawal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_topscorecumulative__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_statusabsensiweekoff__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_statusabsensiweek__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__modalcumulative_modalcumulative__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__modalabsentodayon_modalabsentodayon__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__modalabsentodayoff_modalabsentodayoff__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__modalabsenweekon_modalabsenweekon__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__modalabsenweekoff_modalabsenweekoff__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__modalabsenmonthon_modalabsenmonthon__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__modalabsenmonthoff_modalabsenmonthoff__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__modalnootoday_modalnootoday__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__modalnooweek_modalnooweek__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__modalnoomonth_modalnoomonth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__modalpotoday_modalpotoday__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__modalpoweek_modalpoweek__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__modalpomonth_modalpomonth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__modalsalesweek_modalsalesweek__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__modalsalestoday_modalsalestoday__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__modalsalesmonth_modalsalesmonth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__modalcollecttoday_modalcollecttoday__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__modalcollectweek_modalcollectweek__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__modalcollectmonth_modalcollectmonth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_auth_service_alldashboard__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















































new __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var HomePage = (function () {
    function HomePage(dataAllDashboard, modalCtrl, cumulativeTopScore, statusTimeOutAwal, statusTimeOutAkhir, statusTimeINAkhir, statusTimeINAwal, statusVisitasiMonth, statusVisitasiWeek, statusVisitasiToday, statusCollectMonth, statusCollectWeek, statusCollectToday, statusSalesPMonth, statusSalesPWeek, statusSalesPToday, statusPOMonth, statusPOWeek, statusPOToday, statusNOOMonth, statusNOOWeek, statusNOOToday, statusAbsensiMonthOff, statusAbsensiMonth, statusAbsensiWeekOff, statusAbsensiWeek, statusAbsensi, topScore, nav, navCtrl) {
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
        this.dataAllDashboard = dataAllDashboard;
        this.modalCtrl = modalCtrl;
        this.cumulativeTopScore = cumulativeTopScore;
        this.statusTimeOutAwal = statusTimeOutAwal;
        this.statusTimeOutAkhir = statusTimeOutAkhir;
        this.statusTimeINAkhir = statusTimeINAkhir;
        this.statusTimeINAwal = statusTimeINAwal;
        this.statusVisitasiMonth = statusVisitasiMonth;
        this.statusVisitasiWeek = statusVisitasiWeek;
        this.statusVisitasiToday = statusVisitasiToday;
        this.statusCollectMonth = statusCollectMonth;
        this.statusCollectWeek = statusCollectWeek;
        this.statusCollectToday = statusCollectToday;
        this.statusSalesPMonth = statusSalesPMonth;
        this.statusSalesPWeek = statusSalesPWeek;
        this.statusSalesPToday = statusSalesPToday;
        this.statusPOMonth = statusPOMonth;
        this.statusPOWeek = statusPOWeek;
        this.statusPOToday = statusPOToday;
        this.statusNOOMonth = statusNOOMonth;
        this.statusNOOWeek = statusNOOWeek;
        this.statusNOOToday = statusNOOToday;
        this.statusAbsensiMonthOff = statusAbsensiMonthOff;
        this.statusAbsensiMonth = statusAbsensiMonth;
        this.statusAbsensiWeekOff = statusAbsensiWeekOff;
        this.statusAbsensiWeek = statusAbsensiWeek;
        this.statusAbsensi = statusAbsensi;
        this.topScore = topScore;
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.dataCabang = { "cabang": "" };
        this.rows = [];
        this.keys = [];
        this.keyspersen = [];
        this.rowspotoday = [];
        this.rowspoweek = [];
        this.rowspomonths = [];
        this.rowssalesptoday = [];
        this.rowssalespweek = [];
        this.rowssalespmonths = [];
        this.rowscollecttoday = [];
        this.rowscollectweek = [];
        this.rowscollectmonths = [];
        this.rowsvisitasitoday = [];
        this.rowsvisitasiweek = [];
        this.rowsvisitasimonths = [];
        this.rowsvisitasitodaypersen = [];
        this.rowsvisitasiweekpersen = [];
        this.rowsvisitasimonthspersen = [];
        this.outletData = { "outletid": "", "outletname": "", "useridemp": "" };
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
    HomePage.prototype.ionViewDidLoad = function () {
        this.reloadData();
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.reloadData();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 30000);
    };
    HomePage.prototype.modalShow = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_29__modalcumulative_modalcumulative__["a" /* ModalcumulativePage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow1 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_30__modalabsentodayon_modalabsentodayon__["a" /* ModalabsentodayonPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow2 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_31__modalabsentodayoff_modalabsentodayoff__["a" /* ModalabsentodayoffPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow3 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_32__modalabsenweekon_modalabsenweekon__["a" /* ModalabsenweekonPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow4 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_33__modalabsenweekoff_modalabsenweekoff__["a" /* ModalabsenweekoffPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow5 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_34__modalabsenmonthon_modalabsenmonthon__["a" /* ModalabsenmonthonPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow6 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_35__modalabsenmonthoff_modalabsenmonthoff__["a" /* ModalabsenmonthoffPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow7 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_36__modalnootoday_modalnootoday__["a" /* ModalnootodayPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow8 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_37__modalnooweek_modalnooweek__["a" /* ModalnooweekPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow9 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_38__modalnoomonth_modalnoomonth__["a" /* ModalnoomonthPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow10 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_39__modalpotoday_modalpotoday__["a" /* ModalpotodayPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow11 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_40__modalpoweek_modalpoweek__["a" /* ModalpoweekPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow12 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_41__modalpomonth_modalpomonth__["a" /* ModalpomonthPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow13 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_43__modalsalestoday_modalsalestoday__["a" /* ModalsalestodayPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow14 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_42__modalsalesweek_modalsalesweek__["a" /* ModalsalesweekPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow15 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_44__modalsalesmonth_modalsalesmonth__["a" /* ModalsalesmonthPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow16 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_45__modalcollecttoday_modalcollecttoday__["a" /* ModalcollecttodayPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow17 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_46__modalcollectweek_modalcollectweek__["a" /* ModalcollectweekPage */]);
        myModal.present();
    };
    HomePage.prototype.modalShow18 = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_47__modalcollectmonth_modalcollectmonth__["a" /* ModalcollectmonthPage */]);
        myModal.present();
    };
    HomePage.prototype.reloadData = function () {
        var dataAbsensiMasuk = JSON.parse(localStorage.getItem('userDatanya'));
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
    };
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
    HomePage.prototype.datadashboard = function () {
        var _this = this;
        this.dataAllDashboard.postData(this.dataCabang).then(function (result) {
            _this.resposeDataAllDashboard = result;
            var dataAllDashboard = JSON.parse(JSON.stringify(_this.resposeDataAllDashboard));
            _this.dataAllDashboard1 = dataAllDashboard;
            console.log(_this.dataAllDashboard1);
            _this.dataTopScores1 = _this.dataAllDashboard1['spvname'],
                _this.dataStatusAbsensi1 = _this.dataAllDashboard1['jumlahmasuktoday'],
                _this.gaMasuk1 = _this.dataAllDashboard1['jumlahofftoday'],
                _this.dataStatusAbsensiWeek1 = _this.dataAllDashboard1['jumlahonweek'],
                _this.gaMasukWeek1 = _this.dataAllDashboard1['jumlahoffweek'],
                _this.dataAbsensiMasukMonth1 = _this.dataAllDashboard1['jumlahonmonth'],
                _this.gaMasukMonth1 = _this.dataAllDashboard1['jumlahoffmonth'],
                _this.dataNOOToday1 = _this.dataAllDashboard1['jmlnootoday'],
                _this.dataNOOWeek1 = _this.dataAllDashboard1['jmlnooweek'],
                _this.dataNOOMonth1 = _this.dataAllDashboard1['jmlnoomonth'],
                _this.dataPOToday1 = _this.dataAllDashboard1['POToday'],
                _this.dataPOWeek1 = _this.dataAllDashboard1['POWeek'],
                _this.dataPOMonth1 = _this.dataAllDashboard1['POMonth'],
                _this.dataSalesPToday1 = _this.dataAllDashboard1['SalesToday'],
                _this.dataSalesPWeek1 = _this.dataAllDashboard1['SalesWeek'],
                _this.dataSalesPMonth1 = _this.dataAllDashboard1['SalesMonth'],
                _this.dataCollectToday1 = _this.dataAllDashboard1['CollectToday'],
                _this.dataCollectWeek1 = _this.dataAllDashboard1['CollectWeekly'],
                _this.dataCollectMonth1 = _this.dataAllDashboard1['CollectMonthly'],
                _this.dataVisitToday1 = _this.dataAllDashboard1['outletToday'],
                _this.dataVisitWeek1 = _this.dataAllDashboard1['outletWeek'],
                _this.dataVisitMonth1 = _this.dataAllDashboard1['outletBulan'],
                _this.dataVisitPersenToday1 = _this.dataAllDashboard1['targettoday'],
                _this.dataVisitPersenWeek1 = _this.dataAllDashboard1['targetweek'],
                _this.dataVisitPersenMonth1 = _this.dataAllDashboard1['targetmonth'],
                _this.dataAVGVisitToday = _this.dataAllDashboard1['AvgVisitToday'],
                _this.dataAVGVisitWeek = _this.dataAllDashboard1['AvgVisitWeek'],
                _this.dataAVGVisitMonth = _this.dataAllDashboard1['AvgVisitMonth'],
                _this.dataTimeINAwal1 = _this.dataAllDashboard1['timeinawalnamalengkap'],
                _this.dataTimeINAkhir1 = _this.dataAllDashboard1['timeinakhirnamalengkap'],
                _this.dataTimeOutAwal1 = _this.dataAllDashboard1['timeoutawalnamalengkap'],
                _this.dataTimeOutAkhir1 = _this.dataAllDashboard1['timeoutakhirnamalengkap'],
                _this.jaminawal1 = _this.dataAllDashboard1['jaminnya'],
                _this.jaminakhir1 = _this.dataAllDashboard1['jaminakhirnya'],
                _this.jamoutawal1 = _this.dataAllDashboard1['jamoutawalnya'],
                _this.jamoutakhir1 = _this.dataAllDashboard1['jamoutakhirnya'],
                _this.cumulativeTopScore1 = _this.dataAllDashboard1['jumlahrangking'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datatopscore = function () {
        var _this = this;
        this.topScore.postData().then(function (result) {
            _this.resposeDataTopScore = result;
            console.log(_this.resposeDataTopScore);
            var dataTopScore = JSON.parse(JSON.stringify(_this.resposeDataTopScore));
            console.log(dataTopScore[0]['SPV_NAMA']);
            _this.dataTopScores = dataTopScore[0]['SPV_NAMA'];
            //localStorage.setItem('dataTopScore', JSON.stringify(this.resposeDataTopScore) )
            //console.log(JSON.stringify(this.resposeDataTopScore))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusabsensi = function () {
        var _this = this;
        this.statusAbsensi.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensi = result;
            console.log(_this.resposeDataStatusAbsensi);
            var dataAbsensiMasuk = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensi));
            _this.keys = _this.getKeys(dataAbsensiMasuk, "jml");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rows.push([_this.sumByKey(dataAbsensiMasuk, "jml", _this.keys[i], "jml")]);
            }
            console.log(_this.rows);
            _this.dataStatusAbsensi = _this.rows[0];
            _this.gaMasuk = dataAbsensiMasuk.length - _this.rows[0];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusabsensiweek = function () {
        var _this = this;
        this.statusAbsensiWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensiWeek = result;
            console.log(_this.resposeDataStatusAbsensiWeek);
            var dataAbsensiMasukWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensiWeek));
            console.log(dataAbsensiMasukWeek.length);
            _this.dataStatusAbsensiWeek = dataAbsensiMasukWeek.length;
            //localStorage.setItem('dataStatusAbsensiWeek', JSON.stringify(this.resposeDataStatusAbsensiWeek) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiWeek))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusabsensiweekoff = function () {
        var _this = this;
        this.statusAbsensiWeekOff.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensiWeekOff = result;
            console.log(_this.resposeDataStatusAbsensiWeekOff);
            var dataAbsensiMasukWeekOff = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensiWeekOff));
            console.log(dataAbsensiMasukWeekOff.length);
            _this.gaMasukWeek = dataAbsensiMasukWeekOff.length;
            //localStorage.setItem('dataStatusAbsensiWeekOff', JSON.stringify(this.resposeDataStatusAbsensiWeekOff) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiWeekOff))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusabsensimonth = function () {
        var _this = this;
        this.statusAbsensiMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensiMonth = result;
            console.log(_this.resposeDataStatusAbsensiMonth);
            var dataAbsensiMasukMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensiMonth));
            console.log(dataAbsensiMasukMonth.length);
            _this.dataAbsensiMasukMonth = dataAbsensiMasukMonth.length;
            //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusabsensimonthoff = function () {
        var _this = this;
        this.statusAbsensiMonthOff.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensiMonthOff = result;
            console.log(_this.resposeDataStatusAbsensiMonthOff);
            var dataAbsensiMasukMonthOff = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensiMonthOff));
            console.log(dataAbsensiMasukMonthOff.length);
            _this.gaMasukMonth = dataAbsensiMasukMonthOff.length;
            //localStorage.setItem('dataStatusAbsensiMonthOff', JSON.stringify(this.resposeDataStatusAbsensiMonthOff) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonthOff))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusnootoday = function () {
        var _this = this;
        this.statusNOOToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusNOOToday = result;
            console.log(_this.resposeDataStatusNOOToday);
            var dataNOOToday = JSON.parse(JSON.stringify(_this.resposeDataStatusNOOToday));
            console.log(dataNOOToday.length);
            _this.dataNOOTodays = dataNOOToday.length;
            //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusnooweek = function () {
        var _this = this;
        this.statusNOOWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusNOOWeek = result;
            console.log(_this.resposeDataStatusNOOWeek);
            var dataNOOWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusNOOWeek));
            console.log(dataNOOWeek.length);
            _this.dataNOOWeeks = dataNOOWeek.length;
            //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusnoomonth = function () {
        var _this = this;
        this.statusNOOMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusNOOMonth = result;
            console.log(_this.resposeDataStatusNOOMonth);
            var dataNOOMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusNOOMonth));
            console.log(dataNOOMonth.length);
            _this.dataNOOMonths = dataNOOMonth.length;
            //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatuspotoday = function () {
        var _this = this;
        this.statusPOToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusPOToday = result;
            console.log(_this.resposeDataStatusPOToday);
            var dataPOToday = JSON.parse(JSON.stringify(_this.resposeDataStatusPOToday));
            _this.keys = _this.getKeys(dataPOToday, "TotalQTYValue");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowspotoday.push([_this.sumByKey(dataPOToday, "TotalQTYValue", _this.keys[i], "TotalQTYValue")]);
            }
            console.log(_this.rowspotoday);
            console.log(_this.sumJSON(_this.rowspotoday));
            _this.dataPOTodays = _this.to2DecWithComma(_this.sumJSON(_this.rowspotoday));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatuspoweek = function () {
        var _this = this;
        this.statusPOWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusPOWeek = result;
            console.log(_this.resposeDataStatusPOWeek);
            var dataPOWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusPOWeek));
            _this.keys = _this.getKeys(dataPOWeek, "TotalQTYValue");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowspoweek.push([_this.sumByKey(dataPOWeek, "TotalQTYValue", _this.keys[i], "TotalQTYValue")]);
            }
            console.log(_this.rowspoweek);
            console.log(_this.sumJSON(_this.rowspoweek));
            _this.dataPOWeeks = _this.to2DecWithComma(_this.sumJSON(_this.rowspoweek));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatuspomonth = function () {
        var _this = this;
        this.statusPOMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusPOMonth = result;
            console.log(_this.resposeDataStatusPOMonth);
            var dataPOMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusPOMonth));
            _this.keys = _this.getKeys(dataPOMonth, "TotalQTYValue");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowspomonths.push([_this.sumByKey(dataPOMonth, "TotalQTYValue", _this.keys[i], "TotalQTYValue")]);
            }
            console.log(_this.rowspomonths);
            console.log(_this.sumJSON(_this.rowspomonths));
            _this.dataPOMonths = _this.to2DecWithComma(_this.sumJSON(_this.rowspomonths));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatussalesptoday = function () {
        var _this = this;
        this.statusSalesPToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusSalesPToday = result;
            console.log(_this.resposeDataStatusSalesPToday);
            var dataSalesToday = JSON.parse(JSON.stringify(_this.resposeDataStatusSalesPToday));
            _this.keys = _this.getKeys(dataSalesToday, "sales");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowssalesptoday.push([_this.sumByKey(dataSalesToday, "sales", _this.keys[i], "sales")]);
            }
            console.log(_this.rowssalesptoday);
            console.log(_this.sumJSON(_this.rowssalesptoday));
            _this.dataSalesPTodays = _this.to2DecWithComma(_this.sumJSON(_this.rowssalesptoday));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatussalespweek = function () {
        var _this = this;
        this.statusSalesPWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusSalesPWeek = result;
            console.log(_this.resposeDataStatusSalesPWeek);
            var dataSalesWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusSalesPWeek));
            _this.keys = _this.getKeys(dataSalesWeek, "sales");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowssalespweek.push([_this.sumByKey(dataSalesWeek, "sales", _this.keys[i], "sales")]);
            }
            console.log(_this.rowssalespweek);
            console.log(_this.sumJSON(_this.rowssalespweek));
            _this.dataSalesPWeeks = _this.to2DecWithComma(_this.sumJSON(_this.rowssalespweek));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatussalespmonth = function () {
        var _this = this;
        this.statusSalesPMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusSalesPMonth = result;
            console.log(_this.resposeDataStatusSalesPMonth);
            var dataSalesMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusSalesPMonth));
            _this.keys = _this.getKeys(dataSalesMonth, "sales");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowssalespmonths.push([_this.sumByKey(dataSalesMonth, "sales", _this.keys[i], "sales")]);
            }
            console.log(_this.rowssalespmonths);
            console.log(_this.sumJSON(_this.rowssalespmonths));
            _this.dataSalesPMonths = _this.to2DecWithComma(_this.sumJSON(_this.rowssalespmonths));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatuscollecttoday = function () {
        var _this = this;
        this.statusCollectToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusCollectToday = result;
            console.log(_this.resposeDataStatusCollectToday);
            var dataCollectToday = JSON.parse(JSON.stringify(_this.resposeDataStatusCollectToday));
            _this.keys = _this.getKeys(dataCollectToday, "Collect");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowscollecttoday.push([_this.sumByKey(dataCollectToday, "Collect", _this.keys[i], "Collect")]);
            }
            console.log(_this.rowscollecttoday);
            console.log(_this.sumJSON(_this.rowscollecttoday));
            _this.dataCollectTodays = _this.to2DecWithComma(_this.sumJSON(_this.rowscollecttoday));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatuscollectweek = function () {
        var _this = this;
        this.statusCollectWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusCollectWeek = result;
            console.log(_this.resposeDataStatusCollectWeek);
            var dataCollectWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusCollectWeek));
            _this.keys = _this.getKeys(dataCollectWeek, "Collect");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowscollectweek.push([_this.sumByKey(dataCollectWeek, "Collect", _this.keys[i], "Collect")]);
            }
            console.log(_this.rowscollectweek);
            console.log(_this.sumJSON(_this.rowscollectweek));
            _this.dataCollectWeeks = _this.to2DecWithComma(_this.sumJSON(_this.rowscollectweek));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatuscollectmonth = function () {
        var _this = this;
        this.statusCollectMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusCollectMonth = result;
            console.log(_this.resposeDataStatusCollectMonth);
            var dataCollectMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusCollectMonth));
            _this.keys = _this.getKeys(dataCollectMonth, "Collect");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowscollectmonths.push([_this.sumByKey(dataCollectMonth, "Collect", _this.keys[i], "Collect")]);
            }
            console.log(_this.rowscollectmonths);
            console.log(_this.sumJSON(_this.rowscollectmonths));
            _this.dataCollectMonths = _this.to2DecWithComma(_this.sumJSON(_this.rowscollectmonths));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusvisitasitoday = function () {
        var _this = this;
        this.statusVisitasiToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusVisitasiToday = result;
            console.log(_this.resposeDataStatusVisitasiToday);
            var dataVisitasiToday = JSON.parse(JSON.stringify(_this.resposeDataStatusVisitasiToday));
            _this.keys = _this.getKeys(dataVisitasiToday, "outletHari");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowsvisitasitoday.push([_this.sumByKey(dataVisitasiToday, "outletHari", _this.keys[i], "outletHari")]);
            }
            console.log("Visit : " + _this.rowsvisitasitoday);
            _this.dataVisitasiTodays = _this.rowsvisitasitoday;
            _this.keyspersen = _this.getKeys(dataVisitasiToday, "jumlahPersenHari");
            for (var i = 0, len = _this.keyspersen.length; i < len; i++) {
                _this.rowsvisitasitodaypersen.push([_this.sumByKey(dataVisitasiToday, "jumlahPersenHari", _this.keys[i], "jumlahPersenHari")]);
            }
            console.log("Persen : " + _this.rowsvisitasitoday);
            _this.hasilvisittoday = _this.rowsvisitasitodaypersen;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusvisitasiweek = function () {
        var _this = this;
        this.statusVisitasiWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusVisitasiWeek = result;
            console.log(_this.resposeDataStatusVisitasiWeek);
            var dataVisitasiWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusVisitasiWeek));
            _this.keys = _this.getKeys(dataVisitasiWeek, "outletWeek");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowsvisitasiweek.push([_this.sumByKey(dataVisitasiWeek, "outletWeek", _this.keys[i], "outletWeek")]);
            }
            console.log("Visit : " + _this.rowsvisitasiweek);
            _this.dataVisitasiWeeks = _this.rowsvisitasiweek;
            _this.keyspersen = _this.getKeys(dataVisitasiWeek, "jumlahPersenWeek");
            for (var i = 0, len = _this.keyspersen.length; i < len; i++) {
                _this.rowsvisitasiweekpersen.push([_this.sumByKey(dataVisitasiWeek, "jumlahPersenWeek", _this.keys[i], "jumlahPersenWeek")]);
            }
            console.log("Persen : " + _this.rowsvisitasiweekpersen);
            _this.hasilvisitweek = _this.rowsvisitasiweekpersen;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatusvisitasimonth = function () {
        var _this = this;
        this.statusVisitasiMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusVisitasiMonth = result;
            console.log(_this.resposeDataStatusVisitasiMonth);
            var dataVisitasiMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusVisitasiMonth));
            _this.keys = _this.getKeys(dataVisitasiMonth, "outletBulan");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowsvisitasimonths.push([_this.sumByKey(dataVisitasiMonth, "outletBulan", _this.keys[i], "outletBulan")]);
            }
            console.log("Visit : " + _this.rowsvisitasimonths);
            _this.dataVisitasiMonths = _this.rowsvisitasimonths;
            _this.keyspersen = _this.getKeys(dataVisitasiMonth, "jumlahPersenBulan");
            for (var i = 0, len = _this.keyspersen.length; i < len; i++) {
                _this.rowsvisitasimonthspersen.push([_this.sumByKey(dataVisitasiMonth, "jumlahPersenBulan", _this.keys[i], "jumlahPersenBulan")]);
            }
            console.log("Persen : " + _this.rowsvisitasimonthspersen);
            _this.hasilvisitmonth = _this.rowsvisitasimonthspersen;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatustimeinawal = function () {
        var _this = this;
        this.statusTimeINAwal.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusTimeINAwal = result;
            console.log(_this.resposeDataStatusTimeINAwal);
            var dataTimeINAwal = JSON.parse(JSON.stringify(_this.resposeDataStatusTimeINAwal));
            console.log("Visit : " + dataTimeINAwal[0]['Nama_Lengkap']);
            _this.dataTimeINAwal = dataTimeINAwal[0]['Nama_Lengkap'];
            console.log("Persen : " + dataTimeINAwal[0]['jml']);
            _this.jaminawal = dataTimeINAwal[0]['jml'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatustimeinakhir = function () {
        var _this = this;
        this.statusTimeINAkhir.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusTimeINAkhir = result;
            console.log(_this.resposeDataStatusTimeINAkhir);
            var dataTimeINAkhir = JSON.parse(JSON.stringify(_this.resposeDataStatusTimeINAkhir));
            console.log("Visit : " + dataTimeINAkhir[0]['Nama_Lengkap']);
            _this.dataTimeINAkhir = dataTimeINAkhir[0]['Nama_Lengkap'];
            console.log("Persen : " + dataTimeINAkhir[0]['jml']);
            _this.jaminakhir = dataTimeINAkhir[0]['jml'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatustimeoutakhir = function () {
        var _this = this;
        this.statusTimeOutAkhir.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusTimeOutAkhir = result;
            console.log(_this.resposeDataStatusTimeOutAkhir);
            var dataTimeOutAkhir = JSON.parse(JSON.stringify(_this.resposeDataStatusTimeOutAkhir));
            console.log("Visit : " + dataTimeOutAkhir[0]['Nama_lengkap']);
            _this.dataTimeOutAkhir = dataTimeOutAkhir[0]['Nama_lengkap'];
            console.log("Persen : " + dataTimeOutAkhir[0]['jml']);
            _this.jamoutakhir = dataTimeOutAkhir[0]['jml'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datastatustimeoutawal = function () {
        var _this = this;
        this.statusTimeOutAwal.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusTimeOutAwal = result;
            console.log(_this.resposeDataStatusTimeOutAwal);
            var dataTimeOutAwal = JSON.parse(JSON.stringify(_this.resposeDataStatusTimeOutAwal));
            console.log("Visit : " + dataTimeOutAwal[0]['Nama_Lengkap']);
            _this.dataTimeOutAwal = dataTimeOutAwal[0]['Nama_Lengkap'];
            console.log("Persen : " + dataTimeOutAwal[0]['jml']);
            _this.jamoutawal = dataTimeOutAwal[0]['jml'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    HomePage.prototype.datacumulativetopscore = function () {
        var _this = this;
        this.cumulativeTopScore.postData(this.dataCabang).then(function (result) {
            _this.resposeDatacumulativeTopScore = result;
            console.log(_this.resposeDatacumulativeTopScore);
            var datacumulativeTopScore = JSON.parse(JSON.stringify(_this.resposeDatacumulativeTopScore));
            console.log("NilaiTopScore : " + datacumulativeTopScore[0]['jumlahrangking']);
            _this.datacumulativeTopScore = datacumulativeTopScore[0]['jumlahrangking'];
            // this.loadData();
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    /**
     * Enumerate all key values based on groupBy key name
     * @param {Array} array An array of objects to use
     * @param {String} groypBy Name of the key to use for grouping
     * @returns {Array} An array of all unique values found for the key
     */
    HomePage.prototype.getKeys = function (array, groupBy) {
        // list all keys
        var keys = [];
        for (var i = 0, len = array.length; i < len; i++)
            if (keys.indexOf(array[i][groupBy]) == -1)
                keys.push(array[i][groupBy]);
        return keys;
    };
    /**
     * Calc the sum of the values of a key in an array of objects
     * @param {Array} array An array of objects to use
     * @param {String} keyField Name of the key to use for grouping
     * @param {String} keyValue Filter only objects with this value
     * @param {String} valueField The key name of the thing to calc sum of
     * @returns {Number} Sum
     */
    HomePage.prototype.sumByKey = function (array, keyField, keyValue, valueField) {
        var sum = 0;
        for (var i = 0, len = array.length; i < len; i++)
            if (array[i][keyField] == keyValue)
                sum += parseFloat(array[i][valueField]);
        return sum;
    };
    HomePage.prototype.sumJSON = function (array) {
        var sumi = 0;
        for (var a = 0, len = array.length; a < len; a++) {
            sumi += parseFloat(array[a]) / 1000000;
        }
        return sumi;
    };
    HomePage.prototype.to2DecWithComma = function (num) {
        num = "" + Math.floor(num * 100.0 + 0.5) / 100.0;
        var i = num.indexOf(".");
        if (i < 0)
            num += ",00";
        else {
            num = num.substring(0, i) + "," + num.substring(i + 1);
            var nDec = (num.length - i) - 1;
            if (nDec == 0)
                num += "00";
            else if (nDec == 1)
                num += "0";
            else if (nDec > 2)
                num = num.substring(0, i + 3);
        }
        return num;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon  class="icon-android-menu"></ion-icon>\n    </button>\n\n    <ion-title >Home</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n\n  <div class="app-content content container-fluid">\n    <div class="content-wrapper">\n      <div class="content-header row">\n        <div class="content-header-left breadcrumbs-left breadcrumbs-top col-md-6 col-xs-12">\n          <div class="breadcrumb-wrapper col-xs-12">\n\n          </div>\n        </div>\n      </div>\n      <div class="content-body"><!-- Statistics -->\n        <div class="row">\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-cyan bg-darken-2 media-left media-middle">\n                    <i class="icon-star3 font-large-2 white"></i>\n                  </div>\n                  <div class="p-2 bg-cyan white media-body">\n                    <h5><b>Leaderboard</b></h5>\n                    <h5><table>\n                      <thead>\n<tr>\n                      <th><font size="1" color="white" class="text-bold-500">CUMULATIVE</font>&emsp;</th>\n                      <th><font size="1" color="white" class="text-bold-500">RANKING 1</font>&emsp;</th>\n\n\n                      </tr></thead> <tbody>\n                    <tr>\n\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" (click)="modalShow()">{{cumulativeTopScore1}}</a></font></td>\n\n                      <td style="color:black;text-align:left"><font size="1" color="white" class="text-bold-400">{{dataTopScores1}}</font></td>\n\n                    </tr>\n                    </tbody></table></h5>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-deep-orange bg-darken-2 media-left media-middle">\n                    <i class="icon-users font-large-2 white"></i>\n                  </div>\n                  <div class="p-1 bg-deep-orange white media-body">\n\n                    <h5><b>Attendance Status</b></h5>\n                    <h5><table>\n                      <thead>\n                      <tr>\n                        <th colspan="2" ><font size="1" color="white" class="text-bold-500">TODAY &emsp;&nbsp;</font></th>\n                        <th colspan="2" style="color:black;text-align:center"><font size="1" color="white" class="text-bold-500">WEEK &emsp;&emsp;</font></th>\n                        <th colspan="2" style="color:black;text-align:center"><font size="1" color="white" class="text-bold-500">MONTH &emsp;&emsp;</font></th>\n                      </tr>\n                      <tr>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">On</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Off</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">On</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Off</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">On</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Off</font></th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#default" (click)="modalShow1()" >{{dataStatusAbsensi1}}</a></font></td>\n                      <td ><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#default1" (click)="modalShow2()" >{{gaMasuk1}}</a></font> </td>\n                      <td ><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-="#default11" (click)="modalShow3()" >{{dataStatusAbsensiWeek1}}</a></font> </td>\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#default11ow" (click)="modalShow4()" >{{gaMasukWeek1}}</a></font></td>\n                      <td ><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#default11m" (click)="modalShow5()" >{{dataAbsensiMasukMonth1}}</a></font> </td>\n                      <td ><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#default11om" (click)="modalShow6()" >{{gaMasukMonth1}}</a></font></td>\n\n                      </tbody></table></h5>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-purple bg-darken-2 media-left media-middle">\n                    <i class="icon-shop font-large-2 white"></i>\n                  </div>\n                  <div class="p-2 bg-purple white media-body">\n                    <h5><b>NOO Registered </b></h5>\n                    <h5><table>\n                      <thead>\n                      <tr>\n                        <th><font size="1" color="white" class="text-bold-500">TODAY</font>&emsp;</th>\n                        <th><font size="1" color="white" class="text-bold-500">WEEK</font>&emsp;</th>\n                        <th ><font size="1" color="white" class="text-bold-500">MONTH</font></th>\n\n\n                      </tr></thead> <tbody>\n                    <tr>\n\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#default2" (click)="modalShow7()">{{dataNOOToday1}}</a></font></td>\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultnoo" (click)="modalShow8()" >{{dataNOOWeek1}}</a></font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#default3" (click)="modalShow9()" >{{dataNOOMonth1}}</a></font></td>\n                    </tr>\n                    </tbody></table></h5>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-pink bg-darken-2 media-left media-middle">\n                    <i class="icon-cart3 font-large-2 white"></i>\n                  </div>\n                  <div class="p-2 bg-pink white media-body">\n                    <h5><b>PO Performance</b></h5>\n                    <h5><table>\n                      <thead>\n<tr>\n                      <th><font size="1" color="white" class="text-bold-500">TODAY</font>&emsp;</th>\n                      <th><font size="1" color="white" class="text-bold-500">WEEK</font>&emsp;</th>\n                      <th ><font size="1" color="white" class="text-bold-500">MONTH</font></th>\n\n\n                      </tr></thead> <tbody>\n                    <tr>\n\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsales" (click)="modalShow10()" >{{dataPOToday1}}</a></font></td>\n                      <td style="color:black;text-align:left"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsales1" (click)="modalShow11()" >{{dataPOWeek1}}</a></font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsales2" (click)="modalShow12()" >{{dataPOMonth1}}</a></font></td>\n\n                    </tr>\n                    </tbody></table></h5>\n                   </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-teal bg-darken-2 media-left media-middle">\n                    <i class="icon-cart31 font-large-2 white"></i>\n                  </div>\n                  <div class="p-2 bg-teal white media-body">\n                    <h5><b>Sales Performance </b></h5>\n                    <h5><table>\n                      <thead>\n                      <tr>\n                        <th><font size="1" color="white" class="text-bold-500">TODAY</font>&emsp;</th>\n                        <th><font size="1" color="white" class="text-bold-500">WEEK</font>&emsp;</th>\n                        <th ><font size="1" color="white" class="text-bold-500">MONTH</font></th>\n\n\n                      </tr></thead> <tbody>\n                    <tr>\n\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsalessop" (click)="modalShow13()" >{{dataSalesPToday1}}</a></font></td>\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsalessop1" (click)="modalShow14()" >{{dataSalesPWeek1}}</a></font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsalessop2" (click)="modalShow15()" >{{dataSalesPMonth1}}</a></font></td>\n                    </tr>\n                    </tbody></table></h5>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-blue bg-darken-2 media-left media-middle">\n                    <i class="icon-cart2 font-large-2 white"></i>\n                  </div>\n                  <div class="p-2 bg-blue white media-body">\n                    <h5><b>Collection</b></h5>\n                    <h5><table>\n                      <thead>\n<tr>\n                      <th><font size="1" color="white" class="text-bold-500">TODAY</font>&emsp;</th>\n                      <th><font size="1" color="white" class="text-bold-500">WEEK</font>&emsp;</th>\n                      <th ><font size="1" color="white" class="text-bold-500">MONTH</font></th>\n\n\n                      </tr></thead> <tbody>\n                    <tr>\n\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsalessopcol" (click)="modalShow16()" >{{dataCollectToday1}}</a></font></td>\n                      <td style="color:black;text-align:left"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsalessopcol1" (click)="modalShow17()" >{{dataCollectWeek1}}</a></font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultsalessopcol2" (click)="modalShow18()" >{{dataCollectMonth1}}</a></font></td>\n\n                    </tr>\n                    </tbody></table></h5>\n                   </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-green bg-darken-2 media-left media-middle">\n                    <i class="icon-vote font-large-2 white"></i>\n                  </div>\n                  <div class="p-1 bg-green white media-body">\n\n                    <h5><b>Visitation</b></h5>\n                    <h5><table>\n                      <thead>\n                      <tr>\n                        <th colspan="3" ><font size="1" color="white" class="text-bold-500">TODAY </font></th>\n                        <th colspan="3" style="color:black;text-align:center"><font size="1" color="white" class="text-bold-500">WEEK </font></th>\n                        <th colspan="3" style="color:black;text-align:center"><font size="1" color="white" class="text-bold-500">MONTH </font></th>\n                      </tr>\n                      <tr>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Outlet</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Trget</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Avg&nbsp;</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Outlet</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Trget</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Avg&nbsp;</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Outlet</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Trget</font></th>\n                        <th scope=\'col\' ><font size="1" color="white" class="text-bold-400">Avg</font></th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultvisit">{{dataVisitToday1}}</a></font></td>\n                      <td ><font size="1" color="white" class="text-bold-400">{{dataVisitPersenToday1}}%</font></td>\n                      <td style="color:black;text-align:center" ><font size="1" color="white" class="text-bold-400">{{dataAVGVisitToday}}</font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultvisitweek">{{dataVisitWeek1}}</a></font></td>\n                      <td ><font size="1" color="white" class="text-bold-400">{{dataVisitPersenWeek1}}%</font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400">{{dataAVGVisitWeek}}</font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultvisit2">{{dataVisitMonth1}}</a></font></td>\n                      <td ><font size="1" color="white" class="text-bold-400">{{dataVisitPersenMonth1}}%</font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400">{{dataAVGVisitMonth}}</font></td>\n                      </tbody></table></h5>\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-red bg-darken-2 media-left media-middle">\n                    <i class="icon-lecturer font-large-2 white"></i>\n                  </div>\n                  <div class="p-2 bg-red white media-body">\n                    <h5><b>Customer List</b></h5>\n                    <h5><table>\n                      <thead>\n<tr>\n                      <th><font size="1" color="white" class="text-bold-500">NOO</font>&nbsp;</th>\n                      <th><font size="1" color="white" class="text-bold-500">VERIFIED 1</font>&nbsp;</th>\n                      <th ><font size="1" color="white" class="text-bold-500">VERIFIED 2</font></th>\n\n\n                      </tr></thead> <tbody>\n                    <tr>\n\n                      <td><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultnoobaru">{{dataNOOToday1}}</a></font></td>\n                      <td style="color:black;text-align:left"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultnoobaru1">0</a></font></td>\n                      <td style="color:black;text-align:center"><font size="1" color="white" class="text-bold-400"><a type="" class="" data-toggle="modal" data-target="#defaultnoobaru2">0</a></font></td>\n\n                    </tr>\n                    </tbody></table></h5>\n                 </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="row" >\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-orange  bg-darken-2 media-left media-middle">\n                    <i class="icon-user1 font-large-2 white"></i>\n                  </div>\n                  <div class="p-2 bg-orange  white media-body">\n                    <table>\n                      <thead>\n<tr>\n                      <th class="teal"><font size="1" color=\'White\' class="text-bold-300">{{dataTimeINAwal1}}&nbsp;</font></th>\n                      <th class="teal"><font size="1" color=\'White\' class="text-bold-300">{{dataTimeINAkhir1}}</font></th>\n                      </tr></thead> <tbody>\n                    <tr>\n\n                      <td><font size="1" color=\'#f4fcf4\' class="text-bold-400">-{{jaminawal1}}-</font></td>\n                      <td ><font size="1" color=\'#f4fcf4\' class="text-bold-400">-{{jaminakhir1}}-</font></td>\n                    </tr><tr>\n                      <td><font size="1" color=\'#f4fcf4\' class="text-bold-400">Time In Awal </font></td>\n                      <td ><font size="1" color=\'#f4fcf4\' class="text-bold-400">Time In Akhir</font></td>\n                    </tr></tbody></table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class="col-xl-5 col-lg-6 col-xs-12">\n            <div class="card">\n              <div class="card-body">\n                <div class="media">\n                  <div class="p-2 text-xs-center bg-brown bg-darken-2 media-left media-middle">\n                    <i class="icon-user1 font-large-2 white"></i>\n                  </div>\n                  <div class="p-2 bg-brown white media-body">\n                    <table>\n                      <thead><tr>\n                      <th class="teal"><font size="1" color=\'White\' class="text-bold-300">{{dataTimeOutAwal1}}&nbsp;</font></th>\n                      <th class="teal"><font size="1" color=\'White\' class="text-bold-300">{{dataTimeOutAkhir1}}</font></th>\n                      </tr></thead> <tbody>\n                    <tr>\n                      <td><font size="1" color=\'#f4fcf4\' class="text-bold-400">-{{jamoutawal1}}-</font></td>\n                      <td ><font size="1" color=\'#f4fcf4\' class="text-bold-400">-{{jamoutakhir1}}-</font></td>\n                    </tr>\n                    <tr>\n                      <td><font size="1"  color=\'#f4fcf4\' class="text-bold-400">Time Out Awal </font></td>\n                      <td ><font size="1"  color=\'#f4fcf4\' class="text-bold-400">Time Out Akhir</font></td>\n                    </tr></tbody></table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_48__providers_auth_service_alldashboard__["a" /* DataAllDashboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_topscorecumulative__["a" /* CumulativeTopScore */], __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_timeoutawal__["a" /* StatusTimeOutAwal */],
            __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_timeoutakhir__["a" /* StatusTimeOutAkhir */], __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_timeinakhir__["a" /* StatusTimeINAkhir */],
            __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_timeinawal__["a" /* StatusTimeINAwal */],
            __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_visitasimonth__["a" /* StatusVisitasiMonth */],
            __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_visitasiweek__["a" /* StatusVisitasiWeek */], __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_visitasitoday__["a" /* StatusVisitasiToday */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_collectmonth__["a" /* StatusCollectMonth */], __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_collectweek__["a" /* StatusCollectWeek */],
            __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_collecttoday__["a" /* StatusCollectToday */], __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_salesperformancemonth__["a" /* StatusSalesPMonth */],
            __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_salesperformanceweek__["a" /* StatusSalesPWeek */], __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_salesperformancetoday__["a" /* StatusSalesPToday */],
            __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_poperformancemonth__["a" /* StatusPOMonth */], __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_poperformanceweek__["a" /* StatusPOWeek */],
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_poperformancetoday__["a" /* StatusPOToday */], __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_noomonth__["a" /* StatusNOOMonth */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_nooweek__["a" /* StatusNOOWeek */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_nootoday__["a" /* StatusNOOToday */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_statusabsensimonthoff__["a" /* StatusAbsensiMonthOff */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_statusabsensimonth__["a" /* StatusAbsensiMonth */],
            __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_statusabsensiweekoff__["a" /* StatusAbsensiWeekOff */],
            __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_statusabsensiweek__["a" /* StatusAbsensiWeek */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_statusabsensi__["a" /* StatusAbsensi */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_topscore__["a" /* TopScore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapoutletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapoutletPage = (function () {
    function MapoutletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mapData = { "latitude": "", "longitude": "", "icon": "" };
    }
    MapoutletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapoutletPage');
        this.showMapsNya();
    };
    MapoutletPage.prototype.showMapsNya = function () {
        this.mapData.latitude = this.navParams.get("latitude");
        this.mapData.longitude = this.navParams.get("longitude");
        this.mapData.icon = this.navParams.get("icon");
        console.log(this.mapData.icon);
        this.latitude = this.mapData.latitude;
        this.longitude = this.mapData.longitude;
        /* let mapOptions: GoogleMapOptions = {
           camera: {
             target: {
               lat: this.mapData.latitude,
               lng: this.mapData.longitude
             },
             zoom: 15,
             tilt: 30
           }
         }; */
        var latLng = new google.maps.LatLng(this.mapData.latitude, this.mapData.longitude);
        var iconnya = {
            url: "https://taysbakers.com/traceimages/outlettbsnoapp.png"
        };
        var mapOptions = {
            icon: iconnya,
            center: latLng,
            zoom: 20,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker1 = new google.maps.Marker({
            icon: iconnya,
            position: latLng,
            map: this.map
        });
        marker1.setMap(this.map);
    };
    MapoutletPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    MapoutletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapoutlet',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\mapoutlet\mapoutlet.html"*/'<!--\n  Generated template for the MapoutletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Map Outlet</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="map-container" data-tap-disabled="true">\n    <div id="map" class="map"></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\mapoutlet\mapoutlet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapoutletPage);
    return MapoutletPage;
}());

//# sourceMappingURL=mapoutlet.js.map

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopScore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardtopscore.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var TopScore = (function () {
    function TopScore(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    TopScore.prototype.postData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    TopScore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TopScore);
    return TopScore;
}());

//# sourceMappingURL=topscore.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusAbsensi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardstatusabsensi.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusAbsensi = (function () {
    function StatusAbsensi(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusAbsensi.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusAbsensi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusAbsensi);
    return StatusAbsensi;
}());

//# sourceMappingURL=statusabsensi.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCollectMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardcollectmonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusCollectMonth = (function () {
    function StatusCollectMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusCollectMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusCollectMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusCollectMonth);
    return StatusCollectMonth;
}());

//# sourceMappingURL=collectmonth.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusNOOToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardnootoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusNOOToday = (function () {
    function StatusNOOToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusNOOToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusNOOToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusNOOToday);
    return StatusNOOToday;
}());

//# sourceMappingURL=nootoday.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusNOOWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardnooweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusNOOWeek = (function () {
    function StatusNOOWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusNOOWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusNOOWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusNOOWeek);
    return StatusNOOWeek;
}());

//# sourceMappingURL=nooweek.js.map

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusAbsensiMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardstatusabsensimonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusAbsensiMonth = (function () {
    function StatusAbsensiMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusAbsensiMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusAbsensiMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusAbsensiMonth);
    return StatusAbsensiMonth;
}());

//# sourceMappingURL=statusabsensimonth.js.map

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusAbsensiMonthOff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardstatusabsensimonthoff.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusAbsensiMonthOff = (function () {
    function StatusAbsensiMonthOff(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusAbsensiMonthOff.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusAbsensiMonthOff = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusAbsensiMonthOff);
    return StatusAbsensiMonthOff;
}());

//# sourceMappingURL=statusabsensimonthoff.js.map

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusNOOMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardnoomonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusNOOMonth = (function () {
    function StatusNOOMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusNOOMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusNOOMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusNOOMonth);
    return StatusNOOMonth;
}());

//# sourceMappingURL=noomonth.js.map

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPOToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardpoperformancetoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusPOToday = (function () {
    function StatusPOToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusPOToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusPOToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusPOToday);
    return StatusPOToday;
}());

//# sourceMappingURL=poperformancetoday.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPOWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardpoperformanceweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusPOWeek = (function () {
    function StatusPOWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusPOWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusPOWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusPOWeek);
    return StatusPOWeek;
}());

//# sourceMappingURL=poperformanceweek.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPOMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardpoperformancemonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusPOMonth = (function () {
    function StatusPOMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusPOMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusPOMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusPOMonth);
    return StatusPOMonth;
}());

//# sourceMappingURL=poperformancemonth.js.map

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusSalesPToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardsalesperformancetoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusSalesPToday = (function () {
    function StatusSalesPToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusSalesPToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusSalesPToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusSalesPToday);
    return StatusSalesPToday;
}());

//# sourceMappingURL=salesperformancetoday.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusSalesPWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardsalesperformanceweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusSalesPWeek = (function () {
    function StatusSalesPWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusSalesPWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusSalesPWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusSalesPWeek);
    return StatusSalesPWeek;
}());

//# sourceMappingURL=salesperformanceweek.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusSalesPMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardsalesperformancemonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusSalesPMonth = (function () {
    function StatusSalesPMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusSalesPMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusSalesPMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusSalesPMonth);
    return StatusSalesPMonth;
}());

//# sourceMappingURL=salesperformancemonth.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCollectToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardcollecttoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusCollectToday = (function () {
    function StatusCollectToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusCollectToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusCollectToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusCollectToday);
    return StatusCollectToday;
}());

//# sourceMappingURL=collecttoday.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCollectWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardcollectweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusCollectWeek = (function () {
    function StatusCollectWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusCollectWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusCollectWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusCollectWeek);
    return StatusCollectWeek;
}());

//# sourceMappingURL=collectweek.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusVisitasiToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardvisitasitoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusVisitasiToday = (function () {
    function StatusVisitasiToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusVisitasiToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusVisitasiToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusVisitasiToday);
    return StatusVisitasiToday;
}());

//# sourceMappingURL=visitasitoday.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusVisitasiWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardvisitasiweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusVisitasiWeek = (function () {
    function StatusVisitasiWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusVisitasiWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusVisitasiWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusVisitasiWeek);
    return StatusVisitasiWeek;
}());

//# sourceMappingURL=visitasiweek.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusVisitasiMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardvisitasimonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusVisitasiMonth = (function () {
    function StatusVisitasiMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusVisitasiMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusVisitasiMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusVisitasiMonth);
    return StatusVisitasiMonth;
}());

//# sourceMappingURL=visitasimonth.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusTimeINAwal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardtimeinawal.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusTimeINAwal = (function () {
    function StatusTimeINAwal(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusTimeINAwal.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusTimeINAwal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusTimeINAwal);
    return StatusTimeINAwal;
}());

//# sourceMappingURL=timeinawal.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusTimeINAkhir; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardtimeakhir.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusTimeINAkhir = (function () {
    function StatusTimeINAkhir(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusTimeINAkhir.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusTimeINAkhir = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusTimeINAkhir);
    return StatusTimeINAkhir;
}());

//# sourceMappingURL=timeinakhir.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusTimeOutAkhir; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardtimeoutakhir.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusTimeOutAkhir = (function () {
    function StatusTimeOutAkhir(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusTimeOutAkhir.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusTimeOutAkhir = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusTimeOutAkhir);
    return StatusTimeOutAkhir;
}());

//# sourceMappingURL=timeoutakhir.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusTimeOutAwal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardtimeoutawal.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusTimeOutAwal = (function () {
    function StatusTimeOutAwal(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusTimeOutAwal.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusTimeOutAwal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusTimeOutAwal);
    return StatusTimeOutAwal;
}());

//# sourceMappingURL=timeoutawal.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CumulativeTopScore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/dashboardtopscorecumulative.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var CumulativeTopScore = (function () {
    function CumulativeTopScore(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    CumulativeTopScore.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    CumulativeTopScore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CumulativeTopScore);
    return CumulativeTopScore;
}());

//# sourceMappingURL=topscorecumulative.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusAbsensiWeekOff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl1 = 'https://taysbakers.com/ionic/dashboardstatusabsensiweekoff.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusAbsensiWeekOff = (function () {
    function StatusAbsensiWeekOff(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusAbsensiWeekOff.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl1, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusAbsensiWeekOff = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusAbsensiWeekOff);
    return StatusAbsensiWeekOff;
}());

//# sourceMappingURL=statusabsensiweekoff.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusAbsensiWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl1 = 'https://taysbakers.com/ionic/dashboardstatusabsensiweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusAbsensiWeek = (function () {
    function StatusAbsensiWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusAbsensiWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl1, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusAbsensiWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusAbsensiWeek);
    return StatusAbsensiWeek;
}());

//# sourceMappingURL=statusabsensiweek.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataAllDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://www.taysbakers.com/ionic/bukaalldashboard.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var DataAllDashboard = (function () {
    function DataAllDashboard(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    DataAllDashboard.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataAllDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DataAllDashboard);
    return DataAllDashboard;
}());

//# sourceMappingURL=alldashboard.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboRSM; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/comborsmasmkacab.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ComboRSM = (function () {
    function ComboRSM(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ComboRSM.prototype.postData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ComboRSM = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ComboRSM);
    return ComboRSM;
}());

//# sourceMappingURL=comborsm.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboJenis; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/combojenis.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ComboJenis = (function () {
    function ComboJenis(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ComboJenis.prototype.postData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ComboJenis = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ComboJenis);
    return ComboJenis;
}());

//# sourceMappingURL=combojenis.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboSales; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/combosales.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ComboSales = (function () {
    function ComboSales(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ComboSales.prototype.postData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ComboSales = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ComboSales);
    return ComboSales;
}());

//# sourceMappingURL=combosales.js.map

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailoutletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_detailoutletnya__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailoutletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailoutletPage = (function () {
    function DetailoutletPage(detailOutlets, navCtrl, navParams) {
        this.detailOutlets = detailOutlets;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.outletData = { "outletid": "", "outletname": "", "usrid": "" };
        this.outletData.outletid = this.navParams.get("outletid");
        this.outletData.outletname = this.navParams.get("outletname");
        this.outletData.usrid = this.navParams.get("usrid");
        console.log(this.outletData.outletid);
    }
    DetailoutletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailoutletPage');
        this.datacumulativetopscore();
    };
    DetailoutletPage.prototype.datacumulativetopscore = function () {
        var _this = this;
        this.outletData.outletid = this.navParams.get("outletid");
        this.outletData.outletname = this.navParams.get("outletname");
        this.outletData.usrid = this.navParams.get("usrid");
        console.log(this.outletData.outletid);
        this.detailOutlets.postData(this.outletData).then(function (result) {
            _this.resposeDetailOutlet = result;
            console.log(_this.resposeDetailOutlet);
            var dataDetailOutlet = JSON.parse(JSON.stringify(_this.resposeDetailOutlet));
            _this.dataDetailOutlet1 = dataDetailOutlet;
            _this.outletname = _this.dataDetailOutlet1[0]['outletname'];
            _this.telephon = _this.dataDetailOutlet1[0]['outletnotelp'];
            _this.alamat = _this.dataDetailOutlet1[0]['outletalamat'];
            _this.propinsi = _this.dataDetailOutlet1[0]['outletpropinsi'];
            _this.kabupaten = _this.dataDetailOutlet1[0]['outletkabupaten'];
            _this.kecamatan = _this.dataDetailOutlet1[0]['outletkecamatan'];
            _this.kelurahan = _this.dataDetailOutlet1[0]['outletkelurahan'];
            _this.statusbangunan = _this.dataDetailOutlet1[0]['wsstatusbangunan'];
            _this.lamaberdiri = _this.dataDetailOutlet1[0]['wslamaberdiri'];
            _this.lokasioutlet = _this.dataDetailOutlet1[0]['outletletak'];
            _this.jenisoutlet = _this.dataDetailOutlet1[0]['outletstatus'];
            _this.lamatop = _this.dataDetailOutlet1[0]['outletlamatop'];
            _this.statuspembayaran = _this.dataDetailOutlet1[0]['wssistempembayaranTOP'];
            _this.namasales = _this.dataDetailOutlet1[0]['outletnamasales'];
            _this.namapemilik = _this.dataDetailOutlet1[0]['wsowneroutlet'];
            _this.note = _this.dataDetailOutlet1[0]['outletnote'];
            _this.photooutlet = _this.dataDetailOutlet1[0]['outletfoto'];
            _this.photopemilik = _this.dataDetailOutlet1[0]['pemilikfoto'];
            _this.photoktp = _this.dataDetailOutlet1[0]['ktpfoto'];
            var filepath = "https://taysbakers.com/traceimages/";
            _this.photooutlet1 = filepath + _this.photooutlet;
            _this.photopemilik1 = filepath + _this.photopemilik;
            _this.photoktp1 = filepath + _this.photoktp;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    DetailoutletPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    DetailoutletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailoutlet',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\detailoutlet\detailoutlet.html"*/'<!--\n  Generated template for the DetailoutletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detail Outlet</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<table>\n  <tbody>\n    <tr>\n      <td>Nama Outlet</td>&emsp;:<td>{{outletname}}</td>\n    </tr>\n    <tr>\n      <td>Telephon</td>&emsp;:<td>{{telephon}}</td>\n    </tr>\n    <tr>\n      <td>Alamat</td>&emsp;:<td>{{alamat}}</td>\n    </tr>\n    <tr>\n      <td>Provinsi</td>&emsp;:<td>{{propinsi}}</td>\n    </tr>\n    <tr>\n      <td>Kabupaten</td>&emsp;:<td>{{kabupaten}}</td>\n    </tr>\n    <tr>\n      <td>Kecamatan</td>&emsp;:<td>{{kecamatan}}</td>\n    </tr>\n    <tr>\n      <td>Kelurahan</td>&emsp;:<td>{{kelurahan}}</td>\n    </tr>\n    <tr>\n      <td>Status Bangunan</td>&emsp;:<td>{{statusbangunan}}</td>\n    </tr>\n    <tr>\n      <td>Lama Berdiri</td>&emsp;:<td>{{lamaberdiri}}</td>\n    </tr>\n    <tr>\n      <td>Lokasi Outlet</td>&emsp;:<td>{{lokasioutlet}}</td>\n    </tr>\n    <tr>\n      <td>Jenis Outlet</td>&emsp;:<td>{{jenisoutlet}}</td>\n    </tr>\n    <tr>\n      <td>Lama TOP</td>&emsp;:<td>{{lamatop}}</td>\n    </tr>\n    <tr>\n      <td>Status Pembayaran</td>&emsp;:<td>{{statuspembayaran}}</td>\n    </tr>\n    <tr>\n      <td>Nama Sales</td>&emsp;:<td>{{namasales}}</td>\n    </tr>\n    <tr>\n      <td>Nama Pemilik</td>&emsp;:<td>{{namapemilik}}</td>\n    </tr>\n    <tr>\n      <td>Note</td>&emsp;:<td>{{note}}</td>\n    </tr>\n  </tbody>\n</table>\n<p></p>\n  <table>\n      <tr>\n          <th>\n            Foto Outlet<p></p>\n            <img  width="330" height= "310" src={{photooutlet1}} />\n          </th>\n      </tr><p></p>\n    <tr>\n      <th>\n        Foto Pemilik<p></p>\n        <img  width="330" height= "310" src={{photopemilik1}} />\n      </th>\n    </tr><p></p>\n    <tr>\n      <th>\n        Foto KTP<p></p>\n        <img  width="330" height= "310" src={{photoktp1}} />\n      </th>\n    </tr>\n  </table>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\detailoutlet\detailoutlet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_detailoutletnya__["a" /* DetailOutlet */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailoutletPage);
    return DetailoutletPage;
}());

//# sourceMappingURL=detailoutlet.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalcumulativePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_modals__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalcumulativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalcumulativePage = (function () {
    function ModalcumulativePage(modalLeaderBoard, navCtrl, navParams) {
        this.modalLeaderBoard = modalLeaderBoard;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leaderData = { "cabangid": "" };
    }
    ModalcumulativePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalcumulativePage');
        this.loaddata();
    };
    ModalcumulativePage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalcumulativePage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.leaderData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalLeaderBoard.postData(this.leaderData).then(function (result) {
            _this.resposeDetailLeaderBoard = result;
            var dataDetailLeaderBoard = JSON.parse(JSON.stringify(_this.resposeDetailLeaderBoard));
            console.log(dataDetailLeaderBoard);
            _this.dataDetailLeaderBoard1 = dataDetailLeaderBoard;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalcumulativePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalcumulativePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalcumulative',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalcumulative\modalcumulative.html"*/'<!--\n  Generated template for the ModalcumulativePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Leaderboard (This Week)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n          <div class="modal-content">\n            <div class="modal-header">\n              <div class="table-responsive">\n                <table class="table table-hover">\n                  <thead>\n                    <th>RANKING</th>\n                    <th>SCORE</th>\n                    <th>SPV</th>\n                    <th>ASM/RSM</th>\n                  </thead>\n                  <tbody>\n                  <tr *ngFor="let leader of dataDetailLeaderBoard1">\n                    <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n                    <td style="color:black;text-align:left"><font class="font-small-3">{{leader.score}} %</font></td>\n                    <td style="color:black;text-align:left"><font class="font-small-3">{{leader.spvname}}</font></td>\n                    <td style="color:black;text-align:left"><font class="font-small-3">{{leader.rsmname}}</font></td>\n                  </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalcumulative\modalcumulative.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_modals__["a" /* ModalsLeaderboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalcumulativePage);
    return ModalcumulativePage;
}());

//# sourceMappingURL=modalcumulative.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalabsentodayonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_absentodayon__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalabsentodayonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalabsentodayonPage = (function () {
    function ModalabsentodayonPage(modalsAbsenTodayOn, navCtrl, navParams) {
        this.modalsAbsenTodayOn = modalsAbsenTodayOn;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalabsentodayonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalabsentodayonPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalabsentodayonPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsAbsenTodayOn.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalabsentodayonPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalabsentodayonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalabsentodayon',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalabsentodayon\modalabsentodayon.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Status Online (To Day)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">NIK</th>\n          <th class="font-size-base" >Nama Sales</th>\n          <th class="font-size-base">Clock In</th>\n          <th class="font-size-base">Status</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggalawal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.UsrName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.namalengkap}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.clockinnya}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.jml === 1 ? "ONLINE" : "OFFLINE"}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalabsentodayon\modalabsentodayon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_absentodayon__["a" /* ModalsAbsenTodayOn */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalabsentodayonPage);
    return ModalabsentodayonPage;
}());

//# sourceMappingURL=modalabsentodayon.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalabsentodayoffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_absentodayoff__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalabsentodayoffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalabsentodayoffPage = (function () {
    function ModalabsentodayoffPage(modalsAbsenTodayOff, navCtrl, navParams) {
        this.modalsAbsenTodayOff = modalsAbsenTodayOff;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalabsentodayoffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalabsentodayoffPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalabsentodayoffPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsAbsenTodayOff.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalabsentodayoffPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalabsentodayoffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalabsentodayoff',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalabsentodayoff\modalabsentodayoff.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Status Offline (To Day)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">NIK</th>\n          <th class="font-size-base">Nama Sales</th>\n          <th class="font-size-base">Status</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggalawal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.UsrName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.namalengkap}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.jml === 1 ? "ONLINE" : "OFFLINE"}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalabsentodayoff\modalabsentodayoff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_absentodayoff__["a" /* ModalsAbsenTodayOff */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalabsentodayoffPage);
    return ModalabsentodayoffPage;
}());

//# sourceMappingURL=modalabsentodayoff.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalabsenweekonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_absenweekon__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalabsenweekonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalabsenweekonPage = (function () {
    function ModalabsenweekonPage(modalsAbsenWeekOn, navCtrl, navParams) {
        this.modalsAbsenWeekOn = modalsAbsenWeekOn;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalabsenweekonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalabsenweekonPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalabsenweekonPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsAbsenWeekOn.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalabsenweekonPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalabsenweekonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalabsenweekon',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalabsenweekon\modalabsenweekon.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Status Online (This Week)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">NIK</th>\n          <th class="font-size-base" >Nama Sales</th>\n          <th class="font-size-base">Clock In</th>\n          <th class="font-size-base">Status</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggalawal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.UsrName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.namalengkap}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.clockinnya}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.jml != 0 ? "ONLINE" : "OFFLINE"}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalabsenweekon\modalabsenweekon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_absenweekon__["a" /* ModalsAbsenWeekOn */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalabsenweekonPage);
    return ModalabsenweekonPage;
}());

//# sourceMappingURL=modalabsenweekon.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalabsenweekoffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_absenweekoff__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalabsenweekoffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalabsenweekoffPage = (function () {
    function ModalabsenweekoffPage(modalsAbsenWeekOff, navCtrl, navParams) {
        this.modalsAbsenWeekOff = modalsAbsenWeekOff;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalabsenweekoffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalabsenweekoffPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalabsenweekoffPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsAbsenWeekOff.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalabsenweekoffPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalabsenweekoffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalabsenweekoff',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalabsenweekoff\modalabsenweekoff.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Status Offline (This Week)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">NIK</th>\n          <th class="font-size-base" >Nama Sales</th>\n          <th class="font-size-base">Status</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggalawal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.UsrName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.namalengkap}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.jml != 0 ? "ONLINE" : "OFFLINE"}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalabsenweekoff\modalabsenweekoff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_absenweekoff__["a" /* ModalsAbsenWeekOff */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalabsenweekoffPage);
    return ModalabsenweekoffPage;
}());

//# sourceMappingURL=modalabsenweekoff.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalabsenmonthonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_absenmonthon__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalabsenmonthonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalabsenmonthonPage = (function () {
    function ModalabsenmonthonPage(modalsAbsenMonthOn, navCtrl, navParams) {
        this.modalsAbsenMonthOn = modalsAbsenMonthOn;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalabsenmonthonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalabsenmonthonPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalabsenmonthonPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsAbsenMonthOn.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalabsenmonthonPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalabsenmonthonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalabsenmonthon',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalabsenmonthon\modalabsenmonthon.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Status Online (This Month)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">NIK</th>\n          <th class="font-size-base" >Nama Sales</th>\n          <th class="font-size-base">Clock In</th>\n          <th class="font-size-base">Status</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggalawal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.UsrName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.namalengkap}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.clockinnya}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.jml != 0 ? "ONLINE" : "OFFLINE"}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalabsenmonthon\modalabsenmonthon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_absenmonthon__["a" /* ModalsAbsenMonthOn */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalabsenmonthonPage);
    return ModalabsenmonthonPage;
}());

//# sourceMappingURL=modalabsenmonthon.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalabsenmonthoffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_absenmonthoff__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalabsenmonthoffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalabsenmonthoffPage = (function () {
    function ModalabsenmonthoffPage(modalsAbsenMonthOff, navCtrl, navParams) {
        this.modalsAbsenMonthOff = modalsAbsenMonthOff;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalabsenmonthoffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalabsenmonthoffPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalabsenmonthoffPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsAbsenMonthOff.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalabsenmonthoffPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalabsenmonthoffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalabsenmonthoff',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalabsenmonthoff\modalabsenmonthoff.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Status Offline (This Month)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">NIK</th>\n          <th class="font-size-base" >Nama Sales</th>\n          <th class="font-size-base">Clock In</th>\n          <th class="font-size-base">Status</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggalawal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.UsrName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.namalengkap}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.clockinnya}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.jml != 0 ? "ONLINE" : "OFFLINE"}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalabsenmonthoff\modalabsenmonthoff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_absenmonthoff__["a" /* ModalsAbsenMonthOff */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalabsenmonthoffPage);
    return ModalabsenmonthoffPage;
}());

//# sourceMappingURL=modalabsenmonthoff.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalnootodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_nootoday__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalnootodayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalnootodayPage = (function () {
    function ModalnootodayPage(modalsNooToday, navCtrl, navParams) {
        this.modalsNooToday = modalsNooToday;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalnootodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalnootodayPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalnootodayPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsNooToday.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalnootodayPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalnootodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalnootoday',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalnootoday\modalnootoday.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>NOO Registered (To Day)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">Outlet</th>\n          <th class="font-size-base" >Alamat</th>\n          <th class="font-size-base">Nama Sales</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.CardName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Alamat}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.NamaLengkap}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalnootoday\modalnootoday.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_nootoday__["a" /* ModalsNooToday */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalnootodayPage);
    return ModalnootodayPage;
}());

//# sourceMappingURL=modalnootoday.js.map

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalnooweekPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_nooweek__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalnooweekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalnooweekPage = (function () {
    function ModalnooweekPage(modalsNooWeek, navCtrl, navParams) {
        this.modalsNooWeek = modalsNooWeek;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalnooweekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalnooweekPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalnooweekPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsNooWeek.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalnooweekPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalnooweekPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalnooweek',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalnooweek\modalnooweek.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>NOO Registered (This Week)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">Outlet</th>\n          <th class="font-size-base" >Alamat</th>\n          <th class="font-size-base">Nama Sales</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.CardName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Alamat}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.NamaLengkap}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalnooweek\modalnooweek.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_nooweek__["a" /* ModalsNooWeek */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalnooweekPage);
    return ModalnooweekPage;
}());

//# sourceMappingURL=modalnooweek.js.map

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalnoomonthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_noomonth__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalnoomonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalnoomonthPage = (function () {
    function ModalnoomonthPage(modalsNooMonth, navCtrl, navParams) {
        this.modalsNooMonth = modalsNooMonth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalnoomonthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalnoomonthPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalnoomonthPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsNooMonth.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalnoomonthPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalnoomonthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalnoomonth',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalnoomonth\modalnoomonth.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>NOO Registered (This Month)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Date</th>\n          <th class="font-size-base">Outlet</th>\n          <th class="font-size-base" >Alamat</th>\n          <th class="font-size-base">Nama Sales</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.tanggal}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.CardName}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Alamat}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.NamaLengkap}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalnoomonth\modalnoomonth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_noomonth__["a" /* ModalsNooMonth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalnoomonthPage);
    return ModalnoomonthPage;
}());

//# sourceMappingURL=modalnoomonth.js.map

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalpotodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_potoday__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalpotodayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalpotodayPage = (function () {
    function ModalpotodayPage(modalsPoToday, navCtrl, navParams) {
        this.modalsPoToday = modalsPoToday;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalpotodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalpotodayPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalpotodayPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsPoToday.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalpotodayPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalpotodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalpotoday',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalpotoday\modalpotoday.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PO Performance (To Day)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">DISTRIBUTOR</th>\n          <th class="font-size-base">SPV</th>\n          <th class="font-size-base">ASM/RSM</th>\n          <th class="font-size-base" >Total Qty</th>\n          <th class="font-size-base">Total Value</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.cardname}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.spvnya}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.rsm}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.ttlqty}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.ttlvalue}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalpotoday\modalpotoday.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_potoday__["a" /* ModalsPoToday */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalpotodayPage);
    return ModalpotodayPage;
}());

//# sourceMappingURL=modalpotoday.js.map

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalpoweekPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_poweek__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalpoweekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalpoweekPage = (function () {
    function ModalpoweekPage(modalsPoWeek, navCtrl, navParams) {
        this.modalsPoWeek = modalsPoWeek;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalpoweekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalpoweekPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalpoweekPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsPoWeek.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalpoweekPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalpoweekPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalpoweek',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalpoweek\modalpoweek.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PO Performance (This Week)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">DISTRIBUTOR</th>\n          <th class="font-size-base">SPV</th>\n          <th class="font-size-base">ASM/RSM</th>\n          <th class="font-size-base" >Total Qty</th>\n          <th class="font-size-base">Total Value</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.cardname}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.spvnya}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.rsm}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.ttlqty}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.ttlvalue}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalpoweek\modalpoweek.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_poweek__["a" /* ModalsPoWeek */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalpoweekPage);
    return ModalpoweekPage;
}());

//# sourceMappingURL=modalpoweek.js.map

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalpomonthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_pomonth__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalpomonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalpomonthPage = (function () {
    function ModalpomonthPage(modalsPoMonth, navCtrl, navParams) {
        this.modalsPoMonth = modalsPoMonth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalpomonthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalpomonthPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalpomonthPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsPoMonth.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalpomonthPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalpomonthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalpomonth',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalpomonth\modalpomonth.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PO Performance (This Month)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">DISTRIBUTOR</th>\n          <th class="font-size-base">SPV</th>\n          <th class="font-size-base">ASM/RSM</th>\n          <th class="font-size-base" >Total Qty</th>\n          <th class="font-size-base">Total Value</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.cardname}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.spvnya}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.rsm}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.ttlqty}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.ttlvalue}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalpomonth\modalpomonth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_pomonth__["a" /* ModalsPoMonth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalpomonthPage);
    return ModalpomonthPage;
}());

//# sourceMappingURL=modalpomonth.js.map

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsalesweekPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_salesweek__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalsalesweekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalsalesweekPage = (function () {
    function ModalsalesweekPage(modalsSalesWeek, navCtrl, navParams) {
        this.modalsSalesWeek = modalsSalesWeek;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalsalesweekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalsalesweekPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalsalesweekPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsSalesWeek.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalsalesweekPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalsalesweekPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalsalesweek',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalsalesweek\modalsalesweek.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sales Performance (This Week)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Outlet</th>\n          <th class="font-size-base">SALES</th>\n          <th class="font-size-base" >Total Qty</th>\n          <th class="font-size-base">Total Value</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Outlet}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Sales}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Qty}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.TotalValue}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalsalesweek\modalsalesweek.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_salesweek__["a" /* ModalsSalesWeek */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalsalesweekPage);
    return ModalsalesweekPage;
}());

//# sourceMappingURL=modalsalesweek.js.map

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsalestodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_salestoday__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalsalestodayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalsalestodayPage = (function () {
    function ModalsalestodayPage(modalsSalesToday, navCtrl, navParams) {
        this.modalsSalesToday = modalsSalesToday;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalsalestodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalsalestodayPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalsalestodayPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsSalesToday.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalsalestodayPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalsalestodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalsalestoday',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalsalestoday\modalsalestoday.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sales Performance (To Day)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Outlet</th>\n          <th class="font-size-base">SALES</th>\n          <th class="font-size-base" >Total Qty</th>\n          <th class="font-size-base">Total Value</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Outlet}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Sales}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Qty}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.TotalValue}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalsalestoday\modalsalestoday.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_salestoday__["a" /* ModalsSalesToday */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalsalestodayPage);
    return ModalsalestodayPage;
}());

//# sourceMappingURL=modalsalestoday.js.map

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsalesmonthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_salesmonth__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalsalesmonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalsalesmonthPage = (function () {
    function ModalsalesmonthPage(modalsSalesMonth, navCtrl, navParams) {
        this.modalsSalesMonth = modalsSalesMonth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalsalesmonthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalsalesmonthPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalsalesmonthPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsSalesMonth.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalsalesmonthPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalsalesmonthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalsalesmonth',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalsalesmonth\modalsalesmonth.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sales Performance (This Month)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">Outlet</th>\n          <th class="font-size-base">SALES</th>\n          <th class="font-size-base" >Total Qty</th>\n          <th class="font-size-base">Total Value</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Outlet}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Sales}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.Qty}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.TotalValue}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalsalesmonth\modalsalesmonth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_salesmonth__["a" /* ModalsSalesMonth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalsalesmonthPage);
    return ModalsalesmonthPage;
}());

//# sourceMappingURL=modalsalesmonth.js.map

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalcollecttodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_collecttoday__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalcollecttodayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalcollecttodayPage = (function () {
    function ModalcollecttodayPage(modalsCollectToday, navCtrl, navParams) {
        this.modalsCollectToday = modalsCollectToday;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalcollecttodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalcollecttodayPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalcollecttodayPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsCollectToday.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalcollecttodayPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalcollecttodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalcollecttoday',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalcollecttoday\modalcollecttoday.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Collection (To Day)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">SPV</th>\n          <th class="font-size-base">RSM</th>\n          <th class="font-size-base" >Collection</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.spv}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.rsm}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.collection}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalcollecttoday\modalcollecttoday.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_collecttoday__["a" /* ModalsCollectToday */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalcollecttodayPage);
    return ModalcollecttodayPage;
}());

//# sourceMappingURL=modalcollecttoday.js.map

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalcollectweekPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_collectweek__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalcollectweekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalcollectweekPage = (function () {
    function ModalcollectweekPage(modalsCollectWeek, navCtrl, navParams) {
        this.modalsCollectWeek = modalsCollectWeek;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalcollectweekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalcollectweekPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalcollectweekPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsCollectWeek.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalcollectweekPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalcollectweekPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalcollectweek',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalcollectweek\modalcollectweek.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Collection (This Week)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">SPV</th>\n          <th class="font-size-base">RSM</th>\n          <th class="font-size-base" >Collection</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.spv}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.rsm}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.collection}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalcollectweek\modalcollectweek.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_collectweek__["a" /* ModalsCollectWeek */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalcollectweekPage);
    return ModalcollectweekPage;
}());

//# sourceMappingURL=modalcollectweek.js.map

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalcollectmonthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_modals_collectmonth__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalcollectmonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalcollectmonthPage = (function () {
    function ModalcollectmonthPage(modalsCollectMonth, navCtrl, navParams) {
        this.modalsCollectMonth = modalsCollectMonth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendAbsenData = { "cabangid": "" };
    }
    ModalcollectmonthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalabsentodayonPage');
        this.loaddata();
    };
    ModalcollectmonthPage.prototype.loaddata = function () {
        this.sendata();
    };
    ModalcollectmonthPage.prototype.sendata = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendAbsenData.cabangid = dataUser[0]['Cabang_ID'];
        this.modalsCollectMonth.postData(this.sendAbsenData).then(function (result) {
            _this.resposeDetailAbsenOn = result;
            var dataDetailAbsenOn = JSON.parse(JSON.stringify(_this.resposeDetailAbsenOn));
            console.log(dataDetailAbsenOn);
            _this.dataDetailAbsenOn1 = dataDetailAbsenOn;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    ModalcollectmonthPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalcollectmonthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalcollectmonth',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\modalcollectmonth\modalcollectmonth.html"*/'<!--\n  Generated template for the ModalabsentodayonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Collection (This Month)</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()" class="icon-cross" >\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="table-responsive">\n        <table class="table table-hover">\n          <thead>\n          <th class="font-size-base">NO</th>\n          <th class="font-size-base">SPV</th>\n          <th class="font-size-base">RSM</th>\n          <th class="font-size-base" >Collection</th>\n          </thead>\n          <tbody>\n          <tr *ngFor="let leader of dataDetailAbsenOn1">\n            <td style="color:black;text-align:right"><font class="font-small-3">{{leader.no}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.spv}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.rsm}}</font></td>\n            <td style="color:black;text-align:left"><font class="font-small-3">{{leader.collection}}</font></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\modalcollectmonth\modalcollectmonth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_modals_collectmonth__["a" /* ModalsCollectMonth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalcollectmonthPage);
    return ModalcollectmonthPage;
}());

//# sourceMappingURL=modalcollectmonth.js.map

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_topscore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_statusabsensi__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_statusabsensiweek__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_statusabsensiweekoff__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_statusabsensimonth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_statusabsensimonthoff__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_nootoday__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_nooweek__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_noomonth__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_poperformancetoday__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_poperformanceweek__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_poperformancemonth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_salesperformancetoday__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_salesperformanceweek__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_salesperformancemonth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_collecttoday__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_collectmonth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_collectweek__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_visitasitoday__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_visitasiweek__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_visitasimonth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_timeinawal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_timeinakhir__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_auth_service_timeoutakhir__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_auth_service_timeoutawal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_auth_service_topscorecumulative__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_service_alldashboard__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(dataAllDashboard, cumulativeTopScore, statusTimeOutAwal, statusTimeOutAkhir, statusTimeINAkhir, statusTimeINAwal, statusVisitasiMonth, statusVisitasiWeek, statusVisitasiToday, statusCollectMonth, statusCollectWeek, statusCollectToday, statusSalesPMonth, statusSalesPWeek, statusSalesPToday, statusPOMonth, statusPOWeek, statusPOToday, statusNOOMonth, statusNOOWeek, statusNOOToday, nav, statusAbsensiMonthOff, statusAbsensiMonth, statusAbsensiWeekOff, statusAbsensiWeek, statusAbsensi, topScore, navCtrl, authService, toastCtrl) {
        this.dataAllDashboard = dataAllDashboard;
        this.cumulativeTopScore = cumulativeTopScore;
        this.statusTimeOutAwal = statusTimeOutAwal;
        this.statusTimeOutAkhir = statusTimeOutAkhir;
        this.statusTimeINAkhir = statusTimeINAkhir;
        this.statusTimeINAwal = statusTimeINAwal;
        this.statusVisitasiMonth = statusVisitasiMonth;
        this.statusVisitasiWeek = statusVisitasiWeek;
        this.statusVisitasiToday = statusVisitasiToday;
        this.statusCollectMonth = statusCollectMonth;
        this.statusCollectWeek = statusCollectWeek;
        this.statusCollectToday = statusCollectToday;
        this.statusSalesPMonth = statusSalesPMonth;
        this.statusSalesPWeek = statusSalesPWeek;
        this.statusSalesPToday = statusSalesPToday;
        this.statusPOMonth = statusPOMonth;
        this.statusPOWeek = statusPOWeek;
        this.statusPOToday = statusPOToday;
        this.statusNOOMonth = statusNOOMonth;
        this.statusNOOWeek = statusNOOWeek;
        this.statusNOOToday = statusNOOToday;
        this.nav = nav;
        this.statusAbsensiMonthOff = statusAbsensiMonthOff;
        this.statusAbsensiMonth = statusAbsensiMonth;
        this.statusAbsensiWeekOff = statusAbsensiWeekOff;
        this.statusAbsensiWeek = statusAbsensiWeek;
        this.statusAbsensi = statusAbsensi;
        this.topScore = topScore;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "", "userpassword": "" };
        this.dataCabang = { "cabang": "" };
        this.rows = [];
        this.keys = [];
        this.keyspersen = [];
        this.rowsWeek = [];
        this.keysWeek = [];
        this.keysinawal = [];
        this.keysinakhir = [];
        this.keysoutawal = [];
        this.keysoutakhir = [];
        this.rowspotoday = [];
        this.rowspoweek = [];
        this.rowspomonths = [];
        this.rowssalesptoday = [];
        this.rowssalespweek = [];
        this.rowssalespmonths = [];
        this.rowscollecttoday = [];
        this.rowscollectweek = [];
        this.rowscollectmonths = [];
        this.rowsvisitasitoday = [];
        this.rowsvisitasiweek = [];
        this.rowsvisitasimonths = [];
        this.rowsvisitasitodaypersen = [];
        this.rowsvisitasiweekpersen = [];
        this.rowsvisitasimonthspersen = [];
        this.rowsinawal = [];
        this.rowsinakhir = [];
        this.rowsoutawal = [];
        this.rowsoutakhir = [];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.datadashboard = function () {
        var _this = this;
        this.dataAllDashboard.postData(this.dataCabang).then(function (result) {
            _this.resposeDataAllDashboard = result;
            var dataAllDashboard = JSON.parse(JSON.stringify(_this.resposeDataAllDashboard));
            _this.dataAllDashboard1 = dataAllDashboard;
            console.log(_this.dataAllDashboard1);
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datatopscore = function () {
        var _this = this;
        this.topScore.postData().then(function (result) {
            _this.resposeDataTopScore = result;
            console.log(_this.resposeDataTopScore);
            var dataTopScore = JSON.parse(JSON.stringify(_this.resposeDataTopScore));
            console.log(dataTopScore[0]['SPV_NAMA']);
            _this.dataTopScores = dataTopScore[0]['SPV_NAMA'];
            //localStorage.setItem('dataTopScore', JSON.stringify(this.resposeDataTopScore) )
            //console.log(JSON.stringify(this.resposeDataTopScore))
        }, function (err) {
            //Connection failed message
            return _this.presentToast(err);
        });
    };
    LoginPage.prototype.datastatusabsensi = function () {
        var _this = this;
        this.statusAbsensi.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensi = result;
            console.log(_this.resposeDataStatusAbsensi);
            var dataAbsensiMasuk = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensi));
            _this.keys = _this.getKeys(dataAbsensiMasuk, "jml");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rows.push([_this.sumByKey(dataAbsensiMasuk, "jml", _this.keys[i], "jml")]);
            }
            console.log(_this.rows);
            _this.dataStatusAbsensi = _this.rows[0];
            _this.gaMasuk = dataAbsensiMasuk.length - _this.rows[0];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusabsensiweek = function () {
        var _this = this;
        this.statusAbsensiWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensiWeek = result;
            console.log(_this.resposeDataStatusAbsensiWeek);
            var dataAbsensiMasukWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensiWeek));
            console.log(dataAbsensiMasukWeek.length);
            _this.dataStatusAbsensiWeek = dataAbsensiMasukWeek.length;
            //localStorage.setItem('dataStatusAbsensiWeek', JSON.stringify(this.resposeDataStatusAbsensiWeek) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiWeek))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusabsensiweekoff = function () {
        var _this = this;
        this.statusAbsensiWeekOff.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensiWeekOff = result;
            console.log(_this.resposeDataStatusAbsensiWeekOff);
            var dataAbsensiMasukWeekOff = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensiWeekOff));
            console.log(dataAbsensiMasukWeekOff.length);
            _this.gaMasukWeek = dataAbsensiMasukWeekOff.length;
            //localStorage.setItem('dataStatusAbsensiWeekOff', JSON.stringify(this.resposeDataStatusAbsensiWeekOff) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiWeekOff))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusabsensimonth = function () {
        var _this = this;
        this.statusAbsensiMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensiMonth = result;
            console.log(_this.resposeDataStatusAbsensiMonth);
            var dataAbsensiMasukMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensiMonth));
            console.log(dataAbsensiMasukMonth.length);
            _this.dataAbsensiMasukMonth = dataAbsensiMasukMonth.length;
            //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusabsensimonthoff = function () {
        var _this = this;
        this.statusAbsensiMonthOff.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusAbsensiMonthOff = result;
            console.log(_this.resposeDataStatusAbsensiMonthOff);
            var dataAbsensiMasukMonthOff = JSON.parse(JSON.stringify(_this.resposeDataStatusAbsensiMonthOff));
            console.log(dataAbsensiMasukMonthOff.length);
            _this.gaMasukMonth = dataAbsensiMasukMonthOff.length;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */], {
                dataTopScores1: _this.dataTopScores,
                dataStatusAbsensi1: _this.dataStatusAbsensi,
                gaMasuk1: _this.gaMasuk,
                dataStatusAbsensiWeek1: _this.dataStatusAbsensiWeek,
                gaMasukWeek1: _this.gaMasukWeek,
                dataAbsensiMasukMonth1: _this.dataAbsensiMasukMonth,
                gaMasukMonth1: _this.gaMasukMonth,
                dataNOOToday1: _this.dataNOOTodays,
                dataNOOWeek1: _this.dataNOOWeeks,
                dataNOOMonth1: _this.dataNOOMonths,
                dataPOToday1: _this.dataPOTodays,
                dataPOWeek1: _this.dataPOWeeks,
                dataPOMonth1: _this.dataPOMonths,
                dataSalesPToday1: _this.dataSalesPTodays,
                dataSalesPWeek1: _this.dataSalesPWeeks,
                dataSalesPMonth1: _this.dataSalesPMonths,
                dataCollectToday1: _this.dataCollectTodays,
                dataCollectWeek1: _this.dataCollectWeeks,
                dataCollectMonth1: _this.dataCollectMonths,
                dataVisitToday1: _this.dataVisitasiTodays,
                dataVisitWeek1: _this.dataVisitasiWeeks,
                dataVisitMonth1: _this.dataVisitasiMonths,
                dataVisitPersenToday1: _this.hasilvisittoday,
                dataVisitPersenWeek1: _this.hasilvisitweek,
                dataVisitPersenMonth1: _this.hasilvisitmonth,
                dataTimeINAwal1: _this.dataTimeINAwal,
                dataTimeINAkhir1: _this.dataTimeINAkhir,
                dataTimeOutAwal1: _this.dataTimeOutAwal,
                dataTimeOutAkhir1: _this.dataTimeOutAkhir,
                jaminawal1: _this.jaminawal,
                jaminakhir1: _this.jaminakhir,
                jamoutawal1: _this.jamoutawal,
                jamoutakhir1: _this.jamoutakhir,
                cumulativeTopScore1: _this.datacumulativeTopScore
            });
            //localStorage.setItem('dataStatusAbsensiMonthOff', JSON.stringify(this.resposeDataStatusAbsensiMonthOff) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonthOff))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusnootoday = function () {
        var _this = this;
        this.statusNOOToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusNOOToday = result;
            console.log(_this.resposeDataStatusNOOToday);
            var dataNOOToday = JSON.parse(JSON.stringify(_this.resposeDataStatusNOOToday));
            console.log(dataNOOToday.length);
            _this.dataNOOTodays = dataNOOToday.length;
            //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusnooweek = function () {
        var _this = this;
        this.statusNOOWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusNOOWeek = result;
            console.log(_this.resposeDataStatusNOOWeek);
            var dataNOOWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusNOOWeek));
            console.log(dataNOOWeek.length);
            _this.dataNOOWeeks = dataNOOWeek.length;
            //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusnoomonth = function () {
        var _this = this;
        this.statusNOOMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusNOOMonth = result;
            console.log(_this.resposeDataStatusNOOMonth);
            var dataNOOMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusNOOMonth));
            console.log(dataNOOMonth.length);
            _this.dataNOOMonths = dataNOOMonth.length;
            //localStorage.setItem('dataStatusAbsensiMonth', JSON.stringify(this.resposeDataStatusAbsensiMonth) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensiMonth))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatuspotoday = function () {
        var _this = this;
        this.statusPOToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusPOToday = result;
            console.log(_this.resposeDataStatusPOToday);
            var dataPOToday = JSON.parse(JSON.stringify(_this.resposeDataStatusPOToday));
            _this.keys = _this.getKeys(dataPOToday, "TotalQTYValue");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowspotoday.push([_this.sumByKey(dataPOToday, "TotalQTYValue", _this.keys[i], "TotalQTYValue")]);
            }
            console.log(_this.rowspotoday);
            console.log(_this.sumJSON(_this.rowspotoday));
            _this.dataPOTodays = _this.to2DecWithComma(_this.sumJSON(_this.rowspotoday));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatuspoweek = function () {
        var _this = this;
        this.statusPOWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusPOWeek = result;
            console.log(_this.resposeDataStatusPOWeek);
            var dataPOWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusPOWeek));
            _this.keys = _this.getKeys(dataPOWeek, "TotalQTYValue");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowspoweek.push([_this.sumByKey(dataPOWeek, "TotalQTYValue", _this.keys[i], "TotalQTYValue")]);
            }
            console.log(_this.rowspoweek);
            console.log(_this.sumJSON(_this.rowspoweek));
            _this.dataPOWeeks = _this.to2DecWithComma(_this.sumJSON(_this.rowspoweek));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatuspomonth = function () {
        var _this = this;
        this.statusPOMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusPOMonth = result;
            console.log(_this.resposeDataStatusPOMonth);
            var dataPOMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusPOMonth));
            _this.keys = _this.getKeys(dataPOMonth, "TotalQTYValue");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowspomonths.push([_this.sumByKey(dataPOMonth, "TotalQTYValue", _this.keys[i], "TotalQTYValue")]);
            }
            console.log(_this.rowspomonths);
            console.log(_this.sumJSON(_this.rowspomonths));
            _this.dataPOMonths = _this.to2DecWithComma(_this.sumJSON(_this.rowspomonths));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatussalesptoday = function () {
        var _this = this;
        this.statusSalesPToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusSalesPToday = result;
            console.log(_this.resposeDataStatusSalesPToday);
            var dataSalesToday = JSON.parse(JSON.stringify(_this.resposeDataStatusSalesPToday));
            _this.keys = _this.getKeys(dataSalesToday, "sales");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowssalesptoday.push([_this.sumByKey(dataSalesToday, "sales", _this.keys[i], "sales")]);
            }
            console.log(_this.rowssalesptoday);
            console.log(_this.sumJSON(_this.rowssalesptoday));
            _this.dataSalesPTodays = _this.to2DecWithComma(_this.sumJSON(_this.rowssalesptoday));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatussalespweek = function () {
        var _this = this;
        this.statusSalesPWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusSalesPWeek = result;
            console.log(_this.resposeDataStatusSalesPWeek);
            var dataSalesWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusSalesPWeek));
            _this.keys = _this.getKeys(dataSalesWeek, "sales");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowssalespweek.push([_this.sumByKey(dataSalesWeek, "sales", _this.keys[i], "sales")]);
            }
            console.log(_this.rowssalespweek);
            console.log(_this.sumJSON(_this.rowssalespweek));
            _this.dataSalesPWeeks = _this.to2DecWithComma(_this.sumJSON(_this.rowssalespweek));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatussalespmonth = function () {
        var _this = this;
        this.statusSalesPMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusSalesPMonth = result;
            console.log(_this.resposeDataStatusSalesPMonth);
            var dataSalesMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusSalesPMonth));
            _this.keys = _this.getKeys(dataSalesMonth, "sales");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowssalespmonths.push([_this.sumByKey(dataSalesMonth, "sales", _this.keys[i], "sales")]);
            }
            console.log(_this.rowssalespmonths);
            console.log(_this.sumJSON(_this.rowssalespmonths));
            _this.dataSalesPMonths = _this.to2DecWithComma(_this.sumJSON(_this.rowssalespmonths));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatuscollecttoday = function () {
        var _this = this;
        this.statusCollectToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusCollectToday = result;
            console.log(_this.resposeDataStatusCollectToday);
            var dataCollectToday = JSON.parse(JSON.stringify(_this.resposeDataStatusCollectToday));
            _this.keys = _this.getKeys(dataCollectToday, "Collect");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowscollecttoday.push([_this.sumByKey(dataCollectToday, "Collect", _this.keys[i], "Collect")]);
            }
            console.log(_this.rowscollecttoday);
            console.log(_this.sumJSON(_this.rowscollecttoday));
            _this.dataCollectTodays = _this.to2DecWithComma(_this.sumJSON(_this.rowscollecttoday));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatuscollectweek = function () {
        var _this = this;
        this.statusCollectWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusCollectWeek = result;
            console.log(_this.resposeDataStatusCollectWeek);
            var dataCollectWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusCollectWeek));
            _this.keys = _this.getKeys(dataCollectWeek, "Collect");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowscollectweek.push([_this.sumByKey(dataCollectWeek, "Collect", _this.keys[i], "Collect")]);
            }
            console.log(_this.rowscollectweek);
            console.log(_this.sumJSON(_this.rowscollectweek));
            _this.dataCollectWeeks = _this.to2DecWithComma(_this.sumJSON(_this.rowscollectweek));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatuscollectmonth = function () {
        var _this = this;
        this.statusCollectMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusCollectMonth = result;
            console.log(_this.resposeDataStatusCollectMonth);
            var dataCollectMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusCollectMonth));
            _this.keys = _this.getKeys(dataCollectMonth, "Collect");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowscollectmonths.push([_this.sumByKey(dataCollectMonth, "Collect", _this.keys[i], "Collect")]);
            }
            console.log(_this.rowscollectmonths);
            console.log(_this.sumJSON(_this.rowscollectmonths));
            _this.dataCollectMonths = _this.to2DecWithComma(_this.sumJSON(_this.rowscollectmonths));
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusvisitasitoday = function () {
        var _this = this;
        this.statusVisitasiToday.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusVisitasiToday = result;
            console.log(_this.resposeDataStatusVisitasiToday);
            var dataVisitasiToday = JSON.parse(JSON.stringify(_this.resposeDataStatusVisitasiToday));
            _this.keys = _this.getKeys(dataVisitasiToday, "outletHari");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowsvisitasitoday.push([_this.sumByKey(dataVisitasiToday, "outletHari", _this.keys[i], "outletHari")]);
            }
            console.log("Visit : " + _this.rowsvisitasitoday);
            _this.dataVisitasiTodays = _this.rowsvisitasitoday;
            _this.keyspersen = _this.getKeys(dataVisitasiToday, "jumlahPersenHari");
            for (var i = 0, len = _this.keyspersen.length; i < len; i++) {
                _this.rowsvisitasitodaypersen.push([_this.sumByKey(dataVisitasiToday, "jumlahPersenHari", _this.keys[i], "jumlahPersenHari")]);
            }
            console.log("Persen : " + _this.rowsvisitasitoday);
            _this.hasilvisittoday = _this.rowsvisitasitodaypersen;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusvisitasiweek = function () {
        var _this = this;
        this.statusVisitasiWeek.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusVisitasiWeek = result;
            console.log(_this.resposeDataStatusVisitasiWeek);
            var dataVisitasiWeek = JSON.parse(JSON.stringify(_this.resposeDataStatusVisitasiWeek));
            _this.keys = _this.getKeys(dataVisitasiWeek, "outletWeek");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowsvisitasiweek.push([_this.sumByKey(dataVisitasiWeek, "outletWeek", _this.keys[i], "outletWeek")]);
            }
            console.log("Visit : " + _this.rowsvisitasiweek);
            _this.dataVisitasiWeeks = _this.rowsvisitasiweek;
            _this.keyspersen = _this.getKeys(dataVisitasiWeek, "jumlahPersenWeek");
            for (var i = 0, len = _this.keyspersen.length; i < len; i++) {
                _this.rowsvisitasiweekpersen.push([_this.sumByKey(dataVisitasiWeek, "jumlahPersenWeek", _this.keys[i], "jumlahPersenWeek")]);
            }
            console.log("Persen : " + _this.rowsvisitasiweekpersen);
            _this.hasilvisitweek = _this.rowsvisitasiweekpersen;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatusvisitasimonth = function () {
        var _this = this;
        this.statusVisitasiMonth.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusVisitasiMonth = result;
            console.log(_this.resposeDataStatusVisitasiMonth);
            var dataVisitasiMonth = JSON.parse(JSON.stringify(_this.resposeDataStatusVisitasiMonth));
            _this.keys = _this.getKeys(dataVisitasiMonth, "outletBulan");
            for (var i = 0, len = _this.keys.length; i < len; i++) {
                _this.rowsvisitasimonths.push([_this.sumByKey(dataVisitasiMonth, "outletBulan", _this.keys[i], "outletBulan")]);
            }
            console.log("Visit : " + _this.rowsvisitasimonths);
            _this.dataVisitasiMonths = _this.rowsvisitasimonths;
            _this.keyspersen = _this.getKeys(dataVisitasiMonth, "jumlahPersenBulan");
            for (var i = 0, len = _this.keyspersen.length; i < len; i++) {
                _this.rowsvisitasimonthspersen.push([_this.sumByKey(dataVisitasiMonth, "jumlahPersenBulan", _this.keys[i], "jumlahPersenBulan")]);
            }
            console.log("Persen : " + _this.rowsvisitasimonthspersen);
            _this.hasilvisitmonth = _this.rowsvisitasimonthspersen;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatustimeinawal = function () {
        var _this = this;
        this.statusTimeINAwal.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusTimeINAwal = result;
            console.log(_this.resposeDataStatusTimeINAwal);
            var dataTimeINAwal = JSON.parse(JSON.stringify(_this.resposeDataStatusTimeINAwal));
            console.log("Visit : " + dataTimeINAwal[0]['Nama_Lengkap']);
            _this.dataTimeINAwal = dataTimeINAwal[0]['Nama_Lengkap'];
            console.log("Persen : " + dataTimeINAwal[0]['jml']);
            _this.jaminawal = dataTimeINAwal[0]['jml'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatustimeinakhir = function () {
        var _this = this;
        this.statusTimeINAkhir.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusTimeINAkhir = result;
            console.log(_this.resposeDataStatusTimeINAkhir);
            var dataTimeINAkhir = JSON.parse(JSON.stringify(_this.resposeDataStatusTimeINAkhir));
            console.log("Visit : " + dataTimeINAkhir[0]['Nama_Lengkap']);
            _this.dataTimeINAkhir = dataTimeINAkhir[0]['Nama_Lengkap'];
            console.log("Persen : " + dataTimeINAkhir[0]['jml']);
            _this.jaminakhir = dataTimeINAkhir[0]['jml'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatustimeoutakhir = function () {
        var _this = this;
        this.statusTimeOutAkhir.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusTimeOutAkhir = result;
            console.log(_this.resposeDataStatusTimeOutAkhir);
            var dataTimeOutAkhir = JSON.parse(JSON.stringify(_this.resposeDataStatusTimeOutAkhir));
            console.log("Visit : " + dataTimeOutAkhir[0]['Nama_lengkap']);
            _this.dataTimeOutAkhir = dataTimeOutAkhir[0]['Nama_lengkap'];
            console.log("Persen : " + dataTimeOutAkhir[0]['jml']);
            _this.jamoutakhir = dataTimeOutAkhir[0]['jml'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datastatustimeoutawal = function () {
        var _this = this;
        this.statusTimeOutAwal.postData(this.dataCabang).then(function (result) {
            _this.resposeDataStatusTimeOutAwal = result;
            console.log(_this.resposeDataStatusTimeOutAwal);
            var dataTimeOutAwal = JSON.parse(JSON.stringify(_this.resposeDataStatusTimeOutAwal));
            console.log("Visit : " + dataTimeOutAwal[0]['Nama_Lengkap']);
            _this.dataTimeOutAwal = dataTimeOutAwal[0]['Nama_Lengkap'];
            console.log("Persen : " + dataTimeOutAwal[0]['jml']);
            _this.jamoutawal = dataTimeOutAwal[0]['jml'];
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.datacumulativetopscore = function () {
        var _this = this;
        this.cumulativeTopScore.postData(this.dataCabang).then(function (result) {
            _this.resposeDatacumulativeTopScore = result;
            console.log(_this.resposeDatacumulativeTopScore);
            var datacumulativeTopScore = JSON.parse(JSON.stringify(_this.resposeDatacumulativeTopScore));
            console.log("Visit : " + _this.to2DecWithComma(datacumulativeTopScore));
            _this.datacumulativeTopScore = _this.to2DecWithComma(datacumulativeTopScore);
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.userData.username && this.userData.userpassword) {
            this.authService.postData(this.userData).then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                if (_this.resposeData) {
                    var data = JSON.parse(JSON.stringify(_this.resposeData));
                    _this.userDatanya = data;
                    _this.dataCabang.cabang = _this.userDatanya[0]['Cabang_ID'];
                    console.log("cabang : " + _this.dataCabang.cabang);
                    console.log("UsrID : " + _this.userDatanya[0]['Usr_ID']);
                    localStorage.setItem('userDatanya', JSON.stringify(_this.resposeData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
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
                else {
                    return _this.presentToast("Please give valid username and password");
                }
            }, function (err) {
                //Connection failed message
                return _this.presentToast(err);
            });
        }
        else {
            return this.presentToast("Give username and password");
        }
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        return toast.present();
    };
    /**
     * Enumerate all key values based on groupBy key name
     * @param {Array} array An array of objects to use
     * @param {String} groypBy Name of the key to use for grouping
     * @returns {Array} An array of all unique values found for the key
     */
    LoginPage.prototype.getKeys = function (array, groupBy) {
        // list all keys
        var keys = [];
        for (var i = 0, len = array.length; i < len; i++)
            if (keys.indexOf(array[i][groupBy]) == -1)
                keys.push(array[i][groupBy]);
        return keys;
    };
    /**
     * Calc the sum of the values of a key in an array of objects
     * @param {Array} array An array of objects to use
     * @param {String} keyField Name of the key to use for grouping
     * @param {String} keyValue Filter only objects with this value
     * @param {String} valueField The key name of the thing to calc sum of
     * @returns {Number} Sum
     */
    LoginPage.prototype.sumByKey = function (array, keyField, keyValue, valueField) {
        var sum = 0;
        for (var i = 0, len = array.length; i < len; i++)
            if (array[i][keyField] == keyValue)
                sum += parseFloat(array[i][valueField]);
        return sum;
    };
    LoginPage.prototype.sumJSON = function (array) {
        var sumi = 0;
        for (var a = 0, len = array.length; a < len; a++) {
            sumi += parseFloat(array[a]) / 1000000;
        }
        return sumi;
    };
    LoginPage.prototype.to2DecWithComma = function (num) {
        num = "" + Math.floor(num * 100.0 + 0.5) / 100.0;
        var i = num.indexOf(".");
        if (i < 0)
            num += ",00";
        else {
            num = num.substring(0, i) + "," + num.substring(i + 1);
            var nDec = (num.length - i) - 1;
            if (nDec == 0)
                num += "00";
            else if (nDec == 1)
                num += "0";
            else if (nDec > 2)
                num = num.substring(0, i + 3);
        }
        return num;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\login\login.html"*/'\n<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><img src="assets/imgs/tracesadmin32.png" />Traces Admin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div  class="app-content content container-fluid">\n    <div class="content-wrapper">\n      <div class="content-header row">\n      </div>\n      <div class="content-body"><section class="flexbox-container">\n        <div style="background-color: #54c4d7" class="col-md-4 offset-md-4 col-xs-10 offset-xs-1  box-shadow-2 p-0">\n          <div style="background-color: #54c4d7" class="card border-grey border-lighten-3 m-0">\n            <div style="background-color: #54c4d7" class="card-header no-border">\n              <div style="background-color: #54c4d7" class="card-title text-xs-center">\n                <div style="background-color: #54c4d7" class="p-1"><img style="background-color: #54c4d7" src="assets/imgs/tracesadmin4002.png" alt="branding logo"></div>\n              </div>\n              <h6 class="card-subtitle line-on-side text-muted text-xs-center font-small-3 pt-2"><span style="color:white; background-color: #54c4d7" >Welcome User</span></h6>\n              <!--  </div> -->\n              <div  class="card-body collapse in">\n                <div  class="card-block">\n                  <form class="form-horizontal form-simple" >\n                    <fieldset class="form-group position-relative has-icon-left mb-0">\n                      <input type="text" class="form-control form-control-lg input-lg" name="username" id="username" placeholder="Your Username" required [(ngModel)]="userData.username" />\n                      <div class="form-control-position">\n                        <i class="icon-head"></i>\n                      </div>\n                    </fieldset>\n                    <fieldset class="form-group position-relative has-icon-left">\n                      <input type="password" class="form-control form-control-lg input-lg" name="userpassword" id="userpassword" placeholder="Enter Password" required  [(ngModel)]="userData.userpassword" />\n                      <div class="form-control-position">\n                        <i class="icon-key3"></i>\n                      </div>\n                    </fieldset>\n                    <button type="submit" class="btn btn-primary btn-lg btn-block" (click)="login()" ><i class="icon-unlock2"></i> Login</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_31__providers_auth_service_alldashboard__["a" /* DataAllDashboard */],
            __WEBPACK_IMPORTED_MODULE_30__providers_auth_service_topscorecumulative__["a" /* CumulativeTopScore */], __WEBPACK_IMPORTED_MODULE_29__providers_auth_service_timeoutawal__["a" /* StatusTimeOutAwal */],
            __WEBPACK_IMPORTED_MODULE_28__providers_auth_service_timeoutakhir__["a" /* StatusTimeOutAkhir */], __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_timeinakhir__["a" /* StatusTimeINAkhir */],
            __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_timeinawal__["a" /* StatusTimeINAwal */], __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_visitasimonth__["a" /* StatusVisitasiMonth */],
            __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_visitasiweek__["a" /* StatusVisitasiWeek */], __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_visitasitoday__["a" /* StatusVisitasiToday */],
            __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_collectmonth__["a" /* StatusCollectMonth */], __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_collectweek__["a" /* StatusCollectWeek */],
            __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_collecttoday__["a" /* StatusCollectToday */], __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_salesperformancemonth__["a" /* StatusSalesPMonth */],
            __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_salesperformanceweek__["a" /* StatusSalesPWeek */], __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_salesperformancetoday__["a" /* StatusSalesPToday */],
            __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_poperformancemonth__["a" /* StatusPOMonth */], __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_poperformanceweek__["a" /* StatusPOWeek */], __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_poperformancetoday__["a" /* StatusPOToday */],
            __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_noomonth__["a" /* StatusNOOMonth */], __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_nooweek__["a" /* StatusNOOWeek */], __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_nootoday__["a" /* StatusNOOToday */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_statusabsensimonthoff__["a" /* StatusAbsensiMonthOff */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_statusabsensimonth__["a" /* StatusAbsensiMonth */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_statusabsensiweekoff__["a" /* StatusAbsensiWeekOff */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_statusabsensiweek__["a" /* StatusAbsensiWeek */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_statusabsensi__["a" /* StatusAbsensi */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_topscore__["a" /* TopScore */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_outlet_outlet__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_outlet_comborsm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_outlet_combojenis__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detailoutlet_detailoutlet__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapoutlet_mapoutlet__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the OutletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Outlets = (function () {
    function Outlets() {
    }
    return Outlets;
}());
var OutletPage = (function () {
    function OutletPage(modalCtrl, comboJenis, comboRSM, http, statusOutlet, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.comboJenis = comboJenis;
        this.comboRSM = comboRSM;
        this.http = http;
        this.statusOutlet = statusOutlet;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.outletData = { "outletid": "", "outletname": "", "usrid": "" };
        this.outletDatas = { "outletid": "", "outletname": "", "usrid": "" };
        this.mapData = { "latitude": "", "longitude": "", "icon": "" };
        this.dataOutlets = [];
        this.sendDataFilter = { "usridnya": "", "tanggalawal": "", "tanggalakhir": "", "pakairsm": "", "rsm": "", "pakaijenis": "", "jenis": "" };
        this.sendDataFilters = { "usridnya": "", "tanggalawal": "", "tanggalakhir": "", "pakairsm": "", "rsm": "", "pakaijenis": "", "jenis": "" };
    }
    OutletPage.prototype.ionViewDidLoad = function () {
        this.comborsmasm();
        this.combojenis();
        this.myDate = new Date().toISOString();
        this.myDate1 = new Date().toISOString();
        this.mySelect = "9998";
        this.mySelect1 = "";
        this.loaddata();
        console.log('ionViewDidLoad OutletPage');
    };
    OutletPage.prototype.loaddata = function () {
        var _this = this;
        this.loadDataUser();
        this.statusOutlet.postData(this.sendDataFilter)
            .then(function (result) {
            _this.resposeDataOutlet = result;
            console.log(_this.resposeDataOutlet);
            var dataOutlet = JSON.parse(JSON.stringify(_this.resposeDataOutlet));
            _this.dataOutlets = dataOutlet;
            _this.dtTrigger.next();
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    OutletPage.prototype.modalShow = function (data, data1) {
        this.outletDatas.outletid = data;
        this.outletDatas.outletname = data1;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.outletDatas.usrid = dataUser[0]['Usr_ID'];
        console.log(this.outletDatas.outletid);
        console.log(this.outletDatas.usrid);
        this.showdetailoutlet();
    };
    OutletPage.prototype.showdetailoutlet = function () {
        var obj = this.outletDatas;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__detailoutlet_detailoutlet__["a" /* DetailoutletPage */], obj);
        myModal.present();
    };
    OutletPage.prototype.showMaps = function (data, data1, data2) {
        this.mapData.latitude = data;
        this.mapData.longitude = data1;
        this.mapData.icon = data2;
        console.log(this.mapData.icon);
        var obj1 = this.mapData;
        var modalMaps = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__mapoutlet_mapoutlet__["a" /* MapoutletPage */], obj1);
        modalMaps.present();
    };
    OutletPage.prototype.loadDataUser = function () {
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendDataFilter.usridnya = dataUser[0]['Usr_ID'];
        this.dateAwal = new Date().toISOString();
        this.dateAwal = this.dateAwal.substring(0, 10);
        this.sendDataFilter.tanggalawal = this.dateAwal;
        this.dateAkhir = new Date().toISOString();
        this.dateAkhir = this.dateAkhir.substring(0, 10);
        this.sendDataFilter.tanggalakhir = this.dateAkhir;
        this.sendDataFilter.pakaijenis = '';
        this.sendDataFilter.jenis = '';
    };
    OutletPage.prototype.filterOutlet = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendDataFilters.usridnya = dataUser[0]['Usr_ID'];
        this.dateAwal = this.myDate.toString();
        this.dateAwal = this.dateAwal.substring(0, 10);
        this.sendDataFilters.tanggalawal = this.dateAwal;
        this.dateAkhir = this.myDate1.toString();
        this.dateAkhir = this.dateAkhir.substring(0, 10);
        this.sendDataFilters.tanggalakhir = this.dateAkhir;
        this.sendDataFilters.rsm = this.mySelect.toString();
        if (this.sendDataFilters.rsm != "") {
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
            .then(function (result) {
            _this.resposeDataOutlet = result;
            console.log(_this.resposeDataOutlet);
            var dataOutlet = JSON.parse(JSON.stringify(_this.resposeDataOutlet));
            _this.dataOutlets = dataOutlet;
            _this.dtTrigger.next();
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    OutletPage.prototype.comborsmasm = function () {
        var _this = this;
        this.comboRSM.postData().then(function (result) {
            _this.resposeDataComboRSM = result;
            console.log(_this.resposeDataComboRSM);
            var dataComboRSM = JSON.parse(JSON.stringify(_this.resposeDataComboRSM));
            _this.dataComboRSM1 = dataComboRSM;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    OutletPage.prototype.combojenis = function () {
        var _this = this;
        this.comboJenis.postData().then(function (result) {
            _this.resposeDataComboRSM = result;
            console.log(_this.resposeDataComboRSM);
            var dataComboJenis = JSON.parse(JSON.stringify(_this.resposeDataComboRSM));
            _this.dataComboJenis1 = dataComboJenis;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    OutletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-outlet',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\outlet\outlet.html"*/'<!--\n  Generated template for the OutletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon  class="icon-android-menu"></ion-icon>\n    </button>\n\n    <ion-title class="font-size-base">Outlet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <form (submit)="filterById()">\n    <label>\n      Min\n      <input type="number" name="min" id="min" [(ngModel)]="min" />\n    </label>\n    <label>\n      Max\n      <input type="number" name="max" id="max" [(ngModel)]="max" />\n    </label>\n    <button class="btn btn-primary" type="submit">Search</button>\n  </form>\n  <br /> -->\n\n  <section id="description" class="card">\n    <div class="card-header">\n      <h4 class="card-title"><span class="icon-search7"></span>&emsp;Filter</h4>\n    </div>\n    <div class="card-body collapse in">\n      <div class="card-block">\n        <form class="form-horizontal form-simple" (submit)="filterOutlet()" >\n          <div class="card-text">\n            <div class="row">\n              <div class="col-md-4">\n                <div class="form-group">\n\n                  <ion-item>\n                    <ion-label class="font-small-3">Date From :</ion-label>\n                    <ion-datetime displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" class="font-small-3"	 name="date" [(ngModel)]="myDate" ></ion-datetime>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label class="font-small-3" >Date To :</ion-label>\n                    <ion-datetime displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" class="font-small-3"	 name="date1" [(ngModel)]="myDate1" ></ion-datetime>\n                  </ion-item>\n                </div>\n              </div>\n\n              <div class="col-md-4">\n                <div class="form-group">\n\n                  <ion-item>\n                    <ion-label class="font-small-3">Group</ion-label>\n                    <ion-select [(ngModel)]="mySelect" name="rsm" class="font-small-3 rsm">\n                      <ion-option value="9998" >= All RSM/KACAB =</ion-option>\n                      <ion-option *ngFor="let val of dataComboRSM1" value={{val.Usr_ID}} >{{val.Nama_Lengkap}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label class="font-small-3">Jenis Outlet</ion-label>\n                    <ion-select [(ngModel)]="mySelect1" name="jenis" class="font-small-3 jenis">\n                      <ion-option value=""  >= All JENIS =</ion-option>\n                      <ion-option *ngFor="let val of dataComboJenis1" value={{val.StatusID}} >{{val.Status_Name}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <button type="submit" class="btn btn-info">\n            <i class="icon-search7"></i> Search\n          </button>\n\n        </form>\n      </div>\n    </div>\n  </section>\n\n  <div class="card-body collapse in">\n    <div class="card-block">\n      <div class="card-text">\n        <div class="table-responsive">\n          <table  datatable  [dtTrigger] ="dtTrigger" class="table table-striped table-bordered table-hover" >\n            <thead>\n            <tr>\n              <th style="background:#4bb8cb;color:white;text-align:left" st-sort="no" ><font class="font-small-3">No</font></th>\n              <th style="background:#4bb8cb;color:white;text-align:left" st-sort="namaSales" ><font class="font-small-3">Nama Sales</font></th>\n              <th style="background:#4bb8cb;color:white;text-align:left" st-sort="codeOutlet" ><font class="font-small-3">Code Outlet</font></th>\n              <th style="background:#4bb8cb;color:white;text-align:left" st-sort="namaOutlet" ><font class="font-small-3">Nama Outlet</font></th>\n              <th style="background:#4bb8cb;color:white;text-align:left" st-sort="alamatOutlet" ><font class="font-small-3">Alamat Outlet</font></th>\n              <th style="background:#4bb8cb;color:white;text-align:left" st-sort="propinsi" ><font class="font-small-3">Propinsi</font></th>\n              <th style="background:#4bb8cb;color:white;text-align:left" st-sort="verifikasi" ><font class="font-small-3">Verifikasi</font></th>\n              <th style="background:#4bb8cb;color:black;text-align:left" st-sort="" ><font class="font-small-3"></font></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor="let outlet of dataOutlets">\n              <td style="color:black;text-align:right"><font class="font-small-3">{{outlet.no}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{outlet.outletnamasales}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{outlet.outletid}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{outlet.outletname}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{outlet.outletalamat}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{outlet.outletpropinsi}}</font></td>\n              <td style="color:black;text-align:left" ><font class="font-small-3">{{outlet.wsoutletstatusactivation === 1 ? "YES" : "NO"}}</font></td>\n\n              <td style="color:black;text-align:center;width:200px"><font class="font-small-3">\n                <a class="btn btn-info" href="#"  (click)="modalShow(outlet.wsoutletid, outlet.outletname)" >\n                  <i class="glyphicon  icon-white"></i>Detail</a>&emsp;\n                <a class="btn btn-info" href="#" (click)="showMaps(outlet.outletlatitude, outlet.outletlongitude, outlet.outletmapicon)">\n                  <i class=" glyphicon glyphicon-map-marker"></i>Maps</a></font></td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n <!-- <div class="modal fade text-xs-left" id="defaultsalessop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">\n    <div class="modal-dialog modal-lg" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n          </button>\n          <h4 class="modal-title" id="myModalLabel1" style="background:#009688;color:white">Sales Performance (To Day)</h4>\n          <div class="table-responsive">\n            <table class="table table-hover mb-0">\n              <thead>\n              <tr>\n                <th>NO</th>\n                <th>Outlet</th>\n                <th>Sales</th>\n              </tr>\n              </thead>\n              <tbody>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\outlet\outlet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_outlet_combojenis__["a" /* ComboJenis */], __WEBPACK_IMPORTED_MODULE_5__providers_outlet_comborsm__["a" /* ComboRSM */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_outlet_outlet__["a" /* StatusOutlet */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OutletPage);
    return OutletPage;
}());

//# sourceMappingURL=outlet.js.map

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trackings_combosales__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_visitasis_visitasis__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapoutlet_mapoutlet__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the VisitasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisitasiPage = (function () {
    function VisitasiPage(modalCtrl, statusVisitasi, comboSales, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.statusVisitasi = statusVisitasi;
        this.comboSales = comboSales;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.visitasiData = { "usridnya": "", "tanggalawal": "", "tanggalakhir": "" };
        this.mapData = { "latitude": "", "longitude": "", "icon": "" };
    }
    VisitasiPage.prototype.ionViewDidLoad = function () {
        this.myDate = new Date().toISOString();
        this.myDate1 = new Date().toISOString();
        console.log('ionViewDidLoad VisitasiPage');
        this.combosales();
        this.loaddata();
    };
    VisitasiPage.prototype.loaddata = function () {
        var _this = this;
        this.lodadatatable();
        this.statusVisitasi.postData(this.visitasiData)
            .then(function (result) {
            _this.resposeDataVisitasi = result;
            console.log(_this.resposeDataVisitasi);
            var dataOutlet = JSON.parse(JSON.stringify(_this.resposeDataVisitasi));
            _this.dataVisitasis = dataOutlet;
            _this.dtTrigger.next();
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    VisitasiPage.prototype.lodadatatable = function () {
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.visitasiData.usridnya = dataUser[0]['Usr_ID'];
        this.dateAwal = new Date().toISOString();
        this.dateAwal = this.dateAwal.substring(0, 10);
        this.visitasiData.tanggalawal = this.dateAwal;
        this.dateAkhir = new Date().toISOString();
        this.dateAkhir = this.dateAkhir.substring(0, 10);
        this.visitasiData.tanggalakhir = this.dateAkhir;
    };
    VisitasiPage.prototype.showMaps = function (data, data1, data2) {
        this.mapData.latitude = data;
        this.mapData.longitude = data1;
        this.mapData.icon = data2;
        console.log(this.mapData.icon);
        var obj1 = this.mapData;
        var modalMaps = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__mapoutlet_mapoutlet__["a" /* MapoutletPage */], obj1);
        modalMaps.present();
    };
    VisitasiPage.prototype.showMaps1 = function (data, data1, data2) {
        this.mapData.latitude = data;
        this.mapData.longitude = data1;
        this.mapData.icon = data2;
        console.log(this.mapData.icon);
        var obj1 = this.mapData;
        var modalMaps = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__mapoutlet_mapoutlet__["a" /* MapoutletPage */], obj1);
        modalMaps.present();
    };
    VisitasiPage.prototype.filterOutlet = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.visitasiData.usridnya = dataUser[0]['Usr_ID'];
        this.dateAwal = this.myDate.toString();
        this.dateAwal = this.dateAwal.substring(0, 10);
        this.visitasiData.tanggalawal = this.dateAwal;
        this.dateAkhir = this.myDate1.toString();
        this.dateAkhir = this.dateAkhir.substring(0, 10);
        this.visitasiData.tanggalakhir = this.dateAkhir;
        this.statusVisitasi.postData(this.visitasiData)
            .then(function (result) {
            _this.resposeDataVisitasi = result;
            console.log(_this.resposeDataVisitasi);
            var dataOutlet = JSON.parse(JSON.stringify(_this.resposeDataVisitasi));
            _this.dataVisitasis = dataOutlet;
            _this.dtTrigger.next();
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    VisitasiPage.prototype.combosales = function () {
        var _this = this;
        this.comboSales.postData().then(function (result) {
            _this.resposeDataComboSales = result;
            console.log(_this.resposeDataComboSales);
            var dataComboSales = JSON.parse(JSON.stringify(_this.resposeDataComboSales));
            _this.dataComboSales1 = dataComboSales;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    VisitasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visitasi',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\visitasi\visitasi.html"*/'<!--\n  Generated template for the VisitasiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon  class="icon-android-menu"></ion-icon>\n    </button>\n\n    <ion-title>Visitasi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <section id="description" class="card">\n    <div class="card-header">\n      <h4 class="card-title"><span class="icon-search7"></span>&emsp;Filter</h4>\n    </div>\n    <div class="card-body collapse in">\n      <div class="card-block">\n        <form class="form-horizontal form-simple" (submit)="filterOutlet()" >\n          <div class="card-text">\n            <div class="row">\n              <div class="col-md-4">\n                <div class="form-group">\n\n                  <ion-item>\n                    <ion-label class="font-small-3">Date From :</ion-label>\n                    <ion-datetime class="font-small-3" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" name="date" [(ngModel)]="myDate" ></ion-datetime>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label class="font-small-3">Date To :</ion-label>\n                    <ion-datetime class="font-small-3" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" name="date1" [(ngModel)]="myDate1" ></ion-datetime>\n                  </ion-item>\n                </div>\n              </div>\n\n              <div class="col-md-4">\n                <div class="form-group">\n\n                  <ion-item>\n                    <ion-label class="font-small-3">Sales</ion-label>\n                    <ion-select [(ngModel)]="mySelect2" name="sales" class="font-small-3">\n                      <ion-option value=""  >= All Sales =</ion-option>\n                      <ion-option *ngFor="let val of dataComboSales1" value={{val.Usr_ID}} >{{val.Nama_Lengkap}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <button type="submit" class="btn btn-info">\n            <i class="icon-search7"></i> Search\n          </button>\n\n        </form>\n      </div>\n    </div>\n  </section>\n\n  <div class="card-body collapse in">\n    <div class="card-block">\n      <div class="card-text">\n        <div class="table-responsive">\n          <table  datatable  [dtTrigger] ="dtTrigger" class="table table-striped table-bordered table-hover" >\n            <thead>\n            <th style="background:#4bb8cb;color:white;text-align:center"><font class="font-small-3">No</font></th>\n            <th style="background:#4bb8cb;color:white;text-align:center"><font class="font-small-3">Date</font></th>\n            <th style="background:#4bb8cb;color:white;text-align:center"><font class="font-small-3">NIK</font></th>\n            <th style="background:#4bb8cb;color:white;text-align:center"><font class="font-small-3">Nama Sales</font></th>\n            <th style="background:#4bb8cb;color:white;text-align:center"><font class="font-small-3">Outlet</font></th>\n            <th style="background:#4bb8cb;color:white;text-align:center"><font class="font-small-3">Check In</font></th>\n            <th style="background:#4bb8cb;color:black;text-align:center"><font class="font-small-3"></font></th>\n            <th style="background:#4bb8cb;color:white;text-align:center"><font class="font-small-3">Check Out</font></th>\n            <th style="background:#4bb8cb;color:black;text-align:center"><font class="font-small-3"></font></th>\n            <th style="background:#4bb8cb;color:white;text-align:center"><font class="font-small-3">Selisih</font></th>\n            </thead>\n            <tbody>\n            <tr *ngFor="let visit of dataVisitasis">\n              <td style="color:black;text-align:right"><font class="font-small-3">{{visit.no}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{visit.tanggalinputin}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{visit.nik}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{visit.namasales}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{visit.cardname}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{visit.timeintrace}}</font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">\n                <a class="btn btn-info" href="#" (click)="showMaps(visit.latitudein, visit.longitudein)">\n                  <i class=" glyphicon glyphicon-map-marker"></i>Maps</a></font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{visit.timeouttrace}}</font></td>\n              <td style="color:black;text-align:left" ><font class="font-small-3">\n                <a class="btn btn-info" href="#" (click)="showMaps1(visit.latitudeout, visit.longtitudeout)">\n                  <i class=" glyphicon glyphicon-map-marker"></i>Maps</a></font></td>\n              <td style="color:black;text-align:left"><font class="font-small-3">{{visit.selisih}}</font></td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\visitasi\visitasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_visitasis_visitasis__["a" /* StatusVisitasi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_trackings_combosales__["a" /* ComboSales */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VisitasiPage);
    return VisitasiPage;
}());

//# sourceMappingURL=visitasi.js.map

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_outlet_comborsm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_outlet_combojenis__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_trackings_combosales__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_trackings_trackings__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_trackings_trackingisi__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_trackings_dataoutletcabang__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TrackingPage = (function () {
    function TrackingPage(bukaDataOutletCabang, bukaDataTrackingIsi, bukaDataTracking, comboSales, comboJenis, comboRSM, navCtrl, navParams) {
        this.bukaDataOutletCabang = bukaDataOutletCabang;
        this.bukaDataTrackingIsi = bukaDataTrackingIsi;
        this.bukaDataTracking = bukaDataTracking;
        this.comboSales = comboSales;
        this.comboJenis = comboJenis;
        this.comboRSM = comboRSM;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendDataFilterTracking = { "pakaiusrid": "", "usrid": "", "pakaitanggalloc": "", "tanggallocawal": "", "tanggallocakhir": "", "pakaigroup": "", "rsmkacab": "", "pakaijenis": "", "jenis": "", "pakaicabangid": "", "cabangid": "", "pakaiidoutlet": "", "idoutlet": "", "pakainamaoutlet": "", "namaoutlet": "" };
        this.sendDataFilterTrackingIsi = { "cabangid": "", "pakaiusrid": "", "usrid": "", "pakaitanggalloc": "", "tanggallocawal": "", "tanggallocakhir": "", "pakaigroup": "", "rsmkacab": "", "pakaijenis": "", "jenis": "", "pakaicabangid": "", "pakaiidoutlet": "", "idoutlet": "", "pakainamaoutlet": "", "namaoutlet": "" };
        this.sendDataFilterTrackingOutletCabang = { "usrid": "", "pakaijenis": "", "jenis": "", "pakaicabangid": "", "cabangid": "", "pakaiidoutlet": "", "idoutlet": "", "pakainamaoutlet": "", "namaoutlet": "" };
    }
    TrackingPage.prototype.ionViewDidLoad = function () {
        this.comborsmasm();
        this.combojenis();
        this.combosales();
        this.myDate = new Date().toISOString();
        this.myDate1 = new Date().toISOString();
        this.mySelect = "9998";
        this.mySelect1 = "";
        this.mySelect2 = "";
        this.loaddata();
        console.log('ionViewDidLoad TrackingPage');
    };
    TrackingPage.prototype.loaddata = function () {
        this.filterOutlet();
    };
    TrackingPage.prototype.loadawal = function () {
        this.myDate = new Date().toISOString();
        this.myDate1 = new Date().toISOString();
    };
    TrackingPage.prototype.filterOutlet = function () {
        var _this = this;
        var dataUser = JSON.parse(localStorage.getItem('userDatanya'));
        this.sendDataFilterTrackingIsi.cabangid = dataUser[0]['Cabang_ID'];
        console.log(this.sendDataFilterTrackingIsi.cabangid);
        this.sendDataFilterTracking.pakaiusrid = "";
        this.sendDataFilterTrackingIsi.pakaiusrid = "";
        this.sendDataFilterTracking.usrid = dataUser[0]['Usr_ID'];
        this.sendDataFilterTrackingIsi.usrid = dataUser[0]['Usr_ID'];
        this.sendDataFilterTrackingOutletCabang.usrid = dataUser[0]['Usr_ID'];
        this.sendDataFilterTracking.pakaitanggalloc = "1";
        this.sendDataFilterTrackingIsi.pakaitanggalloc = "1";
        this.dateAwal = this.myDate.toString();
        this.dateAwal = this.dateAwal.substring(0, 10);
        this.sendDataFilterTracking.tanggallocawal = this.dateAwal;
        this.sendDataFilterTrackingIsi.tanggallocawal = this.dateAwal;
        this.dateAkhir = this.myDate1.toString();
        this.dateAkhir = this.dateAkhir.substring(0, 10);
        this.sendDataFilterTracking.tanggallocakhir = this.dateAkhir;
        this.sendDataFilterTrackingIsi.tanggallocakhir = this.dateAkhir;
        this.sendDataFilterTracking.pakaigroup = "";
        this.sendDataFilterTrackingIsi.pakaigroup = "";
        this.sendDataFilterTracking.rsmkacab = this.mySelect.toString();
        this.sendDataFilterTrackingIsi.rsmkacab = this.mySelect.toString();
        this.sendDataFilterTracking.pakaijenis = "";
        this.sendDataFilterTracking.jenis = this.mySelect1.toString();
        this.sendDataFilterTracking.pakaicabangid = "";
        this.sendDataFilterTracking.cabangid = "";
        this.sendDataFilterTracking.pakaiidoutlet = "";
        this.sendDataFilterTracking.idoutlet = "";
        this.sendDataFilterTracking.pakainamaoutlet = "";
        this.sendDataFilterTracking.namaoutlet = "";
        this.sendDataFilterTrackingIsi.pakaijenis = "";
        this.sendDataFilterTrackingIsi.jenis = this.mySelect1.toString();
        this.sendDataFilterTrackingIsi.pakaicabangid = "";
        this.sendDataFilterTrackingIsi.cabangid = "";
        this.sendDataFilterTrackingIsi.pakaiidoutlet = "";
        this.sendDataFilterTrackingIsi.idoutlet = "";
        this.sendDataFilterTrackingIsi.pakainamaoutlet = "";
        this.sendDataFilterTrackingIsi.namaoutlet = "";
        var latLng = new google.maps.LatLng(-3, 112);
        var mapOptions = {
            center: latLng,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map1 = new google.maps.Map(document.getElementById("map1"), mapOptions);
        this.iconbase = 'https://taysbakers.com/traceimages/';
        this.icons = {
            info: {
                name: 'Modern',
                icon: this.iconbase + 'C011.png'
            },
            info3: {
                name: 'Central 1',
                icon: this.iconbase + 'yadi.png'
            },
            info4: {
                name: 'Central 2',
                icon: this.iconbase + 'yadisu.png'
            },
            info5: {
                name: 'Central 3',
                icon: this.iconbase + 'Cabu.png'
            },
            parking2: {
                name: 'Central 4',
                icon: this.iconbase + 'D011.png'
            },
            parkingcentral5: {
                name: 'Central 5',
                icon: this.iconbase + 'central5.png'
            },
            parking: {
                name: 'East1',
                icon: this.iconbase + 'eastern.png'
            },
            info2: {
                name: 'West',
                icon: this.iconbase + 'I011.png'
            },
            info1: {
                name: 'Not Yet',
                icon: this.iconbase + 'A0111.png'
            }
        };
        this.legend = document.getElementById("map1");
        for (var key in this.icons) {
            var type = this.icons[key];
            var name_1 = type.name;
            var icon = type.icon;
            var div = document.createElement('div');
            div.innerHTML += '<img src="' + icon + '"> ' + name_1;
            this.legend.appendChild(div);
        }
        if (this.sendDataFilterTrackingIsi.cabangid === "33") {
            this.bukaDataTracking.postData(this.sendDataFilterTracking)
                .then(function (result) {
                _this.resposeDataTracking = result;
                var dataTracking = JSON.parse(JSON.stringify(_this.resposeDataTracking));
                _this.dataTrackings = dataTracking;
                console.log(dataTracking);
                var _loop_1 = function (i) {
                    var obj = _this.dataTrackings[i];
                    _this.LatLngs = new google.maps.LatLng(obj['Latitude'], obj['Longitude']);
                    _this.dateobj = new Date().toISOString();
                    // this.day = this.dateobj.getDate();
                    var str1 = "https://taysbakers.com/traceimages/";
                    var str2 = "01";
                    var str3 = "dot.png";
                    var str4 = "dot";
                    var str5 = "start.png";
                    if (_this.simpaniduser !== obj['Usr_ID_Sales']) {
                        _this.res = str1.concat(str4, str5);
                    }
                    else {
                        _this.res = str1.concat(str2, str3);
                    }
                    var marker1 = new google.maps.Marker({
                        position: _this.LatLngs,
                        map: _this.map1,
                        icon: _this.res
                    });
                    marker1.setMap(_this.map1);
                    google.maps.event.addListener(marker1, "click", function (e) {
                        var images = 'locationsalesend.png';
                        var icon = 'https://taysbakers.com/traceimages/' + images;
                        var infoWindowContent = "<div id='content' align='center' style = 'width:260px;min-height:40px'><img src=" + icon + " /><div><b>" + obj['Nama_Lengkap'] + " </b></div><div >Date Location : " + obj['Tanggal_Location'] + "</div><div >battery Status  : " + obj['Status_Baterai'] + "%</div>";
                        var infoWindow = new google.maps.InfoWindow({
                            content: infoWindowContent
                        });
                        infoWindow.open(this.map1, marker1);
                    });
                    var myLatlng = new google.maps.LatLng(obj['outletlatitude'], obj['outletlongitude']);
                    if (obj['outletrsmcode'] === "46966280C25B46409A38FEB9DADE3555" || obj['outletrsmcode'] === "Herman" || obj['outletrsmcode'] === "153329A233394D6FB9AFFB12B29123A6") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/I011.png";
                    }
                    else if (obj['outletrsmcode'] === "HO") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/B02.png";
                    }
                    else if (obj['outletrsmcode'] === "sdf34234") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/D011.png";
                    }
                    else if (obj['outletrsmcode'] === "central1") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/yadi.png";
                    }
                    else if (obj['outletrsmcode'] === "central2") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/yadisu.png";
                    }
                    else if (obj['outletrsmcode'] === "SupriTemp") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/Cabu.png";
                    }
                    else if (obj['outletrsmcode'] === "Rendy") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/C011.png";
                    }
                    else if (obj['outletrsmcode'] === "agus") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/eastern.png";
                    }
                    else if (obj['outletrsmcode'] === "Rendy5") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/central5.png";
                    }
                    else {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/A0111.png";
                    }
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: _this.map1,
                        title: obj['outletname'],
                        icon: _this.iconnya
                    });
                    marker.setMap(_this.map1);
                    google.maps.event.addListener(marker, "click", function (e) {
                        var images = 'locationsalesend.png';
                        var icon = 'https://taysbakers.com/traceimages/' + images;
                        var imagesShow = "https://taysbakers.com/traceimages/";
                        console.log(obj['outletfoto']);
                        var str = obj['outletfoto'];
                        var photo = str.replace("file/", "");
                        var photo1 = photo.replace("/", "");
                        var infoWindowContent = "<div align ='center' style = 'width:260px;min-height:50px'>" +
                            "<img width='130' height='100' src=" + imagesShow + photo1 + " />" +
                            "<div><b><u><a target='_blank' itemprop='url' href=" + imagesShow + photo1 + " > " + obj['outletname'] + " </u></b></a></div>" +
                            "<div>Sales Name : " + obj['outletnamasales'] + "</div>" +
                            "<div> Address : " + obj['outletalamat'] + "</div>" +
                            "<div> Registration : " + obj['outlettanggalinput'] + "</div>" +
                            "<div> Tanggal Synch : " + obj['outlettanggalsync'] + "</div></div>";
                        var infoWindow = new google.maps.InfoWindow({
                            content: infoWindowContent
                        });
                        infoWindow.open(this.map1, marker);
                    });
                };
                for (var i = 0; i < _this.dataTrackings.length; i++) {
                    _loop_1(i);
                }
                /*  this.bukaDataOutletCabang.postData(this.sendDataFilterTrackingOutletCabang)
                    .then((result) =>{
                      this.resposeDataTrackingOutletCabang = result;
        
                      const dataTrackingOutletCabang = JSON.parse(JSON.stringify(this.resposeDataTrackingOutletCabang));
                      this.dataTrackingsOutletCabang = dataTrackingOutletCabang;
                      console.log(this.dataTrackingsOutletCabang);
        
                      for (let i = 0; i < this.dataTrackingsOutletCabang.length; i++) {
                        let obj = this.dataTrackingsOutletCabang[i];
                        let myLatlng = new google.maps.LatLng(obj['outletlatitude'], obj['outletlongitude']);
        
                        if(obj['outletrsmcode'] === "46966280C25B46409A38FEB9DADE3555" || obj['outletrsmcode'] === "Herman" || obj['outletrsmcode'] === "153329A233394D6FB9AFFB12B29123A6" ){
                          this.iconnya = "https://www.taysbakers.com/traceimages/I011.png";
                        }else if(obj['outletrsmcode'] === "HO"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/B02.png";
                        }else if(obj['outletrsmcode'] === "sdf34234"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/D011.png";
                        }else if(obj['outletrsmcode'] === "central1"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/yadi.png";
                        }else if(obj['outletrsmcode'] === "central2"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/yadisu.png";
                        }else if(obj['outletrsmcode'] === "SupriTemp"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/Cabu.png";
                        }else if(obj['outletrsmcode'] === "Rendy"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/C011.png";
                        }else if(obj['outletrsmcode'] === "agus"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/eastern.png";
                        }else if(obj['outletrsmcode'] === "Rendy5"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/central5.png";
                        }else{
                          this.iconnya = "https://www.taysbakers.com/traceimages/A0111.png";
                        }
        
        
                        let marker = new google.maps.Marker({
                          position: myLatlng,
                          map: this.map1,
                          title: obj['outletname'],
                          icon: this.iconnya
                        });
                        marker.setMap(this.map1);
                        google.maps.event.addListener(marker, "click", function (e) {
        
                          let images = 'locationsalesend.png';
                          let icon = 'https://taysbakers.com/traceimages/' + images;
                          let imagesShow = "https://taysbakers.com/traceimages/";
                          console.log( obj['outletfoto']);
                          let str = obj['outletfoto'];
                          let photo = str.replace("file/", "");
                          let photo1 = photo.replace("/","");
                          let infoWindowContent = "<div align ='center' style = 'width:260px;min-height:50px'>" +
                            "<img width='130' height='100' src=" + imagesShow + photo1 + " />" +
                            "<div><b><u><a target='_blank' itemprop='url' href=" + imagesShow + photo1 + " > "+ obj['outletname'] + " </u></b></a></div>" +
                            "<div>Sales Name : "+ obj['outletnamasales'] +"</div>" +
                            "<div> Address : " + obj['outletalamat'] + "</div>" +
                            "<div> Registration : " + obj['outlettanggalinput'] + "</div>" +
                            "<div> Tanggal Synch : " + obj['outlettanggalsync'] + "</div></div>";
                          let infoWindow = new google.maps.InfoWindow({
                            content: infoWindowContent
                          });
                          infoWindow.open(this.map1, marker);
                        });
        
                      }
        
        
                      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
                      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
                    }, (err) => {
                      //Connection failed message
                      return console.log(err);
                    }); */
                //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
                //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
            }, function (err) {
                //Connection failed message
                return console.log(err);
            });
        }
        else {
            this.bukaDataTrackingIsi.postData(this.sendDataFilterTrackingIsi)
                .then(function (result) {
                _this.resposeDataTrackingIsi = result;
                var dataTrackingIsi = JSON.parse(JSON.stringify(_this.resposeDataTrackingIsi));
                _this.dataTrackings = dataTrackingIsi;
                console.log(dataTrackingIsi);
                var _loop_2 = function (i) {
                    var obj = _this.dataTrackings[i];
                    _this.LatLngs = new google.maps.LatLng(obj['Latitude'], obj['Longitude']);
                    _this.dateobj = new Date().toISOString();
                    //  this.day = this.dateobj.getDate();
                    var str1 = "https://taysbakers.com/traceimages/";
                    var str2 = "01";
                    var str3 = "dot.png";
                    var str4 = "dot";
                    var str5 = "start.png";
                    if (_this.simpaniduser !== obj['Usr_ID_Sales']) {
                        _this.res = str1.concat(str4, str5);
                    }
                    else {
                        _this.res = str1.concat(str2, str3);
                    }
                    var marker1 = new google.maps.Marker({
                        position: _this.LatLngs,
                        map: _this.map1,
                        icon: _this.res
                    });
                    marker1.setMap(_this.map1);
                    google.maps.event.addListener(marker1, "click", function (e) {
                        var images = 'locationsalesend.png';
                        var icon = 'https://taysbakers.com/traceimages/' + images;
                        var infoWindowContent = "<div id='content' align='center' style = 'width:260px;min-height:40px'><img src=" + icon + " /><div><b>" + obj['Nama_Lengkap'] + " </b></div><div >Date Location : " + obj['Tanggal_Location'] + "</div><div >battery Status  : " + obj['Status_Baterai'] + "%</div>";
                        var infoWindow = new google.maps.InfoWindow({
                            content: infoWindowContent
                        });
                        infoWindow.open(this.map1, marker1);
                    });
                    var myLatlng = new google.maps.LatLng(obj['outletlatitude'], obj['outletlongitude']);
                    if (obj['outletrsmcode'] === "46966280C25B46409A38FEB9DADE3555" || obj['outletrsmcode'] === "Herman" || obj['outletrsmcode'] === "153329A233394D6FB9AFFB12B29123A6") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/I011.png";
                    }
                    else if (obj['outletrsmcode'] === "HO") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/B02.png";
                    }
                    else if (obj['outletrsmcode'] === "sdf34234") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/D011.png";
                    }
                    else if (obj['outletrsmcode'] === "central1") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/yadi.png";
                    }
                    else if (obj['outletrsmcode'] === "central2") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/yadisu.png";
                    }
                    else if (obj['outletrsmcode'] === "SupriTemp") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/Cabu.png";
                    }
                    else if (obj['outletrsmcode'] === "Rendy") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/C011.png";
                    }
                    else if (obj['outletrsmcode'] === "agus") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/eastern.png";
                    }
                    else if (obj['outletrsmcode'] === "Rendy5") {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/central5.png";
                    }
                    else {
                        _this.iconnya = "https://www.taysbakers.com/traceimages/A0111.png";
                    }
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: _this.map1,
                        title: obj['outletname'],
                        icon: _this.iconnya
                    });
                    marker.setMap(_this.map1);
                    google.maps.event.addListener(marker, "click", function (e) {
                        var images = 'locationsalesend.png';
                        var icon = 'https://taysbakers.com/traceimages/' + images;
                        var imagesShow = "https://taysbakers.com/traceimages/";
                        console.log(obj['outletfoto']);
                        var str = obj['outletfoto'];
                        var photo = str.replace("file/", "");
                        var photo1 = photo.replace("/", "");
                        var infoWindowContent = "<div align ='center' style = 'width:260px;min-height:50px'>" +
                            "<img width='130' height='100' src=" + imagesShow + photo1 + " />" +
                            "<div><b><u><a target='_blank' itemprop='url' href=" + imagesShow + photo1 + " > " + obj['outletname'] + " </u></b></a></div>" +
                            "<div>Sales Name : " + obj['outletnamasales'] + "</div>" +
                            "<div> Address : " + obj['outletalamat'] + "</div>" +
                            "<div> Registration : " + obj['outlettanggalinput'] + "</div>" +
                            "<div> Tanggal Synch : " + obj['outlettanggalsync'] + "</div></div>";
                        var infoWindow = new google.maps.InfoWindow({
                            content: infoWindowContent
                        });
                        infoWindow.open(this.map1, marker);
                    });
                };
                for (var i = 0; i < _this.dataTrackings.length; i++) {
                    _loop_2(i);
                }
                /* this.bukaDataOutletCabang.postData(this.sendDataFilterTrackingOutletCabang)
                    .then((result) =>{
                      this.resposeDataTrackingOutletCabang = result;
        
                      const dataTrackingOutletCabang = JSON.parse(JSON.stringify(this.resposeDataTrackingOutletCabang));
                      this.dataTrackingsOutletCabang = dataTrackingOutletCabang;
                      console.log(this.dataTrackingsOutletCabang);
        
                      for (let i = 0; i < this.dataTrackingsOutletCabang.length; i++) {
                        let obj = this.dataTrackingsOutletCabang[i];
                        let myLatlng = new google.maps.LatLng(obj['outletlatitude'], obj['outletlongitude']);
        
                        if(obj['outletrsmcode'] === "46966280C25B46409A38FEB9DADE3555" || obj['outletrsmcode'] === "Herman" || obj['outletrsmcode'] === "153329A233394D6FB9AFFB12B29123A6" ){
                          this.iconnya = "https://www.taysbakers.com/traceimages/I011.png";
                        }else if(obj['outletrsmcode'] === "HO"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/B02.png";
                        }else if(obj['outletrsmcode'] === "sdf34234"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/D011.png";
                        }else if(obj['outletrsmcode'] === "central1"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/yadi.png";
                        }else if(obj['outletrsmcode'] === "central2"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/yadisu.png";
                        }else if(obj['outletrsmcode'] === "SupriTemp"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/Cabu.png";
                        }else if(obj['outletrsmcode'] === "Rendy"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/C011.png";
                        }else if(obj['outletrsmcode'] === "agus"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/eastern.png";
                        }else if(obj['outletrsmcode'] === "Rendy5"){
                          this.iconnya = "https://www.taysbakers.com/traceimages/central5.png";
                        }else{
                          this.iconnya = "https://www.taysbakers.com/traceimages/A0111.png";
                        }
        
        
                        let marker = new google.maps.Marker({
                          position: myLatlng,
                          map: this.map1,
                          title: obj['outletname'],
                          icon: this.iconnya
                        });
                        marker.setMap(this.map1);
                        google.maps.event.addListener(marker, "click", function (e) {
        
                          let images = 'locationsalesend.png';
                          let icon = 'https://taysbakers.com/traceimages/' + images;
                          let imagesShow = "https://taysbakers.com/traceimages/";
                          console.log( obj['outletfoto']);
                          let str = obj['outletfoto'];
                          let photo = str.replace("file/", "");
                          let photo1 = photo.replace("/","");
                          let infoWindowContent = "<div align ='center' style = 'width:260px;min-height:50px'>" +
                            "<img width='130' height='100' src=" + imagesShow + photo1 + " />" +
                            "<div><b><u><a target='_blank' itemprop='url' href=" + imagesShow + photo1 + " > "+ obj['outletname'] + " </u></b></a></div>" +
                            "<div>Sales Name : "+ obj['outletnamasales'] +"</div>" +
                            "<div> Address : " + obj['outletalamat'] + "</div>" +
                            "<div> Registration : " + obj['outlettanggalinput'] + "</div>" +
                            "<div> Tanggal Synch : " + obj['outlettanggalsync'] + "</div></div>";
                          let infoWindow = new google.maps.InfoWindow({
                            content: infoWindowContent
                          });
                          infoWindow.open(this.map1, marker);
                        });
        
                      }
        
        
                      //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
                      //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
                    }, (err) => {
                      //Connection failed message
                      return console.log(err);
                    }); */
                //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
                //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
            }, function (err) {
                //Connection failed message
                return console.log(err);
            });
        }
    };
    TrackingPage.prototype.comborsmasm = function () {
        var _this = this;
        this.comboRSM.postData().then(function (result) {
            _this.resposeDataComboRSM = result;
            console.log(_this.resposeDataComboRSM);
            var dataComboRSM = JSON.parse(JSON.stringify(_this.resposeDataComboRSM));
            _this.dataComboRSM1 = dataComboRSM;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    TrackingPage.prototype.combojenis = function () {
        var _this = this;
        this.comboJenis.postData().then(function (result) {
            _this.resposeDataComboJenis = result;
            console.log(_this.resposeDataComboJenis);
            var dataComboJenis = JSON.parse(JSON.stringify(_this.resposeDataComboJenis));
            _this.dataComboJenis1 = dataComboJenis;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    TrackingPage.prototype.combosales = function () {
        var _this = this;
        this.comboSales.postData().then(function (result) {
            _this.resposeDataComboSales = result;
            console.log(_this.resposeDataComboSales);
            var dataComboSales = JSON.parse(JSON.stringify(_this.resposeDataComboSales));
            _this.dataComboSales1 = dataComboSales;
            //localStorage.setItem('dataStatusAbsensi', JSON.stringify(this.resposeDataStatusAbsensi) )
            //console.log(JSON.stringify(this.resposeDataStatusAbsensi))
        }, function (err) {
            //Connection failed message
            return console.log(err);
        });
    };
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking',template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\pages\tracking\tracking.html"*/'<!--\n  Generated template for the TrackingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon  class="icon-android-menu"></ion-icon>\n    </button>\n    <ion-title class="icon-map font-size-small">Report Tracking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <section id="description" class="card">\n    <div class="card-header">\n      <h4 class="card-title"><span class="icon-search7"></span>&emsp;Filter</h4>\n    </div>\n    <div class="card-body collapse in">\n      <div class="card-block">\n        <form class="form-horizontal form-simple" (submit)="filterOutlet()" >\n          <div class="card-text">\n            <div class="row">\n              <div class="col-md-4">\n                <div class="form-group">\n\n                  <ion-item>\n                    <ion-label class="font-small-3" >Date From :</ion-label>\n                    <ion-datetime class="font-small-3" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" 	 name="date" [(ngModel)]="myDate" ></ion-datetime>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label class="font-small-3" >Date To :</ion-label>\n                    <ion-datetime class="font-small-3" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" 	 name="date1" [(ngModel)]="myDate1" ></ion-datetime>\n                  </ion-item>\n                </div>\n              </div>\n\n              <div class="col-md-4">\n                <div class="form-group">\n\n                  <ion-item>\n                    <ion-label class="font-small-3">Group</ion-label>\n                    <ion-select [(ngModel)]="mySelect" name="rsm" class="font-small-3 rsm">\n                      <ion-option value="9998" >= All RSM/KACAB =</ion-option>\n                      <ion-option *ngFor="let val of dataComboRSM1" value={{val.Usr_ID}} >{{val.Nama_Lengkap}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label class="font-small-3">Jenis Outlet</ion-label>\n                    <ion-select [(ngModel)]="mySelect1" name="jenis" class="font-small-3 jenis">\n                      <ion-option value=""  >= All JENIS =</ion-option>\n                      <ion-option *ngFor="let val of dataComboJenis1" value={{val.StatusID}} >{{val.Status_Name}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div>\n                  <ion-item>\n                    <ion-label class="font-small-3">Sales</ion-label>\n                    <ion-select [(ngModel)]="mySelect2" name="sales" class="font-small-3 sales">\n                      <ion-option value=""  >= All Sales =</ion-option>\n                      <ion-option *ngFor="let val of dataComboSales1" value={{val.Usr_ID}} >{{val.Nama_Lengkap}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <button type="submit" class="btn btn-info">\n            <i class="icon-search7"></i> Search\n          </button>\n\n        </form>\n      </div>\n    </div>\n  </section>\n<section style="width: 100%; height: 100%" class="card">\n  <div class="card-body collapse in">\n    <div class="card-block">\n      <div class="card-text">\n        <div class="map-container" data-tap-disabled="true">\n          <div id="map1" class="map"></div>\n          <div id="legend" ></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n</ion-content>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\pages\tracking\tracking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_trackings_dataoutletcabang__["a" /* BukaDataOutletCabang */],
            __WEBPACK_IMPORTED_MODULE_6__providers_trackings_trackingisi__["a" /* BukaDataTrackingIsi */], __WEBPACK_IMPORTED_MODULE_5__providers_trackings_trackings__["a" /* BukaDataTracking */],
            __WEBPACK_IMPORTED_MODULE_4__providers_trackings_combosales__["a" /* ComboSales */], __WEBPACK_IMPORTED_MODULE_3__providers_outlet_combojenis__["a" /* ComboJenis */], __WEBPACK_IMPORTED_MODULE_2__providers_outlet_comborsm__["a" /* ComboRSM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detailoutlet/detailoutlet.module": [
		363,
		26
	],
	"../pages/home/home.module": [
		364,
		25
	],
	"../pages/login/login.module": [
		367,
		24
	],
	"../pages/logout/logout.module": [
		365,
		0
	],
	"../pages/mapoutlet/mapoutlet.module": [
		366,
		23
	],
	"../pages/modalabsenmonthoff/modalabsenmonthoff.module": [
		368,
		22
	],
	"../pages/modalabsenmonthon/modalabsenmonthon.module": [
		369,
		21
	],
	"../pages/modalabsentodayoff/modalabsentodayoff.module": [
		370,
		20
	],
	"../pages/modalabsentodayon/modalabsentodayon.module": [
		371,
		19
	],
	"../pages/modalabsenweekoff/modalabsenweekoff.module": [
		373,
		18
	],
	"../pages/modalabsenweekon/modalabsenweekon.module": [
		372,
		17
	],
	"../pages/modalcollectmonth/modalcollectmonth.module": [
		374,
		16
	],
	"../pages/modalcollecttoday/modalcollecttoday.module": [
		375,
		15
	],
	"../pages/modalcollectweek/modalcollectweek.module": [
		376,
		14
	],
	"../pages/modalcumulative/modalcumulative.module": [
		377,
		13
	],
	"../pages/modalnoomonth/modalnoomonth.module": [
		378,
		12
	],
	"../pages/modalnootoday/modalnootoday.module": [
		379,
		11
	],
	"../pages/modalnooweek/modalnooweek.module": [
		381,
		10
	],
	"../pages/modalpomonth/modalpomonth.module": [
		380,
		9
	],
	"../pages/modalpotoday/modalpotoday.module": [
		382,
		8
	],
	"../pages/modalpoweek/modalpoweek.module": [
		383,
		7
	],
	"../pages/modalsalesmonth/modalsalesmonth.module": [
		385,
		6
	],
	"../pages/modalsalestoday/modalsalestoday.module": [
		384,
		5
	],
	"../pages/modalsalesweek/modalsalesweek.module": [
		386,
		4
	],
	"../pages/outlet/outlet.module": [
		387,
		3
	],
	"../pages/tracking/tracking.module": [
		389,
		2
	],
	"../pages/visitasi/visitasi.module": [
		388,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailOutlet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailoutlet.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var DetailOutlet = (function () {
    function DetailOutlet(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    DetailOutlet.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    DetailOutlet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DetailOutlet);
    return DetailOutlet;
}());

//# sourceMappingURL=detailoutletnya.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsLeaderboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailtopscore.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsLeaderboard = (function () {
    function ModalsLeaderboard(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsLeaderboard.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsLeaderboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsLeaderboard);
    return ModalsLeaderboard;
}());

//# sourceMappingURL=modals.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsAbsenTodayOn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailstatusabsenontoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsAbsenTodayOn = (function () {
    function ModalsAbsenTodayOn(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsAbsenTodayOn.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsAbsenTodayOn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsAbsenTodayOn);
    return ModalsAbsenTodayOn;
}());

//# sourceMappingURL=absentodayon.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsAbsenTodayOff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailstatusabsenofftoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsAbsenTodayOff = (function () {
    function ModalsAbsenTodayOff(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsAbsenTodayOff.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsAbsenTodayOff = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsAbsenTodayOff);
    return ModalsAbsenTodayOff;
}());

//# sourceMappingURL=absentodayoff.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsAbsenWeekOn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailstatusabsenonweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsAbsenWeekOn = (function () {
    function ModalsAbsenWeekOn(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsAbsenWeekOn.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsAbsenWeekOn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsAbsenWeekOn);
    return ModalsAbsenWeekOn;
}());

//# sourceMappingURL=absenweekon.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsAbsenWeekOff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailstatusabsenoffweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsAbsenWeekOff = (function () {
    function ModalsAbsenWeekOff(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsAbsenWeekOff.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsAbsenWeekOff = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsAbsenWeekOff);
    return ModalsAbsenWeekOff;
}());

//# sourceMappingURL=absenweekoff.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsAbsenMonthOn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailstatusabsenonmonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsAbsenMonthOn = (function () {
    function ModalsAbsenMonthOn(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsAbsenMonthOn.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsAbsenMonthOn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsAbsenMonthOn);
    return ModalsAbsenMonthOn;
}());

//# sourceMappingURL=absenmonthon.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsAbsenMonthOff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailstatusabsenoffmonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsAbsenMonthOff = (function () {
    function ModalsAbsenMonthOff(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsAbsenMonthOff.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsAbsenMonthOff = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsAbsenMonthOff);
    return ModalsAbsenMonthOff;
}());

//# sourceMappingURL=absenmonthoff.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsNooToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailnootoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsNooToday = (function () {
    function ModalsNooToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsNooToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsNooToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsNooToday);
    return ModalsNooToday;
}());

//# sourceMappingURL=nootoday.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsNooWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailnooweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsNooWeek = (function () {
    function ModalsNooWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsNooWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsNooWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsNooWeek);
    return ModalsNooWeek;
}());

//# sourceMappingURL=nooweek.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsNooMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailnoomonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsNooMonth = (function () {
    function ModalsNooMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsNooMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsNooMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsNooMonth);
    return ModalsNooMonth;
}());

//# sourceMappingURL=noomonth.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsPoToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailpotoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsPoToday = (function () {
    function ModalsPoToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsPoToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsPoToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsPoToday);
    return ModalsPoToday;
}());

//# sourceMappingURL=potoday.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsPoWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailpoweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsPoWeek = (function () {
    function ModalsPoWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsPoWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsPoWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsPoWeek);
    return ModalsPoWeek;
}());

//# sourceMappingURL=poweek.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsPoMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailpomonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsPoMonth = (function () {
    function ModalsPoMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsPoMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsPoMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsPoMonth);
    return ModalsPoMonth;
}());

//# sourceMappingURL=pomonth.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsSalesWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailsalesweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsSalesWeek = (function () {
    function ModalsSalesWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsSalesWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsSalesWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsSalesWeek);
    return ModalsSalesWeek;
}());

//# sourceMappingURL=salesweek.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsSalesToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailsalestoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsSalesToday = (function () {
    function ModalsSalesToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsSalesToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsSalesToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsSalesToday);
    return ModalsSalesToday;
}());

//# sourceMappingURL=salestoday.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsSalesMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailsalesmonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsSalesMonth = (function () {
    function ModalsSalesMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsSalesMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsSalesMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsSalesMonth);
    return ModalsSalesMonth;
}());

//# sourceMappingURL=salesmonth.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsCollectToday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailcollecttoday.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsCollectToday = (function () {
    function ModalsCollectToday(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsCollectToday.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsCollectToday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsCollectToday);
    return ModalsCollectToday;
}());

//# sourceMappingURL=collecttoday.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsCollectWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailcollectweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsCollectWeek = (function () {
    function ModalsCollectWeek(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsCollectWeek.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsCollectWeek = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsCollectWeek);
    return ModalsCollectWeek;
}());

//# sourceMappingURL=collectweek.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsCollectMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/detailcollectmonth.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ModalsCollectMonth = (function () {
    function ModalsCollectMonth(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    ModalsCollectMonth.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ModalsCollectMonth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalsCollectMonth);
    return ModalsCollectMonth;
}());

//# sourceMappingURL=collectmonth.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/proseslogin.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthService = (function () {
    function AuthService(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusOutlet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/reportoutlet.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusOutlet = (function () {
    function StatusOutlet(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusOutlet.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusOutlet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusOutlet);
    return StatusOutlet;
}());

//# sourceMappingURL=outlet.js.map

/***/ }),
/* 235 */,
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusVisitasi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://www.taysbakers.com/ionic/reportvisitasi.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StatusVisitasi = (function () {
    function StatusVisitasi(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    StatusVisitasi.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    StatusVisitasi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StatusVisitasi);
    return StatusVisitasi;
}());

//# sourceMappingURL=visitasis.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BukaDataTracking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/bukadatatrackingdanoutlet.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var BukaDataTracking = (function () {
    function BukaDataTracking(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    BukaDataTracking.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    BukaDataTracking = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], BukaDataTracking);
    return BukaDataTracking;
}());

//# sourceMappingURL=trackings.js.map

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BukaDataTrackingIsi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/bukadatatrackingdanoutlet.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var BukaDataTrackingIsi = (function () {
    function BukaDataTrackingIsi(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    BukaDataTrackingIsi.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    BukaDataTrackingIsi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], BukaDataTrackingIsi);
    return BukaDataTrackingIsi;
}());

//# sourceMappingURL=trackingisi.js.map

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BukaDataOutletCabang; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]();
new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var apiUrl = 'https://taysbakers.com/ionic/bukadataoutletcabang.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var BukaDataOutletCabang = (function () {
    function BukaDataOutletCabang(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        console.log('Hello AuthService Provider');
    }
    BukaDataOutletCabang.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    BukaDataOutletCabang = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], BukaDataOutletCabang);
    return BukaDataOutletCabang;
}());

//# sourceMappingURL=dataoutletcabang.js.map

/***/ }),
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_topscore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_statusabsensi__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_statusabsensiweek__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_statusabsensiweekoff__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_statusabsensimonth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_statusabsensimonthoff__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_nooweek__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_noomonth__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_nootoday__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_poperformancemonth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_poperformanceweek__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_poperformancetoday__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_salesperformancetoday__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_salesperformanceweek__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_salesperformancemonth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_collectmonth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_collectweek__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_auth_service_collecttoday__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_auth_service_visitasimonth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_auth_service_visitasiweek__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_service_visitasitoday__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_auth_service_timeoutawal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_auth_service_timeinakhir__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_auth_service_timeinawal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_auth_service_timeoutakhir__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_auth_service_topscorecumulative__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular_datatables__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_outlet_outlet__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_outlet_outlet__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_outlet_comborsm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_outlet_combojenis__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_tracking_tracking__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_visitasi_visitasi__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_modalcumulative_modalcumulative__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_detailoutlet_detailoutlet__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_auth_service_detailoutletnya__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_mapoutlet_mapoutlet__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_trackings_trackingisi__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_trackings_dataoutletcabang__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_trackings_combosales__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_trackings_trackings__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_visitasis_visitasis__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_modals_modals__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_modals_absentodayon__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_modalabsentodayon_modalabsentodayon__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_modalabsentodayoff_modalabsentodayoff__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_modals_absentodayoff__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_modalabsenweekon_modalabsenweekon__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_modalabsenweekoff_modalabsenweekoff__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_modals_absenweekon__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_modals_absenweekoff__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_modalabsenmonthon_modalabsenmonthon__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_modalabsenmonthoff_modalabsenmonthoff__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__providers_modals_absenmonthon__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_modals_absenmonthoff__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_modalnootoday_modalnootoday__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__providers_modals_noomonth__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__providers_modals_nooweek__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__providers_modals_nootoday__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_modalnoomonth_modalnoomonth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_modalnooweek_modalnooweek__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__providers_modals_poweek__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__providers_modals_pomonth__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__providers_modals_potoday__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_modalpomonth_modalpomonth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_modalpoweek_modalpoweek__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_modalpotoday_modalpotoday__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__providers_modals_salestoday__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__providers_modals_salesweek__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__providers_modals_salesmonth__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__providers_modals_collecttoday__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__providers_modals_collectweek__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__providers_modals_collectmonth__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_modalsalestoday_modalsalestoday__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_modalsalesmonth_modalsalesmonth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_modalsalesweek_modalsalesweek__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_modalcollecttoday_modalcollecttoday__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_modalcollectweek_modalcollectweek__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pages_modalcollectmonth_modalcollectmonth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__providers_auth_service_alldashboard__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* TracesAdmin */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_outlet_outlet__["a" /* OutletPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_visitasi_visitasi__["a" /* VisitasiPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_modalcumulative_modalcumulative__["a" /* ModalcumulativePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_detailoutlet_detailoutlet__["a" /* DetailoutletPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_mapoutlet_mapoutlet__["a" /* MapoutletPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_modalabsentodayon_modalabsentodayon__["a" /* ModalabsentodayonPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_modalabsentodayoff_modalabsentodayoff__["a" /* ModalabsentodayoffPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_modalabsenweekoff_modalabsenweekoff__["a" /* ModalabsenweekoffPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_modalabsenweekon_modalabsenweekon__["a" /* ModalabsenweekonPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_modalabsenmonthon_modalabsenmonthon__["a" /* ModalabsenmonthonPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_modalabsenmonthoff_modalabsenmonthoff__["a" /* ModalabsenmonthoffPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_modalnootoday_modalnootoday__["a" /* ModalnootodayPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_modalnoomonth_modalnoomonth__["a" /* ModalnoomonthPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_modalnooweek_modalnooweek__["a" /* ModalnooweekPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_modalpomonth_modalpomonth__["a" /* ModalpomonthPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_modalpoweek_modalpoweek__["a" /* ModalpoweekPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_modalpotoday_modalpotoday__["a" /* ModalpotodayPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_modalsalestoday_modalsalestoday__["a" /* ModalsalestodayPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_modalsalesweek_modalsalesweek__["a" /* ModalsalesweekPage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_modalsalesmonth_modalsalesmonth__["a" /* ModalsalesmonthPage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_modalcollecttoday_modalcollecttoday__["a" /* ModalcollecttodayPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_modalcollectweek_modalcollectweek__["a" /* ModalcollectweekPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_modalcollectmonth_modalcollectmonth__["a" /* ModalcollectmonthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_37_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* TracesAdmin */], {}, {
                    links: [
                        { loadChildren: '../pages/detailoutlet/detailoutlet.module#DetailoutletPageModule', name: 'DetailoutletPage', segment: 'detailoutlet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#LoginPageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapoutlet/mapoutlet.module#MapoutletPageModule', name: 'MapoutletPage', segment: 'mapoutlet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalabsenmonthoff/modalabsenmonthoff.module#ModalabsenmonthoffPageModule', name: 'ModalabsenmonthoffPage', segment: 'modalabsenmonthoff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalabsenmonthon/modalabsenmonthon.module#ModalabsenmonthonPageModule', name: 'ModalabsenmonthonPage', segment: 'modalabsenmonthon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalabsentodayoff/modalabsentodayoff.module#ModalabsentodayoffPageModule', name: 'ModalabsentodayoffPage', segment: 'modalabsentodayoff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalabsentodayon/modalabsentodayon.module#ModalabsentodayonPageModule', name: 'ModalabsentodayonPage', segment: 'modalabsentodayon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalabsenweekon/modalabsenweekon.module#ModalabsenweekonPageModule', name: 'ModalabsenweekonPage', segment: 'modalabsenweekon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalabsenweekoff/modalabsenweekoff.module#ModalabsenweekoffPageModule', name: 'ModalabsenweekoffPage', segment: 'modalabsenweekoff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalcollectmonth/modalcollectmonth.module#ModalcollectmonthPageModule', name: 'ModalcollectmonthPage', segment: 'modalcollectmonth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalcollecttoday/modalcollecttoday.module#ModalcollecttodayPageModule', name: 'ModalcollecttodayPage', segment: 'modalcollecttoday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalcollectweek/modalcollectweek.module#ModalcollectweekPageModule', name: 'ModalcollectweekPage', segment: 'modalcollectweek', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalcumulative/modalcumulative.module#ModalcumulativePageModule', name: 'ModalcumulativePage', segment: 'modalcumulative', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalnoomonth/modalnoomonth.module#ModalnoomonthPageModule', name: 'ModalnoomonthPage', segment: 'modalnoomonth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalnootoday/modalnootoday.module#ModalnootodayPageModule', name: 'ModalnootodayPage', segment: 'modalnootoday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalpomonth/modalpomonth.module#ModalpomonthPageModule', name: 'ModalpomonthPage', segment: 'modalpomonth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalnooweek/modalnooweek.module#ModalnooweekPageModule', name: 'ModalnooweekPage', segment: 'modalnooweek', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalpotoday/modalpotoday.module#ModalpotodayPageModule', name: 'ModalpotodayPage', segment: 'modalpotoday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalpoweek/modalpoweek.module#ModalpoweekPageModule', name: 'ModalpoweekPage', segment: 'modalpoweek', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalsalestoday/modalsalestoday.module#ModalsalestodayPageModule', name: 'ModalsalestodayPage', segment: 'modalsalestoday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalsalesmonth/modalsalesmonth.module#ModalsalesmonthPageModule', name: 'ModalsalesmonthPage', segment: 'modalsalesmonth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalsalesweek/modalsalesweek.module#ModalsalesweekPageModule', name: 'ModalsalesweekPage', segment: 'modalsalesweek', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/outlet/outlet.module#OutletPageModule', name: 'OutletPage', segment: 'outlet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visitasi/visitasi.module#VisitasiPageModule', name: 'VisitasiPage', segment: 'visitasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracking/tracking.module#TrackingPageModule', name: 'TrackingPage', segment: 'tracking', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* TracesAdmin */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_outlet_outlet__["a" /* OutletPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_visitasi_visitasi__["a" /* VisitasiPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_modalcumulative_modalcumulative__["a" /* ModalcumulativePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_detailoutlet_detailoutlet__["a" /* DetailoutletPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_mapoutlet_mapoutlet__["a" /* MapoutletPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_modalabsentodayon_modalabsentodayon__["a" /* ModalabsentodayonPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_modalabsentodayoff_modalabsentodayoff__["a" /* ModalabsentodayoffPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_modalabsenweekoff_modalabsenweekoff__["a" /* ModalabsenweekoffPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_modalabsenweekon_modalabsenweekon__["a" /* ModalabsenweekonPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_modalabsenmonthon_modalabsenmonthon__["a" /* ModalabsenmonthonPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_modalabsenmonthoff_modalabsenmonthoff__["a" /* ModalabsenmonthoffPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_modalnootoday_modalnootoday__["a" /* ModalnootodayPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_modalnoomonth_modalnoomonth__["a" /* ModalnoomonthPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_modalnooweek_modalnooweek__["a" /* ModalnooweekPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_modalpomonth_modalpomonth__["a" /* ModalpomonthPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_modalpoweek_modalpoweek__["a" /* ModalpoweekPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_modalpotoday_modalpotoday__["a" /* ModalpotodayPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_modalsalestoday_modalsalestoday__["a" /* ModalsalestodayPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_modalsalesweek_modalsalesweek__["a" /* ModalsalesweekPage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_modalsalesmonth_modalsalesmonth__["a" /* ModalsalesmonthPage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_modalcollecttoday_modalcollecttoday__["a" /* ModalcollecttodayPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_modalcollectweek_modalcollectweek__["a" /* ModalcollectweekPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_modalcollectmonth_modalcollectmonth__["a" /* ModalcollectmonthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_topscore__["a" /* TopScore */], __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_statusabsensi__["a" /* StatusAbsensi */], __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_statusabsensiweek__["a" /* StatusAbsensiWeek */], __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_statusabsensiweekoff__["a" /* StatusAbsensiWeekOff */], __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_statusabsensimonth__["a" /* StatusAbsensiMonth */], __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_statusabsensimonthoff__["a" /* StatusAbsensiMonthOff */],
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_nootoday__["a" /* StatusNOOToday */], __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_nooweek__["a" /* StatusNOOWeek */], __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_noomonth__["a" /* StatusNOOMonth */], __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_poperformancetoday__["a" /* StatusPOToday */], __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_poperformanceweek__["a" /* StatusPOWeek */], __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_poperformancemonth__["a" /* StatusPOMonth */], __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_salesperformancetoday__["a" /* StatusSalesPToday */], __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_salesperformanceweek__["a" /* StatusSalesPWeek */], __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_salesperformancemonth__["a" /* StatusSalesPMonth */],
                __WEBPACK_IMPORTED_MODULE_28__providers_auth_service_collecttoday__["a" /* StatusCollectToday */], __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_collectweek__["a" /* StatusCollectWeek */], __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_collectmonth__["a" /* StatusCollectMonth */], __WEBPACK_IMPORTED_MODULE_31__providers_auth_service_visitasitoday__["a" /* StatusVisitasiToday */], __WEBPACK_IMPORTED_MODULE_30__providers_auth_service_visitasiweek__["a" /* StatusVisitasiWeek */], __WEBPACK_IMPORTED_MODULE_29__providers_auth_service_visitasimonth__["a" /* StatusVisitasiMonth */],
                __WEBPACK_IMPORTED_MODULE_34__providers_auth_service_timeinawal__["a" /* StatusTimeINAwal */], __WEBPACK_IMPORTED_MODULE_33__providers_auth_service_timeinakhir__["a" /* StatusTimeINAkhir */], __WEBPACK_IMPORTED_MODULE_32__providers_auth_service_timeoutawal__["a" /* StatusTimeOutAwal */], __WEBPACK_IMPORTED_MODULE_35__providers_auth_service_timeoutakhir__["a" /* StatusTimeOutAkhir */], __WEBPACK_IMPORTED_MODULE_36__providers_auth_service_topscorecumulative__["a" /* CumulativeTopScore */], __WEBPACK_IMPORTED_MODULE_39__providers_outlet_outlet__["a" /* StatusOutlet */], __WEBPACK_IMPORTED_MODULE_40__providers_outlet_comborsm__["a" /* ComboRSM */], __WEBPACK_IMPORTED_MODULE_41__providers_outlet_combojenis__["a" /* ComboJenis */],
                __WEBPACK_IMPORTED_MODULE_46__providers_auth_service_detailoutletnya__["a" /* DetailOutlet */], __WEBPACK_IMPORTED_MODULE_51__providers_trackings_trackings__["a" /* BukaDataTracking */], __WEBPACK_IMPORTED_MODULE_50__providers_trackings_combosales__["a" /* ComboSales */], __WEBPACK_IMPORTED_MODULE_49__providers_trackings_dataoutletcabang__["a" /* BukaDataOutletCabang */], __WEBPACK_IMPORTED_MODULE_48__providers_trackings_trackingisi__["a" /* BukaDataTrackingIsi */], __WEBPACK_IMPORTED_MODULE_52__providers_visitasis_visitasis__["a" /* StatusVisitasi */], __WEBPACK_IMPORTED_MODULE_53__providers_modals_modals__["a" /* ModalsLeaderboard */],
                __WEBPACK_IMPORTED_MODULE_54__providers_modals_absentodayon__["a" /* ModalsAbsenTodayOn */], __WEBPACK_IMPORTED_MODULE_57__providers_modals_absentodayoff__["a" /* ModalsAbsenTodayOff */], __WEBPACK_IMPORTED_MODULE_61__providers_modals_absenweekoff__["a" /* ModalsAbsenWeekOff */], __WEBPACK_IMPORTED_MODULE_60__providers_modals_absenweekon__["a" /* ModalsAbsenWeekOn */], __WEBPACK_IMPORTED_MODULE_65__providers_modals_absenmonthoff__["a" /* ModalsAbsenMonthOff */], __WEBPACK_IMPORTED_MODULE_64__providers_modals_absenmonthon__["a" /* ModalsAbsenMonthOn */],
                __WEBPACK_IMPORTED_MODULE_69__providers_modals_nootoday__["a" /* ModalsNooToday */], __WEBPACK_IMPORTED_MODULE_68__providers_modals_nooweek__["a" /* ModalsNooWeek */], __WEBPACK_IMPORTED_MODULE_67__providers_modals_noomonth__["a" /* ModalsNooMonth */], __WEBPACK_IMPORTED_MODULE_73__providers_modals_pomonth__["a" /* ModalsPoMonth */], __WEBPACK_IMPORTED_MODULE_72__providers_modals_poweek__["a" /* ModalsPoWeek */], __WEBPACK_IMPORTED_MODULE_74__providers_modals_potoday__["a" /* ModalsPoToday */],
                __WEBPACK_IMPORTED_MODULE_80__providers_modals_salesmonth__["a" /* ModalsSalesMonth */], __WEBPACK_IMPORTED_MODULE_79__providers_modals_salesweek__["a" /* ModalsSalesWeek */], __WEBPACK_IMPORTED_MODULE_78__providers_modals_salestoday__["a" /* ModalsSalesToday */],
                __WEBPACK_IMPORTED_MODULE_83__providers_modals_collectmonth__["a" /* ModalsCollectMonth */], __WEBPACK_IMPORTED_MODULE_82__providers_modals_collectweek__["a" /* ModalsCollectWeek */], __WEBPACK_IMPORTED_MODULE_81__providers_modals_collecttoday__["a" /* ModalsCollectToday */], __WEBPACK_IMPORTED_MODULE_90__providers_auth_service_alldashboard__["a" /* DataAllDashboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracesAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_outlet_outlet__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_visitasi_visitasi__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tracking_tracking__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TracesAdmin = (function () {
    function TracesAdmin(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'icon-android-home' }, { title: 'Outlet', component: __WEBPACK_IMPORTED_MODULE_6__pages_outlet_outlet__["a" /* OutletPage */], icon: 'icon-android-list' },
            { title: 'Visitasi', component: __WEBPACK_IMPORTED_MODULE_7__pages_visitasi_visitasi__["a" /* VisitasiPage */], icon: 'icon-android-locate' }, { title: 'Tracking', component: __WEBPACK_IMPORTED_MODULE_8__pages_tracking_tracking__["a" /* TrackingPage */], icon: 'icon-ios-paperplane' }
        ];
    }
    Object.defineProperty(TracesAdmin, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]], [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]]];
        },
        enumerable: true,
        configurable: true
    });
    TracesAdmin.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    TracesAdmin.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], TracesAdmin.prototype, "nav", void 0);
    TracesAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\TracesAdmin2\web1\src\app\app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav id="nav" [root]="rootPage" #content  swipeBackEnabled="false"  ></ion-nav>\n\n<ion-menu [content]="content" persistent="true" type="overlay" >\n  <ion-header  >\n\n      <ion-toolbar  text-center >\n\n        <img style="width:130px;height:50px;" src="assets/imgs/logotc.png"  />\n\n      </ion-toolbar>\n\n\n  </ion-header>\n\n  <ion-content class="dark">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class=“position_and_color” detail-none >\n        <ion-icon class={{p.icon}} ></ion-icon>&nbsp;{{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n'/*ion-inline-end:"F:\TracesAdmin2\web1\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], TracesAdmin);
    return TracesAdmin;
}());

//# sourceMappingURL=app.component.js.map

/***/ })
]),[284]);
//# sourceMappingURL=main.js.map