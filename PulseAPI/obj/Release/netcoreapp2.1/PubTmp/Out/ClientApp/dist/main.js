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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _login_real_login_real_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-real/login-real.component */ "./src/app/account/login-real/login-real.component.ts");
/* harmony import */ var _registration_account_registration_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-account/registration-account.component */ "./src/app/account/registration-account/registration-account.component.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"]
            ],
            declarations: [
                _registration_account_registration_account_component__WEBPACK_IMPORTED_MODULE_5__["RegisterAccountComponent"],
                _login_real_login_real_component__WEBPACK_IMPORTED_MODULE_4__["LoginRealComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"alert alert-info\">\r\n  Username: rolteanu<br />\r\n  Password: test\r\n</div> -->\r\n<mat-toolbar style=\"box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 3px rgba(0,0,0,0.08);position: fixed;z-index: 1;\">\r\n\r\n    <!-- This fills the remaining space of the current row -->\r\n    <span class=\"fill-space\"></span>\r\n  \r\n    <button mat-raised-button color=\"primary\" style=\"margin-right: 10px\" routerLink=\"/register\"\r\n    (click)=\"onLogin()\"\r\n     routerLinkActive=\"active\">Login</button>\r\n\r\n     <button mat-raised-button color=\"primary\" routerLink=\"/register\"\r\n    (click)=\"onRegister()\"\r\n     routerLinkActive=\"active\">Register</button>\r\n\r\n</mat-toolbar>\r\n\r\n<!-- \r\n<div class=\"container\">\r\n    <div class=\"color-overlay\"></div>\r\n  </div> -->\r\n\r\n<img  style = \"\r\nmin-width: 100%; \r\nobject-fit: cover;\r\nmax-height: 950px;\" src=\"http://whitehousemarketinginc.com/whmktwp/wp-content/uploads/2015/03/bigstock-Two-business-people-discussing-65366809.jpg\"/>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  display: block;\n  left: 35%;\n  text-align: center;\n  position: absolute; }\n\n.example-full-width {\n  width: 100%;\n  text-align: center; }\n\n.title-style {\n  text-align: center;\n  margin-top: 230px;\n  margin-right: 50px; }\n\n.no-hover-effect.mat-button.mat-primary .mat-button-focus-overlay,\n.no-hover-effect.mat-button.mat-accent .mat-button-focus-overlay,\n.no-hover-effect.mat-button.mat-warn .mat-button-focus-overlay {\n  background-color: transparent; }\n\n.fill-space {\n  flex: 1 1 auto; }\n\n.container {\n  background: #000 url('bigstock-two-business-people-discussing-65366809.jpg');\n  color: #fff;\n  width: 100%;\n  height: 600px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.color-overlay {\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: .6; }\n\nh1 {\n  font-family: 'Pacifico', cursive;\n  font-size: 60px; }\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginFormComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .subscribe(function (result) {
            if (result.state == 1) {
                _this.router.navigate(["/"]);
            }
            else {
                alert(result.msg);
            }
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginFormComponent.prototype.onRegister = function () {
        this.router.navigate(["/register"]);
    };
    LoginFormComponent.prototype.onLogin = function () {
        this.router.navigate(["/login-real"]);
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/account/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/login-real/login-real.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-real/login-real.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n        <!-- <mat-form-field>\r\n                <textarea matInput placeholder=\"Client Identifier\"></textarea>\r\n              </mat-form-field>\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Client Identifier\"></textarea>\r\n        </mat-form-field>-->\r\n        <mat-card>\r\n            <mat-card-title>Login</mat-card-title>\r\n            <div class=\"form-container\">\r\n            <mat-card-content class =\"mat-card-content\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input [(ngModel)]=\"email\" type=\"text\"\r\n                 placeholder=\"Email\"\r\n                 aria-label=\"Number\"\r\n                 matInput>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input [(ngModel)]=\"password\" type=\"password\"\r\n                [type]=\"hide ? 'password' : 'text'\"\r\n                 placeholder=\"password\" aria-label=\"Number\" matInput>\r\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <img class=\"img-style\" src=\"https://ssl.gstatic.com/accounts/signup/glif/account.svg\"/>\r\n    </div>\r\n         <mat-card-actions>\r\n         <button style=\"margin-left: 12px\" mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\r\n         <button mat-button color=\"primary\" routerLink=\"/register\"\r\n  (click)=\"onCancel()\"\r\n   routerLinkActive=\"active\">Cancel</button>\r\n              </mat-card-actions>\r\n              <br/>\r\n              <mat-spinner *ngIf=\"loading\" [diameter]=\"40\"></mat-spinner>\r\n              <mat-error *ngIf=\"showError\">\r\n                Username or password incorect\r\n                  </mat-error>\r\n                </mat-card>\r\n               \r\n</div>"

/***/ }),

/***/ "./src/app/account/login-real/login-real.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/login-real/login-real.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  display: block;\n  left: 35%;\n  text-align: center;\n  position: absolute; }\n\n.example-full-width {\n  width: 100%;\n  text-align: center; }\n\n.title-style {\n  text-align: center;\n  margin-top: 230px;\n  margin-right: 50px; }\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  width: 800px;\n  margin-left: 500px;\n  margin-top: 100px; }\n\n.mat-card-content {\n  float: left;\n  margin-top: 100px; }\n\n.img-style {\n  width: 300px;\n  float: right; }\n\nmat-icon {\n  cursor: pointer; }\n\n.form-container {\n  width: 100%; }\n\n.mat-form-field {\n  display: flow-root !important;\n  position: relative;\n  text-align: left; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 450px; }\n"

/***/ }),

/***/ "./src/app/account/login-real/login-real.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-real/login-real.component.ts ***!
  \************************************************************/
