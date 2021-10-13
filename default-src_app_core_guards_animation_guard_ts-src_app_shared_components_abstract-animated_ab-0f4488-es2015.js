"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_core_guards_animation_guard_ts-src_app_shared_components_abstract-animated_ab-0f4488"],{

/***/ 5979:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": function() { return /* binding */ Scheduler; }
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();


/***/ }),

/***/ 2702:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": function() { return /* binding */ timer; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 5160);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 2606);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 2867);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 6770);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}


/***/ }),

/***/ 7202:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapTo": function() { return /* binding */ mapTo; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 1003);

function mapTo(value) {
    return (source) => source.lift(new MapToOperator(value));
}
class MapToOperator {
    constructor(value) {
        this.value = value;
    }
    call(subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    }
}
class MapToSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, value) {
        super(destination);
        this.value = value;
    }
    _next(x) {
        this.destination.next(this.value);
    }
}


/***/ }),

/***/ 473:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; }
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 4283);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 3115:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": function() { return /* binding */ AsyncAction; }
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 473);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}


/***/ }),

/***/ 6367:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": function() { return /* binding */ AsyncScheduler; }
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 5979);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 2606:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": function() { return /* binding */ asyncScheduler; },
/* harmony export */   "async": function() { return /* binding */ async; }
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3115);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 6367);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;


/***/ }),

/***/ 2867:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": function() { return /* binding */ isNumeric; }
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 9861);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}


/***/ }),

/***/ 9204:
/*!*********************************************!*\
  !*** ./src/app/core/configs/data.config.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGES_DATA": function() { return /* binding */ PAGES_DATA; }
/* harmony export */ });
const PAGES_DATA = {
    user: {
        user_name: 'Vitaliy',
        check_in_date: 'SEP 12, 2021',
        check_out_date: 'SEP 24, 2021',
        price: '$12',
        order_number: 11111222122,
        link_expiration_time: 12,
        nights: 12,
        introduction_image: {
            src: '/assets/common/images/homepage-img.jpg'
        },
        completed_image: {
            src: '/assets/common/images/Image-11.svg'
        }
    },
    hotel: {
        name: 'ATLAS HOTELS',
        email: 'pre-arrival@atlashotels.co.il',
        logo: {
            src: '/assets/common/images/Image-53.svg'
        },
        pages_logo: {
            src: '/assets/common/images/logo.svg'
        },
    },
    pages: [
        {
            name: 'floor',
            title: 'HIGH OR LOW FLOOR?',
            logo: {
                src: '/assets/common/images/hotel_2.svg'
            }
        },
        {
            name: 'view',
            title: 'PORT, CITY OR BEACH VIEW?',
            images: [
                {
                    name: 'PORT',
                    src: '/assets/common/images/voyyo.jpg',
                },
                {
                    name: 'BEACH',
                    src: '/assets/common/images/voyyo3.jpg',
                },
                {
                    name: 'CITY',
                    src: '/assets/common/images/voyyo4.jpg',
                }
            ]
        },
        {
            name: 'bathe',
            title: 'HOW DO YOU PREFER TO BATHE?',
            images: [
                {
                    name: 'BATH',
                    src: '/assets/common/images/bath.png',
                },
                {
                    name: 'SHOWER',
                    src: '/assets/common/images/shower.png',
                }
            ]
        },
        {
            name: 'dreams-location',
            title: 'SWEET DREAMS LOCATION?',
            images: [
                {
                    name: 'DOUBLE BED',
                    src: '/assets/common/images/13.svg',
                },
                {
                    name: 'TWIN BEDS',
                    src: '/assets/common/images/12.svg',
                },
                {
                    name: 'TWO SINGLE BED',
                    src: '/assets/common/images/two-beds.svg',
                },
            ]
        },
        {
            name: 'rooms-map',
            rooms: [
                {
                    number: 104,
                    floor: 1,
                    tags: ['HIGH FLOOR', 'SHOWER', 'TWIN BEDS', 'TWO SINGLE BED', 'BEACH VIEW'],
                    map_logo: {
                        src: '/assets/common/rooms_images/desktop/701@2x.png'
                    },
                    map_mobile_logo: {
                        src: '/assets/common/rooms_images/mobile/104@2x.png'
                    },
                },
                {
                    number: 204,
                    floor: 3,
                    tags: ['HIGH FLOOR', 'SHOWER', 'TWO SINGLE BED', 'BEACH VIEW'],
                    map_logo: {
                        src: '/assets/common/rooms_images/desktop/601@2x.png'
                    },
                    map_mobile_logo: {
                        src: '/assets/common/rooms_images/mobile/104@2x.png'
                    },
                },
                {
                    number: 102,
                    floor: 2,
                    tags: ['HIGH FLOOR', 'SHOWER', 'TWO SINGLE BED', 'BEACH VIEW', 'DOUBLE BED'],
                    map_logo: {
                        src: '/assets/common/rooms_images/desktop/605@2x.png'
                    },
                    map_mobile_logo: {
                        src: '/assets/common/rooms_images/mobile/104@2x.png'
                    },
                }
            ]
        }
    ]
};


