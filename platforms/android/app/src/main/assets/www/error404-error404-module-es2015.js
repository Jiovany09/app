(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error404-error404-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error404/error404.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error404/error404.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card>\n  <div class=\"face\">\n    <div class=\"band\">\n      <div class=\"red\"></div>\n      <div class=\"white\"></div>\n      <div class=\"blue\"></div>\n    </div>\n    <div class=\"eyes\"></div>\n    <div class=\"dimples\"></div>\n    <div class=\"mouth\"></div>\n  </div>\n\n    <h1>Error 404</h1>\n    <h1>Página no encontrada</h1>\n    <!--  <div class=\"btn\" >Regresar</div>-->\n    <ion-button shape=\"round\" *ngIf=\"!identity\"expand=\"block\" routerLink=\"/login\" >Regresar</ion-button>\n    <ion-button shape=\"round\" *ngIf=\"identity\" expand=\"block\" routerLink=\"/tabs/inicio\" >Regresar</ion-button>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/error404/error404-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/error404/error404-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Error404PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404PageRoutingModule", function() { return Error404PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _error404_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error404.page */ "./src/app/error404/error404.page.ts");




const routes = [
    {
        path: '',
        component: _error404_page__WEBPACK_IMPORTED_MODULE_3__["Error404Page"]
    }
];
let Error404PageRoutingModule = class Error404PageRoutingModule {
};
Error404PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Error404PageRoutingModule);



/***/ }),

/***/ "./src/app/error404/error404.module.ts":
/*!*********************************************!*\
  !*** ./src/app/error404/error404.module.ts ***!
  \*********************************************/
/*! exports provided: Error404PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404PageModule", function() { return Error404PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _error404_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error404-routing.module */ "./src/app/error404/error404-routing.module.ts");
/* harmony import */ var _error404_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error404.page */ "./src/app/error404/error404.page.ts");







let Error404PageModule = class Error404PageModule {
};
Error404PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _error404_routing_module__WEBPACK_IMPORTED_MODULE_5__["Error404PageRoutingModule"]
        ],
        declarations: [_error404_page__WEBPACK_IMPORTED_MODULE_6__["Error404Page"]]
    })
], Error404PageModule);



/***/ }),

