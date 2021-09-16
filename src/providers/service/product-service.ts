import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Config } from './config'
import { Values } from './values'
import { URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'
import { LoadingController } from 'ionic-angular'

@Injectable()
export class ProductService {
  header:any = new Headers();
  data: any
  product: any
  gallery: any
  status: any
  wishlist: any
  reviews: any
  reviewForm: any
  cart: any
  code: any
  loader: any
  schedule: any
  constructor(
    private http: Http,
    private config: Config,
    private values: Values,
    private loadingController: LoadingController,
  ) {}
  getProduct(id) {
    return new Promise(resolve => {
      this.http
        .get(
          this.config.setUrl(
            'GET',
            '/wp-json/wc-bookings/v1/products/' + id + '?',
            false,
          ),
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          this.product = data
          resolve(this.product)
        })
    })
  }
  getReviews(id) {
    return new Promise(resolve => {
      this.http
        .get(
          this.config.setUrl(
            'GET',
            '/wc-api/v3/products/' + id + '/reviews' + '?',
            false,
          ),
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          this.reviews = data
          resolve(this.reviews)
        })
    })
  }
  addToCart(resource_id, month, day, year, selected_time, product, etime, customerId) {
    return new Promise(resolve => {
      var params = new URLSearchParams()

      // params.append('wc_bookings_field_resource', resource_id)
      params.append('wc_bookings_field_start_date_day', day)
      params.append('wc_bookings_field_start_date_month', month)
      params.append('wc_bookings_field_start_date_year', year)
      params.append('start_time', selected_time)
      params.append('wc_bookings_field_start_date_time', selected_time)
      params.append('wc_bookings_field_start_date_local_timezone', '')
      params.append('end_time',etime)
      params.append('wc_bookings_field_duration',etime)
      params.append('variation_id', '')
      params.append('start_date', '')
      params.append('end_date', '')
      params.append('product_id', product.id)
      params.append('customer_Id', customerId)
      //params.append('_wpnonce', this.values.cartNonce)


      this.http
        .post(
          this.config.url +
            '/wp-admin/admin-ajax.php?action=mstoreapp-add_booking_to_cart',
            params,
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          console.log("retorna cart",data);
          console.log("retorna cart_nonce",data.cart_nonce);

          this.status = data
          this.values.cartNonce = data.cart_nonce
          this.values.updateCartTwo(this.status)
          resolve(this.status)
        })
    })
  }

  addToCartTest(resource_id, month, day, year, selected_time, product, etime, customerId) {
    return new Promise(resolve => {
      var params = new URLSearchParams()

      // params.append('wc_bookings_field_resource', resource_id)
      params.append('wc_bookings_field_start_date_day', day)
      params.append('wc_bookings_field_start_date_month', month)
      params.append('wc_bookings_field_start_date_year', year)
      params.append('start_time', selected_time)
      params.append('wc_bookings_field_start_date_time', selected_time)
      params.append('wc_bookings_field_start_date_local_timezone', '')
      params.append('end_time',etime)
      params.append('wc_bookings_field_duration',etime)
      params.append('variation_id', '')
      params.append('start_date', '')
      params.append('end_date', '')
      params.append('add-to-cart', product.id)
      params.append('customer_Id', customerId)


      // wc_bookings_field_start_date_day: 19
      // wc_bookings_field_start_date_month:  07
      // wc_bookings_field_start_date_year:  2021
      // start_time:  2021-07-19T08:00:00-0400
      // wc_bookings_field_start_date_time:  2021-07-19T08:00:00-0400
      // wc_bookings_field_start_date_local_timezone:
      // add-to-cart:  6914

      // end_time: 3
      // wc_bookings_field_duration:  3


      this.http
        .post(
          this.config.url + '/product/' + product.slug + '/',
          params,
          this.config.options,
        )

        // this.http.post(this.config.url + '/product/coronary-angioplasty-and-stents/', searchParams, this.config.options).map(res => res.json())
        .subscribe(data => {
          this.status = data.status
          resolve(this.status)
        })
    })
  }

  presentLoading(text) {
    this.loader = this.loadingController.create({
      content: text,
    })
    this.loader.present()
  }
  dismissLoading() {
    this.loader.dismiss()
  }
  addToWishlist(id) {
    return new Promise(resolve => {
      var params = new URLSearchParams()
      params.append('product_id', id)
      params.append('customer_id', this.values.customerId.toString())
      this.http
        .post(
          this.config.url +
            '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist',
          params,
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          this.status = data
          resolve(this.status)
        })
    })
  }

  pad(number, length) {
    var str = '' + number
    while (str.length < length) {
      str = '0' + str
    }

    return str
  }
  getBlocks(day, month, year, product_id, resource_id) {
    return new Promise(resolve => {
      let form_params = `wc_bookings_field_resource=${resource_id}&wc_bookings_field_start_date_month=${this.pad(
        month,
        2,
      )}&wc_bookings_field_start_date_day=${day}&wc_bookings_field_start_date_year=${year}&wc_bookings_field_start_date_time=&wc_bookings_field_start_date_local_timezone=&add-to-cart=${product_id}`
      var params = new URLSearchParams()
      params.append('action', 'wc_bookings_get_blocks')
      params.append('form', form_params)

      this.http
        .post(
          this.config.url + '/wp-admin/admin-ajax.php',
          params,
          this.config.options,
        )
        .map(res => res)
        .subscribe(data => {
          this.schedule = (<any>data)._body
          resolve(this.schedule)
        })
    })
  }
  deleteItem(id) {
    var params = new URLSearchParams()
    params.append('product_id', id)
    params.append('customer_id', this.values.customerId.toString())
    return new Promise(resolve => {
      this.http
        .post(
          this.config.url +
            '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist',
          params,
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        })
    })
  }

  addOrders(data){
    return new Promise(resolve => {
      this.header.append('Content-Type', 'application/json');
    this.http
        .post(
          this.config.urlApi + '/orders/create',
          {
            "clientUi": data.clientUi,
            "nameClient": data.nameClient,
            "productUi": data.productUi,
            "productName": data.productName,
            "stateServiceId": data.stateServiceId,
            "date": data.date,
            "hour": data.hour,
            "hour_end": data.hour_end,
            "lat":data.lat,
            "lng":data.lng,
            "onesignal":data.onesignal,
            "location":data.location,
            "cart":data.cart,
            "bookingId":data.bookingId,
          },
          this.header
        )
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data)
        });
    })
  }

  sendNotification(data){

    this.header.append('Content-Type', 'application/json');
    this.http
    .post(
      'https://onesignal.com/api/v1/notifications',
      {
        "app_id": "644f4795-d5c2-4d00-aead-1682204aacbc",
        "include_player_ids": [`${data.onesignalid}`],
        "data": {"foo": "bar"},
        "headings": {"en": `${data.title}`},
        "contents": {"en": `${data.content}`}
      },
      this.header
    )
    .map(res => res.json())
    .subscribe(
      data => {
        return data
      });
  }

  changestate(data){

    this.header.append('Content-Type', 'application/json');
    this.http
    .post(
      this.config.urlApi + '/orders/changestate',
      {
        "order": data.order,
        "state": data.state,
        "isCancel": data.isCancel
      },
      this.header
    )
    .map(res => res.json())
    .subscribe(
      data => {
        return data
      });
  }

  updateCartWithCustomerid(bookingid,client) {
    var params = new URLSearchParams()
    params.append('bookingid', bookingid)
    params.append('user', client)
    return new Promise(resolve => {
      this.http
        .post(
          this.config.url +
            '/wp-admin/admin-ajax.php?action=mstoreapp-update_booking_homer',
          params,
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        })
    })
  }
}
