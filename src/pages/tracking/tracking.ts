import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComboRSM} from "../../providers/outlet/comborsm";
import {ComboJenis} from "../../providers/outlet/combojenis";
import {ComboSales} from "../../providers/trackings/combosales";
import {BukaDataTracking} from "../../providers/trackings/trackings";
import {BukaDataTrackingIsi} from "../../providers/trackings/trackingisi";
import {BukaDataOutletCabang} from "../../providers/trackings/dataoutletcabang";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the TrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let google;
@IonicPage()
@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html',
})
export class TrackingPage {
  map1: GoogleMap;
  dateAwal:any;
  dateAkhir:any;
  resposeDataComboRSM: any;
  resposeDataComboSales:any;
  resposeDataComboJenis:any;
  dataComboRSM1: any;
  dataComboJenis1:any;
  dataComboSales1:any;
  myDate: any;
  myDate1: any;
  mySelect: any;
  mySelect1: any;
  mySelect2: any;
  sendDataFilterTracking = {"pakaiusrid":"", "usrid":"", "pakaitanggalloc":"", "tanggallocawal":"", "tanggallocakhir":"", "pakaigroup":"", "rsmkacab":"",  "pakaijenis":"", "jenis":"", "pakaicabangid":"", "cabangid":"", "pakaiidoutlet":"", "idoutlet":"", "pakainamaoutlet":"", "namaoutlet":""};
  sendDataFilterTrackingIsi = {"cabangid":"", "pakaiusrid":"", "usrid":"", "pakaitanggalloc":"", "tanggallocawal":"", "tanggallocakhir":"", "pakaigroup":"", "rsmkacab":"",  "pakaijenis":"", "jenis":"", "pakaicabangid":"", "pakaiidoutlet":"", "idoutlet":"", "pakainamaoutlet":"", "namaoutlet":""};
  sendDataFilterTrackingOutletCabang = {"usrid":"", "pakaijenis":"", "jenis":"", "pakaicabangid":"", "cabangid":"", "pakaiidoutlet":"", "idoutlet":"", "pakainamaoutlet":"", "namaoutlet":""};
  resposeDataTracking:any;
  resposeDataTrackingIsi:any;
  resposeDataTrackingOutletCabang:any;
  dataTrackings:any;
  dataTrackingsIsi:any;
  dataTrackingsOutletCabang:any;
  icons:any;
  iconbase:any;
  legend:any;
  infoWindow:any;
  simpaniduser: any;
  simpanlat :any;
  simpanlong:any;
  res :any;
  tracking :any;
  LatLngs :any;
  dateobj:any;
  day :any;
  iconnya:any;

  constructor(
    public bukaDataOutletCabang: BukaDataOutletCabang,
    public bukaDataTrackingIsi: BukaDataTrackingIsi, public bukaDataTracking: BukaDataTracking,
    public comboSales: ComboSales, public comboJenis: ComboJenis, public comboRSM: ComboRSM, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

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
  }

  loaddata(){
    this.filterOutlet();

  }

  loadawal(){
    this.myDate = new Date().toISOString();
    this.myDate1 = new Date().toISOString()
  }

  filterOutlet() {
    const dataUser = JSON.parse(localStorage.getItem('userDatanya'));
    this.sendDataFilterTrackingIsi.cabangid =  dataUser[0]['Cabang_ID'];
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

    let latLng = new google.maps.LatLng(-3,112);

    let mapOptions = {
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
      }};

    this.legend = document.getElementById("map1");
    for (let key in this.icons) {
      let type = this.icons[key];
      let name = type.name;
      let icon = type.icon;
      let div = document.createElement('div');
      div.innerHTML += '<img src="' + icon + '"> ' + name;
      this.legend.appendChild(div);
    }


