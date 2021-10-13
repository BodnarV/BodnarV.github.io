(function () {
  "use strict";

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_core_guards_animation_guard_ts-src_app_shared_components_abstract-animated_ab-0f4488"], {
    /***/
    5979: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      };
      /***/

    },

    /***/
    2702: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "timer": function timer() {
          return (
            /* binding */
            _timer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      5160);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduler/async */
      2606);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isNumeric */
      2867);
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isScheduler */
      6770);

      function _timer() {
        var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var periodOrScheduler = arguments.length > 1 ? arguments[1] : undefined;
        var scheduler = arguments.length > 2 ? arguments[2] : undefined;
        var period = -1;

        if ((0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
          period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
        } else if ((0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
          scheduler = periodOrScheduler;
        }

        if (!(0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
          var due = (0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
          return scheduler.schedule(dispatch, due, {
            index: 0,
            period: period,
            subscriber: subscriber
          });
        });
      }

      function dispatch(state) {
        var index = state.index,
            period = state.period,
            subscriber = state.subscriber;
        subscriber.next(index);

        if (subscriber.closed) {
          return;
        } else if (period === -1) {
          return subscriber.complete();
        }

        state.index = index + 1;
        this.schedule(state, period);
      }
      /***/

    },

    /***/
    7202: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "mapTo": function mapTo() {
          return (
            /* binding */
            _mapTo
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      1003);

      function _mapTo(value) {
        return function (source) {
          return source.lift(new MapToOperator(value));
        };
      }

      var MapToOperator = /*#__PURE__*/function () {
        function MapToOperator(value) {
          _classCallCheck(this, MapToOperator);

          this.value = value;
        }

        _createClass(MapToOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new MapToSubscriber(subscriber, this.value));
          }
        }]);

        return MapToOperator;
      }();

      var MapToSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(MapToSubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(MapToSubscriber);

        function MapToSubscriber(destination, value) {
          var _this;

          _classCallCheck(this, MapToSubscriber);

          _this = _super.call(this, destination);
          _this.value = value;
          return _this;
        }

        _createClass(MapToSubscriber, [{
          key: "_next",
          value: function _next(x) {
            this.destination.next(this.value);
          }
        }]);

        return MapToSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber);
      /***/

    },

    /***/
    473: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      4283);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super2 = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super2.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription);
      /***/

    },

    /***/
    3115: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      473);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super3 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this2;

          _classCallCheck(this, _AsyncAction);

          _this2 = _super3.call(this, scheduler, work);
          _this2.scheduler = scheduler;
          _this2.work = work;
          _this2.pending = false;
          return _this2;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
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
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action);
      /***/

    },

    /***/
    6367: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      5979);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super4 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this3;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this3 = _super4.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this3)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this3.actions = [];
          _this3.active = false;
          _this3.scheduled = undefined;
          return _this3;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
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
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler);
      /***/

    },

    /***/
    2606: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asyncScheduler": function asyncScheduler() {
          return (
            /* binding */
            _asyncScheduler
          );
        },

        /* harmony export */
        "async": function async() {
          return (
            /* binding */
            _async
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      3115);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      6367);

      var _asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);

      var _async = _asyncScheduler;
      /***/
    },

    /***/
    2867: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isNumeric": function isNumeric() {
          return (
            /* binding */
            _isNumeric
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      9861);

      function _isNumeric(val) {
        return !(0, _isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
      }
      /***/

    },

    /***/
    9204: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PAGES_DATA": function PAGES_DATA() {
          return (
            /* binding */
            _PAGES_DATA
          );
        }
        /* harmony export */

      });

      var _PAGES_DATA = {
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
          }
        },
        pages: [{
          name: 'floor',
          title: 'HIGH OR LOW FLOOR?',
          logo: {
            src: '/assets/common/images/hotel_2.svg'
          }
        }, {
          name: 'view',
          title: 'PORT, CITY OR BEACH VIEW?',
          images: [{
            name: 'PORT',
            src: '/assets/common/images/voyyo.jpg'
          }, {
            name: 'BEACH',
            src: '/assets/common/images/voyyo3.jpg'
          }, {
            name: 'CITY',
            src: '/assets/common/images/voyyo4.jpg'
          }]
        }, {
          name: 'bathe',
          title: 'HOW DO YOU PREFER TO BATHE?',
          images: [{
            name: 'BATH',
            src: '/assets/common/images/bath.png'
          }, {
            name: 'SHOWER',
            src: '/assets/common/images/shower.png'
          }]
        }, {
          name: 'dreams-location',
          title: 'SWEET DREAMS LOCATION?',
          images: [{
            name: 'DOUBLE BED',
            src: '/assets/common/images/13.svg'
          }, {
            name: 'TWIN BEDS',
            src: '/assets/common/images/12.svg'
          }, {
            name: 'TWO SINGLE BED',
            src: '/assets/common/images/two-beds.svg'
          }]
        }, {
          name: 'rooms-map',
          rooms: [{
            number: 104,
            floor: 1,
            tags: ['HIGH FLOOR', 'SHOWER', 'TWIN BEDS', 'TWO SINGLE BED', 'BEACH VIEW'],
            map_logo: {
              src: '/assets/common/rooms_images/desktop/701@2x.png'
            },
            map_mobile_logo: {
              src: '/assets/common/rooms_images/mobile/104@2x.png'
            }
          }, {
            number: 204,
            floor: 3,
            tags: ['HIGH FLOOR', 'SHOWER', 'TWO SINGLE BED', 'BEACH VIEW'],
            map_logo: {
              src: '/assets/common/rooms_images/desktop/601@2x.png'
            },
            map_mobile_logo: {
              src: '/assets/common/rooms_images/mobile/104@2x.png'
            }
          }, {
            number: 102,
            floor: 2,
            tags: ['HIGH FLOOR', 'SHOWER', 'TWO SINGLE BED', 'BEACH VIEW', 'DOUBLE BED'],
            map_logo: {
              src: '/assets/common/rooms_images/desktop/605@2x.png'
            },
            map_mobile_logo: {
              src: '/assets/common/rooms_images/mobile/104@2x.png'
            }
          }]
        }]
      };
      /***/
    },

    /***/
    40: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnimationGuard": function AnimationGuard() {
          return (
            /* binding */
            _AnimationGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AnimationGuard = /*#__PURE__*/function () {
        function AnimationGuard() {
          _classCallCheck(this, AnimationGuard);
        }

        _createClass(AnimationGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component) {
            return component.canDeactivate ? component.canDeactivate() : true;
          }
        }]);

        return AnimationGuard;
      }();

      _AnimationGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _AnimationGuard);
      /***/
    },

    /***/
    5925: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_configs_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/configs/data.config */
      9204);

      var _DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);

          this._pagesData = _core_configs_data_config__WEBPACK_IMPORTED_MODULE_0__.PAGES_DATA;
        }

        _createClass(DataService, [{
          key: "pagesData",
          get: function get() {
            return this._pagesData;
          }
        }, {
          key: "pagesNameList",
          get: function get() {
            return this._pagesData.pages.map(function (page) {
              return page.name;
            });
          }
        }, {
          key: "getPageStepIndex",
          value: function getPageStepIndex(pageName) {
            return this.pagesNameList.indexOf(pageName) + 1;
          }
        }, {
          key: "getRoomData",
          value: function getRoomData(pageName) {
            return this._pagesData.pages.find(function (page) {
              return page.name === pageName;
            });
          }
        }]);

        return DataService;
      }();

      _DataService.ctorParameters = function () {
        return [];
      };

      _DataService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _DataService);
      /***/
    },

    /***/
    5806: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AbstractAnimatedComponent": function AbstractAnimatedComponent() {
          return (
            /* binding */
            _AbstractAnimatedComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      7175);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      2702);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      7202);

      var _AbstractAnimatedComponent = /*#__PURE__*/function () {
        function AbstractAnimatedComponent(_builder) {
          _classCallCheck(this, AbstractAnimatedComponent);

          this._builder = _builder;
          this.ANIMATION_TIME = 390;
        }

        _createClass(AbstractAnimatedComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.createdAnimation();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createdAnimation();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.createdAnimation();
          }
        }, {
          key: "createdAnimation",
          value: function createdAnimation() {
            this.animation = this._builder.build(this.slideIn(this.ANIMATION_TIME));
            this.player = this.animation.create(this.el.nativeElement, {});
            this.player.play();
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            this.animation = this._builder.build(this.slideOut(this.ANIMATION_TIME));
            this.player = this.animation.create(this.el.nativeElement, {});
            this.player.play();
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(this.ANIMATION_TIME).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mapTo)(true)).toPromise();
          }
        }, {
          key: "slideOut",
          value: function slideOut(time) {
            return [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              opacity: '1',
              visibility: 'visible'
            }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(time, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              opacity: '0',
              visibility: 'hidden'
            }))];
          }
        }, {
          key: "slideIn",
          value: function slideIn(time) {
            return [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              opacity: '0',
              visibility: 'hidden'
            }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(time, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              opacity: '1',
              visibility: 'visible'
            }))];
          }
        }]);

        return AbstractAnimatedComponent;
      }();

      _AbstractAnimatedComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__.AnimationBuilder
        }];
      };

      _AbstractAnimatedComponent.propDecorators = {
        el: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ['animationTarget', {
            "static": false
          }]
        }]
      };
      _AbstractAnimatedComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _AbstractAnimatedComponent);
      /***/
    },

    /***/
    7115: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DropdownFieldComponent": function DropdownFieldComponent() {
          return (
            /* binding */
            _DropdownFieldComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_field_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dropdown-field.component.html */
      7313);
      /* harmony import */


      var _dropdown_field_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dropdown-field.component.scss */
      2376);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DropdownFieldComponent = /*#__PURE__*/function () {
        function DropdownFieldComponent() {
          _classCallCheck(this, DropdownFieldComponent);

          this.isShowDropDown = false;
          this.dropdownItemHeight = 26;
          this.bottomSpace = 10;
          this.topSpace = 15;
          this.bottomPadding = 7;
        }

        _createClass(DropdownFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "calculateDropdownHeight",
          value: function calculateDropdownHeight() {
            if (!this.isShowDropDown) {
              return 0;
            }

            return this.items.length * (this.dropdownItemHeight + this.bottomSpace) + this.topSpace + this.bottomPadding;
          }
        }]);

        return DropdownFieldComponent;
      }();

      _DropdownFieldComponent.ctorParameters = function () {
        return [];
      };

      _DropdownFieldComponent.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _DropdownFieldComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dropdown-field',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_field_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dropdown_field_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _DropdownFieldComponent);
      /***/
    },

    /***/
    4171: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImagesPreRenderComponent": function ImagesPreRenderComponent() {
          return (
            /* binding */
            _ImagesPreRenderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_images_pre_render_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./images-pre-render.component.html */
      2870);
      /* harmony import */


      var _images_pre_render_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./images-pre-render.component.scss */
      2498);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/data.service */
      5925);

      var _ImagesPreRenderComponent = /*#__PURE__*/function () {
        function ImagesPreRenderComponent(_dataService) {
          _classCallCheck(this, ImagesPreRenderComponent);

          this._dataService = _dataService;
          this.regExp = /src":("[^\s.]+.[\w\d]+)/gm; // get all src from json or obj

          this.imagesListToRender = [];
        }

        _createClass(ImagesPreRenderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pagesData = this._dataService.pagesData;
            this.setImagesListToRender();
          }
        }, {
          key: "setImagesListToRender",
          value: function setImagesListToRender() {
            var pagesDataJson = JSON.stringify(this.pagesData);
            var imagesList = pagesDataJson.match(this.regExp);
            this.imagesListToRender = imagesList.map(function (image) {
              var symbols = image.split('"');
              return symbols[symbols.length - 1];
            });
          }
        }]);

        return ImagesPreRenderComponent;
      }();

      _ImagesPreRenderComponent.ctorParameters = function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _ImagesPreRenderComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-images-pre-render',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_images_pre_render_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_images_pre_render_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ImagesPreRenderComponent);
      /***/
    },

    /***/
    8168: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LogoComponent": function LogoComponent() {
          return (
            /* binding */
            _LogoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./logo.component.html */
      4303);
      /* harmony import */


      var _logo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./logo.component.scss */
      2091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/data.service */
      5925);

      var _LogoComponent = /*#__PURE__*/function () {
        function LogoComponent(_dataService) {
          _classCallCheck(this, LogoComponent);

          this._dataService = _dataService;
          this.isHideLogoName = false;
        }

        _createClass(LogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hotelData = this._dataService.pagesData.hotel;
          }
        }]);

        return LogoComponent;
      }();

      _LogoComponent.ctorParameters = function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _LogoComponent.propDecorators = {
        isHideLogoName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _LogoComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-logo',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_logo_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _LogoComponent);
      /***/
    },

    /***/
    4728: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnHoverShowDescriptionDirective": function OnHoverShowDescriptionDirective() {
          return (
            /* binding */
            _OnHoverShowDescriptionDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _OnHoverShowDescriptionDirective = /*#__PURE__*/function () {
        function OnHoverShowDescriptionDirective(elementRef, renderer) {
          _classCallCheck(this, OnHoverShowDescriptionDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
        }

        _createClass(OnHoverShowDescriptionDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nodeTarget = this.elementRef.nativeElement.parentNode.querySelector('.visible-item');
          }
        }, {
          key: "mouseover",
          value: function mouseover() {
            if (this.nodeTarget) {
              this.renderer.addClass(this.nodeTarget, 'is-visible');
            }
          }
        }, {
          key: "mouseleave",
          value: function mouseleave() {
            if (this.nodeTarget) {
              this.renderer.removeClass(this.nodeTarget, 'is-visible');
            }
          }
        }]);

        return OnHoverShowDescriptionDirective;
      }();

      _OnHoverShowDescriptionDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }];
      };

      _OnHoverShowDescriptionDirective.propDecorators = {
        mouseover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseenter']
        }],
        mouseleave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseleave']
        }]
      };
      _OnHoverShowDescriptionDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[onHoverShowDescription]'
      })], _OnHoverShowDescriptionDirective);
      /***/
    },

    /***/
    4466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _directives_on_hover_show_description_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./directives/on-hover-show-description.directive */
      4728);
      /* harmony import */


      var _components_dropdown_field_dropdown_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/dropdown-field/dropdown-field.component */
      7115);
      /* harmony import */


      var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/logo/logo.component */
      8168);
      /* harmony import */


      var _components_images_pre_render_images_pre_render_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/images-pre-render/images-pre-render.component */
      4171);

      var COMPONENTS = [_directives_on_hover_show_description_directive__WEBPACK_IMPORTED_MODULE_0__.OnHoverShowDescriptionDirective, _components_dropdown_field_dropdown_field_component__WEBPACK_IMPORTED_MODULE_1__.DropdownFieldComponent, _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, _components_images_pre_render_images_pre_render_component__WEBPACK_IMPORTED_MODULE_3__.ImagesPreRenderComponent];

      var _SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      _SharedModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [].concat(COMPONENTS),
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
        exports: [].concat(COMPONENTS)
      })], _SharedModule);
      /***/
    },

    /***/
    7313: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"sort-by-must-have\">\n  <div class=\"dropdown\">\n\n    <div class=\"dropdown-title\" (click)=\"isShowDropDown = !isShowDropDown\">\n      <p class=\"dropdown-title-text\">sort by must have</p>\n      <img src=\"/assets/common/images/noun_Arrow_2601665.svg\" alt=\"\" class=\"drop-arrow-img\" [ngClass]=\"{'drop-arrow-img--active': isShowDropDown}\">\n    </div>\n\n    <div class=\"dropdown-content\" [style.height.px]=\"calculateDropdownHeight()\" [ngClass]=\"{'dropdown-content--active': isShowDropDown}\">\n      <ul class=\"must-have-list w-list-unstyled\">\n        <li class=\"must-have-item\" *ngFor=\"let item of items\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    2870: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"imagesListToRender.length\">\n  <ng-container *ngFor=\"let image of imagesListToRender\">\n    <img [src]=\"image\" alt=\"Image to pre render\">\n  </ng-container>\n</ng-container>\n";
      /***/
    },

    /***/
    4303: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a routerLink=\"/\" class=\"logo-wrapper in-hero w-inline-block\">\n  <img [src]=\"hotelData.logo.src\" alt=\"\" class=\"logo-black-mb\"/>\n  <p class=\"logo-text hide\" *ngIf=\"!isHideLogoName\">{{ hotelData.name }}</p>\n</a>\n";
      /***/
    },

    /***/
    2376: function _(module) {
      module.exports = ":host nav {\n  background: #d9d9d9;\n  margin: 40px auto;\n}\n:host span {\n  background: #2d2f31;\n  color: white;\n  font-size: 1.2em;\n  font-feature-settings: \"smcp\";\n  font-variant: small-caps;\n  cursor: pointer;\n  display: block;\n}\n:host span::after {\n  float: right;\n  right: 10%;\n}\n:host .slide {\n  width: 200px;\n  height: 0px;\n  overflow: hidden;\n  transition: height 0.8s ease;\n  position: absolute;\n  background: silver;\n  padding-left: 0;\n}\n:host .slide li {\n  list-style: none;\n  height: 30px;\n}\n:host .slide__link {\n  text-decoration: none;\n}\n:host #touch {\n  position: relative;\n  display: none;\n}\n:host #touch:checked + .slide {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUsbUJBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsd0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQUpKO0FBT0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxKO0FBT0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFMTjtBQVFJO0VBQ0UscUJBQUE7QUFOTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBVEo7QUFZRTtFQUNFLGFBQUE7QUFWSiIsImZpbGUiOiJkcm9wZG93bi1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICBuYXYge1xuICAgIC8vd2lkdGggOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICAgIG1hcmdpbiA6IDQwcHggYXV0bztcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGJhY2tncm91bmQgOiAjMmQyZjMxO1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgZm9udC1zaXplIDogMS4yZW07XG4gICAgZm9udC12YXJpYW50IDogc21hbGwtY2FwcztcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgc3Bhbjo6YWZ0ZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMTAlO1xuICB9XG5cbiAgLnNsaWRlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC44cyBlYXNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAmX19saW5rIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuXG4gICN0b3VjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjdG91Y2g6Y2hlY2tlZCArIC5zbGlkZSB7XG4gICAgaGVpZ2h0OiAxNTBweDtcblxuICAgIC8vLnNsaWRlX19saW5rIHtcbiAgICAvLyAgaGVpZ2h0OiAyMHB4O1xuICAgIC8vfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    2498: function _(module) {
      module.exports = "img {\n  display: none;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy1wcmUtcmVuZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiaW1hZ2VzLXByZS1yZW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */";
      /***/
    },

    /***/
    2091: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_guards_animation_guard_ts-src_app_shared_components_abstract-animated_ab-0f4488-es5.js.map