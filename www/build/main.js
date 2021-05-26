webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Values = /** @class */ (function () {
    function Values() {
        this.homerOneSignal = [];
        this.count = 0;
        this.filter = 10;
        this.isLoggedIn = false;
        this.vendor = false;
        this.customerName = "";
        this.customerId = null;
        this.listview = false;
        this.cart = [];
        this.filterUpdate = false;
        this.avatar = "assets/image/logo.png";
        this.card = "assets/image/card.png";
        this.slider = "assets/image/bghome.png";
        this.houseTop = "assets/image/house-top2.jpg";
        this.headerLogin = "assets/image/header-login.png";
        this.camarero = "assets/image/camarero.png";
        this.cuido = "assets/image/cuido.png";
        this.limpieza = "assets/image/limpieza.png";
        this.planchado = "assets/image/planchado.png";
        this.homeClean = "assets/image/homeClean.jpg";
        this.currency = "USD";
        this.dir = 'left';
        this.wishlistId = [];
        this.blockslistId = [];
        this.dimensions = { imageGridViewHeight: 100, imageProductViewHeight: 100, scrollProductHeight: 100, productSliderWidth: 42 };
        this.settings = { "show_featured": "1", "show_onsale": "1", "show_latest": "1", "pull_to_refresh": "1", "onesignal_app_id": "8ad1c280-92da-4d39-b49c-cf0a81e0d1fc", "google_project_id": "575406525034", "google_web_client_id": "575406529046-r69ss57ceip6vv9mm858qh2hg3j0sl7u.apps.googleusercontent.com", "rate_app_ios_id": "", "rate_app_android_id": "https://play.google.com/store/apps/details?id=numu.digital.homer", "rate_app_windows_id": "", "share_app_android_link": "https://play.google.com/store/apps/details?id=numu.digital.homer", "share_app_ios_link": "https://play.google.com/store/apps/details?id=numu.digital.homer", "support_email": "support@example.com", "image_height": "100", "product_slider_width": "42", "enable_product_chat": "", "enable_home_chat": "", "whatsapp_number": "+91XXXXXXXX", "app_dir": "left", "language": "spanish" };
        this.filter = {};
        this.logoutUrl = "";
    }
    Values.prototype.updateCart = function (crt) {
        console.log(crt);
        this.cartItem = crt.cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in crt.cart_contents) {
            this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
            this.count += parseInt(crt.cart_contents[item].quantity);
        }
    };
    Values.prototype.updateCartTwo = function (crt) {
        console.log(crt);
        this.cart = [];
        this.count = 0;
        this.cartItem = crt;
        for (var item in crt) {
            this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
            this.count += parseInt(crt[item].quantity);
        }
    };
    Values.prototype.calc = function (width) {
        var devide = this.getDevide(width);
        this.dimensions.imageGridViewHeight = this.settings.image_height / 100 * (width / devide);
        if (width >= 769) {
            this.dimensions.productSliderWidth = this.settings.product_slider_width * 0.7;
            this.dimensions.productSliderHeight = this.settings.imageGridViewHeight * 0.6;
            this.dimensions.imageProductViewHeight = (this.settings.image_height / 100 * 0.6) * width;
        }
        else {
            this.dimensions.imageProductViewHeight = this.settings.image_height / 100 * width;
            this.dimensions.productSliderWidth = this.settings.product_slider_width;
        }
        this.dimensions.productSliderHeight = this.settings.imageGridViewHeight * 0.6;
        this.dimensions.scrollProductHeight = this.settings.image_height / 100 * (width * this.dimensions.productSliderWidth / 100);
        this.dimensions.imageListViewHeight = (this.settings.image_height / 100 * 11);
    };
    Values.prototype.getDevide = function (width) {
        if (width >= 1025) {
            return 5;
        }
        if (width >= 769) {
            return 4;
        }
        if (width >= 481) {
            return 3;
        }
        else {
            return 2;
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = /** @class */ (function () {
    function Post(service, values, params) {
        var _this = this;
        this.service = service;
        this.values = values;
        this.id = params.data.id;
        this.title = params.data.title;
        this.service.getPage(this.id)
            .then(function (results) { return _this.post = results; });
    }
    Post = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\post\post.html"*/'<ion-header class="settings-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n     </button>\n        <ion-title  text-left *ngIf="title">{{title}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="post" padding>\n    <ion-spinner *ngIf="!post" name="crescent"> </ion-spinner>\n    <div *ngIf="post">\n        <div [innerHTML]="post"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\post\post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], Post);
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotten_forgotten__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountLogin = /** @class */ (function () {
    function AccountLogin(nav, service, functions, values, platform, oneSignal, alert) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.alert = alert;
        this.disableSubmit = false;
        this.isActiveToggleTextPassword = true;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.loginData = {};
        this.buttonText = 'Login';
        this.service.getNonce().then(function (results) { return (_this.nonce = results); });
        this.countries = {};
    }
    AccountLogin.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    AccountLogin.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = 'Logging In...';
            this.service
                .login(this.loginData)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == '') {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == '') {
            return false;
        }
        else {
            return true;
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.buttonText = 'Login';
        if (!results.errors) {
            if (this.platform.is('cordova'))
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
        }
        else if (results.errors) {
            if (results.errors.invalid_email)
                this.functions.showAlert('Email', results.errors.invalid_email);
            else if (results.errors.invalid_username)
                this.functions.showAlert('Username', results.errors.invalid_username);
            else if (results.errors.incorrect_password)
                this.showAlertForgotPass('Password', '<strong>ERROR</strong>: The password you entered for the email address <strong>' + this.loginData.username + '</strong> is incorrect.');
            else if (results.errors.az_confirmation_error)
                this.showAlertResendKey('Confirmation mail', '<strong>ERROR:</strong> Please verify your account before login.');
            else
                this.functions.showAlert('error', 'invalid username/password');
        }
    };
    AccountLogin.prototype.forgotten = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__forgotten_forgotten__["a" /* AccountForgotten */]);
    };
    AccountLogin.prototype.showAlertForgotPass = function (title, text) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Lost your password?',
                    handler: function (data) {
                        _this.forgotten();
                    }
                }
            ],
        });
        alert.present();
    };
    AccountLogin.prototype.showAlertResendKey = function (title, text) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Resend Verification Link?',
                    handler: function (data) {
                        _this.service.getNonceResendKey(_this.loginData.username).then(function (results) { return _this.handleResultsNonce(results); });
                    }
                }
            ]
        });
        alert.present();
    };
    AccountLogin.prototype.handleResultsNonce = function (results) {
        this.countries = results;
        this.service.resendKey(this.loginData.username, this.countries.resend_key_nonce);
    };
    AccountLogin.prototype.toggleTextPassword = function () {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
    };
    AccountLogin.prototype.getType = function () {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    };
    AccountLogin.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    AccountLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\login\login.html"*/'<!-- Header -->\n<ion-header>\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >\n      <img  (click)="gohome();" src="{{values.avatar}}" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="account-login">\n    <img class="header-login" src="{{values.headerLogin}}">\n\n  <div class="margin">\n    <div>\n      <img style="width: 70%;" class="logo-login" src="{{values.avatar}}">\n    </div>\n    <form #f="ngForm" class="login">\n      <ion-list>\n        <ion-item>\n          <ion-label floating>{{"username" | translate}}</ion-label>\n          <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname">\n          </ion-input>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-input [type]="getType()" required type="password" [(ngModel)]="loginData.password" name="password" placeholder="Password"></ion-input>\n        <ion-icon name="eye" item-right (click)="toggleTextPassword()"></ion-icon>\n\n        </ion-item> -->\n\n        <ion-item>\n          <ion-label floating>{{"password" | translate}}</ion-label>\n          <ion-input class="pass" required [type]="passwordType" clearOnEdit="false" [(ngModel)]="loginData.password" name="password"></ion-input>\n          <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n        </ion-item>\n\n      </ion-list>\n      <div class="margin">\n        <button ion-button block color="button-color" type="submit" class="button button-block button-default"\n          text-uppercase [disabled]="disableSubmit" (click)="login(loginData)">{{"LogIn" | translate}}\n        </button>\n        <br>\n        <button ion-button clear color="button-color" type="submit" class="forgot-pass button button-block button-clear"\n          text-uppercase (click)="forgotten()">{{"Forgot Password" | translate}} ?\n        </button>\n      </div>\n    </form>\n    <br />\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], AccountLogin);
    return AccountLogin;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = /** @class */ (function () {
    function ProductService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
        this.header = new Headers();
    }
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products/' + id + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.product = data;
                resolve(_this.product);
            });
        });
    };
    ProductService.prototype.getReviews = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/products/' + id + '/reviews' + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reviews = data;
                resolve(_this.reviews);
            });
        });
    };
    ProductService.prototype.addToCart = function (resource_id, month, day, year, selected_time, product) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            console.log("parametros enviadas", month, day, year, selected_time, product.id);
            // params.append('wc_bookings_field_resource', resource_id)
            params.append('wc_bookings_field_start_date_month', month);
            params.append('wc_bookings_field_start_date_day', day);
            params.append('wc_bookings_field_start_date_year', year);
            params.append('wc_bookings_field_start_date_time', selected_time);
            params.append('wc_bookings_field_start_date_local_timezone', '');
            params.append('variation_id', '');
            params.append('start_date', '');
            params.append('end_date', '');
            params.append('add-to-cart', product.id);
            _this.http
                .post(_this.config.url + '/product/' + product.slug + '/', params, _this.config.options)
                .subscribe(function (data) {
                // console.log("ver data enviada de wordpress",data)
                _this.status = data.status;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    ProductService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    ProductService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('product_id', id);
            params.append('customer_id', _this.values.customerId.toString());
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.pad = function (number, length) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    };
    ProductService.prototype.getBlocks = function (day, month, year, product_id, resource_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var form_params = "wc_bookings_field_resource=" + resource_id + "&wc_bookings_field_start_date_month=" + _this.pad(month, 2) + "&wc_bookings_field_start_date_day=" + day + "&wc_bookings_field_start_date_year=" + year + "&wc_bookings_field_start_date_time=&wc_bookings_field_start_date_local_timezone=&add-to-cart=" + product_id;
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('action', 'wc_bookings_get_blocks');
            params.append('form', form_params);
            _this.http
                .post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                _this.schedule = data._body;
                resolve(_this.schedule);
            });
        });
    };
    ProductService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('product_id', id);
        params.append('customer_id', this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService.prototype.addOrders = function (data) {
        this.header.append('Content-Type', 'application/json');
        this.http
            .post(this.config.urlApi + '/orders/create', {
            "clientUi": data.clientUi,
            "nameClient": data.nameClient,
            "productUi": data.productUi,
            "productName": data.productName,
            "stateServiceId": data.stateServiceId,
            "date": data.date,
            "hour": data.hour,
            "lat": data.lat,
            "lng": data.lng,
            "onesignal": data.onesignal,
            "location": data.location
        }, this.header)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            return data;
        });
    };
    ProductService.prototype.sendNotification = function (data) {
        this.header.append('Content-Type', 'application/json');
        this.http
            .post('https://onesignal.com/api/v1/notifications', {
            "app_id": "8ad1c280-92da-4d39-b49c-cf0a81e0d1fc",
            "include_player_ids": ["" + data.onesignalid],
            "data": { "foo": "bar" },
            "headings": { "en": "" + data.title },
            "contents": { "en": "" + data.content }
        }, this.header)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            return data;
        });
    };
    ProductService.prototype.changestate = function (data) {
        this.header.append('Content-Type', 'application/json');
        this.http
            .post(this.config.urlApi + '/orders/changestate', {
            "order": data.order,
            "state": data.state,
            "isCancel": data.isCancel
        }, this.header)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            return data;
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductsListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation_ngx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_socket_io__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


var ProductsListPage = /** @class */ (function () {
    function ProductsListPage(alert, modalCtrl, platform, geolocation, nativeGeocoder, zone, toastCtrl, nav, service, values, socket) {
        var _this = this;
        this.alert = alert;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.socket = socket;
        this.date = "";
        this.hourInit = "";
        this.hourEnd = "";
        this.categories = [];
        this.HiddenList = true;
        this.HiddenListCat = true;
        this.HiddenSearchLocation = false;
        this.HideRadius = false;
        this.HideBtnSearch = false;
        this.radius = 0;
        this.miLatitude = 0;
        this.miLongitude = 0;
        this.has_more_items = true;
        this.loading = true;
        this.texto = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim praesentium quisquam dignissimos, ipsa odit tempore saepe! Debitis enim, dolor quis repellendus eveniet incidunt sapiente asperiores at quibusdam consequatur, laborum iusto?\n    Beatae, assumenda qui nulla molestiae dolores delectus! Nulla explicabo itaque recusandae similique excepturi ea cumque sequi nostrum, laudantium nihil minima dolore, rerum deserunt fugit. At nulla nobis eos quibusdam quo!\n    Molestias, voluptatem ex numquam asperiores explicabo eius quam sequi atque voluptates delectus incidunt minima molestiae tempore libero reprehenderit non sunt fugit repellendus ipsum rem totam quo suscipit assumenda. Nisi, enim.\n    Officia illo sint quod facere laborum dolore perspiciatis expedita sit atque dignissimos blanditiis ab consectetur molestias iusto nobis obcaecati corporis odit, hic vitae reprehenderit iste. Dolores alias asperiores maxime porro.\n    Recusandae inventore, accusantium, eveniet suscipit sed, delectus earum error libero fugit dolores iure repellat? Dolorum voluptate eos voluptas officia repellendus eaque similique a fugit ipsa, odit sapiente quia quae exercitationem!";
        this.myDate = new Date().toISOString();
        this.minTime = "00:00";
        this.minutesVal = "0,30";
        this.hourValues = [];
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.product_slot = [];
        this.options = [];
        this.service.getProducts();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.autocompleteCat = { input: '' };
        this.itemsCategory = [];
        this.lat = '';
        this.long = '';
        this.categories = [];
        this.service.getCategories(1);
        this.getCategory = this.service.mainCategories;
        platform.ready().then(function () {
            var subscription = _this.geolocation.watchPosition()
                .filter(function (p) { return p.coords !== undefined; }) //Filter Out Errors
                .subscribe(function (position) {
                _this.miLatitude = position.coords.latitude;
                _this.miLongitude = position.coords.longitude;
                // console.log("miLocation=" + position.coords.latitude + ' ' + position.coords.longitude);
            });
        });
    }
    ProductsListPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
    };
    ProductsListPage.prototype.getDate = function (date) {
        this.processDate = date;
    };
    ProductsListPage.prototype.getTime = function (time) {
        this.processHour = time;
    };
    ProductsListPage.prototype.getTime2 = function (time) {
        this.processHour = time;
        var hrsmin = time;
        var hrsminSplit = hrsmin.split(":", 2);
        var hr = Number(hrsminSplit[0]) + 1;
        console.log(hr);
        this.setHoursTime2(hr, hrsminSplit[1]);
    };
    ProductsListPage.prototype.ionSelected = function () {
        console.log("productlist Page has been selected");
        // do your stuff here
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__tabs_tabs__["a" /* TabsPage */]);
        this.pageTop.scrollToTop();
    };
    ProductsListPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    ProductsListPage.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    // ionViewDidEnter() {
    //   console.log('mierda2')
    //   //scroll to page top
    //   this.pageTop.scrollToTop();
    // }
    ProductsListPage.prototype.clickSearch = function () {
        this.autocompleteCat.input = ' ';
        this.getItemsCat();
        console.log("probando auto complete", this.autocompleteCat.input);
    };
    ProductsListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    ProductsListPage.prototype.handleService = function (results) {
        //
    };
    ProductsListPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
    };
    ProductsListPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    ProductsListPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    ProductsListPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    ProductsListPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsListPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsListPage.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    ProductsListPage.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    ProductsListPage.prototype.goto = function (data) {
        var _this = this;
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__post_post__["a" /* Post */], data.url);
        }
    };
    ProductsListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.service.loadMore().then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsListPage.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsListPage.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], item);
    };
    ProductsListPage.prototype.hideLoading = function () {
        this.loading = false;
    };
    ProductsListPage.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    ProductsListPage.prototype.getAddressFromCoords = function () {
        var _this = this;
        console.log("getAddressFromCoords " + this.miLatitude + " " + this.miLongitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(this.miLatitude, this.miLongitude, options)
            .then(function (result) {
            console.log(JSON.stringify(result[0]));
            _this.autocomplete.input = result[0].locality + ', ' + result[0].administrativeArea + ', ' + result[0].countryName;
        })
            .catch(function (error) {
            _this.address = "Address Not Available!";
            console.log(error);
        });
        this.lat = this.miLatitude.toString();
        this.long = this.miLongitude.toString();
        // this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        //   .then((result: NativeGeocoderReverseResult[]) => {
        //     this.address = "";
        //     let responseAddress = [];
        //     // for (let [key, value] of Object.entries(result[0])) {
        //     //   if(value.length>0)
        //     //   responseAddress.push(value);
        //     // }
        //     responseAddress.reverse();
        //     for (let value of responseAddress) {
        //       this.address += value+", ";
        //     }
        //     this.address = this.address.slice(0, -2);
        //   })
        //   .catch((error: any) =>{
        //     this.address = "Address Not Available!";
        //   });
    };
    ProductsListPage.prototype.getCoordsFromAddress = function (Adrress) {
        var _this = this;
        console.log("getCoordsFromAddress " + Adrress);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(Adrress, options)
            .then(function (result) {
            console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
            _this.lat = result[0].latitude;
            _this.long = result[0].longitude;
        })
            .catch(function (error) { return console.log(error); });
    };
    //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
    ProductsListPage.prototype.ShowCords = function () {
        alert('lat' + this.lat + ', long' + this.long);
    };
    //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
    ProductsListPage.prototype.UpdateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            this.lat = '';
            this.long = '';
            this.HiddenList = false;
            this.HideBtnSearch = false;
            this.HideRadius = false;
            return;
        }
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input, types: ['(cities)'], componentRestrictions: { country: 'es' } }, function (predictions, status) {
            _this.autocompleteItems = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems.push(prediction);
                    _this.HiddenList = true;
                    _this.HideBtnSearch = true;
                    _this.HideRadius = true;
                });
            });
        });
    };
    //wE CALL THIS FROM EACH ITEM.
    ProductsListPage.prototype.SelectSearchResult = function (item) {
        ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
        // alert(JSON.stringify(item))
        this.placeid = item.place_id;
        this.autocomplete.input = item.description;
        var description;
        description = item.description;
        this.getCoordsFromAddress(description);
        this.HiddenList = false;
        this.HideBtnSearch = false;
        this.HideRadius = false;
    };
    //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
    ProductsListPage.prototype.ClearAutocomplete = function () {
        this.autocompleteItems = [];
        this.autocomplete.input = '';
        this.HideBtnSearch = false;
        this.HideRadius = false;
        this.lat = '';
        this.long = '';
    };
    //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
    ProductsListPage.prototype.GoTo = function () {
        return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
    };
    ProductsListPage.prototype.ClearAutocompleteCat = function () {
        this.itemsCategory = [];
        this.items = [];
        this.autocompleteCat.input = '';
        this.HiddenSearchLocation = false;
        this.HideBtnSearch = false;
        this.HideRadius = false;
    };
    ProductsListPage.prototype.onChange = function (evt) {
        if (this.categories.length == 0) {
            this.categories.push({ id: evt.id, name: evt.name });
            this.categoriesValue = [];
        }
        else {
            if (this.categories.id != evt) {
                this.categories.push({ id: evt.id, name: evt.name });
                this.categoriesValue = [];
            }
        }
        this.categoriesValue = [];
    };
    ProductsListPage.prototype.SelectSearchResultCat = function (item) {
        ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
        // alert(JSON.stringify(item))
        if (this.categories.length == 0) {
            // this.categories.push({id:item.id, name:item.name});
            this.categories.push({ id: item.id, slug: item.slug });
            this.categoriesValue = [];
        }
        else {
            if (this.categories.id != item) {
                this.categories.push({ id: item.id, slug: item.slug });
                this.categoriesValue = [];
            }
        }
        console.log('my', this.categories);
        this.categoriesValue = [];
        this.autocompleteCat.input = item.name;
        this.selectedCategory = item.slug;
        this.items.id = item.id;
        this.items.slug = item.slug;
        this.items.name = item.name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(item.id); });
        console.log(this.items.categories);
        this.HiddenListCat = false;
        this.HiddenSearchLocation = false;
        this.HideBtnSearch = false;
        this.HideRadius = false;
    };
    ProductsListPage.prototype.getItemsCat = function () {
        // const target = ev.target as HTMLTextAreaElement;
        // let val = target.value;
        var _this = this;
        if (this.autocompleteCat.input == '') {
            this.itemsCategory = [];
            this.HiddenListCat = false;
            this.HiddenSearchLocation = false;
            this.HideBtnSearch = false;
            this.HideRadius = false;
            this.items = [];
            return;
        }
        this.itemsCategory = this.service.mainCategories;
        // if the value is an empty string don't filter the items
        // if (this.autocompleteCat.input && this.autocompleteCat.input.trim() != '') {
        console.log('entra');
        this.HiddenListCat = true;
        this.HiddenSearchLocation = true;
        this.HideBtnSearch = true;
        this.HideRadius = true;
        this.itemsCategory = this.itemsCategory.filter(function (itemsCategory) {
            return (itemsCategory.name.toLowerCase().indexOf(_this.autocompleteCat.input.toLowerCase()) > -1);
        });
        // }
    };
    ProductsListPage.prototype.searchProduct = function () {
        var _this = this;
        var min_date = this.date + 'T' + this.hourInit;
        var max_date = this.date + 'T' + this.hourEnd;
        this.getAddressFromCoords();
        this.items.productslocation = '';
        // if( this.miLatitude.toString() != '' && this.miLongitude.toString() != ''){
        //   let midata =  this.service.getLocationFromProduct3(min_date, max_date, null)
        //   // let midata =  this.service.getLocationFromProduct(this.lat, this.long, this.radius)
        //   .then((results) => this.handleLocationInit(results));
        // }
        // else{
        //   this.showAlert('<strong>Estimado Usuario</strong>', 'Active el GPS por favor');
        //   // this.nav.push(ProductsPage, this.items);
        //   //console.log("original=" + this.originalCoords + this.originalCoords.latitude + this.originalCoords.longitude);
        // }
        if ((this.date.toString() != '' && this.hourInit.toString() != '' && this.hourEnd.toString() != '' && this.autocompleteCat.input != '')) {
            var midata = this.service.getLocationFromProduct3(min_date, max_date, null)
                .then(function (results) { return _this.handleLocationInit(results); });
        }
        else {
            this.showAlert('<strong>Estimado Usuario</strong><br/><br/>', 'Por favor Rellene todos los campos');
            // this.nav.push(ProductsPage, this.items);
            //console.log("original=" + this.originalCoords + this.originalCoords.latitude + this.originalCoords.longitude);
        }
    };
    ProductsListPage.prototype.handleLocationInit = function (results) {
        return __awaiter(this, void 0, void 0, function () {
            var dataResult, product_slot;
            return __generator(this, function (_a) {
                dataResult = results.includeProduct;
                product_slot = results.product_slot;
                this.items.productslocation = dataResult;
                this.product_slot.array = product_slot;
                this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { items: this.items.productslocation, categories: this.categories, p_slot: this.product_slot.array, date: this.date, hourInit: this.hourInit, hourEnd: this.hourEnd });
                return [2 /*return*/];
            });
        });
    };
    ProductsListPage.prototype.deleteTipoServicio = function (id) {
        var index = this.categories.map(function (result) { return result.id; }).indexOf(id);
        if (index > -1) {
            this.categories.splice(index, 1);
        }
    };
    ProductsListPage.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK'],
        });
        alert.present();
    };
    // searchProduct(){
    //   // this.socket.fromEvent('validaactiveprovider').subscribe((data:any) => {
    //   //   this.homerProviders.push(data);
    //   //   console.log('data:',data)
    //   //   for(let provider of this.homerProviders){
    //   //     if(this.values.customerId == provider){
    //   //       this.values.isActive = true;
    //   //     }
    //   //   }
    //   // });
    //   this.items.productslocation = ''
    //     if(this.radius > 0 && this.lat != '' && this.long != ''){
    //       let midata =  this.service.getLocationFromProduct(this.lat, this.long, this.radius)
    //       .then((results:any) =>{
    //         // this.socket.connect();
    //         // console.log('products',[results]);
    //         // for(let i; i<results.length; i++){
    //         //   console.log('xoxo',results[i].id);
    //         // }
    //         // this.socket.emit('validaactiveprovider', results.id);
    //         // this.socket.fromEvent('validaactiveprovider').subscribe((data:any) => {
    //         //     console.log('data:',data)
    //         // });
    //         console.log(results);
    //         this.handleLocationInit(results);
    //       });
    //     }else{
    //      this.nav.push(ProductsPage, this.items);
    //     //  console.log(this.miLatitude);
    //     //  console.log("original=" + this.originalCoords + this.originalCoords.latitude + this.originalCoords.longitude);
    //     }
    // }
    // handleLocationInit(results) {
    //   let dataResult = results;
    //   this.items.productslocation = dataResult;
    //   this.nav.push(ProductsPage, this.items);
    // }
    ProductsListPage.prototype.setHoursTime2 = function (hr, min) {
        this.hourEnd = "";
        //var hrs = hr + 2;
        //console.log("min: ",min)
        var currentHours2 = ("0" + hr).slice(-2);
        var horaCiclo = 0;
        this.hourValues = [];
        if (min == 30) {
            this.minutesVal = "30";
        }
        else {
            this.minutesVal = "0";
        }
        for (var i = hr; i <= 23; i = i + 1) {
            this.hourValues.push(i);
            //console.log("time 2: " + i);
        }
        //console.log(this.hourValues);
        var hrsMin = currentHours2 + ":" + min;
        this.minTime = hrsMin.toString();
        //console.log("hrsMin: ", hrsMin);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductsListPage.prototype, "mapContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ProductsListPage.prototype, "pageTop", void 0);
    ProductsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-products-list",template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\products-list\products-list.html"*/'<!-- Header -->\n<ion-header>\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img  (click)="gohome();" width="150" src="{{values.avatar}}" />\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button\n        ion-button\n        icon-only\n        light\n        class="has-icon icon-only has-badge"\n        (click)="getCart()"\n      >\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n          {{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content padding>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let category of categories" (click)="openCategoryPage(category)">\n      <ion-thumbnail item-start >\n         <img-loader *ngIf="category.image.length != 0" useImg src="{{category.image.src}}" useImg></img-loader>\n      </ion-thumbnail>\n\n      <h2> {{ category.name }} </h2>\n      <p> {{ category.description }}</p>\n    </ion-item>\n\n  </ion-list>\n</ion-content> -->\n\n<ion-content #pageTop>\n\n\n  <!-- <ion-fab bottom right slot="fixed">\n    <button ion-fab>\n      <ion-icon name="chatboxes"></ion-icon>\n    </button>\n\n    <ion-fab-list side="left">\n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.messenger.com/t/thehexchange">\n        <ion-icon style="background: #2196f3;" name="custom-facebook"></ion-icon>\n      </a>\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.instagram.com/thehexchange/">\n        <ion-icon style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);"\n          name="custom-instagram"></ion-icon>\n      </a>\n\n    </ion-fab-list>\n  </ion-fab> -->\n\n  <!-- <ion-slides autoplay=\'3000\' loop=\'true\' autoHeight=\'true\' pager=\'true\'>\n    <ion-slide *ngFor="let number of [1,2,3]">\n       <img-loader src="./assets/images/1.jpg" useImg></img-loader>\n    </ion-slide>\n  </ion-slides> -->\n\n  <ion-slides initialSlide="0" speed="3000" loop="false" pager="true" dir="rtl">\n    <ion-slide>\n      <div class="overlay">\n        <!-- <img src="../../assets/image/1.jpg" class="slider-img"> -->\n        <img src="{{values.houseTop}}" />\n      </div>\n      <!--overlay-->\n      <div class="background-flat">\n        <div class="title-home-banner">\n          <h2>Todo lo que necesitas para hacer tu vida más fácil</h2>\n        </div>\n      </div>\n      <div class="subtitle-home-banner">\n        <h4>Busca Nuestros Servicios</h4>\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n  <div class="card-search" >\n    <div style="margin: 0 10px 0 5px;">\n      <button style="width:100%;background-color:white;color:black;height: 2.5em;border-radius: 5px;" ion-button class="positionCalendar">\n         <ion-icon name="calendar"></ion-icon>\n         <ion-datetime (ionChange)="getDate(this.date)" placeholder="Fecha" displayFormat="YYYY-MM-DD"   [(ngModel)]="date" cancelText ="Cancelar" doneText="Seleccionar"></ion-datetime>\n      </button>\n\n      <button style="width:100%;background-color:white;color:black;height: 2.5em;border-radius: 5px;" ion-button class="positionCalendar">\n         <ion-icon name="md-alarm"></ion-icon>\n         <ion-datetime (ionChange)="getTime2(this.hourInit)" placeholder="Desde" [(ngModel)]="hourInit" display-timezone="utc"  cancelText ="Cancelar" doneText="Seleccionar"\n         minuteValues="0,30" displayFormat="HH:mm" [(ngModel)]="myDate">\n        </ion-datetime>\n\n      </button>\n\n      <button style="width:100%;background-color:white;color:black;height: 2.5em;border-radius: 5px;" ion-button class="positionCalendar">\n         <ion-icon name="md-alarm"></ion-icon>\n         <ion-datetime (ionChange)="getTime(this.hourEnd)" placeholder="Hasta" [(ngModel)]="hourEnd" display-timezone="utc" cancelText ="Cancelar"\n         doneText="Seleccionar" [minuteValues]="minutesVal" [hourValues]="hourValues" [min]="minTime" displayFormat="HH:mm">\n          </ion-datetime>\n      </button>\n    </div>\n\n    <ion-searchbar (click)="clickSearch()" class="searchbar-category" [(ngModel)]="autocompleteCat.input" (ionInput)="getItemsCat()"\n    (ionClear)="ClearAutocompleteCat()" placeholder="{{\'Category\' | translate}}"></ion-searchbar>\n    <ion-list class="list-category" [hidden]="!HiddenListCat">\n      <ion-item *ngFor="let item of itemsCategory" (click)="SelectSearchResultCat(item)">\n        {{ item.name }}\n      </ion-item>\n    </ion-list>\n\n    <div style="display: contents; max-width: 350px; border: 1px solid red; z-index: -1;">\n      <ion-chip *ngFor="let item of categories" style="font-size: small;" >\n        <ion-label color="primary">{{item.slug}}</ion-label>\n        <button ion-button clear color="dark" (click)="deleteTipoServicio(item.id)">\n          <ion-icon name="close-circle" style="color:red"></ion-icon>\n        </button>\n      </ion-chip>\n    </div>\n\n    <div class="btn-search-product" [hidden]="HideBtnSearch">\n      <button ion-button item-center medium color="button-color" text-uppercase\n        (click)="searchProduct()">{{"Search" | translate}}\n      </button>\n    </div>\n  </div>\n  <ion-grid>\n    <!-- <div *ngIf="service.categories" class="category-name">\n      <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n        <ion-icon item-right class="ion-ios-arrow-forward item-icon">\n        </ion-icon>\n        <span [innerHTML]="item.name"></span>\n      </ion-item>\n    </div>  -->\n\n    <div class="sub-header">\n      <h3>{{\'!Disfruta de tu tiempo gracias a Homer!\' | translate}}</h3>\n      <h4>Encuentra a los mejores profesionales para tu hogar</h4>\n    </div>\n\n    <ion-row *ngIf="service.categories" class="category-name">\n      <ion-col col-12 class="flex-center" *ngFor="let item of service.mainCategories"\n        (click)="openModal({title: item.name, detail:texto})">\n        <ion-list>\n          <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-thumbnail>\n                  <img src="{{item.image.src}}" />\n                </ion-thumbnail>\n              </ion-row>\n            </ion-grid>\n            <ion-grid>\n              <ion-row item-left lbl-category>\n                <p class="heading text-center">{{item.name}}</p>\n                <!-- <p>{{item.description}}</p> -->\n              </ion-row>\n            </ion-grid>\n\n            <ion-grid>\n              <ion-row item-left lbl-category>\n                <button class="btn-reservar" ion-button item-center medium color="button-color" text-uppercase\n                  >{{"Ver Detalle" | translate}}\n                </button>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-slides class="testimonial" initialSlide="0" autoplay=\'500\' loop="true" speed="6000" pager="true">\n    <ion-slide>\n      <div class="testimonial-content">\n        <p>\n          "Tenemos varios apartamentos en toda la ciudad y siempre nos cubren todas las necesidades al momento."\n        </p>\n        <ion-label>Mariam Lopez.</ion-label>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="testimonial-content">\n        <p>\n          "Homer me ayudo a encontrar diferentes servicios en un mismo lugar de un día para otro."\n        </p>\n        <ion-label>Jose Martinez.</ion-label>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="testimonial-content">\n        <p>\n          "Una app muy accesible fácil de usar para momentos puntuales donde requería limpieza y servicio de canguro."\n        </p>\n        <ion-label>Juana Garcia.</ion-label>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card class="comunicated">\n        <p style="text-align: left;margin: 15px;">\n          Para prestar sus servicios, todos los proveedores tienen que pasar sus consiguientes pruebas psicologicas, entrevistas,\nrevision de antecedentes y validacion de identidad de domicilio.\n        </p>\n  </ion-card>\n\n  <ion-footer>\n\n    <ion-list class="item-footer">\n      <div class="footer-content">\n        <ion-item>\n          <h3 style="text-decoration: underline;">INFORMACION DE CONTACTO</h3>\n        </ion-item>\n        <ion-item>\n          <h2>902 333-333</h2>\n          <h2>info@homer.com</h2>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon class="icon-facebook icon-social" name="logo-facebook"></ion-icon>\n          <ion-icon class="icon-twitter icon-social" name="logo-twitter"></ion-icon>\n          <ion-icon class="icon-linkedin icon-social" name="logo-linkedin"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <img class="icon-payment" style="max-width: 20%;" src="../../assets/icon/visa.svg">\n          <img class="icon-payment" style="max-width: 20%;" src="../../assets/icon/mastercard.svg">\n          <!-- <img class="icon-payment" style="max-width: 22%;" src="../../assets/icon/american.png"> -->\n          <!-- <img class="icon-payment" style="max-width: 22%;" src="../../assets/icon/paypal.png"> -->\n        </ion-item>\n      </div>\n    </ion-list>\n\n  </ion-footer>\n\n  <!-- <ion-card>\n    <ion-list>\n      <ion-item>\n        <p>{{\'Contact Us\' | translate}}</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <a button href="https://wa.me/{{values.settings.whatsapp_number}}?text=hello i need a medical consultation." clear\n    item-left style="text-decoration: none;">\n    <ion-card>\n      <ion-list>\n        <ion-item>\n          <ion-icon class="icon-whatsapp" name="logo-whatsapp"></ion-icon>\n          {{\'Chat on whatsapp\' | translate}}\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </a>\n\n  <a button href="tel:+3059132306" clear item-left style="text-decoration: none;">\n    <ion-card>\n      <ion-list>\n        <ion-item>\n          <ion-icon name="call"></ion-icon>\n          {{\'Call us\' | translate}}\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </a> -->\n\n  <!-- <ion-card *ngFor="let category of categories">\n    <ion-list>\n      <ion-item (click)="openCategoryPage(category)">\n        <ion-thumbnail item-left>\n          <img src="{{category.image.src}}">\n        </ion-thumbnail>\n        <p class="heading">{{category.name}}</p>\n        <p>{{category.description}}</p>\n      </ion-item>\n    </ion-list>\n  </ion-card> -->\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\products-list\products-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation_ngx__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_socket_io__["a" /* Socket */]])
    ], ProductsListPage);
    return ProductsListPage;
}());

