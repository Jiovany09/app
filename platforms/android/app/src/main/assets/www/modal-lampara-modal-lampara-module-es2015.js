(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-lampara-modal-lampara-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-lampara/modal-lampara.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-lampara/modal-lampara.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-item color=\"secondary\">\n      <ion-title style=\"text-align: center  \">Agregar lampara</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-content>\n    <br>\n    <ion-card>\n      <ion-card class=\"car1\">\n        <center>\n          <ion-icon style=\"height: 50px;width: 50px\"  name=\"sunny-outline\"></ion-icon>\n        </center>\n      </ion-card>\n\n      <form #form=\"ngForm\" style=\"margin-top: 30px; margin-left: 20px;margin-right: 20px;\" id=\"formulario\">\n        <ion-item style=\"border-radius: 20px\">\n          <ion-label position=\"floating\">No. de lampara</ion-label>\n          <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"nlamp\"\n                  id=\"nlamp\"\n                  placeholder=\"No. de lampara\"></ion-input>\n          <ion-icon style=\"margin-top: 40px\" name=\"sunny-outline\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <br>\n        <br>\n        <ion-button type=\"submit\" shape=\"round\" expand=\"block\" routerLink=\"/conf-usuario\" >Guardar</ion-button>\n        <br>\n        <ion-button shape=\"round\" expand=\"block\" (click)=\"salirSin()\">Cancelar</ion-button>\n      </form>\n      <br>\n      <br>\n    </ion-card>\n  </ion-content>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/app/modal-lampara/modal-lampara-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modal-lampara/modal-lampara-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalLamparaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLamparaPageRoutingModule", function() { return ModalLamparaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_lampara_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-lampara.page */ "./src/app/modal-lampara/modal-lampara.page.ts");




const routes = [
    {
        path: '',
        component: _modal_lampara_page__WEBPACK_IMPORTED_MODULE_3__["ModalLamparaPage"]
    }
];
let ModalLamparaPageRoutingModule = class ModalLamparaPageRoutingModule {
};
ModalLamparaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalLamparaPageRoutingModule);



/***/ }),

/***/ "./src/app/modal-lampara/modal-lampara.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modal-lampara/modal-lampara.module.ts ***!
  \*******************************************************/
/*! exports provided: ModalLamparaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLamparaPageModule", function() { return ModalLamparaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_lampara_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-lampara-routing.module */ "./src/app/modal-lampara/modal-lampara-routing.module.ts");
/* harmony import */ var _modal_lampara_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-lampara.page */ "./src/app/modal-lampara/modal-lampara.page.ts");
/* harmony import */ var _detalle_contenedor_detalle_contenedor_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detalle-contenedor/detalle-contenedor.page */ "./src/app/detalle-contenedor/detalle-contenedor.page.ts");
/* harmony import */ var _detalle_contenedor_detalle_contenedor_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../detalle-contenedor/detalle-contenedor.module */ "./src/app/detalle-contenedor/detalle-contenedor.module.ts");









let ModalLamparaPageModule = class ModalLamparaPageModule {
};
ModalLamparaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _detalle_contenedor_detalle_contenedor_page__WEBPACK_IMPORTED_MODULE_7__["DetalleContenedorPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_lampara_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalLamparaPageRoutingModule"],
            _detalle_contenedor_detalle_contenedor_module__WEBPACK_IMPORTED_MODULE_8__["DetalleContenedorPageModule"]
        ],
        declarations: [_modal_lampara_page__WEBPACK_IMPORTED_MODULE_6__["ModalLamparaPage"]]
    })
], ModalLamparaPageModule);



/***/ }),

/***/ "./src/app/modal-lampara/modal-lampara.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/modal-lampara/modal-lampara.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-top: #1eb5c6 1px solid;\n  border-left: #1eb5c6 1px solid;\n  border-radius: 10px;\n  border-right: #1eb5c6 1px solid;\n  border-bottom: #1eb5c6 1px solid;\n}\n\n.car1 {\n  border-top: #9b9b9b 1px;\n  border-left: #9b9b9b 1px;\n  border-radius: 10px;\n  border-right: #9b9b9b 1px;\n  border-bottom: #9b9b9b 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtbGFtcGFyYS9tb2RhbC1sYW1wYXJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWxhbXBhcmEvbW9kYWwtbGFtcGFyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgYm9yZGVyLXRvcDogIzFlYjVjNiAxcHggc29saWQ7XG4gIGJvcmRlci1sZWZ0OiAjMWViNWM2IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAjMWViNWM2IDFweCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogIzFlYjVjNiAxcHggc29saWQ7XG59XG4uY2FyMXtcbiAgYm9yZGVyLXRvcDogIzliOWI5YiAxcHg7XG4gIGJvcmRlci1sZWZ0OiAjOWI5YjliIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAjOWI5YjliIDFweDtcbiAgYm9yZGVyLWJvdHRvbTogIzliOWI5YiAxcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modal-lampara/modal-lampara.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/modal-lampara/modal-lampara.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalLamparaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLamparaPage", function() { return ModalLamparaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ModalLamparaPage = class ModalLamparaPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    salirSin() {
        this.modalCtrl.dismiss();
    }
    salirCon() {
    }
};
ModalLamparaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalLamparaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-lampara',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-lampara.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-lampara/modal-lampara.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-lampara.page.scss */ "./src/app/modal-lampara/modal-lampara.page.scss")).default]
    })
], ModalLamparaPage);



/***/ })

}]);
//# sourceMappingURL=modal-lampara-modal-lampara-module-es2015.js.map