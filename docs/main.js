(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pavel/WebstormProjects/Test/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "No3D":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user.service */ "xdv0");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/profile-card/profile-card.component */ "ls5+");






function PageComponent_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-profile-card", 6);
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", user_r1);
} }
function PageComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PageComponent_6_ng_template_0_Template, 1, 1, "ng-template", 5);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
class PageComponent {
    constructor(usersServise) {
        this.usersServise = usersServise;
        this.spaceBetween = 15;
        this.slidesCount = 3;
        this.users = usersServise.getUsers();
    }
    ngOnInit() {
        this.getScreenSize();
    }
    getScreenSize(event) {
        this.screenWidth = window.outerWidth;
        if (this.screenWidth <= 1280) {
            this.slidesCount = 2;
            this.spaceBetween = 15;
            this.paginationOption = {
                type: 'bullets',
                clickable: true,
            };
        }
        else {
            this.slidesCount = 3;
            this.spaceBetween = 15;
            this.paginationOption = {
                type: 'bullets',
                clickable: true,
            };
        }
        if (this.screenWidth <= 320) {
            this.slidesCount = 1;
            this.spaceBetween = 5;
            this.paginationOption = {
                type: 'progressbar',
            };
        }
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], hostBindings: function PageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function PageComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 5, consts: [[1, "slider-container"], [1, "card-block"], [1, "title"], [3, "slidesPerView", "spaceBetween", "navigation", "pagination"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [3, "user"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recent Testimonials From Global Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "swiper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PageComponent_6_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("slidesPerView", ctx.slidesCount)("spaceBetween", ctx.spaceBetween)("navigation", true)("pagination", ctx.paginationOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperSlideDirective"], _shared_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCardComponent"]], styles: [":root {\n  --swiper-theme-color: #00AC45;\n  --swiper-navigation-color: transparent;\n}\n\n@media (max-width: 1920px) {\n  .slider-container {\n    width: 100vw;\n    display: flex;\n    padding-right: 30px;\n    padding-left: 30px;\n    background-color: #F4F5F7;\n  }\n\n  .title {\n    font-weight: 600;\n    font-size: 34px;\n    text-transform: capitalize;\n    text-align: center;\n  }\n\n  .card-block {\n    margin-bottom: 46px;\n    padding: 10px;\n    width: 100%;\n  }\n\n  .swiper-container {\n    width: auto;\n    height: 320px;\n    padding: 10px 30px;\n    position: relative;\n  }\n\n  .swiper-button-prev, .swiper-button-next {\n    width: 34px;\n    height: 34px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 5px rgba(125, 125, 146, 0.2);\n    background: white;\n    top: 40%;\n  }\n\n  .swiper-button-prev:after {\n    width: 8px;\n    height: 11px;\n    background: url('arrow-left.svg') no-repeat center;\n  }\n\n  .swiper-button-next:after {\n    width: 8px;\n    height: 11px;\n    background: url('arrow-right.svg') no-repeat center;\n  }\n\n  .swiper-pagination-bullet {\n    background-color: #8C8C8C;\n  }\n\n  .swiper-pagination-bullet-active {\n    background-color: #00AC45;\n  }\n\n  .swiper-pagination {\n    bottom: 20px !important;\n  }\n}\n\n@media (max-width: 1280px) {\n  .swiper-container {\n    max-width: 1108px;\n    height: 100%;\n    min-height: auto;\n  }\n\n  .card-block {\n    min-height: auto;\n  }\n\n  .title {\n    font-size: 24px;\n  }\n}\n\n@media (max-width: 320px) {\n  .swiper-container-horizontal > .swiper-pagination-progressbar {\n    top: 98.5%;\n  }\n\n  .swiper-container {\n    min-width: auto;\n    height: auto;\n  }\n\n  .card-block {\n    width: 90vw;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUFBO0VBQ0Esc0NBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJDUks7RURPUDs7RUFJQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLDBCQUFBO0lBQ0Esa0JBQUE7RUFERjs7RUFJQTtJQUNFLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUFERjs7RUFJQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQURGOztFQUlBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0RBQUE7SUFDQSxpQkFBQTtJQUNBLFFBQUE7RUFERjs7RUFHQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0RBQUE7RUFBRjs7RUFFQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsbURBQUE7RUFDRjs7RUFFQTtJQUNFLHlCQ3JESztFRHNEUDs7RUFDQTtJQUNFLHlCQzFESztFRDREUDs7RUFBQTtJQUNFLHVCQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFFRjs7RUFBQTtJQUNFLGdCQUFBO0VBR0Y7O0VBREE7SUFDRSxlQUFBO0VBSUY7QUFDRjs7QUFEQTtFQUVFO0lBQ0EsVUFBQTtFQUVBOztFQUNBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUFFRjs7RUFDQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoicGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzXCI7XG5cbjpyb290IHtcbiAgLS1zd2lwZXItdGhlbWUtY29sb3I6ICMwMEFDNDU7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjE5MjBweCl7XG4gIC5zbGlkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY2FyZC1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDZweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnN3aXBlci1jb250YWluZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5zd2lwZXItYnV0dG9uLXByZXYsIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMTI1LCAxMjUsIDE0NiwgMC4yKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0b3A6IDQwJTtcbiAgfVxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwofnNyYy9hc3NldHMvaWNvbnMvYXJyb3ctbGVmdC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIH1cbiAgLnN3aXBlci1idXR0b24tbmV4dDphZnRlciB7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Fycm93LXJpZ2h0LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxuXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjQ7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjEyODBweCkge1xuICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMTA4cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmNhcmQtYmxvY2sge1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDozMjBweCkge1xuXG4gIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xuICB0b3A6IDk4LjUlO1xuICB9XG5cbiAgLnN3aXBlci1jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY2FyZC1ibG9jayB7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxufVxuIiwiJGNvbG9yLXdoaXRlOiAjRkZGRkZGO1xuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuXG4kY29sb3IxOiB0cmFuc3BhcmVudDtcbiRjb2xvcjI6ICMwMEFDNDU7XG4kY29sb3IzOiAjRjRGNUY3O1xuJGNvbG9yNDogIzhDOEM4QztcbiRjb2xvcjU6ICM1OTU5NTk7XG4kY29sb3I2OiAjMjYyNjI2O1xuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/page.component */ "No3D");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page");
    } }, directives: [_page_page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "No3D");
/* harmony import */ var _shared_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/profile-card/profile-card.component */ "ls5+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"],
        _shared_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_4__["ProfileCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperModule"]] }); })();