var ModalContentPage = /** @class */ (function () {
    function ModalContentPage(platform, params, viewCtrl, values) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.values = values;
        this.title = this.params.get('title');
        this.detail = this.params.get('detail');
        this.imgModal = this.values.homeClean;
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n<ion-content>\n  <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-card style=\"margin-top:20px\">\n      <img src=\"{{imgModal}}\"/>\n      <ion-card-content>\n        <ion-card-title>\n          {{title}}\n        </ion-card-title>\n        <p>\n          {{detail}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=products-list.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_category_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPage = /** @class */ (function () {
    function SearchPage(nav, categoryService, service, values, params) {
        this.nav = nav;
        this.categoryService = categoryService;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.page = 1;
        this.shouldShowCancel = true;
        this.showSearch = true;
        this.showFilters = false;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.myInput = "";
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchbar.setFocus();
        }, 0);
    };
    SearchPage.prototype.ionViewWillLeave = function () {
        // this.showSearch = false;
    };
    SearchPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.products = results; });
    };
    SearchPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    SearchPage.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], item);
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        // this.page += 1;
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        // if (results.products == undefined) {
        //     console.log('No hay mas productos que mostrar...', results.products)
        //     this.has_more_items = false
        //     infiniteScroll.complete()
        //     return
        // }
        console.log(results);
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.addToCart = function (id) {
        var _this = this;
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"' + res[0] + '":"' + res[1] + '",';
        }
        text += '"product_id":"' + id + '",';
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.service.addToCart(obj)
            .then(function (results) { return _this.updateCart(results); });
    };
    SearchPage.prototype.updateCart = function (a) {
    };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    SearchPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id)
            .then(function (results) { return _this.status = results; });
    };
    //Filter shit
    SearchPage.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    SearchPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    SearchPage.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        // if (sort == 0) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'date'
        // }
        // if (sort == 1) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 2) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 3) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // } else if (sort == 4) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // }
        // FILTROS SHIT EN FUNCION
        if (sort == 5) {
            this.filter['orderby'] = 'menu_order';
        }
        else if (sort == 6) {
            this.filter['orderby'] = 'popularity';
        }
        else if (sort == 7) {
            this.filter['orderby'] = 'rating';
        }
        else if (sort == 8) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'asc';
        }
        else if (sort == 9) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'desc';
        }
        else if (sort == 10) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'asc';
        }
        else if (sort == 11) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'desc';
        }
        else if (sort == 12) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'asc';
        }
        else if (sort == 13) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'desc';
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
            this.filter['filter[meta_query][value]'] = '[0,10]';
            this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.categoryService.load(this.filter).then(function (results) { return (_this.products = results); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Searchbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Searchbar"])
    ], SearchPage.prototype, "searchbar", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-searchbar *ngIf="showSearch" [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n    </ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="search">\n\n\n\n  <div *ngIf="showFilters" class="filter">\n\n    <ion-list radio-group [(ngModel)]="sort" (ngModelChange)="chnageFilter(sort)">\n\n      <ion-list-header>\n\n        <b>\n\n          {{"Sort" | translate}}\n\n        </b>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Default" | translate}}</ion-label>\n\n        <ion-radio value="5"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by popularity" | translate}}</ion-label>\n\n        <ion-radio value="6"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by average rating" | translate}}</ion-label>\n\n        <ion-radio value="7"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by date: ASC" | translate}}</ion-label>\n\n        <ion-radio value="8"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by date: DESC" | translate}}</ion-label>\n\n        <ion-radio value="9"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by price: low to high" | translate}}</ion-label>\n\n        <ion-radio value="10"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by price: high to low" | translate}}</ion-label>\n\n        <ion-radio value="11"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by name: ASC" | translate}}</ion-label>\n\n        <ion-radio value="12"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by name: DESC" | translate}}</ion-label>\n\n        <ion-radio value="13"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="button-color" (click)="cancel()">\n\n      {{"CANCEL" | translate}}\n\n    </button>\n\n  </div>\n\n  <div *ngIf="!showFilters">\n\n    <div *ngIf="products" class="products-search">\n\n      <h2 *ngIf="!products.length" style="font-size: 15px;text-align: center;margin-top: 30px">No products found!.</h2>\n\n      <div *ngIf="products.length">\n\n        <div *ngIf="values.listview">\n\n          <ion-item no-lines class="item-name">\n\n            <ion-label text-uppercase>{{"Providers" | translate}}\n\n            </ion-label>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n\n              <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n\n              <ion-icon ios="ios-grid" md="md-grid">\n\n              </ion-icon>\n\n            </button>\n\n          </ion-item>\n\n          <ion-list *ngIf="products">\n\n            <div class="item-list" *ngFor="let item of products">\n\n              <ion-item no-lines class="price-list">\n\n                <ion-thumbnail item-left class="stock-list">\n\n                  <a (click)="getProduct(item)">\n\n                    <img [style.height.rem]="values.dimensions.imageListViewHeight" src="{{item.images[0].src}}">\n\n                    <button ion-button color="danger"\n\n                      *ngIf="item.stock_status !== \'instock\'">{{"OUTOFSTOCK" | translate}}\n\n                    </button>\n\n                  </a>\n\n                </ion-thumbnail>\n\n                <a (click)="getProduct(item)">\n\n                  <div class="product-name-top">\n\n                    <h2>{{item.title}}\n\n                    </h2>\n\n                    <h2 *ngIf="item.name">{{item.name}}</h2>\n\n                    <p class="max-lines" [innerHTML]="item.description">\n\n                    </p>\n\n                  </div>\n\n                  <div class="bottom-left">\n\n                    <h3 class="price-regular" *ngIf="!item.sale_price">\n\n                      {{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-special" *ngIf="item.sale_price">\n\n                      {{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-del" *ngIf="item.sale_price">\n\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                      </del>\n\n                    </h3>\n\n                  </div>\n\n                </a>\n\n                <div class="bottom-right-button">\n\n                  <!-- <button ion-button text-uppercase color="button-color" item-right outline *ngIf="item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                  {{"Add" | translate}}\n\n                </button> -->\n\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1"\n\n                    (click)="deleteFromCart(item.id)">\n\n                    <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n                    </ion-icon>\n\n                  </button>\n\n                  <button ion-button item-right color="button-color" clear\n\n                    *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                  </button>\n\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1"\n\n                    (click)="updateToCart(item.id)">\n\n                    <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n                    </ion-icon>\n\n                  </button>\n\n                  <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear\n\n                    *ngIf="item.stock_status !== \'instock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0"\n\n                    (click)="addToCart(item.id, item.type)">\n\n                    {{button}}\n\n                  </button>\n\n                </div>\n\n              </ion-item>\n\n            </div>\n\n          </ion-list>\n\n        </div>\n\n        <div *ngIf="!values.listview">\n\n          <ion-item no-lines class="item-name">\n\n            <ion-label text-uppercase>{{"Providers" | translate}}\n\n            </ion-label>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n\n              <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n\n              <ion-icon ios="ios-list-box" md="ios-list-box">\n\n              </ion-icon>\n\n            </button>\n\n          </ion-item>\n\n          <div class="card-background-page grid" *ngIf="products">\n\n            <ion-row class="row unlimited-items">\n\n              <ion-col class="col" *ngFor="let item of products">\n\n                <ion-card>\n\n                  <ion-card-content class="stock">\n\n                    <a (click)="getProduct(item)">\n\n                      <img [style.height.px]="values.dimensions.imageGridViewHeight" src="{{item.images[0].src}}">\n\n                      <button ion-button color="danger"\n\n                        *ngIf="item.stock_status !== \'instock\'">{{"OUTOFSTOCK" | translate}}\n\n                      </button>\n\n                    </a>\n\n                  </ion-card-content>\n\n                  <ion-label class="product-label">{{item.title}}\n\n                  </ion-label>\n\n                  <h2 *ngIf="item.name">{{item.name}}</h2>\n\n                  <ion-item no-padding class="price-list">\n\n                    <h3 class="price-regular" *ngIf="!item.sale_price">\n\n                      {{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-special" *ngIf="item.sale_price">\n\n                      {{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-delete" *ngIf="item.sale_price">\n\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                      </del>\n\n                    </h3>\n\n                    <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear\n\n                      *ngIf="item.stock_status !== \'instock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0"\n\n                      (click)="addToCart(item.id, item.type)">\n\n                      {{button}}\n\n                    </button>\n\n                    <!-- <button ion-button text-uppercase color="button-color" item-right clear *ngIf="item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                    {{"Add" | translate}}\n\n                  </button> -->\n\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1"\n\n                      (click)="deleteFromCart(item.id)">\n\n                      <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n                      </ion-icon>\n\n                    </button>\n\n                    <button ion-button item-right color="button-color" clear\n\n                      *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                    </button>\n\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1"\n\n                      (click)="updateToCart(item.id)">\n\n                      <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n                      </ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_service_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutService = /** @class */ (function () {
    function CheckoutService(http, config) {
        this.http = http;
        this.config = config;
    }
    CheckoutService.prototype.updateOrderReview = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("security", form.nonce.update_order_review_nonce);
        params.append("payment_method", form.payment_method);
        params.append("address", form.billing_address_1);
        params.append("address_2", form.billing_address_2);
        params.append("city", form.billing_city);
        params.append("postcode", form.billing_postcode);
        params.append("country", form.billing_country);
        params.append("state", form.billing_state);
        params.append("s_address", form.billing_address_1);
        params.append("s_address_2", form.billing_address_2);
        params.append("s_city", form.billing_city);
        params.append("s_postcode", form.billing_postcode);
        params.append("s_country", form.billing_country);
        params.append("s_state", form.billing_state);
        params.append("shipping_method[0]", form.shipping_method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkout = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        if (form.payment_method == 'authnet') {
            params.append("authnet-card-number", form.authnet_card_number);
            params.append("authnet-card-expiry", form.authnet_card_expiry);
            params.append("authnet-card-cvc", form.authnet_card_cvc);
            console.log(form);
        }
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkouttest = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", "Name hajsk");
        params.append("billing_last_name", "Name hajsk");
        params.append("billing_company", "Name hajsk");
        params.append("billing_email", "test@gmail.com");
        params.append("billing_phone", "237648372");
        params.append("billing_address_1", "form billing_address_1");
        params.append("billing_address_2", "dsjfh sdjfhsdkj");
        params.append("billing_city", "fsdfdjgif");
        params.append("billing_postcode", "560048");
        params.append("billing_country", "IN");
        params.append("billing_state", "KA");
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveBillingAddress = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.nonce.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("createaccount", form.billing_address_1);
        params.append("account_password", form.billing_address_2);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", "544bcd0d1d");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveShippingAddress = function (shipping) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping[firstname]", shipping.firstname);
        params.append("shipping[lastname]", shipping.lastname);
        params.append("shipping[company]", shipping.company);
        params.append("shipping[street][0]", shipping.street1);
        params.append("shipping[street][1]", shipping.street2);
        params.append("shipping[city]", shipping.city);
        params.append("shipping[postcode]", shipping.postcode);
        params.append("shipping[country_id]", shipping.country_id);
        params.append("shipping[state_id]", shipping.state_id);
        if (shipping.entity_id) {
            params.append("shipping_address_id", shipping.entity_id);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getShippingPayment = function () {
        var _this = this;
        if (this.shippingMethods && this.paymentMethods) {
            return Promise.resolve(this.shippingMethods);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingMethods = data[0];
                _this.paymentMethods = data[1];
                resolve(_this.shippingMethods);
            });
        });
    };
    CheckoutService.prototype.saveMethods = function (shippingMethod, payment) {
        var _this = this;
        var shipping = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        shipping.append("shipping_method", shippingMethod);
        for (var param in payment) {
            params.set("payment[" + param + "]", payment[param]);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', params, _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingStatus = data[0];
                _this.paymentStatus = data[1];
                resolve(_this.shippingStatus);
            });
        });
    };
    CheckoutService.prototype.getTime = function (date) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_slots_on_date");
        params.append("date", date);
        console.log(params);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getDate = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_upcoming_bookable_dates");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.login = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", form.username);
        params.append("password", form.password);
        params.append("_wpnonce", form.checkout_login);
        params.append("login", "Login");
        params.append("_wp_http_referer", "/checkout/");
        params.append("redirect", this.config.url + "/wp-admin/admin-ajax.php?action=mstoreapp-userdata");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout/', params, _this.config.options)
                .subscribe(function (data) {
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.status = data;
                    resolve(_this.status);
                });
            });
        });
    };
    CheckoutService.prototype.submitCoupon = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", form.coupon_code);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getStripeToken = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("key", form.payment.stripe.publishable_key);
        params.append("payment_user_agent", 'stripe.js/6ea8d55');
        params.append("card[number]", form.stripe_number);
        params.append("card[cvc]", form.stripe_code);
        params.append("card[exp_month]", form.stripe_exp_month);
        params.append("card[exp_year]", form.stripe_exp_year);
        params.append("card[name]", form.billing_first_name + form.billing_last_name);
        params.append("card[address_line1]", form.billing_address_1);
        params.append("card[address_line2]", form.billing_address_2);
        params.append("card[address_state]", form.billing_state);
        params.append("card[address_city]", form.billing_city);
        params.append("card[address_zip]", form.billing_postcode);
        params.append("card[address_country]", form.billing_country);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/tokens', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(err.json()); });
        });
    };
    CheckoutService.prototype.stripePlaceOrder = function (form, token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        params.append("wc-stripe-payment-token", 'new');
        params.append("stripe_token", token.id);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getOrderSummary = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/orders/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orderSummary = data;
                resolve(_this.orderSummary);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderSummary = /** @class */ (function () {
    function OrderSummary(nav, service, params, functions, values) {
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.functions = functions;
        this.values = values;
        this.id = params.data;
    }
    OrderSummary.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getOrderSummary(this.id)
            .then(function (results) { return _this.orderSummary = results; });
    };
    OrderSummary.prototype.Continue = function () {
        this.values.count = 0;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    OrderSummary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\checkout\order-summary\order-summary.html"*/'<ion-header>\n\n  <ion-navbar color="header" hideBackButton>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title text-wrap text-center>{{"OrderSummary" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="order-summary">\n\n  <ion-spinner *ngIf="!orderSummary" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orderSummary" class="margin">\n\n    <div *ngIf="orderSummary.order">\n\n      <div class="thank-you-message">\n\n        <ion-item>\n\n          <h2>{{"OrderReceived" | translate}} \n\n          </h2>\n\n          <h3>{{"orderreceivedtext" | translate}}\n\n          </h3>\n\n        </ion-item>\n\n      </div>\n\n      <div *ngIf="orderSummary" class="summary">\n\n        <ion-item no-lines>\n\n          <h2>{{"OrderNumber" | translate}} : {{orderSummary.order.order_number}}\n\n          </h2>\n\n          <h2>{{"Orderdate" | translate}} : {{orderSummary.order.created_at | date:\'medium\'}}\n\n          </h2>\n\n          <h2>{{"Totalquantity" | translate}} :  {{orderSummary.order.total_line_items_quantity}}\n\n          </h2>\n\n          <h2>{{"Totals" | translate}} :  {{1*orderSummary.order.total | currency:values.currency:true:\'1.2-2\'}}\n\n          </h2>\n\n          <h2>{{"PaymentMethod" | translate}} :  {{orderSummary.order.payment_details.method_title}}\n\n          </h2>\n\n        </ion-item>\n\n      </div>\n\n      <div class="order-details">\n\n        <ion-item no-lines>\n\n          <ion-label class="side-header">{{"OrderDetails" | translate}}\n\n          </ion-label>\n\n        </ion-item>\n\n        <div *ngFor="let item of orderSummary.order.line_items | keys">\n\n          <ion-row >\n\n            <ion-col width-75>\n\n              <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label no-margin>{{1*item.value.subtotal | currency:values.currency:true:\'1.2-2\' }}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <ion-row *ngIf="orderSummary.order.coupon_lines.length != 0" > \n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{"Coupon" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin>{{1*orderSummary.order.total_discount | currency:values.currency:true:\'1.2-2\' }}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row > \n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{"SubTotal" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin>{{1*orderSummary.order.subtotal | currency:values.currency:true:\'1.2-2\' }}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row > \n\n          <ion-col width-50>\n\n            <ion-label no-margin>{{"Shipping" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-50 text-right>\n\n            <ion-label no-margin>{{orderSummary.order.shipping_methods}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row > \n\n          <ion-col width-50>\n\n            <ion-label no-margin>{{"PaymentMethod" |translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-50 text-right>\n\n            <ion-label no-margin>{{orderSummary.order.payment_details.method_title}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="order-total"> \n\n          <ion-col width-75>\n\n            <ion-label class="side-header">{{"Totals" |translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label>\n\n              <b>{{1*orderSummary.order.total | currency:values.currency:true:\'1.2-2\' }}\n\n              </b>\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="orderSummary">\n\n  <button ion-button full color="button-color" no-padding no-margin text-uppercase (click)="Continue()">\n\n    {{"Continue" | translate}}\n\n  </button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\checkout\order-summary\order-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], OrderSummary);
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_category_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Home = /** @class */ (function () {
    function Home(categoryService, toastCtrl, nav, service, values) {
        this.categoryService = categoryService;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.display = 'none';
        this.has_more_items = true;
        this.loading = true;
        this.showFilters = false;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.options = [];
        this.service.getProducts();
        this.filter = {};
        this.filter.page = 1;
    }
    Home.prototype.switchDisplay = function () {
        if (this.display === 'none') {
            this.display = "block";
        }
        else {
            this.display = "none";
        }
    };
    Home.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    Home.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    Home.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    Home.prototype.handleService = function (results) {
        //
    };
    Home.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
    };
    Home.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    Home.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    Home.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    Home.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    Home.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    Home.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    Home.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    Home.prototype.goto = function (data) {
        var _this = this;
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__post_post__["a" /* Post */], data.url);
        }
    };
    Home.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log(this.filter.page);
        this.filter.page += 1;
        this.service.loadMoreProvider(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Home.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Home.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], item);
    };
    Home.prototype.hideLoading = function () {
        this.loading = false;
    };
    Home.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    //Filter shit
    Home.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    Home.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    Home.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        console.log(this.filter.page);
        // FILTROS SHIT EN FUNCION
        if (sort == 5) {
            this.filter['orderby'] = 'menu_order';
        }
        else if (sort == 6) {
            this.filter['orderby'] = 'popularity';
        }
        else if (sort == 7) {
            this.filter['orderby'] = 'rating';
        }
        else if (sort == 8) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'asc';
        }
        else if (sort == 9) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'desc';
        }
        else if (sort == 10) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'asc';
        }
        else if (sort == 11) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'desc';
        }
        else if (sort == 12) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'asc';
        }
        else if (sort == 13) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'desc';
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
            this.filter['filter[meta_query][value]'] = '[0,10]';
            this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.categoryService.load(this.filter).then(function (results) { return (_this.service.products = results); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("homerTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Tabs"])
    ], Home.prototype, "homerTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], Home.prototype, "pageTop", void 0);
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\home\home.html"*/'<!-- <ion-header class="home-header">\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n       <img style="max-width: 200px;" src="{{values.avatar}}" />\n      {{"Providers" | translate}}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only color="icon-color" (click)="getFilter()">\n        <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n      </button>\n      <button ion-button icon-only color="icon-color" (click)="getSearch()">\n        <ion-icon color="icon-color" ios="ios-search" md="md-search"></ion-icon>\n      </button>\n      <button\n        ion-button\n        icon-only\n        color="icon-color"\n        class="has-icon icon-only has-badge"\n        (click)="getCart()"\n      >\n        <ion-icon\n          color="icon-color"\n          name="md-basket"\n          class="item-icon"\n        ></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count != 0">\n          {{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n    </ion-title>\n    <ion-buttons end>\n      <button\n        ion-button\n        icon-only\n        light\n        class="has-icon icon-only has-badge"\n        (click)="getCart()"\n      >\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n          {{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="home" #pageTop>\n\n  <ion-slides initialSlide="0" speed="3000" loop="false" pager="true" dir="rtl">\n    <ion-slide>\n      <div class="overlay">\n        <img src="{{values.slider}}" />\n      </div>\n      <div class="title-home-banner">\n        {{\'Proveedores de Servicios\' | translate}}\n      </div>\n\n      <div class="card-search">\n\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row>\n    <ion-col col-9>\n      <ion-searchbar class="searchbar-category" placeholder="Seleccionar Categoria"></ion-searchbar>\n    </ion-col>\n    <ion-col col-3 style="align-self: center;font-weight: bold;padding: 0;">\n\n      <button class="btn-filter" (click)="getFilter()">\n        <!-- <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon> -->\n        Filtrar<img src="../../assets/icon/filter.svg" alt="">\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="showFilters" class="filter">\n    <ion-list radio-group [(ngModel)]="sort" (ngModelChange)="chnageFilter(sort)">\n      <ion-list-header>\n        <b>\n          {{"Sort" | translate}}\n        </b>\n      </ion-list-header>\n      <ion-item>\n        <ion-label text-wrap>{{"Default" | translate}}</ion-label>\n        <ion-radio value="5"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by popularity" | translate}}</ion-label>\n        <ion-radio value="6"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by average rating" | translate}}</ion-label>\n        <ion-radio value="7"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by date: ASC" | translate}}</ion-label>\n        <ion-radio value="8"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by date: DESC" | translate}}</ion-label>\n        <ion-radio value="9"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by price: low to high" | translate}}</ion-label>\n        <ion-radio value="10"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by price: high to low" | translate}}</ion-label>\n        <ion-radio value="11"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by name: ASC" | translate}}</ion-label>\n        <ion-radio value="12"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by name: DESC" | translate}}</ion-label>\n        <ion-radio value="13"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button block color="button-color" (click)="cancel()">\n      {{"Cancel" | translate}}\n    </button>\n  </div>\n\n  <!-- <ion-fab bottom right slot="fixed">\n    <button ion-fab>\n      <ion-icon name="chatboxes"></ion-icon>\n    </button>\n    <ion-fab-list side="left">\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.messenger.com/t/thehexchange">\n        <ion-icon style="background: #2196f3;" name="custom-facebook"></ion-icon>\n      </a>\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.instagram.com/thehexchange/">\n        <ion-icon style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" name="custom-instagram"></ion-icon>\n      </a>\n    </ion-fab-list>\n  </ion-fab> -->\n\n  <ion-refresher\n    *ngIf="values.settings.pull_to_refresh == \'1\'"\n    (ionRefresh)="doRefresh($event)"\n  >\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-spinner *ngIf="!service?.blocks" name="crescent"></ion-spinner>\n\n  <div\n    *ngFor="let children of service?.blocks"\n    hideWhen="loading"\n    class="blocks"\n  >\n    <div\n      *ngIf="children.block_type == \'banner_block\'"\n      [style.background-color]="children.bg_color"\n      [style.margin]="children.margin"\n      [style.padding]="children.padding"\n      class="banner_block"\n    >\n      <div\n        class="{{children.header_align}}"\n        [style.color]="children.title_color"\n      >\n        {{children.title}}\n      </div>\n      <!-- Banner Slider -->\n      <div *ngIf="children.children.length && children.style == \'slider\'">\n        <ion-slides pager="true" loop="true" autoplay="5800">\n          <ion-slide *ngFor="let image of children.children">\n            <img\n              src="{{image.image}}"\n              (click)="goto(image)"\n              (load)="hideLoading()"\n              [style.border-radius]="children.border_radius"\n            />\n          </ion-slide>\n        </ion-slides>\n      </div>\n\n      <!-- Banner Scroll -->\n      <div\n        *ngIf="children.children.length && children.style == \'scroll\'"\n        [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n        class="floating-header banner-scroll"\n      >\n        <img\n          class="banner"\n          tappable\n          *ngFor="let image of children.children"\n          (load)="hideLoading()"\n          src="{{image.image}}"\n          (click)="goto(image)"\n          [style.border-radius]="children.border_radius"\n          [style.width.%]="children.child_width"\n        />\n      </div>\n\n      <!-- Banner Grid -->\n      <div\n        *ngIf="children.children.length && children.style == \'grid\'"\n        class="banner-grid"\n      >\n        <ion-row class="row unlimited-items">\n          <ion-col\n            *ngFor="let image of children.children"\n            (load)="hideLoading()"\n            [style.width.%]="children.child_width"\n          >\n            <img\n              src="{{image.image}}"\n              (click)="goto(image)"\n              [style.border-radius]="children.border_radius"\n              class="{{children.card_style}}"\n            />\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div\n      *ngIf="children.block_type == \'product_block\'"\n      [style.background-color]="children.bg_color"\n      [style.margin]="children.margin"\n      class="product-block"\n    >\n      <div\n        *ngIf="children.products"\n        class="{{children.header_align}}"\n        [style.color]="children.title_color"\n      >\n        {{children.title}}\n      </div>\n      <!-- Products Scroll -->\n      <div\n        *ngIf="children.products && children.style == \'scroll\'"\n        class="product-scroll"\n      >\n        <div\n          class="scroller"\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n        >\n          <a\n            *ngFor="let item of children.products"\n            [style.width.%]="children.child_width"\n          >\n            <ion-card>\n              <ion-card-content (click)="getProduct(item)">\n                <img\n                  [style.border-radius]="children.border_radius"\n                  src="{{item.images[0].src}}"\n                />\n              </ion-card-content>\n              <h5 *ngIf="item.title">{{item.title}}</h5>\n              <h5 *ngIf="item.name">{{item.name}}</h5>\n              <ion-label>\n                <span class="price-regular" *ngIf="!item.sale_price">\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n                </span>\n                <span class="price-regular" *ngIf="item.sale_price">\n                  {{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'\n                  }}\n                </span>\n                <span *ngIf="item.sale_price">\n                  <del>\n                    {{1*item.regular_price |\n                    currency:values.currency:symbol:\'1.2-2\' }}\n                  </del>\n                </span>\n              </ion-label>\n            </ion-card>\n          </a>\n        </div>\n      </div>\n      <!-- Products  Grid-->\n      <div\n        class="product-grid"\n        *ngIf="children.products && children.style == \'grid\'"\n      >\n        <ion-row class="row unlimited-items">\n          <ion-col class="col" *ngFor="let item of children.products">\n            <ion-card>\n              <ion-card-content>\n                <img\n                  [style.height.px]="values.dimensions.imageGridViewHeight"\n                  tappable\n                  src="{{item.images[0].src}}"\n                  (click)="getProduct(item)"\n                />\n                <button\n                  ion-button\n                  color="danger"\n                  class="stock"\n                  *ngIf="!item.in_stock"\n                >\n                  {{"No Stock" | translate}}\n                </button>\n                <ion-icon\n                  name="md-heart"\n                  color="icon-color"\n                  class="wishlist-button-grid1"\n                  *ngIf="values.wishlistId[item.id]"\n                  (click)="removeFromWishlist(item.id)"\n                ></ion-icon>\n                <ion-icon\n                  name="md-heart-outline"\n                  color="icon-color"\n                  class="wishlist-button-grid2"\n                  *ngIf="!values.wishlistId[item.id]"\n                  (click)="addToWishlist(item.id)"\n                ></ion-icon>\n\n                <div *ngIf="item.in_stock">\n                  <button\n                    ion-button\n                    class="offer"\n                    *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'"\n                  >\n                    {{(item.regular_price - item.price) /item.regular_price*100\n                    | number : \'1.0-0\'}}%\n                  </button>\n                </div>\n              </ion-card-content>\n\n              <div tappable (click)="getProduct(item)" class="card-name">\n                <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n                <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n              </div>\n\n              <ion-label>\n                <span class="price-regular" *ngIf="!item.sale_price">\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n                </span>\n                <span class="price-regular" *ngIf="item.sale_price">\n                  {{1*item.sale_price |\n                  currency:values.currency:symbol:\'1.2-2\'}}\n                </span>\n                <span class="price-delete" *ngIf="item.sale_price">\n                  <del>\n                    {{1*item.regular_price |\n                    currency:values.currency:symbol:\'1.2-2\'}}\n                  </del>\n                </span>\n              </ion-label>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <!--flash sale-->\n\n    <div\n      *ngIf="children.block_type == \'flash_sale_block\' && !children.hide"\n      [style.background-color]="children.bg_color"\n      [style.margin]="children.margin"\n      [style.padding]="children.padding"\n      class="product-block flash_sale"\n    >\n      <div\n        *ngIf="children.products"\n        class="{{children.header_align}}"\n        [style.color]="children.title_color"\n      >\n        <ion-item no-lines class="flash-item-name">\n          <h2 [style.color]="children.title_color">\n            <ion-icon\n              name="md-flash"\n              style="margin-right: 6px;font-size: 18px;"\n            ></ion-icon>\n            {{children.title}}\n          </h2>\n          <!--h4 [style.color]="children.title_color" style="filter: brightness(100%);">Ends in</h4-->\n          <div style="text-align: center;">\n            <h3 class="day"><span>{{children.days}}</span></h3>\n            :\n            <h3 class="day"><span>{{children.hours}}</span></h3>\n            :\n            <h3 class="day"><span>{{children.minutes}}</span></h3>\n            :\n            <h3 class="day"><span>{{children.seconds}}</span></h3>\n          </div>\n        </ion-item>\n      </div>\n\n      <!-- Products Scroll -->\n      <div\n        *ngIf="children.products && children.style == \'scroll\'"\n        class="product-scroll"\n      >\n        <div\n          class="scroller"\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n        >\n          <a\n            *ngFor="let item of children.products"\n            [style.width.%]="children.child_width"\n          >\n            <ion-card>\n              <ion-card-content (click)="getProduct(item)">\n                <img\n                  [style.height.px]="values.dimensions.productSliderHeight"\n                  [style.border-radius]="children.border_radius"\n                  src="{{item.images[0].src}}"\n                />\n              </ion-card-content>\n              <h5 *ngIf="item.title">{{item.title}}</h5>\n              <h5 *ngIf="item.name">{{item.name}}</h5>\n              <!-- <ion-label>\n                <span class="price-regular" *ngIf="!item.sale_price">\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n                </span>\n                <span class="price-regular" *ngIf="item.sale_price">\n                  {{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'\n                  }}\n                </span>\n                <span *ngIf="item.sale_price">\n                  <del>\n                    {{1*item.regular_price |\n                    currency:values.currency:symbol:\'1.2-2\' }}\n                  </del>\n                </span>\n              </ion-label> -->\n            </ion-card>\n          </a>\n        </div>\n      </div>\n      <!-- Products  Grid-->\n      <div\n        class="product-grid"\n        *ngIf="children.products && children.style == \'grid\'"\n      >\n        <ion-row class="row unlimited-items">\n          <ion-col\n            class="col"\n            *ngFor="let item of children.products"\n            [style.padding]="children.padding"\n          >\n            <ion-card>\n              <ion-card-content>\n                <img\n                  [style.height.px]="values.dimensions.imageGridViewHeight"\n                  tappable\n                  src="{{item.images[0].src}}"\n                  (click)="getProduct(item)"\n                />\n                <button\n                  ion-button\n                  color="danger"\n                  class="stock"\n                  *ngIf="item.stock_status == \'outofstock\'"\n                >\n                  {{"No Stock" | translate}}\n                </button>\n                <ion-icon\n                  name="md-heart"\n                  class="wishlist-button-grid1"\n                  *ngIf="values.wishlistId[item.id]"\n                  (click)="removeFromWishlist(item.id)"\n                ></ion-icon>\n                <ion-icon\n                  name="md-heart-outline"\n                  class="wishlist-button-grid2"\n                  *ngIf="!values.wishlistId[item.id]"\n                  (click)="addToWishlist(item.id)"\n                ></ion-icon>\n\n                <div *ngIf="item.stock_status == \'instock\'">\n                  <button\n                    ion-button\n                    class="offer"\n                    *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'"\n                  >\n                    {{(item.regular_price - item.price) /item.regular_price*100\n                    | number : \'1.0-0\'}}%\n                  </button>\n                </div>\n              </ion-card-content>\n\n              <div tappable (click)="getProduct(item)" class="card-name">\n                <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n                <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n              </div>\n\n              <!-- <ion-label>\n                <span class="price-regular" *ngIf="!item.sale_price">\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n                </span>\n                <span class="price-regular" *ngIf="item.sale_price">\n                  {{1*item.sale_price |\n                  currency:values.currency:symbol:\'1.2-2\'}}\n                </span>\n                <span class="price-delete" *ngIf="item.sale_price">\n                  <del>\n                    {{1*item.regular_price |\n                    currency:values.currency:symbol:\'1.2-2\'}}\n                  </del>\n                </span>\n              </ion-label> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div\n      *ngIf="children.block_type == \'category_block\'"\n      [style.background-color]="children.bg_color"\n      [style.margin]="children.margin"\n      [style.padding]="children.padding"\n      class="category"\n    >\n      <div\n        *ngIf="service?.categories"\n        class="{{children.header_align}}"\n        [style.color]="children.title_color"\n      >\n        {{children.title}}\n      </div>\n      <!-- Category Scroll -->\n      <div\n        *ngIf="service?.categories && children.style == \'scroll\'"\n        class="category-slider-scroll"\n      >\n        <div\n          class="scrollmenu2"\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n        >\n          <a\n            *ngFor="let item of getSubCategories(children.link_id)"\n            class="{{item.slug}}"\n            [style.width.%]="children.child_width"\n          >\n            <img\n              *ngIf="item.image?.src"\n              [style.border-radius]="children.border_radius"\n              (load)="hideLoading()"\n              src="{{item.image.src}}"\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n            />\n            <h5\n              *ngIf="item.image"\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n              [innerHTML]="item.name"\n            ></h5>\n            <div *ngIf="!item.image" class="no-image">\n              <h5\n                (click)="getCategory(item.id, item.slug, item.name, item.image)"\n                [innerHTML]="item.name"\n                [style.color]="children.title_color"\n              ></h5>\n            </div>\n          </a>\n        </div>\n      </div>\n\n      <!-- Category Grid -->\n      <div\n        *ngIf="service?.categories && children.style == \'grid\'"\n        class="category-slider-grid"\n      >\n        <ion-row class="row unlimited-items">\n          <ion-col\n            class="col {{item.slug}}"\n            *ngFor="let item of getSubCategories(children.link_id)"\n            [style.width.%]="children.child_width"\n          >\n            <div\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n            >\n              <ion-card>\n                <ion-card-content>\n                  <img\n                    *ngIf="item.image"\n                    (load)="hideLoading()"\n                    [style.border-radius]="children.border_radius"\n                    src="{{item.image}}"\n                  />\n                </ion-card-content>\n                <div text-center>\n                  <ion-label\n                    text-uppercase\n                    [innerHTML]="item.name"\n                    [style.color]="children.title_color"\n                  ></ion-label>\n                </div>\n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n  <!--div *ngIf="service?.categories" style="margin-bottom: 10px;">\n\n    <div *ngIf="service.mainCategories" class="main-categories">\n      <ion-row class="row unlimited-items">\n        <ion-col class="col" *ngFor="let item of service.mainCategories">\n          <a (click)="getCategory(item.id, item.slug, item.name)">\n            <ion-card>\n              <ion-card-content>\n                <img src="{{item.image}}"/>\n              </ion-card-content>\n              <div text-center>\n                <ion-label text-uppercase><span [innerHTML]="item.name"></span>\n                </ion-label>\n              </div>\n            </ion-card>\n          </a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div-->\n  <div *ngIf="!showFilters">\n  <div class="products-listing">\n    <div *ngIf="service?.products">\n      <!--ion-item no-lines class="item-name">\n            <ion-label text-uppercase><b>{{"Products" | translate}}</b>\n            </ion-label>\n          </ion-item-->\n      <ion-list>\n        <div class="card-background-page grid">\n          <ion-row class="row unlimited-items">\n            <ion-col class="col" *ngFor="let item of service.products">\n              <ion-card>\n                <ion-card-content class="stock">\n                  <img\n                    [style.height.px]="values.dimensions.imageGridViewHeight * 2 - 200"\n                    tappable\n                    src="{{item.images[0].src}}"\n                    (load)="hideLoading()"\n                    (click)="getProduct(item)"\n                  />\n                  <button\n                    ion-button\n                    color="danger"\n                    *ngIf="item.stock_status !== \'instock\'"\n                  >\n                    {{"OUTOFSTOCK" | translate}}\n                  </button>\n\n                  <ion-icon\n                    name="md-heart"\n                    color="icon-color"\n                    class="wishlist-button-grid"\n                    *ngIf="values.wishlistId[item.id]"\n                    (click)="removeFromWishlist(item.id)"\n                  ></ion-icon>\n                  <ion-icon\n                    name="md-heart-outline"\n                    color="icon-color"\n                    class="wishlist-button-grid"\n                    *ngIf="!values.wishlistId[item.id]"\n                    (click)="addToWishlist(item.id)"\n                  ></ion-icon>\n                </ion-card-content>\n                <div tappable (click)="getProduct(item)" class="card-name">\n                  <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n                  <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n                </div>\n                <!-- <ion-item>\n                  <button ion-button (click)="switchDisplay()">Ver Categorías</button>\n                </ion-item> -->\n                  <ion-item class="categoria-item">\n\n                    <!-- <p>\n                      <span *ngFor="let c of item.categories">\n                        <span *ngIf="c.slug == \'servicio-limpieza\'" >\n                          <img class="img" src="{{values.limpieza}}" alt="{{c.name}}" > {{c.name}}\n                        </span>\n                        <span *ngIf="c.slug == \'servicio-de-cuido-de-ninos\'">\n                          <img class="img"src="{{values.cuido}}" alt="{{c.name}}" > {{c.name}}\n                        </span>\n                        <span *ngIf="c.slug == \'servicio-planchado\'" >\n                          <img class="img" src="{{values.planchado}}" alt="{{c.name}}" > {{c.name}}\n                        </span>\n                        <span *ngIf="c.slug == \'servicio-camarero\'" >\n                          <img class="img" src="{{values.camarero}}" alt="{{c.name}}" > {{c.name}}\n                        </span>\n                      </span>\n                    </p> -->\n\n                    <!-- <p *ngFor="let c of item.categories" [ngStyle]="{\'display\':display}">\n                      <span *ngIf="c.slug == \'servicio-limpieza\'">\n                        <img class="img" src="{{values.limpieza}}" alt="{{c.name}}" > {{c.name}}\n                      </span>\n                      <span *ngIf="c.slug == \'servicio-de-cuido-de-ninos\'">\n                        <img class="img"src="{{values.cuido}}" alt="{{c.name}}" > {{c.name}}\n                      </span>\n                      <span *ngIf="c.slug == \'servicio-planchado\'">\n                        <img class="img" src="{{values.planchado}}" alt="{{c.name}}" > {{c.name}}\n                      </span>\n                      <span *ngIf="c.slug == \'servicio-camarero\'">\n                        <img class="img" src="{{values.camarero}}" alt="{{c.name}}" > {{c.name}}\n                      </span>\n                    </p> -->\n\n                    <!-- <span *ngFor="let c of item.categories" [ngStyle]="{\'display\':display}">\n                      <span style="border:1px solid red; display: flex;">\n                        <span style="width: 10%;">\n                          <span *ngIf="c.slug == \'servicio-limpieza\'">\n                            <img class="img" src="{{values.limpieza}}" alt="{{c.name}}" >\n                          </span>\n                          <span *ngIf="c.slug == \'servicio-de-cuido-de-ninos\'">\n                            <img class="img"src="{{values.cuido}}" alt="{{c.name}}" >\n                          </span>\n                          <span *ngIf="c.slug == \'servicio-planchado\'">\n                            <img class="img" src="{{values.planchado}}" alt="{{c.name}}" >\n                          </span>\n                          <span *ngIf="c.slug == \'servicio-camarero\'">\n                            <img class="img" src="{{values.camarero}}" alt="{{c.name}}" >\n                          </span>\n                        </span>\n                        <span>\n                          <span  style="font-size: 9px;">\n                            {{c.name}}\n                          </span>\n                        </span>\n                      </span>\n                    </span> -->\n\n                  </ion-item>\n                <!-- <ion-item no-padding class="price-list">\n                  <h3 class="price-regular" *ngIf="item.minPrice">\n                    Starting from {{1*item.minPrice |\n                    currency:values.currency:true:\'1.2-2\'}}\n                  </h3>\n                </ion-item> -->\n                <ion-item no-padding class="price-list">\n                  <span item-left *ngIf="item.average_rating" class="rating">\n                    <!-- <span *ngIf="item.rating_count > 0">\n                      ({{item.rating_count}})\n                    </span> -->\n                    <span\n                      class="star-icon"\n                      [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}"\n                    >\n                      &#x2605;\n                    </span>\n                    <span\n                      class="star-icon"\n                      [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}"\n                    >\n                      &#x2605;\n                    </span>\n                    <span\n                      class="star-icon"\n                      [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}"\n                    >\n                      &#x2605;\n                    </span>\n                    <span\n                      class="star-icon"\n                      [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}"\n                    >\n                      &#x2605;\n                    </span>\n                    <span\n                      class="star-icon"\n                      [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}"\n                    >\n                      &#x2605;\n                    </span>\n                  </span>\n                </ion-item>\n\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-list>\n    </div>\n  </div>\n  </div>\n   <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n            <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items...\' | translate}}"> </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistPage = /** @class */ (function () {
    function WishlistPage(nav, values, params, functions, service) {
        this.nav = nav;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.service = service;
    }
    WishlistPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    WishlistPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
    };
    WishlistPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.service.deleteItem(id)
            .then(function (results) { return _this.updateWish(results, id); });
    };
    WishlistPage.prototype.updateWish = function (results, id) {
        var _this = this;
        if (results.status == "success") {
            this.service.loadWishlist()
                .then(function (results) { return _this.wishlist = results; });
            this.values.wishlistId.splice(id, 0);
        }
    };
    WishlistPage.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    WishlistPage.prototype.addToCart = function (item, id, type) {
        var _this = this;
        console.log({ item: item });
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], id);
        }
        else {
            this.service.addToCart(id)
                .then(function (results) { return _this.updateCart(results, id); });
        }
    };
    WishlistPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], id);
    };
    WishlistPage.prototype.updateCart = function (results, id) {
        var _this = this;
        if (results.error) {
            this.functions.showAlert("ERROR", "Unable to add to Wishlist");
        }
        else {
            this.service.deleteItem(id)
                .then(function (results) { return _this.updateWishlist(results); });
        }
    };
    WishlistPage.prototype.updateWishlist = function (results) {
        var _this = this;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
        this.functions.showAlert("SUCCESS", "Item has been added to cart");
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\wishlist\wishlist.html"*/'<!-- Header -->\n<ion-header>\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img (click)="gohome();"  src="{{values.avatar}}" />\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n          {{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="wishlistPage">\n  <div *ngIf="wishlist?.error" class="margin">\n    <h2>{{"Your wishlist is empty!" | translate}}</h2>\n  </div>\n\n  <div *ngIf="wishlist">\n    <div *ngIf="wishlist.length">\n\n      <div *ngFor="let item of wishlist | keys" class="wish-list">\n\n        <ion-item no-lines>\n          <ion-thumbnail item-left>\n            <img src="{{item.value.image_thumb}}" />\n          </ion-thumbnail>\n\n          <h2 wrap-text>{{item.value.name}}</h2>\n          <h3 wrap-text>\n            {{"Price" | translate}}: {{item.value.price |\n            currency:values.currency:true:\'1.2-2\'}}\n          </h3>\n\n          <ion-row class="add-remove-button">\n            <ion-col royal width-50>\n              <button ion-button full color="red" clear text-uppercase no-padding item-left no-margin\n                (click)="removeFromWishlist(item.value.id)">\n                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n                ELIMINAR\n              </button>\n            </ion-col>\n            <ion-col royal width-50>\n              <button class="btn-solicitar" style="font-weight: bold;" ion-button item-center medium\n                color="button-color" text-uppercase item-right (click)="getProduct(item.value.id)">\n                <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n                SOLICITAR\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\wishlist\wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__["a" /* WishlistService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_address_form_edit_address_form__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountPage = /** @class */ (function () {
    function AccountPage(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getCustomer()
            .then(function (results) { return _this.customers = results; });
        this.service.getAddress()
            .then(function (resultsAddresses) { return _this.addresses = resultsAddresses; });
    }
    AccountPage.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses.customer);
    };
    AccountPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    AccountPage.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    AccountPage.prototype.checkAvatar = function () {
        return this.service.checkAvatar();
    };
    AccountPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* AccountLogin */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\account\account.html"*/'<!-- Header -->\n<ion-header>\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img (click)="gohome();"  src="{{values.avatar}}" />\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n          {{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen="true" slot="fixed">\n\n  <ion-spinner *ngIf="!customers" name="crescent"\n    style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px"></ion-spinner>\n\n  <div *ngIf="customers" class="customer">\n    <div *ngIf="customers.customer.billing_address">\n      <div class="card">\n        <div class="header">\n          <div class="avatar" *ngIf="checkAvatar()==\'false\'">\n            <img src="../../../assets/image/avatar40x40.png" alt="">\n          </div>\n          <div class="avatar" *ngIf="checkAvatar()!=\'false\'">\n            <img src="{{customers.customer.avatar_url}}" />\n          </div>\n        </div>\n        <div class="card-body">\n          <div class="user-meta ion-text-center">\n            <h3 class="playername"> {{customers.customer.billing_address.first_name}}\n              {{customers.customer.billing_address.last_name}}<br *ngIf="customers.customer.billing_address.first_name">\n            </h3>\n            <h5 class="country">{{customers.customer.role}}</h5>\n\n          </div>\n        </div>\n      </div>\n\n      <ion-card>\n        <ion-card-header>\n          {{"Home Address" | translate}}\n        </ion-card-header>\n        <ion-card-content style="margin-top: 10px">\n          <img width="40" src="../../../assets/image/house.png" alt="">\n          <div>\n            <h5>{{customers.customer.billing_address.first_name}} {{customers.customer.billing_address.last_name}}<br\n              *ngIf="customers.customer.billing_address.first_name"></h5>\n            <p>{{customers.customer.billing_address.address_1}}<br *ngIf="customers.customer.billing_address.address_1">\n              {{customers.customer.billing_address.address_2}}<br *ngIf="customers.customer.billing_address.address_2">\n              {{customers.customer.billing_address.city}} {{customers.customer.billing_address.state}}<br\n                *ngIf="customers.customer.billing_address.city">\n              {{customers.customer.billing_address.phone}}<br *ngIf="customers.customer.billing_address.phone">\n              {{customers.customer.billing_address.email}}<br *ngIf="customers.customer.billing_address.email">\n              {{customers.customer.billing_address.country}} {{customers.customer.billing_address.postcode}}<br\n                *ngIf="customers.customer.billing_address.postcode"></p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <div *ngIf="customers.customer.shipping_address">\n        <ion-card style="margin-bottom: 20px;">\n          <ion-card-header >\n            {{"BillingAddress" | translate}}\n          </ion-card-header>\n          <ion-card-content style="margin-top: 10px">\n            <img src="../../../assets/image/package.png" alt="">\n            <div>\n              <h5>{{customers.customer.shipping_address.first_name}} {{customers.customer.shipping_address.last_name}}<br\n              *ngIf="customers.customer.shipping_address.first_name"></h5>\n              <p>{{customers.customer.shipping_address.address_1}}<br *ngIf="customers.customer.shipping_address.address_1">\n                {{customers.customer.shipping_address.address_2}}<br *ngIf="customers.customer.shipping_address.address_2">\n                {{customers.customer.shipping_address.city}} {{customers.customer.shipping_address.state}}<br\n                  *ngIf="customers.customer.shipping_address.city">\n                {{customers.customer.shipping_address.phone}}<br *ngIf="customers.customer.shipping_address.phone">\n                {{customers.customer.shipping_address.email}}<br *ngIf="customers.customer.shipping_address.email">\n                {{customers.customer.shipping_address.country}} {{customers.customer.shipping_address.postcode}}<br></p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n      <div class="button-margin">\n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase (click)="editAddress()">{{"EditAddress" | translate}}</button>\n     </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAddressForm = /** @class */ (function () {
    function EditAddressForm(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping = true;
        this.service.getCountry()
            .then(function (results) { return _this.handleContries(results); });
    }
    EditAddressForm.prototype.handleContries = function (results) {
        this.country = results;
        this.billing_states = this.country.state[this.editAddress.billing_address.country];
        this.shipping_states = this.country.state[this.editAddress.shipping_address.country];
    };
    EditAddressForm.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress.shipping) {
            this.editAddress.shipping_address.first_name = this.editAddress.billing_address.first_name;
            this.editAddress.shipping_address.last_name = this.editAddress.billing_address.last_name;
            this.editAddress.shipping_address.company = this.editAddress.billing_address.company;
            this.editAddress.shipping_address.address_1 = this.editAddress.billing_address.address_1;
            this.editAddress.shipping_address.address_2 = this.editAddress.billing_address.address_2;
            this.editAddress.shipping_address.city = this.editAddress.billing_address.city;
            this.editAddress.shipping_address.country = this.editAddress.billing_address.country;
            this.editAddress.shipping_address.state = this.editAddress.billing_address.state;
            this.editAddress.shipping_address.postcode = this.editAddress.billing_address.postcode;
        }
        this.service.saveAddress(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditAddressForm.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving...";
        this.nav.pop();
    };
    EditAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\edit-address-form\edit-address-form.html"*/'<ion-header no-border>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Edit Address" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="edit-address-form">\n\n  <div>\n\n    <ion-list>\n\n      <ion-item class="side-heading-background">\n\n        <h2 class="heading-label">{{"Billing Address" | translate}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"First Name" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.first_name" name="first_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Last Name"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.last_name" name="last_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <!--ion-item>\n\n        <ion-label floating>{{"Company" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.company" name="company">\n\n        </ion-input>\n\n      </ion-item-->\n\n      <ion-item>\n\n        <ion-label floating>{{"Phone" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.phone" name="phone">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Email" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="email" [(ngModel)]="editAddress.billing_address.email" name="email">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 1\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.address_1" name="address_1">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 2\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.address_2" name="address_2">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"City" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.city" name="city">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="country">\n\n        <ion-label>  \n\n          {{"Country" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.billing_address.country" (ngModelChange)="getBillingRegion(editAddress.billing_address.country)" name="country">\n\n          <div *ngFor="let field of country.country.countries | keys">\n\n            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="billing_states">\n\n        <ion-label>  \n\n          {{"State" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.billing_address.state" name="state">\n\n          <div *ngFor="let field of billing_states | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>      \n\n      </ion-item>\n\n      <ion-item *ngIf="!billing_states">\n\n        <ion-label floating>{{"Country" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.state" name="state">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Postcode" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.postcode" name="postcode">\n\n        </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <ion-item class="side-heading-background">\n\n    <ion-label class="heading-label">{{"Same For Shipping" | translate}}\n\n    </ion-label>\n\n    <ion-toggle checked="true" [(ngModel)]="editAddress.shipping_true" name="subscribe">\n\n    </ion-toggle>\n\n  </ion-item>\n\n  <br>\n\n  <div *ngIf="!editAddress.shipping_true">\n\n    <ion-list>\n\n      <ion-item class="side-heading-background">\n\n        <h2 class="heading-label">{{"Shipping Address" | translate}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"First Name" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.first_name" name="firstname">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Last Name"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.last_name" name="last_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Company" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.company" name="company">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 1\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.address_1" name="address_1">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 2\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.address_2" name="address_2">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"City" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.city" name="city">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="country">\n\n        <ion-label>  \n\n          {{"Country" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.shipping_address.country" (ngModelChange)="getShippingRegion(editAddress.shipping_address.country)" name="country">\n\n          <div *ngFor="let field of country.country.countries | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="shipping_states">\n\n        <ion-label>  \n\n          {{"State" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.shipping_address.state" name="state">\n\n          <div *ngFor="let field of shipping_states | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>      \n\n      </ion-item>\n\n      <ion-item *ngIf="!shipping_states">\n\n        <ion-label floating>{{"Country" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.state" name="state">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Postcode" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.postcode" name="postcode">\n\n        </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="margin">\n\n    <button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\edit-address-form\edit-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], EditAddressForm);
    return EditAddressForm;
}());

//# sourceMappingURL=edit-address-form.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_functions__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Service = /** @class */ (function () {
    function Service(reqhttp, http, config, values, loadingCtrl, nativeStorage, functions) {
        this.reqhttp = reqhttp;
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.functions = functions;
        this.product_slot = [];
        this.header = new Headers();
        this.dir = 'left';
        this.filter = {};
        this.has_more_items = true;
        this.blocks = [];
        this.dataSearchProduct = [];
        this.mainCategories = [];
        this.filter.page = 1;
    }
    Service.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.values.data = data;
                _this.values.settings = data.settings;
                _this.blocks = data.blocks;
                var _loop_1 = function (item) {
                    if (_this.blocks[item].block_type == 'product_block') {
                        if (_this.blocks[item].filter_by == 'tag')
                            filter = { tag: _this.blocks[item].link_id, status: 'publish' };
                        else
                            filter = {
                                category: _this.blocks[item].link_id,
                                status: 'publish',
                            };
                        _this.http
                            .get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/?', filter))
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            _this.blocks[item].products = data;
                        });
                    }
                    if (_this.blocks[item].block_type == 'flash_sale_block') {
                        if (_this.blocks[item].filter_by == 'tag')
                            filter = { tag: _this.blocks[item].link_id, status: 'publish' };
                        else
                            filter = {
                                category: _this.blocks[item].link_id,
                                status: 'publish',
                            };
                        _this.http
                            .get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/?', filter))
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            _this.blocks[item].products = data;
                        });
                        _this.blocks[item].interval = setInterval(function () {
                            var countDownDate = new Date(_this.blocks[item].sale_ends).getTime();
                            var now = new Date().getTime();
                            var distance = countDownDate - now;
                            _this.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            _this.blocks[item].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            _this.blocks[item].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            _this.blocks[item].seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            if (distance < 0) {
                                clearInterval(_this.blocks[item].interval);
                                _this.blocks[item].hide = true;
                            }
                        }, 1000);
                    }
                };
                var filter;
                for (var item in _this.blocks) {
                    _loop_1(item);
                }
                _this.values.currency = data.currency;
                _this.login_nonce = data.login_nonce;
                if (data.user && data.user.data != undefined) {
                    _this.values.isLoggedIn = data.user.data.status;
                    _this.values.customerId = data.user.data.ID;
                    _this.values.customerName = data.user.data.display_name;
                    //this.values.avatar = data.user.data.avatar_url;
                    _this.values.logoutUrl = _this.encodeUrl(data.user.data.url);
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                        }
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'woo') {
                            _this.login(data);
                        }
                        else if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                        }
                    }, function (error) { return console.error(error); });
                }
                _this.nativeStorage.setItem('blocks', data).then(function (data) { return console.log('Saved'); }, function (error) { return console.error(error); });
                _this.getCategories(1);
                _this.nativeStorage.getItem('loginData').then(function (data) { return _this.login(data); }, function (error) { return console.error(error); });
                _this.http
                    .get(_this.config.url +
                    '/wp-admin/admin-ajax.php?action=mstoreapp-cart')
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.cart = data;
                    _this.values.cartNonce = data.cart_nonce;
                    _this.values.updateCart(_this.cart);
                });
                resolve(true);
            });
        });
    };
    Service.prototype.getCategories = function (page) {
        var _this = this;
        this.http
            .get(this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', {
            per_page: 100,
            page: page,
        }))
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (page == 1)
                _this.categories = data;
            else {
                _this.categories.push.apply(_this.categories, data);
            }
            if (data.length == 100)
                _this.getCategories(page + 1);
            else {
                _this.categories = _this.categories.filter(function (item) { return item.name !== 'Uncategorized'; });
                _this.mainCategories = _this.categories.filter(function (item) { return item.parent === 0; });
                _this.nativeStorage.setItem('categories', _this.categories).then(function (data) { return console.log('Saved'); }, function (error) { return console.error(error); });
            }
        });
    };
    Service.prototype.getNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getNonceResendKey = function (username) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('username', username);
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce&' + params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.login = function (loginData) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('username', loginData.username);
        params.append('password', encodeURIComponent(loginData.password));
        params.append('_wpnonce', this.login_nonce);
        params.append('login', 'Login');
        params.append('redirect', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('data login 1 : ', data);
                if (!data.errors) {
                    console.log('data login : ', data);
                    _this.values.isLoggedIn = data.data.status;
                    _this.values.customerName = data.data.display_name;
                    _this.values.customerId = data.data.ID;
                    _this.values.logoutUrl = _this.encodeUrl(data.data.url);
                    console.log(_this.values.logoutUrl);
                    //this.values.vendor = data.allcaps.vendor
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append('customer_id', _this.values.customerId.toString());
                    _this.http
                        .post(_this.config.url +
                        '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append('customer_id', _this.values.customerId.toString());
                    _this.http
                        .post(_this.config.url +
                        '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        console.log(data);
                    });
                    _this.nativeStorage
                        .setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password,
                    })
                        .then(function (data) { return console.log('Login Details Stored'); }, function (error) { return console.error(error); });
                }
                resolve(data);
            }, function (err) {
                resolve(JSON.parse(err._body));
            });
        });
    };
    Service.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    Service.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', 
            // this.values.logoutUrl + '&redirect_to=http://localhost:8100',
            _this.config.options)
                .subscribe(function (data) {
                console.log('data sesion:' + data);
                _this.values.isLoggedIn = false;
                _this.values.customerName = '';
                _this.nativeStorage.setItem('loginData', {}).then(function (data) { return console.log('Login Data cleared'); }, function (error) { return console.error(error); });
                _this.http
                    .get(_this.config.url +
                    '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                });
                resolve(_this.cart);
            });
        });
    };
    Service.prototype.passwordreset = function (email, nonce, url) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('user_login', email);
        params.append('wc_reset_password', 'true');
        params.append('_wpnonce', nonce);
        params.append('_wp_http_referer', '/my-account/lost-password/');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/my-account/lost-password/', params)
                .subscribe(function (status) {
                resolve(status);
            });
        });
    };
    Service.prototype.getMessage = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.header.append('Content-Type', 'application/json');
            _this.http
                .post(_this.config.urlApi + '/message/getmessages', {
                'roomName': data.roomName
            }, _this.header)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.passwordResetNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.resendKey = function (usernameKey, nonceKey) {
        var _this = this;
        console.log(nonceKey);
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/my-account/?action=resend_key&user_login=' + usernameKey + '&nonce=' + nonceKey + '')
                .map(function (res) { return res; })
                .subscribe(function (data) {
                resolve(data);
                if (data.statusText == "OK")
                    _this.functions.showAlert("SUCCESS", "Check email for new verification link. ");
                else
                    _this.functions.showAlert("ERROR", "an error has occurred please check. ");
            });
        });
    };
    Service.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/customers/' + _this.values.customerId + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.getCustomer = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/customers/' + _this.values.customerId + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.customer = data;
                resolve(_this.customer);
            });
        });
    };
    Service.prototype.checkAvatar = function () {
        var result = '';
        if (this.values.customerId != null) {
            if (this.customer.customer.avatar_url.indexOf('8ab2424adb5aafd0f6fc73775cd77668') != -1) {
                result = 'avatar';
            }
            else if (this.customer.customer.avatar_url.indexOf('8ab2424adb5aafd0f6fc73775cd77668') == -1) {
                result = 'image';
            }
        }
        else
            result = 'false';
        return result;
    };
    Service.prototype.saveAddress = function (address) {
        var _this = this;
        var params = {
            customer: address,
        };
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp
                .put(_this.config.setUrl('PUT', '/wc-api/v3/customers/' + _this.values.customerId + '?', false), params, {})
                .then(function (data) {
                resolve(JSON.parse(data.data));
            });
        });
    };
    Service.prototype.pushNotification = function (notification) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('device_id', notification.device_id);
        params.append('platform', notification.platform);
        params.append('email', notification.email);
        params.append('city', notification.city);
        params.append('state', notification.state);
        params.append('country', notification.country);
        params.append('pincode', notification.pincode);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.pushNotify = function (deviceId, platform) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('device_id', deviceId);
        params.append('platform', platform);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/orders/' + id + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getBooking = function (idOrder, idVendor) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/custom-api/v1/get_vendor_order?id_vendor=' + idVendor + '&id=' + idOrder + '&', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.country = data;
                resolve(_this.country);
            });
        });
    };
    Service.prototype.registerCustomer = function (customer) {
        var _this = this;
        var params = {
            customer: customer,
        };
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.setUrl('POST', '/wc-api/v3/customers?', false), params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.user = data;
                resolve(_this.user);
            }, function (err) {
                resolve(err.json());
            });
        });
    };
    Service.prototype.getOrders = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/orders?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.getOrdersVendor = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/custom-api/v1/get_vendor_orders?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.getBookingsVendor = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/custom-api/v1/get_vendor_orders?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.updateOrder = function (data, id) {
        var _this = this;
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp
                .put(_this.config.setUrl('PUT', '/wc-api/v3/orders/' + id + '?', false), data, {})
                .then(function (data) {
                _this.status = JSON.parse(data.data);
                resolve(_this.status);
            }, function (err) {
                console.log(JSON.parse(err.error));
                resolve(JSON.parse(err.error));
            });
        });
    };
    Service.prototype.presentLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    Service.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Service.prototype.getPage = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('page_id', id);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getProducts = function () {
        var _this = this;
        this.http
            .get(this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', false), this.config.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.products = data;
            var _loop_2 = function (index) {
                var element = _this.products[index];
                var resources = element.resource_block_costs;
                var prices = new Array();
                for (var key in resources) {
                    prices = prices.concat([resources[key]]);
                }
                if (Object.keys(resources).length) {
                    var minPrice_1 = Math.min.apply(Math, prices);
                    _this.products.map(function (element) {
                        return (element.minPrice = minPrice_1);
                    });
                }
            };
            for (var index = 0; index < _this.products.length; index++) {
                _loop_2(index);
            }
        });
    };
    Service.prototype.loadMore = function () {
        var _this = this;
        this.filter.page += 1;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', _this.filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.handleMore(data);
                resolve(true);
            });
        });
    };
    Service.prototype.loadMoreProvider = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.handleMore(data);
                resolve(true);
            });
        });
    };
    Service.prototype.handleMore = function (results) {
        console.log(results.length);
        // if (results.products == undefined) {
        //   console.log('No hay mas productos que mostrar...', results.products)
        //   this.has_more_items = false
        //   return
        // }
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
    };
    Service.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('product_id', id);
            params.append('customer_id', _this.values.customerId.toString());
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('product_id', id);
        params.append('customer_id', this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.subscribeNotification = function (data) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('onesignal_user_id', data.userId);
        params.append('onesignal_push_token', data.pushToken);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-update_user_notification', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getLocationFromProduct3 = function (min_date, max_date, filter) {
        var _this = this;
        var urlPath = 'https://websockethomer.herokuapp.com/api/v1';
        return new Promise(function (resolve) {
            _this.header.append('Content-Type', 'application/json');
            _this.http
                .get(_this.config.setUrl('GET', "/wp-json/wc-bookings/v1/products/slots?min_date=" + min_date + "&max_date=" + max_date + "&", null), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                _this.dataSearchProduct = _this.status;
                _this.includeProduct = '';
                if (_this.dataSearchProduct === undefined || _this.dataSearchProduct.length == 0) {
                    _this.includeProduct = '0';
                }
                else {
                    for (var key in _this.dataSearchProduct.records) {
                        var product = _this.dataSearchProduct.records[key];
                        if (product.available != 1) {
                            break;
                        }
                        else {
                            _this.product_slot.push({
                                date: product.date,
                                product_id: product.product_id
                            });
                            _this.includeProduct += product.product_id + ',';
                        }
                        // this.includeProduct.split(",")
                        // if(!this.includeProduct.includes(product.product_id)){
                        // }
                    }
                    resolve({ includeProduct: _this.includeProduct, product_slot: _this.product_slot });
                }
            });
        });
    };
    // getLocationFromProduct2(lat, long, radius) {
    //   let urlPath = 'https://websockethomer.herokuapp.com/api/v1'
    //   return new Promise(resolve => {
    //     this.header.append('Content-Type', 'application/json');
    //     this.http
    //       .post(
    //         urlPath +
    //         '/search',
    //        {
    //         "lat":lat,
    //         "lng":long,
    //         "distance":radius
    //        },
    //        this.header
    //       )
    //       .map(res => res.json())
    //       .subscribe(data => {
    //         this.status = data;
    //         this.dataSearchProduct = this.status.data;
    //         this.includeProduct = '';
    //         if (this.dataSearchProduct === undefined || this.dataSearchProduct.length == 0) {
    //           this.includeProduct = '0';
    //         }else{
    //           for (let i = 0; i < this.dataSearchProduct.length; i++) {
    //             let product = this.dataSearchProduct[i]
    //             this.values.homerOneSignal.push({product:product.ui,providerOneSignal:this.dataSearchProduct[i].onesignal})
    //             this.includeProduct += product.ui + ',';
    //           }
    //            this.includeProduct = this.includeProduct.slice(0, -1);
    //         }
    //         resolve(this.includeProduct)
    //       })
    //   })
    // }
    Service.prototype.getHomerOneSignal = function (product) {
        var _this = this;
        var urlPath = 'https://websockethomer.herokuapp.com/api/v1';
        return new Promise(function (resolve) {
            _this.header.append('Content-Type', 'application/json');
            _this.http
                .post(urlPath +
                '/provider/getonesignal', {
                "product": product
            }, _this.header)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getLocationFromProduct = function (lat, long, radius) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('latitude', lat);
        params.append('longitude', long);
        params.append('use_radius', 'on');
        params.append('radius', radius);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-geolocation_process', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log('data:', _this.status.data);
                _this.dataSearchProduct = _this.status.data;
                _this.includeProduct = '';
                if (_this.dataSearchProduct === undefined || _this.dataSearchProduct.length == 0) {
                    _this.includeProduct = '0';
                }
                else {
                    for (var key in _this.dataSearchProduct) {
                        var prices = _this.dataSearchProduct[key];
                        _this.includeProduct += prices.ID + ',';
                    }
                    _this.includeProduct = _this.includeProduct.slice(0, -1);
                }
                resolve(_this.includeProduct);
            });
        });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_service_functions__["a" /* Functions */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_socket_io__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatPage = /** @class */ (function () {
    function ChatPage(socket, toastCtrl, alertCtrl, formBuilder, values, navParams, service) {
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.values = values;
        this.navParams = navParams;
        this.service = service;
        this.messages = [];
        this.nickname = '';
        this.roomName = '';
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('')
        });
        this.chatBox = '';
        this.nickname = this.values.customerName;
        this.roomName = this.navParams.get('order');
        console.log("name" + this.nickname, "roomName" + this.roomName);
    }
    ChatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.socket.connect();
        this.socket.emit('set-nickname', { "userName": this.nickname, "roomName": this.roomName });
        this.getMessages().subscribe(function (message) {
            console.log("mensaje", message);
            console.log("mensajes", _this.messages);
            _this.messages.push(message);
            _this.scrollToBottom();
        });
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            // if (data['event'] === 'left') {
            //   this.showToast('User left: ' + user);
            // } else {
            //   this.showToast('User joined: ' + user);
            // }
        });
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.getMessage({ roomName: this.roomName }).then(function (chat) {
            for (var _i = 0, _a = chat.data; _i < _a.length; _i++) {
                var message = _a[_i];
                _this.messages.push(message);
            }
        });
        this.scrollToBottom();
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.sendMessage = function (message) {
        if (!message || message === '')
            return;
        this.socket.emit('add-message', { "text": message, "roomName": this.roomName });
        this.chatBox = '';
    };
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                console.log('users', data);
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    ChatPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatPage.prototype.presentPrompt = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Nickname',
                inputs: [
                    {
                        name: 'nickname',
                        placeholder: 'doretta'
                    }
                ],
                buttons: [
                    {
                        text: 'Random',
                        role: 'cancel',
                        handler: function (data) {
                            resolve('random_' + Math.round(Math.random() * 100));
                        }
                    },
                    {
                        text: 'Go on',
                        handler: function (data) {
                            resolve(data.nickname);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\chat\chat.html"*/'<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title >\n          <img  style="max-width: 150px;" src="{{values.avatar}}" />\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor="let message of messages" class="message-wrapper">\n    <div>\n      <!-- <img class="profile-pic" [ngClass]="{\'left\':nickname !== message.from, \'right\':nickname === message.from}" src="https://dev.digitalfactory.tech/demos/homer/wp-content/uploads/2020/06/unnamed-7.png"\n      /> -->\n      <!--  wave-->\n      <div class="chat-bubble" [ngClass]="{\'left\':nickname !== message.from, \'right\':nickname === message.from, \'slide-left\': nickname !== message.from, \'slide-right\':nickname === message.from}">\n\n        <div class="message" [innerHTML]="message.text" autolinker>\n        </div>\n\n        <div class="message-detail">\n          <span class="bold">{{message.from}}</span>,\n          <span>{{message.created | date:\'dd/MM hh:MM\'}}</span>\n        </div>\n\n      </div>\n    </div>\n\n    <div class="cf"></div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <form [formGroup]="messageForm" (submit)="sendMessage(chatBox)" novalidate>\n    <ion-item>\n      <ion-input formControlName="message" [(ngModel)]="chatBox" placeholder="Send a message..."></ion-input>\n      <button ion-button clear (click)="sendMessage(chatBox)" item-end>\n        <ion-icon class="footer-btn" name="send"></ion-icon>\n      </button>\n    </ion-item>\n  </form>\n</ion-footer>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_socket_io__["a" /* Socket */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderDetails = /** @class */ (function () {
    function OrderDetails(nav, service, params, actionSheetCtrl, config, reqhttp, http, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.actionSheetCtrl = actionSheetCtrl;
        this.config = config;
        this.reqhttp = reqhttp;
        this.http = http;
        this.values = values;
        console.log(params);
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails.prototype.confirmOrder = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Change Your Order Status ...',
            cssClass: 'myaction',
            buttons: [
                {
                    text: 'Processing',
                    cssClass: 'processing',
                    handler: function () {
                        var params = {
                            status: 'processing'
                        };
                        new Promise(function (resolve) {
                            _this.http
                                .post(_this.config.setUrl +
                                '/wc-api/v3/orders/' + _this.id, params, _this.config.options)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (data) {
                            });
                        });
                        //  this.WooCommerce.putAsync("orders/" + this.order.id, data).then( (data) => {
                        //   console.log(JSON.parse(data.body));
                        //   this.navCtrl.push("OrderPage");
                        // }, (err) => {
                        //   console.log(err);
                        // });
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'cancel',
                    handler: function () {
                        var params = {
                            status: 'cancelled'
                        };
                        return new Promise(function (resolve) {
                            _this.http
                                .post(_this.config.setUrl('POST', '/wc-api/v3/orders/', false), params, _this.config.options)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (data) {
                                _this.dataOrder = data;
                                resolve(_this.dataOrder);
                                console.log(_this.dataOrder);
                            }, function (err) {
                                resolve(err.json());
                            });
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    OrderDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\order-details\order-details.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"OrderInfo" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="order-details">\n\n  <ion-spinner *ngIf="!orderDetails" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orderDetails">\n\n    <ion-item-group>\n\n      <ion-item-divider>{{"Order" | translate }} #\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.order_number}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"Date" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.created_at | date:\'medium\'}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"PaymentMethod" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.payment_details.method_title}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"BillingAddress" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        {{orderDetails.order.billing_address.first_name}}\n\n        {{orderDetails.order.billing_address.last_name}},\n\n        <br>\n\n        {{orderDetails.order.billing_address.email}}\n\n        <br>\n\n        {{orderDetails.order.billing_address.phone}}\n\n        <br>\n\n        {{orderDetails.order.billing_address.address_1}},\n\n        <br>\n\n        {{orderDetails.order.billing_address.address_2}},\n\n        <br>\n\n        {{orderDetails.order.billing_address.city}}, \n\n        {{orderDetails.order.billing_address.state}}\n\n        <br>\n\n        {{orderDetails.order.billing_address.postcode}}\n\n      </ion-item>\n\n      <!-- <ion-item-divider>{{"ShippingMethod" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.shipping_methods}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"ShippingAddress" | translate}} \n\n      </ion-item-divider>\n\n      <ion-item>\n\n        {{orderDetails.order.shipping_address.first_name}}\n\n        {{orderDetails.order.shipping_address.last_name}},\n\n        <br>\n\n        {{orderDetails.order.shipping_address.company}}\n\n        <br>\n\n        {{orderDetails.order.shipping_address.address_1}},\n\n        <br>\n\n        {{orderDetails.order.shipping_address.address_2}},\n\n        <br>\n\n        {{orderDetails.order.shipping_address.city}}, \n\n        {{orderDetails.order.shipping_address.state}}\n\n        <br>\n\n        {{orderDetails.order.shipping_address.country}}\n\n        <br>\n\n        {{orderDetails.order.shipping_address.postcode}}\n\n      </ion-item>-->\n\n      <ion-item-divider>{{"Provider Details" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item *ngFor="let item of orderDetails.order.line_items">\n\n        <h2>{{"ProductName" | translate}} : {{item.name}}\n\n        </h2>\n\n        <h2>{{"Price" | translate}} : {{item.price | currency:values.currency:true:\'1.2-2\'}}\n\n        </h2>\n\n        <h2>{{"Quantity" | translate}} : {{item.quantity}}\n\n        </h2>     \n\n        <h2>{{"SubTotal" | translate}} : {{1*item.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item-divider>{{"Totals" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col>{{"SubTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.order.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> {{"ShippingTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.order.total_shipping}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"TaxTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.order.total_tax}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row text-uppercase>\n\n          <ion-col>{{"GrandTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.order.total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </div>\n\n</ion-content>\n\n<!-- <ion-footer *ngIf="values.vendor">\n\n  <ion-toolbar color="brand">\n\n    <button ion-button round full color="primary" (click)="confirmOrder()">Confirm Order</button>\n\n  </ion-toolbar>\n\n</ion-footer> -->'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], OrderDetails);
    return OrderDetails;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingVendor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__booking_details_booking_details__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BookingVendor = /** @class */ (function () {
    function BookingVendor(translate, config, http, nav, service, values, functions) {
        this.translate = translate;
        this.config = config;
        this.http = http;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.dataVendor = {};
        this.lan = {};
    }
    BookingVendor.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.idVendor = this.values.customerId;
        this.filter['id'] = this.values.customerId.toString();
        this.service.getBookingsVendor(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    BookingVendor.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getBookingsVendor(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    BookingVendor.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        if (results.orders.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    BookingVendor.prototype.getBookingDetails = function (idOrder) {
        var idVendor = this.idVendor;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__booking_details_booking_details__["a" /* BookingDetails */], { idOrder: idOrder, idVendor: idVendor });
    };
    BookingVendor.prototype.confirm = function (bookingId) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* URLSearchParams */]();
        params.append('bookingid', bookingId);
        return new Promise(function (resolve) {
            console.log(params);
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-process_confirm', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
                console.log(_this.status);
                console.log(data);
                console.log(_this.status.message);
                if (_this.status.message == "success") {
                    _this.functions.showAlert("SUCCESS", "Booking Confirmed. ");
                    _this.ionViewDidEnter();
                }
                else
                    _this.functions.showAlert("ERROR", "an error has occurred please check. ");
            });
        });
    };
    BookingVendor.prototype.unconfirm = function (bookingId) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* URLSearchParams */]();
        params.append('bookingid', bookingId);
        return new Promise(function (resolve) {
            console.log(params);
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-process_unconfirm', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
                console.log(_this.status);
                console.log(data);
                console.log(_this.status.message);
                if (_this.status.message == "success") {
                    _this.functions.showAlert("SUCCESS", "Booking Unconfirmed. ");
                    _this.ionViewDidEnter();
                }
                else
                    _this.functions.showAlert("ERROR", "an error has occurred please check. ");
            });
        });
    };
    BookingVendor.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get(['SUCCESS', 'Please Select']).subscribe(function (translations) {
            _this.lan.oops = translations['Oops!'];
            _this.lan.oops = translations['Oops!'];
        });
    };
    BookingVendor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\booking-vendor\booking-vendor.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title  text-center>{{"Bookings" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-order">\n\n  <ion-spinner *ngIf="!orders" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orders">\n\n\n\n    <div class="no-orders">\n\n    <h4 *ngIf="orders.orders.length == 0" text-center no-lines>\n\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n\n      </button>\n\n    </h4>\n\n    </div>\n\n\n\n    <div *ngIf="orders.orders.length">\n\n      <ion-item *ngFor="let item of orders.orders">\n\n        \n\n        <h2>\n\n          <b>{{"Details" | translate}} :\n\n          </b>{{"Booking" | translate }} # {{item.bookingId}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Booked Product" | translate}} :\n\n          </b> <label style="color:#1e88e5e6;"> {{item.booked_product}}</label>\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Booked By" | translate}} :\n\n          </b> {{item.booked_by}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Start Date" | translate}} :\n\n          </b> {{item.start_date | date:\'medium\'}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"End Date" | translate}} :\n\n          </b> {{item.end_date | date:\'medium\'}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Customer" | translate}} :\n\n          </b> {{item.billing_address.first_name}} {{item.billing_address.last_name}}, {{item.billing_address.address_1}}, {{item.billing_address.address_2}}, {{item.billing_address.city}}, {{item.billing_address.state}}, {{item.billing_address.country}}, {{item.billing_address.postcode}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Status" | translate}} :\n\n          </b> {{item.statusbooking}}\n\n        </h2>\n\n\n\n        <button *ngIf="item.row_actions.edit" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="getBookingDetails(item.order_id)">\n\n          <ion-icon name="ios-eye">\n\n          </ion-icon>		  		\n\n          {{"View" | translate}} \n\n        </button>\n\n\n\n        <button *ngIf="item.row_actions.confirm" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="confirm(item.bookingId)">\n\n          <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n\n          </ion-icon>		  		\n\n          {{"Confirm" | translate}} \n\n        </button>\n\n\n\n        <button *ngIf="item.row_actions.unconfirm" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="unconfirm(item.bookingId)">\n\n          <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n\n          </ion-icon>		  		\n\n          {{"Unconfirm" | translate}} \n\n        </button>\n\n\n\n      </ion-item>\n\n    </div> \n\n    <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content\n\n      loadingSpinner="crescent"\n\n      loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\booking-vendor\booking-vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], BookingVendor);
    return BookingVendor;
}());

//# sourceMappingURL=booking-vendor.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualCardAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_card_new_card__ = __webpack_require__(558);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VirtualCardAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var VirtualCardAdminPage = /** @class */ (function () {
    function VirtualCardAdminPage(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.cards = [];
        this.service.getCustomer()
            .then(function (results) { return _this.customers = results; });
        this.service.getAddress()
            .then(function (resultsAddresses) { return _this.addresses = resultsAddresses; });
    }
    VirtualCardAdminPage_1 = VirtualCardAdminPage;
    VirtualCardAdminPage.prototype.ngOnInit = function () {
        var data = JSON.parse(localStorage.getItem("cardData"));
        console.log(data);
        if (data != null) {
            this.cards = Object.keys(data).map(function (i) { return data[i]; });
        }
        else {
            this.cards = null;
        }
    };
    VirtualCardAdminPage.prototype.delete = function () {
        localStorage.removeItem('cardData');
        this.nav.setRoot(VirtualCardAdminPage_1);
    };
    VirtualCardAdminPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    VirtualCardAdminPage.prototype.newCard = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__new_card_new_card__["a" /* NewCardPage */]);
    };
    VirtualCardAdminPage.prototype.checkAvatar = function () {
        return this.service.checkAvatar();
    };
    VirtualCardAdminPage = VirtualCardAdminPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-virtual-card-admin',template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\virtual-card-admin\virtual-card-admin.html"*/'<!-- Header -->\n<ion-header>\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img (click)="gohome();" src="{{values.avatar}}" />\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n          {{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen="true" slot="fixed">\n  <ion-spinner *ngIf="!customers" name="crescent"\n    style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px"></ion-spinner>\n  <ion-fab right bottom>\n    <button ion-fab (click)="newCard()"><ion-icon name="add"></ion-icon></button>\n    <!-- <ion-fab-list>\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list> -->\n  </ion-fab>\n\n  <div class="cards">\n    <div style="font-family:Arial, Helvetica, sans-serif; font-weight: 700;">Numuero Tarjeta</div>\n    <div style="font-family:Arial, Helvetica, sans-serif; font-weight: 700;">Vencimiento</div>\n    <div style="font-family:Arial, Helvetica, sans-serif; font-weight: 700;">CVC</div>\n    <div style="font-family:Arial, Helvetica, sans-serif; font-weight: 700;">Acciones</div>\n\n  </div>\n\n  <div class="cards" *ngIf="cards != null">\n    <div *ngFor="let card of cards">\n      {{card}}\n    </div>\n    <div><button (click)="delete()" class="btn-acciones"><ion-icon name="close-circle"></ion-icon></button></div>\n  </div>\n\n  <!-- <div *ngIf="customers" class="customer">\n    <div *ngIf="customers.customer.billing_address">\n      <div class="card">\n        <div class="header">\n          <div class="avatar" *ngIf="checkAvatar()==\'false\'">\n            <img src="../../../assets/image/avatar40x40.png" alt="">\n          </div>\n          <div class="avatar" *ngIf="checkAvatar()!=\'false\'">\n            <img src="{{customers.customer.avatar_url}}" />\n          </div>\n        </div>\n        <div class="card-body">\n          <div class="user-meta ion-text-center">\n            <h3 class="playername"> {{customers.customer.billing_address.first_name}}\n              {{customers.customer.billing_address.last_name}}<br *ngIf="customers.customer.billing_address.first_name">\n            </h3>\n            <h5 class="country">{{customers.customer.role}}</h5>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\virtual-card-admin\virtual-card-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], VirtualCardAdminPage);
    return VirtualCardAdminPage;
    var VirtualCardAdminPage_1;
}());

//# sourceMappingURL=virtual-card-admin.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 259;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Functions = /** @class */ (function () {
    function Functions(alert, loadingController, values) {
        this.alert = alert;
        this.loadingController = loadingController;
        this.values = values;
    }
    Functions.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    Functions.prototype.presentLoading = function () {
        this.loader = this.loadingController.create({
            content: this.values.lan.WaitTitle
        });
        this.loader.present();
    };
    Functions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2__values__["a" /* Values */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
var Config = /** @class */ (function () {
    function Config() {
        // url: any = 'http://localhost/hexchange'
        // url: any = 'https://dev.digitalfactory.tech/demos/homer'
        this.url = 'https://demohomer.digitalfactory.tech/';
        this.urlApi = 'https://websockethomer.herokuapp.com/api/v1';
        // url: any = 'https://hexchange.digitalfactory.tech'
        this.consumerKey = 'ck_462b7613b1f89991924e149f7d7df2a1c37eb71a';
        this.consumerSecret = 'cs_81a58277089318569168ff48defefa83fa740d86';
        this.options = {};
        this.options.withCredentials = true;
        this.options.headers = headers;
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    Config.prototype.setOauthNonce = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    Config.prototype.setUrl = function (method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered)
                .sort()
                .forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered)
                .sort()
                .forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return (this.url +
                endpoint +
                this.searchParams.toString() +
                '&oauth_signature=' +
                this.encodedSignature);
        }
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = /** @class */ (function () {
    function SearchService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    SearchService.prototype.getSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            // this.http.get(this.config.setUrl('GET', '/wc-api/v3/products?', filter), this.config.options).map(res => res.json())
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', filter), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    SearchService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = /** @class */ (function () {
    function CartService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CartService.prototype.loadCart = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                console.log({ cart: _this.cart });
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteItem = function (item_key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' +
                item_key, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.billing = data;
                _this.http
                    .get(_this.config.url +
                    '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', _this.config.options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                });
                resolve(_this.billing);
            });
        });
    };
    CartService.prototype.addToCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined &&
            this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity += 1;
        }
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] += 1;
        }
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/cart/', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined &&
            this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity -= 1;
        }
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] -= 1;
        }
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/cart/', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.submitCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('coupon_code', coupon);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.removeCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('coupon', coupon);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
            });
        });
    };
    CartService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('shipping_method[0]', method);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CartService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BillingAddressForm = /** @class */ (function () {
    function BillingAddressForm(iab, nav, oneSignal, platform, service, params, functions, values) {
        this.iab = iab;
        this.nav = nav;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.showCreateAccont = false;
        this.buttonSubmit = false;
        this.buttonSubmitLogin = false;
        this.buttonSubmitCoupon = false;
        this.buttonText = "Place booking";
        this.buttonText1 = "Apply";
        this.buttonText2 = "Login";
        this.loginData = [];
        this.form = params.data;
        this.billing = {};
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = true;
        this.shipping = {};
        this.shipping.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
    }
    BillingAddressForm.prototype.getRegion = function (countryId) {
        var _this = this;
        this.states = this.form.state[countryId];
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.handleOrderReviews = function (results) {
        this.OrderReview = results;
        this.form.payment = this.OrderReview.payment;
        this.chosen_shipping = this.OrderReview.chosen_shipping;
    };
    BillingAddressForm.prototype.checkout = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing order...";
        if (this.platform.is('cordova'))
            this.oneSignal.getIds().then(function (data) {
                _this.form.onesignal_user_id = data.userId;
            });
        if (this.form.shipping) {
            this.form.shipping_first_name = this.form.billing_first_name;
            this.form.shipping_last_name = this.form.billing_last_name;
            this.form.shipping_company = this.form.billing_company;
            this.form.shipping_address_1 = this.form.billing_address_1;
            this.form.shipping_address_2 = this.form.billing_address_2;
            this.form.shipping_city = this.form.billing_city;
            this.form.shipping_country = this.form.billing_country;
            this.form.shipping_state = this.form.billing_state;
            this.form.shipping_postcode = this.form.billing_postcode;
        }
        if (this.form.payment_method == 'bacs' || this.form.payment_method == 'cheque' || this.form.payment_method == 'cod') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handleBilling(results); });
        }
        else if (this.form.payment_method == 'stripe') {
            this.service.getStripeToken(this.form)
                .then(function (results) { return _this.handleStripeToken(results); });
        }
        else {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayment(results); });
        }
    };
    BillingAddressForm.prototype.handlePayment = function (results) {
        var _this = this;
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(results.redirect, '_blank', options);
            browser_1.show();
            browser_1.on('loadstart').subscribe(function (data) {
                if (data.url.indexOf('order-received') != -1) {
                    _this.values.cart = [];
                    _this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
                    browser_1.hide();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.buttonSubmit = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.checkoutStripe = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing Order...";
        this.service.getStripeToken(this.form)
            .then(function (results) { return _this.handleStripeToken(results); });
    };
    BillingAddressForm.prototype.handleStripeToken = function (results) {
        var _this = this;
        if (results.error) {
            this.buttonSubmit = false;
            this.buttonText = "Place booking";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results)
                .then(function (results) { return _this.handleBilling(results); });
        }
    };
    BillingAddressForm.prototype.handleBilling = function (results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("/order-received/");
            var pos2 = str.lastIndexOf("/?key=wc_order");
            var pos3 = pos2 - (pos1 + 16);
            var order_id = str.substr(pos1 + 16, pos3);
            this.values.cart = [];
            this.values.count = 0;
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.buttonText = "Place booking";
    };
    BillingAddressForm.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.buttonText2 = "Loading";
            this.service.login(this.form)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    BillingAddressForm.prototype.validateForm = function () {
        if (this.form.username == undefined || this.form.username == "") {
            return false;
        }
        if (this.form.password == undefined || this.form.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.handleResults = function (a) {
        this.buttonSubmitLogin = false;
        this.buttonText2 = "Login";
        //this.form.shipping = true;
        if (a.user_logged) {
            this.form = a;
            this.states = this.form.state[this.form.billing_country];
            this.values.isLoggedIn = a.user_logged;
            this.values.customerName = a.billing_first_name;
            this.values.customerId = a.user_id;
            this.values.logoutUrl = a.logout_url;
        }
        else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    };
    BillingAddressForm.prototype.submitCoupon = function () {
        var _this = this;
        this.buttonSubmitCoupon = true;
        this.buttonText1 = "Loading";
        this.service.submitCoupon(this.form)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    BillingAddressForm.prototype.handleCoupon = function (results) {
        var _this = this;
        this.buttonSubmitCoupon = false;
        this.buttonText1 = "Apply";
        this.couponStatus = results._body;
        this.functions.showAlert("STATUS", results._body);
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.OrderReview = results; });
    };
    BillingAddressForm.prototype.createAccount = function () {
        this.showCreateAccont = true;
    };
    BillingAddressForm.prototype.changePayment = function () {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    };
    BillingAddressForm.prototype.terms = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__["a" /* TermsCondition */], this.form.terms_content);
    };
    BillingAddressForm.prototype.updateOrderReview = function () {
        var _this = this;
        this.form.shipping_method = this.chosen_shipping;
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\checkout\billing-address-form\billing-address-form.html"*/'<ion-header>\n\n  <ion-navbar color="header"> \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title text-wrap text-center>{{"Checkout" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="billing-address-form">\n\n <div>\n\n    <ion-item *ngIf="!values.isLoggedIn" class="side-heading-background Returningcustomer" no-lines>\n\n      <ion-label color="side-heading-color">{{"Returningcustomer?Loginhere.." | translate}}\n\n        <ion-icon ios="ios-log-in" md="md-log-in">\n\n        </ion-icon>\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.islogin" name="subscribe">\n\n      </ion-toggle>\n\n    </ion-item>\n\n    <div *ngIf="form.islogin" class="login-form">\n\n      <form #f="ngForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label floating>{{"username" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="email" [(ngModel)]="form.username" name="firstname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"password" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list> \n\n        <div class="login-button">\n\n          <button ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="login(loginData)">{{buttonText2}}\n\n          </button> \n\n        </div>\n\n      </form>\n\n    </div>\n\n    <div *ngIf="form.iscoupon" class="coupon">\n\n      <form #f="ngForm">\n\n        <ion-item>\n\n          <ion-label floating>coupon\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="form.coupon_code" name="coupon">\n\n          </ion-input>\n\n        </ion-item> \n\n        <button ion-button color="button-color" block type="submit" [disabled]="buttonSubmitCoupon" (click)="submitCoupon()"> {{buttonText1}}\n\n        </button> \n\n      </form>\n\n    </div>\n\n    <div *ngIf="form">\n\n      <form #f="ngForm" class="form">\n\n        <ion-list no-margin>\n\n          <ion-item class="side-heading-background">\n\n            <ion-label class="col" color="side-heading-color">{{"BillingAddress" | translate}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"FirstName" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_first_name" name="firstname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"LastName"| translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_last_name" name="lastname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Company" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_company" name="company">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Phone" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="number" [(ngModel)]="form.billing_phone" name="telephone">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"StreetAddress" | translate}} 1\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_address_1" name="street1">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"StreetAddress" | translate}} 2\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_address_2" name="street2">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Email" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="email" [(ngModel)]="form.billing_email" name="email">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"City" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_city" name="city">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Postcode" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_postcode" name="postcode">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label> {{"Country" | translate}}\n\n            </ion-label>\n\n            <ion-select [(ngModel)]="form.billing_country" (ngModelChange)="getRegion(form.billing_country)" name="billing_country">\n\n              <div *ngFor="let field of form.country.countries | keys">\n\n                <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n                </ion-option>\n\n              </div>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="states">\n\n            <ion-label> {{"State" | translate}} \n\n            </ion-label>\n\n            <ion-select [(ngModel)]="form.billing_state" name="billing_state">\n\n              <div *ngFor="let field of states | keys">\n\n                <ion-option value="{{field.key}}">{{field.value}}\n\n                </ion-option>\n\n              </div>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="!states">\n\n            <ion-label floating> {{"State" | translate}} \n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_state" name="billing_state">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n        <div class="same-for-shipping">\n\n          <ion-item class="side-heading-background">\n\n            <ion-label color="side-heading-color">{{"SameForShipping" | translate}}\n\n            </ion-label>\n\n            <ion-toggle checked="true" [(ngModel)]="form.shipping" name="shipping">\n\n            </ion-toggle>\n\n          </ion-item>\n\n        </div>\n\n        <div *ngIf="!form.shipping" class="same-for-shipping-form">\n\n          <ion-list class="shipping-address-list">\n\n            <ion-item class="side-heading-background">\n\n              <ion-label color="side-heading-color">{{"ShippingAddress" | translate}}\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"FirstName" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_first_name" name="first_name">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"LastName"| translate}}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_last_name" name="last_name">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"Company" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_company" name="shipping_company">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"StreetAddress" | translate}} 1\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_1" name="address_1">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"StreetAddress" | translate}} 2\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_2" name="address_2">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"City" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_city" name="shipping_city">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label> {{"Country" | translate}}\n\n              </ion-label>\n\n              <ion-select [(ngModel)]="form.shipping_country" (ngModelChange)="getRegion(form.shipping_country)" name="shipping_country">\n\n                <div *ngFor="let field of form.country.countries | keys">\n\n                  <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n                  </ion-option>\n\n                </div>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="states">\n\n              <ion-label> {{"State" | translate}} \n\n              </ion-label>\n\n              <ion-select [(ngModel)]="form.shipping_state" name="form.shipping_state">\n\n                <div *ngFor="let field of states | keys">\n\n                  <ion-option value="{{field.key}}">{{field.value}}\n\n                  </ion-option>\n\n                </div>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="!states">\n\n              <ion-label floating>{{form.checkout_fields?.shipping?.shipping_state?.label}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_state" name="form.shipping_state">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"Postcode" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_postcode" name="shipping_postcode">\n\n              </ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </form>\n\n    </div>\n\n    <ion-item *ngIf="!values.isLoggedIn" no-lines class="side-heading-background create-account">\n\n      <ion-label color="side-heading-color">{{"Create Account" | translate}}\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.register" name="subscribe">\n\n      </ion-toggle>\n\n    </ion-item>\n\n    <div *ngIf="form.register" class="create-account-form">\n\n      <form #f="ngForm">\n\n        <ion-list>\n\n          <ion-label class="create-account-label"> {{"Createanaccounttext" | translate}} \n\n          </ion-label>\n\n          <ion-item>\n\n            <ion-label floating>{{"password" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n    </div>\n\n\n\n\n\n    <div *ngIf="OrderReview?.shipping" class="shipping">\n\n      <div no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateOrderReview()">\n\n          <ion-item class="side-heading-background payment-method-header" no-lines>\n\n            <ion-label color="side-heading-color">{{"Select a payment method" | translate}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item *ngFor="let method of OrderReview.shipping | keys" style="padding-left:20px">\n\n            <ion-label><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost  | currency:values.currency:true:\'1.2-2\'}}</span></ion-label>           \n\n            <ion-radio value="{{method.value.id}}">\n\n            </ion-radio>\n\n          </ion-item>\n\n      </div>\n\n    </div>\n\n\n\n<ion-list *ngIf="OrderReview?.cart">\n\n      <ion-item class="side-heading-background order-review-header" no-lines>\n\n        <ion-label color="side-heading-color">{{"Your Orders" | translate}}\n\n        </ion-label>\n\n      </ion-item>\n\n      <div *ngFor="let item of OrderReview.cart.cart_contents | keys">\n\n        <ion-row>\n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin>{{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div *ngIf="OrderReview.totals.discount_total && OrderReview.totals.discount_total != 0">\n\n        <ion-row>\n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{"Coupon" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin> - {{1*OrderReview.totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <ion-row>\n\n        <ion-col width-75>\n\n          <ion-label no-margin>{{"SubTotal" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label no-margin>{{1*OrderReview.totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.shipping_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Shipping" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.fee_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Fee" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.fee_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.cart_contents_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Subtotal ex tax" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>  \n\n\n\n      <ion-row *ngIf="OrderReview.totals.total_tax != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Tax total" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col width-75>\n\n          <ion-label no-margin>\n\n            <b>{{"Totals" | translate}}\n\n            </b>\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label no-margin>\n\n            <b>{{1*OrderReview.totals.total | currency:values.currency:true:\'1.2-2\'}}\n\n            </b>\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n    <ion-item class="side-heading-background payment-method-header" no-lines>\n\n      <ion-label color="side-heading-color">{{"Select shipping method" | translate}}\n\n      </ion-label>\n\n    </ion-item>\n\n    <div *ngIf="form.payment">\n\n      <ion-list no-margin text-wrap radio-group [(ngModel)]="form.payment_method" (ngModelChange)="changePayment()">\n\n        <ion-item *ngFor="let method of form.payment | keys">\n\n          <ion-label class="payment-method-title">{{method.value.title}}\n\n          </ion-label>\n\n          <ion-radio value="{{method.value.id}}">\n\n          </ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div *ngIf="form.payment_method != \'stripe\'" class="side-heading-background">\n\n        <!-- <ion-label class="payment-instructions">{{form.payment_instructions}}\n\n        </ion-label>  -->\n\n        <div class="payment-instructions">\n\n          <span [innerHTML]="form.payment_instructions"></span>\n\n        </div>\n\n        <div *ngIf="form.payment_method == \'authnet\'">\n\n          \n\n          <ion-list no-margin>\n\n            <ion-item class="side-heading-background">\n\n              <ion-label color="side-heading-color">Credit Card Details\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"CardNumber" | translate}} *\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.authnet_card_number" name="authnet_card_number">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"Expiry" | translate}} (MM/YY) *\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.authnet_card_expiry" name="authnet_card_expiry">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"CardCode" | translate}} *\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.authnet_card_cvc" name="authnet_card_cvc">\n\n              </ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n        </div>\n\n      <ion-item *ngIf="form.terms_content" no-lines class="side-heading-background">\n\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n\n      </ion-toggle>\n\n      </ion-item>\n\n      <div class="button-margin">\n\n        <button ion-button color="button-color" text-uppercase [disabled]="buttonSubmit" block secondary type="submit" class="button button-block button-default" (click)="checkout()">{{"PlaceOrder" | translate}}\n\n        </button> \n\n      </div>\n\n        \n\n      </div>\n\n    </div>\n\n    <div *ngIf="form.payment_method ==\'stripe\'" class="side-heading-background stripe-payment">\n\n      <ion-label [innerHTML]="form.payment.stripe.description">\n\n      </ion-label>\n\n      <form #f="ngForm">\n\n        <ion-list no-margin>\n\n          <ion-item class="side-heading-background">\n\n            <ion-label color="side-heading-color">Stripe Card Details\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"CardNumber" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_number" name="stripe_number">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"ExpiryMonth" | translate}} (MM)\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_month" name="stripe_exp_year">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"ExpiryYear" |translate}} (YYYY)\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_year" name="stripe_exp_year">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"CardCode" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_code" name="stripe_code">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form> \n\n     <ion-item class="side-heading-background" no-lines>\n\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n\n      </ion-toggle>\n\n    </ion-item>\n\n\n\n      <div class="button-margin">\n\n      <button ion-button color="button-color" text-uppercase *ngIf="form.payment_method ==\'stripe\'" [disabled]="buttonSubmit" (click)="checkout()" block secondary type="submit" class="button button-block button-default">{{"PlaceOrder" | translate}}\n\n      </button>\n\n      </div>\n\n    </div>\n\n    <br>\n\n    <br>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\checkout\billing-address-form\billing-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */]])
    ], BillingAddressForm);
    return BillingAddressForm;
}());

