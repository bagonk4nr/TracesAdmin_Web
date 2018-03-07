import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import { HomePage } from '../pages/home/home';
import {OutletPage} from "../pages/outlet/outlet";
import {VisitasiPage} from "../pages/visitasi/visitasi";
import {TrackingPage} from "../pages/tracking/tracking";

@Component({
  templateUrl: 'app.html',

})
export class TracesAdmin {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;


  pages: Array<{title: string, component: any, icon: any}>;

  static get parameters() {
    return [ [Platform], [MenuController]];
  }

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.rootPage=  LoginPage;
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'icon-android-home' }, { title: 'Outlet', component: OutletPage, icon: 'icon-android-list' },
      { title: 'Visitasi', component: VisitasiPage, icon: 'icon-android-locate' }, { title: 'Tracking', component: TrackingPage, icon: 'icon-ios-paperplane' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.nav.setRoot(page.component);
  }
}