/***/ }),

/***/ "ls5+":
/*!***************************************************************!*\
  !*** ./src/app/shared/profile-card/profile-card.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProfileCardComponent {
    constructor() {
        this.textLarge = false;
    }
    ngOnInit() {
    }
    onClick() {
        this.textLarge = !this.textLarge;
    }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(); };
ProfileCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["app-profile-card"]], inputs: { user: "user" }, decls: 12, vars: 9, consts: [[1, "container"], [1, "profile-info"], ["alt", "profile photo", 1, "profile-photo", 3, "src"], [1, "profile-info-title"], [1, "profile-info-text"], [1, "profile-text"], [1, "read-more-btn", 3, "click"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_span_click_10_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("container-large", ctx.textLarge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.profileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.profilePosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("profile-text-large", ctx.textLarge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.profileText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textLarge ? "less" : "read more");
    } }, styles: [".container[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 5px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 2px 5px rgba(125, 125, 146, 0.2);\n}\n.container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 15px rgba(125, 125, 146, 0.4);\n}\n.container-large[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n.profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 16px;\n}\n.profile-info-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000000;\n  text-transform: capitalize;\n}\n.profile-info-text[_ngcontent-%COMP%] {\n  color: #595959;\n  font-weight: 400;\n  font-size: 13px;\n  text-transform: capitalize;\n}\n.profile-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #262626;\n  margin-bottom: 12px;\n  width: 100%;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  line-height: 1.3em;\n}\n.profile-text-large[_ngcontent-%COMP%] {\n  overflow: unset;\n  -webkit-line-clamp: 33;\n}\n.read-more-btn[_ngcontent-%COMP%] {\n  color: #00AC45;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: lowercase;\n  border: none;\n  outline: none;\n  background: none;\n  margin-bottom: 10px;\n}\n.read-more-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@media (max-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .container-large[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}\n@media (max-width: 320px) {\n  .container-large[_ngcontent-%COMP%] {\n    min-height: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDTFk7RURNWixnREFBQTtBQURGO0FBRUU7RUFDRSxpREFBQTtBQUFKO0FBSUE7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0N2Qlk7RUR3QlosMEJBQUE7QUFERjtBQUlBO0VBQ0UsY0N0Qk87RUR1QlAsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0M5Qk87RUQrQlAsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUlBO0VBQ0UsY0NsRE87RURtRFAsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBSUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQURGOztFQUdBO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGO0FBRUE7RUFDRTtJQUNFLGlCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJwcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMTI1LCAxMjUsIDE0NiwgMC4yKTtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYmEoMTI1LCAxMjUsIDE0NiwgMC40KTtcbiAgfVxufVxuXG4uY29udGFpbmVyLWxhcmdlIHtcbiAgbWluLWhlaWdodDogYXV0bztcbn1cblxuLnByb2ZpbGUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5wcm9maWxlLWluZm8tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAkY29sb3ItYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHJvZmlsZS1pbmZvLXRleHQge1xuICBjb2xvcjogJGNvbG9yNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnByb2ZpbGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICRjb2xvcjY7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG59XG5cbi5wcm9maWxlLXRleHQtbGFyZ2Uge1xuICBvdmVyZmxvdzogdW5zZXQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMzM7XG59XG5cbi5yZWFkLW1vcmUtYnRuIHtcbiAgY29sb3I6ICRjb2xvcjI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhaW5lci1sYXJnZSB7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmNvbnRhaW5lci1sYXJnZSB7XG4gICAgbWluLWhlaWdodDogNDgwcHg7XG4gIH1cbn1cbiIsIiRjb2xvci13aGl0ZTogI0ZGRkZGRjtcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcblxuJGNvbG9yMTogdHJhbnNwYXJlbnQ7XG4kY29sb3IyOiAjMDBBQzQ1O1xuJGNvbG9yMzogI0Y0RjVGNztcbiRjb2xvcjQ6ICM4QzhDOEM7XG4kY29sb3I1OiAjNTk1OTU5O1xuJGNvbG9yNjogIzI2MjYyNjtcbiJdfQ== */"] });


