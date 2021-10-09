(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-lampara-agregar-lampara-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-lampara/agregar-lampara.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-lampara/agregar-lampara.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAgregarLamparaAgregarLamparaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>agregar-lampara</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/agregar-lampara/agregar-lampara-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/agregar-lampara/agregar-lampara-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AgregarLamparaPageRoutingModule */

    /***/
    function srcAppAgregarLamparaAgregarLamparaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgregarLamparaPageRoutingModule", function () {
        return AgregarLamparaPageRoutingModule;
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


      var _agregar_lampara_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agregar-lampara.page */
      "./src/app/agregar-lampara/agregar-lampara.page.ts");

      var routes = [{
        path: '',
        component: _agregar_lampara_page__WEBPACK_IMPORTED_MODULE_3__["AgregarLamparaPage"]
      }];

      var AgregarLamparaPageRoutingModule = function AgregarLamparaPageRoutingModule() {
        _classCallCheck(this, AgregarLamparaPageRoutingModule);
      };

      AgregarLamparaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AgregarLamparaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/agregar-lampara/agregar-lampara.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/agregar-lampara/agregar-lampara.module.ts ***!
      \***********************************************************/

    /*! exports provided: AgregarLamparaPageModule */

    /***/
    function srcAppAgregarLamparaAgregarLamparaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgregarLamparaPageModule", function () {
        return AgregarLamparaPageModule;
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


      var _agregar_lampara_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agregar-lampara-routing.module */
      "./src/app/agregar-lampara/agregar-lampara-routing.module.ts");
      /* harmony import */


      var _agregar_lampara_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agregar-lampara.page */
      "./src/app/agregar-lampara/agregar-lampara.page.ts");

      var AgregarLamparaPageModule = function AgregarLamparaPageModule() {
        _classCallCheck(this, AgregarLamparaPageModule);
      };

      AgregarLamparaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agregar_lampara_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarLamparaPageRoutingModule"]],
        declarations: [_agregar_lampara_page__WEBPACK_IMPORTED_MODULE_6__["AgregarLamparaPage"]]
      })], AgregarLamparaPageModule);
      /***/
    },

    /***/
    "./src/app/agregar-lampara/agregar-lampara.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/agregar-lampara/agregar-lampara.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAgregarLamparaAgregarLamparaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FncmVnYXItbGFtcGFyYS9hZ3JlZ2FyLWxhbXBhcmEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/agregar-lampara/agregar-lampara.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/agregar-lampara/agregar-lampara.page.ts ***!
      \*********************************************************/

    /*! exports provided: AgregarLamparaPage */

    /***/
    function srcAppAgregarLamparaAgregarLamparaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgregarLamparaPage", function () {
        return AgregarLamparaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AgregarLamparaPage = /*#__PURE__*/function () {
        function AgregarLamparaPage() {
          _classCallCheck(this, AgregarLamparaPage);
        }

        _createClass(AgregarLamparaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AgregarLamparaPage;
      }();

      AgregarLamparaPage.ctorParameters = function () {
        return [];
      };

      AgregarLamparaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agregar-lampara',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./agregar-lampara.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-lampara/agregar-lampara.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./agregar-lampara.page.scss */
        "./src/app/agregar-lampara/agregar-lampara.page.scss"))["default"]]
      })], AgregarLamparaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=agregar-lampara-agregar-lampara-module-es5.js.map