/*! exports provided: LoginRealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRealComponent", function() { return LoginRealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRealComponent = /** @class */ (function () {
    function LoginRealComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.showError = false;
        this.hide = true;
        this.error = "";
    }
    LoginRealComponent.prototype.onCancel = function () {
        this.router.navigate(['/']);
    };
    LoginRealComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.showError = false;
        this.authenticationService.login(this.email, this.password)
            .subscribe(function (result) {
            if (result.state == 1) {
                _this.router.navigate(["/"]);
            }
            else {
                alert(result.msg);
            }
        }, function (error) {
            _this.error = error;
            _this.loading = false;
            _this.showError = true;
        });
    };
    LoginRealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-real',
            template: __webpack_require__(/*! ./login-real.component.html */ "./src/app/account/login-real/login-real.component.html"),
            styles: [__webpack_require__(/*! ./login-real.component.scss */ "./src/app/account/login-real/login-real.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginRealComponent);
    return LoginRealComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-account/registration-account.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/account/registration-account/registration-account.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n        <span>Registration</span>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"example-container\">\r\n            <!-- <mat-form-field>\r\n                    <textarea matInput placeholder=\"Client Identifier\"></textarea>\r\n                  </mat-form-field>\r\n            <mat-form-field>\r\n              <textarea matInput placeholder=\"Client Identifier\"></textarea>\r\n            </mat-form-field>-->\r\n            <mat-card>\r\n                <mat-card-title>Create Account</mat-card-title>\r\n                <div class=\"form-container\">\r\n                <mat-card-content class =\"mat-card-content\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input [(ngModel)]=\"accountName\" type=\"text\" placeholder=\"Email\" aria-label=\"Number\" matInput >\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input [(ngModel)]=\"accountPassword\" type=\"password\"\r\n                    [type]=\"hide ? 'password' : 'text'\"\r\n                     placeholder=\"password\" aria-label=\"Number\" matInput >\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n            <img class=\"img-style\" src=\"https://ssl.gstatic.com/accounts/signup/glif/account.svg\"/>\r\n        </div>\r\n             <mat-card-actions>\r\n             <button style=\"margin-left: 12px\" mat-raised-button color=\"primary\" (click)=\"createAccount()\">Create Account</button>\r\n             <button mat-button color=\"primary\" routerLink=\"/register\"\r\n      (click)=\"onCancel()\"\r\n       routerLinkActive=\"active\">Cancel</button>\r\n                  </mat-card-actions>\r\n                  <br/>\r\n                      <mat-spinner *ngIf=\"loading\" [diameter]=\"40\"></mat-spinner>\r\n                    </mat-card>\r\n    </div>"

/***/ }),

/***/ "./src/app/account/registration-account/registration-account.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/account/registration-account/registration-account.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  width: 800px;\n  margin-left: 500px;\n  margin-top: 100px; }\n\n.mat-card-content {\n  float: left;\n  margin-top: 100px; }\n\n.img-style {\n  width: 300px;\n  float: right; }\n\nmat-icon {\n  cursor: pointer; }\n\n.form-container {\n  width: 100%; }\n\n.mat-form-field {\n  display: flow-root !important;\n  position: relative;\n  text-align: left; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 450px; }\n"

/***/ }),

/***/ "./src/app/account/registration-account/registration-account.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/account/registration-account/registration-account.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAccountComponent", function() { return RegisterAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var RegisterAccountComponent = /** @class */ (function () {
    function RegisterAccountComponent(router, http, baseUrl) {
        this.router = router;
        this.http = http;
        this.baseUrl = baseUrl;
        this.hide = true;
        this.loading = false;
    }
    RegisterAccountComponent.prototype.onCancel = function () {
        this.router.navigate(["/"]);
    };
    RegisterAccountComponent.prototype.createAccount = function () {
        var _this = this;
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        var options = { headers: header };
        var body = JSON.stringify({ "Email": this.accountName, "PasswordHash": this.accountPassword });
        this.loading = true;
        this.http.post(this.baseUrl + "api/account/register", body, options)
            .subscribe(function (_) {
            _this.loading = false;
            var res = _;
        }, function (err) {
            _this.loading = false;
        });
    };
    RegisterAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-account',
            template: __webpack_require__(/*! ./registration-account.component.html */ "./src/app/account/registration-account/registration-account.component.html"),
            styles: [__webpack_require__(/*! ./registration-account.component.scss */ "./src/app/account/registration-account/registration-account.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], RegisterAccountComponent);
    return RegisterAccountComponent;
}());



/***/ }),

/***/ "./src/app/app-material/app-material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-material/app-material.module.ts ***!
  \*****************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



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
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _account_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _account_login_real_login_real_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/login-real/login-real.component */ "./src/app/account/login-real/login-real.component.ts");
/* harmony import */ var _account_registration_account_registration_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/registration-account/registration-account.component */ "./src/app/account/registration-account/registration-account.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-certificate/create-certificate.component */ "./src/app/create-certificate/create-certificate.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_7__["HomeLayoutComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'create-certificate', component: _create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_9__["CreateCertificateComponent"] },
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"] }
        ]
    },
    { path: 'login', component: _account_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"] },
    { path: 'login-real', component: _account_login_real_login_real_component__WEBPACK_IMPORTED_MODULE_4__["LoginRealComponent"] },
    { path: 'register', component: _account_registration_account_registration_account_component__WEBPACK_IMPORTED_MODULE_5__["RegisterAccountComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> \r\n\r\n<!-- <h2>\r\n        <a mat-icon-button (click)=\"drawer.toggle()\">\r\n                <mat-icon style=\"color: grey\">menu</mat-icon>\r\n            </a>\r\n            <p>Block Chain</p>\r\n</h2>\r\n<mat-drawer-container class=\"example-container\" autosize>\r\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\r\n      <button routerLink=\"/\" routerLinkActive=\"active\" style=\"margin-top: 20px\" mat-button class=\"small\" (click)=\"showFiller = !showFiller\" >\r\n        <mat-icon style=\"color: red\">home</mat-icon>\r\n      <b style=\"margin-left: 20px\">Home</b>\r\n      </button>\r\n    </mat-drawer>\r\n  \r\n    <div class=\"example-sidenav-content\">\r\n      <!-- <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n        Toggle sidenav\r\n      </button> -->\r\n      <!-- <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-drawer-container> -->\r\n   "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n  .body-content {\n    padding-top: 50px; } }\n\n.example-container {\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.mat-icon-button.small {\n  width: 25px;\n  height: 25px;\n  color: red;\n  line-height: 25px; }\n\n.mat-icon-button.small .mat-icon, .mat-icon-button.small .mat-icon-button i {\n    line-height: 25px; }\n\n.mat-icon-button.small .mat-icon {\n    width: 25px;\n    height: 25px; }\n\n.mat-icon-button.small .material-icons {\n    font-size: 25px; }\n\n.example-sidenav-content {\n  display: flex;\n  height: 1400px;\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.example-sidenav {\n  padding: 20px;\n  height: 100%; }\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _certificate_validator_certificate_validator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./certificate-validator/certificate-validator.component */ "./src/app/certificate-validator/certificate-validator.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-certificate/create-certificate.component */ "./src/app/create-certificate/create-certificate.component.ts");
/* harmony import */ var _services_badge_count_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/badge.count.service */ "./src/app/services/badge.count.service.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__["NavMenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_11__["HomeLayoutComponent"],
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__["CounterComponent"],
                _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_8__["FetchDataComponent"],
                _certificate_validator_certificate_validator_component__WEBPACK_IMPORTED_MODULE_15__["CertificateValidatorComponent"],
                _create_certificate_create_certificate_component__WEBPACK_IMPORTED_MODULE_17__["CreateCertificateComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_16__["TransactionsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_19__["UsersComponent"],
                _certificate_validator_certificate_validator_component__WEBPACK_IMPORTED_MODULE_15__["FileNameDialogComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_16__["TransactionDetailsDialogComponent"]
            ],
            imports: [
                _account_account_module__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_14__["AppMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            entryComponents: [_certificate_validator_certificate_validator_component__WEBPACK_IMPORTED_MODULE_15__["FileNameDialogComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_16__["TransactionDetailsDialogComponent"]],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                _services_badge_count_service__WEBPACK_IMPORTED_MODULE_18__["BadgeCountService"]
                //   fakeBackendProvider,
                //   {
                //     provide: HTTP_INTERCEPTORS,
                //     useClass: JwtInterceptor,
                //     multi: true
                // }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
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


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.tokeyKey = "token";
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.checkLogin()) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard.prototype.checkLogin = function () {
        var token = sessionStorage.getItem('tokenKey');
        return token != null;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var AuthService = /** @class */ (function () {
    function AuthService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.tokeyKey = "token";
    }
    AuthService.prototype.login = function (username, password) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        var options = { headers: header };
        var body = JSON.stringify({ "Email": username, "PasswordHash": password });
        return this.http.put(this.baseUrl + "api/account/login", body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var result = res;
            // login successful if there's a jwt token in the response
            if (result.state && result.state == 1) {
                sessionStorage.setItem('tokenKey', result.data.accesToken);
            }
            return result;
        }));
    };
    AuthService.prototype.getLocalToken = function () {
        return sessionStorage.getItem('tokenKey');
    };
    AuthService.prototype.isAdmin = function () {
        return this.getUserInfo$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data.userName == "rolteanu" ? true : false;
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        sessionStorage.clear();
    };
    AuthService.prototype.initAuthHeaders = function () {
        var token = this.getLocalToken();
        if (token == null)
            throw "No token";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set("Authorization", "Bearer " + token);
        return headers;
    };
    AuthService.prototype.authGet$ = function (url) {
        var header = this.initAuthHeaders();
        var options = { headers: header };
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("authGet")));
    };
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation + " error: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AuthService.prototype.getUserInfo$ = function () {
        return this.authGet$(this.baseUrl + "api/TokenAuth");
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/certificate-validator/certificate-validator.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/certificate-validator/certificate-validator.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card-style1\">\r\n  <mat-card-title>Validate Certificate By Certificate Identifier</mat-card-title>\r\n  <mat-card-header *ngIf=\"selectedCertificate !=null && selectedCertificate.id !=null\">\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>Certificate Identifier</mat-card-title>\r\n      <mat-card-subtitle> {{selectedCertificate == null ? \"\" : selectedCertificate.id}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input [(ngModel)]=\"selectedCertificate\" type=\"text\" placeholder=\"Certificate Identifier\" aria-label=\"Number\" matInput [matAutocomplete]=\"auto\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayCertificate\">\r\n        <mat-option *ngFor=\"let certificate of certificates\" [value]=\"certificate\">\r\n          {{certificate.id}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"center\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"validateCertificatebyId()\">\r\n        Validate\r\n </button>\r\n <mat-spinner *ngIf=\"isBusy\" [diameter]=\"40\"></mat-spinner>\r\n    </mat-card-actions>\r\n</mat-card>\r\n  <mat-card class=\"mat-card-style\">\r\n    <mat-card-title>Validate Certificate By Vessel Name</mat-card-title>\r\n    <mat-card-header *ngIf=\"selectedShip !=null && selectedShip.id !=null\">\r\n        <div mat-card-avatar class=\"example-header-image1\"></div>\r\n        <mat-card-title>Vessel Name</mat-card-title>\r\n        <mat-card-subtitle> {{selectedShip == null ? \"\" : selectedShip.shipName}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input [(ngModel)]=\"selectedShip\" type=\"text\" placeholder=\"Vessel Name\" aria-label=\"Number\" matInput [matAutocomplete]=\"auto1\">\r\n        <mat-autocomplete #auto1=\"matAutocomplete\" [displayWith]=\"displayShipName\">\r\n          <mat-option *ngFor=\"let ship of ships\" [value]=\"ship\">\r\n            {{ship.shipName}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"center\" >\r\n        <button mat-raised-button color=\"primary\" align=\"center\" (click)=\"validateCertificatebyVesselId()\">\r\n          Validate\r\n   </button>\r\n   <mat-spinner *ngIf=\"isBusy1\" [diameter]=\"40\"></mat-spinner>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n"

/***/ }),