/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserService {
    constructor() {
        this.users = [
            {
                id: 1,
                profilePhoto: 'assets/img/photo-boy.svg',
                profileName: 'Nick Colebatch',
                profilePosition: 'RV Cover Supply',
                profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
            },
            {
                id: 2,
                profilePhoto: 'assets/img/photo-girl.svg',
                profileName: 'Carlene Grace',
                profilePosition: 'Carlene Grace',
                profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
            },
            {
                id: 3,
                profilePhoto: 'assets/img/photo-girl.svg',
                profileName: 'Carlene Grace',
                profilePosition: 'Carlene Grace',
                profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time.End Text'
            },
            {
                id: 4,
                profilePhoto: 'assets/img/photo-girl.svg',
                profileName: 'Carlene Grace',
                profilePosition: 'Carlene Grace',
                profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
            },
            {
                id: 5,
                profilePhoto: 'assets/img/photo-girl.svg',
                profileName: 'Carlene Grace',
                profilePosition: 'Carlene Grace',
                profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
            },
            {
                id: 6,
                profilePhoto: 'assets/img/photo-girl.svg',
                profileName: 'Carlene Grace',
                profilePosition: 'Carlene Grace',
                profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
            },
        ];
    }
    getUsers() {
        return this.users;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map