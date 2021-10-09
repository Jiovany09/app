(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conf-usuario-conf-usuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-usuario/conf-usuario.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conf-usuario/conf-usuario.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button slot=\"start\" (click)=\"tabs2()\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-item color=\"secondary\">\n      <ion-title style=\"text-align: center  \">Confguraciones del usuario</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <br><br><br>\n  <ion-card>\n  <br><br><br><br>\n    <center >\n      <img src=\"assets/logo1.png \">\n    </center>\n    <br><br><br><br>\n\n    <ion-list>\n<!--      <ion-item>-->\n<!--        <ion-icon slot=\"start\" name=\"moon\"> </ion-icon>-->\n<!--        <ion-label>Modo Oscuro</ion-label>-->\n<!--        <ion-toggle [ngModel]=\"darkMode\"-->\n<!--                    (ionChange)=\"change()\"></ion-toggle>-->\n<!--      </ion-item>-->\n        <ion-button  type=\"submit\" shape=\"round\" expand=\"block\" [routerLink]=\"['/info-usuario']\" style=\"border-radius: 50px\"><ion-icon name=\"create-outline\"></ion-icon>Editar Cuenta</ion-button>\n        <br>\n        <ion-button [routerLink]=\"['/logout', 1]\" type=\"submit\" shape=\"round\" expand=\"block\" style=\"border-radius: 50px\"><ion-icon name=\"log-out-outline\"></ion-icon> Cerrar Sesión</ion-button>\n        <br>\n        <ion-button  color=\"danger\" shape=\"round\" expand=\"block\" style=\"border-radius: 50px;\" (click)=\"deleteAccount()\"><ion-icon name=\"trash-outline\" ></ion-icon>Borrar cuenta</ion-button>\n        <br>\n\n    </ion-list>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/conf-usuario/conf-usuario-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/conf-usuario/conf-usuario-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfUsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfUsuarioPageRoutingModule", function() { return ConfUsuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _conf_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conf-usuario.page */ "./src/app/conf-usuario/conf-usuario.page.ts");




const routes = [
    {
        path: '',
        component: _conf_usuario_page__WEBPACK_IMPORTED_MODULE_3__["ConfUsuarioPage"]
    }
];
let ConfUsuarioPageRoutingModule = class ConfUsuarioPageRoutingModule {
};
ConfUsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfUsuarioPageRoutingModule);



/***/ }),

/***/ "./src/app/conf-usuario/conf-usuario.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/conf-usuario/conf-usuario.module.ts ***!
  \*****************************************************/
/*! exports provided: ConfUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfUsuarioPageModule", function() { return ConfUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _conf_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conf-usuario-routing.module */ "./src/app/conf-usuario/conf-usuario-routing.module.ts");
/* harmony import */ var _conf_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conf-usuario.page */ "./src/app/conf-usuario/conf-usuario.page.ts");







let ConfUsuarioPageModule = class ConfUsuarioPageModule {
};
ConfUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conf_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfUsuarioPageRoutingModule"]
        ],
        declarations: [_conf_usuario_page__WEBPACK_IMPORTED_MODULE_6__["ConfUsuarioPage"]]
    })
], ConfUsuarioPageModule);



/***/ }),

/***/ "./src/app/conf-usuario/conf-usuario.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/conf-usuario/conf-usuario.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-top: #1eb5c6 1px solid;\n  border-left: #1eb5c6 1px solid;\n  border-right: #1eb5c6 1px solid;\n  border-bottom: #1eb5c6 1px solid;\n  border-radius: 30px;\n}\n\n.line {\n  background-color: #ffffff;\n  border-bottom: #1eb5c6 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZi11c3VhcmlvL2NvbmYtdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9jb25mLXVzdWFyaW8vY29uZi11c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICBib3JkZXItdG9wOiAjMWViNWM2IDFweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6ICMxZWI1YzYgMXB4IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6ICMxZWI1YzYgMXB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAjMWViNWM2IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5saW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogIzFlYjVjNiAycHggc29saWQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/conf-usuario/conf-usuario.page.ts":
/*!***************************************************!*\
  !*** ./src/app/conf-usuario/conf-usuario.page.ts ***!
  \***************************************************/
/*! exports provided: ConfUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfUsuarioPage", function() { return ConfUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let ConfUsuarioPage = class ConfUsuarioPage {
    constructor(_route, _router, _userService, alertController) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alertController = alertController;
        this.darkMode = false;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    ngOnInit() {
    }
    // change() {
    //   this.darkMode = !this.darkMode;
    //   document.body.classList.toggle('dark');
    // }
    tabs2() {
        this._router.navigateByUrl('/tabs/tab1');
    }
    deleteAccount() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Quieres borrar tu cuenta?',
            text: "Todos tus datos seran eliminados",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#1eb5c6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Borrar cuenta',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this._userService.deleteAccount(this.identity.sub, this.token).subscribe(response => {
                    console.log(response);
                    localStorage.removeItem('identity');
                    localStorage.removeItem('token');
                    localStorage.clear();
                    this._router.navigateByUrl('/login');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cuenta borrada', 'La cuenta ha sido borrada exitosamente.', 'error');
                }), error => {
                    console.log(error);
                };
            }
        });
    }
};
ConfUsuarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ConfUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conf-usuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./conf-usuario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-usuario/conf-usuario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./conf-usuario.page.scss */ "./src/app/conf-usuario/conf-usuario.page.scss")).default]
    })
], ConfUsuarioPage);



/***/ })

}]);
//# sourceMappingURL=conf-usuario-conf-usuario-module-es2015.js.map