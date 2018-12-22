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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_patientdata_patientdata_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/patientdata/patientdata.component */ "./src/app/components/patientdata/patientdata.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/components/faqs/faqs.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/appointment/appointment.component */ "./src/app/components/appointment/appointment.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_ourdoctors_ourdoctors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ourdoctors/ourdoctors.component */ "./src/app/components/ourdoctors/ourdoctors.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'faqs', component: _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__["FaqsComponent"] },
    { path: 'patient', component: _components_patientdata_patientdata_component__WEBPACK_IMPORTED_MODULE_2__["PatientdataComponent"] },
    { path: 'aboutus', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"] },
    { path: 'appointment', component: _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentComponent"] },
    { path: 'services', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"] },
    { path: 'gallery', component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"] },
    { path: 'ourdoctors', component: _components_ourdoctors_ourdoctors_component__WEBPACK_IMPORTED_MODULE_8__["OurdoctorsComponent"] },
    { path: 'contactus', component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-bg-img {\n  background-image: url(\"https://firstopinionapp.com/wp-content/uploads/2014/05/first-opinion-doctor@2x1.jpg\");\n  width: 100%;\n}\n \n \n.caption-one {\n  background-color: #cecece;\n  font-family: 'Arial Narrow Bold';\n  opacity: 0.75;\n  padding-left: 0%;\n  margin-right: 2%;\n  padding-bottom: 1%;\n  width: 60%;\n  height: 30%;\n}\n \n \n.thumbnail {\n  position: relative;\n}\n \n \n.caption {\n  position: absolute;\n  top: 45%;\n  left: 0;\n  width: 100%;\n}\n \n \n.container {\n  position: absolute;\n  margin: 10%;\n  width: auto;\n}\n \n \nhtml,\nbody {\n  height: 100%;\n}\n \n \n.first {\n  padding-top: 140px;\n  height: 100vh;\n  min-height: 400px;\n  background-size: cover;\n  background-image: url(\"https://serving.photos.photobox.com/34156944745394a28ce5b0df584c8ce84cf0eeb36cb368813a415fb0ad4b4ec8c698430b.jpg\");\n}\n \n \n.affix {\n  transition: padding 0.2s ease-out;\n}\n \n \nheader {\n  height: 80vh;\n  min-height: 400px;\n  background-size: cover; \n  /*background-image: url('/src/images/homeImg.jpg');*/\n  background-image: url(\"https://serving.photos.photobox.com/933719377091772aa6a0d63491226edfe3633f7f80d1af2cdf245fa1db6ef4e986b81681.jpg\");\n}\n \n \n.affix-top .nav>li>a {\n  color: #000;\n}\n \n \n.navbar-fixed-top.scrolled {\n  background-color: gray !important;\n  transition: background-color 200ms linear;\n}\n \n \nsection {\n  height: calc(90% - 50px);\n  height: 90vh;\n}\n \n \nli a {\n  transition: all 0.5s ease;\n}\n \n \nli a:hover,\nli a:focus { \n  background-color: #4682B4;\n  color: white !important;\n  border-radius: 5px;\n}\n \n \nhtml { font-size: 100%; }\n \n \n.errorsprint {\n  color: red;\n}\n \n \n#login-dp{\n  min-width: 300px;\n  padding: 14px 14px 0;\n  overflow:hidden;\n  background-color:rgba(255,255,255,.8);\n}\n \n \n#login-dp .help-block{\n  font-size:12px    \n}\n \n \n#login-dp .bottom{\n  background-color:rgba(255,255,255,.8);\n  border-top:1px solid #ddd;\n  clear:both;\n  padding:14px;\n}\n \n \n#login-dp .social-buttons{\n  margin:12px 0    \n}\n \n \n#login-dp .social-buttons a{\n  width: 49%;\n}\n \n \n#login-dp .form-group {\n  margin-bottom: 10px;\n}\n \n \n.btn-fb{\n  color: #fff;\n  background-color:#3b5998;\n}\n \n \n.btn-fb:hover{\n  color: #fff;\n  background-color:#496ebc \n}\n \n \n.btn-tw{\n  color: #fff;\n  background-color:#55acee;\n}\n \n \n.btn-tw:hover{\n  color: #fff;\n  background-color:#59b5fa;\n}\n \n \n@media(max-width:800px){\n  #login-dp{\n      background-color: inherit;\n      color: #fff;\n  }\n  #login-dp .bottom{\n      background-color: inherit;\n      border-top:0 none;\n  }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <header>\n  <nav class=\"navbar navbar-expand-sm fixed-top navbar-light navbar-fixed-top\"> \n          <div class=\"collapse navbar-collapse navbar-fixed-top\" id=\"navbarNav\" role=\"navigation\">\n            <b>My Medics Expert</b>\n            <i class=\"fa fa-plus-square\" style=\"font-size:25px;color:red\"></i>\n              <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#\"><b>Home</b>\n                    <span class=\"sr-only\">(current)</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\"  routerLink=\"/aboutus\"><b>About Us</b></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\"  routerLink=\"/services\"><b>Specializations</b></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\"  routerLink=\"/appointment\"><b>Appointment</b></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\"  routerLink=\"/gallery\"><b>Gallery</b></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\"  routerLink=\"/ourdoctors\"><b>Our Doctors</b></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\"  routerLink=\"/contactus\"><b>Contact</b></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\"  routerLink=\"/faqs\"><b>FAQS</b></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\"  routerLink=\"/patient\"><b>Patient</b></a>\n                </li> \n                <!--<li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown\" ><b>Login</b></a>\n                  </li>-->\n                  <!--<li class=\"nav-item\" [hidden]=\"!isLoggedIn\">\n                    <a class=\"nav-link\"  (click)=\"logout()\"><b>LogOut</b></a>\n                  </li>-->\n              </ul>\n\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><b> {{loginLabel}} </b> </a>\n                <ul id=\"login-dp\" class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" (click)=\"logout()\" [hidden] = \"!isLoggedIn\">LogOut</a>\n                    <a class=\"dropdown-item\" href=\"#\" [hidden] = \"!isLoggedIn\">Profile</a>\n                  <li>\n                    <!--Login proecss -->\n                     <!--<div class=\"row\" [hidden]=\"isLoginShow\" >-->\n                        <div class=\"row\" [hidden] = \"isLoginShow\" >\n                        <div class=\"col-md-12\">\n                          <form name=\"loginform\"  (ngSubmit)=\"loginf.form.valid && onLoginSubmit()\" #loginf=\"ngForm\" novalidate>\n                            <div class=\"form-group\">\n                              <label for=\"username\">Username</label>\n                              <input type=\"text\" class=\"form-control\" name=\"username\"  [(ngModel)]=\"form.username\" #username=\"ngModel\" required />\n                              <div  *ngIf=\"loginf.submitted && username.invalid\">\n                                <div class=\"errorsprint\"  *ngIf=\"username.errors.required\">Username is required</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"password\">Password</label>\n                              <input type=\"password\" class=\"form-control\" name=\"password\"  [(ngModel)]=\"form.password\" #password=\"ngModel\" required minlength=\"6\" />\n                              <div  *ngIf=\"loginf.submitted && password.invalid\">\n                                <div class=\"errorsprint\"  *ngIf=\"password.errors.required\">Password is required</div>\n                                <div class=\"errorsprint\"  *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                              </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <button class=\"btn btn-primary\">Login</button>\n                                <div  *ngIf=\"loginf.submitted && isSignUpFailed\" class=\"alert alert-warning\">\n                                  Signup failed!<br/>{{errorMessage}}\n                                </div>\n                                <a (click)=\"showRegister()\" class=\"btn btn-link\">SignUp</a>\n                              </div>\n                          </form>\n                        </div>\n                        <!--<div  *ngIf=\"isLoggedIn; else loggedOut\">\n                            Logged in as {{roles}}.\n                      </div>-->\n                     </div>  \n                     <!--Registration proecss -->\n                     <div class=\"row\" [hidden]=\"isRegisterShow\" >\n                        <div class=\"col-md-12\">\n                      <form name=\"regform\"  (ngSubmit)=\"f.form.valid && onRegSubmit()\" #f=\"ngForm\" novalidate>\n\n                        <div class=\"form-group\">\n                          <label for=\"firstname\">First name</label>\n                          <input type=\"text\" class=\"form-control\" name=\"firstname\"  [(ngModel)]=\"form.firstname\" #firstname=\"ngModel\" required />\n                          <div  *ngIf=\"f.submitted && firstname.invalid\">\n                            <div class=\"errorsprint\" *ngIf=\"firstname.errors.required\">FirstName is required</div>\n                          </div>\n                        </div> \n                        <div class=\"form-group\">\n                                <label for=\"lastname\">Last name</label>\n                                <input type=\"text\" class=\"form-control\" name=\"lastname\"  [(ngModel)]=\"form.lastname\" #lastname=\"ngModel\" required />\n                                <div  *ngIf=\"f.submitted && lastname.invalid\">\n                                  <div class=\"errorsprint\"  *ngIf=\"lastname.errors.required\">LastName is required</div>\n                                </div>\n                        </div>  \n                        <div class=\"form-group\">\n                                <label for=\"email\">Email</label>\n                                <input type=\"text\" class=\"form-control\" name=\"email\"  [(ngModel)]=\"form.email\" #email=\"ngModel\" required email />\n                                <div  *ngIf=\"f.submitted && email.invalid\">\n                                  <div class=\"errorsprint\"  *ngIf=\"email.errors.required\">Email is required</div>\n                                  <div class=\"errorsprint\"  *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n                                </div>\n                        </div>\n            \n                        <div class=\"form-group\">\n                                <label for=\"phone\">Phone</label>\n                                <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"form.phone\" #phone=\"ngModel\" required  />\n                                <div *ngIf=\"f.submitted && phone.invalid\">\n                                  <div class=\"errorsprint\" *ngIf=\"phone.errors.required\">phone number is required</div>\n                                </div>\n                        </div> \n                        <div class=\"form-group\">\n                          <label for=\"username\">Username</label>\n                          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n                            required />\n                          <div *ngIf=\"f.submitted && username.invalid\">\n                            <div class=\"errorsprint\" *ngIf=\"username.errors.required\">Username is required</div>\n                          </div>\n                        </div> \n                        <div class=\"form-group\">\n                          <label for=\"password\">Password</label>\n                          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n                            required minlength=\"6\" />\n                          <div *ngIf=\"f.submitted && password.invalid\">\n                            <div class=\"errorsprint\" *ngIf=\"password.errors.required\">Password is required</div>\n                            <div class=\"errorsprint\" *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                          </div>\n                        </div> \n                        <div class=\"form-group\">\n                          <button class=\"btn btn-primary\">Register</button>\n                          <div *ngIf=\"f.submitted && isSignUpFailed\" class=\"alert alert-warning\">\n                            Signup failed!<br/>{{errorMessage}}\n                          </div>\n                          <a (click)=\"showLogin()\" class=\"btn btn-link\">Login</a>\n                        </div> \n                      </form>\n                    </div>\n                   </div>   \n                  </li>\n                </ul>\n                  </li>\n                </ul>\n            </div> \n  </nav>\n</header>\n<!--<div class=\"home-bg-nav\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" >\n      <div class=\"collapse navbar-collapse home-bg-nav\" id=\"navbarNav\" #stickyMenu [class.sticky] = \"sticky\">\n        <ul class=\"nav navbar-nav ml-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/aboutus\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/services\">Specializations</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/appointment\">Appointment</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/gallery\">Gallery</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/ourdoctors\">Our Doctors</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/contactus\">Contact</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/faqs\">FAQS</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/patient\">Patient</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div> -->\n  \n <!-- <div>\n    <ngb-carousel *ngIf=\"images\">\n      <ng-template ngbSlide>\n        <img width=\"100%\" [src]=\"images[0]\"  alt=\"Random first slide\">\n        <div class=\"carousel-caption\">\n          <div class=\"caption-one\">\n            <h5 style=\"color:rgb(0, 0, 0);display:inline;pading-left:0px\">Medical Services That You Can Trust</h5>\n            <p style=\"color: rgb(41, 38, 38)\">Lorem ipsum dolor sit amet, et vel tota referrentur. Te vix iusto suavitate, apeirian definiebas an est, ea aperiri\n              gloriatur nam. No eos ludus aliquam principes, ad his quot electram reprimique, mea no malis mucius. </p>\n            <br>\n            <a href=\"#\" class=\"btn btn-primary btn-lg hvr-underline-from-left\" role=\"button\">Read More</a>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img width=\"100%\"  [src]=\"images[1]\" alt=\"Random first slide\">\n        <div class=\"carousel-caption\">\n          <div class=\"caption-one\">\n            <h5 style=\"color:rgb(0, 0, 0);display:inline;pading-left:0px\">We Care for You</h5>\n            <p style=\"color: rgb(41, 38, 38)\">Lorem ipsum dolor sit amet, et vel tota referrentur. Te vix iusto suavitate, apeirian definiebas an est, ea aperiri\n              gloriatur nam. No eos ludus aliquam principes, ad his quot electram reprimique, mea no malis mucius. </p>\n            <br>\n            <a href=\"#\" class=\"btn btn-primary btn-lg hvr-underline-from-left\" role=\"button\">Read More</a>\n          </div>\n        </div>\n      </ng-template>\n    </ngb-carousel> \n  </div>-->\n\n\n  <!--<ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\" width=\"100%\" height=\"100%\" class=\"product-image\">\n    <img src=\"/src/images/logo-white.png\" alt=\"Random third slide\"  class=\"plus-image\">\n    <div class=\"caption\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\n  </div>\n  </ng-template>\n</ngb-carousel>-->\n\n  <!--<div class=\"row\" id=\"box-search\">\n  <div >\n    <img [src]=\"images[2]\" alt=\"Random third slide\" width=\"100%\" height=\"100%\" class=\"product-image\">\n    <img src=\"/src/images/logo-white.png\" alt=\"Random third slide\"  class=\"plus-image\">\n   \n  </div>\n</div>-->\n\n \n  <!--<div class=\"home-bg-img\"> \n<div class=\"home-bg-img\">\n    <div class=\"homenav\">\n        <a href=\"#about\">About Us</a>\n        <a href=\"#contact\">FAQS</a>\n        <a href=\"#news\">OUR DOCTORS</a>\n      <a href=\"#home\">HOW IT WORKS </a>\n    </div>\n</div> --> \n    <!--<app-appointment></app-appointment>-->\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_login_login_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/login/login-info */ "./src/app/components/login/login-info.ts");
/* harmony import */ var _app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/services/Authentication/authentication.service */ "./src/app/services/Authentication/authentication.service.ts");
/* harmony import */ var _app_classes_token_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/classes/token.storage */ "./src/app/classes/token.storage.ts");
/* harmony import */ var _app_services_User_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/services/User/user.service */ "./src/app/services/User/user.service.ts");
/* harmony import */ var _app_classes_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _app_services_Alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/services/Alert/alert.service */ "./src/app/services/Alert/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(authService, userService, alertService, tokenStorage, router) {
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.title = 'My Medics Expert – Consultation';
        this.loading = false;
        this.submitted = false;
        this.sticky = false;
        this.isRegisterShow = true;
        this.isLoginShow = false;
        this.heightD = ['50%'];
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.loginLabel = 'Login';
        this.errorMessage = '';
        this.roles = [];
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.images = ['https://serving.photos.photobox.com/34156944745394a28ce5b0df584c8ce84cf0eeb36cb368813a415fb0ad4b4ec8c698430b.jpg'];
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    };
    /*getData(): void {
      this.gitdata = this._tomcatservice.getData().subscribe((response) => {
        this.gitdata = response;
        console.log('data recieved' + JSON.stringify(response));
      });*/
    /*getData(): void {
       this._httpclient.get(this.apiURL).subscribe((response) => {
        this.gitdata = response;
        console.log('data recieved'+JSON.stringify(response));
      });
  
    }*/
    // tslint:disable-next-line:use-life-cycle-interface
    /*ngAfterViewInit() {
      this.elementPosition = this.menuElement.nativeElement.offsetTop;
    }*/
    /*login() {
      console.log(this.username) ;
      console.log(this.password);
      this.authenticationService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log('data.token>>' + data.token );
        this.router.navigate(['user']);
      }
    );
    }*/
    AppComponent.prototype.handleScroll = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).scroll(function () {
                var $nav = jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-fixed-top');
                $nav.toggleClass('scrolled', jquery__WEBPACK_IMPORTED_MODULE_1__(this).scrollTop() > $nav.height());
            });
        });
    };
    AppComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        alert('hello' + this.form.username);
        console.log(this.form.username);
        this.loginInfo = new _app_components_login_login_info__WEBPACK_IMPORTED_MODULE_2__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.loginLabel = _this.form.username;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.isLoginShow = true;
            //this.reloadPage();
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    AppComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    AppComponent.prototype.showRegister = function () {
        this.isRegisterShow = !this.isRegisterShow;
        this.isLoginShow = !this.isLoginShow;
    };
    AppComponent.prototype.showLogin = function () {
        this.isRegisterShow = !this.isRegisterShow;
        this.isLoginShow = !this.isLoginShow;
    };
    AppComponent.prototype.onRegSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.signupInfo = new _app_classes_user__WEBPACK_IMPORTED_MODULE_6__["User"](this.form.firstname, this.form.lastname, this.form.username, this.form.phone, this.form.email, this.form.password);
        this.userService.register(this.signupInfo).subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            alert('Registration successful');
            _this.showLogin();
            _this.isSignedUp = true;
            _this.isSignUpFailed = false;
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isSignUpFailed = true;
        });
    };
    AppComponent.prototype.logout = function () {
        this.tokenStorage.signOut();
        this.isLoggedIn = true;
        window.location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stickyMenu'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "menuElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handleScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _app_services_User_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _app_services_Alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _app_classes_token_storage__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_patientdata_patientdata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/patientdata/patientdata.component */ "./src/app/components/patientdata/patientdata.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/components/faqs/faqs.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_extensions_faq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-material-extensions/faq */ "./node_modules/@angular-material-extensions/faq/esm5/faq.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/appointment/appointment.component */ "./src/app/components/appointment/appointment.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_ourdoctors_ourdoctors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ourdoctors/ourdoctors.component */ "./src/app/components/ourdoctors/ourdoctors.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _services_Tomcat_tomcat_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/Tomcat/tomcat.service */ "./src/app/services/Tomcat/tomcat.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/Authentication/authentication.service */ "./src/app/services/Authentication/authentication.service.ts");
/* harmony import */ var _services_Alert_alert_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/Alert/alert.service */ "./src/app/services/Alert/alert.service.ts");
/* harmony import */ var _services_User_user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/User/user.service */ "./src/app/services/User/user.service.ts");
/* harmony import */ var _classes_inteceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./classes/inteceptor */ "./src/app/classes/inteceptor.ts");
/* harmony import */ var _classes_token_storage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./classes/token.storage */ "./src/app/classes/token.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_patientdata_patientdata_component__WEBPACK_IMPORTED_MODULE_4__["PatientdataComponent"],
                _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_5__["FaqsComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
                _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__["AppointmentComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"],
                _components_ourdoctors_ourdoctors_component__WEBPACK_IMPORTED_MODULE_14__["OurdoctorsComponent"],
                _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__["ContactusComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_20__["AngularFontAwesomeModule"],
                _angular_material_extensions_faq__WEBPACK_IMPORTED_MODULE_9__["MatFaqModule"].forRoot()
            ],
            providers: [_services_Tomcat_tomcat_service__WEBPACK_IMPORTED_MODULE_16__["TomcatService"], _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_23__["AuthenticationService"], _services_Alert_alert_service__WEBPACK_IMPORTED_MODULE_24__["AlertService"], _services_User_user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"], _classes_token_storage__WEBPACK_IMPORTED_MODULE_27__["TokenStorageService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                    useClass: _classes_inteceptor__WEBPACK_IMPORTED_MODULE_26__["Interceptor"],
                    multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/inteceptor.ts":
/*!***************************************!*\
  !*** ./src/app/classes/inteceptor.ts ***!
  \***************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.storage */ "./src/app/classes/token.storage.ts");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TOKEN_HEADER_KEY = 'Authorization';
var Interceptor = /** @class */ (function () {
    function Interceptor(token, router) {
        this.token = token;
        this.router = router;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        alert(token);
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_storage__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/app/classes/token.storage.ts":
/*!******************************************!*\
  !*** ./src/app/classes/token.storage.ts ***!
  \******************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
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

var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(firstname, lastname, username, phone, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>About Us</h1>  \n   <p>\n    The goal of MyExpert Medics is to build the largest and \n    the most trusted healthcare platform, which can empower patient’s in the region to seek medical advice from the leading healthcare practitioners in Singapore at the click of a mouse.\n    MyExpert Medics is headquartered in Singapore, which is known for its world class medical facilities and is considered as one of the leading medical hubs globally. According to Bloomberg, Singapore’s health care system is the 2nd most efficient in the world. However, visiting Singapore for medical treatment is an expensive proposition for many. MyExpert Medics provides the platform for patients and doctors in the region to access the world class medical expertise via an online portal at the comfort of their home or clinic in a cost effective way.\n    MyExpert Medics provides second opinion for complex medical issues, high-risk procedure or difficult treatment decisions. In addition, doctors in the region may seek guidance when in doubt about a challenging case.\n    Patients or their physicians can upload medical documents on My Expert Medics website. Data uploaded on the website has end to end encryption and -is stored securely until the entire treatment process is completed. This information -is reviewed by a panel of carefully selected multidisciplinary team of experts. After discussing each case in detail, the panel provides their recommendations for further workup or treatment as per their expert opinion. If the panel feels they need to review the patient, telemedicine facilities and face-to-face online conversation and review may be offered. My Expert Medics also facilitates appointment with the experts in case the patient would like to seek treatment here in Singapore.\n    The specialists on My Expert Medics also discusses current medical issues in the region via educational podcasts. My Expert Medics aims to provide the best in class medical care to the entire region.    \n</p>\n</div>"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
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

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/components/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/components/appointment/appointment.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "right-assign{\n\n    \n\n}"

/***/ }),

/***/ "./src/app/components/appointment/appointment.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Book Appointment</h2>\n<div class=\"row\">\n\n  <div style=\"width: 1.5%; float:left;\">\n  </div>\n\n  <div style=\"width: 40%; float:left;\">\n    <img src=\"https://www.w3schools.com/howto/img_avatar2.png\" alt=\"Avatar woman\">\n    <h2>Jane Flex</h2>\n    <p>Oncology Expert.</p>\n  </div>\n\n  <div style=\"width: 50%; float:right;\">\n    <h3> Welcome to {{ title }}!</h3>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onFormSubmit()\">\n      <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n        />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" formControlName=\"lastname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\"\n        />\n        <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.lastname.errors.required\">Last Name is required</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n        />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Phone Number</label>\n        <input type=\"text\" formControlName=\"phnum\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phnum.errors }\"\n        />\n        <div *ngIf=\"submitted && f.phnum.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.phnum.errors.required\">Contact is required</div>\n        </div>\n      </div>\n\n      \n      <div class=\"form-group shadow-textarea\">\n        <label>Diagnosis( if any) </label>\n        <textarea formControlName=\"diagnosis\" class=\"form-control z-depth-1\" rows=\"3\"></textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Date of Birth</label>\n        <div class=\"input-group\">\n          <input class=\"form-control lhttt\" type=\"date\" formControlName=\"dob\" placeholder=\"DOB\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Problem Description</label>\n        <input type=\"text\" formControlName=\"problem\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.problem.errors }\"\n        />\n        <div *ngIf=\"submitted && f.problem.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.problem.errors.required\">Describe the Problem</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Submit</button>\n      </div>\n\n    </form>\n  </div>\n</div>\n<br>\n<!--<div style=\"width: 50%; float:right\">\n  <img src=\"https://www.w3schools.com/howto/img_avatar.png\" alt=\"Avatar man\">\n  <h2>John Doe</h2>\n  <p>Some text here too.</p>\n</div>-->\n"

/***/ }),

