"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 4065:
/*!***********************************************************!*\
  !*** ./src/app/home/home-layout/home-layout.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeLayoutComponent": function() { return /* binding */ HomeLayoutComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-layout.component.html */ 7963);
/* harmony import */ var _home_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-layout.component.scss */ 9269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7175);






let HomeLayoutComponent = class HomeLayoutComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent {
    constructor(builder) {
        super(builder);
        this.builder = builder;
    }
    ngOnInit() { }
};
HomeLayoutComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder }
];
HomeLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home-layout',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_layout_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeLayoutComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": function() { return /* binding */ HomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-layout/home-layout.component */ 4065);
/* harmony import */ var _pages_introduction_page_introduction_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/introduction-page/introduction-page.component */ 727);
/* harmony import */ var _pages_completed_page_completed_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/completed-page/completed-page.component */ 4682);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);
/* harmony import */ var _pages_link_not_valid_link_not_valid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/link-not-valid/link-not-valid.component */ 6767);
/* harmony import */ var _core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/guards/animation.guard */ 40);









const routes = [
    {
        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutes.HOME,
        component: _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_0__.HomeLayoutComponent,
        canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_5__.AnimationGuard],
        children: [
            {
                path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.CoreRoutes.INTRODUCTION,
                component: _pages_introduction_page_introduction_page_component__WEBPACK_IMPORTED_MODULE_1__.IntroductionPageComponent,
                canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_5__.AnimationGuard]
            },
            {
                path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.CoreRoutes.COMPLETED,
                component: _pages_completed_page_completed_page_component__WEBPACK_IMPORTED_MODULE_2__.CompletedPageComponent,
                canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_5__.AnimationGuard]
            },
            {
                path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.CoreRoutes.LINK_NOT_VALID,
                component: _pages_link_not_valid_link_not_valid_component__WEBPACK_IMPORTED_MODULE_4__.LinkNotValidComponent,
                canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_5__.AnimationGuard]
            }
        ]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    })
], HomeRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-layout/home-layout.component */ 4065);
/* harmony import */ var _pages_introduction_page_introduction_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/introduction-page/introduction-page.component */ 727);
/* harmony import */ var _pages_completed_page_completed_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/completed-page/completed-page.component */ 4682);
/* harmony import */ var _pages_link_not_valid_link_not_valid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/link-not-valid/link-not-valid.component */ 6767);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ 4466);









let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_1__.HomeLayoutComponent,
            _pages_introduction_page_introduction_page_component__WEBPACK_IMPORTED_MODULE_2__.IntroductionPageComponent,
            _pages_completed_page_completed_page_component__WEBPACK_IMPORTED_MODULE_3__.CompletedPageComponent,
            _pages_link_not_valid_link_not_valid_component__WEBPACK_IMPORTED_MODULE_4__.LinkNotValidComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule
        ]
    })
], HomeModule);



/***/ }),

/***/ 4682:
/*!***********************************************************************!*\
  !*** ./src/app/home/pages/completed-page/completed-page.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedPageComponent": function() { return /* binding */ CompletedPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_completed_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./completed-page.component.html */ 5482);
/* harmony import */ var _completed_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed-page.component.scss */ 330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);






let CompletedPageComponent = class CompletedPageComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent {
    constructor(builder) {
        super(builder);
        this.builder = builder;
    }
    ngOnInit() {
    }
};
CompletedPageComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder }
];
CompletedPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-completed-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_completed_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_completed_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompletedPageComponent);



/***/ }),

/***/ 727:
/*!*****************************************************************************!*\
  !*** ./src/app/home/pages/introduction-page/introduction-page.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionPageComponent": function() { return /* binding */ IntroductionPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_introduction_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./introduction-page.component.html */ 3766);
/* harmony import */ var _introduction_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduction-page.component.scss */ 3700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/data.service */ 5925);








let IntroductionPageComponent = class IntroductionPageComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_3__.AbstractAnimatedComponent {
    constructor(builder, _dataService) {
        super(builder);
        this.builder = builder;
        this._dataService = _dataService;
        this.roomsPageName = _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.RoomsPageName;
        this.coreRoutes = _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.CoreRoutes;
    }
    ngOnInit() {
        this.userData = this._dataService.pagesData.user;
        this.pagesData = this._dataService.pagesData.pages;
    }
};
IntroductionPageComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder },
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService }
];
IntroductionPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-introduction-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_introduction_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_introduction_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroductionPageComponent);



/***/ }),

/***/ 6767:
/*!***********************************************************************!*\
  !*** ./src/app/home/pages/link-not-valid/link-not-valid.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkNotValidComponent": function() { return /* binding */ LinkNotValidComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_link_not_valid_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./link-not-valid.component.html */ 5797);
/* harmony import */ var _link_not_valid_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-not-valid.component.scss */ 6880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7175);






let LinkNotValidComponent = class LinkNotValidComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent {
    constructor(builder) {
        super(builder);
        this.builder = builder;
    }
    ngOnInit() {
    }
};
LinkNotValidComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder }
];
LinkNotValidComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-link-not-valid',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_link_not_valid_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_link_not_valid_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LinkNotValidComponent);



/***/ }),

