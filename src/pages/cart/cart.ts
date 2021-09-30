import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { CartService } from '../../providers/service/cart-service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { BillingAddressForm } from '../checkout/billing-address-form/billing-address-form';
import { Home } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';

@Component({
    templateUrl: 'cart.html'
})
export class CartPage {
    cart: any;
    status: any;
    obj: any;
    quantity: number;
    update: any;
    options: any;
    number: any;
    addProduct: boolean = true;
    coupon: any;
    a: any;
    disableSubmit: boolean = false;
    buttonCoupon: boolean = false;
    disableSubmitCoupon: boolean = false;
    chosen_shipping: any;
    shipping: any;
    Apply: any;
    Checkout: any;
    time_end:any;
    bookingid:any;
    access:boolean = true;
    constructor(public loadingCtrl: LoadingController,public nav: NavController, public service: CartService, public values: Values, public params: NavParams, public functions: Functions,  public alert:AlertController,) {
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
        this.bookingid=[];
        this.access = true;

    }
    gohomep(){
        this.nav.parent.select(0);
    }

    presentLoading() {
      const loader = this.loadingCtrl.create({
        content: "Por favor espera...",
        duration: 3000
      });
      loader.present();
    }

    ionViewDidEnter() {
        this.access = true;
        this.service.loadCart()
            .then((results:any) => this.handleCartInit(results));
      }

    handleCartInit(results:any) {
        console.log("get cart",results)
        console.log("get booking id",Object.keys(results.cart_contents));
        Object.keys(results.cart_contents).map(key => {
            this.bookingid.push(results.cart_contents[key].booking._booking_id);
        })
        // this.bookingid = results.cart_contents[Object.keys(results.cart_contents).toString()].booking._booking_id;
        // this.time_end = _time: "8:00"
        this.cart = results


        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    }
    handleCart(results) {
        this.cart = results;

    }
    delete(key, bookingid) {
        this.bookingid.map(booking => {
            this.service.verifyOrderIsAvailableForDelete(booking).then((result:any) => {
              if(result.code === 'success'){
                this.service.deleteItem(key)
                    .then((results) => this.handleCart(results));
              }{
                this.showAlert('Error', '<strong>Ups!:</strong> No puedes Eliminar esta Orden porque esta en proceso');
              }
            })
        })
    }
   async checkout() {
        this.presentLoading();        
        this.Checkout = "PleaseWait";         
        let result;
        console.log(this.bookingid)
        for(let i=0; i < this.bookingid; i++){  
            console.log(this.bookingid[i])              
            if(this.bookingid[i] != undefined){
                result = await  this.service.verifyOrderIsAvailableForPay(this.bookingid[i]);
                console.log(result.code)
                if(result.code == "success"){
                    this.access = true;
                }else if(result.code == "error"){
                    this.showAlert('Error', '<strong>Ups!:</strong> Por favor espere hasta que el Homer acepte el servicio.');
                    this.disableSubmit = false;
                    this.access = false;                                       
                }
            }
        }             
        if(this.access){
            this.service.checkout().then((results) => this.handleBilling(results));
        }     
    }
    handleBilling(results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(BillingAddressForm, results);
    }
    deleteFromCart(id, key) {
        if(Object.keys(this.cart.cart_contents).length == 1){
            if(this.cart.cart_contents[key].quantity == 1){
                this.cart.cart_contents = {};
                console.log(this.cart);
            };
        }
        this.service.deleteFromCart(id, key)
            .then((results) => this.handleCart(results));

    }
    addToCart(id, key) {
        this.service.addToCart(id, key)
            .then((results) => this.handleCart(results));
    }
    updateCart(results) {
        this.service.loadCart()
            .then((results) => this.handleCart(results));
    }
    handleAddToCart(results) {
        this.service.loadCart()
            .then((results) => this.handleCart(results));
    }
    submitCoupon() {
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon)
                .then((results) => this.handleCoupon(results));
        }
    }
    removeCoupon() {
        this.service.removeCoupon(this.cart.applied_coupons)
            .then((results) => this.handleCoupon(results));
    }
    handleCoupon(results) {
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart()
            .then((results) => this.handleCart(results));
    }
    handleResults(a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    }
    updateShipping(method) {
        this.chosen_shipping = method;
        this.service.updateShipping(method)
            .then((results) => this.handleShipping(results));
    }
    gohome(){
        // this.nav.parent.select(1);
        this.nav.setRoot(TabsPage);
    }
    handleShipping(results) {
        this.cart = results;
    }

    showAlert(title, text) {
      let alert = this.alert.create({
          title: title,
          subTitle: text,
          buttons: ['OK'],
      });
      alert.present();
    }

}
