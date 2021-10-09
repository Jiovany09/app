(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-contenedor-agregar-contenedor-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-contenedor/agregar-contenedor.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-contenedor/agregar-contenedor.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAgregarContenedorAgregarContenedorPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-item>\n      <ion-icon id=\"user\" name=\"person-circle-outline\" slot=\"end\" style=\"font-size: 50px;\"></ion-icon>\n      <ion-title>Usuario 0079</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"margin-top: 20px;\">\n    <ion-row>\n      <ion-col>\n        <div>Contenedor</div>\n      </ion-col>\n      <ion-col>\n        <div>Estatus</div>\n      </ion-col>\n      <ion-col>\n        <div>Eliminar</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>Contenedor A</div>z\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item>\n            <ion-toggle slot=\"start\" name=\"blueberry\" checked></ion-toggle>\n          </ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div><ion-icon name=\"trash-outline\" size=\"large\" style=\"margin-left: 20px;\"></ion-icon></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>Contenedor B</div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item>\n            <ion-toggle slot=\"start\" name=\"blueberry\"></ion-toggle>\n          </ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div><ion-icon name=\"trash-outline\" size=\"large\" style=\"margin-left: 20px;\"></ion-icon></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>Contenedor C</div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item>\n            <ion-toggle slot=\"start\" name=\"blueberry\" checked></ion-toggle>\n          </ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div><ion-icon name=\"trash-outline\" size=\"large\" style=\"margin-left: 20px;\"></ion-icon></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>Contenedor D</div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item>\n            <ion-toggle slot=\"start\" name=\"blueberry\" checked></ion-toggle>\n          </ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div><ion-icon name=\"trash-outline\" size=\"large\" style=\"margin-left: 20px;\"></ion-icon></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>Contenedor E</div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item>\n            <ion-toggle slot=\"start\" name=\"blueberry\"></ion-toggle>\n          </ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div><ion-icon name=\"trash-outline\" size=\"large\" style=\"margin-left: 20px;\"></ion-icon></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div (click)=\"onClick()\">\n    <div>\n      <ion-icon name=\"add-circle-outline\" style=\"font-size: 60px; margin-top: 20px; margin-left: 295px;\"></ion-icon>\n    </div>\n    <div>\n      <ion-label style=\"margin-left: 250px;\">Agregar contenedor</ion-label>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/agregar-contenedor/agregar-contenedor-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/agregar-contenedor/agregar-contenedor-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: AgregarContenedorPageRoutingModule */

    /***/
    function srcAppAgregarContenedorAgregarContenedorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgregarContenedorPageRoutingModule", function () {
        return AgregarContenedorPageRoutingModule;
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


      var _agregar_contenedor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agregar-contenedor.page */
      "./src/app/agregar-contenedor/agregar-contenedor.page.ts");

      var routes = [{
        path: '',
        component: _agregar_contenedor_page__WEBPACK_IMPORTED_MODULE_3__["AgregarContenedorPage"]
      }];

      var AgregarContenedorPageRoutingModule = function AgregarContenedorPageRoutingModule() {
        _classCallCheck(this, AgregarContenedorPageRoutingModule);
      };

      AgregarContenedorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AgregarContenedorPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/agregar-contenedor/agregar-contenedor.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/agregar-contenedor/agregar-contenedor.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AgregarContenedorPageModule */

    /***/
    function srcAppAgregarContenedorAgregarContenedorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgregarContenedorPageModule", function () {
        return AgregarContenedorPageModule;
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


      var _agregar_contenedor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agregar-contenedor-routing.module */
      "./src/app/agregar-contenedor/agregar-contenedor-routing.module.ts");
      /* harmony import */


      var _agregar_contenedor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agregar-contenedor.page */
      "./src/app/agregar-contenedor/agregar-contenedor.page.ts");

      var AgregarContenedorPageModule = function AgregarContenedorPageModule() {
        _classCallCheck(this, AgregarContenedorPageModule);
      };

      AgregarContenedorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agregar_contenedor_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarContenedorPageRoutingModule"]],
        declarations: [_agregar_contenedor_page__WEBPACK_IMPORTED_MODULE_6__["AgregarContenedorPage"]]
      })], AgregarContenedorPageModule);
      /***/
    },

    /***/
    "./src/app/agregar-contenedor/agregar-contenedor.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/agregar-contenedor/agregar-contenedor.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAgregarContenedorAgregarContenedorPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FncmVnYXItY29udGVuZWRvci9hZ3JlZ2FyLWNvbnRlbmVkb3IucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/agregar-contenedor/agregar-contenedor.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/agregar-contenedor/agregar-contenedor.page.ts ***!
      \***************************************************************/

    /*! exports provided: AgregarContenedorPage */

    /***/
    function srcAppAgregarContenedorAgregarContenedorPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgregarContenedorPage", function () {
        return AgregarContenedorPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AgregarContenedorPage = /*#__PURE__*/function () {
        function AgregarContenedorPage(alertController) {
          _classCallCheck(this, AgregarContenedorPage);

          this.alertController = alertController;
        }

        _createClass(AgregarContenedorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Alerta',
                        message: '¿Está seguro que desea agregar contenedor F?',
                        buttons: ['Cancelar', 'Aceptar']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AgregarContenedorPage;
      }();

      AgregarContenedorPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      AgregarContenedorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agregar-contenedor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./agregar-contenedor.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-contenedor/agregar-contenedor.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./agregar-contenedor.page.scss */
        "./src/app/agregar-contenedor/agregar-contenedor.page.scss"))["default"]]
      })], AgregarContenedorPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=agregar-contenedor-agregar-contenedor-module-es5.js.map