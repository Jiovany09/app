(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-usuario-info-usuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info-usuario/info-usuario.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info-usuario/info-usuario.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title style=\"text-align: center\">Detalles del usuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"centrado\" >\n    <ion-card >\n    <ion-icon style=\"height: 50px;width: 50px;text-align: center\"  name=\"person-circle-outline\"></ion-icon>\n  </ion-card>\n\n    <form #editNew=\"ngForm\" (ngSubmit)=\"onSubmit(editNew)\">\n      <ion-item style=\"border-radius: 20px\">\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-textarea\n                type=\"text\"\n                [(ngModel)]=\"identity.nombre\"\n                name=\"nombre\"\n                id=\"nombre\"\n                placeholder=\"Nombre\"\n                class=\"form-control\"\n                minlength=\"5\" maxlength=\"20\"\n                required>\n\n        </ion-textarea>\n        <ion-icon style=\"margin-top: 40px\" name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n      </ion-item>\n\n      <ion-item style=\"border-radius: 20px\">\n        <ion-label position=\"floating\">Apellido</ion-label>\n        <ion-input\n\n                type=\"text\"\n                [(ngModel)]=\"user.paterno\"\n                name=\"paterno\"\n                id=\"paterno\"\n                placeholder=\"Apellido\"\n                class=\"form-control\"\n                minlength=\"5\" maxlength=\"20\"\n                required>\n\n        </ion-input>\n        <ion-icon style=\"margin-top: 40px\" name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n      </ion-item>\n      <ion-item style=\"border-radius: 20px\">\n        <ion-label position=\"floating\">Apellido</ion-label>\n        <ion-input\n                type=\"text\"\n                [(ngModel)]=\"identity.materno\"\n                name=\"materno\"\n                id=\"materno\"\n                placeholder=\"Apellido\"\n                class=\"form-control\"\n                minlength=\"5\" maxlength=\"20\"\n                required>\n\n        </ion-input>\n        <ion-icon style=\"margin-top: 40px\" name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n      </ion-item>\n\n      <ion-item style=\"border-radius: 20px\">\n        <ion-label position=\"floating\">Teléfono</ion-label>\n        <ion-input\n                type=\"tel\"\n                [(ngModel)]=\"identity.telefono\"\n                class=\"form-control\"\n                name=\"telefono\"\n                id=\"telefono\"\n                placeholder=\"Teléfono\"\n                pattern=\"^[1,2,3,4,5,6,7,8,9]\\d{9}$\"\n                required></ion-input>\n        <ion-icon style=\"margin-top: 40px\" name=\"call-outline\" slot=\"start\"></ion-icon>\n      </ion-item>\n\n      <br>\n      <ion-button type=\"submit\" shape=\"round\" expand=\"block\"   [disabled]=\"!editNew.form.valid\">Guardar</ion-button>\n      <br>\n      <ion-button  shape=\"round\" expand=\"block\" routerLink=\"/conf-usuario\" >Cancelar</ion-button>\n    </form>\n    <br>\n    <br>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/info-usuario/info-usuario-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/info-usuario/info-usuario-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InfoUsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUsuarioPageRoutingModule", function() { return InfoUsuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _info_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-usuario.page */ "./src/app/info-usuario/info-usuario.page.ts");




const routes = [
    {
        path: '',
        component: _info_usuario_page__WEBPACK_IMPORTED_MODULE_3__["InfoUsuarioPage"]
    }
];
let InfoUsuarioPageRoutingModule = class InfoUsuarioPageRoutingModule {
};
InfoUsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoUsuarioPageRoutingModule);



/***/ }),

/***/ "./src/app/info-usuario/info-usuario.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/info-usuario/info-usuario.module.ts ***!
  \*****************************************************/
/*! exports provided: InfoUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUsuarioPageModule", function() { return InfoUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _info_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-usuario-routing.module */ "./src/app/info-usuario/info-usuario-routing.module.ts");
/* harmony import */ var _info_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-usuario.page */ "./src/app/info-usuario/info-usuario.page.ts");







let InfoUsuarioPageModule = class InfoUsuarioPageModule {
};
InfoUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoUsuarioPageRoutingModule"]
        ],
        declarations: [_info_usuario_page__WEBPACK_IMPORTED_MODULE_6__["InfoUsuarioPage"]]
    })
], InfoUsuarioPageModule);



/***/ }),

/***/ "./src/app/info-usuario/info-usuario.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/info-usuario/info-usuario.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado {\n  text-align: center;\n  border-top: #1eb5c6 3px solid;\n  border-left: #1eb5c6 2px solid;\n  border-radius: 10px;\n  border-right: #1eb5c6 2px solid;\n  border-bottom: #1eb5c6 2px solid;\n}\n\nion-card {\n  border-top: #9b9b9b 1px;\n  border-left: #9b9b9b 1px;\n  border-radius: 10px;\n  border-right: #9b9b9b 1px;\n  border-bottom: #9b9b9b 1px;\n}\n\nion-alert {\n  --background: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby11c3VhcmlvL2luZm8tdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFBQTtFQUNFLDRCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9pbmZvLXVzdWFyaW8vaW5mby11c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFkb3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiAjMWViNWM2IDNweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6ICMxZWI1YzYgMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmlnaHQ6ICMxZWI1YzYgMnB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAjMWViNWM2IDJweCBzb2xpZDtcbn1cbmlvbi1jYXJke1xuICBib3JkZXItdG9wOiAjOWI5YjliIDFweDtcbiAgYm9yZGVyLWxlZnQ6ICM5YjliOWIgMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmlnaHQ6ICM5YjliOWIgMXB4O1xuICBib3JkZXItYm90dG9tOiAjOWI5YjliIDFweDtcbn1cbmlvbi1hbGVydHtcbiAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcblxuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/info-usuario/info-usuario.page.ts":
/*!***************************************************!*\
  !*** ./src/app/info-usuario/info-usuario.page.ts ***!
  \***************************************************/
/*! exports provided: InfoUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUsuarioPage", function() { return InfoUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"];
let InfoUsuarioPage = class InfoUsuarioPage {
    constructor(_route, _router, _userService, alertCtrl) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.alertCtrl = alertCtrl;
        this.token = this._userService.getToken();
        this.identity = JSON.parse(localStorage.getItem('identity'));
        this.user = this.identity;
    }
    ngOnInit() {
    }
    // async showAlert() {
    //     const alert = await this.alertCtrl.create({
    //         message: 'Usurio Editado',
    //     });
    //     alert.present();
    //     setTimeout(()=>{
    //         alert.dismiss();
    //     }, 2000);
    // }
    onSubmit(form) {
        this._userService.update(this.identity.sub, this.user).subscribe(response => {
            if (response.data.status == 'success') {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.stopTimer);
                        toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.resumeTimer);
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Usuario ' + this.identity.nombre + ' editado correctamente'
                });
                // Redirect
                localStorage.setItem('identity', JSON.stringify(this.identity));
                this._router.navigate(['/conf-usuario']);
            }
            else {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.stopTimer);
                        toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.resumeTimer);
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'Usuario ' + this.identity.nombre + ' no editado correctamente'
                });
            }
        }, error => {
            console.log(error);
        });
    }
};
InfoUsuarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
InfoUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-usuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./info-usuario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info-usuario/info-usuario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./info-usuario.page.scss */ "./src/app/info-usuario/info-usuario.page.scss")).default]
    })
], InfoUsuarioPage);



/***/ })

}]);
//# sourceMappingURL=info-usuario-info-usuario-module-es2015.js.map