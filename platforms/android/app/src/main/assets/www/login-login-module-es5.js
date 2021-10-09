(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n    <ion-card-content class=\"login\">\n\n        <ion-card>\n\n        </ion-card>\n\n\n        <br>\n        <br>\n        <br>\n        <ion-list-header>\n\n            <ion-label style=\"align-items: center; margin: auto 13%;\"><img src=\"assets/logoSVG.svg\"></ion-label>\n        </ion-list-header>\n        <br>\n        <br>\n        <ion-label>\n            <ion-item-group style=\"text-align: center;color: #1a1a1a;font-size: x-large;\">Iniciar Sesión\n            </ion-item-group>\n        </ion-label>\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\"\n              style=\"margin-top: 30px; margin-left: 20px;margin-right: 20px;\">\n\n            <ion-item style=\"border-radius: 50px\">\n                <ion-label position=\"floating\" for=\"correo\">Correo Electrónico</ion-label>\n                <ion-input\n                        type=\"email\"\n                        [(ngModel)]=\"user.email\"\n                        class=\"form-control\"\n                        name=\"correo\"\n                        placeholder=\"ejemplo@gmail.com\"\n                        id=\"email\"\n                        #filterName\n                        required></ion-input>\n                <!--pattern=\"[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}\"-->\n\n            </ion-item>\n            <br>\n            <ion-item style=\"border-radius: 50px\">\n                <ion-label position=\"floating\" for=\"password\">Contraseña</ion-label>\n                <ion-input\n                    #filterName\n                    #password=\"ngModel\"\n                    type=\"password\"\n                    [(ngModel)]=\"user.password\"\n                    aria-label=\"\"\n                    class=\"form-control\"\n                    name=\"password\"\n                    id=\"password\"\n                    placeholder=\"Contraseña\" required\n                    minlength=\"8\" maxlength=\"18\"></ion-input>\n            </ion-item>\n            <ion-button type=\"submit\" shape=\"round\" expand=\"block\" style=\"margin-bottom: 20px; margin-top: 20px;\"\n                        [disabled]=\"!loginForm.form.valid\">Iniciar Sesión\n            </ion-button>\n            <ion-button shape=\"round\" expand=\"block\" routerLink=\"/registrar\">Registrarse</ion-button>\n        </form>\n    </ion-card-content>\n    <br>\n    <br>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".centrado {\n  text-align: center;\n}\n\n.login {\n  position: center;\n  top: 50%;\n  left: 50%;\n  width: 450px;\n  transform: translate(-50%, -50%);\n  transition: transform 300ms, box-shadow 300ms;\n  box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2);\n}\n\n.login::before, .login::after {\n  content: \"\";\n  position: absolute;\n  width: 800px;\n  height: 800px;\n  border-top-left-radius: 40%;\n  border-top-right-radius: 45%;\n  border-bottom-left-radius: 35%;\n  border-bottom-right-radius: 40%;\n  z-index: -1;\n}\n\n.login::before {\n  left: 40%;\n  bottom: -25%;\n  background-color: rgba(69, 105, 144, 0.15);\n  -webkit-animation: wawes 67s infinite linear;\n  animation: wawes 6s infinite linear;\n}\n\n.login::after {\n  left: 35%;\n  bottom: -25%;\n  background-color: rgba(2, 128, 144, 0.2);\n  -webkit-animation: wawes 7s infinite;\n  animation: wawes 7s infinite;\n}\n\n@-webkit-keyframes wawes {\n  from {\n    -webkit-transform: rotate(0);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\ninput:valid,\ntextarea:valid {\n  background-color: green;\n}\n\ninput:invalid,\ntextarea:invalid {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBS0EsZ0NBQUE7RUFHQSw2Q0FBQTtFQUNBLGdEQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBRUEsbUNBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUVBLDRCQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLDRCQUFBO0VBRUY7RUFBQTtJQUNFLGlDQUFBO0VBRUY7QUFDRjs7QUFRQTs7RUFFRSx1QkFBQTtBQUVGOztBQUNBOztFQUVFLHFCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJhZG97XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbi5sb2dpbiB7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA0NTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMzAwbXMsIGJveC1zaGFkb3cgMzAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMzAwbXMsIGJveC1zaGFkb3cgMzAwbXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcywgYm94LXNoYWRvdyAzMDBtcztcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCByZ2JhKDIsIDEyOCwgMTQ0LCAwLjIpO1xufVxuLmxvZ2luOjpiZWZvcmUsIC5sb2dpbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDUlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNSU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MCU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmxvZ2luOjpiZWZvcmUge1xuICBsZWZ0OiA0MCU7XG4gIGJvdHRvbTogLTI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OSwgMTA1LCAxNDQsIDAuMTUpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2F3ZXMgNjdzIGluZmluaXRlIGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb246IHdhd2VzIDZzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiB3YXdlcyA2cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4ubG9naW46OmFmdGVyIHtcbiAgbGVmdDogMzUlO1xuICBib3R0b206IC0yNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTI4LCAxNDQsIDAuMik7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3YXdlcyA3cyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHdhd2VzIDdzIGluZmluaXRlO1xuICBhbmltYXRpb246IHdhd2VzIDdzIGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2F3ZXMge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyB3YXdlcyB7XG4gIGZyb20ge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuaW5wdXQ6dmFsaWQsXG50ZXh0YXJlYTp2YWxpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG5pbnB1dDppbnZhbGlkLFxudGV4dGFyZWE6aW52YWxpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/user */
      "./src/app/models/user.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(_route, _router, _userService) {
          _classCallCheck(this, LoginPage);

          this._route = _route;
          this._router = _router;
          this._userService = _userService;
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"](1, '', '', '', '', 'empleado', '', '', '');
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logout();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this = this;

            this._userService.signup(this.user).subscribe(function (response) {
              _this.data = response; // Token

              localStorage.setItem('token', _this.data.token);

              _this._userService.signup(_this.user, true).subscribe(function (response) {
                _this.identity = response; // Objeto usuario identificado

                localStorage.setItem('identity', JSON.stringify(_this.data.user)); // Redirección

                _this._router.navigateByUrl('/tabs/inicio');

                form.reset();
              }, function (error) {
                console.log(error);
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this2 = this;

            this._route.params.subscribe(function (params) {
              var logout = +params['sure'];

              if (logout == 1) {
                localStorage.removeItem('identity');
                localStorage.removeItem('token');
                _this2.identity = '';
                _this2.token = '';

                _this2._router.navigate(['/login']);
              }
            });
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map