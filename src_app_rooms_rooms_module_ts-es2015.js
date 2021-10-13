"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_rooms_rooms_module_ts"],{

/***/ 806:
/*!*************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/bath-page/bath-page.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BathPageComponent": function() { return /* binding */ BathPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bath_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bath-page.component.html */ 358);
/* harmony import */ var _bath_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bath-page.component.scss */ 9558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/data.service */ 5925);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);








let BathPageComponent = class BathPageComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent {
    constructor(builder, _dataService) {
        super(builder);
        this.builder = builder;
        this._dataService = _dataService;
    }
    ngOnInit() {
        this.pageData = this._dataService.getRoomData(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.BATHE);
        this.pageStepIndex = this._dataService.getPageStepIndex(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.BATHE);
        this.pagesNameListLength = this._dataService.pagesNameList.length - 1;
    }
};
BathPageComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder },
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
BathPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-bath-step',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bath_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bath_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BathPageComponent);



/***/ }),

/***/ 7515:
/*!***********************************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/dreams-location-page/dreams-location-page.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DreamsLocationPageComponent": function() { return /* binding */ DreamsLocationPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dreams_location_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dreams-location-page.component.html */ 5773);
/* harmony import */ var _dreams_location_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dreams-location-page.component.scss */ 3810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/data.service */ 5925);








let DreamsLocationPageComponent = class DreamsLocationPageComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent {
    constructor(builder, _dataService) {
        super(builder);
        this.builder = builder;
        this._dataService = _dataService;
    }
    ngOnInit() {
        this.pageData = this._dataService.getRoomData(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.DREAMS_LOCATION);
        this.pageStepIndex = this._dataService.getPageStepIndex(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.DREAMS_LOCATION);
        this.pagesNameListLength = this._dataService.pagesNameList.length - 1;
    }
};
DreamsLocationPageComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder },
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService }
];
DreamsLocationPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dreams-location-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dreams_location_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dreams_location_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DreamsLocationPageComponent);



/***/ }),

/***/ 5842:
/*!***************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/floor-page/floor-page.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloorPageComponent": function() { return /* binding */ FloorPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_floor_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./floor-page.component.html */ 3384);
/* harmony import */ var _floor_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floor-page.component.scss */ 4881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/data.service */ 5925);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);








let FloorPageComponent = class FloorPageComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent {
    constructor(builder, _dataService) {
        super(builder);
        this.builder = builder;
        this._dataService = _dataService;
    }
    ngOnInit() {
        this.pageData = this._dataService.getRoomData(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.FLOOR);
        this.pageStepIndex = this._dataService.getPageStepIndex(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.FLOOR);
        this.pagesNameListLength = this._dataService.pagesNameList.length - 1;
    }
};
FloorPageComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder },
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
FloorPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-floor-step',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_floor_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_floor_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FloorPageComponent);



/***/ }),

/***/ 3410:
/*!***********************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/rooms-map-page/rooms-map-page.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsMapPageComponent": function() { return /* binding */ RoomsMapPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rooms_map_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rooms-map-page.component.html */ 243);
/* harmony import */ var _rooms_map_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-map-page.component.scss */ 937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);
/* harmony import */ var _core_services_rooms_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/rooms-map.service */ 3350);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/data.service */ 5925);
/* harmony import */ var _core_utilities_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/utilities/utility.service */ 6824);











let RoomsMapPageComponent = class RoomsMapPageComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_4__.AbstractAnimatedComponent {
    constructor(builder, _roomsMapService, router, _dataService, utilityService) {
        super(builder);
        this.builder = builder;
        this._roomsMapService = _roomsMapService;
        this.router = router;
        this._dataService = _dataService;
        this.utilityService = utilityService;
        this.isShowConfirmDialog = false;
        this.isConfirmOrder = false;
    }
    ngOnInit() {
        this.pageData = this._dataService.getRoomData(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.RoomsPageName.ROOMS_MAP);
        this.userData = this._dataService.pagesData.user;
        this.selectedRoom = this.pageData.rooms[0];
        this.subscribes();
    }
    subscribes() {
        this._roomsMapService.isConfirmOrder$.subscribe(value => this.isConfirmOrder = value);
        this._roomsMapService.isShowConfirmDialog$.subscribe(value => this.isShowConfirmDialog = value);
    }
    closeConfirmDialog() {
        this._roomsMapService.isShowConfirmDialog$.next(false);
    }
    confirmOrder() {
        this._roomsMapService.isConfirmOrder$.next(true);
        this.closeConfirmDialog();
        this.router.navigate(['/' + _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.CoreRoutes.COMPLETED]);
    }
    onOpenMobileRoomMap(room) {
        this.selectedRoomMap = room;
        this._roomsMapService.isShowMobileMapDialog$.next(true);
    }
    onCloseMobileRoomMap() {
        this.selectedRoomMap = null;
        this._roomsMapService.isShowMobileMapDialog$.next(false);
    }
    get roomPrice() {
        return this.utilityService.formatPriceToNum(this.userData.price);
    }
};
RoomsMapPageComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__.AnimationBuilder },
    { type: _core_services_rooms_map_service__WEBPACK_IMPORTED_MODULE_3__.RoomsMapService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _core_utilities_utility_service__WEBPACK_IMPORTED_MODULE_6__.UtilityService }
];
RoomsMapPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-rooms-map-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rooms_map_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rooms_map_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoomsMapPageComponent);



