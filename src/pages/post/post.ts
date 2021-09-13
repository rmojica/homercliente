import { Component, ViewChild } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Values } from '../../providers/service/values';
import { Service } from '../../providers/service/service';
import {ProductsListPage} from '../products-list/products-list'
@Component({
  templateUrl: 'post.html'
})
export class Post {
  post: any;
  id: any;
  title: any;
  back:any = "Atras";
  constructor (public service: Service, public values: Values, params: NavParams, public navCtrl: NavController) {
    this.id = params.data.id;
    this.title = params.data.title;
    this.service.getPage(this.id)
       .then((results) => this.post = results);
 }
 goHome(){
  this.navCtrl.pop();
 }
}