//# sourceMappingURL=billing-address-form.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_list_products_list__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_service_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductPage = /** @class */ (function () {
    function ProductPage(alert, translate, nav, service, servi, otherservice, params, functions, values, platform, geolocation, nativeGeocoder) {
        var _this = this;
        this.alert = alert;
        this.translate = translate;
        this.nav = nav;
        this.service = service;
        this.servi = servi;
        this.otherservice = otherservice;
        this.functions = functions;
        this.values = values;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.product = {};
        this.disableSubmit = true;
        this.wishlistIcon = false;
        this.usedVariationAttributes = [];
        this.mon = [];
        this.month = 1;
        this.disableWeekDays = [];
        this.daysConfig = [];
        this.optionsMulti = {
            pickMode: 'single',
            daysConfig: this.daysConfig,
            disableWeeks: this.disableWeekDays,
        };
        this.NoBlockAvailable = 'NoBlockAvailable';
        this.WhatTime = 'WhatTime';
        this.lan = {};
        this.miLatitude = 0;
        this.miLongitude = 0;
        this.date = '2021-03-03';
        this.hourInit = '08:00';
        this.hourEnd = '22:00';
        this.product_slot = [];
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true,
        };
        console.log("prueba id onesignal", this.values.userId);
        this.lat = '';
        this.long = '';
        this.options = [];
        this.optionss = [];
        this.quantity = '1';
        this.BookNow = 'BookNow';
        this.otherservice.getCustomer()
            .then(function (results) { return _this.handleCustomer(results); });
        this.otherservice.getAddress()
            .then(function (resultsAddresses) { return _this.handleAddress(resultsAddresses); });
        if (params.data.id) {
            this.selectedService = null;
            this.product.product = params.data.id;
            this.id = params.data.id;
            this.product_slot = params.data.product_sl;
            this.date = params.data.date;
            this.hourInit = params.data.hourInit;
            this.hourEnd = params.data.hourEnd;
            //  this.selectedTime = this.date+'T'+this.hourInit
            this.options.product_id = this.id;
            this.usedVariationAttributes = this.product.product
                .resources_full.map(function (item) { return item; });
            console.log('usedVariationAttributes:', this.usedVariationAttributes);
            this.loadDataProduct();
        }
        else {
            // this.options.product_id = this.id
            this.service
                .getProduct(params.data.id)
                .then(function (results) { return _this.handleProductResults(results); });
        }
        this.getReviews();
        platform.ready().then(function () {
            var subscription = _this.geolocation.watchPosition()
                .filter(function (p) { return p.coords !== undefined; }) //Filter Out Errors
                .subscribe(function (position) {
                _this.miLatitude = position.coords.latitude;
                _this.miLongitude = position.coords.longitude;
                // console.log("locomiLocation=" + position.coords.latitude + ' ' + position.coords.longitude);
            });
        });
        this.servi.getHomerOneSignal(this.product.product.id).then(function (result) { return _this.providerOneSignal = result.providers[0].onesignal; });
        //con esto antes obtenia el providerOneSignal
        // for (let i = 0; i < this.values.homerOneSignal.length; i++) {
        //   if(this.values.homerOneSignal[i].product == this.product.product.id){
        //     this.providerOneSignal = this.values.homerOneSignal[i].providerOneSignal
        //   }
        // }
    }
    ProductPage_1 = ProductPage;
    ProductPage.prototype.loadDataProduct = function () {
        var _this = this;
        //según el horario, deshabilitamos los dias de la semana que no están definidos en el Available
        this.disableWeekDays = [0, 1, 2, 3, 4, 5, 6];
        this.product.product.availability.forEach(function (element) {
            var day = Number(element.type.split(':')[1]);
            console.log({ day: day });
            var index = _this.disableWeekDays.indexOf(day);
            if (index > -1) {
                _this.disableWeekDays.splice(index, 1);
            }
        });
        console.log('this.daysConfig', this.daysConfig);
        console.log('this.disableWeekDays', this.disableWeekDays);
        //Ponemos los dias as marked (para que aparezcan de un color azul) 6 meses hacia adelante
        for (var index = 0; index < 180; index++) {
            var cur_day = __WEBPACK_IMPORTED_MODULE_6_moment___default()()
                .add(index, 'days')
                .toDate()
                .getDay();
            var index_cur_day = this.disableWeekDays.indexOf(cur_day);
            if (index_cur_day > -1) {
                this.daysConfig.push({
                    date: __WEBPACK_IMPORTED_MODULE_6_moment___default()()
                        .add(index, 'days')
                        .toDate(),
                    disable: true,
                });
            }
            this.daysConfig.push({
                date: __WEBPACK_IMPORTED_MODULE_6_moment___default()()
                    .add(index, 'days')
                    .toDate(),
                marked: true,
            });
        }
        //Por defecto iniciamos con el booking deshabilitado
        this.disableSubmit = true;
    };
    ProductPage.prototype.handleAddress = function (result) {
        this.addresses = result;
        this.addressesCustomer = this.addresses.customer.billing_address.address_1;
        console.log(this.addressesCustomer);
    };
    ProductPage.prototype.handleCustomer = function (result) {
        this.customers = result;
    };
    ProductPage.prototype.handleProductResults = function (results) {
        this.selectedService = null;
        this.product.product = results;
        this.id = results.id;
        console.log('producto', this.product.product);
        this.options.product_id = this.id;
        console.log('Product: ', this.product.product.resources_full);
        this.usedVariationAttributes = this.product.product
            .resources_full.map(function (item) { return item; });
        console.log('usedVariationAttributes:', this.usedVariationAttributes);
        this.loadDataProduct();
        // this.product = results
        // this.usedVariationAttributes = this.product.product.attributes.filter(
        //   function(attribute) {
        //     return attribute.variation == true
        //   },
        // )
    };
    ProductPage.prototype.getProduct = function (id) {
        this.nav.push(ProductPage_1, id);
        console.log(id);
    };
    ProductPage.prototype.addToCart = function () {
        var _this = this;
        // if (!this.values.isLoggedIn) {
        //   this.functions.showAlert(
        //     'Options',
        //     'Please login or create an account to continue',
        //   )
        //   this.nav.push(AccountLogin)
        // }
        //Validamos se el producto contiene resources
        // if (
        //   this.product.product.resources_full.length > 0 &&
        //   !this.selectedService
        // ) {
        //   this.functions.showAlert(
        //     'Options',
        //     'Select a service and booking information',
        //   )
        //   return
        // }
        var resource_id = !this.selectedService
            ? null
            : this.selectedService.resource_id
                ? this.selectedService.resource_id
                : null;
        this.getAddressFromCoords();
        var date = __WEBPACK_IMPORTED_MODULE_6_moment___default()(this.date);
        var year = date.year();
        var month = date.month();
        var day = date.day();
        this.service.addOrders({
            "clientUi": this.values.customerId,
            "nameClient": this.values.customerName,
            "productUi": this.product.product.id,
            "productName": this.product.product.name,
            "date": year + '/' + month + '/' + day,
            "hour": this.hourInit,
            "lat": this.lat,
            "lng": this.long,
            "onesignal": this.values.userId,
            "location": this.addressesCustomer
        });
        this.service.sendNotification({
            "title": "Nueva solicitud",
            "content": "Usted ha recibido una solicitud de servicio de " + this.values.customerName,
            "onesignalid": this.providerOneSignal
        });
        this.disableSubmit = true;
        this.BookNow = 'PleaseWait';
        // var date = new Date(this.selectedTime);
        this.product_slot.map(function (result) {
            if (_this.product.product.id == result.product_id) {
                var date = new Date(new Date(result.date));
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                _this.service
                    .addToCart(resource_id, month, day, year, result.date, _this.product.product)
                    .then(function (results) {
                    console.log(results);
                });
                _this.values.count += parseInt(_this.quantity);
            }
        });
        this.disableSubmit = false;
        this.BookNow = 'BookNow';
        this.showAlert('Solicitud enviada', '<strong>Exito:</strong> Has enviado una solicitud a tu homer correctamente');
        this.returnHome();
        // }
    };
    ProductPage.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK'],
        });
        alert.present();
    };
    ProductPage.prototype.setVariations = function () {
        var _this = this;
        this.product.product.attributes.forEach(function (item) {
            if (item.selected) {
                _this.options['variation[attribute_pa_' + item.name + ']'] =
                    item.selected;
            }
        });
        for (var i = 0; i < this.product.product.attributes.length; i++) {
            console.log(this.product.product.attributes[i].name);
            if (this.product.product.attributes[i].variation &&
                this.product.product.attributes[i].selected == undefined) {
                this.functions.showAlert('Options', 'Please Select Product ' +
                    this.product.product.attributes[i].name +
                    ' Option');
                return false;
            }
        }
        return true;
    };
    ProductPage.prototype.onSelect = function ($event, id) {
        var _this = this;
        var date = new Date($event.time);
        console.log({ date: date });
        this.month = date.getUTCMonth() + 1; //months from 1-12
        this.day = date.getUTCDate();
        this.year = date.getUTCFullYear();
        //si cambiamos la fecha reseteamos los horarios
        this.schedule = null;
        this.selectedTime = null;
        this.disableSubmit = true;
        if (this.product.product.resources_full &&
            this.product.product.resources_full.length > 0 &&
            !this.selectedService) {
            this.functions.showAlert('error', this.lan.pleaseSelect);
            return;
        }
        var resource_id = !this.selectedService
            ? null
            : this.selectedService.resource_id
                ? this.selectedService.resource_id
                : null;
        // if (this.values.isLoggedIn) {
        this.service
            .getBlocks(this.day, this.month, this.year, id, resource_id)
            .then(function (results) {
            var res = results;
            var find = '<li class="block"';
            var regex = new RegExp(find, 'g');
            res = res.replace(regex, '<li class="block" ng-click="selectSchedule()" ');
            console.log('schedule', res);
            var match = res.match(/data-value="(.*?)"/gi);
            if (!match) {
                _this.schedule = null;
                return;
            }
            match.forEach(function (el, i, arr) {
                arr[i] = el.replace('data-value=', '').replace(/"/g, '');
            });
            _this.schedule = match;
        });
    };
    ProductPage.prototype.update_blocks = function (a) {
        if (a.success == 'Success') {
            //this.functions.showAlert(a.success, a.message);
            this.values.blockslistId[this.product.product.id] = true;
        }
        else {
            this.functions.showAlert('error', 'error');
        }
    };
    ProductPage.prototype.updateCart = function (a) {
        console.log('a:', a);
        this.disableSubmit = false;
        this.values.count += parseInt(this.quantity);
        this.BookNow = 'BookNow';
        this.returnHome();
        // this.getCart()
    };
    ProductPage.prototype.returnHome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__products_list_products_list__["b" /* ProductsListPage */]);
    };
    ProductPage.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.service.getReviews(this.id).then(function (results) { return _this.handleReview(results); });
    };
    ProductPage.prototype.handleReview = function (a) {
        this.reviews = a;
        for (var item in this.reviews.product_reviews) {
            this.reviews.product_reviews[item].avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(this.reviews.product_reviews[item].reviewer_email);
        }
    };
    ProductPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then(function (results) { return _this.update(results); });
        }
        else {
            this.functions.showAlert('Warning', 'Debe iniciar sesión para agregar un servicio a la lista de deseos');
        }
    };
    ProductPage.prototype.update = function (a) {
        if (a.success == 'Success') {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[this.product.product.id] = true;
        }
        else {
            this.functions.showAlert('error', 'error');
        }
    };
    ProductPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductPage.prototype.updateWish = function (results, id) {
        if (results.status == 'success') {
            this.values.wishlistId[id] = false;
        }
    };
    ProductPage.prototype.chooseVariationOne = function () {
        this.chooseVariation(this.optionss);
    };
    ProductPage.prototype.chooseVariation = function (option) {
        var _this = this;
        console.log(option);
        console.log(this.selectedService);
        if (this.selectedService) {
            this.selectedService = null;
            this.product.product.price = this.product.product.minPrice;
        }
        this.product.product.resources_full.forEach(function (item) {
            if (item.resource_id == option.resource_id) {
                _this.selectedService = option;
                _this.product.product.price = _this.selectedService.price;
                _this.disableSubmit =
                    (_this.product.product.resources_full.length > 0 &&
                        !_this.selectedService) ||
                        !_this.selectedTime;
            }
        });
        // this.product.product.variations.forEach(variation => {
        //   var test = new Array(this.usedVariationAttributes.length)
        //   test.fill(false)
        //   this.usedVariationAttributes.forEach(attribute => {
        //     if (variation.attributes.length == 0) {
        //       this.options.variation_id = variation.id
        //       this.product.product.in_stock = variation.in_stock
        //       this.product.product.price = variation.price
        //       this.product.product.sale_price = variation.sale_price
        //       this.product.product.regular_price = variation.regular_price
        //     } else {
        //       variation.attributes.forEach((item, index) => {
        //         if (
        //           attribute.selected &&
        //           item.name.toUpperCase() == attribute.name.toUpperCase() &&
        //           item.option.toUpperCase() == attribute.selected.toUpperCase()
        //         ) {
        //           test[index] = true
        //         }
        //       })
        //       if (test.every(v => v == true)) {
        //         this.options.variation_id = variation.id
        //         this.product.product.in_stock = variation.in_stock
        //         this.product.product.price = variation.price
        //         this.product.product.sale_price = variation.sale_price
        //         this.product.product.regular_price = variation.regular_price
        //         test.fill(false)
        //       }
        //     }
        //   })
        // })
    };
    ProductPage.prototype.selectTime = function (time) {
        this.selectedTime = time;
        this.disableSubmit =
            (this.product.product.resources_full.length > 0 &&
                !this.selectedService) ||
                !this.selectedTime;
    };
    ProductPage.prototype.getTime = function (item) {
        return __WEBPACK_IMPORTED_MODULE_6_moment___default()(item).format('hh:mm a');
    };
    ProductPage.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get(['Please select a service']).subscribe(function (translations) {
            _this.lan.pleaseSelect = translations['Please select a service'];
        });
    };
    ProductPage.prototype.getAddressFromCoords = function () {
        var _this = this;
        console.log("getAddressFromCoords " + this.miLatitude + " " + this.miLongitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(this.miLatitude, this.miLongitude, options)
            .then(function (result) {
            console.log(JSON.stringify(result[0]));
            _this.autocomplete.input = result[0].locality + ', ' + result[0].administrativeArea + ', ' + result[0].countryName;
        })
            .catch(function (error) {
            _this.address = "Address Not Available!";
            console.log(error);
        });
        this.lat = this.miLatitude.toString();
        this.long = this.miLongitude.toString();
    };
    ProductPage.prototype.getDate = function (date) {
        this.processDate = date;
    };
    ProductPage.prototype.getTime1 = function (time) {
        this.processHour = time;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ProductPage.prototype, "content", void 0);
    ProductPage = ProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\product\product.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <ion-title *ngIf="product?.product?.title">\n      <span [innerHTML]="product.product.title"></span>\n    </ion-title>\n    <ion-title *ngIf="product?.product?.name">\n      <span [innerHTML]="product.product.name"></span>\n    </ion-title>\n\n    <!-- <ion-buttons end>\n      <button\n        ion-button\n        icon-only\n        light\n        class="has-icon icon-only has-badge"\n        (click)="getCart()"\n      >\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n          {{values.count}}\n        </ion-badge>\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n</ion-header>\n<ion-content class="product-page">\n\n  <!-- <ion-fab bottom right slot="fixed">\n    <button ion-fab>\n      <ion-icon name="chatboxes"></ion-icon>\n    </button>\n    <ion-fab-list side="left">\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.messenger.com/t/thehexchange">\n        <ion-icon style="background: #2196f3;" name="custom-facebook"></ion-icon>\n      </a>\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.instagram.com/thehexchange/">\n        <ion-icon style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" name="custom-instagram"></ion-icon>\n      </a>\n    </ion-fab-list>\n  </ion-fab> -->\n\n  <ion-spinner *ngIf="!product?.product" name="crescent"></ion-spinner>\n  <div *ngIf="product.product" class="product-details">\n    <div *ngIf="product.product.images">\n      <ion-slides autoplay="500" loop="true" speed="6000" pager="true">\n        <ion-slide *ngFor="let item of product.product.images">\n          <img\n            [style.height.px]="values.dimensions.imageProductViewHeight - 50"\n            src="{{item.src}}"\n          />\n          <!-- <h2 *ngIf="!product.product.in_stock" item-right class="stock" color="danger">{{"OUTOFSTOCK" | translate}}       </h2> -->\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <ion-item class="product-rate">\n      <ion-label *ngIf="product?.product?.title">\n        {{product.product.title}}\n      </ion-label>\n      <span  *ngIf="product.product.average_rating" class="rating">\n        <span *ngIf="product.product.rating_count > 0">\n          ({{product.product.rating_count}})\n        </span>\n        <span\n          class="star-icon"\n          [ngClass]="{full: product.product.average_rating >= 1, half: product.product.average_rating == 0.5}"\n        >\n          &#x2605;\n        </span>\n        <span\n          class="star-icon"\n          [ngClass]="{full: product.product.average_rating >= 2, half: product.product.average_rating == 1.5}"\n        >\n          &#x2605;\n        </span>\n        <span\n          class="star-icon"\n          [ngClass]="{full: product.product.average_rating >= 3, half: product.product.average_rating == 2.5}"\n        >\n          &#x2605;\n        </span>\n        <span\n          class="star-icon"\n          [ngClass]="{full: product.product.average_rating >= 4, half: product.product.average_rating == 3.5}"\n        >\n          &#x2605;\n        </span>\n        <span\n          class="star-icon"\n          [ngClass]="{full: product.product.average_rating >= 5, half: product.product.average_rating == 4.5}"\n        >\n          &#x2605;\n        </span>\n      </span>\n      <h2\n        *ngIf="values.wishlistId[product.product.id]"\n        item-right\n        class="wishlist"\n        color="danger"\n        (click)="removeFromWishlist(product.product.id)"\n      >\n        <ion-icon name="md-heart"></ion-icon>\n      </h2>\n      <h2\n        *ngIf="!values.wishlistId[product.product.id]"\n        item-right\n        class="wishlist"\n        color="danger"\n        (click)="addToWishlist(product.product.id)"\n      >\n        <ion-icon name="md-heart-outline"></ion-icon>\n      </h2>\n    </ion-item>\n    <ion-item class="item-background">\n      <ion-label *ngIf="product?.product?.name">\n        {{product.product.name}}\n      </ion-label>\n    </ion-item>\n    <div *ngIf="product.product.short_description">\n      <ion-item no-lines class="item-background">\n        {{"ShortDescription" | translate}} :\n        <div [innerHTML]="product.product.short_description"></div>\n      </ion-item>\n    </div>\n    <ion-item class="stock-label" no-lines>\n      <ion-label class="price-regular" *ngIf="!product.product.sale_price">\n        {{1*product.product.price | currency:values.currency:true:\'1.2-2\'}}\n      </ion-label>\n      <ion-label class="price-special" *ngIf="product.product.sale_price">\n        <span>\n          {{1*product.product.sale_price |\n          currency:values.currency:true:\'1.2-2\'}}\n        </span>\n        <span class="price-delete">\n          <del>\n            {{1*product.product.regular_price |\n            currency:values.currency:true:\'1.2-2\'}}\n          </del>\n        </span>\n\n        <span text-wrap class="price-off-tag">\n          {{(product.product.regular_price - product.product.sale_price) /\n          product.product.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" |\n          translate}}\n        </span>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class="border-dashed">\n      <ion-icon name="pencil-outline"></ion-icon>\n      <ion-label floating>{{"StreetAddress" | translate}}\n      </ion-label>\n        <ion-input type="text" [(ngModel)]="this.addressesCustomer" name="billing_address_1">\n      </ion-input>\n    </ion-item>\n\n    <!--variation product starts-->\n     <!-- <div class="variation-block">\n      <div *ngIf="usedVariationAttributes" class="variation-product">\n        <div class="option-box">\n          <button\n            class="option-button"\n            ion-button\n            outline\n            color="light"\n            *ngFor="let option of usedVariationAttributes"\n            (click)="chooseVariation(option)"\n            [ngClass]="{\'selected-option\': selectedService && option && option.resource_id == selectedService.resource_id }"\n          >\n            {{option.name}}\n          </button>\n        </div>\n      </div>\n    </div>  -->\n\n\n    <!--Select Service product-->\n      <!-- <div class="select-services" *ngIf="usedVariationAttributes" class="variation-product"> -->\n      <!-- <ion-item class="variation-title">\n        <strong>{{"Select Service"| translate}}\n        </strong>\n      </ion-item> -->\n      <!-- <ion-item>\n        <ion-label>\n          {{"Please select a service" | translate}}\n        </ion-label>\n        <ion-select style="max-width: 80%;"\n        [(ngModel)]="optionss" (ngModelChange)="chooseVariationOne()" >\n          <div *ngFor="let optionss of usedVariationAttributes ; let i = index">\n\n               <ion-option\n               [ngClass]="{\'selected-option\': selectedService && optionss && optionss.resource_id == selectedService.resource_id }"\n              [value]="optionss">\n              {{i+1}} - {{optionss.name}}\n              </ion-option>\n          </div>\n        </ion-select>\n      </ion-item> -->\n    <!-- </div> -->\n\n  <!--variation product starts-->\n    <!--div *ngIf="product?.product?.variations.length" class="variation-product">\n      <ion-item class="variation-title">\n        <strong>{{"Options"| translate}}\n        </strong>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          {{"Variation" | translate}}\n        </ion-label>\n        <ion-select [(ngModel)]="options[0]" (ngModelChange)="chnageProduct()">\n          <div *ngFor="let option of product.product.variations">\n            <div *ngIf="option.attributes.length == 1">\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option}}">{{option.attributes[0].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}}\n              </ion-option>\n            </div>\n            <div *ngIf="option.attributes.length == 2">\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}}\n              </ion-option>\n            </div>\n            <div *ngIf="option.attributes.length == 3">\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option + \':variation[attribute_pa_\'+ option.attributes[2].name +\']:\' + option.attributes[2].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.attributes[2].option | uppercase}} - {{option.price_inc_tax | currency:values.currency:true:\'1.2-2\'}}\n              </ion-option>\n            </div>\n          </div>\n        </ion-select>\n      </ion-item>\n    </div-->\n\n    <!-- <div>\n      <button style="width:350px;background-color:white;color:black;" item-right ion-button class="positioButton" *ngIf="product.product.type==\'booking\'">\n        <i icon-medium class=" icon-calendar"></i>\n        <span *ngIf="dateOfevent" ></span>\n         <ion-datetime displayFormat="DD MMM YYYY"  pickerFormat="DD MMM YYYY"  [(ngModel)]="dateOfevent" cancelText ="Cancelar" doneText="Ok"></ion-datetime>\n      </button>\n    </div>  -->\n\n     <!-- <ion-calendar\n      [options]="optionsMulti"\n      (onSelect)="onSelect($event,product.product.id)"\n      [type]="type"\n      [format]="\'MM-DD-YYYY\'"\n    ></ion-calendar> -->\n\n    <div style="margin: 0 10px 0 5px;">\n      <div class="box-booking">\n        <ion-icon name="calendar"></ion-icon>\n         <ion-label>{{date}}</ion-label>\n      </div>\n\n      <div class="box-booking">\n         <ion-icon name="md-alarm"></ion-icon>\n         <ion-label >{{hourInit}}</ion-label>\n      </div>\n\n      <div class="box-booking">\n         <ion-icon  name="md-alarm"></ion-icon>\n         <ion-label>{{hourEnd}}</ion-label>\n      </div>\n    </div>\n\n    <!-- <div *ngIf="schedule;else no_schedule">\n      <h4 class="container flex text-center full-width">\n        {{WhatTime | translate}}\n      </h4>\n\n      <ul class="block-picker flex row">\n        <li *ngFor="let item of schedule" class="block">\n          <a\n            href="#"\n            ng-model="item"\n            (click)="selectTime(item)"\n            [ngClass]="{\'selected\' : selectedTime == item}"\n          >\n            {{getTime(item)}}\n          </a>\n        </li>\n      </ul>\n    </div> -->\n    <!-- <ng-template #no_schedule>\n      <div class="container flex text-center full-width">\n        {{NoBlockAvailable | translate}}\n      </div>\n    </ng-template> -->\n\n\n    <div class="add-to-cart-button">\n      <button\n        ion-button\n        full\n        color="button-color"\n        text-uppercase\n\n        (click)="addToCart(product.product.id)"\n      >\n        {{BookNow | translate}}\n      </button>\n      <!-- [disabled]="disableSubmit" -->\n    </div>\n    <!-- <div *ngIf="product.product.short_description">\n      <ion-item no-lines class="item-background">\n        {{"ShortDescription" | translate}} :\n      </ion-item>\n      <ion-item text-wrap no-lines>\n        <div [innerHTML]="product.product.short_description"></div>\n      </ion-item>\n    </div> -->\n    <!-- <ion-card>\n      <ion-card-header style="background-color: #ebebeb">\n        {{"Home Address" | translate}}\n      </ion-card-header>\n      <ion-card-content style="margin-top: 10px">\n        {{customers.customer.billing_address.first_name}} {{customers.customer.billing_address.last_name}}<br\n          *ngIf="customers.customer.billing_address.first_name">\n        {{customers.customer.billing_address.address_1}}<br *ngIf="customers.customer.billing_address.address_1">\n        {{customers.customer.billing_address.address_2}}<br *ngIf="customers.customer.billing_address.address_2">\n        {{customers.customer.billing_address.city}} {{customers.customer.billing_address.state}}<br\n          *ngIf="customers.customer.billing_address.city">\n        {{customers.customer.billing_address.phone}}<br *ngIf="customers.customer.billing_address.phone">\n        {{customers.customer.billing_address.email}}<br *ngIf="customers.customer.billing_address.email">\n        {{customers.customer.billing_address.country}} {{customers.customer.billing_address.postcode}}<br\n          *ngIf="customers.customer.billing_address.postcode">\n      </ion-card-content>\n    </ion-card> -->\n    <!-- <div *ngIf="product.product.description">\n      <ion-item no-lines class="item-background">\n        {{"Description" | translate}} :\n      </ion-item>\n      <ion-item text-wrap no-lines>\n        <div [innerHTML]="product.product.description"></div>\n      </ion-item>\n    </div> -->\n    <div *ngIf="reviews?.product_reviews.length">\n      <ion-row class="item-background">\n        <ion-col>\n          <!--button ion-button  *ngIf="!reviews" color="button-color" button small clear (click)="getReviews()" style="margin-bottom:0px">{{"ShowReviews" | translate}}\n          </button-->\n          <button\n            ion-button\n            *ngIf="reviews"\n            color="button-color"\n            button\n            small\n            clear\n            class="review-title"\n          >\n            {{"Reviews" | translate}}\n          </button>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <div *ngFor="let item of reviews.product_reviews" class="reviews">\n        <ion-item no-lines>\n          <ion-avatar item-start style="margin:8px">\n            <img src="https://www.gravatar.com/avatar/{{item.avatar}}" />\n          </ion-avatar>\n          <h3 style="margin-bottom:6px;font-size:15px">\n            {{item.reviewer_name}}\n            <span class="rating review-star">\n              <span\n                class="star-icon"\n                [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}"\n              >\n                &#x2605;\n              </span>\n              <span\n                class="star-icon"\n                [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}"\n              >\n                &#x2605;\n              </span>\n              <span\n                class="star-icon"\n                [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}"\n              >\n                &#x2605;\n              </span>\n              <span\n                class="star-icon"\n                [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}"\n              >\n                &#x2605;\n              </span>\n              <span\n                class="star-icon"\n                [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}"\n              >\n                &#x2605;\n              </span>\n            </span>\n          </h3>\n\n          <!--h3 style="color:#9e9898">{{item.email}}</h3-->\n          <h3 style="color:#9e9898;margin-bottom:4px">\n            {{item.created_at | date:\'medium\'}}\n          </h3>\n        </ion-item>\n        <p text-wrap>{{item.review}}</p>\n      </div>\n    </div>\n  </div>\n  <br />\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_11__providers_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], ProductPage);
    return ProductPage;
    var ProductPage_1;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsCondition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsCondition = /** @class */ (function () {
    function TermsCondition(nav) {
        this.nav = nav;
    }
    TermsCondition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\checkout\terms-condition\terms-condition.html"*/'<ion-header>\n\n   <ion-navbar color="header">\n\n      <ion-title>{{"TermsConditions" | translate}}</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="terms-condition">\n\n   <div class="terms">\n\n      \n\n      <h3><strong>POLÍTICA DE PRIVACIDAD HOMER</strong></h3>\n\n&nbsp;\n\n\n\n<strong>1. Introducción</strong>\n\n\n\nHomer Home Services, S.L. ("<strong>HOMER</strong>") se compromete a proteger la privacidad de todos los usuarios de la página web <u>www.homer.es</u> y de nuestras aplicaciones móviles (la "<strong>Plataforma</strong>").\n\n\n\nLa presente política de privacidad (la "<strong>Política de Privacidad</strong>") tiene por objeto informar sobre el modo en que obtenemos protegemos y realizamos el tratamiento de cualesquiera datos de carácter personal a los que HOMER pueda tener acceso por cualquier medio.\n\n\n\n<strong>2. ¿Quién es el responsable del tratamiento de sus datos?</strong>\n\n\n\nHomer Home Services, S.L. es el responsable de tratamiento de los datos personales, lo que implica que somos responsables de cuidar la privacidad de los mismos. Utilizaremos sus datos personales de manera justa, legal y transparente y de conformidad con la normativa vigente de protección de datos.\n\n\n\nNuestros datos son los siguientes:\n\n\n\n<u>Dirección</u>: Calle Diego de León, 60, 3ºB, 28006\n\n\n\n<u>NIF</u>: B88502380\n\n\n\n<u>Teléfono:</u> [<em>pendiente</em>]\n\n\n\n<u>Correo electrónico</u>: [<em>pendiente</em>]\n\n\n\n<strong>3. ¿Cómo obtenemos sus datos?</strong>\n\n\n\nObtenemos información personal acerca de usted cada vez que interactúa con nosotros o utiliza o le prestamos servicios; por ejemplo, cuando usted utiliza nuestra Plataforma para hacer un pedido. También observamos cómo utilizan los usuarios nuestra Plataforma, pues gracias a ello podemos mejorar nuestros servicios y su experiencia como cliente.\n\n\n\nObtenemos información:\n\n<ul>\n\n 	<li>cuando crea una cuenta con nosotros o cada vez que cambia la configuración de la misma;</li>\n\n 	<li>cuando realiza un pedido, así como durante todo el proceso de servicio del mismo (incluidos el pago);</li>\n\n 	<li>cuando contacta con nosotros directamente a través de correo electrónico, teléfono, por carta, mensaje o a través de nuestra función chat; y</li>\n\n 	<li>cada vez que navega y utiliza nuestra Plataforma (tanto antes como después de que cree una cuenta con nosotros)</li>\n\n</ul>\n\n&nbsp;\n\n\n\n<strong>4. Datos que obtenemos sobre Usted</strong>\n\n\n\nComo parte de nuestro compromiso con la protección de los datos de nuestros clientes y, más en general, de quienes visitan nuestra Plataforma; queremos ser transparentes respecto de los tipos de datos que obtendremos acerca de usted.\n\n\n\nCada vez que usted visita la Plataforma o solicita un servicio a través HOMER, se le pide que nos facilite ciertos datos acerca de usted mismo, incluido nombre completo, información de contacto, dirección, datos del pedido e información relativa al pago, como los detalles de su tarjeta de crédito o débito.\n\n\n\nTambién obtenemos información acerca del uso que usted hace de la Plataforma (le rogamos visite nuestra Política de Cookies para más información), así como información sobre usted a partir de los mensajes que usted envía a través de la Plataforma, o cada vez que usted contacta con nosotros o formula comentarios; esto incluye correo electrónico, correo postal, llamadas telefónicas o la función chat. . Asimismo, obtenemos información sobre usted cuando se pone en contacto con los proveedores de servicios mediante la función de chat de la Plataforma.\n\n\n\nRecabamos información técnica acerca de su ordenador o su dispositivo móvil, como su sistema operativo, tipo de dispositivo y conexión, o la dirección IP desde la que usted accede a nuestras Plataforma.\n\n\n\nAsimismo, HOMER obtiene información técnica en relación con su uso de nuestros servicios a través de dispositivos móviles; por ejemplo, compañía telefónica, datos de localización y datos de funcionamiento, como modos de pago móvil, interacción con otras tecnologías de venta. Salvo que usted haya optado por permanecer en el anonimato a través de la configuración de su dispositivo y/o plataforma, podremos obtener esta información y utilizarla de manera automática siempre que usted haga uso de nuestros servicios a través de dispositivos móviles utilizando cualquier aplicación móvil HOMER, mediante el navegador de su móvil o de cualquier otra forma.\n\n\n\nTratamos datos relativos a su salud únicamente cuando usted nos indica su aceptación y disposición a ello.\n\n\n\n<strong>5. Uso de sus datos</strong>\n\n\n\nÚnicamente trataremos los datos que obtengamos acerca de usted si existe un motivo para ello y si ese motivo viene amparado por la legislación en materia de protección de datos.\n\n\n\nEstaremos autorizados a tratar su información en los siguientes casos: si necesitamos tratar datos acerca de usted para prestarle el servicio solicitado o para firmar un contrato; si tenemos su consentimiento; si tenemos un motivo justificado para tratar sus datos; o si la legislación nos obliga a ello.\n\n\n\nEn aquellos casos en que lo necesitemos para prestarle los servicios solicitados por usted o para firmar un contrato, utilizamos su información para:\n\n<ul>\n\n 	<li>proporcionarle acceso a las secciones correspondientes de la Plataforma, así como la gestión, desarrollo y control de su registro y uso;</li>\n\n 	<li>gestionar su alta como cliente de los servicios de HOMER y las solicitudes, de cualquier naturaleza, que nos remita;</li>\n\n 	<li>prestar los servicios solicitados;</li>\n\n 	<li>administrar y desarrollar la relación precontractual o contractual formalizada con Usted</li>\n\n 	<li>poder realizarle los cobros correspondientes; y</li>\n\n 	<li>la mejora de nuestros servicios y productos, el envío de actualizaciones de servicios y mantenerle puntualmente informado de todas nuestras novedades, ofertas y productos similares a los contratados por Usted y que puedan ser de su interés</li>\n\n 	<li>contactar con usted siempre que sea necesario en relación con nuestros servicios; por ejemplo, para resolver problemas que puedan surgir con su pedido.</li>\n\n 	<li>llevar a cabo operaciones corporativas, tales como fusiones, ventas, reorganizaciones, transferencias de activos o negocio, adquisiciones, procedimientos concursales o eventos similares;</li>\n\n 	<li>si usted envía comentarios y opiniones en relación con la Plataforma y con nuestros servicios, podremos utilizarlos en la Plataforma y en cualquier actividad o material de marketing y publicidad. En estos casos, únicamente indicaremos su nombre y la ciudad en la que usted reside; y</li>\n\n 	<li>en caso de que usted haya aceptado recibir notificaciones de nosotros a través de nuestra aplicación móvil, podremos enviarle notificaciones relativas a los servicios que haya solicitado e información sobre nuestros servicios y nuestras ofertas. Puede dejar de recibir notificaciones en cualquier momento cambiando las preferencias en los ajustes de su dispositivo móvil.</li>\n\n</ul>\n\n&nbsp;\n\n\n\n<strong>6. Conservación de sus datos.</strong>\n\n\n\nNos limitaremos a conservar la información relativa a usted estrictamente el tiempo necesario.\n\n\n\nLa información que obtengamos será conservada durante el periodo necesario a los efectos de los fines previstos en la sección anterior «Uso de sus datos», en defensa de los legítimos intereses de HOMER o durante el período que establezcan expresamente las leyes y reglamentos aplicables, como la conservación de datos para fines regulatorios.\n\n\n\nPara establecer los oportunos plazos de conservación, tendremos en cuenta, entre otros, los siguientes factores:\n\n<ul>\n\n 	<li>nuestras obligaciones contractuales y nuestros derechos en relación con esos datos;</li>\n\n 	<li>las obligaciones legales establecidas en la legislación vigente que nos obliguen a conservar dicha información durante un cierto plazo;</li>\n\n 	<li>las limitaciones que establezcan las leyes aplicables;</li>\n\n 	<li>nuestros motivos justificados para el tratamiento, sin perjuicio de nuestra obligación de realizar los debidos análisis de proporcionalidad (remitimos a la sección anterior «Uso de sus datos»);</li>\n\n 	<li>las (posibles) disputas; y</li>\n\n 	<li>las directrices emanadas de las autoridades competentes en materia de protección de datos.</li>\n\n</ul>\n\nEn cualquier caso, eliminaremos de manera segura su información cuando ya no la necesitamos para los fines para los cuales la obtuvimos.\n\n\n\n&nbsp;\n\n\n\n<strong>7. Revelación de sus Datos</strong>\n\n\n\nLa información que obtenemos acerca de usted se transferirá a nuestros servidores y quedará almacenada en los mismos; estos servidores se encuentran en [<em>pendiente</em>].\n\n\n\nActuamos con total responsabilidad y transparencia acerca de con quién más compartimos esta información.\n\n\n\nIntercambiamos datos acerca de usted con terceros proveedores de servicios. Estos son los tipos de terceros proveedores de servicios con los que compartimos la información relativa a usted:\n\n<ul>\n\n 	<li>Proveedores de servicios de pagos (incluidos proveedores de servicios de pago online y de servicios de detección de fraude): para que puedan prestarnos sus servicios, por ejemplo, cuando tratan información como pagos a través de tarjetas de crédito, cuando le prestan servicios de apoyo directamente a usted o cuando hacen comprobaciones de antecedentes de fraude para nosotros;</li>\n\n 	<li>Proveedores de servicios informáticos (incluidos proveedores de servicios en la nube) para almacenamiento y análisis de datos;</li>\n\n 	<li>Proveedores de nuestros servicios: para que puedan realizar el servicio requerido;</li>\n\n 	<li>Terceros asociados para servicios de atención al cliente: que nos ayudarán a resolver cualquier problema que pueda surgir con nuestros servicios; y</li>\n\n 	<li>Terceros asociados para marketing y publicidad: para que se aseguren de que usted recibe la publicidad que más le interese y para enviarle marketing electrónico en nombre de HOMER.</li>\n\n</ul>\n\nHOMER adoptará todas las medidas necesarias para garantizar que sus datos se procesan de manera segura y de acuerdo con esta política, en aquellos casos en que se transfieran a terceros.\n\n\n\nSi nuestra sociedad emprende una joint venture, adquiere o es vendida, o se fusiona con otra sociedad, es posible que transfiramos o revelemos información acerca de usted a dicha empresa, a nuestros nuevos socios comerciales o propietarios y/o a sus asesores.\n\n\n\nTambién estaremos facultados para compartir su información:\n\n<ul>\n\n 	<li>si existe para HOMER la obligación de revelar o compartir su información para cumplir (y/o si creemos que es nuestra obligación para cumplir) con requisitos legales o regulatorios. Esto incluye aquellos casos en que estemos obligados legalmente a responder a solicitudes de información de la policía o a intercambiar información con otras empresas u organizaciones para fines de prevención y/o de protección frente a conductas fraudulentas;</li>\n\n 	<li>con el fin de cumplir y hacer cumplir las condiciones contractuales suscritas con usted y cualquier otro contrato;</li>\n\n 	<li>para proteger los derechos de HOMER, de los proveedores y otras personas, lo que incluye la prevención del fraude; y</li>\n\n 	<li>con otros terceros siempre que, en nuestra opinión, ello sea razonablemente necesario para detectar o impedir la comisión de delitos, por ejemplo, con la policía.</li>\n\n</ul>\n\n&nbsp;\n\n\n\n<strong>8. Seguridad</strong>\n\n\n\nContamos con unas políticas sólidas y con la mejor tecnología para garantizar en todo momento que la información que obtenemos acerca de usted cuenta con la debida protección.\n\n\n\nAdoptamos las medidas necesarias encaminadas a proteger su información de todo acceso no autorizado y/o frente a tratamientos ilegítimos, pérdida, destrucción o daños accidentales.\n\n\n\nSi usted elige una contraseña para acceder a ciertas secciones del Plataforma, tenga en cuenta que es usted el único responsable de mantenerla en secreto. Le recomendamos que se abstenga de compartir su información sobre contraseñas con otras personas.\n\n\n\nLamentablemente, la transmisión de información a través de Internet no es segura al 100%. Aunque adoptamos medidas para proteger su información, no podemos garantizar plenamente la seguridad de los datos que se transmiten a la Plataforma; estas transmisiones son bajo su propio riesgo y responsabilidad. Una vez recibamos información suya, aplicaremos procedimientos y medidas de seguridad estrictas para tratar de impedir todo acceso no autorizado.\n\n\n\n&nbsp;\n\n\n\n<strong>9. Sus derechos</strong>\n\n\n\nDe acuerdo con la legislación en materia de protección de datos, le amparan una serie de derechos en relación con la información que poseemos acerca de usted. Si desea ejercer alguno de estos derechos, le invitamos a que contacte con nosotros a través de los datos de contacto facilitados anteriormente en este documento. Si desea saber más acerca de sus derechos, contacte con su autoridad de protección de datos.\n\n<ul>\n\n 	<li><u>Derecho a ser informado</u>. Tiene derecho a que se le informe de manera clara, transparente y fácilmente entendible sobre cómo utilizamos su información, así como acerca de sus derechos. Precisamente por este motivo le estamos informando de todo ello a través de esta política.</li>\n\n 	<li><u>Derecho de acceso</u>. Tiene derecho a obtener acceso a su información (si la estamos tratando). Gracias a ese acceso usted podrá, por ejemplo, comprobar que estamos utilizando su información de manera conforme con la legislación en materia de protección de datos. Si desea acceder a la información que tenemos sobre usted, póngase en contacto con nosotros (ver Datos de contacto).</li>\n\n 	<li><u>Derecho de rectificación</u>. Tiene derecho a que la información que tenemos acerca de usted sea corregida si es inexacta o incompleta. Puede pedirnos que rectifiquemos cualquier error en la información que tenemos sobre usted simplemente contactando con nosotros (Ver Datos de contacto).</li>\n\n 	<li><u>Derecho de supresión</u>. Se conoce también como «derecho al olvido» y, dicho brevemente, es el derecho que le permite solicitar la supresión o eliminación de la información que tenemos acerca de usted, simplemente contactando con nosotros (Ver Datos de contacto). Este derecho no es absoluto y sólo es ejercitable en determinadas circunstancias.</li>\n\n 	<li><u>Derecho de limitación del tratamiento</u>. Tiene derecho a bloquear o a suprimir cualquier uso futuro de su información. Cuando se dan estas limitaciones al tratamiento, HOMER puede seguir conservando sus datos, pero sin darles uso alguno.</li>\n\n 	<li><u>Derecho a la portabilidad de los datos</u>. Tiene derecho a obtener su información personal en un soporte accesible y transferible que le permita reutilizarla para sus propios fines y con diferentes proveedores de servicios. No obstante, no es un derecho general, y cuenta con excepciones. Para saber más, póngase en contacto con nosotros (Ver Datos de contacto).</li>\n\n 	<li><u>Derecho a formular quejas</u>. Tiene derecho a formular las oportunas quejas ante su autoridad nacional de protección de datos sobre el modo en que gestionamos o procesamos la información relativa a usted. (Ver Quejas)</li>\n\n 	<li><u>Derecho a revocar su consentimiento</u>. Si usted ha dado a HOMER su consentimiento para alguna gestión relativa a su información (es decir, si HOMER ha procesado datos suyos basándose en su autorización expresa), tiene derecho a retirar dicho consentimiento en cualquier momento. Puede hacerlo simplemente contactando con nosotros (Ver Datos de contacto). Tenga en cuenta que la revocación del consentimiento no implicará que hayamos hecho un uso ilegítimo de sus datos durante el tiempo en que dicho consentimiento hubiere sido aparente.</li>\n\n 	<li><u>Derecho de oposición al tratamiento</u>. Tiene derecho a oponerse a ciertos tipos de tratamiento, incluido el tratamiento para marketing directo y para la elaboración de perfiles.</li>\n\n</ul>\n\n&nbsp;\n\n\n\n<strong>10. Quejas</strong>\n\n\n\nSi no le parece correcta nuestra respuesta a cualquiera de sus quejas, o si cree que el tratamiento que damos a su información no es conforme con la legislación sobre protección de datos, puede formular la correspondiente queja a la Agencia Española de Protección de Datos (AEPD) utilizando los siguientes datos:\n\n<ul>\n\n 	<li>Dirección: Agencia Española de Protección de Datos, C/ Jorge Juan, 6. 28001 - Madrid</li>\n\n 	<li>Teléfono: 901 100 099 - 912 663 517</li>\n\n</ul>\n\n\n\n      \n\n   </div>\n\n</ion-content>'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\checkout\terms-condition\terms-condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], TermsCondition);
    return TermsCondition;
}());

//# sourceMappingURL=terms-condition.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotten; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountForgotten = /** @class */ (function () {
    function AccountForgotten(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.reset = "reset";
        this.loadForgotten = null;
        this.forgottenData = [];
        this.service.passwordResetNonce()
            .then(function (results) { return _this.handleNonce(results); });
    }
    AccountForgotten.prototype.forgotten = function (email) {
        var _this = this;
        if (this.validateForm()) {
            this.reset = "resetting...";
            this.disableSubmit = true;
            this.service.passwordreset(email, this.nonce, this.url)
                .then(function (results) { return _this.handleResult(results, email); });
        }
    };
    AccountForgotten.prototype.validateForm = function () {
        if (this.forgottenData.email == undefined || this.forgottenData.email == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountForgotten.prototype.handleNonce = function (results) {
        this.nonce = results.nonce;
        this.url = results.url;
    };
    AccountForgotten.prototype.handleResult = function (results, email) {
        this.reset = "reset";
        this.disableSubmit = false;
        this.functions.showAlert("SUCCESS", "An email with password reset link has been sent to your mail address " + email);
        this.nav.pop();
    };
    AccountForgotten = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\forgotten\forgotten.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <ion-title>{{"ResetPassword" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="forgotten">\n\n  <div class="margin">\n\n    <form #f="ngForm">\n\n      <ion-item>\n\n        <ion-label floating>{{"Enteremailaddress"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="email" [(ngModel)]="forgottenData.email" name="email">\n\n        </ion-input>\n\n      </ion-item>\n\n      <h2>{{"Forgot PasswordReset" | translate}}\n\n      </h2>\n\n      <button ion-button block color="button-color" class="button button-block button-default" [disabled]="disableSubmit" (click)="forgotten(forgottenData.email)">{{reset | translate}}\n\n      </button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\forgotten\forgotten.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountForgotten);
    return AccountForgotten;
}());

//# sourceMappingURL=forgotten.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoadingController } from 'ionic-angular';




var WishlistService = /** @class */ (function () {
    function WishlistService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    WishlistService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.addToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    WishlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */]])
    ], WishlistService);
    return WishlistService;
}());