/***/ "./src/app/components/appointment/appointment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_Tomcat_tomcat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Tomcat/tomcat.service */ "./src/app/services/Tomcat/tomcat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent(appointService, formBuilder, http) {
        this.appointService = appointService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.isRowAdded = true;
        this.title = 'My Expert Medics';
        this.submitted = false;
        this.dataSaved = false;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
        this.rows = [];
    }
    Object.defineProperty(AppointmentComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    AppointmentComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diagnosis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phnum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reasons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            problem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    AppointmentComponent.prototype.onSubmit = function () {
        alert('hello');
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        var Params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        Params = Params.append('firstParameter', this.registerForm.value.firstName);
        Params = Params.append('secondParameter', this.registerForm.value.lastName);
        /* return this.http.post('http://localhost:8080/RESTWebService/rest/lvcalc/rsfsjson', {params: { params: Params }}).subscribe(data => {
             this.posts = data;
             console.log(this.posts);
           });  */
        return this.http.post('http://localhost:8080/users/1', 'Hello', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'text/palin',
                'responseType': 'text/palin'
            })
        }).subscribe(function (data) {
            console.log('POST Request is successful==', data);
        }, function (error) {
            console.log('Error==', error);
        });
    };
    AppointmentComponent.prototype.onAddRow = function (rowVal) {
        if (this.rows.indexOf(rowVal) === -1 || this.rows.length === 0) {
            this.rows.push(rowVal);
        }
        else {
            alert('Reason Already added');
        }
    };
    AppointmentComponent.prototype.createItemFormGroup = function () {
        return this.formBuilder.group({
            reasons: null
        });
    };
    AppointmentComponent.prototype.onFormSubmit = function () {
        var _this = this;
        alert('Form Submiited..' + this.registerForm.invalid);
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        alert('Form Submiited..');
        this.dataSaved = false;
        var patientinfo = this.registerForm.value;
        console.log('firstName===' + patientinfo.firstName);
        console.log('lastname=' + patientinfo.lastname);
        console.log('email=' + patientinfo.email);
        console.log('phnum=' + patientinfo.phnum);
        console.log('reason=' + patientinfo.reasons);
        console.log('DOB=' + patientinfo.dob);
        console.log('Diagnosis=' + patientinfo.diagnosis);
        this.appointService.saveAppointment(patientinfo).subscribe(function (article) {
            console.log(article);
            _this.dataSaved = true;
        }, function (err) {
            console.log(err);
        });
        this.registerForm.reset();
    };
    AppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__(/*! ./appointment.component.html */ "./src/app/components/appointment/appointment.component.html"),
            styles: [__webpack_require__(/*! ./appointment.component.css */ "./src/app/components/appointment/appointment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Tomcat_tomcat_service__WEBPACK_IMPORTED_MODULE_3__["TomcatService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "./src/app/components/contactus/contactus.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1{\n    color: white;\n   }\n   .contact_us{\n   \n       background-image: url(\"/angular/src/images/11.jpg\");\n      background-color: #cccccc;\n      background-repeat: repeat;\n      height: 550px;\n   }"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_us\">\n  <br/>\n  <br/>\n\n   <h1 class=\"h1 page-title text-center\">Contact Us</h1>\n   <br/>\n<div class =\"container\">\n<div class=\"row\">\n\n       <div class=\"col-md-4\">\n   <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Your Name\" > <br />\n   <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Your Email\" ><br />\n   <input class=\"form-control\" id=\"phone\" name=\"phone\" placeholder=\"Your Phone\" >\n\n       </div>\n       <div class=\"col-md-4\">\n           <input class=\"form-control\" id=\"subject\" name=\"subject\" placeholder=\"Subject\" > <br />\n          <textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"Message\" rows=\"4\"></textarea>\n   \n       </div>\n       <div class=\"col-md-4\">\n\n         <p class=\"alert alert-success\">map goes here </p>\n\n</div>\n</div>\n<br/>\n<div class=\"row\">\n\n       <div class=\"col-md-8\"> \n       <button type=\"button\" class=\"btn btn-primary btn-block\">Submit</button>\n \n       </div>\n       <div class=\"col-md-4\">\n\n\n       </div>\n\n</div>\n\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
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

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/components/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/faqs/faqs.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n    margin-top: 1.0rem;\n}\n\n.accordion {\n    background-color: #eee;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n    transition: 0.4s;\n}\n\n.active, .accordion:hover {\n    background-color: #ccc;\n}\n\n.accordion:after {\n    content: '\\25BC';\n    color: #777;\n    font-weight: bold;\n    float: right;\n    margin-left: 5px;\n}\n\n.active:after {\n    content: \"\\25B2\";\n}\n\n.panel {\n    padding: 0 18px;\n    background-color: white;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n}"

/***/ }),