/***/ }),

/***/ 3549:
/*!****************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/steps-page.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepsPageComponent": function() { return /* binding */ StepsPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_steps_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./steps-page.component.html */ 4043);
/* harmony import */ var _steps_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steps-page.component.scss */ 809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_services_rooms_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/rooms-map.service */ 3350);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/data.service */ 5925);










let StepsPageComponent = class StepsPageComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_4__.AbstractAnimatedComponent {
    constructor(builder, router, _roomsMapService, _dataService) {
        super(builder);
        this.builder = builder;
        this.router = router;
        this._roomsMapService = _roomsMapService;
        this._dataService = _dataService;
        this.coreRoutes = _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.CoreRoutes;
        this.isShowConfirmDialog = false;
        this.isShowMobileMapDialog = false;
    }
    ngOnInit() {
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
                this.setRouterParams();
            }
        });
        this.setRouterParams();
        this.subscribes();
    }
    subscribes() {
        this._roomsMapService.isShowConfirmDialog$.subscribe(value => this.isShowConfirmDialog = value);
        this._roomsMapService.isShowMobileMapDialog$.subscribe(value => this.isShowMobileMapDialog = value);
    }
    setRouterParams() {
        let urls = this.router.url.split('/');
        let currentRoomStep = urls[urls.length - 1];
        this.roomStepsList = this._dataService.pagesNameList;
        this.currentRoomStepIndex = this.roomStepsList.indexOf(currentRoomStep);
        this.nextRoomStep = this.roomStepsList[this.currentRoomStepIndex + 1];
        this.prevRoomStep = this.roomStepsList[this.currentRoomStepIndex - 1];
    }
    openConfirmDialog() {
        this._roomsMapService.isShowConfirmDialog$.next(true);
    }
};
StepsPageComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__.AnimationBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _core_services_rooms_map_service__WEBPACK_IMPORTED_MODULE_3__.RoomsMapService },
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService }
];
StepsPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-steps-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_steps_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_steps_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepsPageComponent);



/***/ }),

/***/ 8065:
/*!*************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/view-page/view-page.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageComponent": function() { return /* binding */ ViewPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-page.component.html */ 5199);
/* harmony import */ var _view_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-page.component.scss */ 4152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/data.service */ 5925);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);








let ViewPageComponent = class ViewPageComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent {
    constructor(builder, _dataService) {
        super(builder);
        this.builder = builder;
        this._dataService = _dataService;
    }
    ngOnInit() {
        this.pageData = this._dataService.getRoomData(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.VIEW);
        this.pageStepIndex = this._dataService.getPageStepIndex(_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.VIEW);
        this.pagesNameListLength = this._dataService.pagesNameList.length - 1;
    }
};
ViewPageComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder },
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
ViewPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-view-step',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewPageComponent);



/***/ }),

/***/ 7833:
/*!************************************************************!*\
  !*** ./src/app/rooms/room-layout/room-layout.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomLayoutComponent": function() { return /* binding */ RoomLayoutComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_room_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./room-layout.component.html */ 4407);
/* harmony import */ var _room_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-layout.component.scss */ 1903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/abstract-animated/abstract-animated.component */ 5806);






let RoomLayoutComponent = class RoomLayoutComponent extends _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent {
    constructor(builder) {
        super(builder);
        this.builder = builder;
    }
    ngOnInit() { }
};
RoomLayoutComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder }
];
RoomLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-room-layout',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_room_layout_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_room_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoomLayoutComponent);



/***/ }),