/***/ }),

/***/ 40:
/*!************************************************!*\
  !*** ./src/app/core/guards/animation.guard.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationGuard": function() { return /* binding */ AnimationGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


let AnimationGuard = class AnimationGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
};
AnimationGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AnimationGuard);



/***/ }),

/***/ 5925:
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_configs_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/configs/data.config */ 9204);



let DataService = class DataService {
    constructor() {
        this._pagesData = _core_configs_data_config__WEBPACK_IMPORTED_MODULE_0__.PAGES_DATA;
    }
    get pagesData() {
        return this._pagesData;
    }
    get pagesNameList() {
        return this._pagesData.pages.map(page => page.name);
    }
    getPageStepIndex(pageName) {
        return this.pagesNameList.indexOf(pageName) + 1;
    }
    getRoomData(pageName) {
        return this._pagesData.pages.find(page => page.name === pageName);
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 5806:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/abstract-animated/abstract-animated.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractAnimatedComponent": function() { return /* binding */ AbstractAnimatedComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2702);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7202);





let AbstractAnimatedComponent = class AbstractAnimatedComponent {
    constructor(_builder) {
        this._builder = _builder;
        this.ANIMATION_TIME = 390;
    }
    ngOnChanges() {
        this.createdAnimation();
    }
    ngOnInit() {
        this.createdAnimation();
    }
    ngAfterViewInit() {
        this.createdAnimation();
    }
    createdAnimation() {
        this.animation = this._builder.build(this.slideIn(this.ANIMATION_TIME));
        this.player = this.animation.create(this.el.nativeElement, {});
        this.player.play();
    }
    canDeactivate() {
        this.animation = this._builder.build(this.slideOut(this.ANIMATION_TIME));
        this.player = this.animation.create(this.el.nativeElement, {});
        this.player.play();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(this.ANIMATION_TIME).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mapTo)(true)).toPromise();
    }
    slideOut(time) {
        return [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '1', visibility: 'visible' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(time, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '0', visibility: 'hidden' })),
        ];
    }
    slideIn(time) {
        return [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '0', visibility: 'hidden' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(time, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '1', visibility: 'visible' })),
        ];
    }
};
AbstractAnimatedComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__.AnimationBuilder }
];
AbstractAnimatedComponent.propDecorators = {
    el: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['animationTarget', { static: false },] }]
};
AbstractAnimatedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], AbstractAnimatedComponent);



/***/ }),

/***/ 7115:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/dropdown-field/dropdown-field.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownFieldComponent": function() { return /* binding */ DropdownFieldComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_field_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dropdown-field.component.html */ 7313);
/* harmony import */ var _dropdown_field_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-field.component.scss */ 2376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let DropdownFieldComponent = class DropdownFieldComponent {
    constructor() {
        this.isShowDropDown = false;
        this.dropdownItemHeight = 26;
        this.bottomSpace = 10;
        this.topSpace = 15;
        this.bottomPadding = 7;
    }
    ngOnInit() { }
    calculateDropdownHeight() {
        if (!this.isShowDropDown) {
            return 0;
        }
        return this.items.length * (this.dropdownItemHeight + this.bottomSpace) + this.topSpace + this.bottomPadding;
    }
};
DropdownFieldComponent.ctorParameters = () => [];
DropdownFieldComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
DropdownFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dropdown-field',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_field_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dropdown_field_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DropdownFieldComponent);