/***/ "./src/app/components/faqs/faqs.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mat-faq [faqList]=\"list\"></mat-faq>-->\n\n<section class=\"home\" style=\"margin: 2rem 0 2rem 0\">\n    <div class=\"container\">\n      <mat-faq [faqList]=\"list\"></mat-faq>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/components/faqs/faqs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/faqs/faqs.component.ts ***!
  \***************************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
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

var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
        this.panelOpenState = false;
        this.title = 'FAQ';
        this.multi = false;
        this.displayMode = 'default';
        this.list = [
            {
                question: 'When should you use MyExpertMedics?',
                // tslint:disable-next-line:max-line-length
                answer: 'MyExpertMedics provides online second medical opinion from highly qualified doctors, leaders in their respective fields. Contact MyExpertMedics when there is uncertainty about a diagnosis or want to reaffirm a medical plan of action.'
            },
            {
                question: 'How does MyExpertMedics select a physician for me?',
                // tslint:disable-next-line:max-line-length
                answer: 'The physicians we work with for second opinions are experts in their respective fields and include physicians practicing at leading medical hospitals.'
            }, {
                question: 'When should you use MyExpertMedics?',
                // tslint:disable-next-line:max-line-length
                answer: 'MyExpertMedics provides online second medical opinion from highly qualified doctors, leaders in their respective fields. Contact MyExpertMedics when there is uncertainty about a diagnosis or want to reaffirm a medical plan of action.'
            },
            {
                question: 'How does MyExpertMedics select a physician for me?',
                // tslint:disable-next-line:max-line-length
                answer: 'The physicians we work with for second opinions are experts in their respective fields and include physicians practicing at leading medical hospitals.'
            }, {
                question: 'When should you use MyExpertMedics?',
                // tslint:disable-next-line:max-line-length
                answer: 'MyExpertMedics provides online second medical opinion from highly qualified doctors, leaders in their respective fields. Contact MyExpertMedics when there is uncertainty about a diagnosis or want to reaffirm a medical plan of action.'
            },
            {
                question: 'How does MyExpertMedics select a physician for me?',
                // tslint:disable-next-line:max-line-length
                answer: 'The physicians we work with for second opinions are experts in their respective fields and include physicians practicing at leading medical hospitals.'
            }, {
                question: 'When should you use MyExpertMedics?',
                // tslint:disable-next-line:max-line-length
                answer: 'MyExpertMedics provides online second medical opinion from highly qualified doctors, leaders in their respective fields. Contact MyExpertMedics when there is uncertainty about a diagnosis or want to reaffirm a medical plan of action.'
            },
            {
                question: 'How does MyExpertMedics select a physician for me?',
                // tslint:disable-next-line:max-line-length
                answer: 'The physicians we work with for second opinions are experts in their respective fields and include physicians practicing at leading medical hospitals.'
            }
        ];
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faqs',
            template: __webpack_require__(/*! ./faqs.component.html */ "./src/app/components/faqs/faqs.component.html"),
            styles: [__webpack_require__(/*! ./faqs.component.css */ "./src/app/components/faqs/faqs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  border-bottom: 0px;\n}\n\nul li a i {\n  text-align: center;\n  margin-right: 10px;\n  transition: all 0.2s ease-in-out;\n}\n\nul li a {\n  text-align: center;\n  margin-right: 10px;\n  transition: all 0.2s ease-in-out;\n}\n\nul li a i:hover {\n  opacity: .7;\n}\n\nul li a:hover {\n  opacity: .7;\n}\n\nul li:after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  width: 75%;\n  margin: 5px;\n  background: #6c757d !important;\n}\n\na:hover,\na:visited,\na:link,\na:active {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"container-fluid bg-dark\">\n  <div class=\"row\">\n      <div class =\"col-md-12\">\n        <span >&nbsp;</span>\n      </div>\n      </div>\n\n      <div class=\"row\">\n      <div class =\"col-md-12 text-center\">\n        <h4 class=\"text-muted\" >&copy; 2018-2019</h4>\n      </div>\n      </div>\n      <div class=\"row\">\n      <div class =\"col-md-12\">\n        <span >&nbsp;</span>\n      </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"col-md-1\"></div>\n        <div class=\"col-md-3\">\n          <h4 class=\"text-muted\">Contact</h4>\n          <a class=\"email text-muted\" href=\"mailto:myexpertmedics@gmail.com\">myexpertmedics@gmail.com</a><br>\n          <span class=\"text-muted\">49 Jurong East Avenue 1,</span><br>\n            <span class=\"text-muted\">#04-03, Singapore </span>, <br>\n            <span  class=\"text-muted\">609781</span><br>\n        </div>\n\n        <div class=\"col-md-3\">\n            <h4 class=\"text-muted\">Social</h4>\n            <ul class=\"list-unstyled text-small\"> \n              <li><a href=\"http://instagram.com/mymedicsexpert/\" id=\"footer-main-social-links-instagram\"><i class=\"fa fa-instagram\"></i>Instagram</a></li>\n              <li><a href=\"https://www.facebook.com/mymedicsexpert/\" id=\"footer-main-social-links-facebook\"><i class=\"fa fa-facebook\"></i> Facebook</a></li>\n              <li><a href=\"https://twitter.com/mymedicsexpert\" id=\"footer-main-social-links-twitter\"><i class=\"fa fa-twitter\"></i>Twitter</a></li>\n            </ul>\n          </div>\n\n        \n       <!-- <div class=\"col-md-3\">\n  \t\t\t\t<h4 class=\"h4 title\">Social</h4>\n          <ul class=\"list-unstyled text-small\">\n  \t\t\t\t\t<li><a href=\"http://instagram.com/firstopinion/\" id=\"footer-main-social-links-instagram\"><i class=\"fa fa-instagram\"></i>Instagram</a></li>\n  \t\t\t\t\t<li><a href=\"https://www.facebook.com/FirstOpinion/\" id=\"footer-main-social-links-facebook\"><i class=\"fa fa-facebook\"></i> Facebook</a></li>\n  \t\t\t\t\t<li><a href=\"https://twitter.com/firstopinionapp\" id=\"footer-main-social-links-twitter\"><i class=\"fa fa-twitter\"></i>Twitter</a></li>\n  \t\t\t\t</ul>\n        </div>-->\n        \n        <!--<div class=\"col-sm-3 col-md-3\">\n          <h4 class=\"text-muted\">Social</h4>\n          <ul>\n            <li> <a href=\"https://twitter.com/\"><img src=\"http://www.dextrousart.com/wp-content/uploads/2018/03/twitter-icon-grey.png\" alt ='twitter' width=\"25\" height=\"25\" /> Twitter</a></li> \n  \t\t\t\t\t<li> <a href=\"https://twitter.com/\"><img src=\"http://www.dextrousart.com/wp-content/uploads/2018/03/twitter-icon-grey.png\" alt ='twitter' width=\"25\" height=\"25\" /> Facebook</a></li> \n  \t\t\t\t\t<li> <a href=\"https://twitter.com/\"><img src=\"http://www.dextrousart.com/wp-content/uploads/2018/03/twitter-icon-grey.png\" alt ='twitter' width=\"25\" height=\"25\" /> Instagram</a></li> \n          </ul>\n        </div>-->\n        \n        <div class=\"col-md-2\">\n          <h4 class=\"text-muted\">Terms of Use</h4>\n          <ul class=\"list-unstyled text-small\">\n            <li><a (click)=\"onSelect('privacy')\" id=\"privacy\" class=\"text-muted\" href=\"/#privacyPage\">Privacy Policy</a></li>\n            <li><a (click)=\"onSelect('reprint')\" id=\"reprint\" class=\"text-muted\" href=\"/#ReprintLicensing\">Reprints & Licensing </a></li>\n            <li><a (click)=\"onSelect('media')\" id=\"media\" class=\"text-muted\" href=\"/#SocialMediaPolicy\">Social Media Policy </a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h4 class=\"text-muted\">Newsletter Sign up</h4>\n          <span class=\"text-muted text-small\"> Stay updated with latest news  from MyExpert Medics.\n           <form>\n           <div class=\"row form-group\">\n            <div class=\"col-md-10\">\n            <label for=\"email\">Email <br></label>\n            <input type=\"email\" class=\"form-control footer_subscription bg-secondary\" id=\"email\" />\n            <br />\n                <button type=\"button\" class=\"btn btn-info sharp-edges\">Submit</button>\n\n          </div>\n          </div>\n        </form>\n          </span>\n\n           <br />\n           \n        </div>\n      </div>\n     \n      <div class=\"row\">\n      <div class =\"col-md-12\">\n        <span >&nbsp;</span>\n      </div>\n      </div>\n    </footer> \n\n\n    <div id=\"privacyPage\" class=\"container\" [hidden]=\"IsPrivacyHidden\">\n      <blockquote class=\"small text-dark\">Thank you for visiting MyExpertMedics (MEM) website.\n      All health information posted on the site is based on the latest research and national treatment standards, and have been written or reviewed and approved by MEM physicians or health professionals unless otherwise specified.\n      This website is sponsored solely by the MEM Foundation. Portions of our site were created with the support of unrestricted educational grants. The granting organization is noted at the bottom of the applicable page(s). This support does not influence the content of the health information on our website.\n      By accessing, browsing and/or using webpages or other digital content in this site, you accept, without limitation or qualification, the following terms of use.\n      CONSENT. You agree that your use of the MEM website and any uses of any services or materials are subject to your agreement with all of these Terms of Use. You agree that you will not violate any local, state, federal or international laws in using this website or accessing any Material on this website.\n      SITE ACCESS. MEM reserves the right to prohibit, restrict or discontinue your access to certain pages within the website if you violate any terms of this agreement. MEM may modify these Terms of Use at any time without notice. The modified terms of use will be effective upon posting on our website. To remain in compliance, MEM suggests that you review the Terms of Use, as well as the other website policies listed above, at regular intervals. </blockquote>\n      <h3 class=\"text-muted\"> MEDICAL DISCLAIMER. </h3>\n      <blockquote class=\"small text-dark text-capitalize\"> IF THIS IS A MEDICAL EMERGENCY, PLEASE IMMEDIATELY CALL EMERGENCY PERSONNEL (911) TO GET PROMPT MEDICAL ATTENTION. DO NOT RELY ON ELECTRONIC COMMUNICATIONS FOR ASSISTANCE IN REGARD TO YOUR IMMEDIATE, URGENT MEDICAL NEEDS. THIS E-MAIL IS NOT DESIGNED TO FACILITATE MEDICAL EMERGENCIES. MEM CANNOT GUARANTEE RESPONSE TIMES IF YOU CHOOSE TO USE THIS E-MAIL IN THE EVENT OF A MEDICAL EMERGENCY.\n      SECURITY. All forms that request personal information (name, address, email address, etc.) are secure and provide encrypted transmission over the Internet. Please refer to our Website Privacy Policy for more information concerning encryption technology utilized by MEM. </blockquote>\n      <h3 class=\"text-muted\"> DISCLAIMER OF WARRANTY. </h3>\n        <blockquote class=\"small text-dark text-capitalize\"> MATERIALS, SERVICES AND OTHER INFORMATION ARE PROVIDED “AS IS” BY MEM FOR EDUCATIONAL PURPOSES ONLY.\n      MEM MAKES NO EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR USE, TITLE OR NON INFRINGEMENT.\n      ALTHOUGH OUR HEALTH INFORMATION CONTENT IS REVIEWED AND APPROVED BY HEALTHCARE PROFESSIONALS, MEM DOES NOT GUARANTEE THE ACCURACY, ADEQUACY, OR COMPLETENESS OF ANY INFORMATION AND IS NOT RESPONSIBLE FOR ANY ERRORS OR OMISSIONS OR FOR THE RESULTS OBTAINED FROM THE USE OF SUCH INFORMATION.\n      YOU ACKNOWLEDGE AND AGREE THAT MEM DOES NOT OPERATE OR CONTROL THE INTERNET AND THEREFORE MEM DOES NOT GUARANTEE THAT THE USE OF THIS WEBSITE WILL BE ERROR FREE OR FREE OF TECHNOLOGY DOWNTIMES OR UNAVAILABILITY.\n      YOU ACKNOWLEDGE AND AGREE THAT MEM CANNOT AND DOES NOT GUARANTEE AGAINST VIRUSES, WORMS, OR OTHER UNAUTHORIZED USERS OR HACKERS ATTEMPTING TO OBTAIN ACCESS TO THIS WEBSITE OR INFORMATION TRANSMITTED TO OR FROM THIS SITE.\n      MEM also reserves the right to temporarily or permanently discontinue this site, any page, or any functionality on this website at any time and without notice.\n      </blockquote>\n      <h3 class=\"text-muted\"> LIMITATION OF LIABILITY.  </h3>\n        <blockquote class=\"small text-dark\">IN NO EVENT SHALL MEM BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL OR MONETARY DAMAGES, INCLUDING FEES, AND PENALTIES IN CONNECTION WITH YOUR USE OF MATERIALS POSTED ON THIS SITE OR CONNECTIVITY TO OR FROM THIS SITE TO ANY OTHER SITE.\n      GOVERNING LAW. You agree that any claim or dispute relating to the MEM website or your use or reliance on this website shall be construed in accordance with the laws of the State of Ohio without regard to its conflict of laws provisions. The parties agree to be bound and shall be subject to the exclusive jurisdiction of the local, state or federal courts located in Cuyahoga County, Ohio.\n      USER NAME AND PASSWORD. In the event you access any Service requiring a User Name and Password, you are solely responsible for keeping such User Name and Password strictly confidential.\n      CHILDREN. Accept as otherwise indicated, MEM does not knowingly or intentionally collect personal information from children under age 18. The content of our website is directed at adults, and therefore this site is intended for use only by adults over the age of 18. If you are under the age of 18, please consult a parent or guardian for help in using this website.\n      INBOUND LINKS. You may not, under any circumstances, establish a link to the MEM website without the express written consent of the General Counsel of MEM, including but not limited to deep linking.\n      EXTERNAL LINKS. Please note that pages of this site may be linked to other sites which may have different terms of use. The MEM does not own, control, manage, supervise, direct or otherwise have any involvement in the business or affairs of any third party site. MEM is not responsible for the privacy practices or the content of the third party site. Once you link to another site, you are subject to the privacy policy of that site. MEM encourage you to be aware when you are leaving MEM site to read the privacy statements of each and every website that you visit before providing any personally identifiable information.\n      TRADEMARKS AND COPYRIGHTS. All trademarks, service marks, and logos or copyrights displayed and used in this site are the property of their respective owners. Nothing in this site should be construed as granting any right or license to use any Trademark without the written permission of its owner.\n      PRIVACY. Please read the full text of our Notice of Privacy Practices to understand how any Protected Health Information (\"PHI\"), as that term is defined in the Notice of Privacy Practices (HIPAA), that you submit via the MEM website will be treated.\n      BY USING THIS WEBSITE, YOU ACCEPT THESE TERMS.\n      Privacy Policy- \n      <blockquote class=\"small text-dark\">This will be critical for MEM\n      MEM’s mission is, and always will be, “Patients First”. We understand, acknowledge and respect any individual’s right to privacy and the concerns one may have in regard to privacy and security. We recognize the importance of protecting the privacy of information provided by our patients, as well as, general users of our website.</blockquote>\n      <i>IMPORTANT NOTE!</i> The MEM Notice of Privacy Practices is a separate document that governs how medical information about you may be used and disclosed by MEM.\n      MEDICAL DISCLAIMER. IF THIS IS A MEDICAL EMERGENCY, PLEASE IMMEDIATELY CALL EMERGENCY PERSONNEL (911) TO GET PROMPT MEDICAL ATTENTION. DO NOT RELY ON ELECTRONIC COMMUNICATIONS FOR ASSISTANCE IN REGARD TO YOUR IMMEDIATE, URGENT MEDICAL NEEDS. THIS E-MAIL IS NOT DESIGNED TO FACILITATE MEDICAL EMERGENCIES. MEM CANNOT GUARANTEE RESPONSE TIMES IF YOU CHOOSE TO USE THIS E-MAIL IN THE EVENT OF A MEDICAL EMERGENCY. </blockquote>\n      <h5 class=\"text-muted\"> PERSONAL INFORMATION.</h5>\n      <blockquote class=\"small text-dark\"> A visitor can access and browse our entire site at any time without providing any personal information. We do not collect information that would personally identify you unless you choose to provide it.\n      In addition, MEM does not share any personally identifiable information of any individual with any third party unrelated to MEM, except in situations where we must provide information for legal purposes or investigations, or if so directed by the patient through a proper authorization. </blockquote>\n      <h5 class=\"text-muted\"> Forms </h5>\n      <blockquote class=\"small text-dark\"> Our website contains forms through which users may request information or supply feedback to us. In some cases, telephone numbers, email addresses or return addresses are required so that we can supply requested information to you, and in other cases, correct names and addresses are required to process credit card payments.\n      After you fill out a form, we may contact you with follow-up information (unless you have checked an \"opt-out\" box on the form). We do not provide any information supplied on our web forms to any outside organization for any reason (other than where we may be required to by law, or as necessary to process credit card information). We do not save this personal information for any other reason.\n      </blockquote>\n      <h5 class=\"text-muted\"> Surveys</h5>\n      <blockquote class=\"small text-dark\"> Occasionally, we may survey visitors to our site. The information from these surveys is used in aggregate form to help us understand the needs of our visitors so that we can improve our site. We generally do not ask for information in surveys that would personally identify you. If we do request contact information for follow-up, you may decline to provide it. If survey respondents provide personal information (such as an email address) in a survey, it is shared only with those people who need to see it to respond to the question or request.</blockquote>\n      <h5 class=\"text-muted\">Email</h5>\n      <blockquote class=\"small text-dark\"> \"Phishing\" is a scam designed to steal your personal information. If you receive an email that looks like it is from MEM asking you for your personal information, do not respond. We will never request your password, user name, credit card information or other personal information through email.</blockquote>\n      <h5 class=\"text-muted\"> User Name and Password</h5>\n      <blockquote class=\"small text-dark\"> In the event you access any Service requiring a User Name and Password, you are solely responsible for keeping such User Name and Password strictly confidential.</blockquote>\n      <h3 class=\"text-muted\"> NON-PERSONAL INFORMATION </h3>\n      <blockquote class=\"small text-dark\"> MEM collects non-personal information such as website usage, traffic patterns, site performance and related statistics based on our tracking of your visits to the website.</blockquote>\n      <h5 class=\"text-muted\"> IP Addresses</h5>\n      <blockquote class=\"small text-dark\"> The Web server automatically collects the IP (which stands for Internet Protocol) address of the computers that access our site. An IP address is a number that is assigned to your computer when you access the Internet. It is not truly personally identifiable information because many different individuals can access the Internet via the same computer. We use this information in aggregate form to understand how our site is being used and how we can better serve visitors.\n      Please note that although such information is not personally identifiable, we can determine from an IP address a visitor's Internet Service Provider and the geographic location of his or her point of connectivity.</blockquote>\n      <h5 class=\"text-muted\"> First Party Cookies </h5>\n      <blockquote class=\"small text-dark\"> We collect information about visitors to our site using \"first party cookies”, which are alphanumeric identifiers that we transfer to your computer's hard drive through your web browser. Cookies are never associated with specific personal identities. First party cookies are distinct from third party cookies that they are created and directly served by the company hosting the website.\n      We use two types of “cookies” on this site:\n      •\tWe use persistent cookies to recognize a repeat visitor, enabling us the opportunity to offer the visitor a set of services or information requested in a previous visit.\n      •\tWe use session cookies to track a visitor's path through our site during a visit, to help us understand how people use our site.\n      You can delete our cookies at any time. The \"help\" section, located on the toolbar of most browsers, will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie or how to disable cookies altogether. Since cookies allow you to take full advantage of some of our website's best features, we recommend that you leave them turned on.\n      </blockquote>\n      <h5 class=\"text-muted\"> SECURITY OF YOUR INFORMATION </h5>\n      <blockquote class=\"small text-dark\">  Please note that our forms are encrypted to protect your privacy. Once the information is sent to our site, it is kept in secure databases where it is not available to users on the Internet. While we sometimes ask for credit card numbers or certain service transactions, and either pass them on to a credit card processing service or process them manually, we do not store credit card numbers online.\n      MEM periodically reviews and modifies, where appropriate, its security policies and procedures. We use reasonable care to protect your personally identifiable and confidential information provided by you to our site. MEM has in place a security program that seeks to mitigate this risk substantially.</blockquote>\n      <h5 class=\"text-muted\"> DISCLAIMER OF WARRANTY</h5>\n      <blockquote class=\"small text-dark\">  MATERIALS, SERVICES AND OTHER INFORMATION ARE PROVIDED “AS IS” BY MEM FOR EDUCATIONAL PURPOSES ONLY. MEM MAKES NO EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR USE, TITLE OR NON INFRINGEMENT.\n      PLEASE NOTE THAT, BY ITS VERY NATURE, A WEBSITE CANNOT BE ABSOLUTELY PROTECTED AGAINST INTENTIONAL OR MALICIOUS INTRUSION ATTEMPTS. FURTHERMORE, MEM DOES NOT CONTROL THE DEVICES OR COMPUTERS OR THE INTERNET OVER WHICH YOU MAY CHOOSE TO SEND CONFIDENTIAL PERSONAL INFORMATION AND CANNOT, THEREFORE, PREVENT SUCH INTERCEPTIONS OF COMPROMISES TO YOUR INFORMATION WHILE IN TRANSIT TO MEM.\n      THEREFORE, MEM HEREBY MAKES NO GUARANTEE AS TO SECURITY, INTEGRITY OR CONFIDENTIALITY OF ANY INFORMATION TRANSMITTED TO OR FROM THIS WEBSITE, OR STORED WITHIN THIS WEBSITE.\n      BEYOND OUR REASONABLE CARE TO SAFEGUARD YOUR INFORMATION WHILE IN TRANSIT, MEM CANNOT AND DOES NOT GUARANTEE THE ABSOLUTE SECURITY OF ELECTRONIC COMMUNICATIONS OR TRANSMISSIONS SINCE ANY TRANSMISSION MADE OVER THE INTERNET BY ANY ORGANIZATION OR ANY INDIVIDUAL RUNS THE RISK OF INTERCEPTION.\n      IN ADDITION, WE HEREBY MAKE NO GUARANTEE AS TO SECURITY, INTEGRITY OR CONFIDENTIALITY OF ANY INFORMATION TRANSMITTED TO OR FROM THIS WEBSITE, OR STORED WITHIN THIS WEBSITE.</blockquote>\n      <h5 class=\"text-muted\"> LIMITATION OF LIABILITY </h5>\n      <blockquote class=\"small text-dark\">  YOU ASSUME THE SOLE RISK OF TRANSMITTING YOUR INFORMATION AS IT RELATES TO THE USE OF THIS WEBSITE, AND FOR ANY DATA CORRUPTIONS, INTENTIONAL INTERCEPTIONS, INTRUSIONS OR UNAUTHORIZED ACCESS TO INFORMATION, OR OF ANY DELAYS, INTERRUPTIONS TO OR FAILURES PREVENTING THE USE THIS WEBSITE.\n      IN NO EVENT SHALL MEM BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL OR MONETARY DAMAGES, INCLUDING FEES, AND PENALTIES IN CONNECTION WITH YOUR USE OF MATERIALS POSTED ON THIS SITE OR CONNECTIVITY TO OR FROM THIS SITE TO ANY OTHER SITE.\n      MEM MAY CHANGE THIS PRIVACY POLICY WITHOUT NOTICE TO YOU.\n      Other services provided by MEM on this Website may require you to agree to additional terms.</blockquote>\n      <h5 class=\"text-muted\"> Security Statement</h5>\n      <blockquote class=\"small text-dark\">  MEM values your privacy and security. Your data is protected through Secure Socket Layer (SSL) 128-bit encryption, ensuring your confidential information is protected using both server authentication and data encryption technology.\n      BY USING THIS WEBSITE, YOU ACCEPT THESE TERMS.\n      If you have any questions about our privacy policy or our use of information gathered through our Web site, please contact our Webmaster at webmail@ccf.org.\n      \n      </blockquote>\n      </div>\n      \n      \n      <div id=\"ReprintLicensing\" class=\"container\" [hidden]=\"IsReprintHidden\">\n       \n         <h3 class=\"text-muted font-weight-bold\">Reprints & Licensing </h3>\n         <blockquote class=\"small text-dark lead\">Our reprints & licensing policy explains the options for using copyrighted material from our website(s). </blockquote>\n           <blockquote class=\"small text-dark lead\">\n      In furtherance of its charitable mission in providing educational resources to its community and the general public, MEM has developed and created educational health information. All material appearing on MEM, and other websites owned and run by the MEM Foundation is copyrighted and cannot be reused without permission. This policy explains the options for using copyrighted material from our website(s).\n      </blockquote>\n      <h5 class=\"text-muted\"> Education Materials </h5>\n      <blockquote class=\"small text-dark lead\"> “Material” includes without limitation, all text, data, illustrations, graphical elements, animation, photos and tools, appearing on this site.\n      Although all pages that provide health information have been written or reviewed and approved by MEM physicians or health professionals unless otherwise specified, the material contained on these pages are not intended to replace the medical advice of your doctor or health care provider. Please consult your health care provider for advice about a specific medical condition. Please remember that these materials, in the absence of a visit with a health care professional, must be considered as an educational service only and are not designed to replace a physician's independent judgment about the appropriateness or risks of a procedure for a given patient.\n      Please consult your health care provider for advice about a specific medical condition.</blockquote>\n      <h5 class=\"text-muted\">Ownership</h5>\n      <blockquote class=\"small text-dark\"> All Materials are the sole and exclusive property of MEM unless otherwise noted, and you acquire no right, license, title or interest therein or thereto through the use of this website.\n      In no event shall you modify, delete or change in any way any MEM copyright or trademarks or other MEM ownership designations or any Materials.\n      Right to Use and Restrictions on Use\n      You may only print one single copy of any of the materials on this site provided that such materials may only be reprinted for personal, non commercial use. Otherwise, reproduction of materials in any form is prohibited except with the prior written permission of MEM.\n      No edits or alterations to the material are permitted. MEM copyright notice must not be removed from any material.\n      Reprint rights do not allow you to repackage, sell, resell, post on blogs or any other website, display, republish, reproduce, link or frame or store any material without expressed written permission.\n      \n      </blockquote>\n      <h5 class=\"text-muted\">Right to Use and Restrictions on Use</h5>\n      \n      <blockquote class=\"small text-dark\"> \n      You may only print one single copy of any of the materials on this site provided that such materials may only be reprinted for personal, non commercial use. Otherwise, reproduction of materials in any form is prohibited except with the prior written permission of MEM.\n      No edits or alterations to the material are permitted. MEM copyright notice must not be removed from any material.\n      Reprint rights do not allow you to repackage, sell, resell, post on blogs or any other website, display, republish, reproduce, link or frame or store any material without expressed written permission.\n      </blockquote>\n      \n      <div> &nbsp;</div>\n        \n      </div>\n      <div id=\"SocialMediaPolicy\" class=\"container\" [hidden]=\"IsMediaHidden\">\n         <h3 class=\"text-muted font-weight-bold\">Social Media Policy  </h3>\n      <blockquote class=\"small text-dark\">  Our rules governing posting on MEM publicly facing social media sites and pages, including Facebook. </blockquote>\n      <h5 class=\"text-muted\"> Social Media Policy (“policy”) </h5>\n      <blockquote class=\"small text-dark\"> BY POSTING ON ANY MEM SOCIAL MEDIA SITE YOU AGREE TO THESE TERMS. MEM has opened publicly facing pages on social media sites for viewing content and/or videos and posting comments about CC. These social media sites include but are not limited to various blogs, bulletin boards, networks, multi-media and news media sites or other user generated content sites (“Social Media Sites”). By accessing, viewing and/or posting any content related directly or indirectly to CC on any Social Media Site on the internet, you accept, without limitation or qualification, the following terms of use. If you do not agree to the terms of this Policy, you may not view or post any content to any Social Media Site on the internet. Your use of Social Media Sites is acceptance of this Policy and has the same effect as if you had actually physically signed an agreement. </blockquote>\n      <ol type=1 class=\"small text-dark\"> \n        <li>If you are a CC employee you must adhere to the CC MEDIA AND SOCIAL NETWORKING POLICY post on the CC Intranet site.</li>\n      <li>You must be at least 18 years old to post any content on any Social Media Site.</li>\n      <li>You are prohibited from posting any content that is personal health information including patient images on any Social Media Site. You are also prohibited from using the Social Media Site to provide medical advice or medical commentary by non-CC physicians or to use the Social Media Site to make, recommend or increase referrals to physicians who are not employed by CC. </li>\n      <li> As a guest posting content to any Social Media Site on the internet, you agree that you will not: violate any local, state, federal and international laws and regulations, including but not limited to copyright and intellectual property rights laws regarding any content that you send or receive via this Policy; transmit any material (by uploading, posting, email or otherwise) that is unlawful, disruptive, threatening, profane, abusive, harassing, embarrassing, tortuous, defamatory, obscene, libelous, or is an invasion of another's privacy, is hateful or racially, ethnically or otherwise objectionable as solely determined in CC’s discretion; impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity; transmit any material (by uploading, posting, email or otherwise) that you do not have a right to make available under any law or under contractual or fiduciary relationships; transmit any material (by uploading, posting, email or otherwise) that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party; transmit (by uploading, posting, email or otherwise) any unsolicited or unauthorized advertising (including advertising of non CC services or products), promotional materials, \"junk mail,\" \"spam,\" \"chain letters,\" \"pyramid schemes\" or any other form of solicitation; transmit any material (by uploading, posting, email or otherwise) that contains software viruses, worms, disabling code, or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; harass another; or collect or store, or attempt to collect or store, personal data about third parties without their knowledge or consent; or to share confidential pricing information of any party. </li>\n      <li> CC reserves the right to monitor, prohibit, restrict, block, suspend, terminate, delete, or discontinue your access to any Social Media Site, at any time, without notice and for any reason and in its sole discretion. CC may remove, delete, block, filter or restrict by any other means any materials in CC’s sole discretion. You understand and agree that CC may disclose your communications and activities with CC in response to lawful requests by governmental authorities, including Patriot Act requests, judicial orders, warrants or subpoenas, or for the protection of CC rights. You agree that in the event that CC exercises any of its rights hereunder for any reason, CC will have no liability to you.</li>\n      <li> By posting any content on any Social Media Site, you grant to CC the irrevocable right to reproduce, distribute, publish, display such content and the right to create derivative works from your content, edit or modify such content and use such content for any CC purpose. </li>\n      <li> You shall defend, indemnify, and hold CC and its corporate affiliates and their respective officers, directors, employees, contractors, agents, successors and assigns harmless from and against, and shall promptly reimburse them for, any and all losses, claims, damages, settlements, costs, and liabilities of any nature whatsoever (including reasonable attorneys' fees) to which any of them may become subject arising out of, based upon, as a result of, or in any way connected with, your posting of any content to a Social Media Site, any third party claims of infringement or any breach of this Policy. </li>\n      <li> YOU EXPRESSLY ACKNOWLEDGE THAT YOU ASSUME ALL RESPONSIBILITY RELATED TO THE SECURITY, PRIVACY, AND CONFIDENTIALITY RISKS INHERENT IN SENDING ANY CONTENT OVER THE INTERNET. By its very nature, a website AND THE INTERNET cannot be absolutely protected against intentional or malicious intrusion attempts. CC does not control the THIRD PARTY SITES AND THE Internet over which you may choose to send confidential personal or health information OR OTHER CONTENT and, therefore, CC DOES NOT WARRANT ANY SAFEGUARD AGAINST ANY such interceptions or compromises to your information. when posting any content on an internet site, you should think carefully about your own privacy in disclosing detailed or private information about yourself and your family. FURTHERMORE, CC DOES NOT ENDORSE ANY PRODUCT, SERVICE, VIEWS OR CONTENT DISPLAYED ON THE SOCIAL MEDIA SITE. </li>\n      <li>You agree that any claim or dispute relating to your posting of any content on a Social Media Site on the internet shall be construed in accordance with the laws of the State of Ohio without regard to its conflict of laws provisions and you agree to be bound and shall be subject to the exclusive jurisdiction of the local, state or federal courts located in Cuyahoga County, Ohio. </li>\n      <li> You may not provide any content to a Social Media Site that contains any product or service endorsements or any content that may be construed as political lobbying, solicitations or contributions or use the Social Media Site to link to any sites or political candidates or parties or use the Social Media Site to discuss political campaigns, issues or for taking a position on any legislation or law. </li>\n      <li> THIS POLICY MAY BE UPDATED AT ANY TIME WITHOUT NOTICE, AND EACH TIME A USER ACCESSES A SOCIAL NETWORKING SITE, THE NEW POLICY WILL GOVERN, USAGE, EFFECTIVE UPON POSTING. To remain in compliance, CC suggests that you review the Policy, as well as the other website policies, at regular intervals. By continuing to post any content after such new terms are posted, you accept and agree to any and all such modifications to this Policy. </li>\n      \n      </ol>\n        <div> &nbsp;</div>\n      \n      </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.IsPrivacyHidden = true;
        this.IsReprintHidden = true;
        this.IsMediaHidden = true;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.onSelect = function (id) {
        if (id === 'privacy') {
            this.IsPrivacyHidden = !this.IsPrivacyHidden;
            this.IsReprintHidden = true;
            this.IsMediaHidden = true;
        }
        if (id === 'reprint') {
            this.IsReprintHidden = !this.IsReprintHidden;
            this.IsMediaHidden = true;
            this.IsPrivacyHidden = true;
        }
        if (id === 'media') {
            this.IsMediaHidden = !this.IsMediaHidden;
            this.IsReprintHidden = true;
            this.IsPrivacyHidden = true;
        }
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  gallery is under construction!\n</p>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
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

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login-info.ts":
/*!************************************************!*\
  !*** ./src/app/components/login/login-info.ts ***!
  \************************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h2>Login</h2>\n<form [formGroup]=\"loginForm\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" [(ngModel)]=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" (click)=\"login()\"  class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">SignUp</a>\n    </div>\n</form>-->\n\n<div *ngIf=\"isLoggedIn; else loggedOut\">\n        Logged in as {{roles}}.\n</div>\n      \n<ng-template #loggedOut>\n        <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n              <label for=\"username\">Username</label>\n              <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n                required />\n              <div *ngIf=\"f.submitted && username.invalid\">\n                <div *ngIf=\"username.errors.required\">Username is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n                required minlength=\"6\" />\n              <div *ngIf=\"f.submitted && password.invalid\">\n                <div *ngIf=\"password.errors.required\">Password is required</div>\n                <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button class=\"btn btn-primary\">Login</button>\n              <a [routerLink]=\"['/register']\" class=\"btn btn-link\">SignUp</a>\n              <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n                Login failed: {{errorMessage}}\n              </div>\n            </div>\n          </form>\n          <hr />\n        \n        </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Authentication/authentication.service */ "./src/app/services/Authentication/authentication.service.ts");
/* harmony import */ var _classes_token_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/token.storage */ "./src/app/classes/token.storage.ts");
/* harmony import */ var _login_login_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login-info */ "./src/app/components/login/login-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        /*loginForm: FormGroup;
        loading = false;
        submitted = false;
        returnUrl: string;
    
        constructor(
            private formBuilder: FormBuilder,
            private route: ActivatedRoute,
            private router: Router,
            private token: TokenStorage,
            private authenticationService: AuthenticationService,
            private alertService: AlertService) {}
    
            username: string;
            password: string;
    
        ngOnInit() {
            this.loginForm = this.formBuilder.group({
                username: ['', Validators.required],
                password: ['', Validators.required]
            });
    
            // reset login status
            this.authenticationService.logout();
    
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
    
        // convenience getter for easy access to form fields
        get f() { return this.loginForm.controls; }
    
        login() {
            console.log(this.username) ;
            console.log(this.password);
        this.authenticationService.attemptAuth(this.username, this.password).subscribe(
            data => {
              this.token.saveToken(data.token);
              console.log('data.token>>' + data.token );
              this.router.navigate(['user']);
            }
          );
        }*/
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.loginInfo = new _login_login_info__WEBPACK_IMPORTED_MODULE_3__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.reloadPage();
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _classes_token_storage__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/ourdoctors/ourdoctors.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/ourdoctors/ourdoctors.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body{\n    max-height: calc(100vh - 200px);\n    overflow-y: auto;\n}\n\n.btn-adj{\n    padding-bottom: 20px ;\n}\n\n.space{\n   background-color: aquamarine;\n}\n\n.card-text {\n    -webkit-column-span: 2;\n            column-span: 2;\n    font-family: 'Courier New', Courier, monospace;\n    padding-left: 10px;\n    font-weight: 100;\n}"

/***/ }),

