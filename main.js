(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/appmodule/app.component.html":
/*!**********************************************!*\
  !*** ./src/app/appmodule/app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class='container'>\r\n    <as-split direction=\"horizontal\">\r\n        <as-split-area size=\"50\" >\r\n            <div class='container__header'>\r\n\r\n                <!-- top left tab menu  -->\r\n                <div class=\"tab\">\r\n                    <button class='btn-tab' [class.active]='activeView==\"gallery\"' (click)='updateView(\"gallery\")'>Gallery</button>\r\n                    <button class='btn-tab' [class.active]='activeView==\"publish\"' (click)='updateView(\"publish\")'>Publish</button>\r\n                    <button class='btn-tab' [class.active]='activeView==\"flowchart\"' (click)='updateView(\"flowchart\")'>Flowchart</button>\r\n                    <!--\r\n                    <button class='btn' [class.active]='false' (click)='updateView(\"editor\")'>Procedures</button>\r\n                    -->\r\n                </div>\r\n\r\n                <!-- hidden components (new file, save file, loaf file) for the dropdown menu-->\r\n                <div style=\"display: none;\">\r\n                    <file-new (create)='updateFile($event)'></file-new>\r\n                    <file-save [file]='dataService.file'></file-save>\r\n                    <file-load (loaded)='updateFile($event)'></file-load>        \r\n                </div>\r\n\r\n                <!-- top right dropdown menu -->\r\n                <div class=\"dropmenu\">\r\n                    <!-- execute button -->\r\n                    <div>\r\n                        <execute [flowchart]='dataService.flowchart'></execute>\r\n                    </div>\r\n                    <!-- dropdown menu for new file, save file, loaf file-->\r\n                    <div>\r\n                        <button class='btn' mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                        <mat-menu #menu=\"matMenu\">\r\n                            <button  mat-menu-item onclick=\"document.getElementById('newfile').click();\"\r\n                            title=\"Reset Flowchart to Default\">\r\n                                <mat-icon>rotate_left</mat-icon>\r\n                                <span>Reset</span>\r\n                            </button>\r\n                            <button mat-menu-item onclick=\"document.getElementById('savefile').click();\"\r\n                            title=\"Save Flowchart File to Computer\">\r\n                                <mat-icon>save_alt</mat-icon>\r\n                                <span>Save File</span>\r\n                            </button>\r\n                            <button mat-menu-item onclick=\"document.getElementById('file-input').click();\"\r\n                            title=\"Load Flowchart File from Computer\">\r\n                                <mat-icon>launch</mat-icon>\r\n                                <span>Load File</span>\r\n                            </button>\r\n                        </mat-menu>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n            <!-- viewchild content -->\r\n            <div class='content__panel'>\r\n                <ng-container #vc></ng-container>\r\n            </div>\r\n        </as-split-area>\r\n\r\n        <as-split-area size=\"50\">\r\n            <!-- mViewer panel -->\r\n            <div class='content__viewer' >\r\n                <mviewer [data]='viewerData()' [helpView]='helpView'></mviewer>\r\n            </div>\r\n        </as-split-area>\r\n        \r\n\r\n    </as-split>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/appmodule/app.component.scss":
/*!**********************************************!*\
  !*** ./src/app/appmodule/app.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n  .container h1, .container h2, .container h3, .container h4, .container h5, .container h6, .container p {\n    margin: 0px;\n    padding: 0px; }\n  .container .container__header {\n    flex: 0 1 auto;\n    min-height: 35px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0px 0px 0px 15px;\n    background-color: #ccc;\n    border-bottom: 3px solid #eeeeee;\n    line-height: 35px;\n    font-size: 18px;\n    font-weight: 600;\n    text-align: center;\n    /* tab styling */\n    /* dropdown menu styling */ }\n  .container .container__header .tab {\n      border: 2px;\n      overflow: hidden;\n      background-color: #ccc; }\n  .container .container__header .tab button {\n      display: inline-block;\n      vertical-align: bottom;\n      background-color: inherit;\n      color: #505050;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      padding: 8px 10px;\n      transition: 0.3s;\n      font-size: 14px; }\n  .container .container__header .tab button:hover {\n      color: blue; }\n  .container .container__header .tab button.active {\n      background-color: #ccc;\n      color: #000096;\n      font-weight: 600;\n      border-color: #222 !important; }\n  .container .container__header .dropmenu {\n      display: inline-flex; }\n  .container .container__content {\n    flex-grow: 1;\n    height: 0px;\n    border: 2px solid #3F4651;\n    overflow: auto; }\n  .container .container__footer {\n    text-align: center;\n    font-size: 12px;\n    line-height: 18px;\n    background-color: #3F4651;\n    color: #E7BF00; }\n  .content__panel {\n  background-color: gainsboro;\n  height: 95%;\n  overflow: hidden auto; }\n  .content__viewer {\n  background-color: gainsboro;\n  height: 100%;\n  overflow: auto; }\n  ul.nav {\n  margin: 0px;\n  padding: 0px; }\n  li.link {\n  display: inline;\n  border: 2px solid gray;\n  border-radius: 4px;\n  margin: 5px 5px 0px 0px;\n  padding: 5px;\n  text-transform: uppercase;\n  line-height: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 12px; }\n  li.link:hover {\n  background-color: gray;\n  color: white; }\n  button.btn {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0px 0px 0px 0px;\n  font-size: 12px;\n  line-height: 10px;\n  height: 30px;\n  border: none;\n  border-radius: 4px;\n  background-color: transparent;\n  color: #505050; }\n  button.btn:hover {\n  color: blue; }\n  .active {\n  background-color: #222;\n  color: white;\n  border-color: #222 !important; }\n"

/***/ }),

/***/ "./src/app/appmodule/app.component.ts":
/*!********************************************!*\
  !*** ./src/app/appmodule/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @views */ "./src/app/views/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "./src/app/core/services/index.ts");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngFlowchart_svg_flowchart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngFlowchart-svg/flowchart.component */ "./src/app/ngFlowchart-svg/flowchart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// @ts-ignore
console.stdlog = console.log.bind(console);
// @ts-ignore
console.logs = [];
// @ts-ignore
console.log = function () {
    // @ts-ignore
    console.logs.push(Array.from(arguments));
    // @ts-ignore
    console.stdlog.apply(console, arguments);
};
/*

*/
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, injector, r) {
        this.dataService = dataService;
        this.injector = injector;
        this.r = r;
        this.views = [];
        this.Viewers = {
            'gallery': _views__WEBPACK_IMPORTED_MODULE_1__["ViewGalleryComponent"],
            'publish': _views__WEBPACK_IMPORTED_MODULE_1__["ViewPublishComponent"],
            'flowchart': _ngFlowchart_svg_flowchart_component__WEBPACK_IMPORTED_MODULE_4__["FlowchartComponent"],
            'editor': _views__WEBPACK_IMPORTED_MODULE_1__["ViewEditorComponent"] // src/views/view-editor/
        };
    }
    /*
    @HostListener('window:beforeunload', [ '$event' ])
    beforeUnloadHander(event) {
        event.returnValue = true;
    }
    */
    AppComponent.prototype.ngOnInit = function () {
        this.activeView = 'gallery';
        this.updateView('gallery');
    };
    AppComponent.prototype.updateFile = function (event) {
        this.dataService.file = circular_json__WEBPACK_IMPORTED_MODULE_3__["parse"](event);
        this.updateValue();
    };
    AppComponent.prototype.createView = function (view) {
        var _this = this;
        var component = this.Viewers[view];
        var factory = this.r.resolveComponentFactory(component);
        var componentRef = factory.create(this.injector);
        if (view === 'flowchart') {
            componentRef.instance['switch'].subscribe(function (data) { return _this.updateView(data); });
        }
        else if (view === 'editor') {
            componentRef.instance['helpText'].subscribe(function (data) { return _this.helpView = data; });
        }
        else if (view === 'gallery') {
            componentRef.instance['switch'].subscribe(function (data) { return _this.updateView(data); });
            // componentRef.instance['dataservice'] = this.dataService;
        }
        return componentRef;
    };
    AppComponent.prototype.updateView = function (view) {
        this.activeView = view;
        if (this.views[view] === undefined) {
            this.views[view] = this.createView(view);
        }
        // this.updateValue();
        this.vc.detach();
        this.vc.insert(this.views[view].hostView);
    };
    AppComponent.prototype.updateValue = function () {
        for (var view in this.Viewers) {
            if (!this.views[view]) {
                continue;
            }
            var componentRef = this.views[view];
            if (view === 'flowchart') {
                // componentRef.instance['data'] = this.dataService.flowchart;
            }
            else if (view === 'editor') {
                // componentRef.instance['flowchart'] = this.dataService.flowchart;
                // componentRef.instance['node'] = this.dataService.flowchart.nodes[this.dataService.flowchart.meta.selected_nodes[0]];
            }
            else if (view === 'publish') {
                // componentRef.instance['flowchart'] = this.dataService.flowchart;
            }
        }
    };
    AppComponent.prototype.viewerData = function () {
        var node = this.dataService.flowchart.nodes[this.dataService.flowchart.meta.selected_nodes[0]];
        if (!node) {
            return '';
        }
        if (node.type === 'output') {
            return node.input.value;
        }
        return node.output.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vc', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AppComponent.prototype, "vc", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/appmodule/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/appmodule/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/appmodule/app.module.ts":
/*!*****************************************!*\
  !*** ./src/app/appmodule/app.module.ts ***!
  \*****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/appmodule/app.component.ts");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @views */ "./src/app/views/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngFlowchart_svg_flowchart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ngFlowchart-svg/flowchart.component */ "./src/app/ngFlowchart-svg/flowchart.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AppRoutingModule } from './app-routing.module';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // FormsModule,
                // AppRoutingModule,
                // CoreModule,
                _views__WEBPACK_IMPORTED_MODULE_5__["ViewGalleryModule"],
                _views__WEBPACK_IMPORTED_MODULE_5__["ViewEditorModule"],
                _views__WEBPACK_IMPORTED_MODULE_5__["ViewPublishModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            ],
            entryComponents: [
                _views__WEBPACK_IMPORTED_MODULE_5__["ViewEditorComponent"],
                _views__WEBPACK_IMPORTED_MODULE_5__["ViewPublishComponent"],
                _ngFlowchart_svg_flowchart_component__WEBPACK_IMPORTED_MODULE_8__["FlowchartComponent"],
                _views__WEBPACK_IMPORTED_MODULE_5__["ViewGalleryComponent"],
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/modules/Input.ts":
/*!***************************************!*\
  !*** ./src/app/core/modules/Input.ts ***!
  \***************************************/
/*! exports provided: declare_constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declare_constant", function() { return declare_constant; });
/**
 * Declare a new constant for the input node
 * @summary Declare new constant
 *
 * @param {JSON} __constList__  List of constants to be added.
 * @param {string} const_name  Name of the constant.
 * @param {any} __input__  Value of the constant.
 *
 * @returns Void
 */
function declare_constant(__constList__, const_name, __input__) {
    __constList__[const_name] = __input__;
}


/***/ }),

/***/ "./src/app/core/modules/Model.ts":
/*!***************************************!*\
  !*** ./src/app/core/modules/Model.ts ***!
  \***************************************/
/*! exports provided: __new__, __merge__, __preprocess__, __postprocess__, set, get, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__new__", function() { return __new__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__merge__", function() { return __merge__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__preprocess__", function() { return __preprocess__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__postprocess__", function() { return __postprocess__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var model = /** @class */ (function () {
    function model(data) {
        this._data = [data];
    }
    return model;
}());
/**
 * Create a new model
 * @summary New model
 *
 * @returns {any[]} Empty new model
 */
function __new__() {
    return [];
}
/**
 * Merge two models, first model will be modified
 * @summary Merge two models
 *
 * @param {any[]} model1 First model to be merged, will be modified to become the merged model after execution of the function
 * @param {any[]} model2 Second model to be merged, unchanged after execution of the function
 *
 * @returns {any[]} Merged model
 */
function __merge__(model1, model2) {
    for (var _i = 0, model2_1 = model2; _i < model2_1.length; _i++) {
        var j = model2_1[_i];
        var existing = false;
        for (var _a = 0, model1_1 = model1; _a < model1_1.length; _a++) {
            var i = model1_1[_a];
            if (i.value === j.value) {
                existing = true;
            }
        }
        if (!existing) {
            model1.push(j);
        }
    }
    return model1;
}
function __preprocess__(__model__) {
    return;
}
function __postprocess__(__model__) {
    return;
}
/**
 * Register a value in the model
 * @summary Set a value
 *
 * @test test1
 * @param {any[]} __model__  Model of the node.
 * @param {any} var_value  Value to be set.
 *
 * @returns {number[]} Index of the set value
 */
function set(__model__, var_value) {
    for (var i = 0; i < __model__.length; i++) {
        if (__model__[i]['value'] === var_value) {
            return [i];
        }
    }
    var obj = {
        'value': var_value,
        'properties': {}
    };
    __model__.push(obj);
    return [__model__.length - 1];
}
/**
 * Get a value from the model with a list of indices
 * @summary Get a specific value
 *
 * @param {any[]} __model__  Model of the node.
 * @param {number[]}}indices  List of indices of the values to be retrieved from the model.
 *
 * @returns Value
 */
function get(__model__, indices) {
    var result = [];
    for (var _i = 0, indices_1 = indices; _i < indices_1.length; _i++) {
        var i = indices_1[_i];
        if (i > __model__.length || i < 0) {
            continue;
        }
        result.push(__model__[i]);
    }
    return result;
}
/**
 * Remove certain value from the model with a list of indices
 * @summary Remove a specific value
 *
 * @param {any[]} __model__  Model of the node.
 * @param {number[]} indices  List of indices of the values to be removed from the model.
 */
function remove(__model__, indices) {
    indices.sort(function (a, b) { return b - a; });
    indices.map(function (index) {
        if (index > __model__.length) {
            return;
        }
        __model__.splice(index, 1);
    });
}


/***/ }),

/***/ "./src/app/core/modules/Output.ts":
/*!****************************************!*\
  !*** ./src/app/core/modules/Output.ts ***!
  \****************************************/
/*! exports provided: return_value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "return_value", function() { return return_value; });
/**
 * Return certain value from the model for the flowchart's end node
 * @summary Return a specific value
 * @param {any[]} __model__  Model of the node.
 * @param {number} index  Index of the value to be returned.
 * @returns {any} Value
 */
function return_value(__model__, index) {
    if (index > __model__.length) {
        return __model__;
    }
    return __model__[index].value;
}


/***/ }),

/***/ "./src/app/core/modules/Query.ts":
/*!***************************************!*\
  !*** ./src/app/core/modules/Query.ts ***!
  \***************************************/
/*! exports provided: set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/**
 * Assign properties to a certain value in the model
 * @summary Assign a property
 * @param {any[]} __model__  Model of the node.
 * @param {number[]} indices  Indices of the value to set properties with.
 * @param {string} statement  Properties to be added to the value.
 * @returns Void
 */
function set(__model__, indices, statement) {
    var properties = statement.split('&');
    properties = properties.map(function (prop) {
        var property = prop.trim().substring(1).split('=');
        property[0] = property[0].trim();
        property[1] = property[1].trim();
        property[1] = property[1].substring(1, property[1].length - 1).trim();
        return property;
    });
    for (var _i = 0, indices_1 = indices; _i < indices_1.length; _i++) {
        var index = indices_1[_i];
        if (index > __model__.length) {
            return;
        }
        for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
            var property = properties_1[_a];
            __model__[index]['properties'][property[0]] = property[1];
        }
    }
}
/**
 * Get a list of indices of the values that have certain properties
 * @summary Get indices of values
 * @param {any[]} __model__  Model of the node.
 * @param {string} statement  Properties to be added to the value.
 * @returns {number[]} List of indices
 */
function get(__model__, statement) {
    var property = statement.substring(1);
    if (property.indexOf('==') !== -1) {
        property = property.split('==');
        property[0] = property[0].trim();
        property[1] = property[1].trim();
        property[1] = property[1].substring(1, property[1].length - 1).trim();
        var result = [];
        for (var i = 0; i < __model__.length; i++) {
            if (__model__[i]['properties'][property[0]] === property[1]) {
                result.push(i);
            }
        }
        return result;
    }
    else if (property.indexOf('!=') !== -1) {
        property = property.split('!=');
        property[0] = property[0].trim();
        property[1] = property[1].trim();
        property[1] = property[1].substring(1, property[1].length - 1).trim();
        var result = [];
        for (var i = 0; i < __model__.length; i++) {
            if (__model__[i]['properties'][property[0]] !== property[1]) {
                result.push(i);
            }
        }
        return result;
    }
}


/***/ }),

/***/ "./src/app/core/modules/_parameterTypes.ts":
/*!*************************************************!*\
  !*** ./src/app/core/modules/_parameterTypes.ts ***!
  \*************************************************/
/*! exports provided: _parameterTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_parameterTypes", function() { return _parameterTypes; });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/app/core/modules/Model.ts");

var _parameterTypes = {
    constList: '__constList__',
    model: '__model__',
    input: '__input__',
    new: 'Model.__new__',
    newFn: _Model__WEBPACK_IMPORTED_MODULE_0__["__new__"],
    merge: 'Model.__merge__',
    mergeFn: _Model__WEBPACK_IMPORTED_MODULE_0__["__merge__"],
    preprocess: 'Model.__preprocess__',
    postprocess: 'Model.__postprocess__'
};


/***/ }),

/***/ "./src/app/core/modules/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/modules/index.ts ***!
  \***************************************/
/*! exports provided: Model, Input, Query, Output, _parameterTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/app/core/modules/Model.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _Model__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./src/app/core/modules/Input.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Query */ "./src/app/core/modules/Query.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _Query__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _Output__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Output */ "./src/app/core/modules/Output.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return _Output__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _parameterTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_parameterTypes */ "./src/app/core/modules/_parameterTypes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_parameterTypes", function() { return _parameterTypes__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"]; });












/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flowchart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/flowchart */ "./src/app/shared/models/flowchart/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService_1 = DataService;
    Object.defineProperty(DataService.prototype, "file", {
        get: function () { return DataService_1._data; },
        set: function (data) {
            DataService_1._data = {
                name: data.name,
                author: data.author,
                flowchart: data.flowchart,
                last_updated: data.last_updated,
                version: data.version
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "flowchart", {
        get: function () { return DataService_1._data.flowchart; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "node", {
        get: function () { return DataService_1._data.flowchart.nodes[DataService_1._data.flowchart.meta.selected_nodes[0]]; },
        enumerable: true,
        configurable: true
    });
    var DataService_1;
    DataService._data = {
        name: 'default_file',
        author: 'new_user',
        last_updated: new Date(),
        version: 1,
        flowchart: _models_flowchart__WEBPACK_IMPORTED_MODULE_1__["FlowchartUtils"].newflowchart()
    };
    DataService._selected = 0;
    DataService = DataService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: DataService, ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]; });

/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewer.service */ "./src/app/core/services/viewer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return _viewer_service__WEBPACK_IMPORTED_MODULE_1__["ViewerService"]; });





/***/ }),

/***/ "./src/app/core/services/viewer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/viewer.service.ts ***!
  \*************************************************/
/*! exports provided: ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return ViewerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ViewerService = /** @class */ (function () {
    function ViewerService() {
        this.contextReceivedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.contextReceived$ = this.contextReceivedSource.asObservable();
    }
    ViewerService.prototype.receiveContext = function (componentFactoryResolver, injector) {
        this.contextReceivedSource.next({ resolver: componentFactoryResolver, injector: injector });
    };
    ViewerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ViewerService);
    return ViewerService;
}());



/***/ }),

/***/ "./src/app/mViewer/mobius-viewer.component.html":
/*!******************************************************!*\
  !*** ./src/app/mViewer/mobius-viewer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='viewer-container'>  \r\n    <div class='container__header'>\r\n        <div class=\"tab\">\r\n            <button class='btn-tab' \r\n            [class.active]='view.name == activeView.name'\r\n            *ngFor='let view of Viewers;' \r\n            (click)='updateView(view)'>\r\n            {{view.name}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class='content__panel'>\r\n        <ng-container #vc></ng-container>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mViewer/mobius-viewer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/mViewer/mobius-viewer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".viewer-container {\n  display: block;\n  height: 100%;\n  overflow: hidden; }\n\n.container__header {\n  flex: 0 1 auto;\n  height: 35px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0px 0px 0px 15px;\n  background-color: #ccc;\n  border-bottom: 3px solid #eeeeee;\n  line-height: 35px;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center; }\n\n.content__panel {\n  background-color: gainsboro;\n  width: 97%;\n  height: 93%;\n  overflow: auto; }\n\nbutton.btn {\n  margin: 10px;\n  font-size: 14px;\n  line-height: 18px;\n  border: 2px solid gray;\n  border-radius: 4px;\n  padding: 2px 10px;\n  background-color: transparent;\n  color: #505050; }\n\nbutton.btn:hover {\n  color: blue; }\n\n/* tab styling */\n\n.tab {\n  border: 2px;\n  overflow: hidden;\n  background-color: #ccc; }\n\n.tab button {\n  display: inline-block;\n  vertical-align: bottom;\n  background-color: inherit;\n  color: #505050;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 8px 10px;\n  transition: 0.3s;\n  font-size: 14px; }\n\n.tab button:hover {\n  color: blue; }\n\n.tab button.active {\n  background-color: #ccc;\n  color: #000096;\n  font-weight: 600;\n  border-color: #222 !important; }\n"

/***/ }),

/***/ "./src/app/mViewer/mobius-viewer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mViewer/mobius-viewer.component.ts ***!
  \****************************************************/
/*! exports provided: ViewerContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerContainerComponent", function() { return ViewerContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewers_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewers.config */ "./src/app/mViewer/viewers.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewerContainerComponent = /** @class */ (function () {
    function ViewerContainerComponent(injector, r) {
        this.injector = injector;
        this.r = r;
        this.views = [];
        this.Viewers = _viewers_config__WEBPACK_IMPORTED_MODULE_1__["Viewers"];
    }
    ViewerContainerComponent.prototype.ngOnInit = function () {
        this.activeView = this.Viewers[0];
        this.updateView(this.activeView);
    };
    ViewerContainerComponent.prototype.ngOnDestroy = function () {
        console.log('onDestroy');
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            view.destroy();
        }
    };
    ViewerContainerComponent.prototype.ngOnChanges = function () {
        if (this.currentHelpView !== this.helpView) {
            var view = void 0;
            for (var _i = 0, _a = this.Viewers; _i < _a.length; _i++) {
                var v = _a[_i];
                if (v.name === 'Help') {
                    view = v;
                }
            }
            this.currentHelpView = this.helpView;
            this.updateView(view);
        }
        else {
            this.updateValue();
        }
    };
    ViewerContainerComponent.prototype.createView = function (view) {
        var component = view.component;
        var factory = this.r.resolveComponentFactory(component);
        var componentRef = factory.create(this.injector);
        /*
        if (view.name != 'Console'){
            componentRef.instance["data"] = this.data;
        }
        */
        return componentRef;
    };
    ViewerContainerComponent.prototype.updateView = function (view) {
        this.activeView = view;
        if (this.views[this.activeView.name] === undefined) {
            this.views[this.activeView.name] = this.createView(view);
        }
        this.updateValue();
        this.vc.detach();
        this.vc.insert(this.views[this.activeView.name].hostView);
    };
    ViewerContainerComponent.prototype.updateValue = function () {
        try {
            var componentRef = this.views[this.activeView.name];
            if (this.activeView.name === 'Help') {
                componentRef.instance['output'] = this.currentHelpView;
            }
            else if (this.activeView.name !== 'Console') {
                componentRef.instance['data'] = this.data;
            }
        }
        catch (ex) {
            // console.log(`Active View not defined`);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vc', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], ViewerContainerComponent.prototype, "vc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewerContainerComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewerContainerComponent.prototype, "helpView", void 0);
    ViewerContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'mviewer',
            template: __webpack_require__(/*! ./mobius-viewer.component.html */ "./src/app/mViewer/mobius-viewer.component.html"),
            styles: [__webpack_require__(/*! ./mobius-viewer.component.scss */ "./src/app/mViewer/mobius-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], ViewerContainerComponent);
    return ViewerContainerComponent;
}());



/***/ }),

/***/ "./src/app/mViewer/mobius-viewer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mViewer/mobius-viewer.module.ts ***!
  \*************************************************/
/*! exports provided: MobiusViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobiusViewerModule", function() { return MobiusViewerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mobius_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobius-viewer.component */ "./src/app/mViewer/mobius-viewer.component.ts");
/* harmony import */ var _viewers_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewers.config */ "./src/app/mViewer/viewers.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MobiusViewerModule = /** @class */ (function () {
    function MobiusViewerModule() {
    }
    MobiusViewerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _mobius_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ViewerContainerComponent"]
            ].concat(_viewers_config__WEBPACK_IMPORTED_MODULE_4__["VIEWER_ARR"]),
            exports: [_mobius_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ViewerContainerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            entryComponents: _viewers_config__WEBPACK_IMPORTED_MODULE_4__["VIEWER_ARR"].slice(),
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], MobiusViewerModule);
    return MobiusViewerModule;
}());



/***/ }),

/***/ "./src/app/mViewer/viewers.config.ts":
/*!*******************************************!*\
  !*** ./src/app/mViewer/viewers.config.ts ***!
  \*******************************************/
/*! exports provided: VIEWER_ARR, Viewers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWER_ARR", function() { return VIEWER_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewers", function() { return Viewers; });
/* harmony import */ var _viewers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewers */ "./src/app/mViewer/viewers/index.ts");
/* harmony import */ var _viewers_console_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewers/console-viewer.component */ "./src/app/mViewer/viewers/console-viewer.component.ts");
/* harmony import */ var _viewers_procedure_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewers/procedure-help.component */ "./src/app/mViewer/viewers/procedure-help.component.ts");
// Step-1: Add new ViewerComponet here



var VIEWER_ARR = [
    _viewers__WEBPACK_IMPORTED_MODULE_0__["TextViewerComponent"],
    _viewers_console_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ConsoleViewerComponent"],
    _viewers_procedure_help_component__WEBPACK_IMPORTED_MODULE_2__["ProcedureHelpComponent"],
];
var Viewers = [
    { name: 'Summary', icon: undefined, component: _viewers__WEBPACK_IMPORTED_MODULE_0__["TextViewerComponent"] },
    { name: 'Console', icon: undefined, component: _viewers_console_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ConsoleViewerComponent"] },
    { name: 'Help', icon: undefined, component: _viewers_procedure_help_component__WEBPACK_IMPORTED_MODULE_2__["ProcedureHelpComponent"] },
];


/***/ }),

/***/ "./src/app/mViewer/viewers/console-viewer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/mViewer/viewers/console-viewer.component.ts ***!
  \*************************************************************/
/*! exports provided: ConsoleViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleViewerComponent", function() { return ConsoleViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsoleViewerComponent = /** @class */ (function () {
    function ConsoleViewerComponent() {
    }
    ConsoleViewerComponent.prototype.ngOnInit = function () {
        // @ts-ignore
        this.text = console.logs.join('\n---------------------------------------------------------\n');
    };
    ConsoleViewerComponent.prototype.ngDoCheck = function () {
        // @ts-ignore
        this.text = console.logs.join('\n---------------------------------------------------------\n');
    };
    ConsoleViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'console-viewer',
            template: "<textarea>{{ text || \"\" }}</textarea>",
            styles: [__webpack_require__(/*! ./general-viewer.scss */ "./src/app/mViewer/viewers/general-viewer.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsoleViewerComponent);
    return ConsoleViewerComponent;
}());



/***/ }),

/***/ "./src/app/mViewer/viewers/general-viewer.scss":
/*!*****************************************************!*\
  !*** ./src/app/mViewer/viewers/general-viewer.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%; }\n\ntextarea {\n  height: 99%;\n  width: 99%;\n  overflow: auto;\n  resize: none;\n  font-family: sans-serif;\n  background-color: gainsboro;\n  color: #505050;\n  border: none; }\n\ndiv {\n  font-family: sans-serif;\n  color: #505050;\n  width: 100%;\n  padding-left: 10px; }\n\nh5 {\n  font-weight: 700;\n  font-size: 12px; }\n\n.funcDesc {\n  font-weight: 600; }\n\n.paramP {\n  padding-left: 5px; }\n\nspan {\n  font-weight: 550;\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/mViewer/viewers/index.ts":
/*!******************************************!*\
  !*** ./src/app/mViewer/viewers/index.ts ***!
  \******************************************/
/*! exports provided: TextViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewer_text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer-text.component */ "./src/app/mViewer/viewers/viewer-text.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextViewerComponent", function() { return _viewer_text_component__WEBPACK_IMPORTED_MODULE_0__["TextViewerComponent"]; });


// export * from './template.component';


/***/ }),

/***/ "./src/app/mViewer/viewers/procedure-help.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/mViewer/viewers/procedure-help.component.ts ***!
  \*************************************************************/
/*! exports provided: ProcedureHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureHelpComponent", function() { return ProcedureHelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/decorators */ "./src/app/shared/decorators/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcedureHelpComponent = /** @class */ (function () {
    function ProcedureHelpComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProcedureHelpComponent.prototype, "output", void 0);
    ProcedureHelpComponent = __decorate([
        _shared_decorators__WEBPACK_IMPORTED_MODULE_1__["ModuleDocAware"],
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'procedure-help',
            template: "\n  <div *ngIf='output'>\n    <h2>{{output.name}}</h2>\n    <h4>Module: <span>{{output.module}}</span></h4>\n    <h5><span>Description:</span></h5>\n    <p>{{output.description}}</p>\n    <h5 *ngIf='output.parameters?.length > 0'><span>Parameters: </span></h5>\n    <p class='paramP' *ngFor='let param of output.parameters'><span>{{param.name}} - </span>{{param.description}}</p>\n    <h5 *ngIf='output.returns'>Returns:</h5>\n    <p *ngIf='output.returns'>{{output.returns}}</p>\n  </div>\n\n\n  ",
            styles: [__webpack_require__(/*! ./general-viewer.scss */ "./src/app/mViewer/viewers/general-viewer.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcedureHelpComponent);
    return ProcedureHelpComponent;
}());



/***/ }),

