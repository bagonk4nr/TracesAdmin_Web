import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
 * Generated class for the MapoutletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let google;

@IonicPage()
@Component({
  selector: 'page-mapoutlet',
  templateUrl: 'mapoutlet.html',
})
export class MapoutletPage {
  map: GoogleMap;
  mapData = {"latitude":"", "longitude":"", "icon":""};
  latitude:any;
  longitude:any;

  constructor(  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapoutletPage');
    this.showMapsNya();
  }

  showMapsNya(){
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

    let latLng = new google.maps.LatLng(this.mapData.latitude, this.mapData.longitude);
    let iconnya = {
      url: "https://taysbakers.com/traceimages/outlettbsnoapp.png"
    };
    let mapOptions = {
      icon: iconnya,
      center: latLng,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    let marker1 = new google.maps.Marker({
      icon: iconnya,
      position: latLng,
      map: this.map
    });
    marker1.setMap(this.map);


  }

  closeModal() {
    this.navCtrl.pop();
  }

}