/***/ }),

/***/ 4171:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/images-pre-render/images-pre-render.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesPreRenderComponent": function() { return /* binding */ ImagesPreRenderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_images_pre_render_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./images-pre-render.component.html */ 2870);
/* harmony import */ var _images_pre_render_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images-pre-render.component.scss */ 2498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/data.service */ 5925);





let ImagesPreRenderComponent = class ImagesPreRenderComponent {
    constructor(_dataService) {
        this._dataService = _dataService;
        this.regExp = /src":("[^\s.]+.[\w\d]+)/gm; // get all src from json or obj
        this.imagesListToRender = [];
    }
    ngOnInit() {
        this.pagesData = this._dataService.pagesData;
        this.setImagesListToRender();
    }
    setImagesListToRender() {
        let pagesDataJson = JSON.stringify(this.pagesData);
        let imagesList = pagesDataJson.match(this.regExp);
        this.imagesListToRender = imagesList.map(image => {
            let symbols = image.split('"');
            return symbols[symbols.length - 1];
        });
    }
};
ImagesPreRenderComponent.ctorParameters = () => [
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ImagesPreRenderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-images-pre-render',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_images_pre_render_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_images_pre_render_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImagesPreRenderComponent);



/***/ }),

/***/ 8168:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": function() { return /* binding */ LogoComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./logo.component.html */ 4303);
/* harmony import */ var _logo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.component.scss */ 2091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/data.service */ 5925);





let LogoComponent = class LogoComponent {
    constructor(_dataService) {
        this._dataService = _dataService;
        this.isHideLogoName = false;
    }
    ngOnInit() {
        this.hotelData = this._dataService.pagesData.hotel;
    }
};
LogoComponent.ctorParameters = () => [
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
LogoComponent.propDecorators = {
    isHideLogoName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
LogoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-logo',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logo_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_logo_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogoComponent);



/***/ }),

/***/ 4728:
/*!**************************************************************************!*\
  !*** ./src/app/shared/directives/on-hover-show-description.directive.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnHoverShowDescriptionDirective": function() { return /* binding */ OnHoverShowDescriptionDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


let OnHoverShowDescriptionDirective = class OnHoverShowDescriptionDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.nodeTarget = this.elementRef.nativeElement.parentNode.querySelector('.visible-item');
    }
    mouseover() {
        if (this.nodeTarget) {
            this.renderer.addClass(this.nodeTarget, 'is-visible');
        }
    }
    mouseleave() {
        if (this.nodeTarget) {
            this.renderer.removeClass(this.nodeTarget, 'is-visible');
        }
    }
};
OnHoverShowDescriptionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
OnHoverShowDescriptionDirective.propDecorators = {
    mouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseenter',] }],
    mouseleave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseleave',] }]
};
OnHoverShowDescriptionDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[onHoverShowDescription]'
    })
], OnHoverShowDescriptionDirective);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _directives_on_hover_show_description_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/on-hover-show-description.directive */ 4728);
/* harmony import */ var _components_dropdown_field_dropdown_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dropdown-field/dropdown-field.component */ 7115);
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/logo/logo.component */ 8168);
/* harmony import */ var _components_images_pre_render_images_pre_render_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/images-pre-render/images-pre-render.component */ 4171);







const COMPONENTS = [
    _directives_on_hover_show_description_directive__WEBPACK_IMPORTED_MODULE_0__.OnHoverShowDescriptionDirective,
    _components_dropdown_field_dropdown_field_component__WEBPACK_IMPORTED_MODULE_1__.DropdownFieldComponent,
    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent,
    _components_images_pre_render_images_pre_render_component__WEBPACK_IMPORTED_MODULE_3__.ImagesPreRenderComponent
];
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            ...COMPONENTS,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
        ],
        exports: [
            ...COMPONENTS
        ]
    })
], SharedModule);



