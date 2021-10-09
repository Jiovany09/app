(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-usuario-agregar-usuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-usuario/agregar-usuario.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-usuario/agregar-usuario.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-item>\n      <ion-icon id=\"user\" name=\"person-circle-outline\" slot=\"end\" style=\"font-size: 50px;\"></ion-icon>\n      <ion-title>Agregar Usuario</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"margin-top: 20px;\">\n    <ion-card-content>\n      <ion-label>\n        Número de trabajador\n      </ion-label>\n      <ion-select placeholder=\"Seleccione un número de trabajador\">\n        <ion-select-option>1</ion-select-option>\n        <ion-select-option>2</ion-select-option>\n        <ion-select-option>3</ion-select-option>\n      </ion-select>\n      <ion-label>\n        Nombre de trabajador\n      </ion-label>\n      <ion-input placeholder=\"Nombre completo\"></ion-input>\n      <ion-label>\n        Descripción\n      </ion-label>\n      <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Descripción de lo que hará el usuario\"></ion-textarea>\n    </ion-card-content>\n  </ion-card>\n  <div style=\"margin-top: 20px;\">\n    <ion-button style=\"margin-left: 50px;\" routerLink=\"/tabs/tab3\">Aceptar</ion-button>\n    <ion-button style=\"float: right; margin-right: 50px;\" routerLink=\"/tabs/tab3\">Cancelar</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/agregar-usuario/agregar-usuario-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/agregar-usuario/agregar-usuario-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AgregarUsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarUsuarioPageRoutingModule", function() { return AgregarUsuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _agregar_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar-usuario.page */ "./src/app/agregar-usuario/agregar-usuario.page.ts");




const routes = [
    {
        path: '',
        component: _agregar_usuario_page__WEBPACK_IMPORTED_MODULE_3__["AgregarUsuarioPage"]
    }
];
let AgregarUsuarioPageRoutingModule = class AgregarUsuarioPageRoutingModule {
};
AgregarUsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgregarUsuarioPageRoutingModule);



/***/ }),

/***/ "./src/app/agregar-usuario/agregar-usuario.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/agregar-usuario/agregar-usuario.module.ts ***!
  \***********************************************************/
/*! exports provided: AgregarUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarUsuarioPageModule", function() { return AgregarUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _agregar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agregar-usuario-routing.module */ "./src/app/agregar-usuario/agregar-usuario-routing.module.ts");
/* harmony import */ var _agregar_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agregar-usuario.page */ "./src/app/agregar-usuario/agregar-usuario.page.ts");







let AgregarUsuarioPageModule = class AgregarUsuarioPageModule {
};
AgregarUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agregar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarUsuarioPageRoutingModule"]
        ],
        declarations: [_agregar_usuario_page__WEBPACK_IMPORTED_MODULE_6__["AgregarUsuarioPage"]]
    })
], AgregarUsuarioPageModule);



/***/ }),

/***/ "./src/app/agregar-usuario/agregar-usuario.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/agregar-usuario/agregar-usuario.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FncmVnYXItdXN1YXJpby9hZ3JlZ2FyLXVzdWFyaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/agregar-usuario/agregar-usuario.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/agregar-usuario/agregar-usuario.page.ts ***!
  \*********************************************************/
/*! exports provided: AgregarUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarUsuarioPage", function() { return AgregarUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AgregarUsuarioPage = class AgregarUsuarioPage {
    constructor() { }
    ngOnInit() {
    }
};
AgregarUsuarioPage.ctorParameters = () => [];
AgregarUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agregar-usuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./agregar-usuario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-usuario/agregar-usuario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./agregar-usuario.page.scss */ "./src/app/agregar-usuario/agregar-usuario.page.scss")).default]
    })
], AgregarUsuarioPage);



/***/ })

}]);
//# sourceMappingURL=agregar-usuario-agregar-usuario-module-es2015.js.map