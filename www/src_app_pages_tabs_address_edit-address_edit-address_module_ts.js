"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_address_edit-address_edit-address_module_ts"],{

/***/ 3200:
/*!********************************************************************************!*\
  !*** ./src/app/pages/tabs/address/edit-address/edit-address-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAddressPageRoutingModule": () => (/* binding */ EditAddressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _edit_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-address.page */ 66299);




const routes = [
    {
        path: '',
        component: _edit_address_page__WEBPACK_IMPORTED_MODULE_0__.EditAddressPage
    }
];
let EditAddressPageRoutingModule = class EditAddressPageRoutingModule {
};
EditAddressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditAddressPageRoutingModule);



/***/ }),

/***/ 75575:
/*!************************************************************************!*\
  !*** ./src/app/pages/tabs/address/edit-address/edit-address.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAddressPageModule": () => (/* binding */ EditAddressPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-address-routing.module */ 3200);
/* harmony import */ var _edit_address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-address.page */ 66299);







let EditAddressPageModule = class EditAddressPageModule {
};
EditAddressPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditAddressPageRoutingModule
        ],
        declarations: [_edit_address_page__WEBPACK_IMPORTED_MODULE_1__.EditAddressPage]
    })
], EditAddressPageModule);



/***/ }),

/***/ 66299:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/address/edit-address/edit-address.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAddressPage": () => (/* binding */ EditAddressPage)
/* harmony export */ });
/* harmony import */ var C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_address_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-address.page.html?ngResource */ 8665);
/* harmony import */ var _edit_address_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-address.page.scss?ngResource */ 37819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/address/address.service */ 47172);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global/global.service */ 84031);










let EditAddressPage = class EditAddressPage {
  constructor(navCtrl, addressService, global, route) {
    this.navCtrl = navCtrl;
    this.addressService = addressService;
    this.global = global;
    this.route = route;
    this.isSubmitted = false;
    this.location = {};
    this.isLoading = false;
  }

  ngOnInit() {
    this.checkForUpdate();
  }

  checkForUpdate() {
    var _this = this;

    this.isLoading = true;
    this.location.location_name = 'Locating...';
    this.isLocationFetched = false;
    this.route.queryParams.subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        console.log('data: ', data);

        if (data?.data) {
          const address = JSON.parse(data.data);
          _this.center = {
            lat: address.lat,
            lng: address.lng
          };
          _this.update = true;
          _this.location.lat = _this.center.lat;
          _this.location.lng = _this.center.lng;
          _this.location.address = address.address;
          _this.location.location_name = address.title;
          _this.id = address.id;
          setTimeout( /*#__PURE__*/(0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this.initForm(address);

            _this.toggleFetched();
          }), 3000);
        } else {
          _this.update = false;

          _this.initForm();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  initForm(address) {
    let data = {
      title: null,
      house: null,
      landmark: null
    };

    if (address) {
      data = {
        title: address.title,
        house: address.house,
        landmark: address.landmark
      };
    }

    this.formData(data);
  }

  formData(data) {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data.title, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      house: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data.house, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data.landmark, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      })
    });
    this.isLoading = false;
  }

  fetchLocation(event) {
    this.location = event;
    console.log('location: ', this.location);
    this.isLocationFetched = true;
  }

  toggleFetched() {
    this.isLocationFetched = !this.isLocationFetched;
  }

  toggleSubmit() {
    this.isSubmitted = !this.isSubmitted;
  }

  onSubmit() {
    var _this2 = this;

    return (0,C_Users_Owner_Downloads_ionic_code_1_ionic_code_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.toggleSubmit();

        console.log(_this2.form);

        if (!_this2.form.valid || !_this2.isLocationFetched) {
          _this2.toggleSubmit();

          return;
        }

        const data = {
          title: _this2.form.value.title,
          landmark: _this2.form.value.landmark,
          house: _this2.form.value.house,
          address: _this2.location.address,
          lat: _this2.location.lat,
          lng: _this2.location.lng
        };
        console.log('address: ', data);
        if (!_this2.id) yield _this2.addressService.addAddress(data);else yield _this2.addressService.updateAddress(_this2.id, data);

        _this2.navCtrl.back();

        _this2.toggleSubmit();
      } catch (e) {
        console.log(e);

        _this2.global.errorToast();
      }
    })();
  }

};

EditAddressPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_3__.AddressService
}, {
  type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}];

EditAddressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-edit-address',
  template: _edit_address_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_edit_address_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EditAddressPage);


/***/ }),

/***/ 37819:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tabs/address/edit-address/edit-address.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.map {\n  height: 30vh;\n}\n\nion-item {\n  align-items: center;\n}\n\nion-item ion-button span {\n  color: var(--ion-color-primary);\n}\n\nion-item ion-label span {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYWRkcmVzcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGlvbmljK2NvZGUlMjAoMSlcXGlvbmljJTIwY29kZVxcc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFxhZGRyZXNzXFxlZGl0LWFkZHJlc3NcXGVkaXQtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBRENRO0VBQ0ksK0JBQUE7QUNDWjs7QURHUTtFQUNJLGlCQUFBO0FDRFoiLCJmaWxlIjoiZWRpdC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFwIHtcclxuICAgIGhlaWdodDogMzB2aDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm1hcCB7XG4gIGhlaWdodDogMzB2aDtcbn1cblxuaW9uLWl0ZW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWl0ZW0gaW9uLWJ1dHRvbiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */";

/***/ }),

/***/ 8665:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tabs/address/edit-address/edit-address.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content fullscreen=\"true\">\n\n  <ion-toolbar slot=\"fixed\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-back-button defaultHref=\"/tabs/address\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <div *ngIf=\"isLoading\" class=\"ion-text-center alignSpinner\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n\n  <div class=\"map\" *ngIf=\"!isLoading\">\n    <app-map [center]=\"center\" [update]=\"update\" (location)=\"fetchLocation($event)\"></app-map>\n  </div>\n\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-list>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"location-outline\" color=\"dark\" slot=\"start\"></ion-icon>\n        <ion-label>{{location?.location_name}}</ion-label>\n        <ion-button slot=\"end\" size=\"small\" color=\"light\">\n          <span>CHANGE</span>\n        </ion-button>\n      </ion-item>\n      <ion-row class=\"ion-padding-horizontal ion-text-justify\">\n        <ion-note class=\"ion-text-wrap ion-padding-horizontal\">\n          {{location?.address}}\n        </ion-note>\n      </ion-row>\n      <ion-item-group class=\"ion-padding\">\n        <ion-item>\n          <ion-label color=\"medium\" position=\"floating\">\n           <span>HOUSE / FLAT / BLOCK NO.</span>\n          </ion-label>\n          <ion-input type=\"text\" autocomplete autocorrect formControlName=\"house\"></ion-input>\n          <ion-icon \n            name=\"checkmark-outline\" \n            slot=\"end\" \n            color=\"primary\" \n            *ngIf=\"form.get('house').valid\">\n          </ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-label color=\"medium\" position=\"floating\">\n           <span>LANDMARK</span>\n          </ion-label>\n          <ion-input type=\"text\" autocomplete autocorrect formControlName=\"landmark\"></ion-input>\n          <ion-icon \n            name=\"checkmark-outline\" \n            slot=\"end\" \n            color=\"primary\" \n            *ngIf=\"form.get('landmark').valid\">\n          </ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-label color=\"medium\" position=\"floating\">\n           <span>SAVE AS</span>\n          </ion-label>\n          <ion-input type=\"text\" autocomplete autocorrect formControlName=\"title\"></ion-input>\n          <ion-icon \n            name=\"checkmark-outline\" \n            slot=\"end\" \n            color=\"primary\" \n            *ngIf=\"form.get('title').valid\">\n          </ion-icon>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n    <div class=\"ion-padding-horizontal\">\n      <ion-button \n        *ngIf=\"!isSubmitted\"\n        expand=\"block\" \n        type=\"submit\" \n        color=\"primary\"\n        [disabled]=\"!form?.valid\"\n        (click)=\"onSubmit()\">SAVE & PROCEED\n      </ion-button>\n      <ion-button \n        *ngIf=\"isSubmitted\"\n        expand=\"block\" \n        color=\"primary\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-button>\n    </div>\n  </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_address_edit-address_edit-address_module_ts.js.map