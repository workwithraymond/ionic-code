"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_address_address_module_ts"],{

/***/ 63033:
/*!*****************************************!*\
  !*** ./src/app/models/address.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => (/* binding */ Address)
/* harmony export */ });
class Address {
    constructor(id, user_id, title, address, landmark, house, lat, lng) {
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.address = address;
        this.landmark = landmark;
        this.house = house;
        this.lat = lat;
        this.lng = lng;
    }
}


/***/ }),

/***/ 55553:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/address/address-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressPageRoutingModule": () => (/* binding */ AddressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.page */ 88777);




const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_0__.AddressPage
    },
    {
        path: 'edit-address',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_address_edit-address_edit-address_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-address/edit-address.module */ 75575)).then(m => m.EditAddressPageModule)
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddressPageRoutingModule);



/***/ }),

/***/ 42101:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/address/address.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressPageModule": () => (/* binding */ AddressPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-routing.module */ 55553);
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.page */ 88777);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let AddressPageModule = class AddressPageModule {
};
AddressPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _address_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddressPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_1__.AddressPage]
    })
], AddressPageModule);



/***/ }),

/***/ 88777:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/address/address.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressPage": () => (/* binding */ AddressPage)
/* harmony export */ });
/* harmony import */ var C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _address_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.page.html?ngResource */ 47605);
/* harmony import */ var _address_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.page.scss?ngResource */ 78741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/address/address.service */ 47172);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global/global.service */ 84031);







let AddressPage = class AddressPage {
  constructor(global, addressService) {
    this.global = global;
    this.addressService = addressService;
    this.addresses = [];
    this.model = {
      title: 'No Addresses added yet',
      icon: 'location-outline'
    };
  }

  ngOnInit() {
    this.addressesSub = this.addressService.addresses.subscribe(address => {
      console.log('addresses: ', address);
      this.addresses = address;
    });
    this.getAddresses();
  }

  getAddresses() {
    var _this = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;

      _this.global.showLoader();

      setTimeout( /*#__PURE__*/(0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this.addressService.getAddresses();
        console.log(_this.addresses);
        _this.isLoading = false;

        _this.global.hideLoader();
      }), 3000);
    })();
  }

  getIcon(title) {
    return this.global.getIcon(title);
  }

  editAddress(address) {}

  deleteAddress(address) {
    var _this2 = this;

    console.log('address: ', address);
    this.global.showAlert('Are you sure you want to delete this address?', 'Confirm', [{
      text: 'No',
      role: 'cancel',
      handler: () => {
        console.log('cancel');
        return;
      }
    }, {
      text: 'Yes',
      handler: function () {
        var _ref2 = (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this2.global.showLoader();

          yield _this2.addressService.deleteAddress(address);

          _this2.global.hideLoader();
        });

        return function handler() {
          return _ref2.apply(this, arguments);
        };
      }()
    }]);
  }

  ngOnDestroy() {
    if (this.addressesSub) this.addressesSub.unsubscribe();
  }

};

AddressPage.ctorParameters = () => [{
  type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}, {
  type: src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_3__.AddressService
}];

AddressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-address',
  template: _address_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_address_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddressPage);


/***/ }),

/***/ 47172:
/*!*****************************************************!*\
  !*** ./src/app/services/address/address.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressService": () => (/* binding */ AddressService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_models_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/address.model */ 63033);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ 45146);





let AddressService = class AddressService {
    constructor(api) {
        this.api = api;
        this._addresses = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get addresses() {
        return this._addresses.asObservable();
    }
    getAddresses() {
        try {
            //user id
            let allAddress = this.api.addresses;
            console.log(allAddress);
            this._addresses.next(allAddress);
        }
        catch (e) {
            console.log(e);
            throw (e);
        }
    }
    addAddress(param) {
        param.id = 'address1';
        param.user_id = 'user1';
        const currentAddresses = this._addresses.value;
        currentAddresses.push(new src_app_models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address(param.id, param.user_id, param.title, param.address, param.landmark, param.house, param.lat, param.lng));
        this._addresses.next(currentAddresses);
    }
    updateAddress(id, param) {
        param.id = id;
        let currentAddresses = this._addresses.value;
        const index = currentAddresses.findIndex(x => x.id == id);
        currentAddresses[index] = new src_app_models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address(id, param.user_id, param.title, param.address, param.landmark, param.house, param.lat, param.lng);
        this._addresses.next(currentAddresses);
    }
    deleteAddress(param) {
        let currentAddresses = this._addresses.value;
        currentAddresses = currentAddresses.filter(x => x.id != param.id);
        this._addresses.next(currentAddresses);
    }
};
AddressService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService }
];
AddressService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AddressService);



