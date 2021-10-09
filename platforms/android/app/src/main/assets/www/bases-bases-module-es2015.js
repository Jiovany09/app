(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bases-bases-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bases/bases.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bases/bases.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>Bases</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>¿Qué es la ONU?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"align-items: center\">\n      Las Naciones Unidas nacieron oficialmente el 24 de octubre de 1945, después de que la mayoría de los 51 Estados Miembros signatarios del documento fundacional de la Organización, la Carta de la ONU, la ratificaran. En la actualidad, 193 Estados son miembros de las Naciones Unidas, que están representados en el órgano deliberante, la Asamblea General.\n      ... <a href=\"https://www.un.org/es/sections/about-un/overview/index.html#:~:text=Las%20Naciones%20Unidas%20nacieron%20oficialmente,de%20la%20ONU%2C%20la%20ratificaran.&text=En%202020%2C%20la%20Organizaci%C3%B3n%20celebra%20su%2075%C2%BA%20aniversario.\">Saber más</a>\n   <center>\n       <ion-img style=\"width: 250px;height: 250px\" src=\"/assets/ONU.jpg\"></ion-img>\n     </center>\n    </ion-card-content>\n\n\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Objetivo 7</ion-card-title>\n      <ion-card-subtitle>Garantizar el acceso a una energía asequible, segura, sostenible y moderna</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      El mundo está avanzando hacia la consecución del Objetivo 7 con indicios alentadores de que la energía se está volviendo más sostenible y ampliamente disponible. El acceso a la electricidad en los países más pobres ha comenzado a acelerarse, la eficiencia energética continúa mejorando y la energía renovable está logrando resultados excelentes en el sector eléctrico.\n      A pesar de ello, es necesario prestar una mayor atención a las mejoras para...<a href=\"https://www.un.org/sustainabledevelopment/es/energy/\" style=\"text-decoration: none;\">\n       Saber más\n      </a>\n      <ion-img src=\"/assets/7.PNG\"></ion-img>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/bases/bases-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/bases/bases-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BasesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasesPageRoutingModule", function() { return BasesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bases_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bases.page */ "./src/app/bases/bases.page.ts");




const routes = [
    {
        path: '',
        component: _bases_page__WEBPACK_IMPORTED_MODULE_3__["BasesPage"]
    }
];
let BasesPageRoutingModule = class BasesPageRoutingModule {
};
BasesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BasesPageRoutingModule);



/***/ }),

/***/ "./src/app/bases/bases.module.ts":
/*!***************************************!*\
  !*** ./src/app/bases/bases.module.ts ***!
  \***************************************/
/*! exports provided: BasesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasesPageModule", function() { return BasesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bases_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bases-routing.module */ "./src/app/bases/bases-routing.module.ts");
/* harmony import */ var _bases_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bases.page */ "./src/app/bases/bases.page.ts");







let BasesPageModule = class BasesPageModule {
};
BasesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bases_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasesPageRoutingModule"]
        ],
        declarations: [_bases_page__WEBPACK_IMPORTED_MODULE_6__["BasesPage"]]
    })
], BasesPageModule);



/***/ }),

/***/ "./src/app/bases/bases.page.scss":
/*!***************************************!*\
  !*** ./src/app/bases/bases.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-top: #1eb5c6 3px solid;\n  border-radius: 10px;\n  border-left: #1eb5c6 2px solid;\n  border-right: #1eb5c6 2px solid;\n  border-bottom: #1eb5c6 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZXMvYmFzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmFzZXMvYmFzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gIGJvcmRlci10b3A6ICMxZWI1YzYgM3B4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItbGVmdDogIzFlYjVjNiAycHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogIzFlYjVjNiAycHggc29saWQ7XG4gIGJvcmRlci1ib3R0b206ICMxZWI1YzYgMnB4IHNvbGlkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/bases/bases.page.ts":
/*!*************************************!*\
  !*** ./src/app/bases/bases.page.ts ***!
  \*************************************/
/*! exports provided: BasesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasesPage", function() { return BasesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BasesPage = class BasesPage {
    constructor() { }
    ngOnInit() {
    }
};
BasesPage.ctorParameters = () => [];
BasesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bases',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bases.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bases/bases.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bases.page.scss */ "./src/app/bases/bases.page.scss")).default]
    })
], BasesPage);



/***/ })

}]);
//# sourceMappingURL=bases-bases-module-es2015.js.map