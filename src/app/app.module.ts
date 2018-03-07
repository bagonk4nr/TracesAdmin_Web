import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { TracesAdmin } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {AuthService} from "../providers/auth-service/auth-service";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {TopScore} from "../providers/auth-service/topscore";
import {StatusAbsensi} from "../providers/auth-service/statusabsensi";
import {StatusAbsensiWeek} from "../providers/auth-service/statusabsensiweek";
import {StatusAbsensiWeekOff} from "../providers/auth-service/statusabsensiweekoff";
import {StatusAbsensiMonth} from "../providers/auth-service/statusabsensimonth";
import {StatusAbsensiMonthOff} from "../providers/auth-service/statusabsensimonthoff";
import {StatusNOOWeek} from "../providers/auth-service/nooweek";
import {StatusNOOMonth} from "../providers/auth-service/noomonth";
import {StatusNOOToday} from "../providers/auth-service/nootoday";
import {StatusPOMonth} from "../providers/auth-service/poperformancemonth";
import {StatusPOWeek} from "../providers/auth-service/poperformanceweek";
import {StatusPOToday} from "../providers/auth-service/poperformancetoday";
import {StatusSalesPToday} from "../providers/auth-service/salesperformancetoday";
import {StatusSalesPWeek} from "../providers/auth-service/salesperformanceweek";
import {StatusSalesPMonth} from "../providers/auth-service/salesperformancemonth";
import {StatusCollectMonth} from "../providers/auth-service/collectmonth";
import {StatusCollectWeek} from "../providers/auth-service/collectweek";
import {StatusCollectToday} from "../providers/auth-service/collecttoday";
import {StatusVisitasiMonth} from "../providers/auth-service/visitasimonth";
import {StatusVisitasiWeek} from "../providers/auth-service/visitasiweek";
import {StatusVisitasiToday} from "../providers/auth-service/visitasitoday";
import {StatusTimeOutAwal} from "../providers/auth-service/timeoutawal";
import {StatusTimeINAkhir} from "../providers/auth-service/timeinakhir";
import {StatusTimeINAwal} from "../providers/auth-service/timeinawal";
import {StatusTimeOutAkhir} from "../providers/auth-service/timeoutakhir";
import {CumulativeTopScore} from "../providers/auth-service/topscorecumulative";
import { DataTablesModule } from 'angular-datatables';
import {OutletPage} from "../pages/outlet/outlet";
import {StatusOutlet} from "../providers/outlet/outlet";
import {ComboRSM} from "../providers/outlet/comborsm";
import {ComboJenis} from "../providers/outlet/combojenis";
import {TrackingPage} from "../pages/tracking/tracking";
import {VisitasiPage} from "../pages/visitasi/visitasi";
import { ModalcumulativePage } from '../pages/modalcumulative/modalcumulative';
import { DetailoutletPage } from '../pages/detailoutlet/detailoutlet';
import {DetailOutlet} from "../providers/auth-service/detailoutletnya";
import {MapoutletPage} from '../pages/mapoutlet/mapoutlet';
import {BukaDataTrackingIsi} from '../providers/trackings/trackingisi';
import {BukaDataOutletCabang} from "../providers/trackings/dataoutletcabang";
import {ComboSales} from "../providers/trackings/combosales";
import {BukaDataTracking} from "../providers/trackings/trackings";
import { StatusVisitasi } from '../providers/visitasis/visitasis';
import { ModalsLeaderboard } from '../providers/modals/modals';
import {ModalsAbsenTodayOn} from "../providers/modals/absentodayon";
import {ModalabsentodayonPage} from "../pages/modalabsentodayon/modalabsentodayon";
import {ModalabsentodayoffPage} from "../pages/modalabsentodayoff/modalabsentodayoff";
import {ModalsAbsenTodayOff} from "../providers/modals/absentodayoff";
import {ModalabsenweekonPage} from "../pages/modalabsenweekon/modalabsenweekon";
import {ModalabsenweekoffPage} from "../pages/modalabsenweekoff/modalabsenweekoff";
import {ModalsAbsenWeekOn} from "../providers/modals/absenweekon";
import {ModalsAbsenWeekOff} from "../providers/modals/absenweekoff";
import {ModalabsenmonthonPage} from "../pages/modalabsenmonthon/modalabsenmonthon";
import {ModalabsenmonthoffPage} from "../pages/modalabsenmonthoff/modalabsenmonthoff";
import {ModalsAbsenMonthOn} from "../providers/modals/absenmonthon";
import {ModalsAbsenMonthOff} from "../providers/modals/absenmonthoff";
import {ModalnootodayPage} from "../pages/modalnootoday/modalnootoday";
import {ModalsNooMonth} from "../providers/modals/noomonth";
import {ModalsNooWeek} from "../providers/modals/nooweek";
import {ModalsNooToday} from "../providers/modals/nootoday";
import {ModalnoomonthPage} from "../pages/modalnoomonth/modalnoomonth";
import {ModalnooweekPage} from "../pages/modalnooweek/modalnooweek";
import {ModalsPoWeek} from "../providers/modals/poweek";
import {ModalsPoMonth} from "../providers/modals/pomonth";
import {ModalsPoToday} from "../providers/modals/potoday";
import {ModalpomonthPage} from "../pages/modalpomonth/modalpomonth";
import {ModalpoweekPage} from "../pages/modalpoweek/modalpoweek";
import {ModalpotodayPage} from "../pages/modalpotoday/modalpotoday";
import {ModalsSalesToday} from "../providers/modals/salestoday";
import {ModalsSalesWeek} from "../providers/modals/salesweek";
import {ModalsSalesMonth} from "../providers/modals/salesmonth";
import {ModalsCollectToday} from "../providers/modals/collecttoday";
import {ModalsCollectWeek} from "../providers/modals/collectweek";
import {ModalsCollectMonth} from "../providers/modals/collectmonth";
import {ModalsalestodayPage} from "../pages/modalsalestoday/modalsalestoday";
import {ModalsalesmonthPage} from "../pages/modalsalesmonth/modalsalesmonth";
import {ModalsalesweekPage} from "../pages/modalsalesweek/modalsalesweek";
import {ModalcollecttodayPage} from "../pages/modalcollecttoday/modalcollecttoday";
import {ModalcollectweekPage} from "../pages/modalcollectweek/modalcollectweek";
import {ModalcollectmonthPage} from "../pages/modalcollectmonth/modalcollectmonth";
import {DataAllDashboard} from "../providers/auth-service/alldashboard";