/***/ "./src/app/certificate-validator/certificate-validator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/certificate-validator/certificate-validator.component.ts ***!
  \**************************************************************************/
/*! exports provided: CertificateValidatorComponent, FileNameDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateValidatorComponent", function() { return CertificateValidatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNameDialogComponent", function() { return FileNameDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_badge_count_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/badge.count.service */ "./src/app/services/badge.count.service.ts");
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






var CertificateValidatorComponent = /** @class */ (function () {
    function CertificateValidatorComponent(_http, baseUrl, authService, badgeCountService, route, dialog) {
        var _this = this;
        this._http = _http;
        this.baseUrl = baseUrl;
        this.authService = authService;
        this.badgeCountService = badgeCountService;
        this.route = route;
        this.dialog = dialog;
        this.Title = "";
        this.isBusy = false;
        this.isBusy1 = false;
        this.displayCertificate = function (item) { return item.id; };
        this.displayShipName = function (ship) { return "" + ship.shipName; };
        var header = this.authService.initAuthHeaders();
        var options = { headers: header };
        this._http.get(baseUrl + "api/certificate", options).subscribe(function (result) {
            _this.certificates = result;
        }, function (error) { return console.error(error); });
        this._http.get(baseUrl + "api/certificate/ships", options).subscribe(function (result) {
            _this.ships = result;
        }, function (error) { return console.log(error); });
    }
    CertificateValidatorComponent.prototype.validateCertificatebyId = function () {
        var _this = this;
        var body = new FormData();
        body.append('certificateId', this.selectedCertificate.id);
        this.isBusy = true;
        this._http.post(this.baseUrl + "api/certificate/ValidateById", body).subscribe(function (_) {
            _this.messageValidate = _ == true ? "valid" : "not valid";
            _this.isBusy = false;
            var dialogRef = _this.dialog.open(FileNameDialogComponent, {
                data: {
                    result: "Certificate is " + _this.messageValidate
                }
            });
            var header = _this.authService.initAuthHeaders();
            var options = { headers: header };
            // this._http.get<number>(`${this.baseUrl}api/certificate/counttransaction`,options).subscribe(result => {
            //     this.badgeCountService.totalTransactions.next(result);
            // });
        });
    };
    CertificateValidatorComponent.prototype.validateCertificatebyVesselId = function () {
        var _this = this;
        var body = new FormData();
        body.append('vesselId', this.selectedShip.id);
        this.isBusy1 = true;
        this._http.post(this.baseUrl + "api/certificate/ValidateByVesselId", body).subscribe(function (_) {
            _this.messageValidate = _ == true ? "valid" : "not valid";
            _this.isBusy1 = false;
            var dialogRef = _this.dialog.open(FileNameDialogComponent, {
                data: {
                    result: "Certificate is " + _this.messageValidate + " for " + _this.selectedShip.shipName
                }
            });
            var header = _this.authService.initAuthHeaders();
            var options = { headers: header };
            _this._http.get(_this.baseUrl + "api/certificate/counttransaction", options).subscribe(function (result) {
                _this.badgeCountService.totalTransactions.next(result);
            });
        });
    };
    CertificateValidatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificate-validator',
            template: __webpack_require__(/*! ./certificate-validator.component.html */ "./src/app/certificate-validator/certificate-validator.component.html"),
            styles: [__webpack_require__(/*! ./certificate-validator.scss */ "./src/app/certificate-validator/certificate-validator.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_badge_count_service__WEBPACK_IMPORTED_MODULE_5__["BadgeCountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CertificateValidatorComponent);
    return CertificateValidatorComponent;
}());

var FileNameDialogComponent = /** @class */ (function () {
    function FileNameDialogComponent(data) {
        this.data = data;
    }
    FileNameDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/certificate-validator/dialog-overview-example-dialog.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], FileNameDialogComponent);
    return FileNameDialogComponent;
}());