/***/ 5801:
/*!***********************************************!*\
  !*** ./src/app/rooms/rooms-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsRoutingModule": function() { return /* binding */ RoomsRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/configs/routing-config */ 2831);
/* harmony import */ var _pages_steps_page_steps_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/steps-page/steps-page.component */ 3549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _room_layout_room_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-layout/room-layout.component */ 7833);
/* harmony import */ var _core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/guards/animation.guard */ 40);
/* harmony import */ var _pages_steps_page_floor_page_floor_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/steps-page/floor-page/floor-page.component */ 5842);
/* harmony import */ var _pages_steps_page_view_page_view_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/steps-page/view-page/view-page.component */ 8065);
/* harmony import */ var _pages_steps_page_bath_page_bath_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/steps-page/bath-page/bath-page.component */ 806);
/* harmony import */ var _pages_steps_page_dreams_location_page_dreams_location_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/steps-page/dreams-location-page/dreams-location-page.component */ 7515);
/* harmony import */ var _pages_steps_page_rooms_map_page_rooms_map_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/steps-page/rooms-map-page/rooms-map-page.component */ 3410);












const routes = [
    {
        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutes.ROOMS,
        component: _room_layout_room_layout_component__WEBPACK_IMPORTED_MODULE_2__.RoomLayoutComponent,
        canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard],
        children: [
            {
                path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.CoreRoutes.ROOM,
                component: _pages_steps_page_steps_page_component__WEBPACK_IMPORTED_MODULE_1__.StepsPageComponent,
                canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard],
                children: [
                    {
                        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.FLOOR,
                        component: _pages_steps_page_floor_page_floor_page_component__WEBPACK_IMPORTED_MODULE_4__.FloorPageComponent,
                        canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
                    },
                    {
                        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.VIEW,
                        component: _pages_steps_page_view_page_view_page_component__WEBPACK_IMPORTED_MODULE_5__.ViewPageComponent,
                        canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
                    },
                    {
                        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.BATHE,
                        component: _pages_steps_page_bath_page_bath_page_component__WEBPACK_IMPORTED_MODULE_6__.BathPageComponent,
                        canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
                    },
                    {
                        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.DREAMS_LOCATION,
                        component: _pages_steps_page_dreams_location_page_dreams_location_page_component__WEBPACK_IMPORTED_MODULE_7__.DreamsLocationPageComponent,
                        canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
                    },
                    {
                        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.ROOMS_MAP,
                        component: _pages_steps_page_rooms_map_page_rooms_map_page_component__WEBPACK_IMPORTED_MODULE_8__.RoomsMapPageComponent,
                        canDeactivate: [_core_guards_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
                    },
                ]
            }
        ]
    }
];
let RoomsRoutingModule = class RoomsRoutingModule {
};
RoomsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    })
], RoomsRoutingModule);



/***/ }),

/***/ 4545:
/*!***************************************!*\
  !*** ./src/app/rooms/rooms.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsModule": function() { return /* binding */ RoomsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _room_layout_room_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-layout/room-layout.component */ 7833);
/* harmony import */ var _pages_steps_page_steps_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/steps-page/steps-page.component */ 3549);
/* harmony import */ var _rooms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-routing.module */ 5801);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _pages_steps_page_floor_page_floor_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/steps-page/floor-page/floor-page.component */ 5842);
/* harmony import */ var _pages_steps_page_rooms_map_page_rooms_map_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/steps-page/rooms-map-page/rooms-map-page.component */ 3410);
/* harmony import */ var _pages_steps_page_dreams_location_page_dreams_location_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/steps-page/dreams-location-page/dreams-location-page.component */ 7515);
/* harmony import */ var _pages_steps_page_bath_page_bath_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/steps-page/bath-page/bath-page.component */ 806);
/* harmony import */ var _pages_steps_page_view_page_view_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/steps-page/view-page/view-page.component */ 8065);












let RoomsModule = class RoomsModule {
};
RoomsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _room_layout_room_layout_component__WEBPACK_IMPORTED_MODULE_0__.RoomLayoutComponent,
            _pages_steps_page_steps_page_component__WEBPACK_IMPORTED_MODULE_1__.StepsPageComponent,
            _pages_steps_page_floor_page_floor_page_component__WEBPACK_IMPORTED_MODULE_4__.FloorPageComponent,
            _pages_steps_page_view_page_view_page_component__WEBPACK_IMPORTED_MODULE_8__.ViewPageComponent,
            _pages_steps_page_bath_page_bath_page_component__WEBPACK_IMPORTED_MODULE_7__.BathPageComponent,
            _pages_steps_page_dreams_location_page_dreams_location_page_component__WEBPACK_IMPORTED_MODULE_6__.DreamsLocationPageComponent,
            _pages_steps_page_rooms_map_page_rooms_map_page_component__WEBPACK_IMPORTED_MODULE_5__.RoomsMapPageComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _rooms_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoomsRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ]
    })
], RoomsModule);



