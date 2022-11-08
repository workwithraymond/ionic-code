"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_items_items_module_ts"],{

/***/ 49348:
/*!***************************************************!*\
  !*** ./src/app/components/item/item.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemComponent": () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.component.html?ngResource */ 94541);
/* harmony import */ var _item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.component.scss?ngResource */ 5062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let ItemComponent = class ItemComponent {
    constructor() {
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.minus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    quantityPlus() {
        this.add.emit(this.item);
    }
    quantityMinus() {
        this.minus.emit(this.item);
    }
};
ItemComponent.ctorParameters = () => [];
ItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    add: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    minus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-item',
        template: _item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemComponent);



/***/ }),

/***/ 97248:
/*!*****************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantDetailComponent": () => (/* binding */ RestaurantDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _restaurant_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-detail.component.html?ngResource */ 90133);
/* harmony import */ var _restaurant_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-detail.component.scss?ngResource */ 26385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let RestaurantDetailComponent = class RestaurantDetailComponent {
    constructor() { }
    ngOnInit() { }
    getCuisine(cuisine) {
        return cuisine.join(', ');
    }
};
RestaurantDetailComponent.ctorParameters = () => [];
RestaurantDetailComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RestaurantDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-restaurant-detail',
        template: _restaurant_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_restaurant_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RestaurantDetailComponent);



/***/ }),

/***/ 82945:
/*!**********************************************************!*\
  !*** ./src/app/pages/tabs/items/items-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageRoutingModule": () => (/* binding */ ItemsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.page */ 61468);




const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_0__.ItemsPage
    },
    {
        path: 'cart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_tabs_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../cart/cart.module */ 465)).then(m => m.CartPageModule)
    },
];
let ItemsPageRoutingModule = class ItemsPageRoutingModule {
};
ItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemsPageRoutingModule);



/***/ }),

/***/ 963:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/items/items.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageModule": () => (/* binding */ ItemsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-routing.module */ 82945);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page */ 61468);
/* harmony import */ var src_app_components_item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/item/item.component */ 49348);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var src_app_components_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/restaurant-detail/restaurant-detail.component */ 97248);










let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _items_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_1__.ItemsPage, src_app_components_item_item_component__WEBPACK_IMPORTED_MODULE_2__.ItemComponent, src_app_components_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_4__.RestaurantDetailComponent]
    })
], ItemsPageModule);



/***/ }),

/***/ 61468:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/items/items.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPage": () => (/* binding */ ItemsPage)
/* harmony export */ });
/* harmony import */ var C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page.html?ngResource */ 87815);
/* harmony import */ var _items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.page.scss?ngResource */ 76072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart/cart.service */ 81479);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);










let ItemsPage = class ItemsPage {
  // routeSub: Subscription;
  constructor(navCtrl, route, router, api, cartService) {
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.api = api;
    this.cartService = cartService;
    this.data = {};
    this.items = [];
    this.veg = false;
    this.cartData = {};
    this.storedData = {};
    this.model = {
      icon: 'fast-food-outline',
      title: 'No Menu Available'
    }; // restaurants: any[] = [];  

    this.categories = [];
    this.allItems = [];
  }

  ngOnInit() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(paramMap => {
      console.log('route data: ', paramMap);

      if (!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }

      this.id = paramMap.get('restaurantId');
      console.log('id: ', this.id);
    });
    this.cartSub = this.cartService.cart.subscribe(cart => {
      console.log('cart items: ', cart);
      this.cartData = {};
      this.storedData = {};

      if (cart && cart?.totalItem > 0) {
        this.storedData = cart; // this.cartData.items = this.storedData.items;

        this.cartData.totalItem = this.storedData.totalItem;
        this.cartData.totalPrice = this.storedData.totalPrice;

        if (cart?.restaurant?.uid === this.id) {
          this.allItems.forEach(element => {
            cart.items.forEach(element2 => {
              if (element.id != element2.id) return;
              element.quantity = element2.quantity;
            });
          });
          console.log('allItems: ', this.allItems);
          this.cartData.items = this.allItems.filter(x => x.quantity > 0);
          if (this.veg == true) this.items = this.allItems.filter(x => x.veg === true);else this.items = [...this.allItems];
        } else {
          this.allItems.forEach(element => {
            element.quantity = 0;
          });
          if (this.veg == true) this.items = this.allItems.filter(x => x.veg === true);else this.items = [...this.allItems];
        }
      }
    });
    this.getItems();
  }

  getItems() {
    var _this = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.isLoading = true;
        _this.data = {};
        _this.cartData = {};
        _this.storedData = {};
        setTimeout( /*#__PURE__*/(0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // this.categories = this.api.categories;
          _this.allItems = _this.api.allItems;

          let data = _this.api.restaurants1.filter(x => x.uid === _this.id);

          _this.data = data[0];
          _this.categories = _this.api.categories.filter(x => x.uid === _this.id);
          _this.allItems = _this.api.allItems.filter(x => x.uid === _this.id);

          _this.allItems.forEach((element, index) => {
            _this.allItems[index].quantity = 0;
          });

          _this.items = [..._this.allItems];
          console.log('items: ', _this.items);
          console.log('restaurant: ', _this.data);
          yield _this.cartService.getCartData();
          _this.isLoading = false;
        }), 3000);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  vegOnly(event) {
    console.log(event.detail.checked);
    this.items = [];
    if (event.detail.checked == true) this.items = this.allItems.filter(x => x.veg === true);else this.items = this.allItems;
    console.log('items: ', this.items);
  }

  quantityPlus(item) {
    const index = this.allItems.findIndex(x => x.id === item.id);
    console.log(index);

    if (!this.allItems[index].quantity || this.allItems[index].quantity == 0) {
      if (!this.storedData.restaurant || this.storedData.restaurant && this.storedData.restaurant.uid == this.id) {
        console.log('index item: ', this.allItems);
        this.cartService.quantityPlus(index, this.allItems, this.data);
      } else {
        // alert for clear cart
        this.cartService.alertClearCart(index, this.allItems, this.data);
      }
    } else {
      this.cartService.quantityPlus(index, this.allItems, this.data);
    }
  }

  quantityMinus(item) {
    const index = this.allItems.findIndex(x => x.id === item.id);
    this.cartService.quantityMinus(index, this.allItems);
  }

  saveToCart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      console.log('save cartData: ', this.cartData);
      this.cartService.saveCart();
    } catch (e) {
      console.log(e);
    }
  }

  viewCart() {
    var _this2 = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('save cartData: ', _this2.cartData);
      if (_this2.cartData.items && _this2.cartData.items.length > 0) yield _this2.saveToCart();
      console.log('router url: ', _this2.router.url);

      _this2.router.navigate([_this2.router.url + '/cart']);
    })();
  }

  ionViewWillLeave() {
    var _this3 = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ionViewWillLeave ItemsPage');
      if (_this3.cartData?.items && _this3.cartData?.items.length > 0) yield _this3.saveToCart(); // if(this.routeSub) this.routeSub.unsubscribe();
    })();
  }

  ngOnDestroy() {
    if (this.cartSub) this.cartSub.unsubscribe();
  }

};

ItemsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService
}];

ItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-items',
  template: _items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ItemsPage);


/***/ }),

/***/ 5062:
/*!****************************************************************!*\
  !*** ./src/app/components/item/item.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-thumbnail {\n  height: 10vh;\n  width: 20vw;\n}\nion-thumbnail img {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\nion-row {\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 2px;\n  padding: 0.3rem;\n}\n.quantity {\n  width: 2rem;\n}\nion-text {\n  font-size: 0.8rem;\n}\n.add {\n  padding: 0 1.3rem;\n}\nion-label {\n  font-size: 0.95rem !important;\n}\nion-label p {\n  font-size: 0.8rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxpb25pYytjb2RlJTIwKDEpXFxpb25pYyUyMGNvZGVcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxpdGVtXFxpdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VSO0FERUE7RUFDSSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0FDQ0o7QURFQTtFQUNJLGlCQUFBO0FDQ0o7QURDQTtFQUNJLGlCQUFBO0FDRUo7QURBQTtFQUNJLDZCQUFBO0FDR0o7QURGSTtFQUNJLDRCQUFBO0FDSVIiLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW07XHJcbn1cclxuXHJcbi5xdWFudGl0eSB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuLmFkZCB7XHJcbiAgICBwYWRkaW5nOiAwIDEuM3JlbTtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiIsImlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiAyMHZ3O1xufVxuaW9uLXRodW1ibmFpbCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAwLjNyZW07XG59XG5cbi5xdWFudGl0eSB7XG4gIHdpZHRoOiAycmVtO1xufVxuXG5pb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uYWRkIHtcbiAgcGFkZGluZzogMCAxLjNyZW07XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbSAhaW1wb3J0YW50O1xufVxuaW9uLWxhYmVsIHAge1xuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 26385:
/*!******************************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".dashedBorderBottom {\n  padding-bottom: 1vh;\n  margin-bottom: 1vh;\n}\n\nh1 {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcaW9uaWMrY29kZSUyMCgxKVxcaW9uaWMlMjBjb2RlXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccmVzdGF1cmFudC1kZXRhaWxcXHJlc3RhdXJhbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InJlc3RhdXJhbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kYXNoZWRCb3JkZXJCb3R0b20ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59IiwiLmRhc2hlZEJvcmRlckJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XG4gIG1hcmdpbi1ib3R0b206IDF2aDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59Il19 */";

/***/ }),

/***/ 76072:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs/items/items.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".veg {\n  align-items: center;\n}\n\nion-list-header {\n  font-size: 1rem;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\nion-footer h4, ion-footer p {\n  margin-left: 3%;\n}\n\nion-footer p {\n  font-size: 0.55rem !important;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxpb25pYytjb2RlJTIwKDEpXFxpb25pYyUyMGNvZGVcXHNyY1xcYXBwXFxwYWdlc1xcdGFic1xcaXRlbXNcXGl0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRElJO0VBQ0ksZUFBQTtBQ0RSOztBREdJO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtBQ0RSIiwiZmlsZSI6Iml0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZWcge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBoNCwgcCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjU1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgfVxyXG5cclxufSIsIi52ZWcge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbmlvbi1mb290ZXIgaDQsIGlvbi1mb290ZXIgcCB7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cbmlvbi1mb290ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMC41NXJlbSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59Il19 */";