/***/ "./src/app/error404/error404.page.scss":
/*!*********************************************!*\
  !*** ./src/app/error404/error404.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-height: 100vh;\n  background-color: #F2EEE8;\n  font-family: \"Open Sans\";\n}\n\n*, *:before, *:after {\n  box-sizing: content-box;\n  transform: translate3d(0, 0, 0);\n}\n\n.face {\n  width: 300px;\n  height: 300px;\n  border: 4px solid #383A41;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  margin: 0 auto;\n  margin-top: 100px;\n}\n\n@media screen and (max-width: 400px) {\n  .face {\n    margin-top: 40px;\n    transform: scale(0.8);\n  }\n}\n\n.face .band {\n  width: 350px;\n  height: 27px;\n  border: 4px solid #383A41;\n  border-radius: 5px;\n  margin-left: -25px;\n  margin-top: 50px;\n}\n\n.face .band .red {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #1eb5c6;\n}\n\n.face .band .white {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #FFFFFF;\n}\n\n.face .band .blue {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #1eb5c6;\n}\n\n.face .band:before {\n  content: \"\";\n  display: inline-block;\n  height: 27px;\n  width: 30px;\n  background-color: rgba(255, 255, 255, 0.3);\n  position: absolute;\n  z-index: 999;\n}\n\n.face .band:after {\n  content: \"\";\n  display: inline-block;\n  height: 27px;\n  width: 30px;\n  background-color: rgba(56, 58, 65, 0.3);\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  margin-top: -27px;\n}\n\n.face .eyes {\n  width: 128px;\n  margin: 0 auto;\n  margin-top: 40px;\n}\n\n.face .eyes:before {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  border: 7px solid #383A41;\n  margin-right: 20px;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  border-bottom: 0;\n}\n\n.face .eyes:after {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  border: 7px solid #383A41;\n  margin-left: 20px;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  border-bottom: 0;\n}\n\n.face .dimples {\n  width: 180px;\n  margin: 0 auto;\n  margin-top: 15px;\n}\n\n.face .dimples:before {\n  content: \"\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 80px;\n  border-radius: 50%;\n  background-color: rgba(30, 181, 198, 0.4);\n}\n\n.face .dimples:after {\n  content: \"\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-left: 80px;\n  border-radius: 50%;\n  background-color: rgba(30, 181, 198, 0.4);\n}\n\n.face .mouth {\n  width: 40px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: #383A41;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n\nh1 {\n  font-weight: 800;\n  color: #383A41;\n  text-align: center;\n  font-size: 2.5em;\n  padding-top: 20px;\n}\n\n@media screen and (max-width: 400px) {\n  h1 {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 2em;\n  }\n}\n\n.btn {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  padding: 20px;\n  background-color: #1eb5c6;\n  color: white;\n  width: 320px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 1.2em;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 80px;\n  margin-bottom: 50px;\n  transition: all 0.2s linear;\n}\n\n@media screen and (max-width: 400px) {\n  .btn {\n    margin: 0 auto;\n    margin-top: 60px;\n    margin-bottom: 50px;\n    width: 200px;\n  }\n}\n\n.btn:hover {\n  background-color: rgba(30, 181, 198, 0.8);\n  transition: all 0.2s linear;\n}\n\nion-card {\n  margin-top: 30px;\n  border-top: #1eb5c6 3px solid;\n  border-left: #1eb5c6 3px solid;\n  border-right: #1eb5c6 3px solid;\n  border-bottom: #1eb5c6 3px solid;\n  border-radius: 30px;\n}\n\nion-button {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3I0MDQvZXJyb3I0MDQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFiRztFQWNILHdCQUFBO0FBUEY7O0FBVUE7RUFDRSx1QkFBQTtFQUNBLCtCQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkExQkc7RUEyQkgsY0FBQTtFQUNBLGlCQUFBO0FBUEY7O0FBU0U7RUFURjtJQVVJLGdCQUFBO0lBQ0EscUJBQUE7RUFORjtBQUNGOztBQVFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVFJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBNUNBO0FBc0NOOztBQVNJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBcEREO0FBNkNMOztBQVVJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBdkRDO0FBK0NQOztBQVdJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVROOztBQVlJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQVZOOztBQWNFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVpKOztBQWNJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBWk47O0FBZUk7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFiTjs7QUFpQkU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBZko7O0FBaUJJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFmTjs7QUFrQkk7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQWhCTjs7QUFvQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBL0lHO0VBZ0pILGNBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFzQkE7RUFDRSxnQkFBQTtFQUNBLGNBdkpLO0VBd0pMLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUFxQkU7RUFQRjtJQVFJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VBbEJGO0FBQ0Y7O0FBcUJBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFsQkY7O0FBb0JFO0VBaEJGO0lBaUJJLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQWpCRjtBQUNGOztBQW1CRTtFQUNFLHlDQUFBO0VBQ0EsMkJBQUE7QUFqQko7O0FBcUJBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBbEJGOztBQW9CQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFqQkYiLCJmaWxlIjoic3JjL2FwcC9lcnJvcjQwNC9lcnJvcjQwNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ2I6ICNGMkVFRTg7XG4kd2g6ICNGRkZGRkY7XG4kZGFyazogIzM4M0E0MTtcbiRyZWQ6ICMxZWI1YzY7XG4kYmx1ZTogIzFlYjVjNjtcblxuJGJyZWFrOiA0MDBweDtcblxuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ2I7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbn1cblxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLmZhY2Uge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICRkYXJrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2g7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWspIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xuICB9XG5cbiAgLmJhbmQge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgJGRhcms7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgLnJlZCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDMpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xuICAgIH1cblxuICAgIC53aGl0ZSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDMpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2g7XG4gICAgfVxuXG4gICAgLmJsdWUge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAzKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMjdweDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2gsMC4zKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmssMC4zKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLXRvcDogLTI3cHg7XG4gICAgfVxuICB9XG5cbiAgLmV5ZXMge1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgYm9yZGVyOiA3cHggc29saWQgJGRhcms7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMnB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgYm9yZGVyOiA3cHggc29saWQgJGRhcms7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLmRpbXBsZXMge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcmVkLDAuNCk7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHJlZCwwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC5tb3V0aCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbn1cblxuaDEge1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogJGRhcms7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrKSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbn1cblxuLmJ0biB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlLDEuMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrKSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWUsMC44KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcbiAgfVxufVxuXG5pb24tY2FyZHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYm9yZGVyLXRvcDogIzFlYjVjNiAzcHggc29saWQ7XG4gIGJvcmRlci1sZWZ0OiAjMWViNWM2IDNweCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiAjMWViNWM2IDNweCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogIzFlYjVjNiAzcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5pb24tYnV0dG9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/error404/error404.page.ts":
/*!*******************************************!*\
  !*** ./src/app/error404/error404.page.ts ***!
  \*******************************************/
/*! exports provided: Error404Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Page", function() { return Error404Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



let Error404Page = class Error404Page {
    constructor(_userService) {
        this._userService = _userService;
        this.token = this._userService.getToken();
        this.identity = this._userService.getIdentity();
    }
    ngOnInit() {
    }
};
Error404Page.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
Error404Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error404',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error404.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error404/error404.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error404.page.scss */ "./src/app/error404/error404.page.scss")).default]
    })
], Error404Page);



/***/ })

}]);
//# sourceMappingURL=error404-error404-module-es2015.js.map