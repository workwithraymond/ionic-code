"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_account_account_module_ts"],{

/***/ 81514:
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _orders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.component.html?ngResource */ 50473);
/* harmony import */ var _orders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.component.scss?ngResource */ 49880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let OrdersComponent = class OrdersComponent {
    constructor() {
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.help = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    reorderItem() {
        this.reorder.emit(this.order);
    }
    getHelp() {
        this.help.emit(this.order);
    }
};
OrdersComponent.ctorParameters = () => [];
OrdersComponent.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    help: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
OrdersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-orders',
        template: _orders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_orders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrdersComponent);



/***/ }),

/***/ 29297:
/*!***************************************!*\
  !*** ./src/app/models/order.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
    constructor(address, restaurant, restaurant_id, order, total, grandTotal, deliveryCharge, status, time, paid, id, user_id, instruction) {
        this.address = address;
        this.restaurant = restaurant;
        this.restaurant_id = restaurant_id;
        this.order = order;
        this.total = total;
        this.grandTotal = grandTotal;
        this.deliveryCharge = deliveryCharge;
        this.status = status;
        this.time = time;
        this.paid = paid;
        this.id = id;
        this.user_id = user_id;
        this.instruction = instruction;
    }
}


/***/ }),

/***/ 63899:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/account/account-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 89887);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 44123:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/account/account.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 63899);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 89887);
/* harmony import */ var src_app_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/orders/orders.component */ 81514);








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage, src_app_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_2__.OrdersComponent]
    })
], AccountPageModule);



/***/ }),

/***/ 89887:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.html?ngResource */ 66786);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 38284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ 81479);
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order/order.service */ 24081);







let AccountPage = class AccountPage {
  constructor(orderService, cartService) {
    this.orderService = orderService;
    this.cartService = cartService;
    this.profile = {};
    this.orders = [];
  }

  ngOnInit() {
    this.ordersSub = this.orderService.orders.subscribe(order => {
      console.log('order data: ', order);
      this.orders = order; // if(order instanceof Array) {
      //   this.orders = order;
      // } else {
      //   if(order?.delete) {
      //     this.orders = this.orders.filter(x => x.id != order.id);
      //   } else if(order?.update) {
      //     const index = this.orders.findIndex(x => x.id == order.id);
      //     this.orders[index] = order;
      //   } else {
      //     this.orders = this.orders.concat(order);
      //   }
      // }
    }, e => {
      console.log(e);
    });
    this.getData();
  }

  getData() {
    var _this = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      setTimeout( /*#__PURE__*/(0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.profile = {
          name: 'Raymond Del Rosario',
          phone: '3477301572',
          email: 'workwithraymond01@gmail.com'
        };
        yield _this.orderService.getOrders();
        _this.isLoading = false;
      }), 3000);
    })();
  }

  logout() {}

  reorder(order) {
    var _this2 = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(order);
      let data = yield _this2.cartService.getCart();
      console.log('data: ', data);

      if (data?.value) {
        _this2.cartService.alertClearCart(null, null, null, order);
      } else {
        _this2.cartService.orderToCart(order);
      }
    })();
  }

  getHelp(order) {
    console.log(order);
  }

  ngOnDestroy() {
    if (this.ordersSub) this.ordersSub.unsubscribe();
  }

};

AccountPage.ctorParameters = () => [{
  type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService
}, {
  type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService
}];

AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-account',
  template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AccountPage);


/***/ }),

/***/ 24081:
/*!*************************************************!*\
  !*** ./src/app/services/order/order.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_models_order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/order.model */ 29297);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ 45146);





