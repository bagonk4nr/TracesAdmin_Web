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
let apiUrl = 'https://taysbakers.com/ionic/dashboardtopscore.php';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TopScore {

  constructor(public http: Http, public httpclient:HttpClient) {
    console.log('Hello AuthService Provider');
  }

  postData(){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();

      this.http.post(apiUrl, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }

}