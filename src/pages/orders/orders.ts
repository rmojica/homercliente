import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {Values} from '../../providers/service/values';
import {Socket}  from 'ngx-socket-io';
import { Service } from '../../providers/service/service';
import { ProductService } from '../../providers/service/product-service';
import { CartPage } from '../cart/cart';
import { Observable } from 'rxjs';
import { ChatPage } from '../chat/chat';
import {ModalPage} from '../modal/modal';
import { Functions } from '../../providers/service/functions';
import { ProductsListPage } from '../products-list/products-list';
import { LoadingController } from 'ionic-angular';

// import { OrdersDetailPage } from '../orders-detail/orders-detail';
/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  data:any;
  constructor(
    public functions: Functions,
      public nav: NavController,
      private socket: Socket,
      public navCtrl: NavController,
      public navParams: NavParams,
      public values:Values,
      public productService:ProductService,
      public modalCtrl:ModalController,
      public loadingCtrl: LoadingController
  )
  {
    this.data = [];
  }

  ionViewDidEnter() {
    const loader = this.loadingCtrl.create({
      content: "Por favor espera...",
    });
    loader.present();
    this.socket.connect();
    this.getData().subscribe((data:any) => {
      loader.dismiss();
      this.data = data
    });
  }

  ionViewWillLeave() {
      this.socket.disconnect();
  }

  ngOnInit() {


  }

  getCart() {
    this.presentLoading();
    this.nav.setRoot(CartPage);
  }

  // openOrdersDetail(){
  //   this.navCtrl.push(OrdersDetailPage,{data:this.data})
  // }

  getData(){
    let observable = new Observable(observer => {
        console.log("customerId", this.values.customerId)
        this.socket.emit('getordersbyclients',{ id:this.values.customerId});
        this.socket.fromEvent('getordersbyclients').subscribe((data:any) => {
          observer.next(data)
        });
    })
    return observable;
  }


  changestatecancel(order, onesignal)
  {
    const loader = this.loadingCtrl.create({
      content: "Por favor espera...",
    });
    loader.present();
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
    modal.onDidDismiss((data) => {
      loader.dismiss();
      if(data.result && data.message !=''){
        this.productService.changestate({
          "order":order,
          "state":"cancelado",
          "isCancel": data.message
        })

        this.productService.sendNotification({
          "title":"Servicio cancelado",
          "content":`El cliente ha cancelado el servicio, el motivo ${data.message}`,
          "onesignalid":onesignal
        })
        this.functions.showAlert("Éxito", `El servicio se ha cancelado correctamente, motivo ${data.message}`);
      }
    })
  }

  goHome(){
    this.navCtrl.pop();
  }

  openchat(order){
    this.navCtrl.push(ChatPage, {order:order})
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por favor espera...",
      duration: 3000
    });
    loader.present();
  }
}
