import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Service } from '../../providers/service/service';
import { Values } from '../../providers/service/values';
import {NewCardPage} from '../new-card/new-card';
/**
 * Generated class for the VirtualCardAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-virtual-card-admin',
  templateUrl: 'virtual-card-admin.html',
})
export class VirtualCardAdminPage {
  customers: any;
  addresses: any;
  address: any;
  status: any;
  form: any;
  cards:any = [];
  cardSelected:string;
  imageCard:any = "assets/image/creditcard.png";
  constructor(public nav: NavController, public service: Service, public values: Values, public alertCtrl: AlertController) {
      this.service.getCustomer()
          .then((results) => this.customers = results);

      this.service.getAddress()
          .then((resultsAddresses) => this.addresses = resultsAddresses);
  }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("cardData"));
    if(data != null){
      this.cards = Object.keys(data).map(i => data[i]);
    }else{
      this.cards = null
    }

  }

  delete(){
    localStorage.removeItem('cardData')
    this.nav.setRoot(VirtualCardAdminPage);
  }

  gohome(){
    this.nav.parent.select(0);
  }

  newCard(){
    this.nav.push(NewCardPage)
  }

  activeAction(card:string){
    this.cardSelected = card;
    this.showConfirm()
  }

  checkAvatar() {
    return this.service.checkAvatar();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Mensaje de Homer',
      message: 'Puede eliminar o elegir una tarjeta predeterminada',
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            let newArray = this.cards.filter(card => card.creditCard != this.cardSelected);
            localStorage.removeItem('cardData')
            localStorage.setItem('cardData',JSON.stringify(newArray));
            this.nav.setRoot(VirtualCardAdminPage);
          }
        },
        {
          text: 'Elegir por defecto',
          handler: () => {
            let newArray = this.cards.map(card => {
              if(card.creditCard === this.cardSelected) {
                card.default = 1;
              }else{
                card.default = 0;
              }
              return card;
            });

            localStorage.removeItem('cardData')
            localStorage.setItem('cardData',JSON.stringify(newArray));
            this.nav.setRoot(VirtualCardAdminPage);
          }
        }
      ]
    });
    confirm.present();
  }

  async presentAlert(message) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