/***/ }),

/***/ 84031:
/*!***************************************************!*\
  !*** ./src/app/services/global/global.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);




let GlobalService = class GlobalService {
  constructor(alertCtrl, toastCtrl, loadingCtrl, modalCtrl) {
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.modalCtrl = modalCtrl;
    this.isLoading = false;
  }

  setLoader() {
    this.isLoading = !this.isLoading;
  }

  showAlert(message, header, buttonArray) {
    this.alertCtrl.create({
      header: header ? header : 'Authentication failed',
      message: message,
      buttons: buttonArray ? buttonArray : ['Okay']
    }).then(alertEl => alertEl.present());
  }

  showToast(msg, color, position, duration = 3000) {
    var _this = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create({
        message: msg,
        duration: duration,
        color: color,
        position: position
      });
      toast.present();
    })();
  }

  errorToast(msg, duration = 4000) {
    this.showToast(msg ? msg : 'No Internet Connection', 'danger', 'bottom', duration);
  }

  successToast(msg) {
    this.showToast(msg, 'success', 'bottom');
  }

  showLoader(msg, spinner) {
    //this.isLoading = true;
    if (!this.isLoading) this.setLoader();
    return this.loadingCtrl.create({
      message: msg,
      spinner: spinner ? spinner : 'bubbles'
    }).then(res => {
      res.present().then(() => {
        if (!this.isLoading) {
          res.dismiss().then(() => {
            console.log('abort presenting');
          });
        }
      });
    }).catch(e => {
      console.log('show loading error: ', e);
    });
  }

  hideLoader() {
    // this.isLoading = false;
    if (this.isLoading) this.setLoader();
    return this.loadingCtrl.dismiss().then(() => console.log('dismissed')).catch(e => console.log('error hide loader: ', e));
  }

  createModal(options) {
    var _this2 = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create(options);
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log(data);
      if (data) return data;
    })();
  }

  modalDismiss(val) {
    let data = val ? val : null;
    console.log('data', data);
    this.modalCtrl.dismiss(data);
  }

  getIcon(title) {
    const name = title.toLowerCase();

    switch (name) {
      case 'home':
        return 'home-outline';

      case 'work':
        return 'briefcase-outline';

      default:
        return 'location-outline';
    }
  }

};

GlobalService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController
}];

GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], GlobalService);


/***/ }),

/***/ 78741:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/address/address.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  align-self: start;\n}\n\n.ios ion-item-divider {\n  font-size: 0.8rem;\n  padding: 2vh;\n  background-color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGlvbmljK2NvZGUlMjAoMSlcXGlvbmljJTIwY29kZVxcc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFxhZGRyZXNzXFxhZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FER0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQ0FSIiwiZmlsZSI6ImFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi5pb3Mge1xyXG4gICAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgcGFkZGluZzogMnZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcbn0iLCJpb24taWNvbiB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG4uaW9zIGlvbi1pdGVtLWRpdmlkZXIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufSJdfQ== */";

/***/ }),

/***/ 47605:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/address/address.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title><ion-label color=\"dark\">MANAGE ADDRESSES</ion-label></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <div *ngIf=\"isLoading\" class=\"ion-text-center alignSpinner\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n\n\n<app-empty-screen *ngIf=\"!isLoading && addresses?.length == 0\" [model=\"model\"]></app-empty-screen>\n\n  <ion-list *ngIf=\"!isLoading && addresses?.length > 0\">\n    <ion-item-divider>SAVED ADDRESSES</ion-item-divider>\n    <ion-item-group class=\"ion-padding\">\n      <ion-item lines=\"full\" class=\"ion-no-padding\" *ngFor=\"let address of addresses\">\n        <ion-icon [name]=\"getIcon(address?.title)\" color=\"medium\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <ion-label class=\"ion-padding-bottom\">{{address?.title}}</ion-label>\n          <ion-text color=\"medium\" class=\"ion-text-justify\">\n            <p class=\"ion-text-wrap\">\n              {{address?.house}} {{address?.landmark}} {{address?.address}}\n            </p>\n          </ion-text>\n          <ion-row>\n            <ion-button fill=\"clear\" color=\"primary\" (click)=\"editAddress(address)\">EDIT</ion-button>\n            <ion-button fill=\"clear\" color=\"primary\" (click)=\"deleteAddress(address)\">DELETE</ion-button>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-button [routerLink]=\"['/', 'tabs', 'address', 'edit-address']\" fill=\"outline\" color=\"success\" expand=\"block\" class=\"ion-margin-horizontal\">ADD NEW ADDRESS</ion-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_address_address_module_ts.js.map