/***/ "./src/app/mViewer/viewers/viewer-text.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mViewer/viewers/viewer-text.component.ts ***!
  \**********************************************************/
/*! exports provided: TextViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextViewerComponent", function() { return TextViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextViewerComponent = /** @class */ (function () {
    function TextViewerComponent() {
        // console.log(`Text Viewer Created`);
    }
    TextViewerComponent.prototype.ngOnInit = function () {
        if (typeof this.data === 'number' || this.data === undefined) {
            this.output = this.data;
        }
        else if (typeof this.data === 'string') {
            this.output = '"' + this.data + '"';
        }
        else if (this.data.constructor === [].constructor) {
            this.output = JSON.stringify(this.data);
        }
        else if (this.data.constructor === {}.constructor) {
            this.output = JSON.stringify(this.data);
        }
        else {
            console.log('Unknown output type:', this.data);
            this.output = this.data;
        }
    };
    TextViewerComponent.prototype.ngDoCheck = function () {
        if (typeof this.data === 'number' || this.data === undefined) {
            this.output = this.data;
        }
        else if (typeof this.data === 'string') {
            this.output = '"' + this.data + '"';
        }
        else if (this.data.constructor === [].constructor) {
            this.output = JSON.stringify(this.data);
        }
        else if (this.data.constructor === {}.constructor) {
            this.output = JSON.stringify(this.data);
        }
        else {
            console.log('Unknown output type:', this.data);
            this.output = this.data;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TextViewerComponent.prototype, "data", void 0);
    TextViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-viewer',
            template: "<textarea>{{ output || \"no-value\" }}</textarea>",
            styles: [__webpack_require__(/*! ./general-viewer.scss */ "./src/app/mViewer/viewers/general-viewer.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextViewerComponent);
    return TextViewerComponent;
}());



/***/ }),

/***/ "./src/app/ngFlowchart-svg/edge/edge.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ngFlowchart-svg/edge/edge.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--the main line-->\r\n<svg:polyline \r\nid=\"main-edge\" \r\nclass = \"edge\" \r\n[class.selected] = \"edge.selected\"\r\n[attr.points] = \"(edge.source.parentNode.position.x + outputOffset[0]) + ',' +\r\n                    (edge.source.parentNode.position.y + outputOffset[1]+ 8) + ' ' +\r\n\r\n                    (edge.source.parentNode.position.x + outputOffset[0]) + ',' +\r\n                    (edge.source.parentNode.position.y + outputOffset[1] + 16) + ' ' +\r\n\r\n                    (edge.target.parentNode.position.x + inputOffset[0]) + ',' +\r\n                    (edge.target.parentNode.position.y + inputOffset[1] - 27) + ' ' +\r\n\r\n                    (edge.target.parentNode.position.x + inputOffset[0]) + ',' +\r\n                    (edge.target.parentNode.position.y + inputOffset[1] - 22)\" \r\n/>\r\n\r\n<!--a wider invisible line to make the wire easier to click-->\r\n<svg:polyline \r\nid=\"invisible-edge\" \r\nclass = \"inviEdge\" \r\n[attr.points] = \"(edge.source.parentNode.position.x + outputOffset[0]) + ',' +\r\n                    (edge.source.parentNode.position.y + outputOffset[1]+ 15) + ' ' +\r\n\r\n                    (edge.source.parentNode.position.x + outputOffset[0]) + ',' +\r\n                    (edge.source.parentNode.position.y + outputOffset[1] + 17) + ' ' +\r\n\r\n                    (edge.target.parentNode.position.x + inputOffset[0]) + ',' +\r\n                    (edge.target.parentNode.position.y + inputOffset[1] - 27) + ' ' +\r\n\r\n                    (edge.target.parentNode.position.x + inputOffset[0]) + ',' +\r\n                    (edge.target.parentNode.position.y + inputOffset[1] - 12)\" \r\n(click)='select($event)'/>\r\n    \r\n\r\n"

/***/ }),

/***/ "./src/app/ngFlowchart-svg/edge/edge.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ngFlowchart-svg/edge/edge.component.ts ***!
  \********************************************************/
/*! exports provided: EdgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeComponent", function() { return EdgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EdgeComponent = /** @class */ (function () {
    function EdgeComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // select a wire
    EdgeComponent.prototype.select = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.edge.selected) {
            this.selected.emit(event.ctrlKey);
        }
        else {
            if (event.ctrlKey) {
                this.selected.emit('ctrl');
            }
            else {
                this.selected.emit('single');
            }
        }
    };
    // delete a wire
    EdgeComponent.prototype.deleteEdge = function () {
        this.delete.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EdgeComponent.prototype, "canvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EdgeComponent.prototype, "edge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EdgeComponent.prototype, "inputOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EdgeComponent.prototype, "outputOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EdgeComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EdgeComponent.prototype, "selected", void 0);
    EdgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[edge]',
            template: __webpack_require__(/*! ./edge.component.html */ "./src/app/ngFlowchart-svg/edge/edge.component.html"),
            styles: ["\n    .edge{\n        fill: none;\n        stroke: rgb(80, 80, 80);\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 2px;\n        opacity: 1;\n        pointer-events: stroke;\n        marker-end: url(#arrow);\n    }\n    .inviEdge{\n        fill: none;\n        stroke: gray;\n        stroke-width: 30px;\n        opacity: 0;\n        pointer-events: stroke;\n    }\n    .selected{\n        stroke: rgb(0, 0, 150);\n        opacity: 1;\n        marker-end: url(#arrow_selected);\n\n    }\n  "]
        })
    ], EdgeComponent);
    return EdgeComponent;
}());



/***/ }),

/***/ "./src/app/ngFlowchart-svg/flowchart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ngFlowchart-svg/flowchart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = 'flowchart-main-container' class='container'>\r\n    <!--\r\n    -->\r\n\r\n    <!-- svg component -->\r\n    <svg id=\"svg-canvas\" class = \"svgCanvas\" \r\n    [attr.viewBox]=\"viewbox\"\r\n    (mouseenter)='activateKeyEvent()'\r\n    (mouseleave)='deactivateKeyEvent()'\r\n    (mousedown)='panStart($event)'\r\n    (mousemove)='handleMouseMove($event)'  \r\n    (mouseup)='handleMouseUp($event)'\r\n    (wheel)='scale($event)'\r\n    >\r\n        <!-- definitions for svg: grid patterns, arrow head for connecting wire-->\r\n        <defs>\r\n            <!-- grid pattern -->\r\n            <pattern id=\"smallGrid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\r\n              <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"gray\" stroke-width=\"0.5\"/>\r\n            </pattern>\r\n            <pattern id=\"grid\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\">\r\n              <rect width=\"100\" height=\"100\" fill=\"url(#smallGrid)\"/>\r\n              <path d=\"M 100 0 L 0 0 0 100\" fill=\"none\" stroke=\"gray\" stroke-width=\"1\"/>\r\n            </pattern>\r\n\r\n            <!-- arrow head -->\r\n            <marker id=\"arrow\" markerWidth=\"30\" markerHeight=\"30\" refX=\"0\" refY=\"4\" orient=\"auto\" markerUnits=\"strokeWidth\" viewBox=\"0 0 40 40\">\r\n              <path d=\"M0,0 L0,8 L9,4 z\" stroke=\"rgb(80, 80, 80)\" fill=\"transparent\" />\r\n            </marker>\r\n            <marker id=\"arrow_selected\" markerWidth=\"30\" markerHeight=\"30\" refX=\"0\" refY=\"4\" orient=\"auto\" markerUnits=\"strokeWidth\" viewBox=\"0 0 40 40\">\r\n                <path d=\"M0,0 L0,8 L9,4 z\" stroke=\"rgb(0, 0, 150)\" fill=\"transparent\"  />\r\n            </marker>\r\n        </defs>\r\n\r\n        <!-- svg frame-->\r\n        <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\r\n                  \r\n\r\n        <!-- wires => edge.component -->\r\n        <g edge *ngFor=\"let edge of dataService.flowchart.edges; let edge_index = index\" \r\n        [edge]='edge'\r\n        [inputOffset]='inputOffset'\r\n        [outputOffset]='outputOffset'\r\n        (selected)='selectEdge($event, edge_index)'\r\n        />\r\n\r\n        <!-- temporary wire while dragging port, default position to <(0,0),(0,0)>, modified when a port is being dragged -->\r\n        <line id=\"temporary-wire\" class=\"temp-wire\" x1=\"0\" y1='0' x2='0' y2='0'></line>\r\n\r\n        <!-- nodes => node.component -->\r\n        <g node *ngFor=\"let node of dataService.flowchart.nodes; let node_index = index\" \r\n        id='flw_node_{{node_index}}'\r\n        [node]='node' \r\n        [selected]='isSelected(node_index)'\r\n        [inputOffset]='inputOffset'\r\n        [outputOffset]='outputOffset'\r\n        (action)='nodeAction($event, node_index)'\r\n        />\r\n    </svg>\r\n\r\n    <!-- 3 top left buttons of the svg: add Node, delete Node and delete Wire -->\r\n    <div class='button-row'>\r\n        <button mat-icon-button disableRipple='true' (click)='addNode()' title=\"Add Node\">\r\n        <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button disableRipple='true' (click)='deleteSelectedNodes()' title=\"Delete Selected Node\">\r\n        <mat-icon>remove</mat-icon>\r\n        </button>\r\n        <button mat-icon-button disableRipple='true' (click)='deleteSelectedEdges()' title=\"Delete Selected Wires\">\r\n        <mat-icon>link_off</mat-icon>\r\n        </button>\r\n    </div>\r\n\r\n    <!-- focus on flowchart button on the top right of the svg -->\r\n    <button class='resetViewer-button' mat-icon-button disableRipple='true' (click)='focusFlowchart()' title=\"Zoom to Fit\">\r\n        <mat-icon>control_camera</mat-icon>\r\n    </button>\r\n    \r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ngFlowchart-svg/flowchart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ngFlowchart-svg/flowchart.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /*     width: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n    display: flex; \r\n    flex-direction: row; \r\n    justify-content: space-between;\r\n\r\n    position: relative;\r\n    font-size: 14px; \r\n    font-weight: 600; \r\n    line-height: $header-height;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1.5px;\r\n    height: $header-height;\r\n\r\n    color: #ADADAD;\r\n\r\n    .btn-group{\r\n        height: $header-height; \r\n\r\n        button{\r\n            width: 0.9*$header-height; \r\n            height: 0.9*$header-height; \r\n            margin: 0px;\r\n            border: 1px solid #B4B1B1;\r\n            box-shadow: none;\r\n\r\n            &:focus{\r\n                \r\n            }\r\n        }\r\n        \r\n    }\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n    &:focus{\r\n        \r\n    }\r\n} */ }\n\n.viewer .container {\n    display: flex;\n    flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.container .svgCanvas .temp-wire {\n    stroke: #505050;\n    stroke-width: 2px;\n    stroke-dasharray: 10 15;\n    opacity: 0.5; }\n\n.transform--container {\n  position: absolute;\n  width: 100%;\n  transition: -webkit-transform 0.1s;\n  transition: transform 0.1s;\n  transition: transform 0.1s, -webkit-transform 0.1s; }\n\nsplit-area {\n  overflow: auto !important; }\n\ninput {\n  border: none; }\n\ninput:focus {\n  border-bottom: 1px dashed gray; }\n\n#flowchart__name {\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 28px;\n  font-weight: bold;\n  color: #8AA8C0; }\n\n.button-row {\n  position: absolute;\n  top: 0px;\n  left: 10px; }\n\n.button-row button {\n    color: #505050;\n    width: 28px; }\n\n.resetViewer-button {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  color: #505050; }\n\n.viewer {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-image: repeating-linear-gradient(0deg, transparent, transparent 70px, #F1F1F1 70px, #F1F1F1 71px), repeating-linear-gradient(-90deg, transparent, transparent 70px, #F1F1F1 70px, #F1F1F1 71px);\n  background-size: 71px 71px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px; }\n\n.viewer .container {\n    position: absolute;\n    height: 100%;\n    overflow: hidden; }\n\n.viewer .container .disabled {\n      color: #8AA8C0; }\n\n.viewer .container .disabled:hover {\n        color: #8AA8C0 !important; }\n\n.viewer .container .sidebar {\n      font-size: 12px;\n      background-color: #F1F1F1;\n      color: #395D73;\n      white-space: nowrap;\n      overflow-x: hidden !important; }\n\n.viewer .container .sidebar section {\n        padding-left: 15px;\n        padding-bottom: 5px;\n        padding-top: 5px;\n        border-bottom: 1px solid #8AA8C0; }\n\n.viewer .container .sidebar section div {\n          cursor: pointer; }\n\n.viewer .container .sidebar section div:hover {\n            color: #F0BFA0; }\n\n.viewer .content-wrapper {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    -webkit-transform-origin: top left;\n            transform-origin: top left; }\n\n.viewer .info-container {\n    padding: 0px 30px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n\n.viewer .info-container .info {\n      display: flex;\n      flex-direction: column; }\n\n.viewer .info-container .info .label {\n        font-size: 12px;\n        font-weight: 100;\n        color: #F07A79; }\n\n.viewer .info-container .info .value {\n        color: #395D73;\n        font-size: 11px;\n        font-weight: 600; }\n\n.viewer .info-container .info .action {\n        cursor: pointer;\n        font-size: 11px;\n        color: #8AA8C0; }\n\n.viewer .graph-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    -webkit-transform-origin: top left;\n            transform-origin: top left; }\n\n.viewer .graph-container #graph-edges {\n      background-color: transparent;\n      z-index: 1000; }\n\n.viewer .graph-container #graph-edges #temporary-edge .hidden {\n        display: none; }\n\n.viewer .graph-container #graph-nodes {\n      background-color: transparent;\n      overflow: hidden;\n      z-index: 1000; }\n\n.viewer .info-container {\n    position: absolute;\n    right: 0;\n    bottom: 0; }\n\n.viewer .info-container .label, .viewer .info-container .value {\n      margin-right: 5px;\n      font-weight: normal !important; }\n\n.viewer .node-container {\n    position: relative; }\n\n.viewer .node-container .node {\n      position: absolute;\n      -webkit-transform-origin: top left;\n              transform-origin: top left;\n      z-index: 3;\n      margin: 0px;\n      color: #395D73; }\n\n.viewer .node-container .node.hidden {\n        display: none; }\n\n.viewer .node-container .node .btn-container {\n        position: absolute;\n        right: -30px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        height: 100px; }\n\n.viewer .node-container .node .btn-container .btn-group {\n          position: relative;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          background: none; }\n\n.viewer .node-container .node .btn-container .btn-group .action-button {\n            position: relative;\n            width: 25px;\n            height: 24px;\n            cursor: pointer;\n            font-size: 9px;\n            text-align: center; }\n\n.viewer .node-container .node .btn-container .btn-group .action-button .material-icons {\n              font-size: 18px;\n              line-height: 24px;\n              color: #8AA8C0; }\n\n.viewer .node-container .node .btn-container .btn-group .action-button:hover {\n              color: white; }\n\n.viewer .node-container .node .btn-container .btn-group .action-button:hover .mat-icon {\n                color: #F0BFA0; }\n\n.viewer .node-container .node .node-body {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        position: relative;\n        min-height: 30px;\n        min-width: 70px;\n        width: auto;\n        border: 1px solid #395D73;\n        background-color: rgba(255, 255, 255, 0.7);\n        cursor: move; }\n\n.viewer .node-container .node .node-body.disabled {\n          opacity: 0.4; }\n\n.viewer .node-container .node .node-body.selected {\n          border-color: green; }\n\n.viewer .node-container .node .node-body.library {\n          border-color: #395D73;\n          border-style: solid; }\n\n.viewer .node-container .node .node-body.error {\n          background-color: #E94858; }\n\n.viewer .node-container .node .node-body.function {\n          background-color: yellow;\n          border: 1px dashed green; }\n\n.viewer .node-container .node .node-body .node-name {\n          font-family: sans-serif;\n          font-size: 12px;\n          border-bottom: 1px solid #395D73;\n          text-align: center;\n          background-color: #F1F1F1; }\n\n.viewer .node-container .node .node-body .node-name input {\n            background-color: inherit;\n            border: 0px;\n            color: #395D73;\n            text-align: center; }\n\n.viewer .node-container .node .node-body .node-name.selected {\n            background-color: #8AA8C0; }\n\n.viewer .node-container .node .node-body .node-name.selected input {\n              color: white;\n              font-weight: bold; }\n\n.viewer .node-container .node .node-body .node-name.selected input:focus {\n                color: #395D73;\n                background-color: #F0BFA0; }\n\n.viewer .node-container .node .node-body .port-container {\n          display: flex;\n          flex-direction: column;\n          margin-top: 10px;\n          margin-bottom: 10px; }\n\n.viewer .node-container .node .node-body .port-container .divider {\n            height: 2px;\n            width: 100%;\n            background-color: #8AA8C0; }\n\n.viewer .node-container .node .node-body .port-container .port {\n            display: flex;\n            flex-direction: row;\n            margin: 5px 0px; }\n\n.viewer .node-container .node .node-body .port-container .port.hidden {\n              display: none; }\n\n.viewer .node-container .node .node-body .port-container .port .port-grip {\n              width: 15px;\n              height: 15px;\n              border-radius: 50%;\n              background-color: #F1F1F1;\n              border: 1px solid #395D73;\n              cursor: pointer; }\n\n.viewer .node-container .node .node-body .port-container .port .port-grip.isFunction {\n                border-style: dashed;\n                background-color: gray;\n                border-radius: 0px; }\n\n.viewer .node-container .node .node-body .port-container .port .port-grip.selected {\n                border: 2px solid #8AA8C0;\n                background-color: #F0BFA0; }\n\n.viewer .node-container .node .node-body .port-container .port .port-grip:hover {\n                background-color: #F0BFA0; }\n\n.viewer .node-container .node .node-body .port-container .port .port-name {\n              font-size: 12px;\n              margin: 0px 5px; }\n\n.viewer .node-container .node .node-body .port-container .port .port-name.isFunction {\n                color: black;\n                font-size: 9.6px; }\n\n.viewer .node-container .node .node-body .port-container .port.input {\n              justify-content: flex-start;\n              margin-left: -7.5px; }\n\n.viewer .node-container .node .node-body .port-container .port.output {\n              justify-content: flex-end;\n              margin-right: -7.5px; }\n\n.viewer .node-container .node:active {\n        cursor: none; }\n"

/***/ }),

/***/ "./src/app/ngFlowchart-svg/flowchart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ngFlowchart-svg/flowchart.component.ts ***!
  \********************************************************/