/***/ }),

/***/ "./src/app/certificate-validator/certificate-validator.scss":
/*!******************************************************************!*\
  !*** ./src/app/certificate-validator/certificate-validator.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.mat-form-field {\n  display: flow-root !important;\n  position: relative;\n  text-align: left; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.mat-card-style {\n  margin-top: 100px; }\n\n.mat-card-style1 {\n  margin-top: 50px; }\n\n.example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://png.icons8.com/material/1600/certificate.png\");\n  background-size: cover; }\n\n.example-header-image1 {\n  background-image: url(\"https://png.pngtree.com/element_origin_min_pic/16/08/22/0957ba560723855.jpg\");\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/certificate-validator/dialog-overview-example-dialog.html":
/*!***************************************************************************!*\
  !*** ./src/app/certificate-validator/dialog-overview-example-dialog.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.result}}</h2>"

/***/ }),

/***/ "./src/app/counter/counter.component.html":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.currentCount = 0;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter-component',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/counter/counter.component.html")
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/create-certificate/create-certificate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-certificate/create-certificate.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateCertificateComponent, FileUploadModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCertificateComponent", function() { return CreateCertificateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return FileUploadModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
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





var CreateCertificateComponent = /** @class */ (function () {
    function CreateCertificateComponent(_http, baseUrl, authService) {
        var _this = this;
        this._http = _http;
        this.baseUrl = baseUrl;
        this.authService = authService;
        this.customers = [];
        this.ships = [];
        this.text = 'Attach Document';
        /** Name used in form which will be sent in HTTP request. */
        this.param = 'file';
        /** Target URL for file uploading. */
        /** File extension that accepted, same as 'accept' of <input type="file" />. By the default, it's set to 'image/*'. */
        this.accept = 'image/*';
        /** Allow you to add handler after its completion. Bubble up response text from remote. */
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.files = [];
        this.displayShipName = function (ship) { return "" + ship.shipName; };
        this.displayCustomer = function (state) {
            return state.firstName + " " + state.lastName;
        };
        _http.get(this.baseUrl + "api/certificate/customers").subscribe(function (result) {
            _this.customers = result;
        }, function (error) { return console.log(error); });
        _http.get(this.baseUrl + "api/certificate/ships").subscribe(function (result) {
            _this.ships = result;
        }, function (error) { return console.log(error); });
    }
    CreateCertificateComponent.prototype.onClick = function () {
        var _this = this;
        var fileUpload = document.getElementById('fileUpload');
        fileUpload.onchange = function () {
            for (var index = 0; index < fileUpload.files.length; index++) {
                var file = fileUpload.files[index];
                _this.files.push({ data: file, state: 'in', inProgress: false, progress: 0, canRetry: false, canCancel: true });
            }
            // this.uploadFiles();
        };
        fileUpload.click();
    };
    CreateCertificateComponent.prototype.uploadFiles = function () {
        var _this = this;
        var fileUpload = document.getElementById('fileUpload');
        fileUpload.value = '';
        this.files.forEach(function (file) {
            if (!file.inProgress) {
                _this.uploadFile(file);
            }
        });
    };
    CreateCertificateComponent.prototype.createCertificate = function () {
        this.uploadFiles();
    };
    CreateCertificateComponent.prototype.createDateFormat = function (dateValue) {
        var day = dateValue.getDate(); // yields date
        var month = dateValue.getMonth() + 1; // yields month (add one as '.getMonth()' is zero indexed)
        var year = dateValue.getFullYear(); // yields year
        // After this construct a string with the above results as below
        var time = day + "/" + month + "/" + year;
        return time;
    };
    CreateCertificateComponent.prototype.uploadFile = function (file) {
        var _this = this;
        var fd = new FormData();
        fd.append("CustomerIdentifier", this.selectedCustomer.id);
        fd.append("VesselIdentifier", this.selectedShip.id);
        fd.append("StartDate", this.createDateFormat(this.selectedStartDate));
        fd.append("EndDate", this.createDateFormat(this.selectedEndDate));
        fd.append(this.param, file.data);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.baseUrl + "api/certificate/upload", fd, {
            reportProgress: true,
        });
        //this._http.post(this.target,fd);
        file.inProgress = true;
        file.sub = this._http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                    file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            file.inProgress = false;
            file.canRetry = true;
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(file.data.name + " upload failed.");
        })).subscribe(function (event) {
            if (typeof (event) === 'object') {
                _this.removeFileFromArray(file);
                _this.complete.emit(event.body);
                var header = _this.authService.initAuthHeaders();
                var options = { headers: header };
            }
        });
    };
    CreateCertificateComponent.prototype.removeFileFromArray = function (file) {
        var index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateCertificateComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateCertificateComponent.prototype, "param", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateCertificateComponent.prototype, "accept", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateCertificateComponent.prototype, "complete", void 0);
    CreateCertificateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fetch-data',
            template: __webpack_require__(/*! ./create-certificate.html */ "./src/app/create-certificate/create-certificate.html"),
            styles: [__webpack_require__(/*! ./create-certificate.scss */ "./src/app/create-certificate/create-certificate.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CreateCertificateComponent);
    return CreateCertificateComponent;
}());

var FileUploadModel = /** @class */ (function () {
    function FileUploadModel() {
    }
    return FileUploadModel;
}());



/***/ }),