let OrderService = class OrderService {
    constructor(api) {
        this.api = api;
        this._orders = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get orders() {
        return this._orders.asObservable();
    }
    getOrders() {
        try {
            const orders = this.api.orders;
            console.log('orders', orders);
            this._orders.next(orders);
        }
        catch (e) {
            throw (e);
        }
    }
    placeOrder(param) {
        try {
            param.user_id = '1';
            // param.order = JSON.stringify(param.order);
            // param.order = JSON.parse(param.order);
            param.id = '5aG0RsPuze8NX00B7uE2';
            // let currentOrders = this._orders.value;
            console.log('latest order: ', param);
            let currentOrders = [];
            currentOrders.push(new src_app_models_order_model__WEBPACK_IMPORTED_MODULE_0__.Order(param.address, param.restaurant, param.restaurant_id, param.order, param.total, param.grandTotal, param.deliveryCharge, param.status, param.time, param.paid, param.id, param.user_id, param.instruction));
            console.log('latest order: ', currentOrders);
            currentOrders = currentOrders.concat(this._orders.value);
            console.log('orders: ', currentOrders);
            this._orders.next(currentOrders);
        }
        catch (e) {
            throw (e);
        }
    }
};
OrderService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService }
];
OrderService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ 49880:
/*!********************************************************************!*\
  !*** ./src/app/components/orders/orders.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".time {\n  margin-top: 1vh;\n}\n\nion-label {\n  font-size: 0.95rem;\n}\n\nion-label ion-text ion-icon {\n  font-size: 0.6rem;\n}\n\nion-note {\n  font-size: 0.87rem;\n}\n\nion-note ion-icon {\n  float: right;\n  padding-left: 0.2rem;\n}\n\np {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGlvbmljK2NvZGUlMjAoMSlcXGlvbmljJTIwY29kZVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9yZGVyc1xcb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDUTtFQUNJLGlCQUFBO0FDQ1o7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBRENJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDQ1I7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6Im9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24tbm90ZSB7XHJcbiAgICBmb250LXNpemU6IDAuODdyZW07XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xyXG4gICAgfVxyXG59XHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn0iLCIudGltZSB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuaW9uLWxhYmVsIGlvbi10ZXh0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbmlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAwLjg3cmVtO1xufVxuaW9uLW5vdGUgaW9uLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */";

/***/ }),

/***/ 38284:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "p {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGlvbmljK2NvZGUlMjAoMSlcXGlvbmljJTIwY29kZVxcc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFxhY2NvdW50XFxhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoiYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59IiwicCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */";

/***/ }),

/***/ 50473:
/*!********************************************************************!*\
  !*** ./src/app/components/orders/orders.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-item-group class=\"borderBottom\">\n  <ion-item lines=\"none\" class=\"dashedBorderBottom\">\n    <ion-label>\n      {{order?.restaurant?.name}}\n      <p>{{order?.restaurant?.address}}</p>\n      <ion-text>\n        <p>\n          ${{order?.grandTotal}}\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </p>\n      </ion-text>\n    </ion-label>\n    <ion-note slot=\"end\" color=\"dark\">\n      {{order?.status}}\n      <ion-icon name=\"checkmark-circle-outline\" color=\"success\"></ion-icon>\n    </ion-note>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>\n      <ion-text color=\"dark\" *ngFor=\"let item of order?.order\">\n        <p>{{item?.name}} x {{item?.quantity}}</p>\n      </ion-text>\n      <p class=\"time\">{{order?.time}}</p>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button fill=\"outline\" expand=\"block\" color=\"primary\" (click)=\"reorderItem()\">REORDER</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button fill=\"outline\" expand=\"block\" color=\"dark\" (click)=\"getHelp()\">GET HELP</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-label>\n  </ion-item>\n</ion-item-group>";

/***/ }),

/***/ 66786:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>My Account</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"logout()\">\n        <ion-icon name=\"power-outline\" color=\"white\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"isLoading\" class=\"ion-text-center alignSpinner\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n\n  <ng-container *ngIf=\"!isLoading\">\n    <ion-list class=\"borderBottom\">\n      <ion-item lines=\"full\">\n        <ion-button slot=\"end\" fill=\"clear\">EDIT</ion-button>\n        <ion-label>\n          <ion-text class=\"ion-text-uppercase\"><h4>{{profile?.name}}</h4></ion-text>\n          <p>{{profile?.phone}} | {{profile?.email}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" detail=\"true\" [routerLink]=\"['/', 'tabs', 'address']\">\n        <ion-icon name=\"home-outline\" slot=\"start\" color=\"dark\"></ion-icon>\n        <h5>Manage Addresses</h5>\n      </ion-item>\n    </ion-list>\n  \n    <ion-list>\n      <ion-list-header>\n        <ion-label color=\"primary\">PAST ORDERS</ion-label>\n      </ion-list-header>\n      <ion-text class=\"ion-text-center\" *ngIf=\"!orders || orders?.length == 0\">\n        <p>No Orders Placed Yet</p>\n      </ion-text>\n      <app-orders \n        *ngFor=\"let order of orders\" \n        [order]=\"order\"\n        (reorder)=\"reorder($event)\"\n        (help)=\"getHelp($event)\">\n      </app-orders>\n    </ion-list>\n  </ng-container>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_account_account_module_ts.js.map