/*! exports provided: FlowchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowchartComponent", function() { return FlowchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/node */ "./src/app/shared/models/node/index.ts");
/* harmony import */ var _node_node_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node/node.actions */ "./src/app/ngFlowchart-svg/node/node.actions.ts");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// constant for the size of the svg canvas viewbox
var canvasSize = 1500;
var FlowchartComponent = /** @class */ (function () {
    function FlowchartComponent(dataService) {
        this.dataService = dataService;
        this.switch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewbox = "0 0 " + canvasSize + " " + canvasSize;
        this.startCoords = [];
        // variable for flowchart zooming
        this.mousePos = [0, 0];
        this.zoom = 1;
        // variable for edge
        this.edge = { source: undefined, target: undefined, selected: false };
        this.selectedEdge = [];
        // listener for events, only activated when the mouse is hovering over the svg component
        this.keydownListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'keydown');
        this.copyListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'copy');
        this.pasteListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'paste');
        this.listenerActive = false;
        // constants for offset positions of input/output port relative to the node's position
        this.inputOffset = [50, -8];
        this.outputOffset = [50, 88];
    }
    FlowchartComponent_1 = FlowchartComponent;
    FlowchartComponent.enableNode = function (node) {
        for (var _i = 0, _a = node.input.edges; _i < _a.length; _i++) {
            var edge = _a[_i];
            if (!edge.source.parentNode.enabled) {
                return;
            }
        }
        node.enabled = true;
        for (var _b = 0, _c = node.output.edges; _b < _c.length; _b++) {
            var edge = _c[_b];
            FlowchartComponent_1.enableNode(edge.target.parentNode);
        }
    };
    FlowchartComponent.disableNode = function (node) {
        node.enabled = false;
        for (var _i = 0, _a = node.output.edges; _i < _a.length; _i++) {
            var edge = _a[_i];
            FlowchartComponent_1.disableNode(edge.target.parentNode);
        }
    };
    FlowchartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvas = document.getElementById('svg-canvas');
        // const panZoom = svgPanZoom(this.canvas);
        var bRect = this.canvas.getBoundingClientRect();
        this.offset = [bRect.left, bRect.top];
        // copy: copy node
        this.copySub = this.copyListener.subscribe(function (val) {
            if (!_this.listenerActive) {
                return;
            }
            var node = _this.dataService.flowchart.nodes[_this.dataService.flowchart.meta.selected_nodes[0]];
            if (node.type !== 'start' && node.type !== 'end') {
                console.log('copied node:', node);
                var cp = circular_json__WEBPACK_IMPORTED_MODULE_3__["parse"](circular_json__WEBPACK_IMPORTED_MODULE_3__["stringify"](node));
                _this.copied = circular_json__WEBPACK_IMPORTED_MODULE_3__["stringify"](cp);
            }
        });
        // paste: paste copied node
        this.pasteSub = this.pasteListener.subscribe(function (val) {
            if (!_this.listenerActive) {
                return;
            }
            if (_this.copied) {
                event.preventDefault();
                var newNode = circular_json__WEBPACK_IMPORTED_MODULE_3__["parse"](_this.copied);
                var pt = _this.canvas.createSVGPoint();
                pt.x = 20;
                pt.y = 100;
                var svgP = void 0;
                var isFirefox = typeof InstallTrigger !== 'undefined';
                if (isFirefox) {
                    var ctm = _this.canvas.getScreenCTM();
                    // const bRect = this.canvas.getBoundingClientRect();
                    ctm.a = ctm.a * _this.zoom;
                    ctm.d = ctm.d * _this.zoom;
                    ctm.e = bRect.x;
                    ctm.f = bRect.y;
                    svgP = pt.matrixTransform(ctm.inverse());
                }
                else {
                    svgP = pt.matrixTransform(_this.canvas.getScreenCTM().inverse());
                }
                _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].updateNode(newNode, svgP);
                _this.dataService.flowchart.nodes.push(newNode);
                console.log('pasting node:', newNode);
            }
        });
        // delete: delete selected edge(s)
        this.keydownSub = this.keydownListener.subscribe(function (val) {
            if (!_this.listenerActive) {
                return;
            }
            if (val.key === 'Delete') {
                _this.deleteSelectedEdges();
            }
        });
    };
    /*
    handle event received from node component
    */
    FlowchartComponent.prototype.nodeAction = function (event, node_index) {
        switch (event.action) {
            // switch the viewchild of the appModule to the node's procedure view when double-click on the node
            case _node_node_actions__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].PROCEDURE:
                this.switch.emit('editor');
                this.deactivateKeyEvent();
                break;
            // select a node
            case _node_node_actions__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].SELECT:
                this.dataService.flowchart.meta.selected_nodes = [node_index];
                break;
            // initiate dragging node
            case _node_node_actions__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].DRAGNODE:
                this.element = this.dataService.flowchart.nodes[node_index];
                var pt = this.canvas.createSVGPoint();
                // get current mouse position in the page
                pt.x = event.data.pageX;
                pt.y = event.data.pageY;
                // convert mouse position to svg position (special procedure for firefox)
                var svgP = void 0;
                var isFirefox = typeof InstallTrigger !== 'undefined';
                if (isFirefox) {
                    var ctm = this.canvas.getScreenCTM();
                    var bRect = this.canvas.getBoundingClientRect();
                    ctm.a = ctm.a * this.zoom;
                    ctm.d = ctm.d * this.zoom;
                    ctm.e = bRect.x;
                    ctm.f = bRect.y;
                    svgP = pt.matrixTransform(ctm.inverse());
                }
                else {
                    svgP = pt.matrixTransform(this.canvas.getScreenCTM().inverse());
                }
                // save the svg position as startCoords
                this.startCoords = [
                    svgP.x,
                    svgP.y
                ];
                if (this.startCoords[0] === NaN) {
                    this.startCoords = [0, 0];
                }
                // mark the dragging mode as dragNode
                this.isDown = 2;
                break;
            // initiate dragging input/output port
            case _node_node_actions__WEBPACK_IMPORTED_MODULE_2__["ACTIONS"].DRAGPORT:
                // create a new edge
                this.edge = { source: undefined, target: undefined, selected: false };
                // assign the port to the edge's input/output accordingly
                if (event.type === 'input') {
                    this.edge.target = event.data;
                }
                else {
                    this.edge.source = event.data;
                }
                this.startType = event.type;
                // modify the temporary-edge's coordinate
                this.element = document.getElementById('temporary-wire');
                this.element.setAttribute('x1', event.position[0]);
                this.element.setAttribute('y1', event.position[1]);
                this.element.setAttribute('x2', event.position[0]);
                this.element.setAttribute('y2', event.position[1]);
                this.isDown = 3;
                break;
        }
    };
    // check if the node at node_index is selected
    FlowchartComponent.prototype.isSelected = function (node_index) {
        return this.dataService.flowchart.meta.selected_nodes.indexOf(node_index) > -1;
    };
    // add a new node
    FlowchartComponent.prototype.addNode = function () {
        // create a new node
        var newNode = _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].getNewNode();
        // the new node's position would be (20,100) relative to the current view
        var pt = this.canvas.createSVGPoint();
        pt.x = 20;
        pt.y = 100;
        // convert the position to svg position
        var svgP;
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            var ctm = this.canvas.getScreenCTM();
            var bRect = this.canvas.getBoundingClientRect();
            ctm.a = ctm.a * this.zoom;
            ctm.d = ctm.d * this.zoom;
            ctm.e = bRect.x;
            ctm.f = bRect.y;
            svgP = pt.matrixTransform(ctm.inverse());
        }
        else {
            svgP = pt.matrixTransform(this.canvas.getScreenCTM().inverse());
        }
        // assign the position to the new node and add it to the flowchart
        newNode.position.x = svgP.x;
        newNode.position.y = svgP.y;
        this.dataService.flowchart.nodes.push(newNode);
    };
    // activate event listener for copy (ctrl+c), paste (ctrl+v), delete (Delete) when mouse hover over the svg component
    FlowchartComponent.prototype.activateKeyEvent = function () {
        this.listenerActive = true;
    };
    // deactivate the event listeners when the mouse exit the svg component
    FlowchartComponent.prototype.deactivateKeyEvent = function () {
        this.listenerActive = false;
    };
    // delete selected node
    FlowchartComponent.prototype.deleteSelectedNodes = function () {
        // for each of the selected node
        while (this.dataService.flowchart.meta.selected_nodes.length > 0) {
            var node_index = this.dataService.flowchart.meta.selected_nodes.pop();
            var node = this.dataService.flowchart.nodes[node_index];
            // continue if the node is a start/end node
            if (node.type === 'start' || node.type === 'end') {
                continue;
            }
            var edge_index = 0;
            // delete all the edges connected to the node
            while (edge_index < this.dataService.flowchart.edges.length) {
                var tbrEdge = this.dataService.flowchart.edges[edge_index];
                if (tbrEdge.target.parentNode === node || tbrEdge.source.parentNode === node) {
                    this.deleteEdge(edge_index, node.id);
                    continue;
                }
                edge_index += 1;
            }
            // remove the node from the flowchart
            this.dataService.flowchart.nodes.splice(Number(node_index), 1);
        }
    };
    // delete an edge with a known index
    FlowchartComponent.prototype.deleteEdge = function (edge_index, deletedNode) {
        var tbrEdge = this.dataService.flowchart.edges[edge_index];
        // remove the edge from the target node's list of edges
        for (var i in this.dataService.flowchart.edges) {
            if (tbrEdge.target.edges[i] === tbrEdge) {
                tbrEdge.target.edges.splice(Number(i), 1);
                break;
            }
        }
        // remove the edge from the source node's list of edges
        for (var i in tbrEdge.source.edges) {
            if (tbrEdge.source.edges[i] === tbrEdge) {
                tbrEdge.source.edges.splice(Number(i), 1);
                break;
            }
        }
        if (tbrEdge.target.parentNode.input.edges.length === 0 && deletedNode !== tbrEdge.target.parentNode.id) {
            FlowchartComponent_1.disableNode(tbrEdge.target.parentNode);
        }
        else {
            FlowchartComponent_1.enableNode(tbrEdge.target.parentNode);
        }
        // remove the edge from the general list of edges
        this.dataService.flowchart.edges.splice(edge_index, 1);
        this.dataService.flowchart.ordered = false;
    };
    // delete all the selected edges
    FlowchartComponent.prototype.deleteSelectedEdges = function () {
        this.selectedEdge.sort().reverse();
        for (var _i = 0, _a = this.selectedEdge; _i < _a.length; _i++) {
            var edge_index = _a[_i];
            this.deleteEdge(edge_index, undefined);
        }
        this.selectedEdge = [];
    };
    // select an edge
    FlowchartComponent.prototype.selectEdge = function (event, edge_index) {
        // if ctrl is pressed, add the edge into the list of selected edges
        if (event === 'ctrl') {
            this.selectedEdge.push(edge_index);
            this.dataService.flowchart.edges[edge_index].selected = true;
        }
        else if (event === 'single' || (event === false && this.selectedEdge.length > 1)) {
            if (this.selectedEdge.length > 0) {
                for (var _i = 0, _a = this.selectedEdge; _i < _a.length; _i++) {
                    var e = _a[_i];
                    this.dataService.flowchart.edges[e].selected = false;
                }
            }
            this.selectedEdge = [edge_index];
            this.dataService.flowchart.edges[edge_index].selected = true;
        }
        else {
            this.dataService.flowchart.edges[edge_index].selected = false;
            for (var i = 0; i < this.selectedEdge.length; i++) {
                if (this.selectedEdge[i] === edge_index) {
                    this.selectedEdge.splice(i, 1);
                    break;
                }
            }
        }
    };
    // focus view onto the flowchart
    FlowchartComponent.prototype.focusFlowchart = function () {
        // find the frame of the flowchart: frame = [minX, minY, maxX, maxY]
        var frame = [this.dataService.flowchart.nodes[0].position.x, this.dataService.flowchart.nodes[0].position.y,
            this.dataService.flowchart.nodes[0].position.x, this.dataService.flowchart.nodes[0].position.y];
        for (var _i = 0, _a = this.dataService.flowchart.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.position.x < frame[0]) {
                frame[0] = node.position.x;
            }
            else if (node.position.x > frame[2]) {
                frame[2] = node.position.x;
            }
            if (node.position.y < frame[1]) {
                frame[1] = node.position.y;
            }
            else if (node.position.y > frame[3]) {
                frame[3] = node.position.y;
            }
        }
        frame[2] += 100;
        frame[3] += 80;
        // calculate the zoom to fit the whole flowchart
        var bRect = this.canvas.getBoundingClientRect();
        var ctm = this.canvas.getScreenCTM();
        var zoom = bRect.width / (ctm.a * (frame[2] - frame[0]));
        var heightZoom = bRect.height / (ctm.d * (frame[3] - frame[1]));
        if (zoom > heightZoom) {
            zoom = heightZoom;
        }
        if (zoom > 2.5) {
            zoom = 2.5;
        }
        // calculate the difference between height and width, if height is bigger than width,
        // centering the flowchart based on the difference
        var height_width_diff = ((frame[3] - frame[1]) - (frame[2] - frame[0])) / 2;
        if (height_width_diff > 0) {
            frame[0] -= height_width_diff;
        }
        // if the minX or minY goes below 0 (outside of svg frame), change them back to 0
        if (frame[0] < 0) {
            frame[0] = 0;
        }
        if (frame[1] < 0) {
            frame[1] = 0;
        }
        // transform
        this.canvas.style.transition = 'transform 0ms ease-in';
        this.canvas.style.transformOrigin = 'top left';
        this.canvas.style.transform =
            "matrix(" + zoom + ",0,0," + zoom + "," + -frame[0] * ctm.a * zoom / this.zoom + "," + -frame[1] * ctm.a * zoom / this.zoom + ")";
        this.zoom = zoom;
    };
    // scale view on mouse wheel
    FlowchartComponent.prototype.scale = function (event) {
        event.preventDefault();
        event.stopPropagation();
        // calculate new zoom value
        var scaleFactor = 0.1;
        var value = this.zoom - (Math.sign(event.deltaY)) * scaleFactor;
        // limit the zoom value to be between 1 and 2.5
        if (value >= 1 && value <= 2.5) {
            value = Number((value).toPrecision(5));
        }
        else {
            return;
        }
        /*
        // VER 1: translate before and after re-scaling
        this.mousePos = [event.pageX - this.offset[0], event.pageY - this.offset[1]];

        const bRect = <DOMRect>this.canvas.getBoundingClientRect();
        const beforeX = this.mousePos[0] - bRect.x + this.offset[0];
        const beforeY = this.mousePos[1] - bRect.y + this.offset[1];

        const afterX = beforeX / value + this.mousePos[0] * (value - this.zoom);
        const afterY = beforeY / value + this.mousePos[1] * (value - this.zoom);

        // find transformation matrix
        const m = this.canvas.createSVGMatrix()
        .translate(beforeX / this.zoom, beforeY / this.zoom)
        .scale(value)
        .translate(-afterX, -afterY);

        const transf = 'matrix(' + m.a + ',' + m.b + ',' + m.c + ',' + m.d + ',' + m.e + ',' + m.f + ')';
        */
        /*
        // VER 2 : transform relative to the top-left of the bounding box of the canvas and adjust based on mouse position

        this.mousePos = [event.pageX - this.offset[0], event.pageY - this.offset[1]];

        const bRect = <DOMRect>this.canvas.getBoundingClientRect();
        let newX = (bRect.left - this.offset[0] - this.mousePos[0] * (value - this.zoom)) / this.zoom;
        let newY = (bRect.top - this.offset[1]  - this.mousePos[1] * (value - this.zoom)) / this.zoom;
        const boundingDiv = <DOMRect>document.getElementById('flowchart-main-container').getBoundingClientRect();

        const m = this.canvas.createSVGMatrix()
        .scale(value)
        .translate(newX, newY);

        newX = m.e;
        newY = m.f;

        if (newX > 0) {
            newX = 0;
        } else if (boundingDiv.width - newX > bRect.width * value / this.zoom) {
            newX = boundingDiv.width - bRect.width * value / this.zoom;
        }
        if (newY > 0) {
            newY = 0;
        } else if (boundingDiv.height - newY > bRect.height * value / this.zoom) {
            newY = boundingDiv.height - bRect.height * value / this.zoom;
        }
        if (newY > 0) { newY = 0; }


        const transf = 'matrix(' + value + ', 0, 0,' + value + ',' + newX + ',' + newY + ')';
        */
        /*
        // VER 3: transform relative to the center of the canvas

        const bRect = <DOMRect>this.canvas.getBoundingClientRect();
        const boundingDiv = <DOMRect>document.getElementById('flowchart-main-container').getBoundingClientRect();

        let newX = (bRect.left - this.offset[0]) / this.zoom;
        let newY = (bRect.top - this.offset[1] ) / this.zoom;


        const m = this.canvas.createSVGMatrix()
        .scale(value)
        .translate(newX, newY);

        newX = m.e - boundingDiv.width * (value - this.zoom) / (2 * this.zoom);
        newY = m.f - boundingDiv.width * (value - this.zoom) / (2 * this.zoom);

        if (newX > 0) {
            newX = 0;
        } else if (boundingDiv.width - newX > bRect.width * value / this.zoom) {
            newX = boundingDiv.width - bRect.width * value / this.zoom;
        }
        if (newY > 0) {
            newY = 0;
        } else if (boundingDiv.height - newY > bRect.height * value / this.zoom) {
            newY = boundingDiv.height - bRect.height * value / this.zoom;
        }
        if (newY > 0) { newY = 0; }
        */
        // VER 4: transform relative to the mouse position
        this.mousePos = [event.pageX - this.offset[0], event.pageY - this.offset[1]];
        var bRect = this.canvas.getBoundingClientRect();
        var boundingDiv = document.getElementById('flowchart-main-container').getBoundingClientRect();
        var newX = ((bRect.left - this.offset[0]) * value - this.mousePos[0] * (value - this.zoom)) / this.zoom;
        var newY = ((bRect.top - this.offset[1]) * value - this.mousePos[1] * (value - this.zoom)) / this.zoom;
        // snapping back the x and y coordinates if the zoom goes out of the bounding box
        if (newX > 0) {
            newX = 0;
        }
        else if (boundingDiv.width - newX > bRect.width * value / this.zoom) {
            newX = boundingDiv.width - bRect.width * value / this.zoom;
        }
        if (newY > 0) {
            newY = 0;
        }
        else if (boundingDiv.height - newY > bRect.height * value / this.zoom) {
            newY = boundingDiv.height - bRect.height * value / this.zoom;
        }
        if (newY > 0) {
            newY = 0;
        }
        var transf = 'matrix(' + value + ', 0, 0,' + value + ',' + newX + ',' + newY + ')';
        // transform
        this.canvas.style.transition = 'transform 0ms ease-in';
        this.canvas.style.transformOrigin = "top left";
        this.canvas.style.transform = transf;
        this.zoom = value;
    };
    // initiate dragging the view window
    FlowchartComponent.prototype.panStart = function (event) {
        event.preventDefault();
        this.canvas.style.transition = 'transform 0ms linear';
        this.canvas.style.transformOrigin = "top left";
        var bRect = this.canvas.getBoundingClientRect();
        // set start coords to current view window position
        this.startCoords = [
            event.clientX - (bRect.left - this.offset[0]),
            event.clientY - (bRect.top - this.offset[1])
        ];
        // set drag mode to drag view
        this.isDown = 1;
    };
    // handle mouse move for dragging view/node/port
    FlowchartComponent.prototype.handleMouseMove = function (event) {
        // return if no dragging initiated
        if (!this.isDown) {
            return;
            // if drag view
        }
        else if (this.isDown === 1) {
            event.preventDefault();
            var bRect = this.canvas.getBoundingClientRect();
            var x = Number(event.clientX - this.startCoords[0]);
            var y = Number(event.clientY - this.startCoords[1]);
            var boundingDiv = document.getElementById('flowchart-main-container').getBoundingClientRect();
            if (x > 0 || bRect.width < boundingDiv.width) {
                x = 0;
            }
            else if (boundingDiv.width - x > bRect.width) {
                x = boundingDiv.width - bRect.width;
            }
            if (y > 0 || bRect.height < boundingDiv.height) {
                y = 0;
            }
            else if (boundingDiv.height - y > bRect.height) {
                y = boundingDiv.height - bRect.height;
            }
            this.canvas.style.transform = 'matrix(' + this.zoom + ',0,0,' + this.zoom + ',' + x + ',' + y + ')';
            // if drag node
        }
        else if (this.isDown === 2) {
            var pt = this.canvas.createSVGPoint();
            pt.x = event.pageX;
            pt.y = event.pageY;
            var svgP = void 0;
            var isFirefox = typeof InstallTrigger !== 'undefined';
            if (isFirefox) {
                var ctm = this.canvas.getScreenCTM();
                var bRect = this.canvas.getBoundingClientRect();
                ctm.a = ctm.a * this.zoom;
                ctm.d = ctm.d * this.zoom;
                ctm.e = bRect.x;
                ctm.f = bRect.y;
                svgP = pt.matrixTransform(ctm.inverse());
            }
            else {
                svgP = pt.matrixTransform(this.canvas.getScreenCTM().inverse());
            }
            var xDiff = this.startCoords[0] - svgP.x;
            var yDiff = this.startCoords[1] - svgP.y;
            this.startCoords[0] = svgP.x;
            this.startCoords[1] = svgP.y;
            this.element.position.x -= xDiff;
            this.element.position.y -= yDiff;
            // if drag port
        }
        else if (this.isDown === 3) {
            event.preventDefault();
            var pt = this.canvas.createSVGPoint();
            pt.x = event.pageX;
            pt.y = event.pageY;
            var isFirefox = typeof InstallTrigger !== 'undefined';
            if (isFirefox) {
                var ctm = this.canvas.getScreenCTM();
                var bRect = this.canvas.getBoundingClientRect();
                ctm.a = ctm.a * this.zoom;
                ctm.d = ctm.d * this.zoom;
                ctm.e = bRect.x;
                ctm.f = bRect.y;
                var svgP = pt.matrixTransform(ctm.inverse());
                this.element.setAttribute('x2', svgP.x);
                this.element.setAttribute('y2', svgP.y);
            }
            else {
                var svgP = pt.matrixTransform(this.canvas.getScreenCTM().inverse());
                this.element.setAttribute('x2', svgP.x);
                this.element.setAttribute('y2', svgP.y);
            }
        }
    };
    FlowchartComponent.prototype.handleMouseUp = function (event) {
        this.element = undefined;
        if (this.isDown === 3) {
            var pt = this.canvas.createSVGPoint();
            pt.x = event.pageX;
            pt.y = event.pageY;
            var svgP = void 0;
            var isFirefox = typeof InstallTrigger !== 'undefined';
            if (isFirefox) {
                var ctm = this.canvas.getScreenCTM();
                var bRect = this.canvas.getBoundingClientRect();
                ctm.a = ctm.a * this.zoom;
                ctm.d = ctm.d * this.zoom;
                ctm.e = bRect.x;
                ctm.f = bRect.y;
                svgP = pt.matrixTransform(ctm.inverse());
            }
            else {
                svgP = pt.matrixTransform(this.canvas.getScreenCTM().inverse());
            }
            // reset temporary edge position to <(0,0),(0,0)>
            var tempLine = document.getElementById('temporary-wire');
            tempLine.setAttribute('x1', '0');
            tempLine.setAttribute('y1', '0');
            tempLine.setAttribute('x2', '0');
            tempLine.setAttribute('y2', '0');
            // go through all of the nodes' input/output ports
            for (var _i = 0, _a = this.dataService.flowchart.nodes; _i < _a.length; _i++) {
                var n = _a[_i];
                var pPos = void 0;
                // find the node's corresponding port and its position
                if (this.startType === 'input') {
                    if (this.edge.target.parentNode === n || n.type === 'end') {
                        continue;
                    }
                    this.edge.source = n.output;
                    pPos = [n.position.x + this.outputOffset[0], n.position.y + this.outputOffset[1]];
                }
                else {
                    if (this.edge.source.parentNode === n || n.type === 'start') {
                        continue;
                    }
                    this.edge.target = n.input;
                    pPos = [n.position.x + this.inputOffset[0], n.position.y + this.inputOffset[1]];
                }
                // if the distance between the port's position and the dropped position is bigger than 15px, continue
                if (Math.abs(pPos[0] - svgP.x) > 25 || Math.abs(pPos[1] - svgP.y) > 25) {
                    continue;
                }
                // if there is already an existing edge with the same source and target as the new edge, return
                for (var _b = 0, _c = this.dataService.flowchart.edges; _b < _c.length; _b++) {
                    var edge = _c[_b];
                    if (edge.target === this.edge.target && edge.source === this.edge.source) {
                        this.isDown = 0;
                        return;
                    }
                }
                this.edge.target.edges.push(this.edge);
                this.edge.source.edges.push(this.edge);
                this.dataService.flowchart.edges.push(this.edge);
                this.dataService.flowchart.ordered = false;
                if (this.edge.source.parentNode.enabled) {
                    FlowchartComponent_1.enableNode(this.edge.target.parentNode);
                }
                else {
                    FlowchartComponent_1.disableNode(this.edge.target.parentNode);
                }
                break;
            }
        }
        this.isDown = 0;
    };
    var FlowchartComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FlowchartComponent.prototype, "switch", void 0);
    FlowchartComponent = FlowchartComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flowchart',
            template: __webpack_require__(/*! ./flowchart.component.html */ "./src/app/ngFlowchart-svg/flowchart.component.html"),
            styles: [__webpack_require__(/*! ./flowchart.component.scss */ "./src/app/ngFlowchart-svg/flowchart.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], FlowchartComponent);
    return FlowchartComponent;
}());



/***/ }),

/***/ "./src/app/ngFlowchart-svg/flowchart.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ngFlowchart-svg/flowchart.module.ts ***!
  \*****************************************************/
/*! exports provided: SVGFlowchartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFlowchartModule", function() { return SVGFlowchartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _flowchart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flowchart.component */ "./src/app/ngFlowchart-svg/flowchart.component.ts");
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node/node.component */ "./src/app/ngFlowchart-svg/node/node.component.ts");
/* harmony import */ var _edge_edge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edge/edge.component */ "./src/app/ngFlowchart-svg/edge/edge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SVGFlowchartModule = /** @class */ (function () {
    function SVGFlowchartModule() {
    }
    SVGFlowchartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _flowchart_component__WEBPACK_IMPORTED_MODULE_4__["FlowchartComponent"],
                _node_node_component__WEBPACK_IMPORTED_MODULE_5__["NodeComponent"],
                _edge_edge_component__WEBPACK_IMPORTED_MODULE_6__["EdgeComponent"],
            ],
            exports: [_flowchart_component__WEBPACK_IMPORTED_MODULE_4__["FlowchartComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]],
            entryComponents: [],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], SVGFlowchartModule);
    return SVGFlowchartModule;
}());



/***/ }),

/***/ "./src/app/ngFlowchart-svg/index.ts":
/*!******************************************!*\
  !*** ./src/app/ngFlowchart-svg/index.ts ***!
  \******************************************/
/*! exports provided: SVGFlowchartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flowchart_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowchart.module */ "./src/app/ngFlowchart-svg/flowchart.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGFlowchartModule", function() { return _flowchart_module__WEBPACK_IMPORTED_MODULE_0__["SVGFlowchartModule"]; });




/***/ }),

/***/ "./src/app/ngFlowchart-svg/node/node.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/ngFlowchart-svg/node/node.actions.ts ***!
  \******************************************************/
/*! exports provided: ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
var ACTIONS;
(function (ACTIONS) {
    ACTIONS[ACTIONS["SELECT"] = 0] = "SELECT";
    ACTIONS[ACTIONS["DELETE"] = 1] = "DELETE";
    ACTIONS[ACTIONS["COPY"] = 2] = "COPY";
    ACTIONS[ACTIONS["CONNECT"] = 3] = "CONNECT";
    ACTIONS[ACTIONS["DRAGNODE"] = 4] = "DRAGNODE";
    ACTIONS[ACTIONS["DROPPORT"] = 5] = "DROPPORT";
    ACTIONS[ACTIONS["DRAGPORT"] = 6] = "DRAGPORT";
    ACTIONS[ACTIONS["PROCEDURE"] = 7] = "PROCEDURE";
})(ACTIONS || (ACTIONS = {}));


/***/ }),

/***/ "./src/app/ngFlowchart-svg/node/node.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ngFlowchart-svg/node/node.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- svg group for the selectable and draggable area of normal node -->\r\n<svg:g (click)='nodeSelect($event)' draggable=\"true\" \r\n(mousedown)='startDragNode($event)' \r\n(dblclick)='switchToProcedure($event)'\r\n*ngIf='node.type==\"\"'>\r\n\r\n    <!-- rectangular box with border -->\r\n    <rect class=\"node\" \r\n    width=\"100\" height=\"80\"\r\n    [class.node--selected]='selected'\r\n    [class.node--error]=\"node.hasError\"\r\n    [class.node--disabled]='!node.enabled'\r\n    [attr.x]=\"node.position.x\" \r\n    [attr.y]=\"node.position.y\"\r\n    />\r\n\r\n    <!-- node description inside the rectangular box -->\r\n    <svg:foreignObject [attr.x]=\"node.position.x\" [attr.y]=\"node.position.y + 3\" \r\n    width=\"100\" height = \"80\"\r\n    (mousedown)='focusText($event)'>\r\n        <xhtml:div class='textdiv'>\r\n            <xhtml:textarea \r\n                id={{node.id}}\r\n                autocomplete=off \r\n                [(ngModel)]='node.name'\r\n                [class.selected]='selected'\r\n                [class.disabled]='!node.enabled'\r\n                title={{node.name}}\r\n                style=\"font-weight: 600;\"\r\n                placeholder='Description of Node'/>  \r\n        </xhtml:div>\r\n    </svg:foreignObject>\r\n</svg:g>\r\n\r\n<!-- svg group for the selectable and draggable area of start node -->\r\n<svg:g (click)='nodeSelect($event)' draggable=\"true\" \r\n(mousedown)='startDragNode($event)' \r\n(dblclick)='switchToProcedure($event)'\r\n*ngIf='node.type==\"start\"'>\r\n\r\n    <!-- ellipse with border -->\r\n    <ellipse class=\"node\" \r\n        [class.node--selected]='selected'\r\n        [class.node--error]=\"node.hasError\"\r\n        [attr.cx]=\"node.position.x + inputOffset[0]\" \r\n        [attr.cy]=\"node.position.y + (inputOffset[1]+outputOffset[1])/2 + 10\"\r\n        [attr.rx]=\"40\"\r\n        [attr.ry]=\"30\"\r\n        />\r\n\r\n    <!-- node description inside the ellipse -->\r\n    <svg:foreignObject \r\n    [attr.x]=\"node.position.x\" [attr.y]=\"node.position.y + 38\" \r\n    width=\"100\" height = \"40\">\r\n        <xhtml:div class='textdiv'>\r\n            <xhtml:textarea \r\n                id={{node.id}}\r\n                class='textarea_startend'\r\n                autocomplete=off \r\n                [class.selected]='selected'\r\n                [(ngModel)]='node.name'/>  \r\n        </xhtml:div>\r\n    </svg:foreignObject>\r\n</svg:g>\r\n\r\n<!-- svg group for the selectable and draggable area of end node -->\r\n<svg:g (click)='nodeSelect($event)' draggable=\"true\" \r\n(mousedown)='startDragNode($event)' \r\n(dblclick)='switchToProcedure($event)'\r\n*ngIf='node.type==\"end\"'>\r\n\r\n    <!-- ellipse with border -->\r\n    <ellipse class=\"node\" \r\n        [class.node--selected]='selected'\r\n        [class.node--error]=\"node.hasError\"\r\n        [class.node--disabled]='!node.enabled'\r\n        [attr.cx]=\"node.position.x + inputOffset[0]\" \r\n        [attr.cy]=\"node.position.y + (inputOffset[1]+outputOffset[1])/2 - 10\"\r\n        [attr.rx]=\"40\"\r\n        [attr.ry]=\"30\"\r\n        />\r\n\r\n    <!-- node description inside the ellipse -->\r\n    <svg:foreignObject [attr.x]=\"node.position.x\" [attr.y]=\"node.position.y + 18\" \r\n    width=\"100\" height = \"40\">\r\n        <xhtml:div class='textdiv'>\r\n            <xhtml:textarea \r\n                id={{node.id}}\r\n                class='textarea_startend'\r\n                autocomplete=off \r\n                [class.selected]='selected'\r\n                [class.disabled]='!node.enabled'\r\n                [(ngModel)]='node.name'/>  \r\n        </xhtml:div>\r\n    </svg:foreignObject>\r\n</svg:g>\r\n\r\n\r\n\r\n<!-- circles as draggable input/output ports of the node -->\r\n<svg:circle\r\nr=3\r\n[attr.cx]=\"node.position.x + inputOffset[0]\" \r\n[attr.cy]=\"node.position.y + inputOffset[1]\"\r\n*ngIf=\"inputDraggable()\" \r\nclass='inputPort'\r\nid = 'node.input.id'\r\n(mousedown)='startDragPort($event, \"input\")'/>\r\n\r\n<svg:circle *ngIf=\"outputDraggable()\" \r\nclass='outputPort'\r\nid = 'node.output.id'\r\n(mousedown)='startDragPort($event, \"output\")' \r\n[attr.cx]=\"node.position.x + outputOffset[0]\" \r\n[attr.cy]=\"node.position.y + outputOffset[1]\" \r\npointer-events=\"all\"\r\nr=3\r\nfill=\"black\"/>\r\n\r\n"

/***/ }),

/***/ "./src/app/ngFlowchart-svg/node/node.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ngFlowchart-svg/node/node.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$color-main: #2D4885;\r\n$color-accent: #50ABB9;\r\n$color-muted: #88D4DD;\r\n$color-text-accent: #DC772F;\r\n*/\n.node {\n  fill: #fafafa;\n  stroke-width: 2px;\n  stroke: #505050;\n  stroke-opacity: 1;\n  stroke-linecap: round;\n  stroke-linejoin: round; }\n.node.node--disabled {\n    stroke-opacity: 0.5;\n    fill-opacity: 0.5; }\n.node.node--selected {\n    stroke: #000096; }\n.node.node--error {\n    stroke: red; }\n.textdiv {\n  text-align: center;\n  width: 94px; }\n.foreignObject {\n  width: 100;\n  height: 80; }\ntextarea {\n  font-family: sans-serif;\n  background: transparent;\n  display: inline-block;\n  border: none;\n  font-size: 14px;\n  width: 100%;\n  height: 70px;\n  font-weight: 600;\n  text-align: center;\n  vertical-align: middle;\n  resize: none;\n  overflow: hidden;\n  color: #505050; }\ntextarea.selected {\n    color: #000096; }\ntextarea.disabled {\n    opacity: 0.5; }\n.textarea_startend {\n  font-size: 14px;\n  font-weight: 600;\n  color: #505050;\n  height: 20px;\n  pointer-events: none; }\n.inputPort {\n  stroke: transparent;\n  stroke-width: 20px;\n  pointer-events: all;\n  fill: #505050; }\n.outputPort {\n  stroke: transparent;\n  stroke-width: 20px;\n  pointer-events: all;\n  fill: #505050; }\n"

/***/ }),

/***/ "./src/app/ngFlowchart-svg/node/node.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ngFlowchart-svg/node/node.component.ts ***!
  \********************************************************/
/*! exports provided: NodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeComponent", function() { return NodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.actions */ "./src/app/ngFlowchart-svg/node/node.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeComponent = /** @class */ (function () {
    function NodeComponent() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.last = [0, 0];
        this.isDown = false;
    }
    /*
    update the position of the node
    */
    NodeComponent.prototype.updatePosition = function (position) {
        this.node.position = position;
    };
    /*
    select a node
    */
    NodeComponent.prototype.nodeSelect = function (event) {
        this.action.emit({ action: _node_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].SELECT });
    };
    /*
    check if the input port of the node is draggable --> false only for start node, true otherwise
    */
    NodeComponent.prototype.inputDraggable = function () {
        return !(this.node.type === 'start');
    };
    /*
    check if the output port of the node is draggable --> false only for end node, true otherwise
    */
    NodeComponent.prototype.outputDraggable = function () {
        return !(this.node.type === 'end');
    };
    /*
    initiate dragging node when mousedown inside the node group
    */
    NodeComponent.prototype.startDragNode = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.action.emit({ action: _node_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].DRAGNODE, data: event });
    };
    /*
    initiate dragging port when mousedown inside the port (inside the invisible stroke of the port)
    */
    NodeComponent.prototype.startDragPort = function (event, portType) {
        event.preventDefault();
        event.stopPropagation();
        var pos = this.node.position;
        var data;
        if (portType === 'input') {
            data = this.node.input;
            pos = [pos.x + this.inputOffset[0], pos.y + this.inputOffset[1]];
        }
        else {
            data = this.node.output;
            pos = [pos.x + this.outputOffset[0], pos.y + this.outputOffset[1]];
        }
        this.action.emit({ action: _node_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].DRAGPORT, data: data, position: pos, type: portType });
    };
    /*
    focus on the description of the node when mouse down inside the node
    ** no stopPropagation to allow propagation to startDragNode --> node can still be dragged
    */
    NodeComponent.prototype.focusText = function (event) {
        document.getElementById(this.node.id).focus();
    };
    /*
    switch the viewchild of the appModule to the node's procedure view when double-click on the node
    */
    NodeComponent.prototype.switchToProcedure = function (event) {
        this.action.emit({ action: _node_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].PROCEDURE });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NodeComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NodeComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NodeComponent.prototype, "inputOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NodeComponent.prototype, "outputOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NodeComponent.prototype, "action", void 0);
    NodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[node]',
            template: __webpack_require__(/*! ./node.component.html */ "./src/app/ngFlowchart-svg/node/node.component.html"),
            styles: [__webpack_require__(/*! ./node.component.scss */ "./src/app/ngFlowchart-svg/node/node.component.scss")]
        })
    ], NodeComponent);
    return NodeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/add-components/add_input.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/add-components/add_input.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInputComponent", function() { return AddInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddInputComponent = /** @class */ (function () {
    function AddInputComponent() {
    }
    AddInputComponent.prototype.addInput = function () {
        return;
        /*
        let newPort = PortUtils.getNewInput();
        newPort.parentNode = this.node;
        this.node.input.push(newPort);
        */
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddInputComponent.prototype, "node", void 0);
    AddInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-input',
            template: "<button (click)='addInput()'>AddInput</button>",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddInputComponent);
    return AddInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/add-components/add_node.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/add-components/add_node.component.ts ***!
  \************************************************************************/
/*! exports provided: AddNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNodeComponent", function() { return AddNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/node */ "./src/app/shared/models/node/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddNodeComponent = /** @class */ (function () {
    function AddNodeComponent() {
    }
    AddNodeComponent.prototype.addNode = function () { this.flowchart.nodes.push(_models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].getNewNode()); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddNodeComponent.prototype, "flowchart", void 0);
    AddNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-node',
            template: "<button (click)='addNode()'>AddNode</button>",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddNodeComponent);
    return AddNodeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/add-components/add_output.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/add-components/add_output.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOutputComponent", function() { return AddOutputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddOutputComponent = /** @class */ (function () {
    function AddOutputComponent() {
    }
    AddOutputComponent.prototype.addOutput = function () {
        return;
        /*
        let newPort = PortUtils.getNewOutput();
        newPort.parentNode = this.node;
        this.node.output.push(newPort);
        */
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddOutputComponent.prototype, "node", void 0);
    AddOutputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-output',
            template: "<button (click)='addOutput()'>AddOutput</button>",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddOutputComponent);
    return AddOutputComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/execute/execute.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/execute/execute.component.ts ***!
  \****************************************************************/