/***/ "./src/app/components/ourdoctors/ourdoctors.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/ourdoctors/ourdoctors.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Our Doctors</h2>\n  <div class=\"row\"> \n    <div class=\"card\" style=\"width:350px\">\n      <img class=\"card-img-bottom\" [src]=\"images[0]\" alt=\"Card image\" style=\"width:100%\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Doctor-1</h4>\n        <p class=\"card-text\">With more than three decades of experience in radiation oncology, he is a pioneer who introduced many path breaking\n          procedures such as IMRT and IGRT to south India. </p>\n\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(content3)\">Check Complete Profile</button>\n\n        <ng-template #content3 let-modal>\n          <div class=\" modal-header \">\n            <h4 class=\"modal-title \" id=\"modal-basic-title \">Doctor-1 Profile</h4>\n          </div>\n          <div class=\"modal-body\">\n            <ul class=\"fa-ul\">\n              <li>\n                <i class=\"fa-li fa fa-check-square\"></i>He completed his MBBS with distinction from Khammam Medical College in 1975.</li>\n              <li>\n                <i class=\"fa-li fa fa-check-square\"></i>MD from AIIMS in 1981.</li>\n\n            </ul>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button \" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click') \">Book Appointment</button>\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n            <button type=\"button \" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click') \">Close</button>\n\n          </div>\n\n        </ng-template>\n      </div>\n    </div>\n    <div>&nbsp;</div>\n\n    <div class=\"card\" style=\"width:350px\">\n      <img class=\"card-img-bottom\" [src]=\"images[1]\" alt=\"Card image\" style=\"width:100%\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Doctor-2</h4>\n        <p class=\"card-text\">Dr. Mirza Athar Ali has more than seven years of experience with expertise in Electronic medical records and great\n          ability to deliver High Precision Radiotherapy treatment. </p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(content)\">Check Complete Profile</button>\n\n        <ng-template #content let-modal>\n          <div class=\" modal-header \">\n            <h4 class=\"modal-title \" id=\"modal-basic-title \">Doctor-2 Profile</h4>\n          </div>\n          <div class=\"modal-body\">\n            <ul class=\"fa-ul\">\n              <li>\n                <i class=\"fa-li fa fa-check-square\"></i>He completed his MBBS with distinction from Kurnool Medical College in 1975.</li>\n              <li>\n                <i class=\"fa-li fa fa-check-square\"></i>MD from AIIMS in 1981.</li>\n              <li>\n                <i class=\"fa-li fa fa-spinner fa-spin\"></i>He has also completed training programs at Royal Marsden Medical Hospital in London and Booth Memorial\n                Medical Center in New York.</li>\n              <li>\n                <i class=\"fa-li fa fa-square\"></i>Thesis during post graduation (MD): “Estimation of LQ model parameter α/β and Biological Effective Dose\n                (BED) for acute normal tissue reactions in Head and Neck malignancies treated by Conventional and Hyper-fractionated\n                External Beam Radiotherapy”.</li>\n            </ul>\n          </div>\n          <div class=\"modal-footer \">\n            <button type=\"button \" class=\"btn btn-outline-dark \" (click)=\"modal.close('Save click') \">Close</button>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <div>&nbsp;</div>\n\n    <div class=\"card \" style=\"width:350px \">\n      <img class=\"card-img-bottom \" [src]=\"images[2] \" alt=\"Card image \" style=\"width:100% \">\n      <div class=\"card-body \">\n        <h4 class=\"card-title \">Doctor-3</h4>\n        <p class=\"card-text\">Dr. Prabhakar has more than 7years of experience in Radiation Oncology and is a trusted clinician in his field. </p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(content1)\">Check Complete Profile</button>\n\n        <ng-template #content1 let-modal>\n          <div class=\" modal-header \">\n            <h4 class=\"modal-title \" id=\"modal-basic-title \">Doctor-3 Profile</h4>\n          </div>\n          <div class=\"modal-body \">\n            <ul class=\"fa-ul\">\n              <li>\n                <i class=\"fa-li fa fa-check-square\"></i>He completed his MBBS with distinction from Hyd Medical College in 1975.</li>\n              <li>\n                <i class=\"fa-li fa fa-check-square\"></i>MD from AIIMS in 1981.</li>\n              <li>\n                <i class=\"fa-li fa fa-spinner fa-spin\"></i>He has also completed training programs at Royal Marsden Medical Hospital in London and Booth Memorial\n                Medical Center in New York.</li>\n              <li>\n                <i class=\"fa-li fa fa-square\"></i>Thesis during post graduation (MD): “Estimation of LQ model parameter α/β and Biological Effective Dose\n                (BED) for acute normal tissue reactions in Head and Neck malignancies treated by Conventional and Hyper-fractionated\n                External Beam Radiotherapy”.</li>\n            </ul>\n          </div>\n          <div class=\"modal-footer \">\n            <button type=\"button \" class=\"btn btn-outline-dark \" (click)=\"modal.close('Save click') \">Close</button>\n          </div>\n        </ng-template>\n        <div>\n        </div>\n\n      </div>\n    </div>\n</div>\n    <br>\n    <!-- <div class=\"container\">\n      <h2>Our Doctors-NGFOR-First</h2>\n      <div class=\"row\">\n        <li *ngFor=\"let presentation of doctors\">\n          <div class=\"card\" style=\"width:350px\">\n            <img class=\"card-img-bottom\" src={{presentation.imagepath}} alt=\"Card image\" style=\"width:100%;height: 100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">{{ presentation.idNum }}</h4>\n              <p class=\"card-text\">Sr.Oncologist </p>\n            </div>\n          </div>\n        </li>\n      </div>\n    </div> -->\n\n\n    <!-- <div class=\"container\">\n      <h2>Our Doctors-NGFOR-second</h2>\n      <div class=\"row\">\n        <div class=\"card\" style=\"width:350px\" *ngFor=\"let presentation of doctors\">\n          <img class=\"card-img-bottom\" src={{presentation.imagepath}} alt=\"Card image\" style=\"width:100%\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{ presentation.idNum }}</h4>\n            <p class=\"card-text\">Sr.Oncologist </p>\n          </div>\n        </div>\n      </div>\n    </div> -->\n\n\n    <!-- <div class=\"container\">\n      <h2>Our Doctors-NGFOR2</h2>\n      <div class=\"row\">\n        <div *ngFor=\"let doc of doctors\">\n          <div class=\"card\" style=\"width:350px\">\n            <img class=\"card-img-bottom\" [src]=\"images[0]\" alt=\"Card image\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Doctor-1</h4>\n              <p class=\"card-text\">Sr.Oncologist </p>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(content)\">Check Complete Profile</button>\n\n              <ng-template #{{doc.idNum}} let-modal>\n                <div class=\" modal-header \">\n                  <h4 class=\"modal-title \" id=\"modal-basic-title \">Doctor-2 Profile</h4>\n                </div>\n                <div class=\"modal-body\">\n                  <ul class=\"fa-ul\">\n                    <li>\n                      <i class=\"fa-li fa fa-check-square\"></i>He completed his MBBS with distinction from Khammam Medical College in 1975.</li>\n                    <li>\n                      <i class=\"fa-li fa fa-check-square\"></i>MD from AIIMS in 1981.</li>\n                    <li>\n                      <i class=\"fa-li fa fa-spinner fa-spin\"></i>He has also completed training programs at Royal Marsden Medical Hospital in London and Booth Memorial\n                      Medical Center in New York.</li>\n                  </ul>\n                </div>\n                <div class=\"modal-footer \">\n                  <button type=\"button \" class=\"btn btn-outline-dark \" (click)=\"modal.close('Save click') \">Close</button>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n          <div>&nbsp;</div>\n        </div> --> "

