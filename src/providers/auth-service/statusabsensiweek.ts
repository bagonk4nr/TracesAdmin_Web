import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {enableProdMode} from '@angular/core';


new HttpClientModule();
new HttpModule();
enableProdMode();

let apiUrl1 = 'https://taysbakers.com/ionic/dashboardstatusabsensiweek.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StatusAbsensiWeek {


  constructor(public http: Http, public httpclient:HttpClient) {
    console.log('Hello AuthService Provider');
  }


    postData(credentials){

      return new Promise((resolve, reject) =>{
        let headers = new Headers();

        this.http.post(apiUrl1, JSON.stringify(credentials), {headers: headers})
          .subscribe(data =>{
            resolve(data.json());
          }, (err) =>{
            reject(err);
          });

      });

    }



  }
