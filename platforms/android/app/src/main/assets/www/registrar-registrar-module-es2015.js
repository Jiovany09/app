(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrar-registrar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registrar/registrar.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrar/registrar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-card-header class=\"register\">\n\n        <ion-item-group style=\"text-align: center;color: #1a1a1a;font-size: x-large;\">Registrate</ion-item-group>\n\n        <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\"\n              style=\"margin-top: 30px; margin-left: 20px;margin-right: 20px\">\n            <ion-item style=\"border-radius: 20px\">\n                <ion-label position=\"floating\">Nombre</ion-label>\n                <ion-input\n                    #name\n                    type=\"text\"\n                    [(ngModel)]=\"user.nombre\"\n                    name=\"nombre\"\n                    id=\"nombre\"\n                    placeholder=\"Nombre\"\n                    class=\"form-control\"\n                    minlength=\"5\" maxlength=\"20\"\n                    required>\n\n                </ion-input>\n                <ion-icon style=\"margin-top: 40px\" name=\"person-circle-outline\" slot=\"start\"\n                ></ion-icon>\n            </ion-item>\n            <br>\n            <ion-item style=\"border-radius: 20px\">\n                <ion-label position=\"floating\">Apellido</ion-label>\n                <ion-input\n                    #surname\n                    type=\"text\"\n                    [(ngModel)]=\"user.paterno\"\n                    name=\"paterno\"\n                    id=\"paterno\"\n                    placeholder=\"Apellido paterno\"\n                    class=\"form-control\"\n                    minlength=\"5\" maxlength=\"25\"\n                    required>\n\n                </ion-input>\n                <ion-icon style=\"margin-top: 40px\" name=\"person-circle-outline\" slot=\"start\"\n                ></ion-icon>\n            </ion-item>\n            <br>\n            <ion-item style=\"border-radius: 20px\">\n                <ion-label position=\"floating\">Apellido</ion-label>\n                <ion-input\n                    #surname\n                    type=\"text\"\n                    [(ngModel)]=\"user.materno\"\n                    name=\"materno\"\n                    id=\"materno\"\n                    placeholder=\"Apellido materno\"\n                    class=\"form-control\"\n                    minlength=\"5\" maxlength=\"25\"\n                    required>\n\n                </ion-input>\n                <ion-icon style=\"margin-top: 40px\" name=\"person-circle-outline\" slot=\"start\"\n                ></ion-icon>\n            </ion-item>\n            <br>\n            <ion-item style=\"border-radius: 20px\">\n                <ion-label position=\"floating\">Teléfono</ion-label>\n                <ion-input\n                    #telefono\n                    type=\"tel\"\n                    [(ngModel)]=\"user.telefono\"\n                    class=\"form-control\"\n                    name=\"telefono\"\n                    id=\"telefono\"\n                    placeholder=\"Teléfono\"\n                    pattern=\"^[1,2,3,4,5,6,7,8,9]\\d{9}$\"\n                    required></ion-input>\n                <ion-icon style=\"margin-top: 40px\" name=\"call-outline\" slot=\"start\"\n                ></ion-icon>\n            </ion-item>\n            <br>\n            <ion-item style=\"border-radius: 20px\">\n                <ion-label position=\"floating\">Correo</ion-label>\n                <ion-input\n                    #email\n                    type=\"email\"\n                    [(ngModel)]=\"user.email\"\n                    class=\"form-control\"\n                    name=\"correo\"\n                    id=\"correo\"\n                    placeholder=\"ejemplo@gmail.com\"\n                    pattern=\"[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}\"\n                    required></ion-input>\n                <ion-icon style=\"margin-top: 40px\" name=\"mail-outline\" slot=\"start\"></ion-icon>\n            </ion-item>\n            <br>\n            <ion-item style=\"border-radius: 20px\">\n                <ion-label position=\"floating\">Contraseña</ion-label>\n                <ion-input\n                    #password\n                    type=\"password\"\n                    [(ngModel)]=\"user.password\"\n                    name=\"password\"\n                    id=\"password\"\n                    placeholder=\"Contraseña\"\n                    required\n                    minlength=\"8\" maxlength=\"18\">\n\n                </ion-input>\n                <ion-icon style=\"margin-top: 40px\" name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n            </ion-item>\n            <br>\n            <ion-button type=\"submit\" shape=\"round\" expand=\"block\" [disabled]=\"!registerForm.form.valid\">Registrarse\n            </ion-button>\n            <br>\n            <ion-button shape=\"round\" expand=\"block\" routerLink=\"/login\">Cancelar</ion-button>\n        </form>\n    </ion-card-header>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <ion-label>\n        <center>\n            <ion-img style=\"width: 250px;height: 250px\" src=\"assets/REGISTER.png\"></ion-img>\n        </center>\n    </ion-label>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/registrar/registrar-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/registrar/registrar-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RegistrarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageRoutingModule", function() { return RegistrarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrar.page */ "./src/app/registrar/registrar.page.ts");




const routes = [
    {
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarPage"]
    }
];
let RegistrarPageRoutingModule = class RegistrarPageRoutingModule {
};
RegistrarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrarPageRoutingModule);