    if(this.sendDataFilterTrackingIsi.cabangid === "33") {

      this.bukaDataTracking.postData(this.sendDataFilterTracking)
        .then((result) => {
          this.resposeDataTracking = result;

          const dataTracking = JSON.parse(JSON.stringify(this.resposeDataTracking));
          this.dataTrackings = dataTracking;
          console.log(dataTracking);
          for (let i = 0; i < this.dataTrackings.length; i++) {
            let obj = this.dataTrackings[i];
            this.LatLngs = new google.maps.LatLng(obj['Latitude'], obj['Longitude']);
            this.dateobj = new Date().toISOString();
           // this.day = this.dateobj.getDate();

            let str1 = "https://taysbakers.com/traceimages/";
            let str2 = "01" ;
            let str3 = "dot.png";
            let str4 = "dot";
            let str5 = "start.png";

            if (this.simpaniduser !== obj['Usr_ID_Sales']) {
              this.res = str1.concat(str4, str5);
            } else {
              this.res = str1.concat(str2, str3);
            }
            let marker1 = new google.maps.Marker({
              position: this.LatLngs,
              map: this.map1,
              icon: this.res
            });
            marker1.setMap(this.map1);
            google.maps.event.addListener(marker1, "click", function (e) {

              let images = 'locationsalesend.png';
              let icon = 'https://taysbakers.com/traceimages/' + images;

              let infoWindowContent = "<div id='content' align='center' style = 'width:260px;min-height:40px'><img src=" + icon + " /><div><b>" + obj['Nama_Lengkap'] + " </b></div><div >Date Location : " + obj['Tanggal_Location'] + "</div><div >battery Status  : " + obj['Status_Baterai'] + "%</div>";
              let infoWindow = new google.maps.InfoWindow({
                content: infoWindowContent
              });
              infoWindow.open(this.map1, marker1);
            });

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
        }, (err) => {
          //Connection failed message
          return console.log(err);
        });

    }else {

      this.bukaDataTrackingIsi.postData(this.sendDataFilterTrackingIsi)
        .then((result) => {
          this.resposeDataTrackingIsi = result;

          const dataTrackingIsi = JSON.parse(JSON.stringify(this.resposeDataTrackingIsi));
          this.dataTrackings = dataTrackingIsi;
          console.log(dataTrackingIsi);
          for (let i = 0; i < this.dataTrackings.length; i++) {
            let obj = this.dataTrackings[i];
            this.LatLngs = new google.maps.LatLng(obj['Latitude'], obj['Longitude']);
            this.dateobj = new Date().toISOString();
          //  this.day = this.dateobj.getDate();

            let str1 = "https://taysbakers.com/traceimages/";
            let str2 = "01" ;
            let str3 = "dot.png";
            let str4 = "dot";
            let str5 = "start.png";

            if (this.simpaniduser !== obj['Usr_ID_Sales']) {
              this.res = str1.concat(str4, str5);
            } else {
              this.res = str1.concat(str2, str3);
            }
            let marker1 = new google.maps.Marker({
              position: this.LatLngs,
              map: this.map1,
              icon: this.res
            });
            marker1.setMap(this.map1);
            google.maps.event.addListener(marker1, "click", function (e) {

              let images = 'locationsalesend.png';
              let icon = 'https://taysbakers.com/traceimages/' + images;

              let infoWindowContent = "<div id='content' align='center' style = 'width:260px;min-height:40px'><img src=" + icon + " /><div><b>" + obj['Nama_Lengkap'] + " </b></div><div >Date Location : " + obj['Tanggal_Location'] + "</div><div >battery Status  : " + obj['Status_Baterai'] + "%</div>";
              let infoWindow = new google.maps.InfoWindow({
                content: infoWindowContent
              });
              infoWindow.open(this.map1, marker1);
            })

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
        }, (err) => {
          //Connection failed message
          return console.log(err);
        });



    }



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
      this.resposeDataComboJenis = result;
      console.log(this.resposeDataComboJenis);
      const dataComboJenis = JSON.parse(JSON.stringify(this.resposeDataComboJenis));

      this.dataComboJenis1 =  dataComboJenis;

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