/***/ }),

/***/ 358:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rooms/pages/steps-page/bath-page/bath-page.component.html ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-category=\"bath\" class=\"optiion opt-3\" #animationTarget>\n    <div class=\"slide-container\">\n        <div class=\"slide-text-container question\">\n            <div>\n                <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageStepIndex }}</span> of {{ pagesNameListLength }}</p>\n                <h1 class=\"h1 ques-title\">{{ pageData.title }} <br/></h1>\n            </div>\n            <div class=\"question-container\">\n                <div class=\"single-ques-container\">\n                    <div class=\"single-ques bath\"\n                         onHoverShowDescription\n                         (click)=\"selectedBathType = 'bath'\"\n                         [ngClass]=\"{'active': selectedBathType === 'bath'}\"\n                    >\n                        <img src=\"/assets/common/images/bath.png\" alt=\"\" class=\"bath-img\"/>\n                    </div>\n                    <p class=\"single-chioce-text visible-item\">BATH</p>\n                </div>\n\n                <p class=\"or-text\">OR</p>\n\n                <div class=\"single-ques-container\">\n                    <div class=\"single-ques shower\"\n                         onHoverShowDescription\n                         (click)=\"selectedBathType = 'shower'\"\n                         [ngClass]=\"{'active': selectedBathType === 'shower'}\"\n                    >\n                        <img src=\"/assets/common/images/shower.png\" alt=\"\" class=\"bath-img\"/>\n                    </div>\n                    <p class=\"single-chioce-text visible-item\">\n                        SHOWER\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ 5773:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rooms/pages/steps-page/dreams-location-page/dreams-location-page.component.html ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-category=\"bed\" class=\"optiion opt-4\" #animationTarget>\n    <div class=\"slide-container\">\n        <div class=\"slide-text-container question\">\n            <div>\n              <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageStepIndex }}</span> of {{ pagesNameListLength }}</p>\n                <h1 class=\"h1 ques-title\">{{ pageData.title }} <br/></h1>\n            </div>\n\n          <div class=\"question-container\">\n            <ng-container *ngFor=\"let item of pageData.images; let index = index\">\n              <div class=\"single-ques-container\"\n                   [ngClass]=\"{'center-space': index === 1}\"\n                   (click)=\"selectedSweetDreamsLocation = item\"\n              >\n                <div onHoverShowDescription class=\"single-ques\" [ngClass]=\"{'active': selectedSweetDreamsLocation?.name === item.name}\">\n                  <img [src]=\"item.src\" alt=\"\" class=\"bath-img\"/>\n                </div>\n\n                <p class=\"single-chioce-text visible-item\">{{ item.name }}</p>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ 3384:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rooms/pages/steps-page/floor-page/floor-page.component.html ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-category=\"floor\" class=\"optiion opt-1 active\" #animationTarget>\n    <div class=\"slide-container flex-slide\">\n        <div class=\"slide-text-container\">\n            <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageStepIndex }}</span> of {{ pagesNameListLength }}</p>\n            <h1 class=\"h1 center-title\">{{ pageData.title }}</h1>\n            <p class=\"under-title-text\">Grab to choose how high/low do you wanna go<br/></p>\n            <p class=\"grab-text\">Grab to set distance</p>\n        </div>\n        <div class=\"question-container\">\n            <div class=\"single-ques-container\" (click)=\"selectedFloorType = 'low'\">\n                <div class=\"single-ques floor-low\" [ngClass]=\"{'active': selectedFloorType === 'low'}\">LOW</div>\n            </div>\n            <p class=\"or-text\" style=\"bottom: 0;\">OR</p>\n\n            <div class=\"single-ques-container\" (click)=\"selectedFloorType = 'high'\">\n                <div class=\"single-ques floor-high\" [ngClass]=\"{'active': selectedFloorType === 'high'}\">HIGH</div>\n            </div>\n        </div>\n        <img class=\"hotel-img\" [src]=\"pageData.logo.src\"/>\n    </div>\n</div>\n");

/***/ }),

