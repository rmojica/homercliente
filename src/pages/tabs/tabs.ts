import { Component, ViewChild } from '@angular/core';
import { Home } from "../home/home";
import { AccountLogin } from '../account/login/login';
import { ProductsListPage } from "../products-list/products-list";
import { WishlistPage } from '../../pages/account/wishlist/wishlist';
import { CartPage } from "../cart/cart";
import { Values } from '../../providers/service/values';
import { AccountPage } from '../../pages/account/account/account';
import { NavController, NavParams, PopoverController, ModalController, Tabs, Tab } from 'ionic-angular'
import {App} from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
}
)

export class TabsPage{
  @ViewChild('myTabs') tabRef: Tabs;

  AccountLogin = AccountLogin
  Home= Home;
  productListPage= ProductsListPage;
  WishlistPage= WishlistPage;
  CartPage= CartPage;
  Values= Values;
  AccountPage= AccountPage;


  constructor(
    public nav: NavController,
    public values: Values,
    public modalCtrl: ModalController,
    private app: App,
  ) {
    // this.app.getRootNav().setRoot(ProductsListPage);
  }

}