/*! exports provided: mergeInputsFunc, ExecuteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeInputsFunc", function() { return mergeInputsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteComponent", function() { return ExecuteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flowchart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/flowchart */ "./src/app/shared/models/flowchart/index.ts");
/* harmony import */ var _models_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/code */ "./src/app/shared/models/code/index.ts");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ "./src/app/core/modules/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var mergeInputsFunc = "\nfunction mergeInputs(models){\n    let result = __modules__." + _modules__WEBPACK_IMPORTED_MODULE_3__["_parameterTypes"].new + "();\n    for (let model of models){\n        __modules__." + _modules__WEBPACK_IMPORTED_MODULE_3__["_parameterTypes"].merge + "(result, model);\n    }\n    return result;\n}\n";
var ExecuteComponent = /** @class */ (function () {
    function ExecuteComponent() {
    }
    ExecuteComponent.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var _i, _a, node, funcStrings, _b, _c, func, _d, _e, _f, _g, node;
                    return __generator(this, function (_h) {
                        switch (_h.label) {
                            case 0:
                                this.globalVars = '';
                                // @ts-ignore
                                console.logs = [];
                                // reset input of all nodes except start
                                for (_i = 0, _a = this.flowchart.nodes; _i < _a.length; _i++) {
                                    node = _a[_i];
                                    if (node.type !== 'start') {
                                        if (node.input.edges) {
                                            node.input.value = undefined;
                                        }
                                    }
                                }
                                // order the flowchart
                                if (!this.flowchart.ordered) {
                                    _models_flowchart__WEBPACK_IMPORTED_MODULE_1__["FlowchartUtils"].orderNodes(this.flowchart);
                                }
                                funcStrings = {};
                                _b = 0, _c = this.flowchart.functions;
                                _h.label = 1;
                            case 1:
                                if (!(_b < _c.length)) return [3 /*break*/, 4];
                                func = _c[_b];
                                _d = funcStrings;
                                _e = func.name;
                                return [4 /*yield*/, _models_code__WEBPACK_IMPORTED_MODULE_2__["CodeUtils"].getFunctionString(func)];
                            case 2:
                                _d[_e] = _h.sent();
                                _h.label = 3;
                            case 3:
                                _b++;
                                return [3 /*break*/, 1];
                            case 4:
                                _f = 0, _g = this.flowchart.nodes;
                                _h.label = 5;
                            case 5:
                                if (!(_f < _g.length)) return [3 /*break*/, 8];
                                node = _g[_f];
                                if (!node.enabled) {
                                    node.output.value = undefined;
                                    return [3 /*break*/, 7];
                                }
                                return [4 /*yield*/, this.executeNode(node, funcStrings)];
                            case 6:
                                _h.sent();
                                _h.label = 7;
                            case 7:
                                _f++;
                                return [3 /*break*/, 5];
                            case 8:
                                resolve('');
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    ExecuteComponent.prototype.executeNode = function (node, funcStrings) {
        return __awaiter(this, void 0, void 0, function () {
            var params, fnString, hasFunctions, funcName, fn, result, constant, constString, ex_1, prodWithError_1, markError_1, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { 'currentProcedure': [''] };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _models_code__WEBPACK_IMPORTED_MODULE_2__["CodeUtils"].getNodeCode(node, true)];
                    case 2:
                        fnString = _a.sent();
                        // add the constants from the start node
                        fnString = this.globalVars + fnString;
                        params['model'] = node.input.value;
                        hasFunctions = false;
                        for (funcName in funcStrings) {
                            if (funcStrings.hasOwnProperty(funcName)) {
                                fnString = funcStrings[funcName] + fnString;
                                hasFunctions = true;
                            }
                        }
                        if (hasFunctions) {
                            fnString = mergeInputsFunc + '\n\n' + fnString;
                        }
                        console.log("______________________________________________________________\n            \n/*    " + node.name.toUpperCase() + "    */\n            \n" + fnString + "--------------------------\n");
                        fn = new Function('__modules__', '__params__', fnString);
                        result = fn(_modules__WEBPACK_IMPORTED_MODULE_3__, params);
                        node.output.value = result;
                        if (node.type === 'start') {
                            for (constant in params['constants']) {
                                if (params['constants'].hasOwnProperty(constant)) {
                                    constString = JSON.stringify(params['constants'][constant]);
                                    this.globalVars += "const " + constant + " = " + constString + ";\n";
                                }
                            }
                            this.globalVars += '\n';
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        // throw ex;
                        node.hasError = true;
                        prodWithError_1 = params['currentProcedure'][0];
                        markError_1 = function (prod, id) {
                            if (prod['ID'] && id && prod['ID'] === id) {
                                prod.hasError = true;
                            }
                            if (prod.hasOwnProperty('children')) {
                                prod.children.map(function (p) {
                                    markError_1(p, id);
                                });
                            }
                        };
                        if (prodWithError_1 !== '') {
                            node.procedure.map(function (prod) {
                                if (prod['ID'] === prodWithError_1) {
                                    prod.hasError = true;
                                }
                                if (prod.hasOwnProperty('children')) {
                                    prod.children.map(function (p) {
                                        markError_1(p, prodWithError_1);
                                    });
                                }
                            });
                        }
                        error = void 0;
                        if (ex_1.toString().indexOf('Unexpected identifier') > -1) {
                            error = new Error('Unexpected Identifier error. Did you declare everything?' +
                                'Check that your strings are enclosed in quotes (")');
                        }
                        else if (ex_1.toString().indexOf('Unexpected token') > -1) {
                            error = new Error('Unexpected token error. Check for stray spaces or reserved keywords?');
                        }
                        else {
                            error = new Error(ex_1);
                        }
                        // @ts-ignore
                        console.logs = [];
                        console.log(error);
                        throw error;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExecuteComponent.prototype, "flowchart", void 0);
    ExecuteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'execute',
            /*
            template: `<button class="btn--execute"
                              (click)="execute()">
                          Execute
                       </button>`,
              */
            template: "<button class=\"btn\" mat-icon-button title=\"Execute\" (click)=\"execute()\">\n    <mat-icon>play_circle_outline</mat-icon>\n    </button>\n    ",
            styles: [
                ".btn--execute{\n                display: inline-block;\n                vertical-align: middle;\n                font-size: 14px;\n                line-height: 18px;\n                border: 3px solid #E0C229;\n                border-radius: 4px;\n                padding: 1px 10px;\n                background-color: #E0C229;\n                color: #494D59;\n                font-weight: 600;\n                text-transform: uppercase;\n              }\n              .btn{\n                vertical-align: middle;\n                background-color: transparent;\n                border: none;\n                color: rgb(80,80,80);\n              }\n              .btn:hover{\n                color: blue;\n              }"
            ]
        })
    ], ExecuteComponent);
    return ExecuteComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/file/download.utils.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/file/download.utils.ts ***!
  \**********************************************************/
/*! exports provided: DownloadUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadUtils", function() { return DownloadUtils; });
var DownloadUtils = /** @class */ (function () {
    function DownloadUtils() {
    }
    DownloadUtils.downloadFile = function (fileName, fileContent) {
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(fileContent, fileName);
        }
        else {
            var a_1 = document.createElement('a');
            document.body.appendChild(a_1);
            var url_1 = window.URL.createObjectURL(fileContent);
            a_1.href = url_1;
            a_1.download = fileName;
            a_1.click();
            setTimeout(function () {
                window.URL.revokeObjectURL(url_1);
                document.body.removeChild(a_1);
            }, 0);
        }
    };
    return DownloadUtils;
}());



/***/ }),

/***/ "./src/app/shared/components/file/index.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/components/file/index.ts ***!
  \*************************************************/
/*! exports provided: SaveFileComponent, LoadFileComponent, NewFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _savefile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savefile.component */ "./src/app/shared/components/file/savefile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveFileComponent", function() { return _savefile_component__WEBPACK_IMPORTED_MODULE_0__["SaveFileComponent"]; });

/* harmony import */ var _loadfile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadfile.component */ "./src/app/shared/components/file/loadfile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadFileComponent", function() { return _loadfile_component__WEBPACK_IMPORTED_MODULE_1__["LoadFileComponent"]; });

/* harmony import */ var _newfile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newfile.component */ "./src/app/shared/components/file/newfile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewFileComponent", function() { return _newfile_component__WEBPACK_IMPORTED_MODULE_2__["NewFileComponent"]; });






/***/ }),

/***/ "./src/app/shared/components/file/loadfile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/file/loadfile.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFileComponent", function() { return LoadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_models_procedure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models/procedure */ "./src/app/shared/models/procedure/index.ts");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules */ "./src/app/core/modules/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoadFileComponent = /** @class */ (function () {
    function LoadFileComponent() {
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //   @ViewChild('fileInput') fileInput: ElementRef;
        //   openPicker(): void{
        //     let el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
        //     el.click();
        //   }
        //   loadFile(url ?:string): void{
        //     let file = this.fileInput.nativeElement.files[0];
        //     if (file) {
        //         let reader = new FileReader();
        //         reader.readAsText(file, "UTF-8");
        //         let fs = this.flowchartService;
        //         reader.onload = function (evt) {
        //           let fileString: string = evt.target["result"];
        //           fs.loadFile(fileString);
        //         }
        //         reader.onerror = function (evt) {
        //             console.log("Error reading file");
        //         }
        //     }
        // this.flowchartService.loadFile(url);
    }
    LoadFileComponent.prototype.sendloadfile = function () {
        var _this = this;
        var selectedFile = document.getElementById('file-input').files[0];
        var stream = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var reader = new FileReader();
            reader.onloadend = function () {
                function checkMissingProd(prodList) {
                    var check = true;
                    for (var _i = 0, prodList_1 = prodList; _i < prodList_1.length; _i++) {
                        var prod = prodList_1[_i];
                        if (prod.children) {
                            if (!checkMissingProd(prod.children)) {
                                check = false;
                            }
                        }
                        prod.hasError = false;
                        if (prod.type !== _shared_models_procedure__WEBPACK_IMPORTED_MODULE_2__["ProcedureTypes"].Function) {
                            continue;
                        }
                        if (!_modules__WEBPACK_IMPORTED_MODULE_4__[prod.meta.module] || !_modules__WEBPACK_IMPORTED_MODULE_4__[prod.meta.module][prod.meta.name]) {
                            prod.hasError = true;
                            check = false;
                        }
                    }
                    return check;
                }
                // if (typeof reader.result === 'string') {}
                var f = circular_json__WEBPACK_IMPORTED_MODULE_3__["parse"](reader.result);
                var file = {
                    name: f.name,
                    author: f.author,
                    flowchart: f.flowchart,
                    last_updated: f.last_updated,
                    version: f.version
                };
                var hasError = false;
                for (var _i = 0, _a = file.flowchart.nodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    if (!checkMissingProd(node.procedure)) {
                        node.hasError = true;
                        hasError = true;
                    }
                }
                if (hasError) {
                    alert('The flowchart contains functions that does not exist in the current version of Mobius');
                }
                observer.next(file);
                observer.complete();
            };
            reader.readAsText(selectedFile);
        });
        stream.subscribe(function (loadeddata) {
            _this.loaded.emit(circular_json__WEBPACK_IMPORTED_MODULE_3__["stringify"](loadeddata));
        });
        document.getElementById('file-input').value = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoadFileComponent.prototype, "loaded", void 0);
    LoadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'file-load',
            template: "<button id='loadfile' class='btn' onclick=\"document.getElementById('file-input').click();\">Load</button>\n              <input id=\"file-input\" type=\"file\" name=\"name\" (change)=\"sendloadfile()\" style=\" display: none;\" />",
            styles: [
                "\n            button.btn{\n                margin: 0px 0px 0px 0px;\n                font-size: 10px;\n                line-height: 12px;\n                border: 2px solid gray;\n                border-radius: 4px;\n                padding: 2px 5px;\n                background-color: #3F4651;\n                color: #E7BF00;\n                font-weight: 600;\n                text-transform: uppercase;\n             }\n            button.btn:hover{\n                background-color: gray;\n                color: white;\n            }\n\n             "
            ]
        })
    ], LoadFileComponent);
    return LoadFileComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/file/newfile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/file/newfile.component.ts ***!
  \*************************************************************/
/*! exports provided: NewFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFileComponent", function() { return NewFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flowchart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/flowchart */ "./src/app/shared/models/flowchart/index.ts");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewFileComponent = /** @class */ (function () {
    function NewFileComponent(cdr) {
        this.cdr = cdr;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewFileComponent.prototype.sendNewFile = function () {
        var confirmed = confirm('Resetting would delete the current flowchart. Would you like to continue?');
        if (!confirmed) {
            return;
        }
        var file = {
            name: 'default_file.mob',
            author: 'new_user',
            flowchart: _models_flowchart__WEBPACK_IMPORTED_MODULE_1__["FlowchartUtils"].newflowchart(),
            last_updated: new Date(),
            version: 1
        };
        this.create.emit(circular_json__WEBPACK_IMPORTED_MODULE_2__["stringify"](file));
        this.cdr.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewFileComponent.prototype, "create", void 0);
    NewFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'file-new',
            template: "<button id='newfile' class='btn' (click)='sendNewFile()'>New</button>",
            styles: [
                "\n            button.btn{\n                margin: 0px 0px 0px 0px;\n                font-size: 10px;\n                line-height: 12px;\n                border: 2px solid gray;\n                border-radius: 4px;\n                padding: 2px 5px;\n                background-color: #3F4651;\n                color: #E7BF00;\n                font-weight: 600;\n                text-transform: uppercase;\n            }\n            button.btn:hover{\n                background-color: gray;\n                color: white;\n            }\n             "
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NewFileComponent);
    return NewFileComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/file/savefile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/file/savefile.component.ts ***!
  \**************************************************************/
/*! exports provided: SaveFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveFileComponent", function() { return SaveFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _download_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.utils */ "./src/app/shared/components/file/download.utils.ts");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_flowchart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/flowchart */ "./src/app/shared/models/flowchart/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaveFileComponent = /** @class */ (function () {
    function SaveFileComponent() {
    }
    // todo: save file
    SaveFileComponent.prototype.download = function () {
        if (!this.file.flowchart.ordered) {
            _models_flowchart__WEBPACK_IMPORTED_MODULE_3__["FlowchartUtils"].orderNodes(this.file.flowchart);
        }
        var savedfile = circular_json__WEBPACK_IMPORTED_MODULE_2__["parse"](circular_json__WEBPACK_IMPORTED_MODULE_2__["stringify"](this.file));
        for (var _i = 0, _a = savedfile.flowchart.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.input.hasOwnProperty('value')) {
                node.input.value = undefined;
            }
            if (node.output.hasOwnProperty('value')) {
                node.output.value = undefined;
            }
            for (var _b = 0, _c = node.state.procedure; _b < _c.length; _b++) {
                var prod = _c[_b];
                prod.selected = false;
            }
            node.state.procedure = [];
        }
        // **** need to modify this when changing the input's constant function:
        // **** this part resets the value of the last argument of the function when saving the file
        for (var _d = 0, _e = savedfile.flowchart.nodes[0].procedure; _d < _e.length; _d++) {
            var prod = _e[_d];
            prod.args[prod.argCount - 1].value = undefined;
        }
        savedfile.flowchart.meta.selected_nodes = [0];
        for (var _f = 0, _g = savedfile.flowchart.edges; _f < _g.length; _f++) {
            var edge = _g[_f];
            edge.selected = false;
        }
        savedfile.name = savedfile.flowchart.name;
        var fileString = circular_json__WEBPACK_IMPORTED_MODULE_2__["stringify"](savedfile);
        var fname = savedfile.flowchart.name.replace(/\ /g, '_') + ".mob";
        var blob = new Blob([fileString], { type: 'application/json' });
        _download_utils__WEBPACK_IMPORTED_MODULE_1__["DownloadUtils"].downloadFile(fname, blob);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SaveFileComponent.prototype, "file", void 0);
    SaveFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'file-save',
            template: "<button id='savefile' class='btn' (click)='download()'>Save</button>",
            styles: [
                "\n            button.btn{\n                margin: 0px 0px 0px 0px;\n                font-size: 10px;\n                line-height: 12px;\n                border: 2px solid gray;\n                border-radius: 4px;\n                padding: 2px 5px;\n                background-color: #3F4651;\n                color: #E7BF00;\n                font-weight: 600;\n                text-transform: uppercase;\n             }\n            button.btn:hover{\n                background-color: gray;\n                color: white;\n            }\n             "
            ]
        })
    ], SaveFileComponent);
    return SaveFileComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'panel-header',
            template: "<div class='panel__header'>\n                    <h3>{{node?.name}} // {{title}}</h3>\n              </div>",
            styles: [
                ".panel__header{\n                font-weight: 600;\n                border: 2px solid #222;\n                border-radius: 4px;\n                padding: 5px;\n             }\n             h3{\n                margin: 0px;\n             }"
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_router) {
        this._router = _router;
        this._links = [
            { path: '/about',
                name: 'about'
            },
            { path: '/gallery',
                name: 'gallery'
            },
            { path: '/publish',
                name: 'publish'
            },
            { path: '/editor',
                name: 'editor'
            },
        ];
    }
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation',
            template: "<ul class='nav'>\n                <li class='link' *ngFor='let link of _links;'\n                      [class.active]='link.path == _router.url'\n                      [routerLink]=\"link.path\"\n                      >{{link.name}}</li>\n              </ul>",
            styles: ["\n      ul.nav{\n        margin: 0px;\n        padding: 0px;\n      }\n\n      li.link{\n        display: inline;\n        border: 2px solid gray;\n        border-radius: 4px;\n        margin: 15px 15px 15px 0px;\n        padding: 5px;\n        text-transform: uppercase;\n        font-weight: 600;\n        cursor: pointer;\n        font-size: 16px;\n      }\n\n      li.link:hover{\n        background-color: gray;\n        color: white;\n      }\n\n      .active{\n        background-color: #222;\n        color: white;\n        border-color: #222 !important;\n      }\n  "],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page Not Found</h1>\r\n<p>Dolore ex aliqua ut incididunt laborum deserunt pariatur officia.</p>\r\n"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/shared/components/not-found/not-found.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container container--parameter'>\r\n\r\n    <div class='parameter__name'>{{ port.name }}</div>\r\n\r\n    <!-- Slider, SimpleInput ... etc -->\r\n    <div class='parameter__mode' [ngSwitch]=\"port.meta.mode\">\r\n        \r\n        <!-- Simple Input Template -->\r\n        <div *ngSwitchCase=\"PortTypes.SimpleInput\">\r\n            <input [(ngModel)]='port.value' name='port.name' placeholder='Enter Value: Defaults to {{port.default}}'> \r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"PortTypes.Slider\">\r\n            <!-- <input  placeholder='Enter Value: Defaults to {{port.default}}'> -->\r\n            <input [(ngModel)]='port.value' value='port.value' placeholder='{{port.default}}' disabled>\r\n            <input [(ngModel)]='port.value' name='port.name' placeholder='{{port.default}}' type=\"range\">\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"PortTypes.Checkbox\">\r\n            <input *ngSwitchCase=\"PortTypes.Checkbox\" [(ngModel)]='port.value' name='port.name' type=\"checkbox\">\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"PortTypes.URL\">\r\n            <input [(ngModel)]='port.value' name='port.name' placeholder='Enter URL: Defaults to {{port.default}}'> \r\n        </div>\r\n        <div *ngSwitchCase=\"PortTypes.File\">\r\n            <input (change)=\"onFileChange($event)\" type=\"file\">\r\n        </div>\r\n    \r\n        <!-- TODO1: SwitchCase for remaining PortTypes -->\r\n        <!-- TODO2: Connect values to port.value -->\r\n    \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 5px 0px; }\n\n.container--parameter {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.parameter__name {\n  width: 100px;\n  height: auto;\n  word-wrap: break-word; }\n"

/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: InputPortViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPortViewerComponent", function() { return InputPortViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/port */ "./src/app/shared/models/port/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputPortViewerComponent = /** @class */ (function () {
    function InputPortViewerComponent() {
        this.PortTypes = _models_port__WEBPACK_IMPORTED_MODULE_1__["InputType"];
    }
    InputPortViewerComponent.prototype.onFileChange = function (event) {
        this.port.value = event.target.files[0];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputPortViewerComponent.prototype, "port", void 0);
    InputPortViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-port-viewer',
            template: __webpack_require__(/*! ./input-port-viewer.component.html */ "./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.html"),
            styles: [__webpack_require__(/*! ./input-port-viewer.component.scss */ "./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputPortViewerComponent);
    return InputPortViewerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/parameter-viewer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/parameter-viewer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{flowchart.name}}</h2>\r\n<p>{{flowchart.description}}</p>\r\n<hr>\r\n\r\n<!-- <p>Edit the parameters of your flowchart here. These parameters are visible in the viewer when you share your flowchart.</p> -->\r\n<procedure-input-viewer *ngFor=\"let prod of startNode.procedure\" [prod]=\"prod\"></procedure-input-viewer>\r\n"

/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/parameter-viewer.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/parameter-viewer.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: transparent;\n  width: auto;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap; }\n\nh2 {\n  color: #505050;\n  text-align: left;\n  padding-left: 15px;\n  font-size: 12px;\n  line-height: 16px; }\n\np {\n  color: #505050;\n  text-align: left;\n  padding-left: 15px;\n  font-size: 12px;\n  line-height: 14px; }\n\nhr {\n  border-top: 2px solid #efefef; }\n\ndiv[class^=\"container--\"] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px; }\n"

/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/parameter-viewer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/parameter-viewer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ParameterViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterViewerComponent", function() { return ParameterViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParameterViewerComponent = /** @class */ (function () {
    function ParameterViewerComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParameterViewerComponent.prototype, "flowchart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParameterViewerComponent.prototype, "startNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParameterViewerComponent.prototype, "endNode", void 0);
    ParameterViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'parameter-viewer',
            template: __webpack_require__(/*! ./parameter-viewer.component.html */ "./src/app/shared/components/parameter-viewer/parameter-viewer.component.html"),
            styles: [__webpack_require__(/*! ./parameter-viewer.component.scss */ "./src/app/shared/components/parameter-viewer/parameter-viewer.component.scss")]
        })
    ], ParameterViewerComponent);
    return ParameterViewerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n    <div class='container--parameter'>\r\n        <input [class.disabled-input]='true' value='{{prod.args[prod.argCount-2].value||\"Undefined\"}}:' disabled>\r\n        <!--\r\n        <select name={{prod.id}}_type [(ngModel)]=\"prod.meta.inputMode\">\r\n            <option \r\n                *ngFor=\"let ptype of PortTypesArr\" \r\n                [value]=\"PortTypes[ptype]\" \r\n                [selected]=\"prod.meta.inputMode == ptype\">{{ptype}}</option>\r\n        </select>\r\n        -->\r\n        <ng-container class='parameter__name' [ngSwitch]=\"prod.meta.inputMode\">\r\n            <!--\r\n\r\n            <div *ngSwitchCase=\"PortTypes.SimpleInput\">\r\n                <input [(ngModel)]='port.value' name='port.name' placeholder='Enter Value: Defaults to {{port.default}}'> \r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"PortTypes.Slider\">\r\n                <input [(ngModel)]='port.value' value='port.value' placeholder='{{port.default}}' disabled>\r\n                <input [(ngModel)]='port.value' name='port.name' placeholder='{{port.default}}' type=\"range\">\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"PortTypes.Checkbox\">\r\n                <input *ngSwitchCase=\"PortTypes.Checkbox\" [(ngModel)]='port.value' name='port.name' type=\"checkbox\">\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"PortTypes.URL\">\r\n                <input [(ngModel)]='port.value' name='port.name' placeholder='Enter URL: Defaults to {{port.default}}'> \r\n            </div>\r\n            <div *ngSwitchCase=\"PortTypes.File\">\r\n                <input (change)=\"onFileChange($event)\" type=\"file\">\r\n            </div>\r\n        \r\n            -->\r\n\r\n            <input *ngSwitchCase=\"PortTypes.SimpleInput\" [(ngModel)]='prod.args[prod.argCount-1].value' \r\n            placeholder='{{prod.args[prod.argCount-1].default}}'\r\n            size={{prod.args[prod.argCount-1].value?.length||prod.args[prod.argCount-1].default.length}}>\r\n            \r\n            <ng-container *ngSwitchCase=\"PortTypes.Slider\">\r\n                <mat-slider\r\n                    [(ngModel)]='prod.args[prod.argCount-1].value'\r\n                    thumbLabel\r\n                    tickInterval=\"auto\"\r\n                    min={{prod.args[prod.argCount-1].min||0}}\r\n                    max={{prod.args[prod.argCount-1].max||100}}></mat-slider>\r\n                <input [class.disabled-input]='true' [(ngModel)]='prod.args[prod.argCount-1].value' size={{prod.args[prod.argCount-1].value?.length||1}} disabled>\r\n\r\n\r\n                <!--\r\n                <input [(ngModel)]='prod.args[prod.argCount-1].value' name='prod.args[prod.argCount-1].value' type=\"range\" placeholder='{{prod.args[prod.argCount-1].default}}'>\r\n                <input [(ngModel)]='prod.args[prod.argCount-1].value' value='prod.args[prod.argCount-1].value'  placeholder='{{prod.args[prod.argCount-1].default}}' disabled>\r\n                -->\r\n            </ng-container>\r\n            <input *ngSwitchCase=\"PortTypes.Checkbox\" [(ngModel)]='prod.args[prod.argCount-1].value' type=\"checkbox\">\r\n            <input *ngSwitchCase=\"PortTypes.URL\" [(ngModel)]='prod.args[prod.argCount-1].value' placeholder='Enter URL: Defaults to {{prod.args[prod.argCount-1].default}}'>\r\n            <input *ngSwitchCase=\"PortTypes.File\" (change)=\"onFileChange($event)\" type=\"file\">\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: block;\n  margin: 5px 0px 0px 5px;\n  width: 100%; }\n\n.container--parameter {\n  display: inline-block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  bottom: 0px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #efefef;\n  border-left: 1px solid #efefef;\n  width: 100%; }\n\n.container--input {\n  display: inline-flex;\n  flex-direction: row; }\n\ninput {\n  color: #505050;\n  background-color: gainsboro;\n  border: none;\n  border-bottom: 1px solid #505050;\n  margin-left: 5px;\n  vertical-align: bottom; }\n\ninput.disabled-input {\n    border-bottom: none; }\n\n.parameter__name {\n  display: inline-block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100px; }\n\nmat-slider {\n  width: 300px; }\n"

/***/ }),

/***/ "./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProcedureInputViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureInputViewerComponent", function() { return ProcedureInputViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/port */ "./src/app/shared/models/port/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcedureInputViewerComponent = /** @class */ (function () {
    function ProcedureInputViewerComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PortTypes = _models_port__WEBPACK_IMPORTED_MODULE_1__["InputType"];
    }
    ProcedureInputViewerComponent.prototype.editOptions = function () { };
    ProcedureInputViewerComponent.prototype.onFileChange = function (event) {
        this.prod.args[this.prod.argCount - 1].value = event.target.files[0];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProcedureInputViewerComponent.prototype, "prod", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProcedureInputViewerComponent.prototype, "delete", void 0);
    ProcedureInputViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'procedure-input-viewer',
            template: __webpack_require__(/*! ./procedure-input-viewer.component.html */ "./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.html"),
            styles: [__webpack_require__(/*! ./procedure-input-viewer.component.scss */ "./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcedureInputViewerComponent);
    return ProcedureInputViewerComponent;
}());



/***/ }),

/***/ "./src/app/shared/decorators/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/decorators/index.ts ***!
  \********************************************/
/*! exports provided: ModuleAware, ModuleDocAware, ProcedureTypesAware, ViewerTypesAware, PortTypesAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_aware_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-aware.decorator */ "./src/app/shared/decorators/module-aware.decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleAware", function() { return _module_aware_decorator__WEBPACK_IMPORTED_MODULE_0__["ModuleAware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleDocAware", function() { return _module_aware_decorator__WEBPACK_IMPORTED_MODULE_0__["ModuleDocAware"]; });

/* harmony import */ var _prodtypes_aware_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prodtypes-aware.decorator */ "./src/app/shared/decorators/prodtypes-aware.decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcedureTypesAware", function() { return _prodtypes_aware_decorator__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypesAware"]; });

/* harmony import */ var _viewertypes_aware_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewertypes-aware.decorator */ "./src/app/shared/decorators/viewertypes-aware.decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerTypesAware", function() { return _viewertypes_aware_decorator__WEBPACK_IMPORTED_MODULE_2__["ViewerTypesAware"]; });

/* harmony import */ var _porttypes_aware_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./porttypes-aware.decorator */ "./src/app/shared/decorators/porttypes-aware.decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortTypesAware", function() { return _porttypes_aware_decorator__WEBPACK_IMPORTED_MODULE_3__["PortTypesAware"]; });








/***/ }),

/***/ "./src/app/shared/decorators/module-aware.decorator.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/decorators/module-aware.decorator.ts ***!
  \*************************************************************/
/*! exports provided: ModuleAware, ModuleDocAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAware", function() { return ModuleAware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleDocAware", function() { return ModuleDocAware; });
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules */ "./src/app/core/modules/index.ts");

var doc = __webpack_require__(/*! @assets/typedoc-json/doc.json */ "./src/assets/typedoc-json/doc.json");
var docs;
var module_list = [];
// todo: bug fix for defaults
function extract_params(func) {
    var fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
    var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).split(','); // .match( /([^\s,]+)/g);
    if (result === null || result[0] === '') {
        result = [];
    }
    var final_result = result.map(function (r) {
        r = r.trim();
        var r_value = r.split('=');
        if (r_value.length === 1) {
            return { name: r_value[0].trim(), value: undefined, default: 0 };
        }
        else {
            return { name: r_value[0].trim(), value: undefined, default: 0 };
        }
    });
    var hasReturn = true;
    if (fnStr.indexOf('return') === -1 || fnStr.indexOf('return;') !== -1) {
        hasReturn = false;
    }
    return [final_result, hasReturn];
}
function ModuleAware(constructor) {
    if (module_list.length === 0) {
        for (var m_name in _modules__WEBPACK_IMPORTED_MODULE_0__) {
            if (m_name[0] === '_') {
                continue;
            }
            var modObj = {};
            modObj.module = m_name;
            modObj.functions = [];
            for (var _i = 0, _a = Object.keys(_modules__WEBPACK_IMPORTED_MODULE_0__[m_name]); _i < _a.length; _i++) {
                var fn_name = _a[_i];
                var func = _modules__WEBPACK_IMPORTED_MODULE_0__[m_name][fn_name];
                var fnObj = {};
                fnObj.module = m_name;
                fnObj.name = fn_name;
                fnObj.argCount = func.length;
                var args = extract_params(func);
                fnObj.args = args[0];
                fnObj.hasReturn = args[1];
                modObj.functions.push(fnObj);
            }
            module_list.push(modObj);
        }
    }
    constructor.prototype.Modules = module_list;
}
function ModuleDocAware(constructor) {
    if (!docs) {
        docs = {};
        for (var _i = 0, _a = doc.children; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.name.substr(1, 1) === '_' || mod.name === '"index"') {
                continue;
            }
            var modName = mod.name.substr(1, mod.name.length - 2);
            var moduleDoc = {};
            for (var _b = 0, _c = mod.children; _b < _c.length; _b++) {
                var func = _c[_b];
                var fn = {};
                fn['name'] = func.name;
                fn['module'] = modName;
                if (!func['signatures']) {
                    continue;
                }
                if (func['signatures'][0].comment) {
                    var cmmt = func['signatures'][0].comment;
                    fn['description'] = cmmt.shortText;
                    if (cmmt.tags) {
                        for (var _d = 0, _e = cmmt.tags; _d < _e.length; _d++) {
                            var fnTag = _e[_d];
                            if (fnTag.tag === 'summary') {
                                fn['summary'] = fnTag.text;
                            }
                        }
                    }
                    fn['returns'] = cmmt.returns;
                    if (fn['returns']) {
                        fn['returns'] = fn['returns'].trim();
                    }
                }
                fn['parameters'] = [];
                if (func['signatures'][0].parameters) {
                    for (var _f = 0, _g = func['signatures'][0].parameters; _f < _g.length; _f++) {
                        var param = _g[_f];
                        var namecheck = true;
                        for (var systemVarName in _modules__WEBPACK_IMPORTED_MODULE_0__["_parameterTypes"]) {
                            if (param.name === _modules__WEBPACK_IMPORTED_MODULE_0__["_parameterTypes"][systemVarName]) {
                                namecheck = false;
                                break;
                            }
                        }
                        if (!namecheck) {
                            continue;
                        }
                        var pr = {};
                        pr['name'] = param.name;
                        if (param.comment) {
                            pr['description'] = param.comment.shortText || param.comment.text;
                        }
                        if (param.type.type === 'array') {
                            pr['type'] = param.type.elementType.name + "[]";
                        }
                        else if (param.type.type === 'intrinsic') {
                            pr['type'] = param.type.name;
                        }
                        else if (param.type.type === 'reference') {
                            pr['type'] = param.type.name;
                        }
                        else {
                            /**
                             * TODO: Update param type here
                             */
                            console.log('param type requires updating:', param.type);
                            pr['type'] = param.type.type;
                        }
                        fn['parameters'].push(pr);
                    }
                }
                moduleDoc[func.name] = fn;
            }
            docs[modName] = moduleDoc;
        }
    }
    constructor.prototype.ModuleDoc = docs;
}


