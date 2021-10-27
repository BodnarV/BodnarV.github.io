(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core_routes_all_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/routes/all-routes */
      79878);
      /* harmony import */


      var _core_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/layouts/main-layout/main-layout.component */
      46109);

      var routes = [{
        path: "",
        component: _core_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__.MainLayoutComponent,
        children: _core_routes_all_routes__WEBPACK_IMPORTED_MODULE_0__.ALL_ROUTES
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      53040);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'voyyo-web';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/core.module */
      40294);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    2831: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoomsPageName": function RoomsPageName() {
          return (
            /* binding */
            _RoomsPageName
          );
        },

        /* harmony export */
        "CoreRoutes": function CoreRoutes() {
          return (
            /* binding */
            _CoreRoutes
          );
        },

        /* harmony export */
        "LayoutRoutes": function LayoutRoutes() {
          return (
            /* binding */
            _LayoutRoutes
          );
        }
        /* harmony export */

      });

      var _RoomsPageName;

      (function (RoomsPageName) {
        RoomsPageName["FLOOR"] = "floor";
        RoomsPageName["VIEW"] = "view";
        RoomsPageName["BATHE"] = "bathe";
        RoomsPageName["NOISE"] = "noise";
        RoomsPageName["SPACE"] = "space";
        RoomsPageName["SLEEP"] = "sleep";
        RoomsPageName["ROOMS_MAP"] = "rooms-map";
      })(_RoomsPageName || (_RoomsPageName = {}));

      var _CoreRoutes;

      (function (CoreRoutes) {
        CoreRoutes["INTRODUCTION"] = "";
        CoreRoutes["COMPLETED"] = "completed";
        CoreRoutes["ROOM"] = "room";
        CoreRoutes["LINK_NOT_VALID"] = "link";
      })(_CoreRoutes || (_CoreRoutes = {}));

      var _LayoutRoutes;

      (function (LayoutRoutes) {
        LayoutRoutes["HOME"] = "";
        LayoutRoutes["ROOMS"] = "";
      })(_LayoutRoutes || (_LayoutRoutes = {}));

      var someObj = {
        "desktop_maps": {
          "1": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/7_floor.png"
          },
          "2": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/7_floor.png"
          },
          "3": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/7_floor.png"
          },
          "4": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/7_floor.png"
          },
          "5": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/7_floor.png"
          },
          "6": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/7_floor.png"
          },
          "7": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/7_floor.png"
          }
        },
        "mobile_maps": {
          "1": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/101@2x.png"
          },
          "2": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/101@2x.png"
          },
          "3": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/101@2x.png"
          },
          "4": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/101@2x.png"
          },
          "5": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/101@2x.png"
          },
          "6": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/101@2x.png"
          },
          "7": {
            "src": "http://voyyo-app-dev.s3-website.eu-central-1.amazonaws.com/101@2x.png"
          }
        }
      };
      /***/
    },

    /***/
    40294: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _utilities_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utilities/utility.service */
      46824);
      /* harmony import */


      var _guards_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guards/ensure-module-loaded-once.guard */
      22712);
      /* harmony import */


      var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layouts/main-layout/main-layout.component */
      46109);

      var _CoreModule = /*#__PURE__*/function (_guards_ensure_module) {
        _inherits(CoreModule, _guards_ensure_module);

        var _super = _createSuper(CoreModule);

        // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
        function CoreModule(parentModule) {
          _classCallCheck(this, CoreModule);

          return _super.call(this, parentModule);
        }

        return CoreModule;
      }(_guards_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_1__.EnsureModuleLoadedOnceGuard);

      _CoreModule.ctorParameters = function () {
        return [{
          type: _CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf
          }]
        }];
      };

      _CoreModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__.MainLayoutComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [_utilities_utility_service__WEBPACK_IMPORTED_MODULE_0__.UtilityService]
      })], _CoreModule);
      /***/
    },

    /***/
    22712: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnsureModuleLoadedOnceGuard": function EnsureModuleLoadedOnceGuard() {
          return (
            /* binding */
            _EnsureModuleLoadedOnceGuard
          );
        }
        /* harmony export */

      });

      var _EnsureModuleLoadedOnceGuard = function _EnsureModuleLoadedOnceGuard(targetModule) {
        _classCallCheck(this, _EnsureModuleLoadedOnceGuard);

        if (targetModule) {
          throw new Error("".concat(targetModule.constructor.name, " has already been loaded. Import this module in the AppModule only."));
        }
      };
      /***/

    },

    /***/
    46109: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainLayoutComponent": function MainLayoutComponent() {
          return (
            /* binding */
            _MainLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./main-layout.component.html */
      57094);
      /* harmony import */


      var _main_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main-layout.component.scss */
      30372);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MainLayoutComponent = /*#__PURE__*/function () {
        function MainLayoutComponent() {
          _classCallCheck(this, MainLayoutComponent);
        }

        _createClass(MainLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainLayoutComponent;
      }();

      _MainLayoutComponent.ctorParameters = function () {
        return [];
      };

      _MainLayoutComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-main-layout',
        template: _Users_Anonymous_voyyo_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _MainLayoutComponent);
      /***/
    },

    /***/
    79878: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ALL_ROUTES": function ALL_ROUTES() {
          return (
            /* binding */
            _ALL_ROUTES
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_routing_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../configs/routing-config */
      2831);

      var _ALL_ROUTES = [{
        path: _configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutes.HOME,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_rxjs__esm2015_internal_operators_takeUntil_js-src_app_core_guards_animat-e40498"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! home/home.module */
          3467)).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: _configs_routing_config__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutes.ROOMS,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_rxjs__esm2015_internal_operators_takeUntil_js-src_app_core_guards_animat-e40498"), __webpack_require__.e("src_app_room_room_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! room/room.module */
          82036)).then(function (m) {
            return m.RoomModule;
          });
        }
      }];
      /***/
    },

    /***/
    46824: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UtilityService": function UtilityService() {
          return (
            /* binding */
            _UtilityService
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

      var _UtilityService = /*#__PURE__*/function () {
        function UtilityService() {
          _classCallCheck(this, UtilityService);
        }

        _createClass(UtilityService, [{
          key: "formatPriceToNum",
          value: function formatPriceToNum(price) {
            var symbols = price.split('');
            return +symbols.map(function (sym) {
              if (!isNaN(+sym)) {
                return sym;
              }

              return '';
            }).join('');
          }
        }, {
          key: "isObjectEmpty",
          value: function isObjectEmpty(obj) {
            return !Object.keys(obj).length;
          }
        }]);

        return UtilityService;
      }();

      _UtilityService.ctorParameters = function () {
        return [];
      };

      _UtilityService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: "root"
      })], _UtilityService);
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        API: 'http://voyyo-dev-alb-1464336866.eu-central-1.elb.amazonaws.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    75158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    57094: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    53040: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    30372: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map