/***/ }),

/***/ "./src/app/components/ourdoctors/ourdoctors.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ourdoctors/ourdoctors.component.ts ***!
  \***************************************************************/
/*! exports provided: OurdoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurdoctorsComponent", function() { return OurdoctorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OurdoctorsComponent = /** @class */ (function () {
    function OurdoctorsComponent(modalService) {
        this.modalService = modalService;
        this.IsPrivacyHidden = true;
        this.IsReprintHidden = true;
        this.IsMediaHidden = true;
        this.images = ['/src/images/doc1.jpg', '/src/images/doc2.jpeg', '/src/images/doc3.jpg'];
        this.doctors = [
            {
                idNum: 'Doctor-1',
                details: '23323232',
                imagepath: '/src/images/doc1.jpg'
            },
            {
                idNum: 'Doctor-2',
                details: 'dasdadsdd',
                imagepath: '/src/images/doc2.jpeg'
            },
            {
                idNum: 'Doctor-3',
                details: '3333333',
                imagepath: 'https://serving.photos.photobox.com/357543241517abeb3e07cb5dacc511cad38b1a8e5e8dcd24c45b3d7fdae422c80541acd0.jpg'
            }
        ];
    }
    OurdoctorsComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) { });
    };
    OurdoctorsComponent.prototype.ngOnInit = function () {
    };
    OurdoctorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ourdoctors',
            template: __webpack_require__(/*! ./ourdoctors.component.html */ "./src/app/components/ourdoctors/ourdoctors.component.html"),
            styles: [__webpack_require__(/*! ./ourdoctors.component.css */ "./src/app/components/ourdoctors/ourdoctors.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], OurdoctorsComponent);
    return OurdoctorsComponent;
}());