/***/ }),

/***/ "./src/app/shared/decorators/porttypes-aware.decorator.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/decorators/porttypes-aware.decorator.ts ***!
  \****************************************************************/
/*! exports provided: PortTypesAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortTypesAware", function() { return PortTypesAware; });
/* harmony import */ var _models_port__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/port */ "./src/app/shared/models/port/index.ts");

function PortTypesAware(constructor) {
    constructor.prototype.PortTypes = _models_port__WEBPACK_IMPORTED_MODULE_0__["InputType"];
    // array form
    var keys = Object.keys(_models_port__WEBPACK_IMPORTED_MODULE_0__["InputType"]);
    constructor.prototype.PortTypesArr = keys.slice(keys.length / 2);
}


/***/ }),

/***/ "./src/app/shared/decorators/prodtypes-aware.decorator.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/decorators/prodtypes-aware.decorator.ts ***!
  \****************************************************************/
/*! exports provided: ProcedureTypesAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureTypesAware", function() { return ProcedureTypesAware; });
/* harmony import */ var _models_procedure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/procedure */ "./src/app/shared/models/procedure/index.ts");

function ProcedureTypesAware(constructor) {
    constructor.prototype.ProcedureTypes = _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"];
    // array form
    var keys = Object.keys(_models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"]);
    constructor.prototype.ProcedureTypesArr = keys.slice(keys.length / 2);
}


/***/ }),

/***/ "./src/app/shared/decorators/viewertypes-aware.decorator.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/decorators/viewertypes-aware.decorator.ts ***!
  \******************************************************************/
/*! exports provided: ViewerTypesAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerTypesAware", function() { return ViewerTypesAware; });
/* harmony import */ var _models_port__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/port */ "./src/app/shared/models/port/index.ts");

function ViewerTypesAware(constructor) {
    constructor.prototype.ViewerTypes = _models_port__WEBPACK_IMPORTED_MODULE_0__["OutputType"];
    // array form
    var keys = Object.keys(_models_port__WEBPACK_IMPORTED_MODULE_0__["OutputType"]);
    constructor.prototype.ViewerTypesArr = keys.slice(keys.length / 2);
}


/***/ }),

/***/ "./src/app/shared/directives/filesys/index.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/directives/filesys/index.ts ***!
  \****************************************************/
/*! exports provided: MbFileReaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobfile_reader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobfile-reader.directive */ "./src/app/shared/directives/filesys/mobfile-reader.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MbFileReaderDirective", function() { return _mobfile_reader_directive__WEBPACK_IMPORTED_MODULE_0__["MbFileReaderDirective"]; });




/***/ }),

/***/ "./src/app/shared/directives/filesys/mobfile-reader.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/directives/filesys/mobfile-reader.directive.ts ***!
  \***********************************************************************/
/*! exports provided: MbFileReaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbFileReaderDirective", function() { return MbFileReaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 *  Adding this to an HTML5 input element
 *  allows for the file being read to be converted into a Mobius
 *  Flowchart
 *
 */


var MbFileReaderDirective = /** @class */ (function () {
    function MbFileReaderDirective(el) {
        this.el = el;
        this.data = {};
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MbFileReaderDirective.prototype.onFileChange = function () {
        var f = this.el.nativeElement.files[0];
        if (f) {
            var reader = new FileReader();
            reader.readAsText(f, 'UTF-8');
            var ins_1 = this;
            reader.onload = function (evt) {
                var fileString = evt.target['result'];
                ins_1.load_flowchart_from_string(fileString);
            };
            reader.onerror = function (evt) {
                console.log('Error reading file');
            };
        }
    };
    //
    // Input: string
    // Output: MobiusFile DS
    //
    //
    MbFileReaderDirective.prototype.load_flowchart_from_string = function (fileString) {
        var _this = this;
        // let jsonData: {language: string, flowchart: JSON, modules: JSON};
        // let flowchart: any; // IFlowchart;
        try {
            var data = circular_json__WEBPACK_IMPORTED_MODULE_1__["parse"](fileString);
            this.load.emit(data);
            // this.data.flowchart = data.flowchart;
            // this.data.modules = data.modules;
            // this.data.language = data.language;
            // this.update_code_generator(CodeFactory.getCodeGenerator(data["language"]));
            // TODO: this.update_modules();
            // flowchart = FlowchartReader.read_flowchart_from_data(data["flowchart"]);
            // TODO: select a node
        }
        catch (err) {
            console.error('Mob-file-reader error', err);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MbFileReaderDirective.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MbFileReaderDirective.prototype, "load", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MbFileReaderDirective.prototype, "onFileChange", null);
    MbFileReaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mbFileReader]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MbFileReaderDirective);
    return MbFileReaderDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/textarea/autogrow.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/textarea/autogrow.directive.ts ***!
  \******************************************************************/
/*! exports provided: AutogrowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutogrowDirective", function() { return AutogrowDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutogrowDirective = /** @class */ (function () {
    function AutogrowDirective(el) {
        this.el = el;
    }
    AutogrowDirective.prototype.onKeyUp = function () {
        this.el.nativeElement.style.height = '5px';
        this.el.nativeElement.style.height = (this.el.nativeElement.scrollHeight) + 'px';
    };
    AutogrowDirective.prototype.onKeyDown = function () {
        this.el.nativeElement.style.height = '5px';
        this.el.nativeElement.style.height = (this.el.nativeElement.scrollHeight) + 'px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AutogrowDirective.prototype, "onKeyUp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AutogrowDirective.prototype, "onKeyDown", null);
    AutogrowDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[autogrow]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutogrowDirective);
    return AutogrowDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/textarea/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/directives/textarea/index.ts ***!
  \*****************************************************/
/*! exports provided: AutogrowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autogrow_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autogrow.directive */ "./src/app/shared/directives/textarea/autogrow.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutogrowDirective", function() { return _autogrow_directive__WEBPACK_IMPORTED_MODULE_0__["AutogrowDirective"]; });




/***/ }),

/***/ "./src/app/shared/models/code/code.utils.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/code/code.utils.ts ***!
  \**************************************************/
/*! exports provided: CodeUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeUtils", function() { return CodeUtils; });
/* harmony import */ var _models_procedure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/procedure */ "./src/app/shared/models/procedure/index.ts");
/* harmony import */ var _models_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/port */ "./src/app/shared/models/port/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules */ "./src/app/core/modules/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CodeUtils = /** @class */ (function () {
    function CodeUtils() {
    }
    CodeUtils.getProcedureCode = function (prod, existingVars, addProdArr) {
        return __awaiter(this, void 0, void 0, function () {
            var codeStr, args, prefix, _a, constName, argVals, _loop_1, _i, _b, arg, argValues, fnCall, argsVals, fn, _c, _d, p, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (prod.enabled === false) {
                            return [2 /*return*/, ''];
                        }
                        prod.hasError = false;
                        codeStr = [];
                        args = prod.args;
                        prefix = args.hasOwnProperty('0') && existingVars.indexOf(args[0].value) === -1 ? 'let ' : '';
                        codeStr.push('');
                        if (addProdArr && prod.type !== _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Else && prod.type !== _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Elseif) {
                            codeStr.push("__params__.currentProcedure[0] = \"" + prod.ID + "\";");
                        }
                        _a = prod.type;
                        switch (_a) {
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Variable: return [3 /*break*/, 1];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].If: return [3 /*break*/, 2];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Else: return [3 /*break*/, 3];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Elseif: return [3 /*break*/, 4];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Foreach: return [3 /*break*/, 5];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].While: return [3 /*break*/, 6];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Break: return [3 /*break*/, 7];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Continue: return [3 /*break*/, 8];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Constant: return [3 /*break*/, 9];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Return: return [3 /*break*/, 10];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Function: return [3 /*break*/, 11];
                            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Imported: return [3 /*break*/, 17];
                        }
                        return [3 /*break*/, 18];
                    case 1:
                        if (args[0].value.indexOf('__params__') !== -1 || args[1].value.indexOf('__params__') !== -1) {
                            throw new Error('Unexpected Identifier');
                        }
                        codeStr.push("" + prefix + args[0].value + " = " + args[1].value + ";");
                        if (prefix === 'let ') {
                            existingVars.push(args[0].value);
                        }
                        return [3 /*break*/, 18];
                    case 2:
                        if (args[0].value.indexOf('__params__') !== -1) {
                            throw new Error('Unexpected Identifier');
                        }
                        codeStr.push("if (" + args[0].value + "){");
                        return [3 /*break*/, 18];
                    case 3:
                        codeStr.push("else {");
                        return [3 /*break*/, 18];
                    case 4:
                        if (args[0].value.indexOf('__params__') !== -1) {
                            throw new Error('Unexpected Identifier');
                        }
                        codeStr.push("else if(" + args[0].value + "){");
                        return [3 /*break*/, 18];
                    case 5:
                        // codeStr.push(`for (${prefix} ${args[0].value} of [...Array(${args[1].value}).keys()]){`);
                        if (args[0].value.indexOf('__params__') !== -1) {
                            throw new Error('Unexpected Identifier');
                        }
                        codeStr.push("for (" + prefix + " " + args[0].value + " of " + args[1].value + "){");
                        return [3 /*break*/, 18];
                    case 6:
                        if (args[0].value.indexOf('__params__') !== -1) {
                            throw new Error('Unexpected Identifier');
                        }
                        codeStr.push("while (" + args[0].value + "){");
                        return [3 /*break*/, 18];
                    case 7:
                        codeStr.push("break;");
                        return [3 /*break*/, 18];
                    case 8:
                        codeStr.push("continue;");
                        return [3 /*break*/, 18];
                    case 9:
                        constName = args[0].value;
                        if (args[0].value.substring(0, 1) === '"' || args[0].value.substring(0, 1) === '\'') {
                            constName = args[0].value.substring(1, args[0].value.length - 1);
                        }
                        codeStr.push("__params__['constants']['" + constName + "'] = " + (args[1].value || args[1].default) + ";");
                        return [3 /*break*/, 18];
                    case 10:
                        codeStr.push("if (" + args[0].value + " > __params__['model'].length) { return __params__['model']; }");
                        codeStr.push("return __params__['model'][" + args[0].value + "].value;");
                        return [3 /*break*/, 18];
                    case 11:
                        argVals = [];
                        _loop_1 = function (arg) {
                            var val, p, p;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(arg.name === _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"].input)) return [3 /*break*/, 5];
                                        val = arg.value || arg.default;
                                        if (!(prod.meta.inputMode.toString() === _models_port__WEBPACK_IMPORTED_MODULE_1__["InputType"].URL.toString())) return [3 /*break*/, 2];
                                        p = new Promise(function (resolve) {
                                            var request = new XMLHttpRequest();
                                            request.open('GET', arg.value || arg.default);
                                            request.onload = function () {
                                                resolve(request.responseText);
                                            };
                                            request.send();
                                        });
                                        return [4 /*yield*/, p];
                                    case 1:
                                        val = _a.sent();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        if (!(prod.meta.inputMode.toString() === _models_port__WEBPACK_IMPORTED_MODULE_1__["InputType"].File.toString())) return [3 /*break*/, 4];
                                        p = new Promise(function (resolve) {
                                            var reader = new FileReader();
                                            reader.onload = function () {
                                                resolve(reader.result);
                                            };
                                            reader.readAsText(arg.value || arg.default);
                                        });
                                        return [4 /*yield*/, p];
                                    case 3:
                                        val = _a.sent();
                                        return [3 /*break*/, 4];
                                    case 4:
                                        argVals.push(val);
                                        return [2 /*return*/, "continue"];
                                    case 5:
                                        if (arg.value && arg.value.indexOf('__params__') !== -1) {
                                            throw new Error('Unexpected Identifier');
                                        }
                                        if (arg.name === _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"].constList) {
                                            argVals.push('__params__.constants');
                                            return [2 /*return*/, "continue"];
                                        }
                                        if (arg.name === _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"].model) {
                                            argVals.push('__params__.model');
                                            return [2 /*return*/, "continue"];
                                        }
                                        if (arg.value && arg.value.substring(0, 1) === '@') {
                                            if (prod.meta.module.toUpperCase() === 'QUERY'
                                                && prod.meta.name.toUpperCase() === 'SET'
                                                && arg.name.toUpperCase() === 'STATEMENT') {
                                                argVals.push('"' + arg.value.replace(/"/g, '\'') + '"');
                                                return [2 /*return*/, "continue"];
                                            }
                                            argVals.push('__modules__.Query.get( __params__.model,"' + arg.value.replace(/"/g, '\'') + '" )');
                                            return [2 /*return*/, "continue"];
                                        }
                                        // else if (arg.name.indexOf('__') != -1) return '"'+args[args.indexOf(arg)+1].value+'"';
                                        argVals.push(arg.value);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, _b = args.slice(1);
                        _g.label = 12;
                    case 12:
                        if (!(_i < _b.length)) return [3 /*break*/, 15];
                        arg = _b[_i];
                        return [5 /*yield**/, _loop_1(arg)];
                    case 13:
                        _g.sent();
                        _g.label = 14;
                    case 14:
                        _i++;
                        return [3 /*break*/, 12];
                    case 15:
                        argValues = argVals.join(',');
                        return [4 /*yield*/, argValues];
                    case 16:
                        _g.sent();
                        fnCall = "__modules__." + prod.meta.module + "." + prod.meta.name + "( " + argValues + " )";
                        if (prod.meta.module.toUpperCase() === 'OUTPUT') {
                            codeStr.push("return " + fnCall + ";");
                        }
                        else if (args[0].name === '__none__') {
                            codeStr.push(fnCall + ";");
                        }
                        else {
                            codeStr.push("" + prefix + args[0].value + " = " + fnCall + ";");
                            if (prefix === 'let ') {
                                existingVars.push(args[0].value);
                            }
                        }
                        return [3 /*break*/, 18];
                    case 17:
                        argsVals = args.slice(1).map(function (arg) { return arg.value; }).join(',');
                        fn = prod.meta.name + "(__params__, " + argsVals + " )";
                        codeStr.push("" + prefix + args[0].value + " = " + fn + ";");
                        if (prefix === 'let ') {
                            existingVars.push(args[0].value);
                        }
                        return [3 /*break*/, 18];
                    case 18:
                        if (!prod.children) return [3 /*break*/, 23];
                        _c = 0, _d = prod.children;
                        _g.label = 19;
                    case 19:
                        if (!(_c < _d.length)) return [3 /*break*/, 22];
                        p = _d[_c];
                        _f = (_e = codeStr).push;
                        return [4 /*yield*/, CodeUtils.getProcedureCode(p, existingVars, addProdArr)];
                    case 20:
                        _f.apply(_e, [_g.sent()]);
                        _g.label = 21;
                    case 21:
                        _c++;
                        return [3 /*break*/, 19];
                    case 22:
                        codeStr.push("}");
                        _g.label = 23;
                    case 23:
                        if (prod.print) {
                            codeStr.push("console.log('" + prod.args[0].value + ": '+ " + prod.args[0].value + ");");
                            // codeStr.push(`wait(5000);`);
                        }
                        return [2 /*return*/, codeStr.join('\n')];
                }
            });
        });
    };
    CodeUtils.loadFile = function (f) {
        var stream = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var request = new XMLHttpRequest();
            request.open('GET', f.download_url);
            request.onload = function () {
                if (request.status === 200) {
                    var fl = circular_json__WEBPACK_IMPORTED_MODULE_3__["parse"](request.responseText);
                    observer.next(fl);
                    observer.complete();
                }
                else {
                    observer.error('error happened');
                }
            };
            request.onerror = function () {
                observer.error('error happened');
            };
            request.send();
        });
        stream.subscribe(function (loadeddata) {
            return loadeddata;
        });
    };
    CodeUtils.mergeInputs = function (models) {
        var result = _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"]['newFn']();
        for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
            var model = models_1[_i];
            _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"]['mergeFn'](result, model);
        }
        return result;
    };
    CodeUtils.getInputValue = function (inp, node) {
        var input;
        if (node.type === 'start' || inp.edges.length === 0) {
            input = _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"]['newFn']();
        }
        else {
            input = CodeUtils.mergeInputs(inp.edges.map(function (edge) { return edge.source.value; }));
            /*
            if (typeof input === 'number' || input === undefined){
                // do nothing
            } else if (typeof input === 'string'){
                input = '"' + input + '"';
            } else if (input.constructor === [].constructor){
                input = '[' + input + ']';
            } else if (input.constructor === {}.constructor) {
                input = JSON.stringify(input);
            } else {
                // do nothing
            }
            */
        }
        return input;
    };
    CodeUtils.getNodeCode = function (node, addProdArr) {
        if (addProdArr === void 0) { addProdArr = false; }
        return __awaiter(this, void 0, void 0, function () {
            var codeStr, varsDefined, input, _i, _a, prod, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        node.hasError = false;
                        codeStr = [];
                        varsDefined = [];
                        if (!addProdArr) return [3 /*break*/, 2];
                        return [4 /*yield*/, CodeUtils.getInputValue(node.input, node)];
                    case 1:
                        input = _d.sent();
                        node.input.value = input;
                        _d.label = 2;
                    case 2:
                        if (node.type === 'start') {
                            codeStr.push('__params__.constants = {};\n');
                        }
                        /*
                        codeStr.push(`
                function wait(ms){
                     start = new Date().getTime();
                     end = start;
                    while(end < start + ms) {
                        end = new Date().getTime();
                    }
                }
                        `)
                        */
                        codeStr.push("__modules__." + _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"].preprocess + "( __params__.model);");
                        _i = 0, _a = node.procedure;
                        _d.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        prod = _a[_i];
                        _c = (_b = codeStr).push;
                        return [4 /*yield*/, CodeUtils.getProcedureCode(prod, varsDefined, addProdArr)];
                    case 4:
                        _c.apply(_b, [_d.sent()]);
                        _d.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        if (node.type === 'end' && node.procedure.length > 0) {
                            return [2 /*return*/, "{\n" + codeStr.join('\n') + "\n}"];
                        }
                        else {
                            codeStr.push("__modules__." + _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"].postprocess + "( __params__.model);");
                        }
                        return [2 /*return*/, "\n" + codeStr.join('\n') + "\n\nreturn __params__.model;\n"];
                }
            });
        });
    };
    CodeUtils.getFunctionString = function (func) {
        return __awaiter(this, void 0, void 0, function () {
            var fullCode, fnCode, _i, _a, node, code, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        fullCode = '';
                        fnCode = "function " + func.name + "(__mainParams__," + func.args.map(function (arg) { return arg.name; }).join(',') + ")" +
                            ("{\nvar merged;\nlet __params__={\"currentProcedure\": [''],\"model\":__modules__." + _modules__WEBPACK_IMPORTED_MODULE_4__["_parameterTypes"]['new'] + "()};\n");
                        _i = 0, _a = func.flowchart.nodes;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        node = _a[_i];
                        _b = '{';
                        return [4 /*yield*/, CodeUtils.getNodeCode(node, false)];
                    case 2:
                        code = _b + (_c.sent()) + '}';
                        fullCode += "function " + node.id + "(__params__, " + func.args.map(function (arg) { return arg.name; }).join(',') + ")" + code + "\n\n";
                        if (node.type === 'start') {
                            // fnCode += `let result_${node.id} = ${node.id}(__params__);\n`
                            fnCode += "let result_" + node.id + " = __params__.model;\n";
                        }
                        else if (node.input.edges.length === 1) {
                            fnCode += "__params__.model = JSON.parse(JSON.stringify(result_" + node.input.edges[0].source.parentNode.id + "));\n";
                            fnCode += "let result_" + node.id + " = " + node.id + "(__params__, " + func.args.map(function (arg) { return arg.name; }).join(',') + ");\n";
                        }
                        else {
                            fnCode += "merged = mergeInputs([" + node.input.edges.map(function (edge) { return 'result_' + edge.source.parentNode.id; }).join(',') + "]);\n";
                            fnCode += "__params__.model = merged;\n";
                            fnCode += "let result_" + node.id + " = " + node.id + "(__params__, " + func.args.map(function (arg) { return arg.name; }).join(',') + ");\n";
                        }
                        /*
                        } else if (node.input.edges.length == 1) {
                            fnCode += `let result_${node.id} = ${node.id}(result_${node.input.edges[0].source.parentNode.id});\n`
                        } else {
                            fnCode += `merged = mergeResults([${node.input.edges.map((edge)=>'result_'+edge.source.parentNode.id).join(',')}]);\n`;
                            fnCode += `let result_${node.id} = ${node.id}(merged);\n`
            
            
                        */
                        if (node.type === 'end') {
                            fnCode += "\n__mainParams__.model = mergeInputs([__mainParams__.model,__params__.model]);\n";
                            fnCode += "return result_" + node.id + ";\n";
                        }
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        fnCode += '}\n\n';
                        fullCode += fnCode;
                        // console.log(fullCode)
                        return [2 /*return*/, fullCode];
                }
            });
        });
    };
    return CodeUtils;
}());



/***/ }),

/***/ "./src/app/shared/models/code/execute.utils.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/code/execute.utils.ts ***!
  \*****************************************************/
/*! exports provided: ExecuteUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteUtils", function() { return ExecuteUtils; });
var ExecuteUtils = /** @class */ (function () {
    function ExecuteUtils() {
    }
    return ExecuteUtils;
}());



/***/ }),

/***/ "./src/app/shared/models/code/index.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/code/index.ts ***!
  \*********************************************/
/*! exports provided: CodeUtils, ExecuteUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code.utils */ "./src/app/shared/models/code/code.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeUtils", function() { return _code_utils__WEBPACK_IMPORTED_MODULE_0__["CodeUtils"]; });

/* harmony import */ var _execute_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./execute.utils */ "./src/app/shared/models/code/execute.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecuteUtils", function() { return _execute_utils__WEBPACK_IMPORTED_MODULE_1__["ExecuteUtils"]; });





/***/ }),

/***/ "./src/app/shared/models/flowchart/flowchart.utils.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/models/flowchart/flowchart.utils.ts ***!
  \************************************************************/
/*! exports provided: FlowchartUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowchartUtils", function() { return FlowchartUtils; });
/* harmony import */ var _models_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/node */ "./src/app/shared/models/node/index.ts");

var FlowchartUtils = /** @class */ (function () {
    function FlowchartUtils() {
    }
    FlowchartUtils.newflowchart = function () {
        var flw = {
            name: 'new_flowchart',
            description: '',
            language: 'js',
            meta: {
                selected_nodes: [0]
            },
            nodes: [_models_node__WEBPACK_IMPORTED_MODULE_0__["NodeUtils"].getStartNode(), _models_node__WEBPACK_IMPORTED_MODULE_0__["NodeUtils"].getEndNode()],
            edges: [],
            functions: [],
            ordered: false
        };
        return flw;
    };
    FlowchartUtils.checkNode = function (nodeOrder, node, enabled) {
        if (node.hasExecuted) {
            return;
        }
        else if (node.type === 'start') {
            nodeOrder.push(node);
        }
        else {
            for (var _i = 0, _a = node.input.edges; _i < _a.length; _i++) {
                var edge = _a[_i];
                if (!edge.source.parentNode.hasExecuted) {
                    return;
                }
            }
            nodeOrder.push(node);
        }
        node.hasExecuted = true;
        node.enabled = enabled;
        for (var _b = 0, _c = node.output.edges; _b < _c.length; _b++) {
            var edge = _c[_b];
            FlowchartUtils.checkNode(nodeOrder, edge.target.parentNode, enabled);
        }
    };
    FlowchartUtils.orderNodes = function (flw) {
        var startNode;
        for (var _i = 0, _a = flw.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.type === 'start') {
                startNode = node;
            }
            node.hasExecuted = false;
        }
        var nodeOrder = [];
        FlowchartUtils.checkNode(nodeOrder, startNode, true);
        if (nodeOrder.length < flw.nodes.length) {
            for (var _b = 0, _c = flw.nodes; _b < _c.length; _b++) {
                var node = _c[_b];
                if (node.type !== 'start' && node.input.edges.length === 0) {
                    FlowchartUtils.checkNode(nodeOrder, node, false);
                }
            }
        }
        flw.nodes = nodeOrder;
        flw.ordered = true;
    };
    return FlowchartUtils;
}());



/***/ }),

/***/ "./src/app/shared/models/flowchart/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/flowchart/index.ts ***!
  \**************************************************/
/*! exports provided: FlowchartUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flowchart_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowchart.utils */ "./src/app/shared/models/flowchart/flowchart.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowchartUtils", function() { return _flowchart_utils__WEBPACK_IMPORTED_MODULE_0__["FlowchartUtils"]; });




/***/ }),

/***/ "./src/app/shared/models/node/index.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/node/index.ts ***!
  \*********************************************/
/*! exports provided: NodeUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.utils */ "./src/app/shared/models/node/node.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeUtils", function() { return _node_utils__WEBPACK_IMPORTED_MODULE_0__["NodeUtils"]; });




/***/ }),

/***/ "./src/app/shared/models/node/node.utils.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/node/node.utils.ts ***!
  \**************************************************/
/*! exports provided: NodeUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeUtils", function() { return NodeUtils; });
/* harmony import */ var _models_procedure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/procedure */ "./src/app/shared/models/procedure/index.ts");
/* harmony import */ var _models_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/port */ "./src/app/shared/models/port/index.ts");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ "./src/app/shared/utils/index.ts");