/***/ }),

/***/ 7313:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/dropdown-field/dropdown-field.component.html ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sort-by-must-have\">\n  <div class=\"dropdown\">\n\n    <div class=\"dropdown-title\" (click)=\"isShowDropDown = !isShowDropDown\">\n      <p class=\"dropdown-title-text\">sort by must have</p>\n      <img src=\"/assets/common/images/noun_Arrow_2601665.svg\" alt=\"\" class=\"drop-arrow-img\" [ngClass]=\"{'drop-arrow-img--active': isShowDropDown}\">\n    </div>\n\n    <div class=\"dropdown-content\" [style.height.px]=\"calculateDropdownHeight()\" [ngClass]=\"{'dropdown-content--active': isShowDropDown}\">\n      <ul class=\"must-have-list w-list-unstyled\">\n        <li class=\"must-have-item\" *ngFor=\"let item of items\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 2870:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/images-pre-render/images-pre-render.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"imagesListToRender.length\">\n  <ng-container *ngFor=\"let image of imagesListToRender\">\n    <img [src]=\"image\" alt=\"Image to pre render\">\n  </ng-container>\n</ng-container>\n");

/***/ }),

/***/ 4303:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/logo/logo.component.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/\" class=\"logo-wrapper in-hero w-inline-block\">\n  <img [src]=\"hotelData.logo.src\" alt=\"\" class=\"logo-black-mb\"/>\n  <p class=\"logo-text hide\" *ngIf=\"!isHideLogoName\">{{ hotelData.name }}</p>\n</a>\n");

/***/ }),

/***/ 2376:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/dropdown-field/dropdown-field.component.scss ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = ":host nav {\n  background: #d9d9d9;\n  margin: 40px auto;\n}\n:host span {\n  background: #2d2f31;\n  color: white;\n  font-size: 1.2em;\n  font-feature-settings: \"smcp\";\n  font-variant: small-caps;\n  cursor: pointer;\n  display: block;\n}\n:host span::after {\n  float: right;\n  right: 10%;\n}\n:host .slide {\n  width: 200px;\n  height: 0px;\n  overflow: hidden;\n  transition: height 0.8s ease;\n  position: absolute;\n  background: silver;\n  padding-left: 0;\n}\n:host .slide li {\n  list-style: none;\n  height: 30px;\n}\n:host .slide__link {\n  text-decoration: none;\n}\n:host #touch {\n  position: relative;\n  display: none;\n}\n:host #touch:checked + .slide {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUsbUJBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsd0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQUpKO0FBT0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxKO0FBT0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFMTjtBQVFJO0VBQ0UscUJBQUE7QUFOTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBVEo7QUFZRTtFQUNFLGFBQUE7QUFWSiIsImZpbGUiOiJkcm9wZG93bi1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICBuYXYge1xuICAgIC8vd2lkdGggOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICAgIG1hcmdpbiA6IDQwcHggYXV0bztcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGJhY2tncm91bmQgOiAjMmQyZjMxO1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgZm9udC1zaXplIDogMS4yZW07XG4gICAgZm9udC12YXJpYW50IDogc21hbGwtY2FwcztcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgc3Bhbjo6YWZ0ZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMTAlO1xuICB9XG5cbiAgLnNsaWRlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC44cyBlYXNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAmX19saW5rIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuXG4gICN0b3VjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjdG91Y2g6Y2hlY2tlZCArIC5zbGlkZSB7XG4gICAgaGVpZ2h0OiAxNTBweDtcblxuICAgIC8vLnNsaWRlX19saW5rIHtcbiAgICAvLyAgaGVpZ2h0OiAyMHB4O1xuICAgIC8vfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 2498:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/images-pre-render/images-pre-render.component.scss ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = "img {\n  display: none;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy1wcmUtcmVuZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiaW1hZ2VzLXByZS1yZW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */";

/***/ }),

/***/ 2091:
/*!************************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.scss ***!
  \************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_guards_animation_guard_ts-src_app_shared_components_abstract-animated_ab-0f4488-es2015.js.map