/***/ 7963:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home-layout/home-layout.component.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main\" #animationTarget>\n    <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ 5482:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/pages/completed-page/completed-page.component.html ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"opacity: 1; display: flex\" class=\"completed-screen\" #animationTarget>\n    <a routerLink=\"/\" class=\"logo-wrapper w-inline-block\">\n        <img src=\"/assets/common/images/logo.svg\" alt=\"\" class=\"image-2 completed-logo\"/>\n    </a>\n\n    <div class=\"bg-overlay\"></div>\n    <div class=\"completed-container\">\n        <h2 class=\"h1 completed-title\">YOUR ORDER IS COMPLETED!</h2>\n        <p class=\"paragraph-6\">Your chosen room is <span class=\"the-curr-room-num\">777</span><br/></p>\n        <p class=\"paragraph-8\">Subject to final confirmation 12 hours prior to arrival.<br/></p>\n        <p class=\"paragraph-7\">\n            Thank you <span class=\"name\">User</span>, <br/>\n            we hope you enjoy your stay.\n        </p>\n        <p class=\"paragraph-7\">For questions or concerns, we&#x27;re here: <a\n                href=\"mailto:pre-arrival@atlashotels.co.il\" target=\"_blank\"\n                class=\"link\">pre-arrival@atlashotels.co.il</a><br/></p>\n    </div>\n</div>\n");

/***/ }),

/***/ 3766:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/pages/introduction-page/introduction-page.component.html ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"first-screen\" #animationTarget>\n    <div class=\"homepage-hero\">\n        <div class=\"bg-overlay\"></div>\n        <app-logo></app-logo>\n        <div class=\"text-container\">\n            <div class=\"up-text\">\n                <h1 class=\"h1 white-light\">Hi <span class=\"name\">{{ userData.user_name }}</span>,</h1>\n                <h3 class=\"h3 hero-title\">HIGH FLOOR OR LOW FLOOR?<br/></h3>\n                <h3 class=\"h3 hero-title\">PORT VIEW OR CITY VIEW?<br/></h3>\n                <p class=\"paragraph-2\">You can finally secure your ideal room before you arrive, and enjoy a tailored\n                    experience at our hotel, for only <span class=\"the-price\">{{ userData.price }}</span> /night.<br/></p>\n            </div>\n            <div class=\"button-text\">\n                <p class=\"paragraph-4\">*Subject to final confirmation {{ userData.link_expiration_time }} hours prior to arrival.<br/></p>\n                <p class=\"paragraph-4\">*Charge upon arrival</p>\n                <p class=\"paragraph-4\">*E&amp;OE</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"user-vication-details\">\n        <div class=\"check-in-check-out\">\n            <div class=\"single-detaile check-in\">\n                <h4 class=\"single-details-title\">Check in</h4>\n                <p class=\"single-details-time single-details check-in-date\">{{ userData.check_in_date }}</p>\n            </div>\n            <div class=\"single-detaile check-out\">\n                <h4 class=\"single-details-title\">Check out</h4>\n                <p class=\"single-details-time single-details check-out-date\">{{ userData.check_out_date }}</p>\n            </div>\n        </div>\n        <div class=\"single-detaile last\">\n            <h4 class=\"single-details-title\">Order number</h4>\n            <p class=\"single-details-time single-details order-nym\">{{ userData.order_number }}</p>\n        </div>\n        <a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + roomsPageName.FLOOR]\" class=\"button btn-big start-choose w-button\">\n            Let me choose\n        </a>\n    </div>\n</div>\n\n<app-images-pre-render></app-images-pre-render>\n");

/***/ }),

/***/ 5797:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/pages/link-not-valid/link-not-valid.component.html ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/\" class=\"logo-wrapper white-bg w-inline-block\" #animationTarget>\n  <img src=\"/assets/common/images/logo.svg\" alt=\"\" class=\"image-2\">\n</a>\n<div class=\"container\">\n  <p class=\"center-align\">THE LINK IS NOT VALID</p>\n  <p class=\"center-align\">PLEASE CONTACT</p>\n  <p class=\"center-align\"><a href=\"mailto:pre-arrival@atlashotels.co.il\" target=\"_blank\" class=\"link\">pre-arrival@atlashotels.co.il</a></p>\n</div>\n");

/***/ }),

/***/ 9269:
/*!*************************************************************!*\
  !*** ./src/app/home/home-layout/home-layout.component.scss ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 330:
/*!*************************************************************************!*\
  !*** ./src/app/home/pages/completed-page/completed-page.component.scss ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZWQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3700:
/*!*******************************************************************************!*\
  !*** ./src/app/home/pages/introduction-page/introduction-page.component.scss ***!
  \*******************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6880:
/*!*************************************************************************!*\
  !*** ./src/app/home/pages/link-not-valid/link-not-valid.component.scss ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = ":host::after {\n  content: \"\";\n  background-image: url(/assets/common/images/homepage-img.jpg);\n  opacity: 0.3;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n:host .container {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -40%);\n}\n:host .center-align {\n  text-align: center;\n}\n:host a, :host p {\n  color: black !important;\n  font-weight: normal !important;\n  letter-spacing: 1.3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmstbm90LXZhbGlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFBSiIsImZpbGUiOiJsaW5rLW5vdC12YWxpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY29tbW9uL2ltYWdlcy9ob21lcGFnZS1pbWcuanBnKTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmNvbnRhaW5lcntcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xuICB9XG4gIC5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBhLCBwe1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS4zcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts-es2015.js.map