var NodeUtils = /** @class */ (function () {
    function NodeUtils() {
    }
    NodeUtils.getNewNode = function () {
        var node = {
            name: 'Node',
            id: _utils__WEBPACK_IMPORTED_MODULE_3__["IdGenerator"].getNodeID(),
            position: { x: 0, y: 0 },
            enabled: false,
            type: '',
            procedure: [],
            state: {
                procedure: [],
                input_port: undefined,
                output_port: undefined
            },
            input: _models_port__WEBPACK_IMPORTED_MODULE_1__["PortUtils"].getNewInput(),
            output: _models_port__WEBPACK_IMPORTED_MODULE_1__["PortUtils"].getNewOutput()
        };
        node.input.parentNode = node;
        node.output.parentNode = node;
        return node;
    };
    NodeUtils.getStartNode = function () {
        var node = NodeUtils.getNewNode();
        node.enabled = true;
        node.name = 'Start';
        node.type = 'start';
        node.position = { x: 700, y: 400 };
        return node;
    };
    NodeUtils.getEndNode = function () {
        var node = NodeUtils.getNewNode();
        node.name = 'End';
        node.type = 'end';
        node.position = { x: 700, y: 800 };
        return node;
    };
    NodeUtils.deselect_procedure = function (node) {
        for (var _i = 0, _a = node.state.procedure; _i < _a.length; _i++) {
            var prod = _a[_i];
            prod.selected = false;
        }
        node.state.procedure = [];
    };
    NodeUtils.rearrangeSelected = function (prodList, tempList, prods) {
        for (var _i = 0, prods_1 = prods; _i < prods_1.length; _i++) {
            var pr = prods_1[_i];
            if (!pr.selected) {
                if (pr.children) {
                    NodeUtils.rearrangeSelected(prodList, tempList, pr.children);
                }
                continue;
            }
            var i = 0;
            while (i < tempList.length) {
                if (tempList[i] === pr) {
                    prodList.push(pr);
                    tempList.splice(i, 1);
                    break;
                }
                i += 1;
            }
            if (pr.children) {
                NodeUtils.rearrangeSelected(prodList, tempList, pr.children);
            }
        }
    };
    NodeUtils.select_procedure = function (node, procedure, ctrl) {
        if (!procedure) {
            return;
        }
        if (ctrl) {
            var selIndex = 0;
            var selected = false;
            while (selIndex < node.state.procedure.length) {
                if (node.state.procedure[selIndex] === procedure) {
                    selected = true;
                    node.state.procedure.splice(selIndex, 1);
                    procedure.selected = false;
                    break;
                }
                selIndex += 1;
            }
            if (!selected) {
                procedure.selected = true;
                node.state.procedure.push(procedure);
                var tempArray = node.state.procedure.splice(0, node.state.procedure.length);
                NodeUtils.rearrangeSelected(node.state.procedure, tempArray, node.procedure);
                console.log(node.state.procedure);
            }
        }
        else {
            var sel = procedure.selected;
            for (var _i = 0, _a = node.state.procedure; _i < _a.length; _i++) {
                var prod = _a[_i];
                prod.selected = false;
            }
            if (sel && node.state.procedure.length === 1 && node.state.procedure[0] === procedure) {
                node.state.procedure = [];
            }
            else {
                node.state.procedure = [procedure];
                procedure.selected = true;
            }
        }
    };
    NodeUtils.insert_procedure = function (node, prod) {
        if (node.state.procedure[0]) {
            if (node.state.procedure[0].children) {
                node.state.procedure[0].children.push(prod);
                prod.parent = node.state.procedure[0];
            }
            else {
                var list = void 0;
                if (node.state.procedure[0].parent) {
                    prod.parent = node.state.procedure[0].parent;
                    list = prod.parent.children;
                }
                else {
                    list = node.procedure;
                }
                for (var index in list) {
                    if (list[index].selected) {
                        list.splice(parseInt(index, 10) + 1, 0, prod);
                        break;
                    }
                }
            }
        }
        else {
            node.procedure.push(prod);
        }
    };
    NodeUtils.add_procedure = function (node, type, data) {
        var prod = {};
        prod.type = type;
        NodeUtils.insert_procedure(node, prod);
        // add ID to the procedure
        prod.ID = _utils__WEBPACK_IMPORTED_MODULE_3__["IdGenerator"].getProdID();
        prod.enabled = true;
        prod.print = false;
        // select the procedure
        NodeUtils.select_procedure(node, prod, false);
        switch (prod.type) {
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Variable:
                prod.argCount = 2;
                prod.args = [
                    { name: 'var_name', value: undefined, default: undefined },
                    { name: 'value', value: undefined, default: undefined }
                ];
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Foreach:
                prod.argCount = 2;
                prod.args = [{ name: 'i', value: undefined, default: undefined }, { name: 'arr', value: undefined, default: [] }];
                prod.children = [];
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].While:
                prod.argCount = 1;
                prod.args = [{ name: 'condition', value: undefined, default: undefined }];
                prod.children = [];
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].If:
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Elseif:
                prod.argCount = 1;
                prod.args = [{ name: 'condition', value: undefined, default: undefined }];
                prod.children = [];
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Else:
                prod.argCount = 0;
                prod.args = [];
                prod.children = [];
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Break:
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Continue:
                prod.argCount = 0;
                prod.args = [];
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Constant:
                prod.argCount = 2;
                prod.meta = { module: 'Input', name: 'Constant', inputMode: _models_port__WEBPACK_IMPORTED_MODULE_1__["InputType"].SimpleInput, description: undefined };
                prod.args = [
                    { name: 'const_name', value: undefined, default: 0 },
                    { name: '__input__', value: undefined, default: 0 }
                ];
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Return:
                prod.meta = { module: 'Output', name: 'Return', description: undefined };
                prod.argCount = 1;
                prod.args = [{ name: 'index', value: undefined, default: 0 }];
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Function:
                if (!data) {
                    throw Error('No function data');
                }
                prod.meta = { module: data.module, name: data.name };
                prod.argCount = data.argCount + 1;
                var returnArg = { name: 'var_name', value: undefined, default: undefined };
                if (!data.hasReturn) {
                    returnArg = { name: '__none__', value: undefined, default: undefined };
                }
                prod.args = [returnArg].concat(data.args);
                break;
            case _models_procedure__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"].Imported:
                prod.meta = { module: data.module, name: data.name };
                prod.argCount = data.argCount + 1;
                prod.args = [{ name: 'var_name', value: undefined, default: undefined }].concat(data.args);
                break;
        }
    };
    NodeUtils.updateNode = function (newNode, newPos) {
        newNode.id = _utils__WEBPACK_IMPORTED_MODULE_3__["IdGenerator"].getNodeID();
        newNode.input = _models_port__WEBPACK_IMPORTED_MODULE_1__["PortUtils"].getNewInput();
        newNode.output = _models_port__WEBPACK_IMPORTED_MODULE_1__["PortUtils"].getNewOutput();
        newNode.input.parentNode = newNode;
        newNode.output.parentNode = newNode;
        newNode.position.x = newPos.x;
        newNode.position.y = newPos.y;
        return newNode;
    };
    NodeUtils.updateID = function (prod) {
        if (prod.hasOwnProperty('children')) {
            prod.children.map(function (child) {
                NodeUtils.updateID(child);
            });
        }
        prod.ID = _utils__WEBPACK_IMPORTED_MODULE_3__["IdGenerator"].getProdID();
        return prod;
    };
    NodeUtils.paste_procedure = function (node, prod) {
        var newProd = NodeUtils.updateID(circular_json__WEBPACK_IMPORTED_MODULE_2__["parse"](circular_json__WEBPACK_IMPORTED_MODULE_2__["stringify"](prod)));
        newProd.parent = undefined;
        NodeUtils.insert_procedure(node, newProd);
        NodeUtils.select_procedure(node, newProd, false);
    };
    return NodeUtils;
}());



/***/ }),

/***/ "./src/app/shared/models/port/index.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/port/index.ts ***!
  \*********************************************/
/*! exports provided: PortUtils, PortType, InputType, OutputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/app/shared/models/port/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["PortType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["InputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OutputType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["OutputType"]; });

/* harmony import */ var _port_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./port.utils */ "./src/app/shared/models/port/port.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortUtils", function() { return _port_utils__WEBPACK_IMPORTED_MODULE_1__["PortUtils"]; });





/***/ }),

/***/ "./src/app/shared/models/port/port.utils.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/port/port.utils.ts ***!
  \**************************************************/
/*! exports provided: PortUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortUtils", function() { return PortUtils; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/app/shared/models/port/types.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils */ "./src/app/shared/utils/index.ts");


var PortUtils = /** @class */ (function () {
    function PortUtils() {
    }
    PortUtils.getNewInput = function () {
        var inp = {
            id: _shared_utils__WEBPACK_IMPORTED_MODULE_1__["IdGenerator"].getId(),
            name: 'input',
            type: _types__WEBPACK_IMPORTED_MODULE_0__["PortType"].Input,
            value: undefined,
            default: undefined,
            edges: [],
            meta: {
                mode: _types__WEBPACK_IMPORTED_MODULE_0__["InputType"].SimpleInput,
                opts: {}
            }
        };
        return inp;
    };
    PortUtils.getNewOutput = function () {
        var oup = {
            id: _shared_utils__WEBPACK_IMPORTED_MODULE_1__["IdGenerator"].getId(),
            name: 'output',
            type: _types__WEBPACK_IMPORTED_MODULE_0__["PortType"].Output,
            edges: [],
            meta: {
                mode: _types__WEBPACK_IMPORTED_MODULE_0__["OutputType"].Text,
            }
        };
        return oup;
    };
    return PortUtils;
}());



/***/ }),

/***/ "./src/app/shared/models/port/types.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/port/types.ts ***!
  \*********************************************/
/*! exports provided: PortType, InputType, OutputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortType", function() { return PortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return InputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputType", function() { return OutputType; });
var PortType;
(function (PortType) {
    PortType[PortType["Input"] = 0] = "Input";
    PortType[PortType["Output"] = 1] = "Output";
})(PortType || (PortType = {}));
var InputType;
(function (InputType) {
    InputType[InputType["SimpleInput"] = 0] = "SimpleInput";
    InputType[InputType["Slider"] = 1] = "Slider";
    InputType[InputType["Checkbox"] = 2] = "Checkbox";
    InputType[InputType["URL"] = 3] = "URL";
    InputType[InputType["File"] = 4] = "File";
})(InputType || (InputType = {}));
var OutputType;
(function (OutputType) {
    OutputType[OutputType["Text"] = 0] = "Text";
    OutputType[OutputType["Code"] = 1] = "Code";
})(OutputType || (OutputType = {}));


/***/ }),

/***/ "./src/app/shared/models/procedure/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/procedure/index.ts ***!
  \**************************************************/
/*! exports provided: ProcedureTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/app/shared/models/procedure/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcedureTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["ProcedureTypes"]; });




/***/ }),

/***/ "./src/app/shared/models/procedure/types.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/procedure/types.ts ***!
  \**************************************************/
/*! exports provided: ProcedureTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureTypes", function() { return ProcedureTypes; });
var ProcedureTypes;
(function (ProcedureTypes) {
    ProcedureTypes[ProcedureTypes["Variable"] = 0] = "Variable";
    ProcedureTypes[ProcedureTypes["If"] = 1] = "If";
    ProcedureTypes[ProcedureTypes["Elseif"] = 2] = "Elseif";
    ProcedureTypes[ProcedureTypes["Else"] = 3] = "Else";
    ProcedureTypes[ProcedureTypes["Foreach"] = 4] = "Foreach";
    ProcedureTypes[ProcedureTypes["While"] = 5] = "While";
    ProcedureTypes[ProcedureTypes["Break"] = 6] = "Break";
    ProcedureTypes[ProcedureTypes["Continue"] = 7] = "Continue";
    ProcedureTypes[ProcedureTypes["Function"] = 8] = "Function";
    ProcedureTypes[ProcedureTypes["Imported"] = 9] = "Imported";
    ProcedureTypes[ProcedureTypes["Constant"] = 10] = "Constant";
    ProcedureTypes[ProcedureTypes["Return"] = 11] = "Return";
})(ProcedureTypes || (ProcedureTypes = {}));


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_ngFlowchart_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/ngFlowchart-svg */ "./src/app/ngFlowchart-svg/index.ts");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _directives_filesys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/filesys */ "./src/app/shared/directives/filesys/index.ts");
/* harmony import */ var _components_execute_execute_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/execute/execute.component */ "./src/app/shared/components/execute/execute.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_add_components_add_output_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-components/add_output.component */ "./src/app/shared/components/add-components/add_output.component.ts");
/* harmony import */ var _components_add_components_add_node_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-components/add_node.component */ "./src/app/shared/components/add-components/add_node.component.ts");
/* harmony import */ var _components_add_components_add_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-components/add_input.component */ "./src/app/shared/components/add-components/add_input.component.ts");
/* harmony import */ var _components_parameter_viewer_parameter_viewer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/parameter-viewer/parameter-viewer.component */ "./src/app/shared/components/parameter-viewer/parameter-viewer.component.ts");
/* harmony import */ var _components_parameter_viewer_input_port_viewer_input_port_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/parameter-viewer/input-port-viewer/input-port-viewer.component */ "./src/app/shared/components/parameter-viewer/input-port-viewer/input-port-viewer.component.ts");
/* harmony import */ var _components_parameter_viewer_procedure_input_viewer_procedure_input_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component */ "./src/app/shared/components/parameter-viewer/procedure-input-viewer/procedure-input-viewer.component.ts");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/file */ "./src/app/shared/components/file/index.ts");
/* harmony import */ var _mViewer_mobius_viewer_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../mViewer/mobius-viewer.module */ "./src/app/mViewer/mobius-viewer.module.ts");
/* harmony import */ var _directives_textarea__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/textarea */ "./src/app/shared/directives/textarea/index.ts");
/*
 *  This module is to be imported ONLY by the AppModule
 *  Contains all global services
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





















var SharedModule = /** @class */ (function () {
    function SharedModule(shared) {
        /*
        /// Prevents any module apart from AppModule from re-importing
        if(shared){
            throw new Error("Core Module has already been imported");
        }
        */
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [],
            declarations: [
                _directives_filesys__WEBPACK_IMPORTED_MODULE_7__["MbFileReaderDirective"],
                _directives_textarea__WEBPACK_IMPORTED_MODULE_20__["AutogrowDirective"],
                _components_execute_execute_component__WEBPACK_IMPORTED_MODULE_8__["ExecuteComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_add_components_add_node_component__WEBPACK_IMPORTED_MODULE_13__["AddNodeComponent"], _components_add_components_add_input_component__WEBPACK_IMPORTED_MODULE_14__["AddInputComponent"], _components_add_components_add_output_component__WEBPACK_IMPORTED_MODULE_12__["AddOutputComponent"],
                _components_parameter_viewer_parameter_viewer_component__WEBPACK_IMPORTED_MODULE_15__["ParameterViewerComponent"], _components_parameter_viewer_input_port_viewer_input_port_viewer_component__WEBPACK_IMPORTED_MODULE_16__["InputPortViewerComponent"], _components_parameter_viewer_procedure_input_viewer_procedure_input_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ProcedureInputViewerComponent"],
                _components_file__WEBPACK_IMPORTED_MODULE_18__["NewFileComponent"], _components_file__WEBPACK_IMPORTED_MODULE_18__["SaveFileComponent"], _components_file__WEBPACK_IMPORTED_MODULE_18__["LoadFileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _app_ngFlowchart_svg__WEBPACK_IMPORTED_MODULE_5__["SVGFlowchartModule"],
                _mViewer_mobius_viewer_module__WEBPACK_IMPORTED_MODULE_19__["MobiusViewerModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            ],
            entryComponents: [],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_ngFlowchart_svg__WEBPACK_IMPORTED_MODULE_5__["SVGFlowchartModule"],
                _mViewer_mobius_viewer_module__WEBPACK_IMPORTED_MODULE_19__["MobiusViewerModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_6__["AngularSplitModule"],
                _directives_filesys__WEBPACK_IMPORTED_MODULE_7__["MbFileReaderDirective"],
                _directives_textarea__WEBPACK_IMPORTED_MODULE_20__["AutogrowDirective"],
                _components_execute_execute_component__WEBPACK_IMPORTED_MODULE_8__["ExecuteComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_add_components_add_node_component__WEBPACK_IMPORTED_MODULE_13__["AddNodeComponent"],
                _components_add_components_add_input_component__WEBPACK_IMPORTED_MODULE_14__["AddInputComponent"],
                _components_add_components_add_output_component__WEBPACK_IMPORTED_MODULE_12__["AddOutputComponent"],
                _components_parameter_viewer_parameter_viewer_component__WEBPACK_IMPORTED_MODULE_15__["ParameterViewerComponent"],
                _components_file__WEBPACK_IMPORTED_MODULE_18__["NewFileComponent"], _components_file__WEBPACK_IMPORTED_MODULE_18__["SaveFileComponent"], _components_file__WEBPACK_IMPORTED_MODULE_18__["LoadFileComponent"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [SharedModule])
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils/GUID.ts":
/*!**************************************!*\
  !*** ./src/app/shared/utils/GUID.ts ***!
  \**************************************/
/*! exports provided: IdGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdGenerator", function() { return IdGenerator; });
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
    }
    IdGenerator.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    IdGenerator.getId = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    IdGenerator.getNodeID = function () {
        return 'node_' + Math.random().toString(36).substr(2, 16);
    };
    IdGenerator.getProdID = function () {
        return 'prod-' + Math.random().toString(36).substr(2, 16);
    };
    return IdGenerator;
}());



/***/ }),

/***/ "./src/app/shared/utils/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/*! exports provided: IdGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GUID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUID */ "./src/app/shared/utils/GUID.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdGenerator", function() { return _GUID__WEBPACK_IMPORTED_MODULE_0__["IdGenerator"]; });




/***/ }),

/***/ "./src/app/views/index.ts":
/*!********************************!*\
  !*** ./src/app/views/index.ts ***!
  \********************************/
/*! exports provided: ViewGalleryComponent, ViewGalleryModule, ViewPublishModule, ViewPublishComponent, ViewEditorModule, ViewEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_gallery_view_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-gallery/view-gallery.component */ "./src/app/views/view-gallery/view-gallery.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewGalleryComponent", function() { return _view_gallery_view_gallery_component__WEBPACK_IMPORTED_MODULE_0__["ViewGalleryComponent"]; });

/* harmony import */ var _view_gallery_view_gallery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-gallery/view-gallery.module */ "./src/app/views/view-gallery/view-gallery.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewGalleryModule", function() { return _view_gallery_view_gallery_module__WEBPACK_IMPORTED_MODULE_1__["ViewGalleryModule"]; });

/* harmony import */ var _view_publish_view_publish_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-publish/view-publish.module */ "./src/app/views/view-publish/view-publish.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPublishModule", function() { return _view_publish_view_publish_module__WEBPACK_IMPORTED_MODULE_2__["ViewPublishModule"]; });

/* harmony import */ var _view_publish_view_publish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-publish/view-publish.component */ "./src/app/views/view-publish/view-publish.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPublishComponent", function() { return _view_publish_view_publish_component__WEBPACK_IMPORTED_MODULE_3__["ViewPublishComponent"]; });

/* harmony import */ var _view_editor_view_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-editor/view-editor.module */ "./src/app/views/view-editor/view-editor.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEditorModule", function() { return _view_editor_view_editor_module__WEBPACK_IMPORTED_MODULE_4__["ViewEditorModule"]; });

/* harmony import */ var _view_editor_view_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-editor/view-editor.component */ "./src/app/views/view-editor/view-editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEditorComponent", function() { return _view_editor_view_editor_component__WEBPACK_IMPORTED_MODULE_5__["ViewEditorComponent"]; });

// export * from './view-about/view-about.module';








/***/ }),

/***/ "./src/app/views/view-editor/parameter-editor/parameter-editor.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/view-editor/parameter-editor/parameter-editor.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='flowchart-info' *ngIf=\"node.type=='start'\">\r\n    <input [(ngModel)]='flowchart.name' size={{flowchart.name?.length||1}}>\r\n    <textarea autogrow [(ngModel)]='flowchart.description' placeholder=\"flowchart description\"></textarea>\r\n</div>\r\n<hr *ngIf=\"node.type=='start'\">\r\n<div class='container--input'>\r\n    <procedure-input-editor *ngFor=\"let prod of node.procedure\" [prod]=\"prod\" ></procedure-input-editor>\r\n</div>\r\n\r\n<!--\r\n<section *ngIf=\"node.type != 'end'\">\r\n    <panel-header [node]='node' [title]=\"'inputs'\"></panel-header>\r\n    <div class='container--input'>\r\n        <input-port-editor [port]=\"node?.input\" ></input-port-editor>\r\n    </div>\r\n</section>\r\n<section *ngIf=\"node.type != 'start'\">\r\n    <panel-header [node]='node' [title]=\"'output'\"></panel-header>\r\n    <div class='container--output'>\r\n        <output-port-editor [port]=\"node?.output\" ></output-port-editor>\r\n    </div>\r\n</section>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/views/view-editor/parameter-editor/parameter-editor.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/view-editor/parameter-editor/parameter-editor.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div[class^=\"container--\"] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 10px;\n  margin: 0px 0px; }\n\n.flowchart-info {\n  display: -ms-grid;\n  display: grid;\n  padding-left: 10px;\n  margin: 5px 0px;\n  width: 100%; }\n\ninput {\n  color: #505050;\n  background-color: #fafafa;\n  border: none;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-left: 1px solid gainsboro;\n  border-bottom: 1px solid gainsboro;\n  padding: 5px;\n  margin-left: 3px;\n  font-weight: 600;\n  font-style: italic;\n  min-width: 40px;\n  max-width: 300px;\n  font-size: 12px;\n  vertical-align: bottom; }\n\ninput.disabled-input {\n    border-bottom: none; }\n\ntextarea {\n  color: #505050;\n  background-color: #fafafa;\n  border: none;\n  border-left: 1px solid gainsboro;\n  border-bottom: 1px solid gainsboro;\n  padding-left: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  margin: 10px 0px 5px 3px;\n  height: 18px;\n  width: 90%;\n  resize: none; }\n\nhr {\n  width: inherit;\n  border-top: 2px solid gainsboro; }\n"

/***/ }),

/***/ "./src/app/views/view-editor/parameter-editor/parameter-editor.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/view-editor/parameter-editor/parameter-editor.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ParameterEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterEditorComponent", function() { return ParameterEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParameterEditorComponent = /** @class */ (function () {
    function ParameterEditorComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParameterEditorComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParameterEditorComponent.prototype, "flowchart", void 0);
    ParameterEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'parameter-editor',
            template: __webpack_require__(/*! ./parameter-editor.component.html */ "./src/app/views/view-editor/parameter-editor/parameter-editor.component.html"),
            styles: [__webpack_require__(/*! ./parameter-editor.component.scss */ "./src/app/views/view-editor/parameter-editor/parameter-editor.component.scss")]
        })
    ], ParameterEditorComponent);
    return ParameterEditorComponent;
}());



/***/ }),

/***/ "./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container container--parameter' *ngIf='prod.meta?.module==\"Input\"'>\r\n    <input [class.disabled-input]='true' value='{{prod.args[prod.argCount-2].value||\"Undefined\"}}:' size='15' disabled>\r\n\r\n    <select name={{prod.ID}}_type [(ngModel)]=\"prod.meta.inputMode\" tabindex=\"-1\">\r\n        <option \r\n            *ngFor=\"let ptype of PortTypesArr\" \r\n            [value]=\"PortTypes[ptype]\" \r\n            [selected]=\"prod.meta.inputMode == ptype\">{{ptype}}</option>\r\n    </select>\r\n    <ng-container [ngSwitch]=\"prod.meta.inputMode\" >\r\n        <input *ngSwitchCase=\"PortTypes.SimpleInput\" [(ngModel)]='prod.args[prod.argCount-1].default' placeholder='Default Value' \r\n        (input)='updateInputSize($event)' size={{prod.args[prod.argCount-1].default.length||13}}>\r\n\r\n        <div class='div--slider' *ngSwitchCase=\"PortTypes.Slider\">\r\n            <input [(ngModel)]='prod.args[prod.argCount-1].min' placeholder='Min'\r\n            (input)='updateInputSize($event)' size={{prod.args[prod.argCount-1].min?.length||1}}>\r\n            <input [(ngModel)]='prod.args[prod.argCount-1].max' placeholder='Max'\r\n            (input)='updateInputSize($event)' size={{prod.args[prod.argCount-1].max?.length||1}}>\r\n            <mat-slider\r\n                [(ngModel)]='prod.args[prod.argCount-1].default'\r\n                thumbLabel\r\n                tickInterval=\"auto\"\r\n                min={{prod.args[prod.argCount-1].min||0}}\r\n                max={{prod.args[prod.argCount-1].max||100}}></mat-slider>\r\n            <input [class.disabled-input]='true' [(ngModel)]='prod.args[prod.argCount-1].default'\r\n            (input)='updateInputSize($event)' size={{prod.args[prod.argCount-1].default?.length||1}} disabled>\r\n\r\n        </div>\r\n        <input *ngSwitchCase=\"PortTypes.Checkbox\" [(ngModel)]='prod.args[prod.argCount-1].default' name='prod.args[prod.argCount-1].default' type=\"checkbox\">\r\n        <input *ngSwitchCase=\"PortTypes.URL\" [(ngModel)]='prod.args[prod.argCount-1].default' name='prod.args[prod.argCount-1].default' placeholder='Default URL'>\r\n        <input *ngSwitchCase=\"PortTypes.File\" (change)=\"onFileChange($event)\" type=\"file\">\r\n    </ng-container>\r\n    <div>\r\n        <input class='inp--desc' placeholder='Constant Description' [(ngModel)]='prod.meta.description'\r\n        (input)='updateInputSize($event)' size={{prod.meta.description?.length||20}}>\r\n    </div>\r\n\r\n</div>\r\n<div class='container container--parameter' *ngIf='prod.meta.module==\"Output\"'>\r\n    <input class='inp--desc' placeholder='Return Description' [(ngModel)]='prod.meta.description'\r\n    (input)='updateInputSize($event)' size={{prod.meta.description?.length||20}}>\r\n</div>"

/***/ }),

/***/ "./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 5px 0px; }\n\n.container--parameter {\n  display: inline-block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #505050;\n  vertical-align: bottom;\n  padding-bottom: 5px;\n  border-bottom: 1px solid gainsboro;\n  border-left: 1px solid gainsboro;\n  width: 100%; }\n\nselect {\n  color: #505050;\n  background-color: #fafafa;\n  border: 1px solid #505050; }\n\ninput {\n  color: #505050;\n  background-color: #fafafa;\n  border: none;\n  border-bottom: 1px solid #505050;\n  margin-left: 5px;\n  vertical-align: bottom; }\n\ninput.disabled-input {\n    border-bottom: none; }\n\n.slider-val {\n  color: #505050;\n  resize: horizontal;\n  size: 2;\n  min-width: 1px;\n  max-width: 300px;\n  width: 20px; }\n\n.container--input {\n  display: inline-flex;\n  flex-direction: row; }\n\n.div--slider {\n  display: inline-flex;\n  flex-direction: row; }\n\n.inp--desc {\n  font-size: 12px;\n  padding-top: 5px;\n  max-width: 700px; }\n\n.parameter__name {\n  width: 100px;\n  height: auto;\n  word-wrap: break-word; }\n\nmat-slider {\n  width: 300px; }\n"

/***/ }),