/***/ }),

/***/ 94541:
/*!****************************************************************!*\
  !*** ./src/app/components/item/item.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <img [src]=\"item?.cover ? item.cover : 'assets/imgs/1.jpg'\" />\n  </ion-thumbnail>\n  <ion-label>\n    <!-- <h4>{{item?.name}}</h4> -->\n    {{item?.name}}\n    <p class=\"ion-text-wrap\">{{item?.desc}}</p>\n    <ion-text><p>${{item?.price | number: '0.2-2'}}</p></ion-text>\n  </ion-label>\n  <ion-row *ngIf=\"!item?.quantity || item?.quantity <= 0\" (click)=\"quantityPlus()\">\n    <ion-text class=\"add\" color=\"success\">Add</ion-text>\n  </ion-row>\n  <ion-row *ngIf=\"item?.quantity > 0\">\n    <ion-icon color=\"success\" name=\"remove-outline\" (click)=\"quantityMinus()\"></ion-icon>\n    <ion-text class=\"ion-text-center quantity\" color=\"success\">{{item?.quantity}}</ion-text>\n    <ion-icon color=\"success\" name=\"add-outline\" (click)=\"quantityPlus()\"></ion-icon>\n  </ion-row>\n</ion-item>";

/***/ }),

/***/ 90133:
/*!******************************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid class=\"borderBottom\" *ngIf=\"isLoading\">\n  <ion-item lines=\"none\" class=\"ion-padding-horizontal dashedBorderBottom\">\n    <ion-label>\n      <h1>\n        <ion-skeleton-text style=\"width: 50%\" animated></ion-skeleton-text>\n      </h1>\n      <p>\n        <ion-skeleton-text style=\"width: 60%\" animated></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text style=\"width: 80%\" animated></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 35%\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 35%\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 35%\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid *ngIf=\"data?.name && !isLoading\" class=\"borderBottom\">\n  <ion-row class=\"ion-padding-horizontal dashedBorderBottom\">\n    <ion-label>\n      <h1>{{data?.name}}</h1>\n      <ion-text *ngIf=\"data?.cuisines\"><p>{{getCuisine(data.cuisines)}}</p></ion-text>\n      <p>{{data?.address}}</p>\n    </ion-label>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <ion-text>\n          <p>\n            <ion-icon name=\"star\"></ion-icon>{{data?.rating}}\n          </p>\n        </ion-text>\n        <p>Ratings</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <ion-text>\n          <p>\n            {{data?.delivery_time}} MINS\n          </p>\n        </ion-text>\n        <p>Delivery Time</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <ion-text>\n          <p>\n            ${{data?.price}}\n          </p>\n        </ion-text>\n        <p>For Two</p>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>";

/***/ }),

/***/ 87815:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs/items/items.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>items</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-restaurant-detail [data]=\"data\" [isLoading]=\"isLoading\"></app-restaurant-detail>\n\n  <ion-row class=\"ion-padding veg borderBottomSmall\">\n    <ion-label>\n      <h4>VEG ONLY</h4>\n    </ion-label>\n    <ion-toggle mode=\"md\" color=\"success\"(ionChange)=\"vegOnly($event)\" [(ngModel)]=\"veg\"></ion-toggle>\n  </ion-row>\n\n  <app-loading-restaurant *ngIf=\"isLoading\"></app-loading-restaurant>\n  <app-empty-screen [model]=\"model\" *ngIf=\"!isLoading && categories?.length == 0\"></app-empty-screen>\n\n  <ion-list lines=\"none\" *ngFor=\"let category of categories\">\n    <ion-list-header>\n      {{category?.name}}\n    </ion-list-header>\n    <ng-container *ngFor=\"let item of items; let i = index\">\n      <app-item \n        *ngIf=\"category.id == item.category_id\"\n        [item]=\"item\"\n        [index]=\"i\"\n        (add)=\"quantityPlus($event)\"\n        (minus)=\"quantityMinus($event)\">\n      </app-item>\n    </ng-container>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer *ngIf=\"cartData?.totalItem > 0\">\n  <ion-toolbar color=\"success\">\n    <ion-label color=\"white\">\n      <h4>{{cartData?.totalItem}} Item<span *ngIf=\"cartData?.totalItem > 1\">s</span> | ${{cartData?.totalPrice}}</h4>\n      <ion-text color=\"light\">\n        <p>Extra charges may apply</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" fill=\"clear\" color=\"white\" (click)=\"viewCart()\">\n      <ion-icon slot=\"end\" name=\"basket-outline\"></ion-icon>\n      VIEW CART\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_items_items_module_ts.js.map