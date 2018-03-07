import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModalsLeaderboard} from "../../providers/modals/modals";

/**
 * Generated class for the ModalcumulativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalcumulative',
  templateUrl: 'modalcumulative.html',
})
export class ModalcumulativePage {

  dataDetailLeaderBoard1:any;
  resposeDetailLeaderBoard:any;
  leaderData= {"cabangid":""};

  constructor(
    public modalLeaderBoard: ModalsLeaderboard,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalcumulativePage');
    this.loaddata();
  }

  loaddata(){
      this.sendata();

  }

  sendata(){
    const dataUser = JSON.parse(localStorage.getItem('userDatanya'));
    this.leaderData.cabangid = dataUser[0]['Cabang_ID'];


    this.modalLeaderBoard.postData(this.leaderData).then((result) =>{
      this.resposeDetailLeaderBoard = result;

      const dataDetailLeaderBoard = JSON.parse(JSON.stringify(this.resposeDetailLeaderBoard));
      console.log(dataDetailLeaderBoard);
      this.dataDetailLeaderBoard1 =  dataDetailLeaderBoard;

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