/***/ "./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProcedureInputEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureInputEditorComponent", function() { return ProcedureInputEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/port */ "./src/app/shared/models/port/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var keys = Object.keys(_models_port__WEBPACK_IMPORTED_MODULE_1__["InputType"]);
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
ctx.font = '14px Arial';
var ProcedureInputEditorComponent = /** @class */ (function () {
    function ProcedureInputEditorComponent() {
        this.PortTypes = _models_port__WEBPACK_IMPORTED_MODULE_1__["InputType"];
        this.PortTypesArr = keys.slice(keys.length / 2);
    }
    ProcedureInputEditorComponent.prototype.ngAfterViewInit = function () {
        // console.log(this.prod);
    };
    ProcedureInputEditorComponent.prototype.editOptions = function () { };
    ProcedureInputEditorComponent.prototype.onFileChange = function (event) {
        this.prod.args[this.prod.argCount - 1].default = event.target.files[0];
    };
    ProcedureInputEditorComponent.prototype.updateInputSize = function (event) {
        var val = event.target.value || event.target.placeholder;
        event.target.style.width = ctx.measureText(val).width + 10 + 'px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProcedureInputEditorComponent.prototype, "prod", void 0);
    ProcedureInputEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'procedure-input-editor',
            template: __webpack_require__(/*! ./procedure-input-editor.component.html */ "./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.html"),
            styles: [__webpack_require__(/*! ./procedure-input-editor.component.scss */ "./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcedureInputEditorComponent);
    return ProcedureInputEditorComponent;
}());



/***/ }),

/***/ "./src/app/views/view-editor/procedure-item/procedure-item.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/view-editor/procedure-item/procedure-item.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container--line' \r\n    [class.selected]=\"data.selected\"\r\n    [class.error]=\"data.hasError\"\r\n    [class.disabled]=\"!data.enabled\"\r\n    [ngSwitch]=\"data.type\"\r\n    (click)='emitSelect($event, data)'>\r\n    <div class='container--item' >\r\n        <!-- Variable Assignment Template -->\r\n        <div class='line--item' *ngSwitchCase=\"ProcedureTypes.Variable\">\r\n            <input class='input--var'\r\n                [ngModel]='data.args[0].value'\r\n                (ngModelChange)='data.args[0].value=varMod($event)'\r\n                name='data.args[0].name'\r\n                placeholder={{data.args[0].name}}>  \r\n            = \r\n            <input \r\n                class='input--arg'\r\n                [ngModel]='data.args[1].value'\r\n                (ngModelChange)='data.args[1].value=argMod($event)'\r\n                name='data.args[1].name'\r\n                placeholder={{data.args[1].name}}\r\n                size = {{data.args[1].value?.length||data.args[1].name.length}}\r\n                (input)='updateInputSize($event)'>  \r\n            </div>\r\n\r\n        <!-- IF Template -->\r\n        <div class='line--item hasChildren' *ngSwitchCase=\"ProcedureTypes.If\">\r\n            <div class='function-text'>\r\n                If\r\n            </div>\r\n            ( <input class='input--arg'\r\n                    (cut)='stopProp($event)' (paste)='stopProp($event)'\r\n                    [(ngModel)]='data.args[0].value'\r\n                    name='data.args[0].name'\r\n                    placeholder={{data.args[0].name}}\r\n                    size={{data.args[0].value?.length||data.args[0].name.length}}\r\n                    (input)='updateInputSize($event)'>  \r\n                    )\r\n\r\n        </div>\r\n\r\n        <!-- ELSEIF Template -->\r\n        <div class='line--item hasChildren' *ngSwitchCase=\"ProcedureTypes.Elseif\">\r\n            <div class='function-text'>\r\n                Else if\r\n            </div>\r\n            \r\n        \r\n        ( <input class='input--arg'\r\n                (cut)='stopProp($event)' (paste)='stopProp($event)' \r\n                [(ngModel)]='data.args[0].value'\r\n                name='data.args[0].name'\r\n                placeholder={{data.args[0].name}}\r\n                size={{data.args[0].value?.length||data.args[0].name.length}}\r\n                (input)='updateInputSize($event)'>  \r\n                )\r\n        </div>\r\n\r\n        <!-- ELSE Template -->\r\n        <div class='line--item hasChildren' *ngSwitchCase=\"ProcedureTypes.Else\">\r\n            <div class='function-text'>\r\n                Else\r\n            </div>\r\n        </div>\r\n\r\n        <!-- BREAK Template -->\r\n        <div class='line--item' *ngSwitchCase=\"ProcedureTypes.Break\">\r\n            <div class='function-text'>\r\n                Break\r\n            </div>\r\n        </div>\r\n\r\n        <!-- CONTINUE Template -->\r\n        <div class='line--item' *ngSwitchCase=\"ProcedureTypes.Continue\">\r\n            <div class='function-text'>\r\n                Continue\r\n            </div>\r\n        </div>\r\n\r\n\r\n    <!-- FOREACH Template -->\r\n        <div class='line--item hasChildren' *ngSwitchCase=\"ProcedureTypes.Foreach\">\r\n                <div class='function-text'>\r\n                    For\r\n                </div>\r\n                <input class='input--arg'\r\n                    (cut)='stopProp($event)' (paste)='stopProp($event)'\r\n                    [(ngModel)]='data.args[0].value'\r\n                    name='data.args[0].name'\r\n                    placeholder={{data.args[0].name}}\r\n                    size={{data.args[0].value?.length||data.args[0].name.length}}\r\n                    (input)='updateInputSize($event)'>  \r\n                <div class='function-text'>\r\n                    in\r\n                </div>\r\n                <input class='input--arg'\r\n                    (cut)='stopProp($event)' (paste)='stopProp($event)'\r\n                    [(ngModel)]='data.args[1].value'\r\n                    name='data.args[1].name'\r\n                    placeholder={{data.args[1].name}}\r\n                    size={{data.args[1].value?.length||data.args[1].name.length}}\r\n                    (input)='updateInputSize($event)'>  \r\n                    \r\n        </div>\r\n\r\n        <!-- WHILE Template -->\r\n        <div class='line--item hasChildren' *ngSwitchCase=\"ProcedureTypes.While\">\r\n            <div class='function-text'>\r\n                While\r\n            </div>\r\n            <input class='input--arg' \r\n                    (cut)='stopProp($event)' (paste)='stopProp($event)'\r\n                    [(ngModel)]='data.args[0].value'\r\n                    name='data.args[0].name'\r\n                    placeholder={{data.args[0].name}}\r\n                    size={{data.args[0].value?.length||data.args[0].name.length}}\r\n                    (input)='updateInputSize($event)'>  \r\n\r\n        </div>\r\n\r\n        <!-- Constant (Only visible in start node) Template -->\r\n        <div class='line--item' *ngSwitchCase=\"ProcedureTypes.Constant\">\r\n            <div class='function-text'>Constant</div>\r\n\r\n            <input class='input--arg' \r\n                    (cut)='stopProp($event)' (paste)='stopProp($event)'\r\n                    [(ngModel)]='data.args[0].value'\r\n                    name='data.args[0].name'\r\n                    placeholder={{data.args[0].name}}\r\n                    size={{data.args[0].value?.length||data.args[0].name.length}}\r\n                    (input)='updateInputSize($event)'>  \r\n\r\n        </div>\r\n        \r\n        <!-- Return (Only visible in End node) Template -->\r\n        <div class='line--item' *ngSwitchCase=\"ProcedureTypes.Return\">\r\n            <div class='function-text'>Return</div>\r\n\r\n            <input class='input--arg' \r\n                    (cut)='stopProp($event)' (paste)='stopProp($event)'\r\n                    [(ngModel)]='data.args[0].value'\r\n                    name='data.args[0].name'\r\n                    placeholder={{data.args[0].name}}\r\n                    size={{data.args[0].value?.length||data.args[0].name.length}}\r\n                    (input)='updateInputSize($event)'>  \r\n        </div>\r\n        \r\n\r\n        \r\n        <!-- Function Template -->\r\n        <div class='line--item' *ngSwitchCase=\"ProcedureTypes.Function\">\r\n            <ng-container *ngIf=\"data.meta.module.toUpperCase() !='OUTPUT' && data.args[0].name !=='__none__'\">\r\n                <input class='input--var'\r\n                [ngModel]='data.args[0].value'\r\n                (ngModelChange)='data.args[0].value=varMod($event)'\r\n                (cut)='stopProp($event)' \r\n                (paste)='stopProp($event)'\r\n                placeholder={{data.args[0].name}}>  \r\n                = \r\n\r\n            </ng-container>\r\n            <div class='function-text'>{{data.meta.module}}.{{data.meta.name}} </div>\r\n\r\n            <ng-container *ngFor='let p of data.args.slice(1);let i=index'>\r\n                <!--\r\n                <input *ngIf=\"p.name.toUpperCase() !== '__MODEL__'; else text_template\" \r\n                \r\n                (cut)='stopProp($event)' \r\n                (paste)='stopProp($event)' \r\n                [(ngModel)]='p.value' \r\n                placeholder={{p.name}}>    \r\n                \r\n                <ng-template #text_template>\r\n                    model,\r\n                </ng-template>\r\n                -->\r\n\r\n                <input *ngIf=\"p.name.indexOf('__') == -1\" \r\n                        class='input--arg' \r\n                        (cut)='stopProp($event)' \r\n                        (paste)='stopProp($event)' \r\n                        [(ngModel)]='p.value' \r\n                        placeholder={{p.name}}\r\n                        size={{p.value?.length||p.name.length}}\r\n                        (input)='updateInputSize($event)'>    \r\n                \r\n\r\n            </ng-container>\r\n\r\n        </div>\r\n\r\n        <!-- Imported Function Template -->\r\n        <div class='line--item' *ngSwitchCase=\"ProcedureTypes.Imported\">\r\n            <input class='input--var'\r\n                    [ngModel]='data.args[0].value'\r\n                    (ngModelChange)='data.args[0].value=varMod($event)'\r\n                    (cut)='stopProp($event)' (paste)='stopProp($event)'\r\n                    placeholder={{data.args[0].name}}>  \r\n            = \r\n            <div class='function-text'>{{data.meta.name}} </div> \r\n            \r\n            <ng-container *ngFor='let p of data.args.slice(1);let i=index'>\r\n                <input class='input--arg' \r\n                        (cut)='stopProp($event)' (paste)='stopProp($event)' \r\n                        [(ngModel)]='p.value' \r\n                        placeholder={{p.name}}\r\n                        size={{p.value?.length||p.name.length}}\r\n                        (input)='updateInputSize($event)'>    \r\n            </ng-container>\r\n            \r\n\r\n        </div>\r\n\r\n\r\n        <!-- delete button-->\r\n        <button class='btn' mat-icon-button title=\"Delete Procedure\" (click)=\"emitDelete()\" tabindex=\"-1\">\r\n            <mat-icon class='icon'>delete_outline</mat-icon>\r\n        </button>\r\n        <!-- Disable button-->\r\n        <button class='btn' mat-icon-button title=\"Disable Procedure\" [class.highlighted]='!data.enabled' (click)='markDisabled()' tabindex=\"-1\">\r\n            <mat-icon class='icon'>tv_off</mat-icon>\r\n        </button>\r\n        <!-- Print button-->\r\n        <button *ngIf='canBePrinted()' class='btn' mat-icon-button title=\"Print Result In Console\" [class.highlighted]='data.print' (click)='markPrint()' tabindex=\"-1\">\r\n            <mat-icon class='icon'>print</mat-icon>\r\n        </button>\r\n        <!-- help button-->\r\n        <button *ngIf='haveHelpText()' class='btn' mat-icon-button title=\"Help\" tabindex=\"-1\" (click)='emitHelpText(undefined)'>\r\n            <mat-icon class='icon'>help</mat-icon>\r\n        </button>\r\n    </div>\r\n    <!-- list of child procedures (if the procedure has children) -->\r\n    <div *ngIf=\"data?.children\" class='container--nested'>\r\n        <procedure-item \r\n            *ngFor=\"let line of data?.children; let idx=index\" \r\n            [data]=\"line\"\r\n            (select)='selectChild($event, line)'\r\n            (delete)='deleteChild(idx)'\r\n            (helpText)='emitHelpText($event)'></procedure-item>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/view-editor/procedure-item/procedure-item.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/view-editor/procedure-item/procedure-item.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container--nested {\n  padding-left: 0px; }\n\n.container--line {\n  margin: 8px 0px 2px 10px;\n  padding: 2px 0px 2px 2px;\n  border-bottom: 1px solid gainsboro;\n  border-left: 1px solid gainsboro;\n  color: #505050;\n  min-height: 22px;\n  opacity: 1; }\n\n.container--line.disabled {\n    opacity: 0.5; }\n\n.container--line.selected {\n    border: 1px solid #000096;\n    background-color: gainsboro; }\n\n.container--line.error {\n    border: 1px solid red; }\n\n.container--item {\n  margin: none;\n  padding: none;\n  border: none; }\n\n.btn {\n  height: 24px;\n  width: 24px;\n  float: right;\n  background-color: transparent;\n  border: none;\n  display: none;\n  color: #777; }\n\n.btn.highlighted {\n    background-color: #ff9696; }\n\n.container--item:hover .btn {\n  display: block; }\n\n.icon {\n  vertical-align: top;\n  font-size: 20px; }\n\n.line--item {\n  display: inline-block;\n  color: #505050; }\n\n/*\r\n.hasChildren::before{\r\n    content: '\\25B6';\r\n    position: absolute;\r\n    left: 3px;\r\n    font-size: 8px;\r\n}\r\n*/\n\n.input--var {\n  width: 70px;\n  background-color: #fafafa;\n  border: none;\n  border-bottom: 1px solid #505050;\n  margin-right: 5px; }\n\n.input--arg {\n  resize: horizontal;\n  min-width: 1px;\n  max-width: 300px;\n  width: auto;\n  background-color: #fafafa;\n  border: none;\n  border-bottom: 1px solid #505050;\n  margin-left: 5px; }\n\n.input--arg.error {\n    border: 1px solid red; }\n\ninput:focus {\n  border: 1px solid #000096; }\n\n.function-text {\n  display: inline-block;\n  white-space: normal;\n  font-style: italic;\n  color: #be8c1e;\n  font-weight: 600; }\n"

/***/ }),

/***/ "./src/app/views/view-editor/procedure-item/procedure-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/view-editor/procedure-item/procedure-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProcedureItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureItemComponent", function() { return ProcedureItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_procedure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/procedure */ "./src/app/shared/models/procedure/index.ts");
/* harmony import */ var _shared_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/decorators */ "./src/app/shared/decorators/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
ctx.font = '14px Arial';
var ProcedureItemComponent = /** @class */ (function () {
    function ProcedureItemComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pasteOn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.helpText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ProcedureTypes = _models_procedure__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypes"];
    }
    // delete this procedure
    ProcedureItemComponent.prototype.emitDelete = function () {
        this.delete.emit();
    };
    // select this procedure
    ProcedureItemComponent.prototype.emitSelect = function (event, procedure) {
        event.stopPropagation();
        this.select.emit({ 'ctrl': event.ctrlKey, 'prod': procedure });
    };
    // delete child procedure (after receiving emitDelete from child procedure)
    ProcedureItemComponent.prototype.deleteChild = function (index) {
        this.data.children.splice(index, 1);
    };
    // select child procedure (after receiving emitSelect from child procedure)
    ProcedureItemComponent.prototype.selectChild = function (event, procedure) {
        this.select.emit(event);
    };
    ProcedureItemComponent.prototype.markPrint = function () {
        this.data.print = !this.data.print;
    };
    ProcedureItemComponent.prototype.markDisabled = function () {
        this.data.enabled = !this.data.enabled;
    };
    ProcedureItemComponent.prototype.canBePrinted = function () {
        return (this.data.argCount > 0 && this.data.args[0].name === 'var_name');
    };
    ProcedureItemComponent.prototype.haveHelpText = function () {
        return (this.data.type === _models_procedure__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypes"].Function || this.data.type === _models_procedure__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypes"].Imported);
    };
    ProcedureItemComponent.prototype.emitHelpText = function ($event) {
        if ($event) {
            this.helpText.emit($event);
            return;
        }
        try {
            if (this.data.type === _models_procedure__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypes"].Imported) {
                this.helpText.emit(this.data.meta.name);
                // this.helpText.emit(this.ModuleDoc[this.data.meta.module][this.data.meta.name]);
            }
            else {
                // @ts-ignore
                this.helpText.emit(this.ModuleDoc[this.data.meta.module][this.data.meta.name]);
            }
        }
        catch (ex) {
            this.helpText.emit('error');
        }
    };
    // stopPropagation to prevent cut/paste with input box focused
    ProcedureItemComponent.prototype.stopProp = function (event) {
        event.stopPropagation();
    };
    // modify variable input: replace space " " with underscore "_"
    ProcedureItemComponent.prototype.varMod = function (event) {
        if (!event) {
            return event;
        }
        var str = event.trim();
        str = str.replace(/ /g, '_');
        return str;
    };
    // modify argument input: check if input is valid
    ProcedureItemComponent.prototype.argMod = function (event) {
        return event;
        console.log(event);
        var string = event.trim();
        if (string.substring(0, 1) === '@' || (/^[a-zA-Z_$][0-9a-zA-Z_$]*/i).test(string)) {
            return event;
        }
        try {
            JSON.parse(string);
        }
        catch (ex) {
            console.log('.........', ex);
            // document.activeElement.style.error = true;
        }
        return event;
    };
    ProcedureItemComponent.prototype.updateInputSize = function (event) {
        var val = event.target.value || event.target.placeholder;
        event.target.style.width = ctx.measureText(val).width + 10 + 'px';
    };
    ProcedureItemComponent.prototype.inputSize = function (val) {
        console.log(val);
        // event.target.style.width = ctx.measureText(val).width + 10 + 'px';
        return ctx.measureText(val).width + 10 + 'px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProcedureItemComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProcedureItemComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProcedureItemComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProcedureItemComponent.prototype, "copied", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProcedureItemComponent.prototype, "pasteOn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProcedureItemComponent.prototype, "helpText", void 0);
    ProcedureItemComponent = __decorate([
        _shared_decorators__WEBPACK_IMPORTED_MODULE_2__["ProcedureTypesAware"],
        _shared_decorators__WEBPACK_IMPORTED_MODULE_2__["ModuleDocAware"],
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'procedure-item',
            template: __webpack_require__(/*! ./procedure-item.component.html */ "./src/app/views/view-editor/procedure-item/procedure-item.component.html"),
            styles: [__webpack_require__(/*! ./procedure-item.component.scss */ "./src/app/views/view-editor/procedure-item/procedure-item.component.scss")]
        })
    ], ProcedureItemComponent);
    return ProcedureItemComponent;
}());



/***/ }),

/***/ "./src/app/views/view-editor/toolset/toolset.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/view-editor/toolset/toolset.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"nodeType == ''\">\r\n    <!-- basic functions: variable, if, else, else if, for, while, continue, break -->\r\n    <ul class='toolset__basic'>\r\n        <ng-container *ngFor=\"let type of ProcedureTypesArr\">\r\n            <li *ngIf='type.toUpperCase() !== \"FUNCTION\" && type.toUpperCase() !== \"IMPORTED\"\r\n            && type.toUpperCase() !== \"CONSTANT\" && type.toUpperCase() !== \"RETURN\"'\r\n            class='tooltip'\r\n            (click)='add(ProcedureTypes[type])'> \r\n                {{type}}\r\n                <!--\r\n                <span class=\"tooltiptext\">\r\n                    <p class='funcDesc'>{{type}}</p>\r\n                </span>\r\n                -->\r\n            </li>\r\n        </ng-container>\r\n    </ul>\r\n    \r\n\r\n    <!-- functions from core.modules -->\r\n    <ng-container *ngFor='let mod of Modules' >\r\n\r\n        <button id='{{mod.module}}' class=\"accordion\" \r\n        *ngIf='mod.module.toUpperCase() != \"INPUT\" && mod.module.toUpperCase() != \"OUTPUT\"'\r\n        (click)='toggleAccordion(mod.module)' >{{ mod.module }}</button>\r\n        <div class=\"panel\">\r\n            <ul class='toolset__functions--subset'>\r\n                <ng-container *ngFor='let fn of mod.functions'>\r\n                    <div class='tooltip' *ngIf='fn.name.substring(0,1)!=\"_\"'>\r\n                        <li \r\n                        (click)='add_function(fn)'> \r\n                            {{fn.name}} \r\n                        </li>\r\n                        <span class=\"tooltiptext\" *ngIf='ModuleDoc[mod.module] && ModuleDoc[mod.module][fn.name]'>\r\n                            <p class='funcDesc'>{{ModuleDoc[mod.module][fn.name].summary||ModuleDoc[mod.module][fn.name].description}}</p>\r\n                            <p *ngIf='ModuleDoc[mod.module][fn.name].parameters?.length > 0'><span>Parameters: </span></p>\r\n                            <p class='paramP' *ngFor='let param of ModuleDoc[mod.module][fn.name].parameters'><span>{{param.name}} - </span> {{param.description}}</p>\r\n                            <p *ngIf='ModuleDoc[mod.module][fn.name].returns'><span>Returns: </span> {{ModuleDoc[mod.module][fn.name].returns}}</p>\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n            </ul>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <!-- imported functions -->\r\n    <ng-container>\r\n        <button id='imported' class=\"accordion\" \r\n        (click)='toggleAccordion(\"imported\")' >Imported</button>\r\n        <div class=\"panel\">\r\n            <ul class='toolset__functions--subset'>\r\n                <div class='tooltip' *ngFor='let fn of functions'>\r\n                    <li (click)='add_imported_function(fn)'> {{fn.name}} \r\n                        <button class='remove-btn' (click)='delete_imported_function(fn)'>\r\n                            <mat-icon class='remove-icon'>close</mat-icon>\r\n                        </button>\r\n                    </li>\r\n                    <span class=\"tooltiptext\">\r\n                        <p class='funcDesc'>{{fn.doc.description}}</p>\r\n                        <p *ngIf='fn.doc.parameters?.length > 0'><span>Parameters: </span></p>\r\n                        <p class='paramP' *ngFor='let param of fn.doc.parameters'><span>{{param.name}} - </span> {{param.description}}</p>\r\n                        <p *ngIf='fn.doc.returns'><span>Returns: </span> {{fn.doc.returns}}</p>\r\n                    </span>\r\n                </div>\r\n            </ul>\r\n            <br>\r\n            <input type=\"file\" id=\"selectedFile\" (change)=\"import_function($event)\" style=\"display: none;\" />\r\n            <button class='add-btn' onclick=\"document.getElementById('selectedFile').click();\" title=\"Import Function from File\">\r\n                <mat-icon class='add-icon'>open_in_browser</mat-icon>\r\n            </button>\r\n        </div>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!-- functions for input nodes -->\r\n<div id='toolset_inp' class = 'toolset' *ngIf=\"nodeType == 'start'\">\r\n    <div class='toolset__functions'>\r\n        <section *ngFor='let type of ProcedureTypesArr' >\r\n            <div *ngIf='type.toUpperCase() == \"CONSTANT\"'>\r\n                <ul class='toolset__functions--subset'>\r\n                    <li (click)='add(ProcedureTypes[type])'> {{type}} </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n        <!--\r\n        <section *ngFor='let mod of Modules' >\r\n            <div *ngIf='mod.module.toUpperCase() == \"INPUT\"'>\r\n                <ul class='toolset__functions--subset'>\r\n                    <li *ngFor='let fn of mod.functions' (click)='add_function(fn)'> {{fn.name}} </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n        -->\r\n    </div>\r\n</div>\r\n\r\n<!-- functions for output nodes -->\r\n<div id='toolset_inp' class = 'toolset' *ngIf=\"nodeType == 'end'\">\r\n    <div class='toolset__functions' *ngIf=\"hasProd===false\">\r\n        <!--\r\n        <section *ngFor='let type of ProcedureTypesArr' >\r\n            <div *ngIf='type.toUpperCase() == \"RETURN\"'>\r\n                <ul class='toolset__functions--subset'>\r\n                    <li (click)='add(ProcedureTypes[type])'> {{type}} </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n        -->\r\n        <section *ngFor='let mod of Modules' >\r\n            <div *ngIf='mod.module.toUpperCase() == \"OUTPUT\"'>\r\n                <ul class='toolset__functions--subset'>\r\n                    <li *ngFor='let fn of mod.functions' (click)='add_function(fn)'> {{fn.name}} </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/view-editor/toolset/toolset.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/view-editor/toolset/toolset.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  background-color: #efefef; }\n\nul {\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px;\n  padding-left: 15px; }\n\nul li {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    margin: 0px;\n    padding: 0px;\n    color: #505050;\n    font-size: 12px;\n    line-height: 18px; }\n\n.remove-btn {\n  background-color: transparent;\n  border: none;\n  height: 13px;\n  float: right; }\n\n.remove-btn .remove-icon {\n    font-size: 11px;\n    height: 11px;\n    color: #505050; }\n\n.add-btn {\n  background-color: transparent;\n  border: none;\n  float: left;\n  padding: 6px;\n  transition: 0.4s; }\n\n.add-btn :hover {\n    background-color: gainsboro; }\n\n.add-btn .add-icon {\n    float: left;\n    color: #505050; }\n\n.accordion {\n  background-color: gainsboro;\n  color: #505050;\n  cursor: pointer;\n  width: 100%;\n  padding: 8px 8px 8px 8px;\n  border: none;\n  display: block;\n  text-align: left;\n  outline: none;\n  font-size: 12px;\n  transition: 0.4s;\n  font-weight: 550; }\n\n.active, .accordion:hover {\n  background-color: #ccc; }\n\n.panel {\n  width: inherit;\n  padding: 0px 10px 0px 0px;\n  display: none;\n  background-color: #efefef;\n  overflow: hidden; }\n\n.tooltip {\n  display: block; }\n\n/* Tooltip text */\n\n.tooltip .tooltiptext {\n  min-width: 50px;\n  max-width: 500px;\n  background-color: #efefef;\n  border: 1px solid #ccc;\n  color: #505050;\n  pointer-events: none;\n  padding: 0px 10px 0px 10px;\n  opacity: 0;\n  position: absolute;\n  z-index: 1; }\n\n.tooltip .tooltiptext p {\n    font-family: sans-serif; }\n\n.tooltip .tooltiptext p.funcDesc {\n      font-weight: 600; }\n\n.tooltip .tooltiptext p.paramP {\n      padding-left: 5px; }\n\n.tooltip .tooltiptext p.paramP ::before {\n        display: inline-block;\n        content: '';\n        border-radius: 0.25rem;\n        height: 0.25rem;\n        width: 0.25rem;\n        margin: 0rem 0.3rem 0.15rem 0rem;\n        background-color: #505050; }\n\n.tooltip .tooltiptext p span {\n      font-style: italic; }\n\n/* Show the tooltip text when you mouse over the tooltip container */\n\n.tooltip:hover .tooltiptext {\n  transition-delay: 1s;\n  transition-duration: 0.3s;\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/views/view-editor/toolset/toolset.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/view-editor/toolset/toolset.component.ts ***!
  \****************************************************************/
/*! exports provided: ToolsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsetComponent", function() { return ToolsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_procedure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/procedure */ "./src/app/shared/models/procedure/index.ts");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/decorators */ "./src/app/shared/decorators/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var keys = Object.keys(_models_procedure__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypes"]);
var ToolsetComponent = /** @class */ (function () {
    function ToolsetComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imported = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ProcedureTypes = _models_procedure__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypes"];
        this.ProcedureTypesArr = keys.slice(keys.length / 2);
    }
    // add selected basic function as a new procedure
    ToolsetComponent.prototype.add = function (type) {
        this.select.emit({ type: type, data: undefined });
    };
    // add selected function from core.modules as a new procedure
    ToolsetComponent.prototype.add_function = function (fnData) {
        // create a fresh copy of the params to avoid linked objects
        // todo: figure out
        fnData.args = fnData.args.map(function (arg) {
            return { name: arg.name, value: arg.value, default: arg.default };
        });
        this.select.emit({ type: _models_procedure__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypes"].Function, data: fnData });
    };
    // add selected imported function as a new procedure
    ToolsetComponent.prototype.add_imported_function = function (fnData) {
        fnData.args = fnData.args.map(function (arg) {
            return { name: arg.name, value: arg.value };
        });
        this.select.emit({ type: _models_procedure__WEBPACK_IMPORTED_MODULE_1__["ProcedureTypes"].Imported, data: fnData });
    };
    // delete imported function
    ToolsetComponent.prototype.delete_imported_function = function (fnData) {
        this.delete.emit(fnData);
    };
    // import a flowchart as function
    ToolsetComponent.prototype.import_function = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var p, fnc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = new Promise(function (resolve) {
                            var reader = new FileReader();
                            reader.onload = function () {
                                // parse the flowchart
                                var fl = circular_json__WEBPACK_IMPORTED_MODULE_2__["parse"](reader.result.toString()).flowchart;
                                // create function and documentation of the function
                                var funcs = [];
                                var documentation = {
                                    name: fl.name,
                                    module: 'Imported',
                                    description: fl.description,
                                    summary: fl.description,
                                    parameters: [],
                                    returns: undefined
                                };
                                var func = {
                                    flowchart: {
                                        name: fl.name,
                                        nodes: fl.nodes,
                                        edges: fl.edges
                                    },
                                    name: fl.name,
                                    module: 'Imported',
                                    doc: documentation
                                };
                                // go through the nodes
                                func.argCount = fl.nodes[0].procedure.length;
                                func.args = fl.nodes[0].procedure.map(function (prod) {
                                    documentation.parameters.push({
                                        name: prod.args[prod.argCount - 2].value.substring(1, prod.args[prod.argCount - 2].value.length - 1),
                                        description: prod.meta.description
                                    });
                                    return {
                                        name: prod.args[prod.argCount - 2].value.substring(1, prod.args[prod.argCount - 2].value.length - 1),
                                        default: prod.args[prod.argCount - 1].default,
                                        value: undefined,
                                        min: undefined,
                                        max: undefined
                                    };
                                });
                                if (!func.argCount) {
                                    resolve('error');
                                }
                                for (var _i = 0, _a = fl.nodes; _i < _a.length; _i++) {
                                    var node = _a[_i];
                                    if (node.type === 'end') {
                                        if (node.procedure.length > 0) {
                                            documentation.returns = node.procedure[0].meta.description;
                                        }
                                    }
                                }
                                // add func and all the imported functions of the imported flowchart to funcs
                                funcs.push(func);
                                for (var _b = 0, _c = fl.functions; _b < _c.length; _b++) {
                                    var i = _c[_b];
                                    funcs.push(i);
                                }
                                resolve(funcs);
                            };
                            reader.onerror = function () {
                                resolve('error');
                            };
                            reader.readAsText(event.target.files[0]);
                        });
                        return [4 /*yield*/, p];
                    case 1:
                        fnc = _a.sent();
                        document.getElementById('selectedFile').value = '';
                        if (fnc === 'error') {
                            console.warn('Error reading file');
                            return [2 /*return*/];
                        }
                        this.imported.emit(fnc);
                        return [2 /*return*/];
                }
            });
        });
    };
    ToolsetComponent.prototype.toggleAccordion = function (id) {
        var acc = document.getElementById(id);
        // acc = document.getElementsByClassName("accordion");
        acc.classList.toggle('active');
        var panel = acc.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        }
        else {
            panel.style.display = 'block';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolsetComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolsetComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolsetComponent.prototype, "imported", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ToolsetComponent.prototype, "functions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolsetComponent.prototype, "nodeType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ToolsetComponent.prototype, "hasProd", void 0);
    ToolsetComponent = __decorate([
        _shared_decorators__WEBPACK_IMPORTED_MODULE_3__["ModuleAware"],
        _shared_decorators__WEBPACK_IMPORTED_MODULE_3__["ModuleDocAware"],
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolset',
            template: __webpack_require__(/*! ./toolset.component.html */ "./src/app/views/view-editor/toolset/toolset.component.html"),
            styles: [__webpack_require__(/*! ./toolset.component.scss */ "./src/app/views/view-editor/toolset/toolset.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolsetComponent);
    return ToolsetComponent;
}());



/***/ }),

/***/ "./src/app/views/view-editor/view-editor.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/view-editor/view-editor.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{dataService.node?.name}}</h2>\r\n\r\n<div class='container--editor' (mouseenter)='activateCopyPaste()'  (mouseleave)='deactivateCopyPaste()'\r\n(copy)='copyProd()' (cut)='cutProd($event)' (paste)='pasteProd($event)'>\r\n\r\n    <div class='container__content'>\r\n        <!-- toolset on the left side -->\r\n        <div class=\"container--toolset\">\r\n            <toolset [functions]='dataService.flowchart.functions' \r\n            [nodeType]='dataService.node.type' \r\n            [hasProd]='dataService.node.procedure.length>0' \r\n            (delete)='deleteFunction($event)' \r\n            (select)='add($event)' \r\n            (imported)='importFunction($event)'></toolset>\r\n        </div>\r\n\r\n        <!-- procedure editor on the right side -->\r\n        <div id='procedure' class=\"container--procedure\">\r\n            <!-- parameter-editor only for start node -->\r\n            <parameter-editor *ngIf=\"dataService.node.type == 'start' || dataService.node.type == 'end'\" [flowchart]='dataService.flowchart' [node]='dataService.node'></parameter-editor>\r\n\r\n            <!-- list of procedure items for all nodes -->\r\n            <procedure-item \r\n            *ngFor=\"let line of dataService.node?.procedure; let idx=index\" \r\n            [data]=\"line\"\r\n            (select)=\"selectProcedure($event,line)\"\r\n            (delete)=\"deleteChild(idx)\"\r\n            (helpText)='emitHelpText($event)'></procedure-item>\r\n            <br>\r\n            <br>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/view-editor/view-editor.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/view-editor/view-editor.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container--editor {\n  display: block;\n  height: 95%;\n  width: 100%; }\n\n.container__heading {\n  display: block;\n  text-align: center;\n  width: 98%; }\n\nh2 {\n  color: #505050;\n  text-align: left;\n  width: 100%;\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 600;\n  padding-left: 15px; }\n\nhr {\n  border-top: 2px solid #efefef; }\n\n.container__content {\n  display: inline-flex;\n  width: 100%;\n  min-height: 95%;\n  overflow: inherit; }\n\n.container--toolset {\n  display: inline-flex;\n  width: 20%; }\n\n.container--procedure {\n  display: block;\n  width: 80%;\n  bottom: 10px;\n  background-color: #fafafa;\n  padding: none; }\n\nhr {\n  border-top: 2px solid #efefef;\n  width: 100%; }\n\n/*\r\n$header-height: 45px;\r\n\r\n.container{\r\n    position: relative;\r\n    overflow: auto;\r\n    margin: 10px 10px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n        \r\n    h1, h2, h3, h4, h5, h6, p{\r\n        margin: 0px;\r\n        padding: 0px;\r\n    }\r\n\r\n    .container__header{\r\n        flex: 0 1 auto;\r\n        min-height: $header-height;\r\n\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n\r\n        padding: 0px 0px 0px 15px;\r\n\r\n        background-color: #3F4651;\r\n        color: #E7BF00;\r\n        \r\n        line-height: $header-height;\r\n        text-transform: uppercase;\r\n    \r\n        font-size: 18px;\r\n        font-weight: 600;\r\n        text-align: center;\r\n    }\r\n\r\n    .container__content{\r\n        flex-grow: 1;\r\n        height: 0px;\r\n        border: 2px solid #3F4651;\r\n        overflow: auto;\r\n\r\n        split{\r\n            height: 100%;\r\n        }\r\n    }\r\n\r\n    .container__footer{\r\n        text-align: center;\r\n        font-size: 12px;\r\n        line-height: 18px;\r\n\r\n        background-color: #3F4651;\r\n        color: #E7BF00;\r\n    }\r\n}\r\n\r\n\r\n.content__panel{\r\n    height: 100%; \r\n    overflow: auto;\r\n\r\n    //padding: 10px 15px;\r\n}\r\n*/\n"

/***/ }),

/***/ "./src/app/views/view-editor/view-editor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/view-editor/view-editor.component.ts ***!
  \************************************************************/