//# sourceMappingURL=wishlist-service.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Address = /** @class */ (function () {
    function Address(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getAddress()
            .then(function (results) { return _this.addresses = results; });
    }
    Address.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses.customer);
    };
    Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\address\address.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title text-wrap text-center>{{"AddressBook" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-address">\n\n<ion-spinner *ngIf="!addresses" name="crescent" style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px" ></ion-spinner>\n\n   <div *ngIf="addresses" class="address">\n\n      <div *ngIf="addresses.customer.billing_address">\n\n      <ion-card>\n\n        <ion-card-header style="background-color: #f9f9f9">\n\n          {{"BillingAddress" | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content style="margin-top: 10px">\n\n          {{addresses.customer.billing_address.first_name}} {{addresses.customer.billing_address.last_name}}<br *ngIf="addresses.customer.billing_address.first_name">\n\n          {{addresses.customer.billing_address.address_1}}<br *ngIf="addresses.customer.billing_address.address_1">\n\n          {{addresses.customer.billing_address.address_2}}<br *ngIf="addresses.customer.billing_address.address_2">\n\n          {{addresses.customer.billing_address.city}} {{addresses.customer.billing_address.state}}<br *ngIf="addresses.customer.billing_address.city">\n\n          {{addresses.customer.billing_address.phone}}<br *ngIf="addresses.customer.billing_address.phone">\n\n          {{addresses.customer.billing_address.email}}<br *ngIf="addresses.customer.billing_address.email">\n\n          {{addresses.customer.billing_address.country}} {{addresses.customer.billing_address.postcode}}<br *ngIf="addresses.customer.billing_address.postcode">\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </div>\n\n      <div *ngIf="addresses.customer.shipping_address">\n\n      <ion-card>\n\n        <ion-card-header style="background-color: #f9f9f9">\n\n          {{"ShippingAddress" | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content style="margin-top: 10px">\n\n          {{addresses.customer.shipping_address.first_name}} {{addresses.customer.shipping_address.last_name}}<br *ngIf="addresses.customer.shipping_address.first_name">\n\n          {{addresses.customer.shipping_address.address_1}}<br *ngIf="addresses.customer.shipping_address.address_1">\n\n          {{addresses.customer.shipping_address.address_2}}<br *ngIf="addresses.customer.shipping_address.address_2">\n\n          {{addresses.customer.shipping_address.city}} {{addresses.customer.shipping_address.state}}<br *ngIf="addresses.customer.shipping_address.city">\n\n          {{addresses.customer.shipping_address.phone}}<br *ngIf="addresses.customer.shipping_address.phone">\n\n          {{addresses.customer.shipping_address.email}}<br *ngIf="addresses.customer.shipping_address.email">\n\n          {{addresses.customer.shipping_address.country}} {{addresses.customer.shipping_address.postcode}}<br>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </div>\n\n      <div class="margin">\n\n         <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase (click)="editAddress()">{{"EditAddress" | translate}}</button>\n\n      </div>\n\n   </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Address);
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_socket_io__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_product_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal__ = __webpack_require__(551);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { OrdersDetailPage } from '../orders-detail/orders-detail';
/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(nav, socket, navCtrl, navParams, values, productService, modalCtrl) {
        var _this = this;
        this.nav = nav;
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = values;
        this.productService = productService;
        this.modalCtrl = modalCtrl;
        this.socket.connect();
        this.getData().subscribe(function (data) {
            // this.data.splice(0, ...data.length)
            _this.data = data;
            console.log(data);
        });
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
    };
    OrdersPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    OrdersPage.prototype.ngOnInit = function () {
    };
    OrdersPage.prototype.getCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    // openOrdersDetail(){
    //   this.navCtrl.push(OrdersDetailPage,{data:this.data})
    // }
    OrdersPage.prototype.getData = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"](function (observer) {
            console.log("customerId", _this.values.customerId);
            _this.socket.emit('getordersbyclients', { id: _this.values.customerId });
            _this.socket.fromEvent('getordersbyclients').subscribe(function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    OrdersPage.prototype.changestatecancel = function (order, onesignal) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__modal_modal__["a" /* ModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data.result && data.message != '') {
                _this.productService.changestate({
                    "order": order,
                    "state": "cancelado",
                    "isCancel": data.message
                });
                console.log(onesignal);
                _this.productService.sendNotification({
                    "title": "Servicio cancelado",
                    "content": "El cliente ha cancelado el servicio el motivo " + data.message,
                    "onesignalid": onesignal
                });
            }
        });
    };
    OrdersPage.prototype.openchat = function (order) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */], { order: order });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders',template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\orders\orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title>\n          <img   src="{{values.avatar}}" />\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="sub-header">\n    <h1>Mis Reservas</h1>\n  </div>\n  <div class="card" *ngFor="let orders of data">\n    <div class="card-body">\n      <div class="row-h2">\n        <h2 style="font-size: 16px;">\n          <b>Booking # {{orders.id}}</b>\n        </h2>\n        <h2>\n         <b>Fecha de solicitud: </b> <br>{{orders.date | date: \'fullDate\' }}, {{orders.hour}}\n        </h2>\n      </div>\n      <h2>\n        <b>Estado de la reserva: </b> <br><span style="text-transform: uppercase;">{{orders.status}}</span>\n      </h2>\n      <h2>\n        <b>Servicio solicitado: </b> <br>{{orders.productName}}\n      </h2>\n      <h2>\n        <b>Dirección: </b> <br>{{orders.location}}\n      </h2>\n      <h2 *ngIf="orders.isCancel != null && orders.isCancel != \'\' ">\n        <b>Motivo de cancelación: </b> <br>{{orders.isCancel}}\n      </h2>\n      <button style="background: #000;" *ngIf="orders.status != \'cancelado\' && orders.status == \'finalizado\'" (click)="getCart()"  text-center ion-button icon-left clear  icon-only class="has-icon icon-only" small text-uppercase >\n        Pagar\n      </button>\n      <button *ngIf="orders.status != \'cancelado\'"  (click)="openchat(orders.id)"  text-center ion-button icon-left clear color="button-color" icon-only class="has-icon icon-only" small text-uppercase >\n        Chat\n      </button>\n      <button *ngIf="orders.status != \'cancelado\'" (click)="changestatecancel(orders.id, orders.onesignal)" text-center ion-button icon-left clear color="button-color" icon-only class="has-icon icon-only" small text-uppercase >\n        Cancelar\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ngx_socket_io__["a" /* Socket */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.message = '';
        this.showItem = false;
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.showOther = function () {
        this.showItem = !this.showItem;
    };
    ModalPage.prototype.acept = function () {
        this.viewCtrl.dismiss({ result: true, message: this.message });
    };
    ModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({ result: false, message: '' });
    };
    ModalPage.prototype.selectMessage = function (event) {
        this.message = event;
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal',template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\modal\modal.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <ion-buttons left>\n        <button ion-button icon-left (click)="cancel()" >\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title >\n        cancelar servicio\n          <!-- <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" /> -->\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content style="width: 100%;">\n  <div class="sub-header">\n    <h1>Motivos De Cancelación</h1>\n  </div>\n  <ion-list radio-group (ionChange)="selectMessage($event)" style="margin: 100px auto 10px ; width: 90%;">\n      <!-- <ion-list-header>\n          <ion-label>\n            Seleccione por favor una de las opciones\n          </ion-label>\n      </ion-list-header> -->\n\n      <ion-item  no-lines style="margin-top:50px; border-radius: 5px;" class="card2">\n        <ion-label  class="heading text-center" style="font-size: 18px; font-weight: 900;">\n          He cancelado el servicio por equivocación\n        </ion-label>\n        <ion-radio item-center color="dark" value="He cancelado el servicio por equivocación"></ion-radio>\n      </ion-item>\n\n      <ion-item  no-lines style="margin-top:10px; border-radius: 5px;" class="card2">\n        <ion-label  class="heading text-center" style="font-size: 18px; font-weight: 900;">\n          El proveedor no quiere acabar con el servicio\n        </ion-label>\n        <ion-radio item-center color="dark" value="El proveedor no quiere acabar con el servicio"></ion-radio>\n      </ion-item>\n\n      <ion-item  no-lines style="margin-top:10px; border-radius: 5px;" class="card2">\n        <ion-label  class="heading text-center" style="font-size: 18px; font-weight: 900;">\n          Otros\n        </ion-label>\n        <ion-radio item-center color="dark" value="Otros" (click)="showOther()"></ion-radio>\n      </ion-item>\n      <ion-item  no-lines style="margin-top:10px; border-radius: 5px;" class="card2" [hidden]="!showItem">\n        <textarea id="otro" name="otro" rows="4" cols="10">\n\n        </textarea>\n      </ion-item>\n  </ion-list>\n  <div style="width:100%;">\n    <div style="margin:0 auto; width: 70%; display:flex; justify-content: space-between;">\n      <button ion-button style="font-family: \'Courier New\', Courier, monospace;" (click)="acept()">Aceptar</button>\n      <button class="black" ion-button style="font-family: \'Courier New\', Courier, monospace;" (click)="cancel()">Cancelar</button>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountRegister = /** @class */ (function () {
    function AccountRegister(nav, service, functions, oneSignal, values, platform) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.oneSignal = oneSignal;
        this.values = values;
        this.platform = platform;
        this.disableSubmit = false;
        this.Register = "Register";
        this.registerData = {};
        this.countries = {};
        this.registerData.billing_address = {};
        this.registerData.shipping_address = {};
        this.service.getNonce()
            .then(function (results) { return _this.handleResults(results); });
    }
    AccountRegister.prototype.handleResults = function (results) {
        this.countries = results;
    };
    AccountRegister.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.validateForm = function () {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false;
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false;
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
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
    };
    AccountRegister.prototype.registerCustomer = function () {
        var _this = this;
        this.errors = "";
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.service.registerCustomer(this.registerData)
                .then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.handleRegister = function (results) {
        var _this = this;
        console.log('result', results);
        console.log('error ', results.errors);
        this.disableSubmit = false;
        if (!results.errors) {
            this.countries.checkout_login;
            this.service.login(this.registerData)
                .then(function (results) { return _this.loginStatus = results; });
            if (this.platform.is('cordova')) {
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({ email: this.registerData.email, pincode: this.registerData.billing_address.postcode, city: this.registerData.billing_address.city });
            }
            this.functions.showAlert('Verification', 'Your account has been created! please check your email');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    };
    AccountRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Register" | translate}}\n\n    </ion-title> \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="account-register">\n\n  <div>\n\n    <form #f="ngForm">\n\n      <ion-list>\n\n        <ion-list-header>\n\n          <b primary>{{"AccountInfo" | translate}}\n\n          </b>\n\n        </ion-list-header>\n\n        <ion-item>\n\n          <ion-label floating>{{"FirstName" | translate}}\n\n          </ion-label>\n\n          <ion-input type="text" [(ngModel)]="registerData.first_name" name="firstname">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"LastName" | translate}}\n\n          </ion-label>\n\n          <ion-input type="text" [(ngModel)]="registerData.last_name" name="lastname">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Email" | translate}}\n\n          </ion-label>\n\n          <ion-input type="email" [(ngModel)]="registerData.email" name="Email">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"password" | translate}}\n\n          </ion-label>\n\n          <ion-input type="password" [(ngModel)]="registerData.password" name="password">\n\n          </ion-input>\n\n        </ion-item>\n\n        \n\n          <ion-input hidden type="text" [(ngModel)]="registerData.billing_address.company" name="billing_company">\n\n          </ion-input>\n\n       \n\n        <ion-item>\n\n          <ion-label floating>{{"Phone" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="number" [(ngModel)]="registerData.billing_address.phone" name="billing_phone">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"StreetAddress" | translate}} 1\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.address_1" name="billing_address_1">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"StreetAddress" | translate}} 2\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.address_2" name="billing_address_2">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"City" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.city" name="billing_city">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Postcode" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.postcode" name="postcode">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="countries.country">     \n\n          <ion-label>  \n\n            {{"Country" | translate}}\n\n          </ion-label>   \n\n          <ion-select [(ngModel)]="registerData.billing_address.country" (ngModelChange)="getBillingRegion(registerData.billing_address.country)" name="country">\n\n            <div *ngFor="let field of countries.country.countries | keys">\n\n              <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span></ion-option>\n\n            </div>\n\n          </ion-select>      \n\n        </ion-item>\n\n        <ion-item *ngIf="billing_states">  \n\n          <ion-label>  \n\n            {{"State" | translate}}\n\n          </ion-label>   \n\n          <ion-select [(ngModel)]="registerData.billing_address.state" name="state">\n\n            <div *ngFor="let field of billing_states | keys">\n\n              <ion-option value="{{field.key}}">{{field.value}}\n\n              </ion-option>\n\n            </div>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="!billing_states">\n\n          <ion-label floating>{{"State" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.state" name="state">\n\n          </ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n        <div *ngIf="errors" class="error-message">\n\n            <h2 *ngFor="let item of errors | keys">{{item.value.message}}\n\n            </h2>\n\n        </div>\n\n\n\n      <div class="margin"> \n\n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="registerCustomer()">{{Register | translate}}\n\n        </button>\n\n      </div>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], AccountRegister);
    return AccountRegister;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersVendor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__booking_vendor_booking_vendor__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersVendor = /** @class */ (function () {
    function OrdersVendor(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter['id'] = this.values.customerId.toString();
        this.service.getOrdersVendor(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    OrdersVendor.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrdersVendor(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    OrdersVendor.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        if (results.orders.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    OrdersVendor.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    OrdersVendor.prototype.viewBooking = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__booking_vendor_booking_vendor__["a" /* BookingVendor */]);
    };
    OrdersVendor.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "cancelled"
            }
        }, id)
            .then(function (results) { return _this.handleCancelOrder(results); });
    };
    OrdersVendor.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrdersVendor(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    OrdersVendor.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "pending"
            }
        }, id)
            .then(function (results) { return _this.handleReOrder(results); });
    };
    OrdersVendor.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    OrdersVendor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\orders-vendor\orders-vendor.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title  text-center>{{"Customer Orders" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-order">\n\n  <ion-spinner *ngIf="!orders" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orders">\n\n\n\n    <div class="no-orders">\n\n    <h4 *ngIf="orders.orders.length == 0" text-center no-lines>\n\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n\n      </button>\n\n    </h4>\n\n    </div>\n\n\n\n    <div *ngIf="orders.orders.length">\n\n      <ion-item *ngFor="let item of orders.orders">\n\n        <h2>\n\n          <b>{{"Order" | translate}} # :\n\n          </b> {{item.order_id}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Booking" | translate}} # :\n\n          </b> {{item.bookingId}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Orderdate" | translate}} :\n\n          </b> {{item.date_created.date | date:\'medium\'}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Customer" | translate}} :\n\n          </b> {{item.billing_address.first_name}} {{item.billing_address.last_name}}, {{item.billing_address.address_1}}, {{item.billing_address.address_2}}, {{item.billing_address.city}}, {{item.billing_address.state}}, {{item.billing_address.country}}, {{item.billing_address.postcode}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Status" | translate}} :\n\n          </b> {{item.order_status}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Quantity" | translate}} :\n\n          </b> {{item.qty}}\n\n        </h2>\n\n        <!-- <h2>\n\n          <b>{{"SubTotal" | translate}} :\n\n          </b> {{1*item.subtotal | currency:values.currency:true:\'1.2-2\' }}\n\n        </h2> -->\n\n        <h2>\n\n          <b>{{"Totals" | translate}} :\n\n          </b> {{1*item.total | currency:values.currency:true:\'1.2-2\' }}\n\n        </h2>\n\n        <ion-row class="row-buttons">\n\n          <ion-col no-padding width-50>\n\n            <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.order_id)">\n\n              <ion-icon name="ios-eye">\n\n              </ion-icon>\n\n              {{"ViewDetails" | translate}} \n\n            </button>\n\n          </ion-col>\n\n          <ion-col no-padding width-50>\n\n            <button text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="viewBooking()">		\n\n              <ion-icon name="ios-calendar">\n\n              </ion-icon>  		\n\n              {{"View Booking" | translate}}\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </div> \n\n    <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content\n\n      loadingSpinner="crescent"\n\n      loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\orders-vendor\orders-vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], OrdersVendor);
    return OrdersVendor;
}());