/***/ "./src/app/create-certificate/create-certificate.html":
/*!************************************************************!*\
  !*** ./src/app/create-certificate/create-certificate.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"vertical-align: middle\">\r\n<div class=\"example-container\">\r\n        <!-- <mat-form-field>\r\n                <textarea matInput placeholder=\"Client Identifier\"></textarea>\r\n              </mat-form-field>\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Client Identifier\"></textarea>\r\n        </mat-form-field>-->\r\n        <mat-card>\r\n            <mat-card-title>Create Certificate</mat-card-title>\r\n            <mat-card-content>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input [(ngModel)]=\"selectedCustomer\" type=\"text\" placeholder=\"Customer Name\" aria-label=\"Number\" matInput [matAutocomplete]=\"auto1\">\r\n                <mat-autocomplete #auto1=\"matAutocomplete\" [displayWith]=\"displayCustomer\">\r\n                  <mat-option *ngFor=\"let customer of customers\" [value]=\"customer\">\r\n                    {{ customer.firstName }} {{ customer.lastName }} \r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input  [(ngModel)]=\"selectedShip\" type=\"text\" placeholder=\"Vessel Name\" aria-label=\"Number\" matInput [matAutocomplete]=\"auto2\">\r\n                <mat-autocomplete #auto2=\"matAutocomplete\" [displayWith]=\"displayShipName\">\r\n                  <mat-option *ngFor=\"let option of ships\" [value]=\"option\">\r\n                    {{ option.shipName }}\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input [(ngModel)]=\"selectedStartDate\" matInput matInput placeholder=\"Start Date\" [matDatepicker]=\"startDatePicker\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker  #startDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input  [(ngModel)]=\"selectedEndDate\"matInput matInput placeholder=\"End Date\" [matDatepicker]=\"endDatePicker\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker  #endDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n        </mat-card-content>\r\n         <mat-card-actions>\t\r\n         <button mat-button color=\"warn\" (click)=\"onClick()\">\r\n                <mat-icon>file_upload</mat-icon>\r\n                {{text}}\r\n         </button>\r\n         <button style=\"margin-right: 10px\" mat-raised-button color=\"primary\" [disabled]=\"files.length <1\" (click)=\"createCertificate()\">Create Certificate</button>\r\n              </mat-card-actions>\r\n              <br/>\r\n              <ul>\r\n                    <li *ngFor=\"let file of files\" [@fadeInOut]=\"file.state\">\r\n                      <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>\r\n                      <span id=\"file-label\">\r\n                        {{file.data.name}}\r\n                        <a title=\"Retry\" (click)=\"retryFile(file)\" *ngIf=\"file.canRetry\">\r\n                          <mat-icon>refresh</mat-icon>\r\n                        </a>\r\n                        <a title=\"Cancel\" (click)=\"cancelFile(file)\" *ngIf=\"file.canCancel\">\r\n                          <mat-icon>cancel</mat-icon>\r\n                        </a>\r\n                      </span>\r\n                    </li>\r\n                  </ul>\r\n                </mat-card>\r\n      </div>\r\n      <div>\r\n        <input type=\"file\" id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"{{accept}}\" style=\"display:none;\" />\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/create-certificate/create-certificate.scss":
/*!************************************************************!*\
  !*** ./src/app/create-certificate/create-certificate.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  width: 800px; }\n\n.example-container > * {\n  width: 100%; }\n\n.mat-form-field {\n  display: flow-root !important;\n  position: relative;\n  text-align: left; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.html":
/*!******************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{Title}}</h1>\r\n\r\n<mat-spinner *ngIf=\"isBusy\"></mat-spinner>\r\n\r\n<table mat-table [dataSource]=\"forecasts\" class=\"mat-elevation-z8\" *ngIf=\"!isBusy\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"customerIdentifier\">\r\n    <th mat-header-cell *matHeaderCellDef> Customer Identifier </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.customerIdentifier}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"vesselIdentifier\">\r\n    <th mat-header-cell *matHeaderCellDef> Vessel Identifier </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.vesselIdentifier}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"startDate\">\r\n    <th mat-header-cell *matHeaderCellDef> Start Date </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.startDate | date:'MM/dd/yyyy, HH:mm'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"endDate\">\r\n    <th mat-header-cell *matHeaderCellDef> End Date </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.endDate | date:'MM/dd/yyyy, HH:mm'}}</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"isValid\">\r\n      <th mat-header-cell *matHeaderCellDef> Valid </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.isValid}}</td>\r\n    </ng-container>\r\n\r\n  <ng-container matColumnDef=\"button1\">\r\n    <th mat-header-cell *matHeaderCellDef> View Certificate </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <a mat-raised-button color=\"primary\" (click)=\"getCertificateById(element)\">View Certificate</a>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.scss":
/*!******************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: inline-block; }\n\ntd {\n  padding-left: 7.5px;\n  padding-right: 7.5px;\n  background-color: transparent;\n  height: 40px;\n  border: 1px transparent;\n  width: 25%; }\n\ntd:first-child {\n  padding-left: 0; }\n\ntd:last-child {\n  padding-right: 0; }\n\ntable {\n  width: calc(100% + 30px);\n  table-layout: fixed;\n  border-spacing: 15px 0px;\n  background: transparent;\n  margin: 0px -15px; }\n"

/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
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




var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(http, baseUrl, route, authService) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.displayedColumns = ['customerIdentifier', 'vesselIdentifier', 'startDate', 'endDate', 'button1'];
        this.isBusy = true;
        this.getCertificateById = function (selectedItem) {
            var item = { "CustomerIdentifier": selectedItem.customerIdentifier, "VesselIdentifier": selectedItem.vesselIdentifier };
            var win = window.open(_this.baseUrl + "api/certificate/download/" + selectedItem.customerIdentifier);
            win.focus();
        };
        //http.get<CertificateModel[]>(baseUrl + 'api/certificate/').subscribe(result => {
        //  this.forecasts = result;
        //}, error => console.error(error));
        this.baseUrl = baseUrl;
        this.route.queryParams.subscribe(function (_) {
            _this.isBusy = true;
            if (_.username != undefined) {
                var header_1 = _this.authService.initAuthHeaders();
                var options_1 = { headers: header_1 };
                _this.Title = "My Certificates";
                http.get(baseUrl + 'api/certificate/' + _.username, options_1).subscribe(function (result) {
                    _this.forecasts = result;
                    _this.isBusy = false;
                }, function (error) { return console.error(error); });
            }
            else {
                _this.Title = "All Certificates";
                var header_2 = _this.authService.initAuthHeaders();
                var options_2 = { headers: header_2 };
                http.get(baseUrl + 'api/certificate/', options_2).subscribe(function (result) {
                    _this.forecasts = result;
                    _this.isBusy = false;
                }, function (error) { return console.error(error); });
            }
            var header = _this.authService.initAuthHeaders();
            var options = { headers: header };
            // http.get<number>(`${baseUrl}api/certificate/counttransaction`,options).subscribe(result => {
            //     this.badgeCountService.totalTransactions.next(result);
            // });
        });
    }
    FetchDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fetch-data',
            template: __webpack_require__(/*! ./fetch-data.component.html */ "./src/app/fetch-data/fetch-data.component.html"),
            styles: [__webpack_require__(/*! ./fetch-data.component.scss */ "./src/app/fetch-data/fetch-data.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FetchDataComponent);
    return FetchDataComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n  <!-- Main jumbotron for a primary marketing message or call to action -->\r\n  <mat-toolbar style=\"box-shadow: 0 1px 1px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);position: fixed;z-index: 1;\">\r\n        Microsoft Exchange Services\r\n\r\n        <h2 class=\"icon\">\r\n                <button mat-raised-button color=\"warn\" (click)=\"subscribe()\">Subscribe</button>\r\n                <button mat-fab mat-fab color=\"\" class=\"no-hover-effect\">\r\n                        <mat-icon style=\"color:gray\">notifications</mat-icon>\r\n                        <b matBadge=\"10\" matBadgeColor=\"warn\"></b>\r\n                    </button>\r\n                            \r\n                <a mat-icon-button class=\"small\" [matMenuTriggerFor]=\"matmenu\" (click)=\"userClick()\">\r\n                  <mat-icon>account_circle</mat-icon>\r\n                  <div style=\"color: black\">{{usercontext}}</div>\r\n                </a>\r\n\r\n                <mat-menu #matmenu=\"matMenu\" style=\"margin-top: 30px\">\r\n                    <button mat-menu-item >\r\n                        <mat-icon>flag</mat-icon>\r\n                        <span>\r\n                            View User Profile\r\n                        </span>\r\n                    </button>\r\n                    <button mat-menu-item >\r\n                        <mat-icon>flag</mat-icon>\r\n                        <span>\r\n                            Setings\r\n                        </span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"logout()\">\r\n                        <mat-icon>flag</mat-icon>\r\n                        <span>\r\n                            Logout\r\n                        </span>\r\n                    </button>\r\n                </mat-menu>\r\n            </h2>\r\n\r\n  </mat-toolbar>\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      \r\n      <h1 class=\"display-3\"></h1>\r\n      <div class=\"is-grouped\">\r\n          <!-- <button style=\"margin-right: 10px\" mat-raised-button color=\"primary\" (click)=\"createCertificate()\">Create Certificate</button> -->\r\n          <button style=\"margin-right: 10px\" mat-raised-button color=\"primary\" (click)=\"startGenesis()\">Send Email</button>\r\n          <!-- <button style=\"margin-right: 10px\" mat-raised-button (click)=\"navigateToAllTransactions()\">View Ledger Transactions\r\n              <span style=\"margin-right: 10px\" style=\"margin-bottom: 5px\" class=\"badge\">200</span></button>\r\n        <button style=\"margin-right: 10px\" mat-raised-button (click)=\"navigateToAllCertificates()\">View All Certificates\r\n            <span style=\"margin-right: 10px\" style=\"margin-bottom: 5px\" class=\"badge\">{{totalCertificates}}</span></button>\r\n        <button style=\"margin-right: 10px\" mat-raised-button (click)=\"navigateToMyCertificates()\">View My Certificates\r\n            <span style=\"margin-right: 10px\" style=\"margin-bottom: 5px\" class=\"badge\">1</span>\r\n        </button>\r\n        <button style=\"margin-right: 10px\" mat-raised-button (click)=\"validateCertificate()\">Validate Certificate</button> -->\r\n        \r\n        <!--<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Store Certificate</a>\r\n        <input type=\"file\" />-->\r\n        </div>\r\n    </div>\r\n    <div>\r\n      <ul>\r\n        <li *ngFor=\"let item of certificates\">\r\n          {{item.customerIdentifier}}\r\n          {{item.blockType}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Added to highlight spacing */\n.is-grouped {\n  display: inline-block;\n  background-color: transparent;\n  background: transparent; }\n.is-grouped > .button:not(:last-child) {\n  margin-right: 10px; }\n.icon {\n  display: inline;\n  position: absolute;\n  right: 60px;\n  top: 5px; }\n.mat-icon-button.small {\n  width: 40px;\n  height: 40px;\n  color: green;\n  line-height: 40px; }\n.mat-icon-button.small .mat-icon, .mat-icon-button.small .mat-icon-button i {\n    line-height: 40px; }\n.mat-icon-button.small .mat-icon {\n    width: 40px;\n    height: 40px; }\n.mat-icon-button.small .material-icons {\n    font-size: 40px; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent, CertificateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateModel", function() { return CertificateModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_badge_count_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/badge.count.service */ "./src/app/services/badge.count.service.ts");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
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






var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpClient, baseUrl, authService, badgeService, router) {
        var _this = this;
        this.httpClient = httpClient;
        this.baseUrl = baseUrl;
        this.authService = authService;
        this.badgeService = badgeService;
        this.router = router;
        this.showUserProfile = false;
        this.getAllCertificates = function () { return _this.httpClient
            .get(_this.baseUrl + "api/certificate")
            .subscribe(function (_) { return _this.certificates = _; }); };
        this.getCertificateById = function (id) {
            var win = window.open(_this.baseUrl + "api/certificate/1", "_blank");
            win.focus();
        };
        // this.authService.getUserInfo$().subscribe(_ => {
        //   this.usercontext = _.data.userName;
        // });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HubConnectionBuilder"]()
            .withUrl(this.baseUrl + "exchange")
            .build();
        connection.on("send", function (data) {
            console.log(data);
        });
        connection.start()
            .then(function () {
            console.log("Connected");
        });
    };
    HomeComponent.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'text/pdf' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    HomeComponent.prototype.userClick = function () {
        this.showUserProfile = !this.showUserProfile;
    };
    HomeComponent.prototype.navigateToMyCertificates = function () {
        var username = JSON.parse(localStorage.getItem('currentUser')).username;
        //var user = JSON.parse(currentUser.id).username;
        this.router.navigate(['/fetch-data'], { queryParams: { username: username } });
    };
    HomeComponent.prototype.navigateToAllCertificates = function () {
        this.router.navigate(['/fetch-data']);
    };
    HomeComponent.prototype.navigateToAllTransactions = function () {
        this.router.navigate(['/transactions']);
    };
    HomeComponent.prototype.validateCertificate = function () {
        this.router.navigate(['/certificate-validator']);
    };
    HomeComponent.prototype.createCertificate = function () {
        this.router.navigate(['/create-certificate']);
    };
    HomeComponent.prototype.subscribe = function () {
        var header = this.authService.initAuthHeaders();
        var options = { headers: header };
        var body = JSON.stringify({ "Recipients": "olteanurd@gmail.com", "Subject": "Hello", "MessageBodyText": "Hellooo" });
        this.httpClient.post(this.baseUrl + "api/Exchange/Subscribe", options).subscribe(function (result) {
            var res = result;
        }, function (error) { return console.error(error); });
    };
    HomeComponent.prototype.startGenesis = function () {
        var header = this.authService.initAuthHeaders();
        var options = { headers: header };
        var body = JSON.stringify({ "Recipients": "olteanurd@gmail.com", "Subject": "Hello", "MessageBodyText": "Hellooo" });
        this.httpClient.post(this.baseUrl + "api/Exchange/Email", body, options).subscribe(function (result) {
            var res = result;
        }, function (error) { return console.error(error); });
    };
    ;
    HomeComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_badge_count_service__WEBPACK_IMPORTED_MODULE_4__["BadgeCountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());

var CertificateModel = /** @class */ (function () {
    function CertificateModel() {
    }
    return CertificateModel;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/home-layout.component.ts ***!
  \**************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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





var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent(router, http, baseUrl, authService) {
        this.router = router;
        this.http = http;
        this.baseUrl = baseUrl;
        this.authService = authService;
        this.asd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var header = this.authService.initAuthHeaders();
        var options = { headers: header };
        // authService.isAdmin().subscribe(_ => this.isAdmin = _);
        // this.http
        //     .get<number>(`${this.baseUrl}api/certificate/counttransaction`,options)
        //     .subscribe(result => this.totalTransactions = result);
        // this.http
        //     .get<number>(`${this.baseUrl}api/certificate/countcertificates`,options)
        //     .subscribe(result => this.totalCertificates = result);
        // this.http.get<number>(`${this.baseUrl}api/certificate/countusercertificates`,options).subscribe(result => {
        //     this.myCertificates = result;
        //     }, error => console.error(error)); 
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
        //this.drawer.openedChange.subscribe((o : boolean) => window.alert(`${o}`));
    };
    HomeLayoutComponent.prototype.navigateToMyCertificates = function () {
        // this.authService.getUserInfo$().subscribe(_ => {
        //   this.router.navigate(['/fetch-data'], { queryParams: { username: _.data.userId } })
        //});
    };
    HomeLayoutComponent.prototype.onOpen = function () {
        var header = this.authService.initAuthHeaders();
        var options = { headers: header };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"])
    ], HomeLayoutComponent.prototype, "drawer", void 0);
    HomeLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__(/*! ./home.layout.component.html */ "./src/app/layouts/home.layout.component.html"),
            styles: [__webpack_require__(/*! ./home.layout.component.scss */ "./src/app/layouts/home.layout.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String, _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/home.layout.component.html":
/*!****************************************************!*\
  !*** ./src/app/layouts/home.layout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-drawer-container class=\"example-container\"  autosize>\r\n    <mat-drawer #drawer class=\"custom-sidenav\" mode=\"side\" (opened)=\"onOpen()\">\r\n        <div>\r\n      <button routerLink=\"/\" routerLinkActive=\"active\"\r\n       style=\"margin-top: 50px\" mat-button class=\"small\" (click)=\"showFiller = !showFiller\" >\r\n        <mat-icon style=\"color: red\">home</mat-icon>\r\n      <b style=\"margin-left: 20px\">Home</b>\r\n      </button>\r\n    </div>\r\n     <div>\r\n      <button routerLink=\"/users\" routerLinkActive=\"active\" style=\"margin-top: 20px\" mat-button class=\"small\" (click)=\"showFiller = !showFiller\" >\r\n        <mat-icon style=\"color:gray\">perm_identity</mat-icon>\r\n        <b style=\"margin-left: 10px\">Users</b>\r\n      </button>\r\n    </div> \r\n      <!-- <div *ngIf=\"isAdmin\">\r\n            <button routerLink=\"/fetch-data\" routerLinkActive=\"active\" style=\"margin-top: 20px\" mat-button class=\"small\" (click)=\"showFiller = !showFiller\" >\r\n                <mat-icon  matBadge=\"{{totalCertificates}}\" matBadgePosition=\"before\" matBadgeColor=\"accent\"  style=\"color:gray;\">description</mat-icon>\r\n              <b style=\"margin-left: 20px\">Certificates</b>\r\n              </button>\r\n      </div>\r\n      <div>\r\n            <button (click)=\"navigateToMyCertificates()\"  routerLinkActive=\"active\" style=\"margin-top: 20px\" mat-button class=\"small\" (click)=\"showFiller = !showFiller\" >\r\n                <mat-icon  matBadge=\"{{myCertificates}}\" matBadgePosition=\"before\" matBadgeColor=\"accent\"  style=\"color:gray\">description</mat-icon>\r\n              <b style=\"margin-left: 20px\">My Certificates</b>\r\n              </button>\r\n      </div>\r\n      <div>\r\n            <button routerLink=\"/certificate-validator\" routerLinkActive=\"active\" style=\"margin-top: 20px\" mat-button class=\"small\" (click)=\"showFiller = !showFiller\" >\r\n                <mat-icon  style=\"color:black\">check</mat-icon>\r\n              <b style=\"margin-left: 20px\">Validate Certificate</b>\r\n              </button>\r\n      </div> -->\r\n    </mat-drawer>\r\n  \r\n    <div class=\"example-sidenav-content\">\r\n            <h2>\r\n                    <a mat-icon-button (click)=\"drawer.toggle()\">\r\n                            <mat-icon style=\"color: gray\">menu</mat-icon>\r\n                        </a>\r\n            </h2>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-drawer-container> \r\n   "

/***/ }),

/***/ "./src/app/layouts/home.layout.component.scss":
/*!****************************************************!*\
  !*** ./src/app/layouts/home.layout.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-sidenav-content {\n  display: flex;\n  height: 2000px;\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.custom-sidenav {\n  padding: 20px;\n  height: 100%;\n  background: whitesmoke; }\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n.example-events {\r\n    width: 300px;\r\n    height: 200px;\r\n    overflow: auto;\r\n    border: 1px solid #555;\r\n  }\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header'>\r\n      <a class='navbar-brand' [routerLink]='[\"/\"]'>Block Chain</a>\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse' [ngClass]='{ \"in\": isExpanded }'>\r\n      <ul class='nav navbar-nav'>\r\n        <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n          <a [routerLink]='[\"/\"]' (click)='collapse()'>\r\n            <span class='glyphicon glyphicon-home'></span> Home\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" [routerLink]='[\"/\"]' [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\r\n    (closed)=\"events.push('close!')\">\r\nSidenav content\r\n</mat-sidenav>\r\n<mat-sidenav-content>\r\n    <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\r\n    <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\r\n    <p>Events:</p>\r\n    <div class=\"example-events\">\r\n      <div *ngFor=\"let e of events\">{{e}}</div>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>  -->\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/services/badge.count.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/badge.count.service.ts ***!
  \*************************************************/
/*! exports provided: BadgeCountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeCountService", function() { return BadgeCountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BadgeCountService = /** @class */ (function () {
    function BadgeCountService() {
        this.totalTransactions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.totalCertificates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.myCertificates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    BadgeCountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BadgeCountService);
    return BadgeCountService;
}());



/***/ }),

/***/ "./src/app/transactions/app-transactions.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transactions/app-transactions.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{Title}}</h1>\r\n\r\n<mat-spinner *ngIf=\"isBusy\"></mat-spinner>\r\n<div class=\"content\">\r\n        <form class=\"example-form\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Block Type\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n                  <mat-autocomplete #auto=\"matAutocomplete\">\r\n                    <mat-option (click)=\"getTransactionByType(state)\" *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\r\n                      <span>{{ state }}</span> |\r\n                      <small>Block Type: {{state}}</small>\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n                <br />\r\n              </form>\r\n<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\" *ngIf=\"!isBusy\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"blockType\">\r\n    <th mat-header-cell *matHeaderCellDef> Block Type </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.blockType}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"created\">\r\n    <th mat-header-cell *matHeaderCellDef> Creation Time </th>\r\n    <td  mat-cell *matCellDef=\"let element\"> {{element.created | date:'MM/dd/yyyy, HH:mm'}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"button1\">\r\n    <th mat-header-cell *matHeaderCellDef> Transaction Details </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <a mat-raised-button color=\"primary\" (click)=\"viewTransactionDetails(element)\">View Transaction Info</a>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n</div>"

/***/ }),