/***/ 243:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rooms/pages/steps-page/rooms-map-page/rooms-map-page.component.html ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-category=\"room\" class=\"optiion opt-6 active\" #animationTarget>\n  <div class=\"slide-container choose-room\">\n    <div class=\"choose-room-container\">\n      <div class=\"map-container\">\n        <p class=\"paragraph-5\">Based on your preferences, we found these rooms for you<br></p>\n        <h2 class=\"h2\">NOW: ALL THAT'S LEFT TO DO IS TO CHOOSE<br></h2>\n        <img [src]=\"selectedRoom.map_logo.src\" sizes=\"100vw\" alt=\"\" class=\"map-img\">\n      </div>\n\n      <div class=\"rooms-list-container not-in-slide\">\n        <app-dropdown-field [items]=\"['LOW FLOOR', 'Clear']\"></app-dropdown-field>\n\n        <div class=\"rooms-list\">\n          <ng-container *ngFor=\"let room of pageData.rooms\">\n            <div data-src=\"https://uploads-ssl.pyro.com/5e04c6a80b1ac59990e9fd52/5e15a7ef3656790d3e1a6896_501-p-500.png\"\n                 class=\"single-room\"\n                 [ngClass]=\"{'active': selectedRoom?.number === room.number}\"\n                 (click)=\"selectedRoom = room\"\n            >\n              <div class=\"room-img-wrapper\">\n                <img [src]=\"room.map_logo.src\" alt=\"\" class=\"room-img\">\n              </div>\n              <div class=\"room-details\">\n                <ul class=\"prop-list w-list-unstyled\">\n                  <li class=\"prop-item\" *ngFor=\"let tag of room.tags\">{{ tag }}</li>\n                </ul>\n                <p class=\"prop-item-cont\">\n                  Room number <span class=\"the-item-text room_num\">{{ room.number }}</span>\n                </p>\n                <p class=\"prop-item-cont\">\n                  Floor <span class=\"the-item-text floor_num\">{{ room.floor }}</span>\n                </p>\n\n                <a href=\"javascript:void(0)\" class=\"view-map\" (click)=\"onOpenMobileRoomMap(room)\">VIEW&nbsp;MAP</a>\n\n                <div class=\"map-popup transitionee\" [ngClass]=\"{'transitione': selectedRoomMap?.number === room.number}\">\n                  <div class=\"map-img-wrapper\">\n                    <img [src]=\"room.map_mobile_logo.src\" alt=\"\" class=\"map-popup-img\">\n                  </div>\n                  <div class=\"close-map-popup\" (click)=\"onCloseMobileRoomMap()\">\n                    <img src=\"/assets/common/images/close.png\" alt=\"\" class=\"close-img\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n        <a href=\"javascript:void(0)\" class=\"button confirm-btn w-button\">NEXT</a></div>\n    </div>\n  </div>\n\n  <div class=\"confirm-popup visible-item\" [ngClass]=\"{'is-visible': isShowConfirmDialog}\">\n    <div class=\"confirm-container\">\n      <a href=\"javascript:void(0)\" class=\"close-confirm-popup w-inline-block\" (click)=\"closeConfirmDialog()\">\n        <img src=\"/assets/common/images/close.png\" alt=\"\"/>\n      </a>\n\n      <h4 class=\"confirm-title\">Wow, you have the perfect taste!<br/></h4>\n      <ul class=\"prop-list in-popup w-list-unstyled\">\n        <li class=\"prop-item\" *ngFor=\"let tag of selectedRoom.tags\">{{ tag }}</li>\n      </ul>\n      <p class=\"prop-item-cont in-popup floor\">\n        Floor <span class=\"the-item-text in-popup\">{{ selectedRoom.floor }}</span>\n      </p>\n      <p class=\"prop-item-cont in-popup room-number\">\n        Room number <span class=\"the-item-text in-popup\">{{ selectedRoom.number }}</span>\n      </p>\n      <p class=\"prop-item-cont in-popup price-per-night\">\n        Price per night\n        <span class=\"the-item-text in-popup\">\n          <span class=\"the-price price_per_night\">{{ userData.price }}</span>\n        </span>\n      </p>\n      <p class=\"prop-item-cont in-popup nights-anount\">Nights <span\n              class=\"the-item-text in-popup\">{{ userData.nights }}</span></p>\n      <div class=\"total-price\">\n        <h4 class=\"total-price-title\">Total price</h4>\n        <div class=\"the-price total_price\">{{ roomPrice * userData.nights }}</div>\n      </div>\n      <a (click)=\"confirmOrder()\" href=\"javascript:void(0)\" class=\"button finish-btn w-button\">CONFIRM</a>\n      <div class=\"popup-text-container\">\n        <p class=\"paragraph-4 in-popup\">*Charge upon arrival</p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 4043:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rooms/pages/steps-page/steps-page.component.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"select-options-section\" #animationTarget>\n  <a routerLink=\"/\" class=\"logo-wrapper white-bg w-inline-block\"\n     [ngClass]=\"{'logo-wrapper--blocked': isShowMobileMapDialog || isShowConfirmDialog}\">\n    <img src=\"/assets/common/images/logo.svg\" alt=\"\" class=\"image-2\"/>\n  </a>\n\n  <div class=\"options-container\">\n    <router-outlet></router-outlet>\n\n    <div class=\"button-container\" [ngClass]=\"{'is-events-none': prevRoomStep}\">\n      <div class=\"visible-item back-btn\" [ngClass]=\"{'is-visible': prevRoomStep && !isShowConfirmDialog}\">\n        <a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + prevRoomStep]\" class=\"button w-button white-btn\">\n          <span>BACK</span>\n        </a>\n      </div>\n      <div class=\"next-skip-btn\">\n\n        <div class=\"visible-item\" [ngClass]=\"{'is-visible': nextRoomStep}\">\n          <a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + nextRoomStep]\"\n             class=\"button white-btn btn-white-small skip-btn w-button\">\n            <span>skip</span>\n          </a>\n        </div>\n        <a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + nextRoomStep]\" class=\"button next-btn w-button\"\n           *ngIf=\"nextRoomStep\">\n          <span>next</span>\n        </a>\n\n        <a href=\"javascript:void(0)\"\n           class=\"button next-btn w-button\"\n           *ngIf=\"!nextRoomStep && !isShowConfirmDialog\"\n           (click)=\"openConfirmDialog()\"\n           [ngClass]=\"{'next-btn--blocked': isShowMobileMapDialog}\"\n        >\n          <span>next</span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 5199:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rooms/pages/steps-page/view-page/view-page.component.html ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-category=\"view\" class=\"optiion opt-2\" #animationTarget>\n  <div class=\"slide-container part-slide\">\n    <div class=\"slide-text-container question ports\">\n      <div>\n        <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageStepIndex }}</span> of {{ pagesNameListLength }}</p>\n        <h1 class=\"h1 ques-title ports-title\">{{ pageData.title }}</h1>\n      </div>\n      <div class=\"ports-container\">\n\n        <ng-container *ngFor=\"let view of pageData.images\">\n          <div class=\"single-port port-view\"\n               [ngClass]=\"{\n                'active': selectRoomView === view.name,\n                'single-port--deselected': selectRoomView && selectRoomView !== view.name\n                }\"\n               (click)=\"selectRoomView = view.name\">\n\n            <div class=\"choosen-img-container\">\n              <img src=\"/assets/common/images/noun_v-icon_1668947.svg\" alt=\"\" class=\"choosen-img\"/>\n              <p class=\"view-text\">{{ view.name }}</p>\n            </div>\n            <img [src]=\"view.src\" alt=\"\" class=\"port-img\"/>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 4407:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rooms/room-layout/room-layout.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main\" #animationTarget>\n  <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ 9558:
/*!***************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/bath-page/bath-page.component.scss ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXRoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3810:
/*!*************************************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/dreams-location-page/dreams-location-page.component.scss ***!
  \*************************************************************************************************/
/***/ (function(module) {

module.exports = ".single-ques-container {\n  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;\n}\n.single-ques-container:hover .single-chioce-text {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyZWFtcy1sb2NhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUVBQUE7QUFBRjtBQUlJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUVBQUE7QUFGTiIsImZpbGUiOiJkcmVhbXMtbG9jYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtcXVlcy1jb250YWluZXIge1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IC41cyBlYXNlLWluLW91dDtcblxuICAmOmhvdmVyIHtcblxuICAgIC5zaW5nbGUtY2hpb2NlLXRleHQge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 4881:
/*!*****************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/floor-page/floor-page.component.scss ***!
  \*****************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbG9vci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 937:
/*!*************************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/rooms-map-page/rooms-map-page.component.scss ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy1tYXAtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 809:
/*!******************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/steps-page.component.scss ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 4152:
/*!***************************************************************************!*\
  !*** ./src/app/rooms/pages/steps-page/view-page/view-page.component.scss ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1903:
/*!**************************************************************!*\
  !*** ./src/app/rooms/room-layout/room-layout.component.scss ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_rooms_rooms_module_ts-es2015.js.map