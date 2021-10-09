(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacto-contacto-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppContactoContactoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>Contacto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card  style=\" border-top: #1eb5c6 3px solid;border-radius: 10px; border-left: #1eb5c6 2px solid; border-right: #1eb5c6 2px solid; border-bottom: #1eb5c6 2px solid;\">\n    <ion-card-header>\n      <ion-card-title>Redes Sociales</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-icon name=\"logo-google\"></ion-icon>\n        <a href=\"mailto:energyofwaterequipo3@gmail.com?Subject=Interesado%20en%20su%20proyecto\" style=\"margin-left: 20px;\">energyofwaterequipo3@gmail.com</a>\n\n\n\n\n\n\n\n\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n        <ion-label style=\"margin-left: 20px;\">Energy of water</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n        <ion-label style=\"margin-left: 20px;\">_energyofwater</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"logo-youtube\"></ion-icon>\n        <a href=\"https://www.youtube.com/channel/UCEx1Z8_BUts6fZONivl9VHQ\" style=\"margin-left: 20px;\">Energy of water</a>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card  style=\" border-top: #1eb5c6 3px solid;border-radius: 10px; border-left: #1eb5c6 2px solid; border-right: #1eb5c6 2px solid; border-bottom: #1eb5c6 2px solid;\">\n    <ion-card-header>\n      <ion-card-title>Números telefónicos</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>Número fijo</ion-label>\n      <ion-item>\n        <ion-icon name=\"call-outline\"></ion-icon>\n        <a style=\"margin-left: 20px;\" href=\"tel:+522728167226\">272-816-7226</a>\n      </ion-item>\n      <ion-label>Número celular</ion-label>\n      <ion-item>\n        <ion-icon name=\"phone-portrait-outline\"></ion-icon>\n        <a style=\"margin-left: 20px;\" href=\"tel:+522725527822\">272-552-7822</a>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/contacto/contacto-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/contacto/contacto-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ContactoPageRoutingModule */

    /***/
    function srcAppContactoContactoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactoPageRoutingModule", function () {
        return ContactoPageRoutingModule;
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


      var _contacto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contacto.page */
      "./src/app/contacto/contacto.page.ts");

      var routes = [{
        path: '',
        component: _contacto_page__WEBPACK_IMPORTED_MODULE_3__["ContactoPage"]
      }];

      var ContactoPageRoutingModule = function ContactoPageRoutingModule() {
        _classCallCheck(this, ContactoPageRoutingModule);
      };

      ContactoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/contacto/contacto.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/contacto/contacto.module.ts ***!
      \*********************************************/

    /*! exports provided: ContactoPageModule */

    /***/
    function srcAppContactoContactoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactoPageModule", function () {
        return ContactoPageModule;
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


      var _contacto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contacto-routing.module */
      "./src/app/contacto/contacto-routing.module.ts");
      /* harmony import */


      var _contacto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contacto.page */
      "./src/app/contacto/contacto.page.ts");

      var ContactoPageModule = function ContactoPageModule() {
        _classCallCheck(this, ContactoPageModule);
      };

      ContactoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contacto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactoPageRoutingModule"]],
        declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]]
      })], ContactoPageModule);
      /***/
    },

    /***/
    "./src/app/contacto/contacto.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/contacto/contacto.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppContactoContactoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/contacto/contacto.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/contacto/contacto.page.ts ***!
      \*******************************************/

    /*! exports provided: ContactoPage */

    /***/
    function srcAppContactoContactoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactoPage", function () {
        return ContactoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ContactoPage = /*#__PURE__*/function () {
        function ContactoPage() {
          _classCallCheck(this, ContactoPage);
        }

        _createClass(ContactoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactoPage;
      }();

      ContactoPage.ctorParameters = function () {
        return [];
      };

      ContactoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contacto.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contacto.page.scss */
        "./src/app/contacto/contacto.page.scss"))["default"]]
      })], ContactoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contacto-contacto-module-es5.js.map