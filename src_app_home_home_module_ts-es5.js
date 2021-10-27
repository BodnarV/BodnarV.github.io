(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"], {
    /***/
    1570: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeLayoutComponent": function HomeLayoutComponent() {
          return (
            /* binding */
            _HomeLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-layout.component.html */
      27963);
      /* harmony import */


      var _home_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-layout.component.scss */
      59269);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      97175);

      var _HomeLayoutComponent = /*#__PURE__*/function (_shared_components_ab) {
        _inherits(HomeLayoutComponent, _shared_components_ab);

        var _super = _createSuper(HomeLayoutComponent);

        function HomeLayoutComponent(builder) {
          var _this;

          _classCallCheck(this, HomeLayoutComponent);

          _this = _super.call(this, builder);
          _this.builder = builder;
          return _this;
        }

        _createClass(HomeLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeLayoutComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _HomeLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder
        }];
      };

      _HomeLayoutComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home-layout',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomeLayoutComponent);
      /***/
    },

    /***/
    52003: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeRoutingModule": function HomeRoutingModule() {
          return (
            /* binding */
            _HomeRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-layout/home-layout.component */
      1570);
      /* harmony import */


      var _pages_introduction_page_introduction_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/introduction-page/introduction-page.component */
      30727);
      /* harmony import */


      var _pages_completed_page_completed_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/completed-page/completed-page.component */
      34682);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);
      /* harmony import */


      var _pages_link_not_valid_link_not_valid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/link-not-valid/link-not-valid.component */
      36767);
      /* harmony import */


      var _core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/guards/animation-guard/animation.guard */
      77098);
      /* harmony import */


      var _core_guards_selection_guard_selection_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/guards/selection-guard/selection.guard */
      76777);

      var routes = [{
        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutes.HOME,
        component: _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_0__.HomeLayoutComponent,
        canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_5__.AnimationGuard],
        children: [{
          path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.CoreRoutes.INTRODUCTION,
          component: _pages_introduction_page_introduction_page_component__WEBPACK_IMPORTED_MODULE_1__.IntroductionPageComponent,
          canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_5__.AnimationGuard]
        }, {
          path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.CoreRoutes.COMPLETED,
          component: _pages_completed_page_completed_page_component__WEBPACK_IMPORTED_MODULE_2__.CompletedPageComponent,
          canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_5__.AnimationGuard],
          canActivate: [_core_guards_selection_guard_selection_guard__WEBPACK_IMPORTED_MODULE_6__.SelectionGuard]
        }, {
          path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.CoreRoutes.LINK_NOT_VALID,
          component: _pages_link_not_valid_link_not_valid_component__WEBPACK_IMPORTED_MODULE_4__.LinkNotValidComponent,
          canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_5__.AnimationGuard]
        }]
      }];

      var _HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      _HomeRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
      })], _HomeRoutingModule);
      /***/
    },

    /***/
    3467: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* binding */
            _HomeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      52003);
      /* harmony import */


      var _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-layout/home-layout.component */
      1570);
      /* harmony import */


      var _pages_introduction_page_introduction_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/introduction-page/introduction-page.component */
      30727);
      /* harmony import */


      var _pages_completed_page_completed_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/completed-page/completed-page.component */
      34682);
      /* harmony import */


      var _pages_link_not_valid_link_not_valid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/link-not-valid/link-not-valid.component */
      36767);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/shared.module */
      44466);

      var _HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      _HomeModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_1__.HomeLayoutComponent, _pages_introduction_page_introduction_page_component__WEBPACK_IMPORTED_MODULE_2__.IntroductionPageComponent, _pages_completed_page_completed_page_component__WEBPACK_IMPORTED_MODULE_3__.CompletedPageComponent, _pages_link_not_valid_link_not_valid_component__WEBPACK_IMPORTED_MODULE_4__.LinkNotValidComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
      })], _HomeModule);
      /***/
    },

    /***/
    34682: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompletedPageComponent": function CompletedPageComponent() {
          return (
            /* binding */
            _CompletedPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_completed_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./completed-page.component.html */
      95482);
      /* harmony import */


      var _completed_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./completed-page.component.scss */
      70330);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/hotel-service/hotel.service */
      36660);
      /* harmony import */


      var _core_services_guest_service_guest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/guest-service/guest.service */
      94674);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _CompletedPageComponent = /*#__PURE__*/function (_shared_components_ab2) {
        _inherits(CompletedPageComponent, _shared_components_ab2);

        var _super2 = _createSuper(CompletedPageComponent);

        function CompletedPageComponent(builder, route, _hotelService, _guestService) {
          var _this2;

          _classCallCheck(this, CompletedPageComponent);

          _this2 = _super2.call(this, builder);
          _this2.builder = builder;
          _this2.route = route;
          _this2._hotelService = _hotelService;
          _this2._guestService = _guestService;
          _this2.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          _this2.hotelData = {};
          _this2.guestData = {};
          _this2.reservationData = {};
          return _this2;
        }

        _createClass(CompletedPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hotelData = this._hotelService.hotelData;
            this.guestData = this._guestService.guestData;
            this.reservationData = this._guestService.guestReservationData;
            this.confirmedOrderRoom = this.route.snapshot.queryParams.room;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return CompletedPageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _CompletedPageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__.AnimationBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_3__.HotelService
        }, {
          type: _core_services_guest_service_guest_service__WEBPACK_IMPORTED_MODULE_4__.GuestService
        }];
      };

      _CompletedPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-completed-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_completed_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_completed_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _CompletedPageComponent);
      /***/
    },

    /***/
    30727: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IntroductionPageComponent": function IntroductionPageComponent() {
          return (
            /* binding */
            _IntroductionPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_introduction_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./introduction-page.component.html */
      63766);
      /* harmony import */


      var _introduction_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./introduction-page.component.scss */
      28976);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _core_services_guest_service_guest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/guest-service/guest.service */
      94674);
      /* harmony import */


      var _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/hotel-service/hotel.service */
      36660);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _core_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @core/services/data-service/data.service */
      41479);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core_services_store_service_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @core/services/store-service/store.service */
      21887);

      var _IntroductionPageComponent = /*#__PURE__*/function (_shared_components_ab3) {
        _inherits(IntroductionPageComponent, _shared_components_ab3);

        var _super3 = _createSuper(IntroductionPageComponent);

        function IntroductionPageComponent(builder, route, router, _dataService, _guestService, _hotelService, _selectionService, _localStoreService) {
          var _this3;

          _classCallCheck(this, IntroductionPageComponent);

          _this3 = _super3.call(this, builder);
          _this3.builder = builder;
          _this3.route = route;
          _this3.router = router;
          _this3._dataService = _dataService;
          _this3._guestService = _guestService;
          _this3._hotelService = _hotelService;
          _this3._selectionService = _selectionService;
          _this3._localStoreService = _localStoreService;
          _this3.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
          _this3.selectionsTitleCountToShow = 2;
          _this3.roomsPageName = _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.RoomsPageName;
          _this3.coreRoutes = _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.CoreRoutes;
          _this3.pagesData = {};
          _this3.hotelData = {};
          _this3.guestData = {};
          _this3.reservationData = {};
          return _this3;
        }

        _createClass(IntroductionPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subscribes();
          }
        }, {
          key: "subscribes",
          value: function subscribes() {
            var _this4 = this;

            var hash = this.route.snapshot.queryParams.hash;

            if (!hash) {
              this.router.navigate([this.coreRoutes.LINK_NOT_VALID]);
            }

            this._localStoreService.setItem('hash', hash);

            this._dataService.fetchPagesData(hash) //87585a765b8768c
            .pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(function (val) {
              _this4._dataService.pagesData = _this4.pagesData = val;
              _this4._selectionService.selectionPages = val.selectionPages;
              _this4._hotelService.hotelData = _this4.hotelData = val.hotel;
              _this4._guestService.guestData = _this4.guestData = val.guest;
              _this4._guestService.guestReservationData = _this4.reservationData = val.reservation;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return IntroductionPageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_3__.AbstractAnimatedComponent);

      _IntroductionPageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_11__.AnimationBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _core_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService
        }, {
          type: _core_services_guest_service_guest_service__WEBPACK_IMPORTED_MODULE_4__.GuestService
        }, {
          type: _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_5__.HotelService
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_6__.SelectionService
        }, {
          type: _core_services_store_service_store_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService
        }];
      };

      _IntroductionPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-introduction-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_introduction_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_introduction_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _IntroductionPageComponent);
      /***/
    },

    /***/
    36767: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LinkNotValidComponent": function LinkNotValidComponent() {
          return (
            /* binding */
            _LinkNotValidComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_link_not_valid_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./link-not-valid.component.html */
      65797);
      /* harmony import */


      var _link_not_valid_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./link-not-valid.component.scss */
      6880);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/hotel-service/hotel.service */
      36660);

      var _LinkNotValidComponent = /*#__PURE__*/function (_shared_components_ab4) {
        _inherits(LinkNotValidComponent, _shared_components_ab4);

        var _super4 = _createSuper(LinkNotValidComponent);

        function LinkNotValidComponent(builder, _hotelService) {
          var _this5;

          _classCallCheck(this, LinkNotValidComponent);

          _this5 = _super4.call(this, builder);
          _this5.builder = builder;
          _this5._hotelService = _hotelService;
          _this5.hotelData = {};
          return _this5;
        }

        _createClass(LinkNotValidComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hotelData = this._hotelService.hotelData;
          }
        }]);

        return LinkNotValidComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _LinkNotValidComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__.AnimationBuilder
        }, {
          type: _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_3__.HotelService
        }];
      };

      _LinkNotValidComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-link-not-valid',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_link_not_valid_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_link_not_valid_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _LinkNotValidComponent);
      /***/
    },

    /***/
    27963: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<main class=\"main\" #animationTarget>\n    <router-outlet></router-outlet>\n</main>\n";
      /***/
    },

    /***/
    95482: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"completed-screen\" [style.background-image]=\"'url(' + hotelData.backgroundImages?.introduction.src + ')'\" #animationTarget>\n    <a href=\"javascript:void(0)\" class=\"logo-wrapper w-inline-block\">\n        <img [src]=\"hotelData.logo\" alt=\"\" class=\"image-2 completed-logo\"/>\n    </a>\n    <div class=\"bg-overlay\"></div>\n    <div class=\"completed-container\">\n        <h2 class=\"h1 completed-title\">YOUR ORDER IS COMPLETED!</h2>\n        <p class=\"paragraph-6\">Your chosen room is <span class=\"the-curr-room-num\">{{ confirmedOrderRoom }}</span><br/></p>\n        <p class=\"paragraph-8\">Subject to final confirmation 24 hours prior to arrival.<br/></p>\n        <p class=\"paragraph-7\">\n            Thank you <span class=\"name\">{{ guestData.name }}</span>, <br/>\n            we hope you enjoy your stay.\n        </p>\n        <p class=\"paragraph-7\">For questions or concerns, we&#x27;re here:\n          <a href=\"mailto:{{ hotelData.fromEmail }}\" target=\"_blank\" class=\"link\">\n            {{ hotelData.fromEmail }}\n          </a>\n          <br/>\n        </p>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    63766: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"first-screen\" #animationTarget>\n    <div class=\"homepage-hero\" [style.background-image]=\"'url(' + hotelData.backgroundImages?.introduction.src + ')'\">\n        <div class=\"bg-overlay\"></div>\n        <a routerLink=\"/\" class=\"logo-wrapper in-hero w-inline-block\">\n            <img [src]=\"hotelData.logo\" alt=\"\" class=\"image-2 completed-logo\"/>\n        </a>\n        <div class=\"text-container\">\n            <div class=\"up-text\">\n                <h1 class=\"h1 white-light\">Hi <span class=\"name\">{{ guestData.name }}</span>,</h1>\n                <ng-container *ngFor=\"let selection of pagesData.selectionPages; let index = index;\">\n                    <h3 class=\"h3 hero-title\" *ngIf=\"index < selectionsTitleCountToShow\">{{ selection.title | uppercase }}<br/></h3>\n                </ng-container>\n\n                <p class=\"paragraph-2\">You can finally secure your ideal room before you arrive, and enjoy a tailored\n                    experience at our hotel, for only <span class=\"the-price\">{{reservationData.currency + reservationData.price }}</span> /night.<br/></p>\n            </div>\n            <div class=\"button-text\">\n                <p class=\"paragraph-4\">*Subject to final confirmation 24 hours prior to arrival.<br/></p>\n                <p class=\"paragraph-4\">*Charge upon arrival</p>\n                <p class=\"paragraph-4\">*E&amp;OE</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"user-vication-details\">\n        <div class=\"check-in-check-out\">\n            <div class=\"single-detaile check-in\">\n                <h4 class=\"single-details-title\">Check in</h4>\n                <p class=\"single-details-time single-details check-in-date\">{{ reservationData.startDate | date:'fullDate' | dateView | uppercase }}</p>\n            </div>\n            <div class=\"single-detaile check-out\">\n                <h4 class=\"single-details-title\">Check out</h4>\n                <p class=\"single-details-time single-details check-out-date\">{{ reservationData.endDate | date:'fullDate' | dateView | uppercase }}</p>\n            </div>\n        </div>\n        <div class=\"single-detaile last\">\n            <h4 class=\"single-details-title\">Order number</h4>\n            <p class=\"single-details-time single-details order-nym\">{{ reservationData.id }}</p>\n        </div>\n        <a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + roomsPageName.FLOOR]\" class=\"button btn-big start-choose w-button\">\n            Let me choose\n        </a>\n\n        <!--<a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + roomsPageName.ROOMS_MAP]\" class=\"button btn-big start-choose w-button\">-->\n            <!--Let me choose-->\n        <!--</a>-->\n    </div>\n</div>\n\n<app-images-pre-render [data]=\"pagesData\"></app-images-pre-render>\n";
      /***/
    },

    /***/
    65797: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a href=\"javascript:void(0)\" class=\"logo-wrapper white-bg w-inline-block\" #animationTarget>\n  <img [src]=\"hotelData.logo\" alt=\"\" class=\"image-2\">\n</a>\n<div class=\"container\">\n  <p class=\"center-align\">THE LINK IS NOT VALID</p>\n  <p class=\"center-align\">PLEASE CONTACT</p>\n  <p class=\"center-align\">\n    <a href=\"mailto:{{hotelData.fromEmail}}\" target=\"_blank\" class=\"link\">{{hotelData.fromEmail}}</a>\n  </p>\n</div>\n";
      /***/
    },

    /***/
    59269: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    70330: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZWQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    28976: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    6880: function _(module) {
      module.exports = ":host::after {\n  content: \"\";\n  background-image: url(/assets/common/images/homepage-img.jpg);\n  opacity: 0.3;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n:host .container {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -40%);\n}\n:host .center-align {\n  text-align: center;\n}\n:host a, :host p {\n  color: black !important;\n  font-weight: normal !important;\n  letter-spacing: 1.3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmstbm90LXZhbGlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFBSiIsImZpbGUiOiJsaW5rLW5vdC12YWxpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY29tbW9uL2ltYWdlcy9ob21lcGFnZS1pbWcuanBnKTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmNvbnRhaW5lcntcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xuICB9XG4gIC5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBhLCBwe1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS4zcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_home_module_ts-es5.js.map