//# sourceMappingURL=orders-vendor.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookingDetails = /** @class */ (function () {
    function BookingDetails(nav, service, params, actionSheetCtrl, config, reqhttp, http, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.actionSheetCtrl = actionSheetCtrl;
        this.config = config;
        this.reqhttp = reqhttp;
        this.http = http;
        this.values = values;
        console.log(params);
        this.idOrder = params.data.idOrder;
        this.idVendor = params.data.idVendor;
        this.service.getBooking(this.idOrder, this.idVendor)
            .then(function (results) { return _this.orderDetails = results; });
    }
    BookingDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\booking-details\booking-details.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Booking Info" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="order-details">\n\n  <ion-spinner *ngIf="!orderDetails" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orderDetails">\n\n    <ion-item-group>\n\n      <ion-item-divider>{{"Booked Product" | translate }}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.booked_product}}\n\n      </ion-item>\n\n      \n\n      <ion-item-divider>{{"Customer Details" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col>{{"Name" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.first_name}}\n\n            {{orderDetails.order.billing_address.last_name}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Email" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.email}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Phone" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.phone}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Address" | translate}} 1\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.address_1}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Address" | translate}} 2\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.address_2}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"City" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.city}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"State" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.city}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Postcode" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.postcode}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      <ion-item-divider>{{"Booking Status" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.statusbooking}}\n\n      </ion-item> \n\n\n\n      <ion-item-divider>{{"Booking Date/Time" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col>{{"Start Date" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.start_date | date:\'medium\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"End Date" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.end_date | date:\'medium\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\booking-details\booking-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], BookingDetails);
    return BookingDetails;
}());