/***/ }),

/***/ "./src/app/components/patientdata/patientdata.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/patientdata/patientdata.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-change{\n\tfont-family: 'Gotham SSm A','Gotham SSm B',Helvetica,Arial,sans-serif !important;\n}\n\n.btw-line{\n\tborder-right: 1px solid ;\n}\n\nbody {\n    font-size: 2rem;\n }\n\n.sharp-edges{\n\t    border-radius: 0;\n}"

/***/ }),

/***/ "./src/app/components/patientdata/patientdata.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/patientdata/patientdata.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-change\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n\n      <h1 class=\"h2 page-title\">Paitent Details</h1>\n    </div>\n  </div>\n\n  <div class=\"row alert  border border-secondary\">\n    <div class=\"col-md-4 btw-line\">\n      <span class=\"text-info font-weight-bold \">DOB : </span> {{ dob }}\n    </div>\n    <div class=\"col-md-4 btw-line\">\n      <span class=\"text-info font-weight-bold \">City : </span> {{ city }}\n    </div>\n    <div class=\"col-md-4\">\n      <span class=\"text-info font-weight-bold \"> Country : </span> {{ country }}\n    </div>\n\n\n  </div>\n\n  <div class=\"row border border-secondary alert\">\n    <div class=\"col-md-6 btw-line\">\n      <span class=\"text-info font-weight-bold \">Diagnosis/ Reason for Consultation: </span>\n\n\n      <ol type=\"1\">\n        <li *ngFor=\"let item of items\">\n          {{item}}\n        </li>\n      </ol>\n      <div class=\"form-group shadow-textarea\">\n        <label for=\"exampleFormControlTextarea\">\n          <span class=\"text-info font-weight-bold \">Diagnosis( if any) </span>\n        </label>\n\n        <textarea class=\"form-control z-depth-1\" id=\"exampleFormControlTextarea\" rows=\"3\" readonly>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n\n        </textarea>\n      </div>\n      <div class=\"form-group shadow-textarea\">\n        <label for=\"exampleFormControlTextarea\">\n          <span class=\"text-info font-weight-bold \">Any Specific questions</span>\n        </label>\n\n        <textarea class=\"form-control z-depth-1\" id=\"exampleFormControlTextarea\" rows=\"3\" readonly> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n        </textarea>\n      </div>\n      <span class=\"text-info font-weight-bold \">Attachements </span>\n\n\n      <ol type=\"1\">\n        <li *ngFor=\"let attach of attachments\">\n          <a href=\"#\"> {{attach}} </a>\n        </li>\n      </ol>\n\n\n\n    </div>\n    <div class=\"col-md-6\">\n\n      <div class=\"form-group shadow-textarea\">\n        <label for=\"exampleFormControlTextarea\">\n          <span class=\"text-info font-weight-bold \">Second Opinion Recommendations</span>\n        </label>\n\n        <textarea class=\"form-control z-depth-1\" id=\"exampleFormControlTextarea\" rows=\"10\" readonly>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n        </textarea>\n        <br>\n        <br>\n        <br>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-6\"></div>\n          <div class=\"col-md-6\">\n            <button type=\"button\" class=\"btn btn-primary float-right sharp-edges\">Submit</button>\n            <button type=\"button\" class=\"btn btn-secondary float-right sharp-edges\">Draft</button> \n            <span class=\"skype-button rectangle\" data-contact-id=\"yakkantisatishreddy\" data-text=\"Skype\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/patientdata/patientdata.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/patientdata/patientdata.component.ts ***!
  \*****************************************************************/
