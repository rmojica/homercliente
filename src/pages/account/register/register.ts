import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { OneSignal } from '@ionic-native/onesignal';
import { TabsPage } from '../../tabs/tabs';

@Component({
    templateUrl: 'register.html'
})
export class AccountRegister {
    errorpass:any;
    registerData: any;
    loadRegister: any;
    countries: any;
    status: any;
    public disableSubmit: boolean = false;
    errors: any;
    loginStatus: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    Register: any;
    constructor(public nav: NavController, public service: Service, public functions: Functions, private oneSignal: OneSignal, public values: Values, public platform: Platform) {
        this.Register = "Register";
        this.registerData = {};
        this.errorpass = [];
        this.countries = {};
        this.registerData.billing_address = {};
        this.registerData.shipping_address = {};
        this.service.getNonce()
            .then((results) => this.handleResults(results));
    }
    handleResults(results) {
        this.countries = results;
    }
    gohome(){
      this.nav.parent.select(0);
    }
    getBillingRegion(countryId) {
        this.billing_states = this.countries.state[countryId];
    }
    getShippingRegion(countryId) {
        this.shipping_states = this.countries.state[countryId];
    }
    validateForm() {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false
        }

        if ( this.registerData.password.length <= 9 ) {
            this.functions.showAlert("ERROR", "La contraseña debe tener más de 9 caracteres");
            return false
        }
        // if (!this.registerData.password.match('/[0-9]/')) {
        //     this.functions.showAlert("ERROR", "El password debe contener al menos 1 valor numérico");
        //     return false
        // }
        // if (!this.registerData.password.match('/[a-z]/')) {
        //     this.functions.showAlert("ERROR", "La contraseña debe tener al menos 1 carácter en minúscula");
        //     return false
        // }
        // if (!this.registerData.password.match('/[A-Z]/')) {
        //     this.functions.showAlert("ERROR", "La contraseña debe tener al menos 1 carácter en mayúscula");
        //     return false
        // }

        this.registerData.username = this.registerData.email;
        this.registerData.billing_address.email = this.registerData.email;
        this.registerData.billing_address.first_name = this.registerData.first_name;
        this.registerData.billing_address.last_name = this.registerData.last_name;
        this.registerData.shipping_address.first_name = this.registerData.first_name;
        this.registerData.shipping_address.last_name = this.registerData.last_name;
        this.registerData.shipping_address.company = this.registerData.billing_address.company;
        this.registerData.shipping_address.address_1 = this.registerData.billing_address.address_1;
        this.registerData.shipping_address.address_2 = this.registerData.billing_address.address_2;
        this.registerData.shipping_address.city = this.registerData.billing_address.city;
        this.registerData.shipping_address.state = this.registerData.billing_address.state;
        this.registerData.shipping_address.postcode = this.registerData.billing_address.postcode;
        this.registerData.shipping_address.country = this.registerData.billing_address.country;
        return true;
    }

    registerCustomer() {
        this.errors = "";
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.service.registerCustomer(this.registerData)
                .then((results) => this.handleRegister(results));
        }
    }
    handleRegister(results) {
        console.log('result', results);

        console.log('error ',results.errors);
        this.disableSubmit = false;
        if (!results.errors) {
            this.countries.checkout_login;
            this.service.login(this.registerData)
                .then((results) => this.loginStatus = results);
            if(this.platform.is('cordova')){
                this.oneSignal.getIds().then((data: any) => {
                    this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({email: this.registerData.email, pincode: this.registerData.billing_address.postcode, city: this.registerData.billing_address.city });
            }
            this.functions.showAlert('Verificación', 'Tu cuenta ha sido creada! Porfavor revisa tu email')
            this.nav.setRoot(TabsPage);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    }
}
