(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_room_room_module_ts"], {
    /***/
    71131: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BathPageComponent": function BathPageComponent() {
          return (
            /* binding */
            _BathPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bath_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bath-page.component.html */
      77071);
      /* harmony import */


      var _bath_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bath-page.component.scss */
      79411);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);

      var _BathPageComponent = /*#__PURE__*/function (_shared_components_ab) {
        _inherits(BathPageComponent, _shared_components_ab);

        var _super = _createSuper(BathPageComponent);

        function BathPageComponent(builder, _selectionService) {
          var _this;

          _classCallCheck(this, BathPageComponent);

          _this = _super.call(this, builder);
          _this.builder = builder;
          _this._selectionService = _selectionService;
          _this.pageData = {};
          return _this;
        }

        _createClass(BathPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedBathType = this._selectionService.selectionDto[_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.BATHE];
            this.allPagesLength = this._selectionService.selectionPages.length;
            this.pageData = this._selectionService.selectionPages.find(function (selection) {
              return selection.name == _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.BATHE;
            });
          }
        }, {
          key: "selectPageOption",
          value: function selectPageOption(optionName) {
            this.selectedBathType = optionName;
            this._selectionService.selectionDto = {
              selectionName: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.BATHE,
              selectionOption: optionName
            };
          }
        }]);

        return BathPageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _BathPageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__.SelectionService
        }];
      };

      _BathPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-bath-step',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bath_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bath_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BathPageComponent);
      /***/
    },

    /***/
    11531: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FloorPageComponent": function FloorPageComponent() {
          return (
            /* binding */
            _FloorPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_floor_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./floor-page.component.html */
      46492);
      /* harmony import */


      var _floor_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./floor-page.component.scss */
      50405);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);

      var _FloorPageComponent = /*#__PURE__*/function (_shared_components_ab2) {
        _inherits(FloorPageComponent, _shared_components_ab2);

        var _super2 = _createSuper(FloorPageComponent);

        function FloorPageComponent(builder, _selectionService) {
          var _this2;

          _classCallCheck(this, FloorPageComponent);

          _this2 = _super2.call(this, builder);
          _this2.builder = builder;
          _this2._selectionService = _selectionService;
          _this2.pageData = {};
          return _this2;
        }

        _createClass(FloorPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedFloorType = this._selectionService.selectionDto[_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.FLOOR];
            this.allPagesLength = this._selectionService.selectionPages.length;
            this.pageData = this._selectionService.selectionPages.find(function (selection) {
              return selection.name == _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.FLOOR;
            });
          }
        }, {
          key: "selectPageOption",
          value: function selectPageOption(optionName) {
            this.selectedFloorType = optionName;
            this._selectionService.selectionDto = {
              selectionName: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.FLOOR,
              selectionOption: optionName
            };
          }
        }]);

        return FloorPageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _FloorPageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__.SelectionService
        }];
      };

      _FloorPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-floor-step',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_floor_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_floor_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _FloorPageComponent);
      /***/
    },

    /***/
    88057: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NoisePageComponent": function NoisePageComponent() {
          return (
            /* binding */
            _NoisePageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_noise_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./noise-page.component.html */
      58770);
      /* harmony import */


      var _noise_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./noise-page.component.scss */
      2003);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _core_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/data-service/data.service */
      41479);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);

      var _NoisePageComponent = /*#__PURE__*/function (_shared_components_ab3) {
        _inherits(NoisePageComponent, _shared_components_ab3);

        var _super3 = _createSuper(NoisePageComponent);

        function NoisePageComponent(builder, _dataService, _selectionService) {
          var _this3;

          _classCallCheck(this, NoisePageComponent);

          _this3 = _super3.call(this, builder);
          _this3.builder = builder;
          _this3._dataService = _dataService;
          _this3._selectionService = _selectionService;
          _this3.pageData = {};
          return _this3;
        }

        _createClass(NoisePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectRoomSleep = this._selectionService.selectionDto[_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_5__.RoomsPageName.NOISE];
            this.allPagesLength = this._selectionService.selectionPages.length;
            this.pageData = this._selectionService.selectionPages.find(function (selection) {
              return selection.name === _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_5__.RoomsPageName.NOISE;
            });
          }
        }, {
          key: "selectPageOption",
          value: function selectPageOption(optionName) {
            this.selectRoomSleep = optionName;
            this._selectionService.selectionDto = {
              selectionName: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_5__.RoomsPageName.NOISE,
              selectionOption: optionName
            };
          }
        }]);

        return NoisePageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _NoisePageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__.AnimationBuilder
        }, {
          type: _core_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__.SelectionService
        }];
      };

      _NoisePageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-noise-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_noise_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_noise_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _NoisePageComponent);
      /***/
    },

    /***/
    91184: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoomsMapPageComponent": function RoomsMapPageComponent() {
          return (
            /* binding */
            _RoomsMapPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rooms_map_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rooms-map-page.component.html */
      25830);
      /* harmony import */


      var _rooms_map_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rooms-map-page.component.scss */
      54979);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core_services_rooms_map_service_rooms_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/rooms-map-service/rooms-map.service */
      7511);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/hotel-service/hotel.service */
      36660);
      /* harmony import */


      var _core_services_guest_service_guest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/services/guest-service/guest.service */
      94674);

      var _RoomsMapPageComponent = /*#__PURE__*/function (_shared_components_ab4) {
        _inherits(RoomsMapPageComponent, _shared_components_ab4);

        var _super4 = _createSuper(RoomsMapPageComponent);

        function RoomsMapPageComponent(builder, router, _roomsMapService, _selectionService, _hotelService, _guestService) {
          var _this4;

          _classCallCheck(this, RoomsMapPageComponent);

          _this4 = _super4.call(this, builder);
          _this4.builder = builder;
          _this4.router = router;
          _this4._roomsMapService = _roomsMapService;
          _this4._selectionService = _selectionService;
          _this4._hotelService = _hotelService;
          _this4._guestService = _guestService;
          _this4.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          _this4.isShowConfirmDialog = false;
          _this4.guestData = {};
          _this4.hotelData = {};
          _this4.reservationData = {};
          _this4.selectedRoomMap = {};
          _this4.selectedRoom = {};
          return _this4;
        }

        _createClass(RoomsMapPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hotelData = this._hotelService.hotelData;
            this.guestData = this._guestService.guestData;
            this.reservationData = this._guestService.guestReservationData;
            this.subscribes();
          }
        }, {
          key: "subscribes",
          value: function subscribes() {
            var _this5 = this;

            this._roomsMapService.getAllRoomsById(this.hotelData.id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(function (res) {
              _this5.filteredRoomsList = _this5.filterRoomsBySelections(res);
              _this5.pageData = res;
              _this5.selectedRoom = _this5.pageData.find(function (room) {
                return _this5.filteredRoomsList.includes(room.roomNumber.toString());
              });
            });

            this._roomsMapService.isShowConfirmDialog$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(function (value) {
              return _this5.isShowConfirmDialog = value;
            });
          }
        }, {
          key: "filterRoomsBySelections",
          value: function filterRoomsBySelections(roomsList) {
            var _this6 = this;

            var roomSelectedOptions = roomsList.reduce(function (acc, item) {
              Object.entries(_this6._selectionService.selectionDto).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                if (item[key] === value) {
                  acc[item.roomNumber] = (acc[item.roomNumber] || 1) + 1;
                }
              });
              return acc;
            }, {});
            var roomNumbersList = Object.keys(roomSelectedOptions);
            return roomNumbersList.sort(function (a, b) {
              return roomSelectedOptions[b] - roomSelectedOptions[a];
            }).slice(0, 3);
          }
        }, {
          key: "onToggleMobileRoomMap",
          value: function onToggleMobileRoomMap(room) {
            this.selectedRoomMap = room;

            this._roomsMapService.isShowMobileMapDialog$.next(!!room);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return RoomsMapPageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_3__.AbstractAnimatedComponent);

      _RoomsMapPageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_9__.AnimationBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _core_services_rooms_map_service_rooms_map_service__WEBPACK_IMPORTED_MODULE_2__.RoomsMapService
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__.SelectionService
        }, {
          type: _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_5__.HotelService
        }, {
          type: _core_services_guest_service_guest_service__WEBPACK_IMPORTED_MODULE_6__.GuestService
        }];
      };

      _RoomsMapPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-rooms-map-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rooms_map_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rooms_map_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _RoomsMapPageComponent);
      /***/
    },

    /***/
    4567: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SleepPageComponent": function SleepPageComponent() {
          return (
            /* binding */
            _SleepPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sleep_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sleep-page.component.html */
      9238);
      /* harmony import */


      var _sleep_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sleep-page.component.scss */
      21971);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);

      var _SleepPageComponent = /*#__PURE__*/function (_shared_components_ab5) {
        _inherits(SleepPageComponent, _shared_components_ab5);

        var _super5 = _createSuper(SleepPageComponent);

        function SleepPageComponent(builder, _selectionService) {
          var _this7;

          _classCallCheck(this, SleepPageComponent);

          _this7 = _super5.call(this, builder);
          _this7.builder = builder;
          _this7._selectionService = _selectionService;
          _this7.pageData = {};
          return _this7;
        }

        _createClass(SleepPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedRoomSleep = this._selectionService.selectionDto[_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.SLEEP];
            this.allPagesLength = this._selectionService.selectionPages.length;
            this.pageData = this._selectionService.selectionPages.find(function (selection) {
              return selection.name == _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.SLEEP;
            });
          }
        }, {
          key: "selectPageOption",
          value: function selectPageOption(optionName) {
            this.selectedRoomSleep = optionName;
            this._selectionService.selectionDto = {
              selectionName: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_3__.RoomsPageName.SLEEP,
              selectionOption: optionName
            };
          }
        }]);

        return SleepPageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _SleepPageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_4__.SelectionService
        }];
      };

      _SleepPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dreams-location-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sleep_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sleep_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _SleepPageComponent);
      /***/
    },

    /***/
    70045: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpacePageComponent": function SpacePageComponent() {
          return (
            /* binding */
            _SpacePageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_space_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./space-page.component.html */
      11485);
      /* harmony import */


      var _space_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./space-page.component.scss */
      85559);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);

      var _SpacePageComponent = /*#__PURE__*/function (_shared_components_ab6) {
        _inherits(SpacePageComponent, _shared_components_ab6);

        var _super6 = _createSuper(SpacePageComponent);

        function SpacePageComponent(builder, _selectionService) {
          var _this8;

          _classCallCheck(this, SpacePageComponent);

          _this8 = _super6.call(this, builder);
          _this8.builder = builder;
          _this8._selectionService = _selectionService;
          _this8.pageData = {};
          return _this8;
        }

        _createClass(SpacePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedRoomSpace = this._selectionService.selectionDto[_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.SPACE];
            this.allPagesLength = this._selectionService.selectionPages.length;
            this.pageData = this._selectionService.selectionPages.find(function (selection) {
              return selection.name == _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.SPACE;
            });
          }
        }, {
          key: "selectPageOption",
          value: function selectPageOption(optionName) {
            this.selectedRoomSpace = optionName;
            this._selectionService.selectionDto = {
              selectionName: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.SPACE,
              selectionOption: optionName
            };
          }
        }]);

        return SpacePageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _SpacePageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_3__.SelectionService
        }];
      };

      _SpacePageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-space-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_space_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_space_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _SpacePageComponent);
      /***/
    },

    /***/
    1285: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StepsPageComponent": function StepsPageComponent() {
          return (
            /* binding */
            _StepsPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_steps_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./steps-page.component.html */
      8600);
      /* harmony import */


      var _steps_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./steps-page.component.scss */
      66866);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core_services_rooms_map_service_rooms_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/rooms-map-service/rooms-map.service */
      7511);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/services/hotel-service/hotel.service */
      36660);

      var _StepsPageComponent = /*#__PURE__*/function (_shared_components_ab7) {
        _inherits(StepsPageComponent, _shared_components_ab7);

        var _super7 = _createSuper(StepsPageComponent);

        function StepsPageComponent(builder, router, _roomsMapService, _selectionService, _hotelService) {
          var _this9;

          _classCallCheck(this, StepsPageComponent);

          _this9 = _super7.call(this, builder);
          _this9.builder = builder;
          _this9.router = router;
          _this9._roomsMapService = _roomsMapService;
          _this9._selectionService = _selectionService;
          _this9._hotelService = _hotelService;
          _this9.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          _this9.hotelData = {};
          _this9.coreRoutes = _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.CoreRoutes;
          _this9.roomsPageName = _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_2__.RoomsPageName;
          _this9.isShowConfirmDialog = false;
          _this9.isShowMobileMapDialog = false;
          return _this9;
        }

        _createClass(StepsPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.roomStepsList = this._selectionService.selectionPages.map(function (selection) {
              return selection.name;
            });
            this.hotelData = this._hotelService.hotelData;
            this.setNavigationParams();
            this.subscribes();
          }
        }, {
          key: "subscribes",
          value: function subscribes() {
            var _this10 = this;

            this.router.events.subscribe(function (val) {
              if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
                _this10.setNavigationParams();
              }
            });

            this._roomsMapService.isShowConfirmDialog$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(function (value) {
              return _this10.isShowConfirmDialog = value;
            });

            this._roomsMapService.isShowMobileMapDialog$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(function (value) {
              return _this10.isShowMobileMapDialog = value;
            });
          }
        }, {
          key: "setNavigationParams",
          value: function setNavigationParams() {
            var urls = this.router.url.split('/');
            var currentRoomStepIndex;
            this.currentRoomStep = urls[urls.length - 1];

            if (this.isLastRoomStep()) {
              this.prevRoomStep = this.roomStepsList[this.roomStepsList.length - 1];
              this.nextRoomStep = null;
              return;
            }

            currentRoomStepIndex = this.roomStepsList.indexOf(this.currentRoomStep);
            this.nextRoomStep = this.roomStepsList[currentRoomStepIndex + 1];
            this.prevRoomStep = this.roomStepsList[currentRoomStepIndex - 1];
          }
        }, {
          key: "isLastRoomStep",
          value: function isLastRoomStep() {
            return this.currentRoomStep === this.roomsPageName.ROOMS_MAP;
          }
        }, {
          key: "openConfirmDialog",
          value: function openConfirmDialog() {
            this._roomsMapService.isShowConfirmDialog$.next(true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return StepsPageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_4__.AbstractAnimatedComponent);

      _StepsPageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_10__.AnimationBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _core_services_rooms_map_service_rooms_map_service__WEBPACK_IMPORTED_MODULE_3__.RoomsMapService
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_5__.SelectionService
        }, {
          type: _core_services_hotel_service_hotel_service__WEBPACK_IMPORTED_MODULE_6__.HotelService
        }];
      };

      _StepsPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-steps-page',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_steps_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_steps_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _StepsPageComponent);
      /***/
    },

    /***/
    17566: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPageComponent": function ViewPageComponent() {
          return (
            /* binding */
            _ViewPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-page.component.html */
      88289);
      /* harmony import */


      var _view_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-page.component.scss */
      48522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _core_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/data-service/data.service */
      41479);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);
      /* harmony import */


      var _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/selection-service/selection.service */
      50606);

      var _ViewPageComponent = /*#__PURE__*/function (_shared_components_ab8) {
        _inherits(ViewPageComponent, _shared_components_ab8);

        var _super8 = _createSuper(ViewPageComponent);

        function ViewPageComponent(builder, _dataService, _selectionService) {
          var _this11;

          _classCallCheck(this, ViewPageComponent);

          _this11 = _super8.call(this, builder);
          _this11.builder = builder;
          _this11._dataService = _dataService;
          _this11._selectionService = _selectionService;
          _this11.pageData = {};
          return _this11;
        }

        _createClass(ViewPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectRoomView = this._selectionService.selectionDto[_core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.VIEW];
            this.allPagesLength = this._selectionService.selectionPages.length;
            this.pageData = this._selectionService.selectionPages.find(function (selection) {
              return selection.name === _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.VIEW;
            });
          }
        }, {
          key: "selectPageOption",
          value: function selectPageOption(optionName) {
            this.selectRoomView = optionName;
            this._selectionService.selectionDto = {
              selectionName: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_4__.RoomsPageName.VIEW,
              selectionOption: optionName
            };
          }
        }]);

        return ViewPageComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _ViewPageComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__.AnimationBuilder
        }, {
          type: _core_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
        }, {
          type: _core_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_5__.SelectionService
        }];
      };

      _ViewPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view-step',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ViewPageComponent);
      /***/
    },

    /***/
    37286: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoomLayoutComponent": function RoomLayoutComponent() {
          return (
            /* binding */
            _RoomLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_room_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./room-layout.component.html */
      38889);
      /* harmony import */


      var _room_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./room-layout.component.scss */
      81962);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/components/abstract-animated/abstract-animated.component */
      25806);

      var _RoomLayoutComponent = /*#__PURE__*/function (_shared_components_ab9) {
        _inherits(RoomLayoutComponent, _shared_components_ab9);

        var _super9 = _createSuper(RoomLayoutComponent);

        function RoomLayoutComponent(builder) {
          var _this12;

          _classCallCheck(this, RoomLayoutComponent);

          _this12 = _super9.call(this, builder);
          _this12.builder = builder;
          return _this12;
        }

        _createClass(RoomLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RoomLayoutComponent;
      }(_shared_components_abstract_animated_abstract_animated_component__WEBPACK_IMPORTED_MODULE_2__.AbstractAnimatedComponent);

      _RoomLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder
        }];
      };

      _RoomLayoutComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-room-layout',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_room_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_room_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _RoomLayoutComponent);
      /***/
    },

    /***/
    48156: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoomRoutingModule": function RoomRoutingModule() {
          return (
            /* binding */
            _RoomRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/configs/routing-config */
      2831);
      /* harmony import */


      var _pages_steps_steps_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/steps/steps-page.component */
      1285);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _room_layout_room_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./room-layout/room-layout.component */
      37286);
      /* harmony import */


      var _core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/guards/animation-guard/animation.guard */
      77098);
      /* harmony import */


      var _core_guards_selection_guard_selection_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/guards/selection-guard/selection.guard */
      76777);
      /* harmony import */


      var _pages_steps_floor_page_floor_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/steps/floor-page/floor-page.component */
      11531);
      /* harmony import */


      var _pages_steps_view_page_view_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/steps/view-page/view-page.component */
      17566);
      /* harmony import */


      var _pages_steps_bath_page_bath_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/steps/bath-page/bath-page.component */
      71131);
      /* harmony import */


      var _pages_steps_sleep_page_sleep_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/steps/sleep-page/sleep-page.component */
      4567);
      /* harmony import */


      var _pages_steps_rooms_map_page_rooms_map_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/steps/rooms-map-page/rooms-map-page.component */
      91184);
      /* harmony import */


      var _pages_steps_noise_page_noise_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/steps/noise-page/noise-page.component */
      88057);
      /* harmony import */


      var _pages_steps_space_page_space_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/steps/space-page/space-page.component */
      70045);

      var routes = [{
        path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutes.ROOMS,
        component: _room_layout_room_layout_component__WEBPACK_IMPORTED_MODULE_2__.RoomLayoutComponent,
        canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard],
        children: [{
          path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.CoreRoutes.ROOM,
          component: _pages_steps_steps_page_component__WEBPACK_IMPORTED_MODULE_1__.StepsPageComponent,
          canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard],
          canActivateChild: [_core_guards_selection_guard_selection_guard__WEBPACK_IMPORTED_MODULE_4__.SelectionGuard],
          children: [{
            path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.FLOOR,
            component: _pages_steps_floor_page_floor_page_component__WEBPACK_IMPORTED_MODULE_5__.FloorPageComponent,
            canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
          }, {
            path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.VIEW,
            component: _pages_steps_view_page_view_page_component__WEBPACK_IMPORTED_MODULE_6__.ViewPageComponent,
            canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
          }, {
            path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.NOISE,
            component: _pages_steps_noise_page_noise_page_component__WEBPACK_IMPORTED_MODULE_10__.NoisePageComponent,
            canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
          }, {
            path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.SPACE,
            component: _pages_steps_space_page_space_page_component__WEBPACK_IMPORTED_MODULE_11__.SpacePageComponent,
            canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
          }, {
            path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.BATHE,
            component: _pages_steps_bath_page_bath_page_component__WEBPACK_IMPORTED_MODULE_7__.BathPageComponent,
            canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
          }, {
            path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.SLEEP,
            component: _pages_steps_sleep_page_sleep_page_component__WEBPACK_IMPORTED_MODULE_8__.SleepPageComponent,
            canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
          }, {
            path: _core_configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.RoomsPageName.ROOMS_MAP,
            component: _pages_steps_rooms_map_page_rooms_map_page_component__WEBPACK_IMPORTED_MODULE_9__.RoomsMapPageComponent,
            canDeactivate: [_core_guards_animation_guard_animation_guard__WEBPACK_IMPORTED_MODULE_3__.AnimationGuard]
          }]
        }]
      }];

      var _RoomRoutingModule = function RoomRoutingModule() {
        _classCallCheck(this, RoomRoutingModule);
      };

      _RoomRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
      })], _RoomRoutingModule);
      /***/
    },

    /***/
    82036: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoomModule": function RoomModule() {
          return (
            /* binding */
            _RoomModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _room_layout_room_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./room-layout/room-layout.component */
      37286);
      /* harmony import */


      var _pages_steps_steps_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/steps/steps-page.component */
      1285);
      /* harmony import */


      var _room_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./room-routing.module */
      48156);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/shared.module */
      44466);
      /* harmony import */


      var _core_services_rooms_map_service_rooms_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/rooms-map-service/rooms-map.service */
      7511);
      /* harmony import */


      var _pages_steps_floor_page_floor_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/steps/floor-page/floor-page.component */
      11531);
      /* harmony import */


      var _pages_steps_rooms_map_page_rooms_map_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/steps/rooms-map-page/rooms-map-page.component */
      91184);
      /* harmony import */


      var _pages_steps_sleep_page_sleep_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/steps/sleep-page/sleep-page.component */
      4567);
      /* harmony import */


      var _pages_steps_bath_page_bath_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/steps/bath-page/bath-page.component */
      71131);
      /* harmony import */


      var _pages_steps_view_page_view_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/steps/view-page/view-page.component */
      17566);
      /* harmony import */


      var _pages_steps_noise_page_noise_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/steps/noise-page/noise-page.component */
      88057);
      /* harmony import */


      var _pages_steps_space_page_space_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/steps/space-page/space-page.component */
      70045);

      var _RoomModule = function RoomModule() {
        _classCallCheck(this, RoomModule);
      };

      _RoomModule = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_room_layout_room_layout_component__WEBPACK_IMPORTED_MODULE_0__.RoomLayoutComponent, _pages_steps_steps_page_component__WEBPACK_IMPORTED_MODULE_1__.StepsPageComponent, _pages_steps_floor_page_floor_page_component__WEBPACK_IMPORTED_MODULE_5__.FloorPageComponent, _pages_steps_view_page_view_page_component__WEBPACK_IMPORTED_MODULE_9__.ViewPageComponent, _pages_steps_bath_page_bath_page_component__WEBPACK_IMPORTED_MODULE_8__.BathPageComponent, _pages_steps_sleep_page_sleep_page_component__WEBPACK_IMPORTED_MODULE_7__.SleepPageComponent, _pages_steps_rooms_map_page_rooms_map_page_component__WEBPACK_IMPORTED_MODULE_6__.RoomsMapPageComponent, _pages_steps_noise_page_noise_page_component__WEBPACK_IMPORTED_MODULE_10__.NoisePageComponent, _pages_steps_space_page_space_page_component__WEBPACK_IMPORTED_MODULE_11__.SpacePageComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _room_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoomRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
        providers: [_core_services_rooms_map_service_rooms_map_service__WEBPACK_IMPORTED_MODULE_4__.RoomsMapService]
      })], _RoomModule);
      /***/
    },

    /***/
    77071: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div data-category=\"bath\" class=\"optiion opt-3\" #animationTarget>\n    <div class=\"slide-container\">\n        <div class=\"slide-text-container question\">\n            <div>\n                <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageData.order }}</span> of {{ allPagesLength }}</p>\n                <h1 class=\"h1 ques-title\">{{ pageData.title | uppercase }} <br/></h1>\n            </div>\n            <div class=\"question-container\">\n                <ng-container *ngFor=\"let option of pageData.options; let index = index\">\n                    <div class=\"single-ques-container\">\n                        <div class=\"single-ques bath\"\n                             onHoverShowDescription\n                             (click)=\"selectPageOption(option.name)\"\n                             [ngClass]=\"{'active': selectedBathType === option.name}\"\n                        >\n                            <img [src]=\"option.src\" alt=\"\" class=\"bath-img\"/>\n                        </div>\n                        <p class=\"single-chioce-text visible-item\">{{ option.title | uppercase }}</p>\n                    </div>\n\n                    <p class=\"or-text\" *ngIf=\"index % 2 === 0\">OR</p>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    46492: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div data-category=\"floor\" class=\"optiion opt-1 active\" #animationTarget>\n    <div class=\"slide-container flex-slide\">\n        <div class=\"slide-text-container\">\n            <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageData.order }}</span> of {{ allPagesLength }}</p>\n            <h1 class=\"h1 center-title\">{{ pageData.title | uppercase }}</h1>\n            <p class=\"under-title-text\">Grab to choose how high/low do you wanna go<br/></p>\n            <p class=\"grab-text\">Grab to set distance</p>\n        </div>\n        <div class=\"question-container\">\n            <ng-container *ngFor=\"let option of pageData?.options; let index = index\">\n                <div class=\"single-ques-container\" (click)=\"selectPageOption(option.name)\">\n                    <div class=\"single-ques floor-low\" [ngClass]=\"{'active': selectedFloorType === option.name}\">{{ option.title | uppercase }}</div>\n                </div>\n                <p class=\"or-text\" style=\"bottom: 0;\" *ngIf=\"index % 2 === 0\">OR</p>\n            </ng-container>\n        </div>\n        <ng-container *ngIf=\"pageData.options\">\n            <img [src]=\"pageData.options[0].src\" alt=\"\" class=\"hotel-img\"/>\n        </ng-container>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    58770: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div data-category=\"view\" class=\"optiion opt-2 active\" #animationTarget>\n  <div class=\"slide-container\">\n    <div class=\"slide-text-container question\">\n      <div>\n        <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageData.order }}</span> of {{ allPagesLength }}</p>\n        <h1 class=\"h1 ques-title\">{{ pageData.title | uppercase }}<br></h1>\n      </div>\n\n      <div class=\"question-container\">\n\n        <ng-container *ngFor=\"let option of pageData.options; let index = index\">\n          <div class=\"single-ques-container\">\n            <div class=\"single-ques quiet\"\n                 (click)=\"selectPageOption(option.name)\"\n                 [ngClass]=\"{'active': selectRoomSleep === option.name}\"\n            >\n              <p class=\"ans-text\">{{ option.title | uppercase }}</p>\n            </div>\n          </div>\n\n          <p class=\"or-text not-bottom\" *ngIf=\"index % 2 === 0\">OR</p>\n        </ng-container>\n\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    25830: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div data-category=\"room\" class=\"optiion opt-6 active\" #animationTarget>\n  <div class=\"slide-container choose-room\">\n    <div class=\"choose-room-container\">\n      <div class=\"map-container\">\n        <p class=\"paragraph-5\">Based on your preferences, we found these rooms for you<br></p>\n        <h2 class=\"h2\">NOW: ALL THAT'S LEFT TO DO IS TO CHOOSE<br></h2>\n\n        <ng-container *ngIf=\"hotelData.desktopMaps[selectedRoom.floor]?.src\">\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 1250 1000\"\n               class=\"map-img\"\n               xmlns=\"http://www.w3.org/2000/svg\"\n               xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <image [attr.xlink:href]=\"hotelData.desktopMaps[selectedRoom.floor]?.src\" x=\"0\" y=\"0\" height=\"1000\"\n                   width=\"1250\">\n            </image>\n            <image xlink:href=\"/assets/common/images/blue-circle.svg.png\"\n                   [attr.x]=\"selectedRoom.coords.xDesktop\"\n                   [attr.y]=\"selectedRoom.coords.yDesktop\"\n                   height=\"25\"\n                   width=\"25\">\n            </image>\n          </svg>\n        </ng-container>\n      </div>\n\n      <div class=\"rooms-list-container not-in-slide\">\n        <app-dropdown-field [items]=\"['LOW FLOOR', 'Clear']\"></app-dropdown-field>\n\n        <div class=\"rooms-list\" *ngIf=\"pageData\">\n          <ng-container *ngFor=\"let room of pageData\">\n            <ng-container *ngIf=\"filteredRoomsList.includes(room.roomNumber.toString())\">\n\n              <div class=\"single-room\"\n                   [ngClass]=\"{'active': selectedRoom?.roomNumber === room.roomNumber}\"\n                   (click)=\"selectedRoom = room\"\n              >\n                <div class=\"room-img-wrapper\">\n                  <img [src]=\"null\" alt=\"\" class=\"room-img\">\n                </div>\n                <div class=\"room-details\">\n                  <ul class=\"prop-list w-list-unstyled\">\n                    <li class=\"prop-item\" *ngFor=\"let feature of room?.roomFeatures\">{{ feature | uppercase }}</li>\n                  </ul>\n                  <p class=\"prop-item-cont\">\n                    Room number <span class=\"the-item-text room_num\">{{ room?.roomNumber }}</span>\n                  </p>\n                  <p class=\"prop-item-cont\">\n                    Floor <span class=\"the-item-text floor_num\">{{ room?.floor }}</span>\n                  </p>\n\n                  <a href=\"javascript:void(0)\" class=\"view-map\" (click)=\"onToggleMobileRoomMap(room)\">VIEW&nbsp;MAP</a>\n\n                  <div class=\"map-popup transitionee\"\n                       [ngClass]=\"{'transitione': selectedRoomMap?.roomNumber === room.roomNumber}\">\n                    <div class=\"map-img-wrapper\">\n\n                      <ng-container *ngIf=\"hotelData.desktopMaps[selectedRoom.floor]?.src\">\n                        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 540 840\"\n                             class=\"map-popup-img\"\n                             xmlns=\"http://www.w3.org/2000/svg\"\n                             xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                          <image [attr.xlink:href]=\"hotelData.mobileMaps[selectedRoom.floor]?.src\" x=\"0\" y=\"0\"\n                                 width=\"540\" height=\"840\"/>\n                          <image xlink:href=\"/assets/common/images/blue-circle.svg.png\"\n                                 [attr.x]=\"selectedRoom.coords.xMobile\"\n                                 [attr.y]=\"selectedRoom.coords.yMobile\"\n                                 height=\"14\"\n                                 width=\"14\"\n                          />\n                        </svg>\n                      </ng-container>\n\n                    </div>\n                    <div class=\"close-map-popup\" (click)=\"onToggleMobileRoomMap(null)\">\n                      <img src=\"/assets/common/images/close.png\" alt=\"\" class=\"close-img\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container>\n        </div>\n        <a href=\"javascript:void(0)\" class=\"button confirm-btn w-button\">NEXT</a></div>\n    </div>\n  </div>\n  <app-confirm-modal [isVisible]=\"isShowConfirmDialog\"\n                     [selectedRoom]=\"selectedRoom\"\n                     [guestData]=\"guestData\"\n                     [reservationData]=\"reservationData\"\n  ></app-confirm-modal>\n</div>\n";
      /***/
    },

    /***/
    9238: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div data-category=\"bed\" class=\"optiion opt-4\" #animationTarget>\n    <div class=\"slide-container\">\n        <div class=\"slide-text-container question\">\n            <div>\n              <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageData.order }}</span> of {{ allPagesLength }}</p>\n                <h1 class=\"h1 ques-title\">{{ pageData.title | uppercase }} <br/></h1>\n            </div>\n\n          <div class=\"question-container\">\n            <ng-container *ngFor=\"let item of pageData.options; let index = index\">\n              <div class=\"single-ques-container\"\n                   [ngClass]=\"{'center-space': index === 1}\"\n                   (click)=\"selectPageOption(item.name)\"\n              >\n                <div onHoverShowDescription class=\"single-ques\" [ngClass]=\"{'active': selectedRoomSleep === item.name}\">\n                  <img [src]=\"item.src\" alt=\"\" class=\"bath-img\"/>\n                </div>\n\n                <p class=\"single-chioce-text visible-item\">{{ item.title | uppercase }}</p>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    11485: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div data-category=\"bath\" class=\"optiion opt-3 active\" #animationTarget>\n  <div class=\"slide-container\">\n    <div class=\"slide-text-container question\">\n      <div>\n        <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageData.order }}</span> of {{ allPagesLength }}</p>\n        <h1 class=\"h1 ques-title\">{{ pageData.title | uppercase }}<br></h1>\n      </div>\n      <div class=\"question-container\">\n\n        <!--<div class=\"single-ques-container\">-->\n          <!--<div class=\"single-ques cosy\">-->\n            <!--I'm more<br>into \"Cozy\"-->\n          <!--</div>-->\n        <!--</div>-->\n\n        <ng-container *ngFor=\"let option of pageData.options; let index = index;\">\n          <div class=\"single-ques-container\">\n            <div class=\"single-ques cosy\"\n                 (click)=\"selectPageOption(option.name)\"\n                 [ngClass]=\"{'active': selectedRoomSpace === option.name}\"\n            >\n              {{ option.title }}\n              <br>\n              \"{{ option.name | uppercase }}\"\n            </div>\n          </div>\n\n          <p class=\"or-text not-bottom\" *ngIf=\"index % 2 === 0\">OR</p>\n        </ng-container>\n\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    8600: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"select-options-section\" #animationTarget>\n  <a href=\"javascript:void(0)\" class=\"logo-wrapper white-bg w-inline-block visible-item\"\n     [ngClass]=\"{\n        'logo-wrapper--blocked': isShowMobileMapDialog || isShowConfirmDialog,\n        'is-visible': !isShowConfirmDialog\n     }\">\n    <img [src]=\"hotelData.logo\" alt=\"\" class=\"image-2\"/>\n  </a>\n\n  <div class=\"options-container\">\n    <router-outlet></router-outlet>\n\n    <div class=\"button-container\" [ngClass]=\"{'is-events-none': prevRoomStep}\">\n      <div class=\"visible-item back-btn\" [ngClass]=\"{'is-visible': prevRoomStep && !isShowConfirmDialog && !isShowMobileMapDialog}\">\n        <a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + prevRoomStep]\" class=\"button w-button white-btn\">\n          <span>BACK</span>\n        </a>\n      </div>\n      <div class=\"next-skip-btn\">\n\n        <div class=\"visible-item\" [ngClass]=\"{'is-visible': !isLastRoomStep()}\">\n          <a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + (nextRoomStep ? nextRoomStep : roomsPageName.ROOMS_MAP)]\"\n             class=\"button white-btn btn-white-small skip-btn w-button\">\n            <span>skip</span>\n          </a>\n        </div>\n\n        <a [routerLink]=\"['/' + coreRoutes.ROOM + '/' + (nextRoomStep ? nextRoomStep : roomsPageName.ROOMS_MAP)]\"\n           *ngIf=\"currentRoomStep !== roomsPageName.ROOMS_MAP\"\n           class=\"button next-btn w-button\">\n          <span>next</span>\n        </a>\n\n        <a *ngIf=\"currentRoomStep === roomsPageName.ROOMS_MAP && !isShowConfirmDialog\"\n           class=\"button next-btn w-button\"\n           [ngClass]=\"{'next-btn--blocked': isShowMobileMapDialog}\"\n           (click)=\"openConfirmDialog()\">\n          <span>next</span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    88289: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div data-category=\"view\" class=\"optiion opt-2\" #animationTarget>\n  <div class=\"slide-container part-slide\">\n    <div class=\"slide-text-container question ports\">\n      <div>\n        <p class=\"step-nav-cont\">Step <span class=\"curr-step\">{{ pageData.order }}</span> of {{ allPagesLength }}</p>\n        <h1 class=\"h1 ques-title ports-title\">{{ pageData.title | uppercase }}</h1>\n      </div>\n      <div class=\"ports-container\">\n\n        <ng-container *ngFor=\"let view of pageData.options\">\n          <div class=\"single-port port-view\"\n               [ngClass]=\"{\n                'active': selectRoomView === view.name,\n                'single-port--deselected': selectRoomView && selectRoomView !== view.name\n                }\"\n               (click)=\"selectPageOption(view.name)\">\n\n            <div class=\"choosen-img-container\">\n              <img src=\"/assets/common/images/noun_v-icon_1668947.svg\" alt=\"\" class=\"choosen-img\"/>\n              <p class=\"view-text\">{{ view.title | uppercase }}</p>\n            </div>\n            <img [src]=\"view.src\" alt=\"\" class=\"port-img\"/>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    38889: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<main class=\"main\" #animationTarget>\n  <router-outlet></router-outlet>\n</main>\n";
      /***/
    },

    /***/
    79411: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXRoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    50405: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbG9vci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    2003: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub2lzZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    54979: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy1tYXAtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    21971: function _(module) {
      module.exports = ".single-ques-container {\n  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;\n}\n.single-ques-container:hover .single-chioce-text {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsZWVwLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpRUFBQTtBQUFGO0FBSUk7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpRUFBQTtBQUZOIiwiZmlsZSI6InNsZWVwLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLXF1ZXMtY29udGFpbmVyIHtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAuNXMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpob3ZlciB7XG5cbiAgICAuc2luZ2xlLWNoaW9jZS10ZXh0IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgLjVzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    85559: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGFjZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    66866: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    48522: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    81962: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_room_room_module_ts-es5.js.map