/***/ "./src/app/transactions/app-transactions.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/transactions/app-transactions.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: inline-block; }\n\ntd {\n  padding-left: 7.5px;\n  padding-right: 7.5px;\n  background-color: transparent;\n  height: 40px;\n  border: 1px transparent;\n  width: 25%; }\n\ntd:first-child {\n  padding-left: 0; }\n\ntd:last-child {\n  padding-right: 0; }\n\ntable {\n  width: calc(100% + 30px);\n  table-layout: fixed;\n  border-spacing: 15px 0px;\n  background: transparent;\n  margin: 0px -15px; }\n\n.example-full-width {\n  width: 100%; }\n\n.mat-elevation-z8 {\n  overflow: hidden;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/transactions/dialog-overview-transaction-dialog.html":
/*!**********************************************************************!*\
  !*** ./src/app/transactions/dialog-overview-transaction-dialog.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Transaction Details for Transaction {{data.result.id}}</h2>\r\n\r\n<div class=\"example-container\">\r\n        <mat-form-field  class=\"example-full-width\">\r\n          <input  [(ngModel)]=\"data.result.from\" readonly=true matInput placeholder=\"Source\">\r\n        </mat-form-field>\r\n      <mat-icon>arrow_right_alt</mat-icon>\r\n        <mat-form-field class=\"example-full-width\">\r\n           <input [(ngModel)]=\"data.result.to\" readonly=true matInput placeholder=\"Target\" value=\"Test\">\r\n        </mat-form-field>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transactions/dialog-overview-transaction-dialog.scss":
/*!**********************************************************************!*\
  !*** ./src/app/transactions/dialog-overview-transaction-dialog.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: State, TransactionsComponent, TransactionViewModel, TransactionDetailsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionViewModel", function() { return TransactionViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsDialogComponent", function() { return TransactionDetailsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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






var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());

var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(http, baseUrl, route, dialog) {
        var _this = this;
        this.baseUrl = baseUrl;
        this.route = route;
        this.dialog = dialog;
        this.isBusy = true;
        this.states = [];
        this.displayedColumns = ['blockType', 'created', 'button1'];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.http = http;
        this.route.queryParams.subscribe(function (_) {
            _this.Title = "Transactions";
            http.get(_this.baseUrl + "api/certificate/Transaction")
                .subscribe(function (result) {
                _this.transactions = result;
                _this.isBusy = false;
                var s = [];
                _this.transactions.forEach(function (_) { return s.push(_.blockType); });
                _this.states = Array.from(new Set(s));
                // this.filteredStates(this.states);
                _this.filteredStates = _this.stateCtrl.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
            }, function (error) { return console.error(error); });
        });
    }
    TransactionsComponent.prototype.formatDate = function (date) {
        debugger;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    };
    TransactionsComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    TransactionsComponent.prototype.viewTransactionDetails = function (selectedCertificate) {
        var dialogRef = this.dialog.open(TransactionDetailsDialogComponent, {
            data: {
                result: selectedCertificate
            }
        });
    };
    TransactionsComponent.prototype.getTransactionByType = function (state) {
        var _this = this;
        this.isBusy = true;
        this.http.get(this.baseUrl + "api/certificate/transaction/" + state).subscribe(function (result) {
            _this.transactions = result;
            _this.isBusy = false;
        }, function (error) { return console.error(error); });
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./app-transactions.component.html */ "./src/app/transactions/app-transactions.component.html"),
            styles: [__webpack_require__(/*! ./app-transactions.component.scss */ "./src/app/transactions/app-transactions.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());

var TransactionViewModel = /** @class */ (function () {
    function TransactionViewModel() {
    }
    return TransactionViewModel;
}());

var TransactionDetailsDialogComponent = /** @class */ (function () {
    function TransactionDetailsDialogComponent(data) {
        this.data = data;
    }
    TransactionDetailsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-transaction-dialog.html */ "./src/app/transactions/dialog-overview-transaction-dialog.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-transaction-dialog.scss */ "./src/app/transactions/dialog-overview-transaction-dialog.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], TransactionDetailsDialogComponent);
    return TransactionDetailsDialogComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"box-shadow: 0 1px 1px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);position: fixed;z-index: 1;\">\r\n    {{Title}}\r\n    </mat-toolbar>\r\n\r\n<mat-spinner *ngIf=\"isBusy\"></mat-spinner>\r\n\r\n<table mat-table [dataSource]=\"users\" class=\"mat-elevation-z8\" *ngIf=\"!isBusy\">\r\n\r\n        <ng-container matColumnDef=\"userName\">\r\n                <th mat-header-cell *matHeaderCellDef> UserName </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.userName}}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"email\">\r\n                    <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.email}}</td>\r\n                  </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: inline-block; }\n\ntd {\n  padding-left: 7.5px;\n  padding-right: 7.5px;\n  background-color: transparent;\n  height: 40px;\n  border: 1px transparent;\n  width: 25%; }\n\ntable {\n  width: calc(100% + 30px);\n  table-layout: fixed;\n  border-spacing: 15px 0px;\n  background: transparent; }\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, baseUrl, route, authService) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.isBusy = true;
        this.displayedColumns = ['userName', 'email'];
        this.Title = "Users";
        var header = this.authService.initAuthHeaders();
        var options = { headers: header };
        http.get(baseUrl + 'api/user/users', options).subscribe(function (result) {
            _this.users = result;
            _this.isBusy = false;
        }, function (error) { return console.error(error); });
    }
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UsersComponent);
    return UsersComponent;
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
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return "/";
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\radu.olteanu\source\repos\PulseAPI\PulseAPI\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map