/***/ }),

/***/ "./src/app/registrar/registrar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/registrar/registrar.module.ts ***!
  \***********************************************/
/*! exports provided: RegistrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageModule", function() { return RegistrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar-routing.module */ "./src/app/registrar/registrar-routing.module.ts");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar.page */ "./src/app/registrar/registrar.page.ts");







let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarPageRoutingModule"]
        ],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPage"]]
    })
], RegistrarPageModule);



/***/ }),

/***/ "./src/app/registrar/registrar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/registrar/registrar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado {\n  text-align: center;\n}\n\n.register {\n  position: center;\n  top: 50%;\n  left: 50%;\n  width: 450px;\n  transform: translate(-50%, -50%);\n  transition: transform 300ms, box-shadow 300ms;\n}\n\n.register::before, .register::after {\n  content: \"\";\n  position: absolute;\n  width: 800px;\n  height: 800px;\n  border-top-left-radius: 40%;\n  border-top-right-radius: 45%;\n  border-bottom-left-radius: 35%;\n  border-bottom-right-radius: 40%;\n  z-index: -1;\n}\n\n.register::before {\n  left: 40%;\n  bottom: -25%;\n  background-color: rgba(69, 105, 144, 0.15);\n  -webkit-animation: wawes 67s infinite linear;\n  animation: wawes 6s infinite linear;\n}\n\n.register::after {\n  left: 35%;\n  bottom: -25%;\n  background-color: rgba(2, 128, 144, 0.2);\n  -webkit-animation: wawes 7s infinite;\n  animation: wawes 7s infinite;\n}\n\n@-webkit-keyframes wawes {\n  from {\n    -webkit-transform: rotate(0);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\ninput:valid,\ntextarea:valid {\n  background-color: green;\n}\n\ninput:invalid,\ntextarea:invalid {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmFyL3JlZ2lzdHJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFLQSxnQ0FBQTtFQUdBLDZDQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBRUEsbUNBQUE7QUFBRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUVBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFDQTtJQUNFLGlDQUFBO0VBQ0Y7QUFDRjs7QUFTQTs7RUFFRSx1QkFBQTtBQUNGOztBQUVBOztFQUVFLHFCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXIvcmVnaXN0cmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFkb3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuLnJlZ2lzdGVyIHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDQ1MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcywgYm94LXNoYWRvdyAzMDBtcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAzMDBtcywgYm94LXNoYWRvdyAzMDBtcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zLCBib3gtc2hhZG93IDMwMG1zO1xuXG59XG4ucmVnaXN0ZXI6OmJlZm9yZSwgLnJlZ2lzdGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NSU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1JTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwJTtcbiAgei1pbmRleDogLTE7XG59XG4ucmVnaXN0ZXI6OmJlZm9yZSB7XG4gIGxlZnQ6IDQwJTtcbiAgYm90dG9tOiAtMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCAxMDUsIDE0NCwgMC4xNSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3YXdlcyA2N3MgaW5maW5pdGUgbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbjogd2F3ZXMgNnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHdhd2VzIDZzIGluZmluaXRlIGxpbmVhcjtcbn1cbi5yZWdpc3Rlcjo6YWZ0ZXIge1xuICBsZWZ0OiAzNSU7XG4gIGJvdHRvbTogLTI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMjgsIDE0NCwgMC4yKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHdhd2VzIDdzIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogd2F3ZXMgN3MgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogd2F3ZXMgN3MgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB3YXdlcyB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHdhd2VzIHtcbiAgZnJvbSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICB0byB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5pbnB1dDp2YWxpZCxcbnRleHRhcmVhOnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbmlucHV0OmludmFsaWQsXG50ZXh0YXJlYTppbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/registrar/registrar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/registrar/registrar.page.ts ***!
  \*********************************************/
/*! exports provided: RegistrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPage", function() { return RegistrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





let RegistrarPage = class RegistrarPage {
    constructor(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](1, '', '', '', '', 'empleado', '', '', null);
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this._userService.register(this.user).subscribe(response => {
            if (response.data.status == 'success') {
                this._router.navigateByUrl('login');
                form.reset();
            }
            else {
                console.log('tas mal' + response.data.status);
            }
        }, error => {
            console.log(error);
        });
    }
};
RegistrarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
RegistrarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registrar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registrar/registrar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registrar.page.scss */ "./src/app/registrar/registrar.page.scss")).default]
    })
], RegistrarPage);



/***/ })

}]);
//# sourceMappingURL=registrar-registrar-module-es2015.js.map