/*! exports provided: PatientdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientdataComponent", function() { return PatientdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientdataComponent = /** @class */ (function () {
    function PatientdataComponent() {
        this.city = 'Hyderabad';
        this.dob = '21-DEC-1994';
        this.country = 'India';
        this.items = ['Fever', 'Couge'];
        this.attachments = ['X-ray', 'Prescriptions'];
        this.id = 'ravi.devireddy07';
    }
    PatientdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patientdata',
            template: __webpack_require__(/*! ./patientdata.component.html */ "./src/app/components/patientdata/patientdata.component.html"),
            styles: [__webpack_require__(/*! ./patientdata.component.css */ "./src/app/components/patientdata/patientdata.component.css")]
        })
    ], PatientdataComponent);
    return PatientdataComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<div *ngIf=\"isSignedUp; else signupForm\">\n        Your registration is successful. Please login!\n</div>\n      \n      <ng-template #signupForm>\n        <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n              <label for=\"firstname\">First name</label>\n              <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"form.firstname\" #name=\"ngModel\" required />\n              <div *ngIf=\"f.submitted && firstname.invalid\">\n                <div *ngIf=\"firstname.errors.required\">FirstName is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                    <label for=\"lastname\">Last name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"form.lastname\" #name=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && lastname.invalid\">\n                      <div *ngIf=\"lastname.errors.required\">LastName is required</div>\n                    </div>\n            </div>\n\n            <div class=\"form-group\">\n                    <label for=\"emailID\">Email</label>\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.emailID\" #email=\"ngModel\" required email />\n                    <div *ngIf=\"f.submitted && emailID.invalid\">\n                      <div *ngIf=\"emailID.errors.required\">Email is required</div>\n                      <div *ngIf=\"emailID.errors.email\">Email must be a valid email address</div>\n                    </div>\n            </div>\n\n            <div class=\"form-group\">\n                    <label for=\"phone\">Phone</label>\n                    <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"form.phone\" #phone=\"ngModel\" required  />\n                    <div *ngIf=\"f.submitted && phone.invalid\">\n                      <div *ngIf=\"phone.errors.required\">phone number is required</div>\n                    </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"username\">Username</label>\n              <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n                required />\n              <div *ngIf=\"f.submitted && username.invalid\">\n                <div *ngIf=\"username.errors.required\">Username is required</div>\n              </div>\n            </div>\n\n            \n\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n                required minlength=\"6\" />\n              <div *ngIf=\"f.submitted && password.invalid\">\n                <div *ngIf=\"password.errors.required\">Password is required</div>\n                <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <button class=\"btn btn-primary\">Register</button>\n              <div *ngIf=\"f.submitted && isSignUpFailed\" class=\"alert alert-warning\">\n                Signup failed!<br/>{{errorMessage}}\n              </div>\n              <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Login</a>\n            </div>\n\n          </form>\n        </div>\n      </ng-template>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_Alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Alert/alert.service */ "./src/app/services/Alert/alert.service.ts");