@NgModule({
  declarations: [
    TracesAdmin,
    LoginPage,
    HomePage,
    OutletPage,
    VisitasiPage,
    TrackingPage,
    ModalcumulativePage,
    DetailoutletPage,
    MapoutletPage,
    TrackingPage,
    ModalabsentodayonPage,
    ModalabsentodayoffPage,
    ModalabsenweekoffPage,
    ModalabsenweekonPage,
    ModalabsenmonthonPage,
    ModalabsenmonthoffPage,
    ModalnootodayPage,
    ModalnoomonthPage,
    ModalnooweekPage,
    ModalpomonthPage,
    ModalpoweekPage,
    ModalpotodayPage,
    ModalsalestodayPage,
    ModalsalesweekPage,
    ModalsalesmonthPage,
    ModalcollecttodayPage,
    ModalcollectweekPage,
    ModalcollectmonthPage
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, DataTablesModule,
    IonicModule.forRoot(TracesAdmin),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TracesAdmin,
    LoginPage,
    HomePage,
    OutletPage,
    VisitasiPage,
    TrackingPage,
    ModalcumulativePage,
    DetailoutletPage,
    MapoutletPage,
    TrackingPage,
    ModalabsentodayonPage,
    ModalabsentodayoffPage,
    ModalabsenweekoffPage,
    ModalabsenweekonPage,
    ModalabsenmonthonPage,
    ModalabsenmonthoffPage,
    ModalnootodayPage,
    ModalnoomonthPage,
    ModalnooweekPage,
    ModalpomonthPage,
    ModalpoweekPage,
    ModalpotodayPage,
    ModalsalestodayPage,
    ModalsalesweekPage,
    ModalsalesmonthPage,
    ModalcollecttodayPage,
    ModalcollectweekPage,
    ModalcollectmonthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService, TopScore, StatusAbsensi, StatusAbsensiWeek, StatusAbsensiWeekOff, StatusAbsensiMonth, StatusAbsensiMonthOff,
    StatusNOOToday, StatusNOOWeek, StatusNOOMonth, StatusPOToday, StatusPOWeek, StatusPOMonth, StatusSalesPToday, StatusSalesPWeek, StatusSalesPMonth,
    StatusCollectToday, StatusCollectWeek, StatusCollectMonth, StatusVisitasiToday, StatusVisitasiWeek, StatusVisitasiMonth,
    StatusTimeINAwal, StatusTimeINAkhir, StatusTimeOutAwal, StatusTimeOutAkhir, CumulativeTopScore, StatusOutlet, ComboRSM, ComboJenis,
    DetailOutlet, BukaDataTracking, ComboSales, BukaDataOutletCabang, BukaDataTrackingIsi,StatusVisitasi, ModalsLeaderboard,
    ModalsAbsenTodayOn,ModalsAbsenTodayOff,ModalsAbsenWeekOff,ModalsAbsenWeekOn,ModalsAbsenMonthOff,ModalsAbsenMonthOn,
    ModalsNooToday,ModalsNooWeek,ModalsNooMonth,ModalsPoMonth,ModalsPoWeek,ModalsPoToday,
    ModalsSalesMonth, ModalsSalesWeek, ModalsSalesToday,
    ModalsCollectMonth, ModalsCollectWeek, ModalsCollectToday,DataAllDashboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},




  ]
})
export class AppModule {}
