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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-series></app-search-series>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'series-search';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_series_search_series_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-series/search-series.component */ "./src/app/search-series/search-series.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _search_series_search_series_component__WEBPACK_IMPORTED_MODULE_4__["SearchSeriesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search-series/search-series.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-series/search-series.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\">Поиск по сериалам:</h2>\n<input class=\"search\" #searchInput type=\"text\" placeholder=\"введите название сериала\">\n\n<h3 class=\"info-title\" *ngIf=\"isLoading\">Ищем сериалы</h3>\n<h3 class=\"info-title\" *ngIf=\"!isSeries\">Ничего не нашли ((</h3>\n\n<ul class=\"list\" #seriesList >\n  <li class=\"list__item\" *ngFor=\"let item of series\">\n    <p class=\"list__title\">{{item.show.name}}</p>\n    <img class=\"list__img\" src=\"{{item.show.image ? item.show.image.medium : 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png'}}\">\n    <div class=\"list__sign\">\n      <span *ngFor=\"let genre of item.show.genres\">{{genre}}</span>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/search-series/search-series.component.scss":
/*!************************************************************!*\
  !*** ./src/app/search-series/search-series.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 28px;\n  color: #f3f3f3; }\n\n.info-title {\n  font-size: 18px;\n  color: #f3f3f3; }\n\n.search {\n  padding: 5px 10px;\n  font-size: 16px;\n  width: 100%;\n  color: #f3f3f3;\n  background-color: #111;\n  border-color: #333; }\n\n.list {\n  list-style: none;\n  padding: 0;\n  margin-top: 40px;\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n\n.list__item {\n    width: 20%;\n    margin: 2.5%; }\n\n.list__title {\n    font-size: 20px;\n    font-weight: bold;\n    width: 100%;\n    word-wrap: break-word;\n    color: #f3f3f3; }\n\n.list__img {\n    display: block;\n    width: 100%;\n    height: auto; }\n\n.list__sign {\n    margin-top: 20px;\n    color: #f3f3f3; }\n\n.list__sign span:not(:last-child):after {\n      content: ', '; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXNlcmllcy9DOlxcVXNlcnNcXHN1c2xpXFxEb2N1bWVudHNcXExlYXJuSlNfQW5ndWxhclxcYW5ndWxhci1saXZlLXNlYXJjaFxcc2VyaWVzLXNlYXJjaC9zcmNcXGFwcFxcc2VhcmNoLXNlcmllc1xcc2VhcmNoLXNlcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUVmO0lBQ0ksVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFHaEI7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsY0FDSixFQUFBOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBR2hCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTs7QUFGakI7TUFLTyxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtc2VyaWVzL3NlYXJjaC1zZXJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICNmM2YzZjM7XHJcbn1cclxuXHJcbi5pbmZvLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2YzZjNmMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIG1hcmdpbjogMi41JTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICBjb2xvcjogI2YzZjNmM1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3NpZ24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmM2YzZjM7XHJcblxyXG4gICAgICAgIHNwYW46bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcsICc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/search-series/search-series.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-series/search-series.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSeriesComponent", function() { return SearchSeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SearchSeriesComponent = /** @class */ (function () {
    function SearchSeriesComponent() {
        this.URL = 'http://api.tvmaze.com/search/shows?q=';
        this.isLoading = false;
        this.isSeries = false;
    }
    SearchSeriesComponent.prototype.ngOnInit = function () {
        this.onKeyUpSubscription();
    };
    SearchSeriesComponent.prototype.onKeyUpSubscription = function () {
        var _this = this;
        var input$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.searchInput.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        input$.subscribe(function () {
            _this.isSeries = true;
            _this.isLoading = true;
            _this.sendRequest();
        });
    };
    SearchSeriesComponent.prototype.sendRequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var searchValue, res, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchValue = this.searchInput.nativeElement.value;
                        return [4 /*yield*/, fetch(this.URL + searchValue)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        this.series = data;
                        this.isSeries = !!this.series.length;
                        this.isLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchSeriesComponent.prototype, "searchInput", void 0);
    SearchSeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-series',
            template: __webpack_require__(/*! ./search-series.component.html */ "./src/app/search-series/search-series.component.html"),
            styles: [__webpack_require__(/*! ./search-series.component.scss */ "./src/app/search-series/search-series.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchSeriesComponent);
    return SearchSeriesComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\susli\Documents\LearnJS_Angular\angular-live-search\series-search\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map