//# sourceMappingURL=booking-details.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_cc_library__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_defer__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__virtual_card_admin_virtual_card_admin__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the NewCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var NewCardPage = /** @class */ (function () {
    function NewCardPage(fb, navCtrl, navParams, values) {
        var _this = this;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = values;
        this.submitted = false;
        this.type$ = Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_defer__["defer"])(function () { return _this.demoForm.get('creditCard').valueChanges; })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (num) { return __WEBPACK_IMPORTED_MODULE_3_angular_cc_library__["a" /* CreditCard */].cardType(num); }));
    }
    NewCardPage.prototype.ngOnInit = function () {
        this.demoForm = this.fb.group({
            creditCard: ['', [__WEBPACK_IMPORTED_MODULE_3_angular_cc_library__["c" /* CreditCardValidators */].validateCCNumber]],
            expDate: ['', [__WEBPACK_IMPORTED_MODULE_3_angular_cc_library__["c" /* CreditCardValidators */].validateExpDate]],
            cvc: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(4)]],
        });
    };
    NewCardPage.prototype.goToNextField = function (controlName, nextField) {
        if (this.demoForm.get(controlName).valid) {
            nextField.focus();
        }
    };
    NewCardPage.prototype.onSubmit = function (demoForm) {
        this.submitted = true;
        localStorage.setItem('cardData', JSON.stringify(demoForm.value));
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__virtual_card_admin_virtual_card_admin__["a" /* VirtualCardAdminPage */]);
    };
    NewCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-card',template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\new-card\new-card.html"*/'<!--\n  Generated template for the NewCardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="text-header">\n    <h2>!Agregar tarjeta!</h2>\n  </div>\n\n  <div class="img-card">\n    <img width="315" src="{{values.card}}" alt="card">\n  </div>\n\n  <form [formGroup]="demoForm"\n      (ngSubmit)="onSubmit(demoForm)"\n      novalidate>\n      <div class="form-group">\n         <div class="sub-group">\n            <label for="cc-number" class="control-label">Numero de la tarjeta\n              <small class="text-muted"\n                    *ngIf="type$ | async as type">[<span class="cc-brand">{{type}}</span>]</small></label>\n              <input id="cc-number"\n                    (input)="goToNextField(\'creditCard\', expireInput)"\n                    formControlName="creditCard"\n                    type="tel"\n                    class="input-lg form-control cc-number"\n                    autocomplete="cc-number"\n                    placeholder="•••• •••• •••• ••••"\n                    ccNumber>\n          </div>\n\n      </div>\n\n      <div class="form-group">\n          <div class="sub-group">\n            <label for="cc-exp" class="control-label">Vencimiento</label>\n            <input id="cc-exp"\n                  (input)="goToNextField(\'expDate\', cvcInput)"\n                  #expireInput\n                  formControlName="expDate"\n                  type="tel"\n                  class="input-lg form-control cc-exp"\n                  autocomplete="cc-exp"\n                  placeholder="MM / YY"\n                  ccExp>\n          </div>\n          <div class="sub-group">\n            <label for="cc-cvc" class="control-label">CVC</label>\n            <input id="cc-cvc"\n                  #cvcInput\n                  formControlName="cvc"\n                  type="tel"\n                  class="input-lg form-control cc-cvc"\n                  autocomplete="off"\n                  placeholder="•••"\n                  required\n                  ccCVC>\n          </div>\n      </div>\n\n      <div class="errors">\n          <div *ngIf="!demoForm.controls.creditCard.valid && demoForm.controls.creditCard.dirty" class="alert alert-danger">Credit Card is invalid</div>\n          <div *ngIf="!demoForm.controls.expDate.valid && demoForm.controls.expDate.dirty" class="alert alert-danger">Expiration Date is required</div>\n          <div *ngIf="!demoForm.controls.cvc.valid  && demoForm.controls.cvc.dirty" class="alert alert-danger">CVC is required</div>\n      </div>\n      <div class="button-div">\n        <button class="button">Guardar</button>\n      </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\new-card\new-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_6__providers_service_values__["a" /* Values */]])
    ], NewCardPage);
    return NewCardPage;
}());

