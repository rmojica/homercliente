import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Values } from '../../providers/service/values';
import {Post} from '../../pages/post/post';
import { ProductsListPage } from '../products-list/products-list';


/**
 * Generated class for the PagesSupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pages-support',
  templateUrl: 'pages-support.html',
})
export class PagesSupportPage {

  constructor(public navCtrl: NavController, public values: Values, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesSupportPage');
  }

  post(id:any, title:any) {
    this.navCtrl.push(Post, {id,title});
  }
  contact() {
    let email = {
        to: this.values.settings.support_email,
        subject: '',
        body: '',
        isHtml: true
    };
    this.emailComposer.open(email);
  }

  goHome()
  {
    this.navCtrl.pop();
  }

}
