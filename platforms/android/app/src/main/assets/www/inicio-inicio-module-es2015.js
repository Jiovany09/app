(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n    <ion-toolbar color=\"secondary\" >\n        <ion-title >Inicio</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title style=\"text-align: center;\">Energy of water</ion-card-title>\n        </ion-card-header>\n    </ion-card>\n    <ion-card>\n        <center>\n            <ion-label style=\"; margin: auto 13%;\"><img src=\"assets/logo1.png\"></ion-label>\n        </center>\n    </ion-card>\n    <ion-card>\n        <ion-card-header >\n                <ion-card-title>\n                    <ion-icon name=\"people-outline\"></ion-icon>\n                    Nosotros\n                </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                Somos un equipo de estudiantes que sueña con un futuro en el que la generación de energía eléctrica sea\n                limpia.\n\n                Donde esos sistemas generados sean gestionados por las IoT para asi hacerlos más eficientes.\n\n                Creemos que esto puede inspirar a más personas, organizaciones y empresas, a implementar este tipo de\n\n                tecnología para así salvar el futuro de nuestro planeta.\n            </ion-card-content>\n        <center>\n            <ion-img style=\"width: 250px;height: 250px\" src=\"assets/NOSOTRO-NEW.jpg\"  ></ion-img>\n        </center>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>\n                <ion-icon name=\"golf-outline\"></ion-icon>\n                Misión\n            </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Ser una organización creadora de sistemas auto sustentables para reducir el impacto ambiental a causa del\n            consumo eléctrico, con el uso de las Iot para una gestión más optima.\n        </ion-card-content>\n        <center>\n            <ion-img style=\"width: 250px;height: 250px\" src=\"assets/MISION.jpg\"></ion-img>\n        </center>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>\n                <ion-icon name=\"eye-outline\"></ion-icon>\n                Visión\n            </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Para el año 2021 tener un dispositivo funcional operando en campo que contribuya a los objetivos de\n            sostenibilidad de la región de Orizaba.\n        </ion-card-content>\n        <center>\n            <ion-img style=\"width: 250px;height: 250px\" src=\"assets/VISION.png\"></ion-img>\n        </center>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>\n                <ion-icon name=\"scan-circle-outline\"></ion-icon>\n                Objetivos\n            </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Reducir el consumo de energía de fuentes contaminantes\n            Aumentar la eficiencia de dichos sistemas con la implementación de las IoTs\n\n            Crecer las áreas cubiertas constantemente\n\n            Ser reconocidos por proyectos de energías limpias gestionadas por IoTs\n\n            Ofrecer soluciones de consumo eléctrico eficientes y respetuosas con el medio ambiente.\n        </ion-card-content>\n        <center>\n            <ion-img style=\"width: 250px;height: 250px\" src=\"assets/OBJETI_NEW.jpg\"></ion-img>\n        </center>\n\n\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/inicio/inicio-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "./src/app/inicio/inicio.page.ts");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "./src/app/inicio/inicio.module.ts":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/inicio/inicio.page.ts");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/inicio/inicio.page.scss":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  background-color: green;\n}\n\nion-card {\n  border-top: #1eb5c6 3px solid;\n  border-left: #1eb5c6 2px solid;\n  border-radius: 10px;\n  border-right: #1eb5c6 2px solid;\n  border-bottom: #1eb5c6 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQVlBO0VBQ0MsNkJBQUE7RUFDQyw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQVRGIiwiZmlsZSI6InNyYy9hcHAvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG5cbiRjb2xvcnM6IChcbiAgICAgICAgY29sb3IzOiAjMmI3NWI5LFxuICAgICAgICBwcmltYXJ5OiAjMDAwMDAwLFxuICAgICAgICBzZWNvbmRhcnk6ICMzMmRiNjQsXG4gICAgICAgIGRhbmdlcjogICNmNTNkM2QsXG4gICAgICAgIGxpZ2h0OiAgI2Y0ZjRmNCxcbiAgICAgICAgZGFyazogICMyMjIsXG4pO1xuXG5pb24tY2FyZHtcbiBib3JkZXItdG9wOiAjMWViNWM2IDNweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6ICMxZWI1YzYgMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmlnaHQ6ICMxZWI1YzYgMnB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAjMWViNWM2IDJweCBzb2xpZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/inicio/inicio.page.ts":
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InicioPage = class InicioPage {
    constructor() {
        this.user = 'David Castro';
    }
    ngOnInit() {
    }
};
InicioPage.ctorParameters = () => [];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inicio.page.scss */ "./src/app/inicio/inicio.page.scss")).default]
    })
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module-es2015.js.map