//# sourceMappingURL=new-card.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_list_products_list__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_wishlist_wishlist__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account_account__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = /** @class */ (function () {
    function TabsPage(nav, values, modalCtrl) {
        this.nav = nav;
        this.values = values;
        this.modalCtrl = modalCtrl;
        this.AccountLogin = __WEBPACK_IMPORTED_MODULE_2__account_login_login__["a" /* AccountLogin */];
        this.Home = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */];
        this.productListPage = __WEBPACK_IMPORTED_MODULE_3__products_list_products_list__["b" /* ProductsListPage */];
        this.WishlistPage = __WEBPACK_IMPORTED_MODULE_4__pages_account_wishlist_wishlist__["a" /* WishlistPage */];
        this.CartPage = __WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */];
        this.Values = __WEBPACK_IMPORTED_MODULE_6__providers_service_values__["a" /* Values */];
        this.AccountPage = __WEBPACK_IMPORTED_MODULE_7__pages_account_account_account__["a" /* AccountPage */];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["Tabs"])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\tabs\tabs.html"*/'<ion-tabs class="tabs-islogged" *ngIf="values.isLoggedIn">\n  <ion-tab [root]="productListPage" tabIcon="md-home"></ion-tab>\n  <!-- <ion-tab [root]="Home" tabIcon="md-search"></ion-tab> -->\n  <ion-tab [root]="CartPage"  tabIcon="md-cart"></ion-tab>\n  <ion-tab [root]="WishlistPage" tabIcon="md-heart"></ion-tab>\n  <!-- <ion-tab [root]="AccountPage" tabIcon="md-person"></ion-tab> -->\n</ion-tabs>\n<ion-tabs *ngIf="!values.isLoggedIn" #homerTabs>\n  <ion-tab [root]="productListPage" tabIcon="md-home"></ion-tab>\n  <!-- <ion-tab [root]="Home" tabIcon="md-search"></ion-tab> -->\n  <ion-tab [root]="AccountLogin" tabIcon="md-person"></ion-tab>\n  <ion-tab [root]="CartPage" tabIcon="md-cart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["ModalController"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(569);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_post_post__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_orders_orders__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_orders_vendor_orders_vendor__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_booking_vendor_booking_vendor__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_booking_details_booking_details__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_account_account__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_checkout_billing_address_form_billing_address_form__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_checkout_order_summary_order_summary__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_checkout_terms_condition_terms_condition__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_product_product__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_products_products__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_search_search__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_products_list_products_list__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_modal_modal__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_virtual_card_admin_virtual_card_admin__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_new_card_new_card__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_native_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_service_cart_service__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_service_wishlist_service__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_service_category_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_service_checkout_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_service_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_service_product_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_service_search_service__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_pipe_pipe__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_call_number__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_email_composer__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_app_rate__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_social_sharing__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_common_http__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ngx_translate_http_loader__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_onesignal__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ion2_calendar__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_56_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_geolocation_ngx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_native_geocoder__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_in_app_browser__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_angular_cc_library__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_ngx_socket_io__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































/*------------------------Providers----------------------------------*/















//import { PhotoViewer } from '@ionic-native/photo-viewer';

















var config = { url: 'https://websockethomer.herokuapp.com/', options: {} };
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_53__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_orders_vendor_orders_vendor__["a" /* OrdersVendor */],
                __WEBPACK_IMPORTED_MODULE_11__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_booking_vendor_booking_vendor__["a" /* BookingVendor */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_booking_details_booking_details__["a" /* BookingDetails */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_20__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_21__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_22__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_products_list_products_list__["b" /* ProductsListPage */],
                __WEBPACK_IMPORTED_MODULE_45__providers_pipe_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_26__pages_products_list_products_list__["a" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_virtual_card_admin_virtual_card_admin__["a" /* VirtualCardAdminPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_new_card_new_card__["a" /* NewCardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_34__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_50__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_56_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_60__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_61_angular_cc_library__["b" /* CreditCardDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_51__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_62_ngx_socket_io__["b" /* SocketIoModule */].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_52__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_52__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_50__angular_common_http__["a" /* HttpClient */]],
                    },
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_11__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_orders_vendor_orders_vendor__["a" /* OrdersVendor */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_booking_vendor_booking_vendor__["a" /* BookingVendor */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_booking_details_booking_details__["a" /* BookingDetails */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_20__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_21__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_22__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_products_list_products_list__["b" /* ProductsListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_products_list_products_list__["a" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_virtual_card_admin_virtual_card_admin__["a" /* VirtualCardAdminPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_new_card_new_card__["a" /* NewCardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__providers_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_36__providers_service_wishlist_service__["a" /* WishlistService */],
                __WEBPACK_IMPORTED_MODULE_37__providers_service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_38__providers_service_checkout_service__["a" /* CheckoutService */],
                __WEBPACK_IMPORTED_MODULE_39__providers_service_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_40__providers_service_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_41__providers_service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_42__providers_service_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_43__providers_service_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_44__providers_service_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] }
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_products_products__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_address_address__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_register_register__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_post_post__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_rate__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_account_account_account__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_account_orders_vendor_orders_vendor__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_account_booking_vendor_booking_vendor__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_virtual_card_admin_virtual_card_admin__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_chat_chat__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var MyApp = /** @class */ (function () {
    function MyApp(iab, statusBar, splashScreen, alertCtrl, config, oneSignal, emailComposer, appRate, platform, service, values, translateService, socialSharing, nativeStorage) {
        var _this = this;
        this.iab = iab;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.oneSignal = oneSignal;
        this.emailComposer = emailComposer;
        this.appRate = appRate;
        this.platform = platform;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.socialSharing = socialSharing;
        this.nativeStorage = nativeStorage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */];
        this.items = {};
        this.buttonLanguagesSettings = false;
        this.Languages = [];
        platform.ready().then(function () {
            statusBar.styleDefault();
            statusBar.backgroundColorByHexString('#f4f5f8');
            _this.service.load().then(function (results) { return _this.handleService(results); });
            _this.nativeStorage.getItem('blocks').then(function (data) {
                if (data) {
                    _this.service.blocks = data.blocks;
                    _this.values.settings = data.settings;
                    _this.values.calc(platform.width());
                }
            }, function (error) { return console.error(error); });
            _this.nativeStorage.getItem('categories').then(function (data) {
                if (data) {
                    _this.service.categories = data;
                    _this.service.mainCategories = [];
                    for (var i = 0; i < _this.service.categories.length; i++) {
                        if (_this.service.categories[i].parent == '0') {
                            _this.service.mainCategories.push(_this.service.categories[i]);
                        }
                    }
                }
            }, function (error) { return console.error(error); });
        });
    }
    MyApp.prototype.handleService = function (results) {
        var _this = this;
        if (this.values.settings.app_dir == 'rtl')
            this.platform.setDir('rtl', true);
        //cambiar luego en la configuracion del wordpress en el plugin
        this.translateService.setDefaultLang('spanish');
        // this.translateService.setDefaultLang(this.values.settings.language);
        this.values.calc(this.platform.width());
        if (this.platform.is('cordova')) {
            this.oneSignal.startInit(this.values.settings.onesignal_app_id, this.values.settings.google_project_id);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(function (result) {
                console.log(result);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (result) {
                if (result.notification.payload.additionalData.category) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_products_products__["a" /* ProductsPage */], { id: result.notification.payload.additionalData.category, slug: result.notification.payload.additionalData.slug, name: result.notification.payload.additionalData.name });
                }
                else if (result.notification.payload.additionalData.product) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */], { id: result.notification.payload.additionalData.product });
                }
                else if (result.notification.payload.additionalData.post) {
                    _this.post({ id: result.notification.payload.additionalData.post }, '');
                }
                else if (result.notification.payload.additionalData.order) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */], { id: result.notification.payload.additionalData.order });
                }
            });
            this.oneSignal.getIds().then(function (identity) {
                console.log("agarro id", identity.userId, identity.userId);
                _this.values.pushToken = identity.pushToken;
                _this.values.userId = identity.userId;
            });
            this.oneSignal.endInit();
        }
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.getCategory = function (id, slug, name) {
        this.items = [];
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_products_products__["a" /* ProductsPage */], this.items);
    };
    MyApp.prototype.getCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
        this.values.wishlistId = [];
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.account = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_23__pages_account_account_account__["a" /* AccountPage */]);
    };
    MyApp.prototype.openExternalLink = function () {
        //   let options = 'location=no,toolbar=no,hidden=no,enableViewportScale=yes';
        var url = encodeURIComponent('https://www.seg-social.es/wps/wcm/connect/wss/8cd0aeda-1311-4e24-a310-76b5eb52ef1e/TA_2S-138+%28V.8%29.pdf?MOD=AJPERES&amp;CVID');
        var browser = this.iab.create('https://docs.google.com/viewer?url=' + url);
    };
    MyApp.prototype.cards = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_26__pages_virtual_card_admin_virtual_card_admin__["a" /* VirtualCardAdminPage */]);
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_account_register_register__["a" /* AccountRegister */]);
    };
    MyApp.prototype.address = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_account_address_address__["a" /* Address */]);
    };
    MyApp.prototype.order = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__["a" /* OrdersPage */]);
    };
    MyApp.prototype.orderVendor = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_24__pages_account_orders_vendor_orders_vendor__["a" /* OrdersVendor */]);
    };
    MyApp.prototype.bookingVendor = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_account_booking_vendor_booking_vendor__["a" /* BookingVendor */]);
    };
    MyApp.prototype.cart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.wishlist = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.shop = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.rateApp = function () {
        if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
                ios: this.values.settings.rate_app_ios_id,
                android: this.values.settings.rate_app_android_id,
                windows: 'ms-windows-store://review/?ProductId=' + this.values.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(true);
        }
    };
    MyApp.prototype.shareApp = function () {
        if (this.platform.is('cordova')) {
            var url = '';
            if (this.platform.is('android'))
                url = this.values.settings.share_app_android_link;
            else
                url = this.values.settings.share_app_ios_link;
            var options = {
                message: '',
                subject: '',
                // files: ['', ''],
                url: url,
                chooserTitle: ''
            };
            this.socialSharing.shareWithOptions(options);
        }
    };
    MyApp.prototype.setLang = function () {
        console.log(this.Languages);
        this.translateService.setDefaultLang(this.Languages);
    };
    MyApp.prototype.contact = function () {
        var email = {
            to: this.values.settings.support_email,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    MyApp.prototype.post = function (id, title) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_post_post__["a" /* Post */], { id: id, title: title });
    };
    MyApp.prototype.openchat = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_chat_chat__["a" /* ChatPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\app\app.html"*/'<ion-menu [content]="content" side="{{this.values?.settings?.app_dir}}">\n  <div class="menu-toolbar">\n    <ion-toolbar color="header">\n      <div class="profile-image">\n        <img src="{{values.avatar}}">\n        <!--img src="{{values.avatar}}"-->\n      </div>\n      <!--button ion-button full menuClose clear color="light" class="button-customername" *ngIf="values.isLoggedIn">\n        <strong>{{values.customerName}}\n        </strong>\n      </button>\n      <button ion-button full menuClose clear color="light" class="button-welcome" *ngIf="!values.isLoggedIn">\n        <strong>{{"Welcome" | translate}}\n        </strong>\n      </button-->\n    </ion-toolbar>\n  </div>\n  <ion-content class="sidemenugrad">\n    <ion-list class="menu-items-single" no-margin>\n\n      <!-- <div *ngIf="service.categories" class="category-name">\n        <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n          <ion-icon item-right class="ion-ios-arrow-forward item-icon">\n          </ion-icon>\n          <span [innerHTML]="item.name"></span>\n        </ion-item>\n      </div> -->\n    </ion-list>\n    <ion-list class="menu-items">\n      <ion-item tappable menuClose (click)="shop()">\n        <!-- <ion-icon item-left ios="ios-home" md="md-home">\n        </ion-icon> -->\n        <ion-icon item-left name="briefcase"></ion-icon>\n        {{"Inicio"}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="account()" *ngIf="values.isLoggedIn">\n        <ion-icon  name="contact" item-left>\n        </ion-icon>\n        {{"Account" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="cards()" *ngIf="values.isLoggedIn">\n        <ion-icon  name="card" item-left>\n        </ion-icon>\n        {{"Cards" | translate}}\n      </ion-item>\n      <!-- chat -->\n      <!-- <ion-item tappable menuClose (click)="openchat()" >\n        <ion-icon  name="contact" item-left>\n        </ion-icon>\n        {{"Chat" | translate}}\n      </ion-item> -->\n      <!-- chat -->\n      <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n        <ion-icon name="person" item-left>\n        </ion-icon>{{"LogIn" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="register()" *ngIf="!values.isLoggedIn">\n        <ion-icon item-left ios="ios-create" md="md-create">\n        </ion-icon>\n        {{"Register" | translate}}\n      </ion-item>\n      <!-- <ion-item tappable menuClose (click)="address()" *ngIf="values.isLoggedIn">\n        <ion-icon item-left name="locate">\n        </ion-icon>{{"Address" | translate}}\n      </ion-item> -->\n      <ion-item tappable menuClose (click)="order()" *ngIf="values.isLoggedIn">\n        <ion-icon item-left name="archive">\n        </ion-icon>{{"Your Orders" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="wishlist()" *ngIf="values.isLoggedIn">\n        <ion-icon name="heart" item-left>\n        </ion-icon>{{"Wishlist" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="cart()">\n        <ion-icon ios="ios-cart" md="md-cart" item-left>\n        </ion-icon>\n        {{"Carrito" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="contact()">\n        {{"Contact Us" | translate}}\n        <ion-icon name="mail" item-left></ion-icon>\n      </ion-item>\n      <ion-item tappable menuClose *ngIf="values.data?.pages?.about && values.data?.pages?.about != \'0\'"\n        (click)="post(values.data?.pages?.about, \'Nosotros\')">\n        {{"About Us" | translate}}\n        <ion-icon name="ios-information-circle" item-left></ion-icon>\n      </ion-item>\n      <ion-item tappable menuClose *ngIf="values.data?.pages?.privacy && values.data?.pages?.privacy != \'0\'"\n        (click)="post(values.data?.pages?.privacy, \'POLÍTICA DE PRIVACIDAD HOMER\')">\n        <ion-icon name="paper" item-left></ion-icon>\n        {{"Terms & Conditions" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose no-line (click)="openExternalLink()">\n        <ion-icon name="man" item-left></ion-icon>\n        {{"Alta Homer" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose no-line (click)="shareApp()">\n        <ion-icon name="share" item-left></ion-icon>\n        {{"Share App" | translate}}\n      </ion-item>\n      <!-- <ion-item tappable menuClose no-line (click)="rateApp()">\n        <ion-icon name="thumbs-up" item-left></ion-icon>\n        {{"Rate App" | translate}}\n      </ion-item> -->\n\n      <ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n        <ion-icon item-left name="md-log-out">\n        </ion-icon>{{"Logout" | translate}}\n      </ion-item>\n\n      <!-- <ion-list *ngIf="values.isLoggedIn">\n        <ion-item *ngIf="values.vendor">\n          <label style="font-weight: bold;" for="">{{"Vendor" | translate}}</label>\n        </ion-item>\n\n        <ion-item tappable menuClose (click)="orderVendor()" *ngIf="values.vendor">\n          <ion-icon item-left name="reorder">\n          </ion-icon>{{"Customer Orders" | translate}}\n        </ion-item>\n        <ion-item tappable menuClose (click)="bookingVendor()" *ngIf="values.vendor">\n          <ion-icon item-left ios="ios-calendar" md="md-calendar">\n          </ion-icon>{{"Bookings" | translate}}\n        </ion-item>\n      </ion-list> -->\n\n      <!-- <ion-item>\n        <ion-icon style="background-color: #e8453c" name="globe" item-left></ion-icon>\n        <ion-label>\n          {{"SelectLanguage" | translate}}\n        </ion-label>\n        <ion-select [(ngModel)]="Languages" (ngModelChange)="setLang()">\n          <ion-option value="english">{{"Eglish" | translate}} </ion-option>\n          <ion-option value="spanish">{{"Spanish" | translate}} </ion-option>\n        </ion-select>\n      </ion-item> -->\n\n    </ion-list>\n    <br>\n    <br>\n    <br>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n</ion-nav>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_6__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 304,
	"./af.js": 304,
	"./ar": 305,
	"./ar-dz": 306,
	"./ar-dz.js": 306,
	"./ar-kw": 307,
	"./ar-kw.js": 307,
	"./ar-ly": 308,
	"./ar-ly.js": 308,
	"./ar-ma": 309,
	"./ar-ma.js": 309,
	"./ar-sa": 310,
	"./ar-sa.js": 310,
	"./ar-tn": 311,
	"./ar-tn.js": 311,
	"./ar.js": 305,
	"./az": 312,
	"./az.js": 312,
	"./be": 313,
	"./be.js": 313,
	"./bg": 314,
	"./bg.js": 314,
	"./bm": 315,
	"./bm.js": 315,
	"./bn": 316,
	"./bn.js": 316,
	"./bo": 317,
	"./bo.js": 317,
	"./br": 318,
	"./br.js": 318,
	"./bs": 319,
	"./bs.js": 319,
	"./ca": 320,
	"./ca.js": 320,
	"./cs": 321,
	"./cs.js": 321,
	"./cv": 322,
	"./cv.js": 322,
	"./cy": 323,
	"./cy.js": 323,
	"./da": 324,
	"./da.js": 324,
	"./de": 325,
	"./de-at": 326,
	"./de-at.js": 326,
	"./de-ch": 327,
	"./de-ch.js": 327,
	"./de.js": 325,
	"./dv": 328,
	"./dv.js": 328,
	"./el": 329,
	"./el.js": 329,
	"./en-au": 330,
	"./en-au.js": 330,
	"./en-ca": 331,
	"./en-ca.js": 331,
	"./en-gb": 332,
	"./en-gb.js": 332,
	"./en-ie": 333,
	"./en-ie.js": 333,
	"./en-il": 334,
	"./en-il.js": 334,
	"./en-in": 335,
	"./en-in.js": 335,
	"./en-nz": 336,
	"./en-nz.js": 336,
	"./en-sg": 337,
	"./en-sg.js": 337,
	"./eo": 338,
	"./eo.js": 338,
	"./es": 339,
	"./es-do": 340,
	"./es-do.js": 340,
	"./es-us": 341,
	"./es-us.js": 341,
	"./es.js": 339,
	"./et": 342,
	"./et.js": 342,
	"./eu": 343,
	"./eu.js": 343,
	"./fa": 344,
	"./fa.js": 344,
	"./fi": 345,
	"./fi.js": 345,
	"./fil": 346,
	"./fil.js": 346,
	"./fo": 347,
	"./fo.js": 347,
	"./fr": 348,
	"./fr-ca": 349,
	"./fr-ca.js": 349,
	"./fr-ch": 350,
	"./fr-ch.js": 350,
	"./fr.js": 348,
	"./fy": 351,
	"./fy.js": 351,
	"./ga": 352,
	"./ga.js": 352,
	"./gd": 353,
	"./gd.js": 353,
	"./gl": 354,
	"./gl.js": 354,
	"./gom-deva": 355,
	"./gom-deva.js": 355,
	"./gom-latn": 356,
	"./gom-latn.js": 356,
	"./gu": 357,
	"./gu.js": 357,
	"./he": 358,
	"./he.js": 358,
	"./hi": 359,
	"./hi.js": 359,
	"./hr": 360,
	"./hr.js": 360,
	"./hu": 361,
	"./hu.js": 361,
	"./hy-am": 362,
	"./hy-am.js": 362,
	"./id": 363,
	"./id.js": 363,
	"./is": 364,
	"./is.js": 364,
	"./it": 365,
	"./it-ch": 366,
	"./it-ch.js": 366,
	"./it.js": 365,
	"./ja": 367,
	"./ja.js": 367,
	"./jv": 368,
	"./jv.js": 368,
	"./ka": 369,
	"./ka.js": 369,
	"./kk": 370,
	"./kk.js": 370,
	"./km": 371,
	"./km.js": 371,
	"./kn": 372,
	"./kn.js": 372,
	"./ko": 373,
	"./ko.js": 373,
	"./ku": 374,
	"./ku.js": 374,
	"./ky": 375,
	"./ky.js": 375,
	"./lb": 376,
	"./lb.js": 376,
	"./lo": 377,
	"./lo.js": 377,
	"./lt": 378,
	"./lt.js": 378,
	"./lv": 379,
	"./lv.js": 379,
	"./me": 380,
	"./me.js": 380,
	"./mi": 381,
	"./mi.js": 381,
	"./mk": 382,
	"./mk.js": 382,
	"./ml": 383,
	"./ml.js": 383,
	"./mn": 384,
	"./mn.js": 384,
	"./mr": 385,
	"./mr.js": 385,
	"./ms": 386,
	"./ms-my": 387,
	"./ms-my.js": 387,
	"./ms.js": 386,
	"./mt": 388,
	"./mt.js": 388,
	"./my": 389,
	"./my.js": 389,
	"./nb": 390,
	"./nb.js": 390,
	"./ne": 391,
	"./ne.js": 391,
	"./nl": 392,
	"./nl-be": 393,
	"./nl-be.js": 393,
	"./nl.js": 392,
	"./nn": 394,
	"./nn.js": 394,
	"./oc-lnc": 395,
	"./oc-lnc.js": 395,
	"./pa-in": 396,
	"./pa-in.js": 396,
	"./pl": 397,
	"./pl.js": 397,
	"./pt": 398,
	"./pt-br": 399,
	"./pt-br.js": 399,
	"./pt.js": 398,
	"./ro": 400,
	"./ro.js": 400,
	"./ru": 401,
	"./ru.js": 401,
	"./sd": 402,
	"./sd.js": 402,
	"./se": 403,
	"./se.js": 403,
	"./si": 404,
	"./si.js": 404,
	"./sk": 405,
	"./sk.js": 405,
	"./sl": 406,
	"./sl.js": 406,
	"./sq": 407,
	"./sq.js": 407,
	"./sr": 408,
	"./sr-cyrl": 409,
	"./sr-cyrl.js": 409,
	"./sr.js": 408,
	"./ss": 410,
	"./ss.js": 410,
	"./sv": 411,
	"./sv.js": 411,
	"./sw": 412,
	"./sw.js": 412,
	"./ta": 413,
	"./ta.js": 413,
	"./te": 414,
	"./te.js": 414,
	"./tet": 415,
	"./tet.js": 415,
	"./tg": 416,
	"./tg.js": 416,
	"./th": 417,
	"./th.js": 417,
	"./tk": 418,
	"./tk.js": 418,
	"./tl-ph": 419,
	"./tl-ph.js": 419,
	"./tlh": 420,
	"./tlh.js": 420,
	"./tr": 421,
	"./tr.js": 421,
	"./tzl": 422,
	"./tzl.js": 422,
	"./tzm": 423,
	"./tzm-latn": 424,
	"./tzm-latn.js": 424,
	"./tzm.js": 423,
	"./ug-cn": 425,
	"./ug-cn.js": 425,
	"./uk": 426,
	"./uk.js": 426,
	"./ur": 427,
	"./ur.js": 427,
	"./uz": 428,
	"./uz-latn": 429,
	"./uz-latn.js": 429,
	"./uz.js": 428,
	"./vi": 430,
	"./vi.js": 430,
	"./x-pseudo": 431,
	"./x-pseudo.js": 431,
	"./yo": 432,
	"./yo.js": 432,
	"./zh-cn": 433,
	"./zh-cn.js": 433,
	"./zh-hk": 434,
	"./zh-hk.js": 434,
	"./zh-mo": 435,
	"./zh-mo.js": 435,
	"./zh-tw": 436,
	"./zh-tw.js": 436
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 615;

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartPage = /** @class */ (function () {
    function CartPage(nav, service, values, params, functions) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.addProduct = true;
        this.disableSubmit = false;
        this.buttonCoupon = false;
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
    }
    CartPage.prototype.gohomep = function () {
        this.nav.parent.select(0);
    };
    CartPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCartInit(results); });
    };
    CartPage.prototype.handleCartInit = function (results) {
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    };
    CartPage.prototype.handleCart = function (results) {
        this.cart = results;
    };
    CartPage.prototype.delete = function (key) {
        var _this = this;
        this.service.deleteItem(key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableSubmit = true;
        this.Checkout = "PleaseWait";
        this.service.checkout()
            .then(function (results) { return _this.handleBilling(results); });
    };
    CartPage.prototype.handleBilling = function (results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */], results);
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        if (Object.keys(this.cart.cart_contents).length == 1) {
            if (this.cart.cart_contents[key].quantity == 1) {
                this.cart.cart_contents = {};
                console.log(this.cart);
            }
            ;
        }
        this.service.deleteFromCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.addToCart = function (id, key) {
        var _this = this;
        this.service.addToCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.updateCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleAddToCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.submitCoupon = function () {
        var _this = this;
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon)
                .then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.removeCoupon = function () {
        var _this = this;
        this.service.removeCoupon(this.cart.applied_coupons)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleResults = function (a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    };
    CartPage.prototype.updateShipping = function (method) {
        var _this = this;
        this.chosen_shipping = method;
        this.service.updateShipping(method)
            .then(function (results) { return _this.handleShipping(results); });
    };
    CartPage.prototype.gohome = function () {
        // this.nav.parent.select(1);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
    };
    CartPage.prototype.handleShipping = function (results) {
        this.cart = results;
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\cart\cart.html"*/'<!-- <ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"Cart"| translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge">\n        <ion-icon name="md-basket" class="item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img (click)="gohomep();"  src="{{values.avatar}}" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="cart">\n  <ion-spinner *ngIf="!cart" name="crescent">\n  </ion-spinner>\n  <div *ngIf="cart">\n        <div class="empty" *ngIf="cart.cart_contents.length == 0">\n            <ion-icon name="md-basket"></ion-icon>\n            <h4 color="side-heading-color" text-center no-lines>{{"Your cart is empty" | translate}}!</h4>\n            <h5 text-center no-lines>{{"Add some products available in our menu to checkout" | translate}}</h5>\n            <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Continue Booking" | translate}}</button>\n        </div>\n    <div *ngIf="cart?.cart_contents">\n\n      <div class="cart-items">\n      <ion-list>\n        <div class="cart-list" *ngFor="let item of cart.cart_contents | keys">\n          <ion-item no-lines *ngIf="item.value.quantity != 0">\n            <ion-thumbnail item-left>\n              <img src="{{item.value.thumb}}">\n            </ion-thumbnail>\n            <h2 wrap-text>{{item.value.name}}\n            </h2>\n            <h3 wrap-text > {{"Date" | translate}}: {{item.value.booking.date}}\n            </h3>\n            <h3 wrap-text > Hora: {{item.value.booking.time}}\n            </h3>\n            <h3 wrap-text > {{"Price" | translate}}: {{item.value.price | currency:values.currency:true:\'1.2-2\'}}\n            </h3>\n            <h3 wrap-text> {{"Totals" | translate}}: {{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'  }}\n            </h3>\n            <a (click)="delete( item.key )" style="float: right;">\n              <ion-icon name="trash">\n              </ion-icon>\n            </a>\n            <!-- <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="deleteFromCart(item.value.product_id, item.key)">\n              <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n              </ion-icon>\n            </button>\n            <button ion-button item-right color="button-color" clear>{{item.value.quantity}}\n            </button>\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="addToCart(item.value.product_id, item.key)">\n              <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n              </ion-icon>\n            </button> -->\n          </ion-item>\n        </div>\n      </ion-list>\n      </div>\n\n      <div>\n        <ion-list class="totals" radio-group >\n          <ion-list-header>\n            <b>\n              ¿ Te gustaria solicitar un seguro ?\n            </b>\n          </ion-list-header>\n          <ion-item>\n            <ion-label text-wrap>Si (+$1.50)</ion-label>\n            <ion-radio value="1"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label text-wrap>No</ion-label>\n            <ion-radio value="2"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </div>\n\n\n      <div *ngIf="cart.cart_contents.length != 0">\n        <ion-list *ngIf="shipping" no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateShipping(chosen_shipping)" class="shipping-methods">\n          <ion-item-divider>\n            <h2>{{"Select shipping method" | translate}}\n            </h2>\n          </ion-item-divider>\n          <ion-item *ngFor="let method of shipping | keys" >\n            <ion-label>{{method.value.method_title}}\n              <span *ngIf="method.value.cost">{{ 1*method.value.cost | currency:values.currency:true:\'1.2-2\'}}\n              </span>\n            </ion-label>\n            <ion-radio value="{{method.value.id + \':\' + method.value.instance_id}}" >\n            </ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <form #f="ngForm" class="coupon">\n          <ion-item>\n            <ion-label>{{"Coupon Code" | translate}}</ion-label>\n            <ion-input type="text" [(ngModel)]="cart.coupon" name="coupon">\n            </ion-input>\n            <h2 item-right>\n              <button ion-button color="dark" block type="submit" text-uppercase [disabled]=\'disableSubmitCoupon\' (click)="submitCoupon()"> {{Apply | translate}}\n              </button>\n            </h2>\n          </ion-item>\n        </form>\n\n        <ion-list class="totals" *ngIf="cart.cart_totals">\n          <!--ion-item-divider>\n            <h2>{{"Totals" | translate}}\n            </h2>\n          </ion-item-divider-->\n          <ion-row>\n            <ion-col width-75>\n              <ion-label>{{"SubTotal" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.cart_contents_total != 0">\n            <ion-col width-75>\n              <ion-label>{{"Subtotal ex tax" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.tax_total != 0">\n            <ion-col width-75>\n              <ion-label>{{"Tax total" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.discount_total && cart.cart_totals.discount_total != 0">\n            <ion-col width-75 class="remove-coupon">\n              <ion-label>{{"Coupons" | translate}} - {{cart.applied_coupons}}\n                <a (click)="removeCoupon()"> (Remove)\n                </a>\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>- {{1*cart.cart_totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.shipping_total != 0">\n            <ion-col width-75>\n              <ion-label>{{"Shipping" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label >{{1*cart.cart_totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col width-75>\n              <ion-label>\n                <b> {{"Grand Total" | translate}}\n                </b>\n              </ion-label>\n            </ion-col >\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n        </ion-list>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n<div *ngIf="cart">\n  <ion-footer *ngIf="cart.cart_contents.length != 0" class="footer-cart">\n    <button style="font-weight: 600;" ion-button color="button-color" text-uppercase [disabled]=\'disableSubmit\' (click)="checkout()">PAGAR\n    </button>\n  </ion-footer>\n</div>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Orders = /** @class */ (function () {
    function Orders(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter['filter[customer_id]'] = this.values.customerId.toString();
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    Orders.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Orders.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        if (results.orders.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Orders.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    Orders.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "cancelled"
            }
        }, id)
            .then(function (results) { return _this.handleCancelOrder(results); });
    };
    Orders.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "pending"
            }
        }, id)
            .then(function (results) { return _this.handleReOrder(results); });
    };
    Orders.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\account\orders\orders.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title  text-center>{{"LastOrders" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-order">\n\n  <ion-spinner *ngIf="!orders" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orders">\n\n\n\n    <div class="no-orders">\n\n    <h4 *ngIf="orders.orders.length == 0" text-center no-lines>\n\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n\n      </button>\n\n    </h4>\n\n    </div>\n\n\n\n    <div *ngIf="orders.orders.length">\n\n      <ion-item *ngFor="let item of orders.orders">\n\n        <h2>\n\n          <b>{{"Order" | translate}} #:\n\n          </b> {{item.order_number}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Orderdate" | translate}} :\n\n          </b> {{item.created_at | date:\'medium\'}}\n\n        </h2>\n\n        <!-- <h2>\n\n          <b>{{"Shipto" | translate}} :\n\n          </b> {{item.shipping_address.first_name}} {{item.shipping_address.last_name}}, {{item.shipping_address.address_1}}, {{item.shipping_address.address_2}}, {{item.shipping_address.city}}, {{item.shipping_address.state}}, {{item.shipping_address.country}}, {{item.shipping_address.postcode}}\n\n        </h2> -->\n\n        <h2>\n\n          <b>{{"Status" | translate}} :\n\n          </b> {{item.status}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Quantity" | translate}} :\n\n          </b> {{item.total_line_items_quantity}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"SubTotal" | translate}} :\n\n          </b> {{1*item.subtotal | currency:values.currency:true:\'1.2-2\' }}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Totals" | translate}} :\n\n          </b> {{1*item.total | currency:values.currency:true:\'1.2-2\' }}\n\n        </h2>\n\n        <ion-row class="row-buttons">\n\n          <ion-col no-padding width-50>\n\n            <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.id)">\n\n              <ion-icon name="ios-eye">\n\n              </ion-icon>\n\n              {{"ViewDetails" | translate}} \n\n            </button>\n\n          </ion-col>\n\n          <ion-col no-padding width-50>\n\n            <button *ngIf="item.status != \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="cancelOrder(item.id)">		\n\n              <ion-icon ios="ios-close" md="md-close">\n\n              </ion-icon>  		\n\n              {{"Cancel" | translate}} \n\n            </button>\n\n            <button *ngIf="item.status == \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="reOrder(item.id)">\n\n              <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n\n              </ion-icon>		  		\n\n              {{"Reorder" | translate}} \n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </div> \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content\n\n      loadingSpinner="crescent"\n\n      loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\account\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsPage = /** @class */ (function () {
    function ProductsPage(alert, nav, popoverCtrl, service, params, values, functions) {
        var _this = this;
        this.alert = alert;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.shouldShowCancel = true;
        this.showFilters = false;
        this.sort = 0;
        this.product_slot = [];
        this.data = {};
        this.filter = {};
        this.q = '';
        // if (params.data.slug != '') {
        //   this.filter['filter[category]'] = params.data.slug
        //   this.filter.id = params.data.id
        // }
        // this.hour = params.data.hour;
        // this.date = params.data.date;
        var p;
        if (params.data.categories.length > 0) {
            params.data.categories.map(function (category) {
                _this.filter['filter[category]'] += ',' + category.slug;
                // this.filter.id = category.id
            });
        }
        if (params.data.items != '') {
            this.filter['include'] = params.data.items;
        }
        else {
            this.filter['include'] = 0;
        }
        this.categoryName = params.data.name;
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = '1';
        this.subCategories = params.data.categories;
        this.date = params.data.date;
        this.hourInit = params.data.hourInit;
        this.hourEnd = params.data.hourEnd;
        this.product_slot = params.data.p_slot;
        this.service.load(this.filter).then(function (results) {
            _this.products = results;
            var _loop_1 = function (index) {
                var element = _this.products[index];
                var resources = element.resource_block_costs;
                var prices = new Array();
                for (var key in resources) {
                    prices = prices.concat([resources[key]]);
                }
                if (Object.keys(resources).length) {
                    var minPrice_1 = Math.min.apply(Math, prices);
                    _this.products.map(function (element) {
                        return (element.minPrice = minPrice_1);
                    });
                }
            };
            // this.products.forEach((element,index,arr) => {
            //   if(element.wc_variations){
            //     arr[index].wc_variations = JSON.parse(element.wc_variations)
            //   }
            // });
            for (var index = 0; index < _this.products.length; index++) {
                _loop_1(index);
            }
        });
    }
    ProductsPage_1 = ProductsPage;
    ProductsPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.categories;
        this.nav.push(ProductsPage_1, this.items);
    };
    ProductsPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    ProductsPage.prototype.getProducts = function (item) {
        this.nav.push(ProductsPage_1, item);
    };
    ProductsPage.prototype.getProduct = function (id) {
        // this.nav.push(ProductPage, {id:id, date:this.date, hourInit:this.hourInit, hourEnd:this.hourEnd})
        if (this.values.isLoggedIn) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], { id: id, product_sl: this.product_slot, date: this.date, hourInit: this.hourInit, hourEnd: this.hourEnd });
        }
        else {
            this.showAlert('<strong>Estimado Usuario</strong><br/><br/>', 'Debe estar logeado para contratar');
        }
    };
    ProductsPage.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK'],
        });
        alert.present();
    };
    // getCart() {
    //   this.nav.push(CartPage)
    // }
    ProductsPage.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    ProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service
            .loadMore(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
        }
        console.log('resultados', results);
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return (_this.status = results); });
    };
    ProductsPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return (_this.status = results); });
    };
    ProductsPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(':');
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductsPage.prototype.updateCart = function (a) { };
    ProductsPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        console.log(this.filter['filter[q]']);
        this.service.search(this.filter).then(function (results) { return (_this.products = results); });
    };
    ProductsPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    ProductsPage.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    ProductsPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    ProductsPage.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        // if (sort == 0) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'date'
        // }
        // if (sort == 1) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 2) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 3) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // } else if (sort == 4) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // }
        // FILTROS SHIT EN FUNCION
        if (sort == 5) {
            this.filter['orderby'] = 'menu_order';
        }
        else if (sort == 6) {
            this.filter['orderby'] = 'popularity';
        }
        else if (sort == 7) {
            this.filter['orderby'] = 'rating';
        }
        else if (sort == 8) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'asc';
        }
        else if (sort == 9) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'desc';
        }
        else if (sort == 10) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'asc';
        }
        else if (sort == 11) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'desc';
        }
        else if (sort == 12) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'asc';
        }
        else if (sort == 13) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'desc';
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
            this.filter['filter[meta_query][value]'] = '[0,10]';
            this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.service.load(this.filter).then(function (results) { return (_this.products = results); });
    };
    ProductsPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert('Warning', 'Debe iniciar sesión para agregar un servicio a la lista de deseos');
        }
    };
    ProductsPage.prototype.update = function (results, id) {
        if (results.success == 'Success') {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        }
        else {
        }
    };
    ProductsPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsPage.prototype.updateWish = function (results, id) {
        if (results.status == 'success') {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    ProductsPage = ProductsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-products',template:/*ion-inline-start:"D:\desktop\numu\homer\homer\src\pages\products\products.html"*/'<!-- <ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="categoryName">\n      <span [innerHTML]="categoryName"></span>\n    </ion-title>\n    <ion-buttons end>\n      <button\n        ion-button\n        icon-only\n        light\n        class="has-icon icon-only has-badge"\n        (click)="getCart()"\n      >\n        <ion-icon\n          color="icon-color"\n          name="md-basket"\n          class="item-icon"\n        ></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n          {{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<!-- Header -->\n<ion-header style="background: #f6f6f6!important">\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >\n      <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button\n        ion-button\n        icon-only\n        light\n        class="has-icon icon-only has-badge"\n        (click)="getCart()"\n      >\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n          {{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="products">\n\n  <!-- <ion-fab bottom right slot="fixed">\n    <button ion-fab>\n      <ion-icon name="chatboxes"></ion-icon>\n    </button>\n    <ion-fab-list side="left">\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.messenger.com/t/thehexchange">\n        <ion-icon style="background: #2196f3;" name="custom-facebook"></ion-icon>\n      </a>\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.instagram.com/thehexchange/">\n        <ion-icon style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" name="custom-instagram"></ion-icon>\n      </a>\n    </ion-fab-list>\n  </ion-fab> -->\n\n  <div class="title-home-banner">\n    {{\'Proveedores de Servicios\' | translate}}\n  </div>\n\n  <!-- <ion-row>\n    <ion-col col-9>\n      <ion-searchbar class="searchbar-category" placeholder="Seleccionar Categoria"></ion-searchbar>\n    </ion-col>\n    <ion-col col-3 style="align-self: center;font-weight: bold;padding: 0;">\n\n      <button class="btn-filter" (click)="getFilter()">\n        Filtrar\n      </button>\n    </ion-col>\n  </ion-row> -->\n\n  <div class="btn-search-product">\n    <button ion-button item-center medium text-uppercase\n      (click)="getFilter()">\n      <img src="../../assets/icon/filter.svg" alt="">\n    </button>\n    <h5>Filtrar</h5>\n  </div>\n\n  <div *ngIf="showFilters" class="filter">\n    <ion-list\n      radio-group\n      [(ngModel)]="sort"\n      (ngModelChange)="chnageFilter(sort)"\n    >\n      <ion-list-header>\n        <b>\n          {{"Sort" | translate}}\n        </b>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label text-wrap>{{"Default" | translate}}</ion-label>\n        <ion-radio value="5"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by popularity" | translate}}</ion-label>\n        <ion-radio value="6"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by average rating" | translate}}</ion-label>\n        <ion-radio value="7"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by date: ASC" | translate}}</ion-label>\n        <ion-radio value="8"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by date: DESC" | translate}}</ion-label>\n        <ion-radio value="9"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by price: low to high" | translate}}</ion-label>\n        <ion-radio value="10"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by price: high to low" | translate}}</ion-label>\n        <ion-radio value="11"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by name: ASC" | translate}}</ion-label>\n        <ion-radio value="12"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Sort by name: DESC" | translate}}</ion-label>\n        <ion-radio value="13"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button block color="button-color" (click)="cancel()">\n      {{"CANCEL" | translate}}\n    </button>\n  </div>\n\n  <div *ngIf="!showFilters">\n    <!-- <ion-searchbar\n      placeholder="Cuido, Niñera, Profesional"\n      [(ngModel)]="q"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)"\n    ></ion-searchbar>\n    <div *ngIf="!this.filter[\'filter[q]\'] || this.filter[\'filter[q]\'] == \'\'">\n      <div *ngIf="subCategories" class="category">\n        <ion-item *ngIf="subCategories.length" no-lines class="category-name">\n          <ion-label text-uppercase>{{"Categories" | translate}}</ion-label>\n        </ion-item>\n        <div class="sub-category">\n          <ion-item *ngFor="let item of subCategories">\n            <ion-thumbnail item-left>\n              <a (click)="getCategory(item.id, item.slug)">\n                <img *ngIf="item.image?.src" src="{{item.image.src}}" />\n              </a>\n            </ion-thumbnail>\n            <a (click)="getCategory(item.id, item.slug)">\n              <h2>\n                <span [innerHTML]="item.name"></span>\n              </h2>\n            </a>\n            <ion-icon\n              item-right\n              ios="ios-arrow-forward"\n              md="md-arrow-forward"\n              (click)="getCategory(item.id, item.slug, item.name)"\n            ></ion-icon>\n          </ion-item>\n        </div>\n      </div>\n    </div> -->\n\n    <ion-spinner *ngIf="!products" name="crescent"></ion-spinner>\n    <div *ngIf="products">\n      <h2\n        *ngIf="!products.length"\n        style="font-size: 15px;text-align: center;margin-top: 30px"\n      >\n        No products found!.\n      </h2>\n    </div>\n    <div *ngIf="products !== undefined" class="products-listing">\n      <div *ngIf="products.length">\n        <div *ngIf="values.listview">\n          <!-- <ion-item no-lines class="item-name">\n            <ion-label text-uppercase>{{"Providers" | translate}}</ion-label>\n          <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n            <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n          </button>\n          <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n            <ion-icon ios="ios-grid" md="md-grid"></ion-icon>\n          </button>\n          </ion-item> -->\n          <ion-list>\n            <div class="item-list" *ngFor="let item of products">\n              <ion-item class="left-padding" no-lines>\n                <ion-thumbnail item-left class="stock-list">\n                  <img\n                    [style.height.rem]="values.dimensions.imageListViewHeight"\n                    tappable\n                    (click)="getProduct(item)"\n                    src="{{item.images[0].src}}"\n                  />\n                  <button\n                    class="out-of-stock-button"\n                    ion-button\n                    color="danger"\n                    *ngIf="item.stock_status !== \'instock\'"\n                  >\n                    {{"OUTOFSTOCK" | translate}}\n                  </button>\n                </ion-thumbnail>\n\n                <!--div tappable (click)="getProduct(item.id)"-->\n                <div class="product-name-top">\n                  <ion-row>\n                    <ion-col width-80 class="product-label">\n                      <div tappable (click)="getProduct(item)">\n                        <h2 *ngIf="item.title">{{item.title}}</h2>\n                        <h2 *ngIf="item.name">{{item.name}}</h2>\n                      </div>\n                    </ion-col>\n                    <ion-col width-20 class="wishlist-label">\n                      <ion-icon\n                        name="md-heart"\n                        color="icon-color"\n                        class="wishlist-button"\n                        *ngIf="values.wishlistId[item.id]"\n                        (click)="removeFromWishlist(item.id)"\n                      ></ion-icon>\n                      <ion-icon\n                        name="md-heart-outline"\n                        color="icon-color"\n                        class="wishlist-button"\n                        *ngIf="!values.wishlistId[item.id]"\n                        (click)="addToWishlist(item.id)"\n                      ></ion-icon>\n                    </ion-col>\n                  </ion-row>\n                  <p\n                    tappable\n                    (click)="getProduct(item)"\n                    class="max-lines"\n                    [innerHTML]="item.description"\n                  ></p>\n                </div>\n\n                <div class="price-bottom-list">\n                  <h3 class="price-regular" *ngIf="!item.price">\n                    Starting from {{1*item.price |\n                    currency:values.currency:true:\'1.2-2\'}}\n                  </h3>\n\n                  <h3 class="price-regular" *ngIf="item.price">\n                    Starting from {{1*item.minPrice |\n                    currency:values.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <!-- <h3 class="price-special" *ngIf="item.sale_price">\n                    {{1*item.sale_price |\n                    currency:values.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-del" *ngIf="item.sale_price">\n                    <del>\n                      {{1*item.regular_price |\n                      currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                  </h3> -->\n                </div>\n                <!--/div-->\n\n                <div class="bottom-right-button">\n                  <!-- <button\n                    ion-button\n                    [disabled]="item.stock_status !== \'instock\'"\n                    text-uppercase\n                    color="button-color"\n                    item-right\n                    outline\n                    *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0"\n                    (click)="addToCart(item.id)"\n                  >\n                    {{"Add" | translate}}\n                  </button> -->\n                  <button\n                    ion-button\n                    icon-only\n                    item-right\n                    clear\n                    color="button-color"\n                    *ngIf="values.cart[item.id] >= 1"\n                    (click)="deleteFromCart(item.id)"\n                  >\n                    <ion-icon\n                      ios="ios-remove-circle-outline"\n                      md="ios-remove-circle-outline"\n                    ></ion-icon>\n                  </button>\n                  <button\n                    ion-button\n                    item-right\n                    color="button-color"\n                    clear\n                    *ngIf="values.cart[item.id] >= 1"\n                  >\n                    {{values.cart[item.id]}}\n                  </button>\n                  <button\n                    ion-button\n                    icon-only\n                    item-right\n                    clear\n                    color="button-color"\n                    *ngIf="values.cart[item.id] >= 1"\n                    (click)="updateToCart(item.id)"\n                  >\n                    <ion-icon\n                      ios="ios-add-circle-outline"\n                      md="ios-add-circle-outline"\n                    ></ion-icon>\n                  </button>\n                </div>\n              </ion-item>\n            </div>\n          </ion-list>\n        </div>\n        <div *ngIf="!values.listview">\n          <!-- <ion-item no-lines class="item-name">\n            <ion-label text-uppercase>{{"Providers" | translate}}</ion-label>\n            <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n              <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n            </button>\n            <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n              <ion-icon ios="ios-list-box" md="ios-list-box"></ion-icon>\n            </button>\n          </ion-item> -->\n          <div class="card-background-page grid">\n            <ion-row class="row unlimited-items">\n              <ion-col class="col" *ngFor="let item of products">\n                <ion-card class="item-product" >\n                  <img\n                    [style.height.px]="values.dimensions.imageGridViewHeight"\n                    tappable\n                    src="{{item.images[0].src}}"\n                    (click)="getProduct(item)"\n                    />\n                  <ion-card-content class="stock">\n                    <button\n                      ion-button\n                      color="danger"\n                      *ngIf="item.stock_status !== \'instock\'"\n                    >\n                      {{"OUTOFSTOCK" | translate}}\n                    </button>\n                    <ion-icon\n                      name="md-heart"\n                      color="icon-color"\n                      class="wishlist-button-grid"\n                      *ngIf="values.wishlistId[item.id]"\n                      (click)="removeFromWishlist(item.id)"\n                    ></ion-icon>\n                    <ion-icon\n                      name="md-heart-outline"\n                      color="icon-color"\n                      class="wishlist-button-grid"\n                      *ngIf="!values.wishlistId[item.id]"\n                      (click)="addToWishlist(item.id)"\n                    ></ion-icon>\n                  </ion-card-content>\n                  <div tappable (click)="getProduct(item)" class="card-name">\n                    <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n                    <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n                  </div>\n\n                    <ion-item no-padding no-lines class="item-background">\n                      {{"Descripción" | translate}} :\n                    </ion-item>\n                    <ion-item class="description" text-wrap no-lines>\n                      <div [innerHTML]="item.description"></div>\n                    </ion-item>\n\n                    <div class="price">\n                      <ion-item no-padding no-lines class="item-background">\n                        {{"Precio" | translate}} :\n                      </ion-item>\n                      <ion-item class="description" text-wrap no-lines>\n                        <div [innerHTML]="item.price | currency "></div>\n                      </ion-item>\n                    </div>\n\n                    <div class="category">\n                      <ion-item no-padding no-lines class="item-background">\n                        {{"Categoria:" | translate}}\n                      </ion-item>\n                      <ion-item no-padding no-lines class="item-background">\n                        <div  style="display: flex;">\n                          <div *ngFor="let c of item.categories" style="width: 30%;  margin-right: 5px;">\n                            <div *ngIf="c.slug == \'servicio-limpieza\'">\n                              <img class="img" src="{{values.limpieza}}" alt="{{c.name}}" >\n                            </div>\n                            <div *ngIf="c.slug == \'servicio-de-cuido-de-ninos\'">\n                              <img class="img"src="{{values.cuido}}" alt="{{c.name}}" >\n                            </div>\n                            <div *ngIf="c.slug == \'servicio-planchado\'">\n                              <img class="img" src="{{values.planchado}}" alt="{{c.name}}" >\n                            </div>\n                            <div *ngIf="c.slug == \'servicio-camarero\'">\n                              <img class="img" src="{{values.camarero}}" alt="{{c.name}}" >\n                            </div>\n                          </div>\n                        </div>\n                      </ion-item>\n                    </div>\n                    <div class="aline-button-start">\n                      <ion-item no-padding>\n                        <span item-left *ngIf="item.average_rating" class="rating">\n                          <!-- <span *ngIf="item.rating_count > 0">\n                            ({{item.rating_count}})\n                          </span> -->\n                          <span\n                            class="star-icon"\n                            [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}"\n                          >\n                            &#x2605;\n                          </span>\n                          <span\n                            class="star-icon"\n                            [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}"\n                          >\n                            &#x2605;\n                          </span>\n                          <span\n                            class="star-icon"\n                            [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}"\n                          >\n                            &#x2605;\n                          </span>\n                          <span\n                            class="star-icon"\n                            [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}"\n                          >\n                            &#x2605;\n                          </span>\n                          <span\n                            class="star-icon"\n                            [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}"\n                          >\n                            &#x2605;\n                          </span>\n                        </span>\n                      </ion-item>\n                      <ion-item no-padding no-lines class="item-background">\n                        <button  ion-button item-center medium color="button-color" text-uppercase\n                        (click)="getProduct(item)">{{"CONTRATAR" | translate}}\n                        </button>\n                      </ion-item>\n                    </div>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n      <ion-infinite-scroll\n        (ionInfinite)="doInfinite($event)"\n        *ngIf="has_more_items"\n      >\n        <ion-infinite-scroll-content\n          loadingSpinner="crescent"\n          loadingText="{{\'Loading more items..\' | translate}}"\n        ></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\desktop\numu\homer\homer\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], ProductsPage);
    return ProductsPage;
    var ProductsPage_1;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryService = /** @class */ (function () {
    function CategoryService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CategoryService.prototype.load = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', params), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined &&
                    this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/cart/', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined &&
                    this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        console.log(this.values.cartNonce);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/cart/', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CategoryService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CategoryService.prototype.search = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('parametros de busqueda: ', _this.config.options);
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', params), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('resultados de la busqueda:', data);
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('product_id', id);
            params.append('customer_id', _this.values.customerId.toString());
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('product_id', id);
        params.append('customer_id', this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ })

},[564]);
//# sourceMappingURL=main.js.map