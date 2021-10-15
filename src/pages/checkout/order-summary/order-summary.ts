import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutService } from '../../../providers/service/checkout-service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { ProductsListPage } from '../../products-list/products-list';

@Component({
    templateUrl: 'order-summary.html'
})
export class OrderSummary {
    orderSummary: any;
    status: any;
    payment: any;
    id: any;
    constructor(public nav: NavController, public service: CheckoutService, public params: NavParams, public functions: Functions, public values: Values) {
        this.id = params.data;
    }
    ionViewDidLoad(){
        this.service.getOrderSummary(this.id).then((results:any) => {
          if(results.order.payment_details.paid == true){
            results.order.booking_id.map(booking => {
              this.service.changestate({
                "order":booking,
                "state":"pagado",
                "client":true
              })
            })
          }

          this.orderSummary = results
        });

        this.service.completeService(this.id).then((results:any) => {
          if(results.message === "success"){
            console.log("orden complete");
          }
        });
    }
    Continue() {
        this.values.count = 0;
        this.nav.setRoot(ProductsListPage);
    }
}