/*! exports provided: ViewEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEditorComponent", function() { return ViewEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/node */ "./src/app/shared/models/node/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewEditorComponent = /** @class */ (function () {
    function ViewEditorComponent(dataService) {
        this.dataService = dataService;
        /*
        @Input() flowchart: IFlowchart;
        @Input() node: INode;
        */
        this.imported = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete_Function = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.helpText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.copyCheck = false;
    }
    // add a procedure
    ViewEditorComponent.prototype.add = function (data) {
        _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].add_procedure(this.dataService.node, data.type, data.data);
    };
    // delete a procedure
    ViewEditorComponent.prototype.deleteChild = function (index) {
        this.dataService.node.procedure.splice(index, 1);
        _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].deselect_procedure(this.dataService.node);
    };
    // select a procedure
    ViewEditorComponent.prototype.selectProcedure = function (event, line) {
        _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].select_procedure(this.dataService.node, event.prod, event.ctrl || false);
    };
    // copy selected procedures
    ViewEditorComponent.prototype.copyProd = function () {
        var node = this.dataService.node;
        if (!this.copyCheck || node.type === 'end') {
            return;
        }
        console.log('copying', node.state.procedure);
        this.copiedType = node.type;
        this.copiedProd = node.state.procedure;
    };
    // cut selected procedures
    ViewEditorComponent.prototype.cutProd = function (event) {
        var node = this.dataService.node;
        if (!this.copyCheck || document.activeElement.nodeName === 'INPUT' || node.type === 'end') {
            return;
        }
        console.log('cutting', node.state.procedure);
        this.copiedType = node.type;
        this.copiedProd = node.state.procedure;
        var parentArray;
        for (var _i = 0, _a = this.copiedProd; _i < _a.length; _i++) {
            var prod = _a[_i];
            if (prod.parent) {
                parentArray = prod.parent.children;
            }
            else {
                parentArray = node.procedure;
            }
            for (var i = 0; i < parentArray.length; i++) {
                if (parentArray[i] === prod) {
                    parentArray.splice(i, 1);
                    break;
                }
            }
        }
        _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].deselect_procedure(node);
    };
    // paste copied procedures
    ViewEditorComponent.prototype.pasteProd = function (event) {
        var node = this.dataService.node;
        if (this.copyCheck
            && this.copiedProd
            && this.copiedType === node.type
            && document.activeElement.nodeName.toUpperCase() !== 'INPUT'
            && document.activeElement.nodeName.toUpperCase() !== 'TEXTAREA') {
            var pastingPlace = node.state.procedure[0];
            if (pastingPlace === undefined) {
                for (var i = 0; i < this.copiedProd.length; i++) {
                    console.log('pasting', this.copiedProd[i].ID);
                    _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].paste_procedure(node, this.copiedProd[i]);
                    node.state.procedure[0].selected = false;
                    node.state.procedure = [];
                }
            }
            else if (pastingPlace.children) {
                for (var i = 0; i < this.copiedProd.length; i++) {
                    console.log('pasting', this.copiedProd[i].ID);
                    _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].paste_procedure(node, this.copiedProd[i]);
                    node.state.procedure[0].selected = false;
                    pastingPlace.selected = true;
                    node.state.procedure = [pastingPlace];
                }
            }
            else {
                for (var i = this.copiedProd.length - 1; i >= 0; i--) {
                    console.log('pasting', this.copiedProd[i].ID);
                    _models_node__WEBPACK_IMPORTED_MODULE_1__["NodeUtils"].paste_procedure(node, this.copiedProd[i]);
                    node.state.procedure[0].selected = false;
                    pastingPlace.selected = true;
                    node.state.procedure = [pastingPlace];
                }
            }
            // this.copiedProd = undefined;
        }
    };
    // activate copying/cutting/pasting when the mouse hovers over the procedure list
    ViewEditorComponent.prototype.activateCopyPaste = function () {
        this.copyCheck = true;
    };
    // deactivate copying/cutting/pasting when the mouse exit the procedure list
    ViewEditorComponent.prototype.deactivateCopyPaste = function () {
        this.copyCheck = false;
    };
    // import a flowchart as function
    ViewEditorComponent.prototype.importFunction = function (event) {
        for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
            var func = event_1[_i];
            this.dataService.flowchart.functions.push(func);
        }
    };
    // delete an imported function
    ViewEditorComponent.prototype.deleteFunction = function (event) {
        for (var i = 0; i < this.dataService.flowchart.functions.length; i++) {
            if (this.dataService.flowchart.functions[i] === event) {
                this.dataService.flowchart.functions.splice(i, 1);
                break;
            }
        }
    };
    ViewEditorComponent.prototype.emitHelpText = function (event) {
        if (typeof (event) === 'string') {
            for (var _i = 0, _a = this.dataService.flowchart.functions; _i < _a.length; _i++) {
                var func = _a[_i];
                if (func.name === event) {
                    this.helpText.emit(func.doc);
                }
            }
        }
        else {
            this.helpText.emit(event);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewEditorComponent.prototype, "imported", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewEditorComponent.prototype, "delete_Function", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewEditorComponent.prototype, "helpText", void 0);
    ViewEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-editor',
            template: __webpack_require__(/*! ./view-editor.component.html */ "./src/app/views/view-editor/view-editor.component.html"),
            styles: [__webpack_require__(/*! ./view-editor.component.scss */ "./src/app/views/view-editor/view-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ViewEditorComponent);
    return ViewEditorComponent;
}());



/***/ }),

/***/ "./src/app/views/view-editor/view-editor.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/view-editor/view-editor.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEditorModule", function() { return ViewEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _view_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-editor.component */ "./src/app/views/view-editor/view-editor.component.ts");
/* harmony import */ var _procedure_item_procedure_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./procedure-item/procedure-item.component */ "./src/app/views/view-editor/procedure-item/procedure-item.component.ts");
/* harmony import */ var _toolset_toolset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolset/toolset.component */ "./src/app/views/view-editor/toolset/toolset.component.ts");
/* harmony import */ var _parameter_editor_parameter_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parameter-editor/parameter-editor.component */ "./src/app/views/view-editor/parameter-editor/parameter-editor.component.ts");
/* harmony import */ var _parameter_editor_procedure_input_editor_procedure_input_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parameter-editor/procedure-input-editor/procedure-input-editor.component */ "./src/app/views/view-editor/parameter-editor/procedure-input-editor/procedure-input-editor.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewEditorModule = /** @class */ (function () {
    function ViewEditorModule() {
    }
    ViewEditorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _view_editor_component__WEBPACK_IMPORTED_MODULE_3__["ViewEditorComponent"],
                _procedure_item_procedure_item_component__WEBPACK_IMPORTED_MODULE_4__["ProcedureItemComponent"],
                _toolset_toolset_component__WEBPACK_IMPORTED_MODULE_5__["ToolsetComponent"],
                _parameter_editor_parameter_editor_component__WEBPACK_IMPORTED_MODULE_6__["ParameterEditorComponent"],
                _parameter_editor_procedure_input_editor_procedure_input_editor_component__WEBPACK_IMPORTED_MODULE_7__["ProcedureInputEditorComponent"],
            ],
            entryComponents: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            ],
            exports: [
                _view_editor_component__WEBPACK_IMPORTED_MODULE_3__["ViewEditorComponent"],
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], ViewEditorModule);
    return ViewEditorModule;
}());



/***/ }),

/***/ "./src/app/views/view-gallery/simple-name.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/views/view-gallery/simple-name.pipe.ts ***!
  \********************************************************/
/*! exports provided: SimpleNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNamePipe", function() { return SimpleNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Shortens a name to a certain length and appends "..." infront of it
 * Usage:
 *   value | length:number
 * Example:
 *   {{ "some_very_long_string" | length:7 }}
 *   formats to: some_ve...
*/
var SimpleNamePipe = /** @class */ (function () {
    function SimpleNamePipe() {
    }
    SimpleNamePipe.prototype.transform = function (value) {
        if (value.endsWith('.mob')) {
            value = value.substr(0, value.length - 4);
        }
        value = value.split('_').join(' ');
        value = value.split('-').join(' ');
        return value;
    };
    SimpleNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'simplename' })
    ], SimpleNamePipe);
    return SimpleNamePipe;
}());



/***/ }),

/***/ "./src/app/views/view-gallery/view-gallery.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/view-gallery/view-gallery.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Möbius Gallery</h2>\r\n<hr>\r\n<h4>Displaying {{ (allFiles | async)?.length}} projects</h4>\r\n<div class=\"container__element container__element--project-container\">\r\n    <div class=\"project-container__project\" *ngFor=\"let f of  (allFiles | async)\">\r\n        <div class=\"project__content\" (click)='loadFile(f)'>\r\n            {{ f.name | simplename }}\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--\r\n<div class=\"container\">\r\n    <div class=\"container__element container__element--header\">\r\n        Möbius Gallery\r\n        <navigation></navigation>\r\n    </div>\r\n\r\n    <div class=\"container__element container__element--subheader\">\r\n        Displaying {{ (allFiles | async)?.length}} projects\r\n    </div>\r\n\r\n    <div class=\"container__element container__element--project-container\">\r\n        <div class=\"project-container__project\" *ngFor=\"let f of  (allFiles | async)\">\r\n            <div class=\"project__content\" (click)='loadFile(f)'>\r\n                {{ f.name | simplename }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n-->\r\n<!--\r\n<a href=\"https://github.com/design-automation/mobius-cesium\">\r\n    <img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png\" alt=\"Fork me on GitHub\">\r\n</a>\r\n-->"

/***/ }),

/***/ "./src/app/views/view-gallery/view-gallery.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/view-gallery/view-gallery.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container__element {\n  padding: 0px 10% 0px 10%; }\n\n.container__element--project-container {\n  font-size: 26px;\n  line-height: 32px;\n  font-weight: 300;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow: auto; }\n\n.project-container__project {\n  position: relative;\n  width: 25%;\n  height: 150px;\n  min-width: 200px; }\n\n.project-container__project .project__content {\n    height: 90%;\n    width: 90%;\n    font-size: 12px;\n    line-height: 24px;\n    color: #000;\n    overflow: hidden;\n    border-radius: 4px;\n    vertical-align: middle;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-word;\n    border: 1px solid #bbb;\n    border-radius: 2px; }\n\n.project-container__project .project__content a {\n      display: block;\n      height: 100%;\n      margin: 10px;\n      text-decoration: none;\n      text-align: center;\n      text-transform: uppercase;\n      color: inherit;\n      font-weight: 600; }\n\n.project-container__project .project__content a:visited {\n        color: inherit; }\n\n.project-container__project .project__content:hover {\n      border-color: #222; }\n\nh2 {\n  color: #505050;\n  text-align: left;\n  padding-left: 15px;\n  font-size: 12px;\n  line-height: 19px; }\n\nh4 {\n  color: #505050;\n  text-align: left;\n  padding-left: 15px;\n  font-size: 12px;\n  line-height: 16px; }\n\np {\n  color: #505050;\n  text-align: left;\n  padding-left: 15px;\n  font-size: 12px;\n  line-height: 14px; }\n\nhr {\n  border-top: 2px solid #efefef; }\n\ndiv[class^=\"container--\"] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px; }\n"

/***/ }),

/***/ "./src/app/views/view-gallery/view-gallery.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/view-gallery/view-gallery.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGalleryComponent", function() { return ViewGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _view_gallery_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-gallery.config */ "./src/app/views/view-gallery/view-gallery.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services */ "./src/app/core/services/index.ts");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! circular-json */ "./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {Router} from '@angular/router';


var ViewGalleryComponent = /** @class */ (function () {
    function ViewGalleryComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.switch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allFiles = this.getFilesFromURL();
    }
    ViewGalleryComponent.prototype.getFilesFromURL = function () {
        return this.http.get(_view_gallery_config__WEBPACK_IMPORTED_MODULE_2__["Constants"].GALLERY_URL, { responseType: 'json' });
    };
    ViewGalleryComponent.prototype.loadFile = function (fl) {
        var _this = this;
        var stream = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var request = new XMLHttpRequest();
            request.open('GET', fl.download_url);
            request.onload = function () {
                if (request.status === 200) {
                    var f = circular_json__WEBPACK_IMPORTED_MODULE_5__["parse"](request.responseText);
                    var file = {
                        name: f.name,
                        author: f.author,
                        flowchart: f.flowchart,
                        last_updated: f.last_updated,
                        version: f.version
                    };
                    observer.next(file);
                    observer.complete();
                }
                else {
                    observer.error('error happened');
                }
            };
            request.onerror = function () {
                observer.error('error happened');
            };
            request.send();
        });
        stream.subscribe(function (loadeddata) {
            _this.dataService.file = loadeddata;
            _this.switch.emit('publish');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewGalleryComponent.prototype, "switch", void 0);
    ViewGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-gallery',
            template: __webpack_require__(/*! ./view-gallery.component.html */ "./src/app/views/view-gallery/view-gallery.component.html"),
            styles: [__webpack_require__(/*! ./view-gallery.component.scss */ "./src/app/views/view-gallery/view-gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ViewGalleryComponent);
    return ViewGalleryComponent;
}());



/***/ }),

/***/ "./src/app/views/view-gallery/view-gallery.config.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/view-gallery/view-gallery.config.ts ***!
  \***********************************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "GALLERY_URL", {
        get: function () {
            // return 'https://api.github.com/repos/design-automation/mobius-gallery/contents/examples?ref=master';
            return 'https://api.github.com/repos/design-automation/mobius-core/contents/src/assets/gallery?ref=master';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "FILE_URL", {
        get: function () {
            return 'https://raw.githubusercontent.com/design-automation/mobius-gallery/master/examples/';
        },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());



/***/ }),

/***/ "./src/app/views/view-gallery/view-gallery.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/view-gallery/view-gallery.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGalleryModule", function() { return ViewGalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _view_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-gallery.component */ "./src/app/views/view-gallery/view-gallery.component.ts");
/* harmony import */ var _simple_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-name.pipe */ "./src/app/views/view-gallery/simple-name.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewGalleryModule = /** @class */ (function () {
    function ViewGalleryModule() {
    }
    ViewGalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _view_gallery_component__WEBPACK_IMPORTED_MODULE_3__["ViewGalleryComponent"],
                _simple_name_pipe__WEBPACK_IMPORTED_MODULE_4__["SimpleNamePipe"]
            ],
            exports: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // ViewGalleryRoutingModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            entryComponents: [],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], ViewGalleryModule);
    return ViewGalleryModule;
}());



/***/ }),

/***/ "./src/app/views/view-publish/view-publish.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/view-publish/view-publish.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<parameter-viewer [flowchart]='dataService.flowchart' [startNode]='dataService.flowchart.nodes[0]' [endNode]='getEndNode()'></parameter-viewer>\r\n\r\n<!--\r\n<div class='container'>\r\n    <div class='container__content'>\r\n    \r\n        < !-- Side content__Panel: Split into three panes -- >\r\n        <as-split direction=\"vertical\">\r\n\r\n            <as-split-area size='20'>\r\n                <div class='content__panel'>\r\n                    <parameter-viewer [node]='flowchart.nodes[0]'></parameter-viewer>\r\n                </div>\r\n            </as-split-area>\r\n            \r\n            < !-- \r\n            <as-split-area size='20'>\r\n                <div class='content__panel'>\r\n                        <flowchart [data]=\"flowchart\" (select)='selectNode($event)'></flowchart>\r\n                </div>\r\n            </as-split-area> \r\n            -- >\r\n        \r\n        </as-split>\r\n                    \r\n    </div>\r\n</div>\r\n-->\r\n<!--\r\n<div class='container'>\r\n\r\n    <div class='container__header'>\r\n        Mobius Viewer    \r\n        <navigation></navigation>\r\n        <execute [flowchart]='flowchart'></execute>\r\n    </div>\r\n\r\n    <div class='container__content'>\r\n        <file-new *ngIf='!flowchart'></file-new>\r\n\r\n        <as-split direction=\"horizontal\" *ngIf='flowchart'>\r\n            <as-split-area size=\"60\">\r\n\r\n                <div class='content__panel' *ngIf='flowchart.meta.selected_nodes[0] !== undefined'>\r\n                    <mviewer [node]='flowchart.nodes[flowchart.meta.selected_nodes[0]]'></mviewer>\r\n                </div>\r\n            </as-split-area>\r\n            \r\n            <as-split-area size=\"40\">\r\n    \r\n\r\n                <as-split direction=\"vertical\">\r\n    \r\n                        <as-split-area size='20'>\r\n                            <div class='content__panel'>\r\n                                <parameter-viewer [node]='flowchart.nodes[0]'></parameter-viewer>\r\n                            </div>\r\n                        </as-split-area>\r\n                        \r\n                    \r\n                    </as-split>\r\n                    \r\n            </as-split-area>\r\n        </as-split>\r\n    </div>\r\n\r\n    <div class='container__footer'>\r\n        Copyright © 2018 Design Automation Lab, NUS. All Rights Reserved.\r\n    </div>\r\n    \r\n    \r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/views/view-publish/view-publish.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/view-publish/view-publish.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  overflow: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n  .container h1, .container h2, .container h3, .container h4, .container h5, .container h6, .container p {\n    margin: 0px;\n    padding: 0px; }\n  .container .container__header {\n    flex: 0 1 auto;\n    min-height: 45px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0px 0px 0px 15px;\n    background-color: #3F4651;\n    color: #E7BF00;\n    line-height: 45px;\n    text-transform: uppercase;\n    font-size: 18px;\n    font-weight: 600;\n    text-align: center; }\n  .container .container__content {\n    flex-grow: 1;\n    height: 0px;\n    border: none;\n    overflow: auto; }\n  .container .container__content split {\n      height: 100%; }\n  .container .container__footer {\n    text-align: center;\n    font-size: 12px;\n    line-height: 18px;\n    background-color: #3F4651;\n    color: #E7BF00; }\n  .content__panel {\n  height: 100%;\n  overflow: auto;\n  padding: 10px 15px; }\n"

/***/ }),

/***/ "./src/app/views/view-publish/view-publish.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/view-publish/view-publish.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPublishComponent", function() { return ViewPublishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewPublishComponent = /** @class */ (function () {
    function ViewPublishComponent(dataService) {
        this.dataService = dataService;
    }
    ViewPublishComponent.prototype.selectNode = function (node_index) {
        if (typeof (node_index) === 'number') {
            this.dataService.flowchart.meta.selected_nodes = [node_index];
        }
    };
    ViewPublishComponent.prototype.getEndNode = function () {
        for (var _i = 0, _a = this.dataService.flowchart.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.type === 'end') {
                return node;
            }
        }
    };
    ViewPublishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-publish',
            template: __webpack_require__(/*! ./view-publish.component.html */ "./src/app/views/view-publish/view-publish.component.html"),
            styles: [__webpack_require__(/*! ./view-publish.component.scss */ "./src/app/views/view-publish/view-publish.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ViewPublishComponent);
    return ViewPublishComponent;
}());



/***/ }),

/***/ "./src/app/views/view-publish/view-publish.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/view-publish/view-publish.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewPublishModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPublishModule", function() { return ViewPublishModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _view_publish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-publish.component */ "./src/app/views/view-publish/view-publish.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewPublishModule = /** @class */ (function () {
    function ViewPublishModule() {
    }
    ViewPublishModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _view_publish_component__WEBPACK_IMPORTED_MODULE_3__["ViewPublishComponent"]
            ],
            exports: [
                _view_publish_component__WEBPACK_IMPORTED_MODULE_3__["ViewPublishComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            entryComponents: [],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], ViewPublishModule);
    return ViewPublishModule;
}());



/***/ }),

/***/ "./src/assets/typedoc-json/doc.json":
/*!******************************************!*\
  !*** ./src/assets/typedoc-json/doc.json ***!
  \******************************************/
/*! exports provided: id, name, kind, flags, children, groups, default */
/***/ (function(module) {

module.exports = {"id":0,"name":"mobius-core","kind":0,"flags":{},"children":[{"id":26,"name":"\"Input\"","kind":1,"kindString":"External module","flags":{"isExported":true},"originalName":"C:/Users/akibdpt/Documents/Angular/mobius-core/src/app/core/modules/Input.ts","children":[{"id":27,"name":"declare_constant","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":28,"name":"declare_constant","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Declare a new constant for the input node","returns":"Void\n","tags":[{"tag":"summary","text":"Declare new constant\n"}]},"parameters":[{"id":29,"name":"__constList__","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"List of constants to be added."},"type":{"type":"reference","name":"JSON"}},{"id":30,"name":"const_name","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"Name of the constant."},"type":{"type":"intrinsic","name":"string"}},{"id":31,"name":"__input__","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"Value of the constant.\n"},"type":{"type":"intrinsic","name":"any"}}],"type":{"type":"intrinsic","name":"void"}}],"sources":[{"fileName":"Input.ts","line":11,"character":32}]}],"groups":[{"title":"Functions","kind":64,"children":[27]}],"sources":[{"fileName":"Input.ts","line":1,"character":0}]},{"id":1,"name":"\"Model\"","kind":1,"kindString":"External module","flags":{"isExported":true},"originalName":"C:/Users/akibdpt/Documents/Angular/mobius-core/src/app/core/modules/Model.ts","children":[{"id":4,"name":"__merge__","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":5,"name":"__merge__","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Merge two models, first model will be modified","returns":"Merged model\n","tags":[{"tag":"summary","text":"Merge two models\n"}]},"parameters":[{"id":6,"name":"model1","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"First model to be merged, will be modified to become the merged model after execution of the function"},"type":{"type":"intrinsic","name":"any"}},{"id":7,"name":"model2","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"Second model to be merged, unchanged after execution of the function\n"},"type":{"type":"intrinsic","name":"any"}}],"type":{"type":"array","elementType":{"type":"intrinsic","name":"any"}}}],"sources":[{"fileName":"Model.ts","line":20,"character":25}]},{"id":2,"name":"__new__","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":3,"name":"__new__","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Create a new model","returns":"Empty new model\n","tags":[{"tag":"summary","text":"New model\n"}]},"type":{"type":"array","elementType":{"type":"intrinsic","name":"any"}}}],"sources":[{"fileName":"Model.ts","line":7,"character":23}]},{"id":11,"name":"__postprocess__","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":12,"name":"__postprocess__","kind":4096,"kindString":"Call signature","flags":{},"parameters":[{"id":13,"name":"__model__","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"any"}}],"type":{"type":"intrinsic","name":"void"}}],"sources":[{"fileName":"Model.ts","line":39,"character":31}]},{"id":8,"name":"__preprocess__","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":9,"name":"__preprocess__","kind":4096,"kindString":"Call signature","flags":{},"parameters":[{"id":10,"name":"__model__","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"any"}}],"type":{"type":"intrinsic","name":"void"}}],"sources":[{"fileName":"Model.ts","line":35,"character":30}]},{"id":18,"name":"get","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":19,"name":"get","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Get a value from the model with a list of indices","returns":"Value\n","tags":[{"tag":"summary","text":"Get a specific value\n"}]},"parameters":[{"id":20,"name":"__model__","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"Model of the node."},"type":{"type":"array","elementType":{"type":"reference","name":"JSON"}}},{"id":21,"name":"indices","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"List of indices of the values to be retrieved from the model.\n"},"type":{"type":"array","elementType":{"type":"intrinsic","name":"number"}}}],"type":{"type":"intrinsic","name":"any"}}],"sources":[{"fileName":"Model.ts","line":76,"character":19}]},{"id":22,"name":"remove","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":23,"name":"remove","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Remove certain value from the model with a list of indices","tags":[{"tag":"summary","text":"Remove a specific value\n"}]},"parameters":[{"id":24,"name":"__model__","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"Model of the node."},"type":{"type":"array","elementType":{"type":"reference","name":"JSON"}}},{"id":25,"name":"indices","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"List of indices of the values to be removed from the model.\n"},"type":{"type":"array","elementType":{"type":"intrinsic","name":"number"}}}],"type":{"type":"intrinsic","name":"void"}}],"sources":[{"fileName":"Model.ts","line":95,"character":22}]},{"id":14,"name":"set","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":15,"name":"set","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Register a value in the model","returns":"Index of the set value\n","tags":[{"tag":"summary","text":"Set a value\n"},{"tag":"test","text":"test1"}]},"parameters":[{"id":16,"name":"__model__","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"Model of the node."},"type":{"type":"array","elementType":{"type":"intrinsic","name":"any"}}},{"id":17,"name":"var_value","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"Value to be set.\n"},"type":{"type":"intrinsic","name":"any"}}],"type":{"type":"array","elementType":{"type":"intrinsic","name":"number"}}}],"sources":[{"fileName":"Model.ts","line":53,"character":19}]}],"groups":[{"title":"Functions","kind":64,"children":[4,2,11,8,18,22,14]}],"sources":[{"fileName":"Model.ts","line":1,"character":0}]},{"id":42,"name":"\"Output\"","kind":1,"kindString":"External module","flags":{"isExported":true},"originalName":"C:/Users/akibdpt/Documents/Angular/mobius-core/src/app/core/modules/Output.ts","children":[{"id":43,"name":"return_value","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":44,"name":"return_value","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Return certain value from the model for the flowchart's end node","returns":"Value\n","tags":[{"tag":"summary","text":"Return a specific value"}]},"parameters":[{"id":45,"name":"__model__","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"Model of the node."},"type":{"type":"array","elementType":{"type":"intrinsic","name":"any"}}},{"id":46,"name":"index","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"Index of the value to be returned."},"type":{"type":"intrinsic","name":"number"}}],"type":{"type":"intrinsic","name":"any"}}],"sources":[{"fileName":"Output.ts","line":9,"character":28}]}],"groups":[{"title":"Functions","kind":64,"children":[43]}],"sources":[{"fileName":"Output.ts","line":1,"character":0}]},{"id":32,"name":"\"Query\"","kind":1,"kindString":"External module","flags":{"isExported":true},"originalName":"C:/Users/akibdpt/Documents/Angular/mobius-core/src/app/core/modules/Query.ts","children":[{"id":38,"name":"get","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":39,"name":"get","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Get a list of indices of the values that have certain properties","returns":"List of indices\n","tags":[{"tag":"summary","text":"Get indices of values"}]},"parameters":[{"id":40,"name":"__model__","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"Model of the node."},"type":{"type":"array","elementType":{"type":"reference","name":"JSON"}}},{"id":41,"name":"statement","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"Properties to be added to the value."},"type":{"type":"intrinsic","name":"string"}}],"type":{"type":"array","elementType":{"type":"intrinsic","name":"number"}}}],"sources":[{"fileName":"Query.ts","line":36,"character":19}]},{"id":33,"name":"set","kind":64,"kindString":"Function","flags":{"isExported":true},"signatures":[{"id":34,"name":"set","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Assign properties to a certain value in the model","returns":"Void\n","tags":[{"tag":"summary","text":"Assign a property"}]},"parameters":[{"id":35,"name":"__model__","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"Model of the node."},"type":{"type":"array","elementType":{"type":"intrinsic","name":"any"}}},{"id":36,"name":"indices","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"Indices of the value to set properties with."},"type":{"type":"array","elementType":{"type":"intrinsic","name":"number"}}},{"id":37,"name":"statement","kind":32768,"kindString":"Parameter","flags":{},"comment":{"text":"Properties to be added to the value."},"type":{"type":"intrinsic","name":"string"}}],"type":{"type":"intrinsic","name":"void"}}],"sources":[{"fileName":"Query.ts","line":10,"character":19}]}],"groups":[{"title":"Functions","kind":64,"children":[38,33]}],"sources":[{"fileName":"Query.ts","line":1,"character":0}]},{"id":47,"name":"\"_parameterTypes\"","kind":1,"kindString":"External module","flags":{"isExported":true},"originalName":"C:/Users/akibdpt/Documents/Angular/mobius-core/src/app/core/modules/_parameterTypes.ts","children":[{"id":48,"name":"_parameterTypes","kind":2097152,"kindString":"Object literal","flags":{"isExported":true,"isConst":true},"children":[{"id":49,"name":"constList","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":4,"character":13}],"type":{"type":"intrinsic","name":"string"},"defaultValue":"\"__constList__\""},{"id":51,"name":"input","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":6,"character":9}],"type":{"type":"intrinsic","name":"string"},"defaultValue":"\"__input__\""},{"id":54,"name":"merge","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":11,"character":9}],"type":{"type":"intrinsic","name":"string"},"defaultValue":"\"Model.__merge__\""},{"id":55,"name":"mergeFn","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":12,"character":11}],"type":{"type":"reference","name":"__merge__","id":4},"defaultValue":" __merge__"},{"id":50,"name":"model","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":5,"character":9}],"type":{"type":"intrinsic","name":"string"},"defaultValue":"\"__model__\""},{"id":52,"name":"new","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":8,"character":7}],"type":{"type":"intrinsic","name":"string"},"defaultValue":"\"Model.__new__\""},{"id":53,"name":"newFn","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":9,"character":9}],"type":{"type":"reference","name":"__new__","id":2},"defaultValue":" __new__"},{"id":57,"name":"postprocess","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":15,"character":15}],"type":{"type":"intrinsic","name":"string"},"defaultValue":"\"Model.__postprocess__\""},{"id":56,"name":"preprocess","kind":32,"kindString":"Variable","flags":{"isExported":true},"sources":[{"fileName":"_parameterTypes.ts","line":14,"character":14}],"type":{"type":"intrinsic","name":"string"},"defaultValue":"\"Model.__preprocess__\""}],"groups":[{"title":"Variables","kind":32,"children":[49,51,54,55,50,52,53,57,56]}],"sources":[{"fileName":"_parameterTypes.ts","line":3,"character":28}],"type":{"type":"intrinsic","name":"object"}}],"groups":[{"title":"Object literals","kind":2097152,"children":[48]}],"sources":[{"fileName":"_parameterTypes.ts","line":1,"character":0}]},{"id":58,"name":"\"index\"","kind":1,"kindString":"External module","flags":{"isExported":true},"originalName":"C:/Users/akibdpt/Documents/Angular/mobius-core/src/app/core/modules/index.ts","sources":[{"fileName":"index.ts","line":1,"character":0}]}],"groups":[{"title":"External modules","kind":1,"children":[26,1,42,32,47,58]}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_appmodule_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/appmodule/app.module */ "./src/app/appmodule/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_appmodule_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\akibdpt\Documents\Angular\mobius-core\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map