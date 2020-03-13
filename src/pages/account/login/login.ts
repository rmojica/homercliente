import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { Home } from '../../home/home';
import { AccountForgotten } from '../forgotten/forgotten';
import { OneSignal } from '@ionic-native/onesignal';

import { TabsPage } from '../../tabs/tabs';

@Component({
    templateUrl: 'login.html'
})
export class AccountLogin {
    loginData: any;
    loadLogin: any;
    status: any;
    error: any;
    nonce: any;
    public disableSubmit: boolean = false;
    buttonText: any;
    constructor(public nav: NavController, public service: Service, public functions: Functions, public values: Values, public platform: Platform, private oneSignal: OneSignal) {
        this.loginData = {};
        this.buttonText = "Login";
        this.service.getNonce()
            .then((results) => this.nonce = results);
    }
    login() {
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = "Logging In...";
            this.service.login(this.loginData)
                .then((results) => this.handleResults(results));
        }
    }
    validateForm() {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false
        }
        else {
            return true
        }
    }
    handleResults(results) {
        this.disableSubmit = false;
        this.buttonText = "Login";
        if (!results.errors) {
            if (this.platform.is('cordova'))
            this.oneSignal.getIds().then((data: any) => {
                this.service.subscribeNotification(data);
            });
            this.nav.setRoot(TabsPage);
        }
        else if (results.errors) {
            alert(results.errors);
            this.functions.showAlert('error', 'invalid username/password');
        }
    }
    forgotten(loginData) {
        this.nav.push(AccountForgotten);
    }
}