/* harmony import */ var _services_User_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/User/user.service */ "./src/app/services/User/user.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        /*form: any = {};
        user: User;
        registerForm: FormGroup;
        loading = false;
        submitted = false;
      
        constructor(
          private formBuilder: FormBuilder,
          private router: Router,
          private userService: UserService,
          private alertService: AlertService) { }
      
        ngOnInit() {
          this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            name: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
          });
        }
      
        // convenience getter for easy access to form fields
        get f() { return this.registerForm.controls; }
      
        onSubmit() {
          console.log('>>>>>>' + this.form.name);
          this.submitted = true;
      
          this.user = new User(
            this.form.name,
            this.form.username,
            this.form.email,
            this.form.password
          ) ;
      
          // stop here if form is invalid
          if (this.registerForm.invalid) {
            return;
          }
      
          this.loading = true;
          this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
              data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
              },
              error => {
                this.alertService.error(error);
                console.log(error);
                this.loading = false;
              });
        }*/
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.signupInfo = new _classes_user__WEBPACK_IMPORTED_MODULE_5__["User"](this.form.firstname, this.form.lastname, this.form.username, this.form.phone, this.form.email, this.form.password);
        this.userService.register(this.signupInfo).subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            alert('Registration successful');
            _this.router.navigate(['/login']);
            _this.isSignedUp = true;
            _this.isSignUpFailed = false;
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isSignUpFailed = true;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_User_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_Alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Services module is under Construction !\n</p>\n  "

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
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

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/services/Alert/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/Alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/Authentication/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/Authentication/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    /*login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:8090/token/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }*/
    /*attemptAuth(ussername: string, password: string): Observable<any> {
        const credentials = {username: ussername, password: password};
        console.log('attempAuth ::' + credentials.username);
        return this.http.post<any>('http://localhost:8080/api/auth/signin', credentials, httpOptions);
      }*/
    AuthenticationService.prototype.attemptAuth = function (credentials) {
        return this.http.post('http://localhost:8080/api/auth/signin', credentials, httpOptions);
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/Tomcat/tomcat.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/Tomcat/tomcat.service.ts ***!
  \***************************************************/
/*! exports provided: TomcatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomcatService", function() { return TomcatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TomcatService = /** @class */ (function () {
    function TomcatService(_httpclient) {
        this._httpclient = _httpclient;
        this.apiURL = 'https://localhost:8443/users/all';
        this.apiPostURL = 'http://localhost:8080/users/1';
    }
    TomcatService.prototype.getData = function () {
        return this._httpclient.get(this.apiURL);
    };
    TomcatService.prototype.saveAppointment = function (article) {
        console.log('Inside the Serivce:::');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        var options = { headers: httpHeaders };
        return this._httpclient.post(this.apiPostURL, article, options);
    };
    TomcatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TomcatService);
    return TomcatService;
}());



/***/ }),

/***/ "./src/app/services/User/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/User/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get("/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get("/users/" + id);
    };
    UserService.prototype.register = function (user) {
        console.log(user.firstname);
        console.log(user.lastname);
        console.log(user.email);
        console.log(user.phone);
        console.log(user.password);
        console.log(user.username);
        return this.http.post('http://localhost:8080/api/auth/signup', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put("/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete("/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /Users/rd/Desktop/Desktop/MyExpertMedics-UI/MyExpertMedicsUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map