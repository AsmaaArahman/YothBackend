(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <a href=\"/logout\">تسجيل خروج</a> -->\n\n<mat-toolbar color=\"primary\">\n    <a routerLink=\"/projects\" mat-raised-button color=\"accent\" class=\"mx-3\">عرض المشاريع</a>\n    <a routerLink=\"/add\" mat-raised-button color=\"accent\" class=\"mx-3\">إضافة مشروع</a>\n    <a href=\"/logout\" mat-raised-button color=\"accent\" class=\"mx-3\">تسجيل الخروج</a>\n\n    <span class=\"spacer\"></span>\n        <div class=\"pu-brand brand\">\n\t<img alt=\"\" src=\"/assets/pu.png\"/>\n    </div>\n\t<div class=\"mx-2\"></div>\n    <div class=\"sohaguni-brand brand\">\n\t<img alt=\"\" src=\"/assets/sohagunilogo.png\"/>\n    </div>\n\n</mat-toolbar>\n\n\n\n\n<router-outlet></router-outlet>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/add/add.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/add/add.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-container\">\n    <mat-card color=\"primary\">\n\t<mat-card-header   style=\"direction:rtl\">\n\n\t    <mat-card-title>\n\t\t<h1 class=\"main-header\">{{isNew ? \"إضافة مشروع\" : \"تعديل مشروع\"}}</h1>\n            </mat-card-title>\n\t</mat-card-header>\n\n\t<mat-card-content>\n            <!-- <p>{{ress|json}}</p> -->\n            <div class=\"wrap\">\n\t\t<div class=\"alert alert-danger\" *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n\t\t    <ul>\n\t\t\t<li  *ngIf=\"name.errors?.required\" >اسم المشروع مطلوب</li>\n\t\t    </ul>\n\t\t</div>\n\t\t<mat-form-field appearance=\"outline\" class=\"w-50\">\n                    <input matInput  [(ngModel)]=\"project.name\" #name=\"ngModel\" required placeholder=\"اسم المشروع\">\n\t\t</mat-form-field>\n\n\t    </div>\n\t    \n            \n\t    \n            <!-- <div class=\"wrap\"> -->\n\t    <!-- \t<mat-form-field appearance=\"outline\" class=\"w-50\"> -->\n            <!--         <input matInput [(ngModel)]=\"project.field\" placeholder=\"المجال\"> -->\n\t    <!-- \t</mat-form-field> -->\n\t\t<!-- </div> -->\n\n\t    <mat-form-field appearance=\"outline\">\n\t\t<mat-label>المجال</mat-label>\n\t\t<mat-select [(ngModel)]=\"project.field\">\n\t\t    <mat-option *ngFor=\"let field of fieldOptions\" [value]=\"field\" >\n\t\t\t{{field}}\n\t\t    </mat-option>\n\t\t</mat-select>\n\t    </mat-form-field>\n            \n\n            <div class=\"wrap \">\n\t\t<mat-form-field appearance=\"outline\" class=\"w-50\">\n                    <input matInput placeholder=\"الهدف من المشروع\" [(ngModel)]=\"objective\" (keydown.enter)=\"add.objective()\">\n\t\t</mat-form-field>\n\t\t<!-- <button mat-mini-fab color=\"accent\" style=\"border-radius: 10%\"> -->\n\t\t    <img style=\"cursor: pointer;\" class=\"mx-1\" (click)=\"add.objective()\" src=\"assets/add/add.svg\" onerror=\"this.onerror=null; this.src='assets/add/1x/add.png'\">\n\t\t    <!-- <mat-icon>add</mat-icon> -->\n\t\t<!-- </button> -->\n\t\t<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n                    <mat-chip *ngFor=\"let obj of project.objectives;let i = index\" selected (click)=\"delete.objective(i)\" [color]=\"objectivesColor[i]\" (mouseover)=\"objectivesColor[i]='warn';\" (mouseout)=\"objectivesColor[i]='primary';\">\n\t\t\t{{obj.objective}}\n                    </mat-chip>\n\t\t</mat-chip-list>\n            </div>\n\n            \n\n            <div class=\"wrap \">\n\t\t<mat-form-field appearance=\"outline\" (click)=\"picker.open()\" class=\"w-50\">\n                    <input matInput [(ngModel)]=\"project.date\" [matDatepicker]=\"picker\" placeholder=\"موعد التنفيذ\" disabled>\n                    <mat-datepicker-toggle matPrefix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n\t\t</mat-form-field>\n            </div>\n\n            \n\n\n            <div class=\"wrap\">\n\t\t<mat-form-field appearance=\"outline\" class=\"w-50\">\n                    <input matInput [(ngModel)]=\"project.place\" placeholder=\"مكان التنفيذ\">\n\t\t</mat-form-field>\n            </div>\n\n            \n\n\n            <div class=\"wrap\">\n\t\t<h3>عدد المستفيدين</h3>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput [(ngModel)]=\"project.targeted_boys\" type=\"number\" placeholder=\"طالب\">\n\t\t</mat-form-field>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput [(ngModel)]=\"project.targeted_girls\" type=\"number\" placeholder=\"طالبه\">\n\t\t</mat-form-field>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput [(ngModel)]=\"project.targeted_staff\" type=\"number\" placeholder=\"عضو هيئة تدريس\">\n\t\t</mat-form-field>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n\t\t    <input matInput [(ngModel)]=\"project.targeted_specialneeds\" type=\"number\" placeholder=\"ذوي الاحتياجات الخاصة\">\n\t\t</mat-form-field>\n\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput [(ngModel)]=\"project.targeted_others\" type=\"number\" placeholder=\"عاملين\">\n\t\t</mat-form-field>\n            </div>\n\n            \n\n            <div class=\"wrap\">\n\t\t<mat-form-field appearance=\"outline\">\n                    <input matInput placeholder=\"الجهات الخارجية المشاركة\" [(ngModel)]=\"partner\" (keydown.enter)=\"add.partner()\">\n\t\t</mat-form-field>\n\t\t<img (click)=\"add.partner()\" src=\"assets/add/add.svg\" onerror=\"this.onerror=null; this.src='assets/add/1x/add.png'\">\n\t\t<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n                    <mat-chip *ngFor=\"let obj of project.outside_partners;let i = index\" selected (click)=\"delete.partner(i)\" [color]=\"partnersColor[i]\" (mouseover)=\"partnersColor[i]='warn';\" (mouseout)=\"partnersColor[i]='primary';\">\n\t\t\t{{obj.partner}}\n                    </mat-chip>\n\t\t</mat-chip-list>\n            </div>\n\n\n            \n\n\n            <div class=\"wrap\">\n\t\t<mat-form-field appearance=\"outline\">\n                    <input matInput placeholder=\"البرنامج التفصيلى للمشروع\" [(ngModel)]=\"program\" (keydown.enter)=\"add.program()\">\n\t\t</mat-form-field>\n\t\t<img (click)=\"add.program()\" src=\"assets/add/add.svg\" onerror=\"this.onerror=null; this.src='assets/add/1x/add.png'\">\n\t\t<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n                    <mat-chip *ngFor=\"let obj of project.programs;let i = index\" selected (click)=\"delete.program(i);\" [color]=\"programsColor[i]\" (mouseover)=\"programsColor[i]='warn';\" (mouseout)=\"programsColor[i]='primary';\">\n\t\t\t{{obj.program}}\n                    </mat-chip>\n\t\t</mat-chip-list>\n            </div>\n\n            \n\n\n            <div class=\"wrap\">\n\t\t<h3>تفاصيل الموازنة التقديرية للمشروع</h3>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput placeholder=\"البيان\" [(ngModel)]=\"financial.name\" (keydown.enter)=\"financial.add();\">\n\t\t</mat-form-field>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput type=\"number\" placeholder=\"الميزانية المقترحة\" [(ngModel)]=\"financial.budget\" (keydown.enter)=\"financial.add();\">\n\t\t</mat-form-field>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput placeholder=\"نوع الدعم\" [(ngModel)]=\"financial.type\" (keydown.enter)=\"financial.add();\">\n\t\t</mat-form-field>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput placeholder=\"ملاحظات\" [(ngModel)]=\"financial.notes\" (keydown.enter)=\"financial.add();\">\n\t\t</mat-form-field>\n\n\t\t<img (click)=\"financial.add();\" src=\"assets/add/add.svg\" onerror=\"this.onerror=null; this.src='assets/add/1x/add.png'\">\n\n\n\t\t<mat-table [dataSource]=\"dataSource\" *ngIf=\"project.financials.length!=0\">\n                    <ng-container matColumnDef=\"name\">\n\t\t\t<mat-header-cell *matHeaderCellDef> البيان\n\t\t\t</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"budget\">\n\t\t\t<mat-header-cell *matHeaderCellDef> الميزانية المقترحة</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.budget}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"type\">\n\t\t\t<mat-header-cell *matHeaderCellDef> نوع الدعم</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"notes\">\n\t\t\t<mat-header-cell *matHeaderCellDef> ملاحظات</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.notes}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"delete\">\n\t\t\t<mat-header-cell *matHeaderCellDef> حذف</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element; let i = index;\"><img (click)=\"financial.delete(i)\" src=\"assets/delete/delete.svg\" onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">\n\t\t\t</mat-cell>\n                    </ng-container>\n\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t</mat-table>\n\n            </div>\n\n            \n\n            <div class=\"wrap\">\n\t\t<h3>الجوائز</h3>\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput placeholder=\"الاسم\" [(ngModel)]=\"reward.name\" (keydown.enter)=\"reward.add();\">\n\t\t</mat-form-field>\n\n\t\t<!-- <mat-form-field appearance=\"outline\" class=\"mx-1\"> -->\n                    <!-- <input matInput placeholder=\"المركز\" [(ngModel)]=\"reward.type\" (keydown.enter)=\"reward.add();\"> -->\n\t\t<!-- </mat-form-field> -->\n\t\t<mat-form-field appearance=\"outline\">\n\t\t    <mat-label>المركز</mat-label>\n\t\t    <mat-select [(ngModel)]=\"reward.type\">\n\t\t\t<mat-option *ngFor=\"let rank of rewardRanks\" [value]=\"rank\" >\n\t\t\t    {{rank}}\n\t\t\t</mat-option>\n\t\t    </mat-select>\n\t    </mat-form-field>\n\n\t\t\n\t\t<mat-form-field appearance=\"outline\" class=\"mx-1\">\n                    <input matInput placeholder=\"ملاحظات\" [(ngModel)]=\"reward.notes\" (keydown.enter)=\"reward.add();\">\n\t\t</mat-form-field>\n\n\t\t<img (click)=\"reward.add();\" src=\"assets/add/add.svg\" onerror=\"this.onerror=null; this.src='assets/add/1x/add.png'\">\n\n\t\t<mat-table [dataSource]=\"dataSources\" *ngIf=\"project.rewards.length!=0\">\n                    <ng-container matColumnDef=\"name\">\n\t\t\t<mat-header-cell *matHeaderCellDef> الاسم\n\t\t\t</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n                    </ng-container>\n\n                    <!-- <ng-container matColumnDef=\"fac\"> -->\n\t\t    <!-- \t<mat-header-cell *matHeaderCellDef> الكلية</mat-header-cell> -->\n\t\t    <!-- \t<mat-cell *matCellDef=\"let element\"> {{element.fac}} </mat-cell> -->\n                    <!-- </ng-container> -->\n\n                    <ng-container matColumnDef=\"type\">\n\t\t\t<mat-header-cell *matHeaderCellDef> المركز</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"notes\">\n\t\t\t<mat-header-cell *matHeaderCellDef> ملاحظات</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.notes}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"delete\">\n\t\t\t<mat-header-cell *matHeaderCellDef> حذف</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element; let i = index;\"><img (click)=\"reward.delete(i)\" src=\"assets/delete/delete.svg\" onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">\n\t\t\t</mat-cell>\n                    </ng-container>\n\n                    <mat-header-row *matHeaderRowDef=\"displayedColumnss\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumnss;\"></mat-row>\n\t\t</mat-table>\n            </div>\n\n\n\t    <mat-divider></mat-divider>\n\n\t    \n            <div class=\"wrap\" style=\"padding:40px 0\">\n\t\t\t    <h3>اختيار الصور</h3>\n\n\t\t<form (ngSubmit)=\"upload()\">\n                    <input type=\"hidden\" name=\"size\" value=\"1000000\">\n                    <div>\n\t\t\t<input type=\"file\" name=\"image[]\" accept=\"image/*\" multiple (change)=\"onFileSelected($event)\">\n\t\t\t<!-- <button mat-flat-button color=\"primary\" type=\"submit\" name=\"upload\">تحميل الصور</button> -->\n\n                    </div>\n\t\t    <p *ngIf=\"uploading\">جاري رفع الصور وحفظ المشروع...</p>\n\t\t    <mat-progress-bar *ngIf=\"uploading\" mode=\"query\"></mat-progress-bar>\n\t\t    \n\n\t\t</form>\n            </div>\n\n\n\n            <!-- <h3 *ngIf=\"project.images.length!=0\">الصور</h3> -->\n            <div>\n\t\t<img style=\"width:200px\" *ngFor=\"let imgg of project.images; let i = index\" [src]=\"img(imgg.uri)\" (click)=\"rmImg(imgg.uri)\" alt=\"\">\n            </div>\n            <!-- <hr> -->\n\t</mat-card-content>\n\t\n\t<mat-divider inset></mat-divider>\n\n\t<mat-card-actions>\n            <button mat-raised-button color=\"primary\"  class=\"w-100\" \n\t\t    [disabled]=\"uploading\" (click)=\"upload()\">حفظ</button>\n\t</mat-card-actions>\n\n    </mat-card>\n</div>\n\n<!-- <p>{{res|json}}</p>\n     <p>{{project|json}}</p> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/add/delete.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/add/delete.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 dir=\"rtl\" mat-dialog-title>حذف!!</h1>\n<div dir=\"rtl\" mat-dialog-content>\n    <h3>هل انت متأكد من حذف الصورة</h3>\n    <h2 style=\"color: brown\" color=\"warn\"><strong>سيتم حذف الصورة نهائياً ولا يمكن استرجاعها</strong></h2>\n    <img [src]=\"img(data.uri)\" alt=\"\">\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"action(false)\">الغاء</button>\n    <button mat-flat-button color=\"warn\" (click)=\"action(true)\">حذف</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/data.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/data.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <div id=\"paginator\" class=\"wrap\"> -->\n    <!--     <button mat-flat-button [disabled]=\"query.current_page == 1\" (click)=\"search(1);\"> -->\n\t<!--         <mat-icon class=\"mat-icon-rtl-mirror\" [style.color]=\"(query.current_page == 1) ? 'black' : 'white'\" -->\n\t<!--             onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">first_page -->\n\t    <!--         </mat-icon> -->\n\t<!--     </button> -->\n    <!--     <button mat-flat-button [disabled]=\"query.current_page == 1\" (click)=\"search(query.current_page - 1);\"> -->\n\t<!--         <mat-icon class=\"mat-icon-rtl-mirror\" [style.color]=\"(query.current_page == 1) ? 'black' : 'white'\" -->\n\t<!--             onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">chevron_left -->\n\t    <!--         </mat-icon> -->\n\t<!--     </button> -->\n    <!--     <button mat-flat-button [disabled]=\"query.current_page == query.last_page\" (click)=\"search(query.current_page + 1);\"> -->\n\t<!--         <mat-icon class=\"mat-icon-rtl-mirror\" -->\n\t<!--             [style.color]=\"(query.current_page == query.last_page) ? 'black' : 'white'\" -->\n\t<!--             onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">chevron_right -->\n\t    <!--         </mat-icon> -->\n\t<!--     </button> -->\n    <!--     <button mat-flat-button [disabled]=\"query.current_page == query.last_page\" (click)=\"search(query.last_page);\"> -->\n\t<!--         <mat-icon class=\"mat-icon-rtl-mirror\" -->\n\t<!--             [style.color]=\"(query.current_page == query.last_page) ? 'black' : 'white'\" -->\n\t<!--             onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">last_page -->\n\t    <!--         </mat-icon> -->\n\t<!--     </button> -->\n    <!-- </div> -->\n\n\n<mat-card class=\"my-4 mx-4\">\n\n    <mat-card-header>\n<div class=\"wrap\" style=\"float: right\">\n    \n    <mat-form-field appearance=\"legacy\" class=\"w-50\">\n        <input matInput [(ngModel)]=\"query.filter\" placeholder=\"بحث\">\n    </mat-form-field>\n    <mat-form-field appearance=\"legacy\" class=\"w-50\">\n        <input matInput type=\"number\" [(ngModel)]=\"query.per\" placeholder=\"العدد لكل صفحة\">\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" (click)=\"search(1);\">بحث</button>\n</div>\n\n    </mat-card-header>\n    <div class=\"data\" *ngIf=\"res.type; else error\">\n    <table  mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n\t<ng-container matColumnDef=\"index\">\n            <th mat-header-cell *matHeaderCellDef> م </th>\n            <td mat-cell (click)=\"showForm(element)\" *matCellDef=\"let element;\"> {{element.index + query.index}} </td>\n\t</ng-container>\n\n\t<ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> اسم المشروع </th>\n            <td mat-cell (click)=\"showForm(element)\" *matCellDef=\"let element\"> {{element.name}} </td>\n\t</ng-container>\n\n\t<ng-container matColumnDef=\"field\">\n            <th mat-header-cell *matHeaderCellDef> المجال </th>\n            <td mat-cell (click)=\"showForm(element)\" *matCellDef=\"let element\"> {{element.field}} </td>\n\t</ng-container>\n\n\t<ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> تاريخ التنفيذ </th>\n            <td mat-cell (click)=\"showForm(element)\" *matCellDef=\"let element\"> {{element.date}} </td>\n\t</ng-container>\n\n\t<ng-container matColumnDef=\"dateCreated\">\n            <th mat-header-cell *matHeaderCellDef> تاريخ التسجيل </th>\n            <td mat-cell (click)=\"showForm(element)\" *matCellDef=\"let element\"> {{element.dateCreated}} </td>\n\t</ng-container>\n\n\t<ng-container matColumnDef=\"edit\">\n            <th mat-header-cell *matHeaderCellDef> تعديل </th>\n            <td mat-cell *matCellDef=\"let element\">\n\t\t<a [routerLink]=\"[ '/edit/',element.id ]\">\n                    <button mat-flat-button color=\"accent\">\n\t\t\t<mat-icon style=\"color:white\" onerror=\"this.onerror=null; this.src='assets/edit/1x/edit.png'\">edit\n\t\t\t</mat-icon>\n                    </button>\n                    <!-- <img src=\"assets/edit/edit.svg\" onerror=\"this.onerror=null; this.src='assets/edit/1x/edit.png'\"> -->\n\t\t</a>\n            </td>\n\t</ng-container>\n\n\t<ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> حذف </th>\n            <td mat-cell *matCellDef=\"let element;\">\n\t\t<button mat-flat-button (click)=\"deleteForm(element)\" color=\"warn\">\n                    <mat-icon style=\"color:white\" onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">delete\n                    </mat-icon>\n\t\t</button>\n\t\t<!-- <img (click)=\"deleteForm(element)\" src=\"assets/delete/delete.svg\" onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\"> -->\n            </td>\n\t</ng-container>\n\n\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n<!--NOTE(walid): I commented out the first and the last page, cause I didn't see them very important; -->\n<div id=\"paginator\" class=\"wrap\" style=\"float: left; display: flex\">\n    <!-- <button mat-flat-button [disabled]=\"query.current_page == 1\" (click)=\"search(1);\"> -->\n        <!-- <mat-icon class=\"mat-icon-rtl-mirror\" [style.color]=\"(query.current_page == 1) ? 'black' : 'white'\" -->\n        <!-- onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">first_page -->\n            <!-- </mat-icon> -->\n\t<!-- </button> -->\n\n    <button color=\"primary\" mat-flat-button [disabled]=\"query.current_page == 1\" (click)=\"search(query.current_page - 1);\">\n        <mat-icon class=\"mat-icon-rtl-mirror\" [style.color]=\"(query.current_page == 1) ? 'black' : 'white'\"\n\t\t  onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">chevron_left\n        </mat-icon>\n    </button>\n    <button color=\"primary\" mat-flat-button [disabled]=\"query.current_page == query.last_page\" (click)=\"search(query.current_page + 1);\" >\n        <mat-icon class=\"mat-icon-rtl-mirror\"\n\t\t  [style.color]=\"(query.current_page == query.last_page) ? 'black' : 'white'\"\n\t\t  onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">chevron_right\n        </mat-icon>\n    </button>\n\n    <!-- <button mat-flat-button [disabled]=\"query.current_page == query.last_page\" (click)=\"search(query.last_page);\"> -->\n        <!-- <mat-icon class=\"mat-icon-rtl-mirror\" -->\n        <!-- [style.color]=\"(query.current_page == query.last_page) ? 'black' : 'white'\" -->\n        <!-- onerror=\"this.onerror=null; this.src='assets/delete/1x/delete.png'\">last_page -->\n            <!-- </mat-icon> -->\n\t<!-- </button> -->\n\n</div>\n\n    </div>\n    \n    \n    <div style=\"margin: 100px auto;\">\n    <mat-spinner  *ngIf=\"!res.type\"></mat-spinner>\n    </div>\n\n</mat-card>\n\n<!-- <h2>{{res.meta | json}}</h2> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/delete.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/delete.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 dir=\"rtl\" mat-dialog-title>حذف!!</h1>\n<div dir=\"rtl\" mat-dialog-content>\n    <p>هل انت متأكد من حذف \"{{data.element.name}}\"</p>\n    <p>ادخل العبارة التالية : <span>حذف</span></p>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"validation\">\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"action(false)\">الغاء</button>\n    <button [disabled]=\"!(validation==='حذف')\" mat-flat-button color=\"warn\" (click)=\"action(true)\">حذف</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/show.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/show.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"text-align:center; font-family: Cairo, Sans-Serif\" dir=\"rtl\" mat-dialog-title>{{data.element.name}}</h1>\n<div dir=\"\" mat-dialog-content>\n    <!-- <p>{{data | json}}</p> -->\n    <table class=\"table table-striped\" class=\"box1\">\n        <tr>\n            <td>كليه</td>\n            <td colspan=\"3\">\n                <p>{{data.element.faculty}}</p>\n            </td>\n        </tr>\n        <tr>\n            <td>اسم المشروع</td>\n            <td colspan=\"3\">\n                <p>{{data.element.name}}</p>\n            </td>\n        </tr>\n        <tr>\n            <td>المجال</td>\n            <td colspan=\"3\">\n                <p>{{data.element.field}}</p>\n            </td>\n        </tr>\n        <tr>\n            <td>الهدف من المشروع </td>\n            <td colspan=\"3\">\n                <ul>\n                    <li *ngFor=\"let objective of data.element.objectives; let i = index\">\n                        <hr *ngIf=\"i!=0\">\n                        <p>{{objective.objective}}</p>\n\n                    </li>\n                </ul>\n            </td>\n\n        </tr>\n\n        <tr>\n            <td>موعد التنفيذ</td>\n            <td>\n                <p>{{this.datepipe.transform(data.element.date, 'dd/MM/yyyy')}}</p>\n            </td>\n\n            <td>مكان التنفيذ</td>\n            <td>\n                <p>{{data.element.place}}</p>\n            </td>\n        </tr>\n        <tr>\n            <td>عدد المستفيدين</td>\n            <td colspan=\"3\">\n                <table width=\"100%\">\n                    <tr>\n                        <th>طالب</th>\n                        <th>طالبه</th>\n                        <th>عضو هيئة تدريس</th>\n\t\t\t<th>ذوي احتياجات خاصة</th>\n                        <th>عاملين</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            <p>{{data.element.targeted_boys}}</p>\n                        </td>\n                        <td>\n                            <p>{{data.element.targeted_girls}}</p>\n                        </td>\n                        <td>\n                            <p>{{data.element.targeted_staff}}</p>\n                        </td>\n\t\t\t\t<td>\n                            <p>{{data.element.targeted_specialneeds}}</p>\n                        </td>\n\t\t\t<td>\n                            <p>{{data.element.targeted_others}}</p>\n                        </td>\n\t\t\n                    </tr>\n                </table>\n            </td>\n        </tr>\n        <tr>\n            <td>الجهات الخارجيه المشاركه</td>\n            <td colspan=\"3\">\n                <ul>\n\n                    <li *ngFor=\"let element of data.element.outside_partners; let i = index\">\n\n                        <hr *ngIf=\"i!=0\">\n                        <p> {{element.partner}} </p>\n                    </li>\n                </ul>\n            </td>\n        </tr>\n\n        <tr>\n            <td>البرنامج التفصيلى للمشروع</td>\n\n            <td colspan=\"3\">\n                <ul>\n                    <li *ngFor=\"let item of data.element.programs;let i = index\">\n                        <hr *ngIf=\"i!=0\">\n                        <p> {{item.program}} </p>\n                    </li>\n                </ul>\n            </td>\n        </tr>\n    </table>\n\n    <h2>الجوائز</h2>\n    <table class=\"box1\">\n        <tr>\n            <th>الاسم</th>\n            <!-- <th>الكلية</th> -->\n            <th>المركز</th>\n            <th>ملاحظات</th>\n        </tr>\n        <tr *ngFor=\"let item of data.element.rewards\">\n            <td>\n                <p>{{item.name}}</p>\n            </td>\n            <!-- <td> -->\n            <!--     <p>{{item.fac}}</p> -->\n\t\t<!-- </td> -->\n            <td>\n                <p>{{item.type}}</p>\n            </td>\n            <td>\n                <p>{{item.notes}}</p>\n            </td>\n        </tr>\n\n    </table>\n\n    <h2>تفاصيل الموازنه التقديريه للمشروع</h2>\n    <table class=\"box1\">\n        <tr>\n            <th>البيان</th>\n            <th>الميزانيه المقترحه</th>\n            <th>نوع الدعم</th>\n            <th>ملاحظات</th>\n        </tr>\n        <tr *ngFor=\"let item of data.element.financials\">\n            <td>\n                <p>{{item.name}}</p>\n            </td>\n            <td>\n                <p>{{item.budget}}</p>\n            </td>\n            <td>\n                <p>{{item.type}}</p>\n            </td>\n            <td>\n                <p>{{item.notes}}</p>\n            </td>\n        </tr>\n        <tr>\n            <td>جملة تكلفة المشروع</td>\n            <td colspan=\"3\">\n                <p>{{data.total}}</p>\n            </td>\n        </tr>\n\n    </table>\n\n    <hr>\n    <h3>الصور</h3>\n    <div style=\"display: inline; margin:0 3px\" *ngFor=\"let imgg of data.element.images\">\n        <img width=200 [src]=\"img(imgg.uri)\" alt=\"\">\n    </div>\n\n\n</div>\n<div mat-dialog-actions>\n    <button (click)=\"action(null)\" mat-flat-button> <mat-icon>cancel</mat-icon>الغاء </button>\n    <button (click)=\"action('delete')\" mat-flat-button color=\"warn\"> <mat-icon>delete</mat-icon> حذف</button>\n    <button (click)=\"action('edit')\" mat-flat-button color=\"primary\"> <mat-icon>edit</mat-icon> تعديل</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-data></app-data>\n\n<!-- <div style=\"margin: 20px 0\"> -->\n<!-- <a  [routerLink]=\"[ '/form/add' ]\"> -->\n<!-- \t<button mat-fab color=\"primary\"> -->\n<!-- \t\t<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" >add</mat-icon> -->\n\t\t\n<!-- \t</button> -->\n<!-- </a> -->\n<!-- </div> -->\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-data></app-data>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _form_add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/add/add.component */ "./src/app/form/add/add.component.ts");





const routes = [
    {
        path: "projects",
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    },
    {
        path: "add",
        component: _form_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id',
        component: _form_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit',
        component: _form_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spacer {\n  flex: 1 1 auto;\n}\n\ndiv.brand {\n  width: 50px;\n  height: 50px;\n}\n\ndiv.brand img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvaG9tZS93YWxpZC93b3Jrc3BhY2UveW91dGgveW91dGgtZnJvbnQtbmcvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUNBRjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FERUk7RUFDSCxXQUFBO0VBQ0EsWUFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cblxuZGl2LmJyYW5ke1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBpbWd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0XG4gICAgfVxufVxuIiwiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5kaXYuYnJhbmQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuZGl2LmJyYW5kIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'youth';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.module */ "./src/app/form/form.module.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _form_form_module__WEBPACK_IMPORTED_MODULE_10__["FormModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/form/add/add.component.css":
/*!********************************************!*\
  !*** ./src/app/form/add/add.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/* h1{ */\n/* \ttext-align:center;\t */\n/* } */\n.main-header{\n    font-family: Cairo, Sans-Serif;\n    \ttext-align:center;\n\t\n}\n/* mat-form-field{ */\n/* \tmargin:15px; */\n/* } */\n/* mat-card{ */\n/* \tpadding: 0; */\n/* \tjustify-content: space-between; */\n/* } */\nmat-card-header{\n\tpadding:0;\n\tbackground-color: #FCE4EC   ;\n\tcolor: black;\n\ttext-align:center;\n}\n/* mat-card-title{ */\n/* \ttext-align: center !important; */\n/* } */\n/* mat-card-title h1{ */\n/* \ttext-align: center !important; */\n/* } */\n/* mat-card-content{ */\n/* \tpadding:30px; */\n/* } */\n/* mat-divider{ */\n/* \tpadding:60px 0; */\n/* } */\n/* h3{ */\n/* \ttext-align:center; */\n/* } */\n/* div.wrap{ */\n/* \t/\\* margin:30px; *\\/ */\n/* \tpadding:30px 0; */\n/* } */\n/* mat-header-cell{ */\n/* \tcolor:white; */\n/* \tbackground:#01579b   ; */\n/* } */\n/* button{ */\n/* \tbackground-color:#01579b   !important  ; */\n/* \tcolor: white; */\n/* } */\n.w-50{\n\twidth: 50%;\n}\n.w-100 {\n    width: 100%;\n}\n.form-container {\n    margin: 20px auto;\n    width:80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9hZGQvYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFFBQVE7QUFDUix5QkFBeUI7QUFDekIsTUFBTTtBQUNOO0lBQ0ksOEJBQThCO0tBQzdCLGlCQUFpQjs7QUFFdEI7QUFFQSxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixjQUFjO0FBQ2QsaUJBQWlCO0FBRWpCLHFDQUFxQztBQUNyQyxNQUFNO0FBQ047Q0FDQyxTQUFTO0NBQ1QsNEJBQTRCO0NBQzVCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7QUFDQSxvQkFBb0I7QUFDcEIsb0NBQW9DO0FBQ3BDLE1BQU07QUFFTix1QkFBdUI7QUFDdkIsb0NBQW9DO0FBRXBDLE1BQU07QUFFTixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLE1BQU07QUFFTixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLE1BQU07QUFJTixRQUFRO0FBQ1Isd0JBQXdCO0FBQ3hCLE1BQU07QUFFTixjQUFjO0FBQ2QsMEJBQTBCO0FBQzFCLHFCQUFxQjtBQUNyQixNQUFNO0FBRU4scUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsTUFBTTtBQUVOLFlBQVk7QUFDWiw4Q0FBOEM7QUFDOUMsbUJBQW1CO0FBRW5CLE1BQU07QUFJTjtDQUNDLFVBQVU7QUFDWDtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9hZGQvYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIGgxeyAqL1xuLyogXHR0ZXh0LWFsaWduOmNlbnRlcjtcdCAqL1xuLyogfSAqL1xuLm1haW4taGVhZGVye1xuICAgIGZvbnQtZmFtaWx5OiBDYWlybywgU2Fucy1TZXJpZjtcbiAgICBcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcbn1cblxuLyogbWF0LWZvcm0tZmllbGR7ICovXG4vKiBcdG1hcmdpbjoxNXB4OyAqL1xuLyogfSAqL1xuLyogbWF0LWNhcmR7ICovXG4vKiBcdHBhZGRpbmc6IDA7ICovXG5cbi8qIFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuLyogfSAqL1xubWF0LWNhcmQtaGVhZGVye1xuXHRwYWRkaW5nOjA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGQ0U0RUMgICA7XG5cdGNvbG9yOiBibGFjaztcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG59XG4vKiBtYXQtY2FyZC10aXRsZXsgKi9cbi8qIFx0dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7ICovXG4vKiB9ICovXG5cbi8qIG1hdC1jYXJkLXRpdGxlIGgxeyAqL1xuLyogXHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgKi9cblxuLyogfSAqL1xuXG4vKiBtYXQtY2FyZC1jb250ZW50eyAqL1xuLyogXHRwYWRkaW5nOjMwcHg7ICovXG4vKiB9ICovXG5cbi8qIG1hdC1kaXZpZGVyeyAqL1xuLyogXHRwYWRkaW5nOjYwcHggMDsgKi9cbi8qIH0gKi9cblxuXG5cbi8qIGgzeyAqL1xuLyogXHR0ZXh0LWFsaWduOmNlbnRlcjsgKi9cbi8qIH0gKi9cblxuLyogZGl2LndyYXB7ICovXG4vKiBcdC9cXCogbWFyZ2luOjMwcHg7ICpcXC8gKi9cbi8qIFx0cGFkZGluZzozMHB4IDA7ICovXG4vKiB9ICovXG5cbi8qIG1hdC1oZWFkZXItY2VsbHsgKi9cbi8qIFx0Y29sb3I6d2hpdGU7ICovXG4vKiBcdGJhY2tncm91bmQ6IzAxNTc5YiAgIDsgKi9cbi8qIH0gKi9cblxuLyogYnV0dG9ueyAqL1xuLyogXHRiYWNrZ3JvdW5kLWNvbG9yOiMwMTU3OWIgICAhaW1wb3J0YW50ICA7ICovXG4vKiBcdGNvbG9yOiB3aGl0ZTsgKi9cblx0XG4vKiB9ICovXG5cblxuXG4udy01MHtcblx0d2lkdGg6IDUwJTtcbn1cblxuLnctMTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDo4MCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/form/add/add.component.ts":
/*!*******************************************!*\
  !*** ./src/app/form/add/add.component.ts ***!
  \*******************************************/
/*! exports provided: AddComponent, DeleteImgDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteImgDialog", function() { return DeleteImgDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/form/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let AddComponent = class AddComponent {
    constructor(dialog, http, router, route, dataS, changeDetectorRefs) {
        this.dialog = dialog;
        this.http = http;
        this.router = router;
        this.route = route;
        this.dataS = dataS;
        this.changeDetectorRefs = changeDetectorRefs;
        this.fieldOptions = [
            "رياضي",
            "ثقافي",
            "فني",
            "جوالة",
            "علمي",
            "اجتماعي",
            "خدمات عامة",
            "أسر ورحلات",
        ];
        this.rewardRanks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.subscribtions = [];
        this.ress = {
            type: null,
            body: null,
        };
        this.comp = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dataSources = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.isNew = true;
        this.displayedColumns = ['name', 'budget', 'type', 'notes', 'delete'];
        this.displayedColumnss = ['name', 'fac', 'type', 'notes', 'delete'];
        this.financial = {
            name: null,
            budget: null,
            type: null,
            notes: null,
            add: () => {
                this.project.financials.push({
                    name: this.financial.name,
                    budget: this.financial.budget,
                    type: this.financial.type,
                    notes: this.financial.notes
                });
                this.financial.name = null;
                this.financial.budget = null;
                this.financial.type = null;
                this.financial.notes = null;
                this.dataSource.data = this.project.financials;
            },
            delete: (x) => {
                this.project.financials.splice(x, 1);
                this.dataSource.data = this.project.financials;
            }
        };
        this.reward = {
            name: null,
            fac: null,
            type: null,
            notes: null,
            add: () => {
                this.project.rewards.push({
                    name: this.reward.name,
                    fac: this.reward.fac,
                    type: this.reward.type,
                    notes: this.reward.notes
                });
                this.reward.name = null;
                this.reward.fac = null;
                this.reward.type = null;
                this.reward.notes = null;
                this.dataSources.data = this.project.rewards;
            },
            delete: (x) => {
                this.project.rewards.splice(x, 1);
                this.dataSources.data = this.project.rewards;
            }
        };
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].host;
        this.objectivesColor = [];
        this.partnersColor = [];
        this.programsColor = [];
        this.financialsColor = [];
        this.rewardsColor = [];
        this.objective = null;
        this.partner = null;
        this.program = null;
        this.id = null;
        this.project = {
            id: null,
            faculty: "science",
            name: null,
            created_at: null,
            updated_at: null,
            field: null,
            objectives: [],
            images: [],
            date: null,
            place: null,
            targeted_boys: null,
            targeted_girls: null,
            targeted_staff: null,
            targeted_others: null,
            targeted_specialneeds: null,
            outside_partners: [],
            programs: [],
            financials: [],
            rewards: []
        };
        this.res = {
            type: null,
            body: null
        };
        this.add = {
            objective: () => {
                this.project.objectives.push({ objective: this.objective });
                this.objectivesColor.push('primary');
                this.objective = '';
            },
            partner: () => {
                this.project.outside_partners.push({ partner: this.partner });
                this.partnersColor.push('primary');
                this.partner = '';
            },
            program: () => {
                this.project.programs.push({ program: this.program });
                this.programsColor.push('primary');
                this.program = '';
            },
        };
        this.delete = {
            objective: (x) => {
                this.project.objectives.splice(x, 1);
                this.objectivesColor.splice(x, 1);
            },
            partner: (x) => {
                this.project.outside_partners.splice(x, 1);
                this.partnersColor.splice(x, 1);
            },
            program: (x) => {
                this.project.programs.splice(x, 1);
                this.programsColor.splice(x, 1);
            }
        };
        this.hasErrors = false;
        this.selectedFiles = [];
        this.uploading = false;
        this.route.url.subscribe(params => {
            //console.log(params);
            if (params[0].path === 'edit') {
                this.id = params[1].path;
                if (this.id) {
                    this.isNew = false;
                    this.dataS.getOne(this.id, true);
                }
            }
            else {
                this.isNew = true;
            }
        });
        this.subscribtions[0] = this.dataS.onEdit.subscribe((data) => {
            this.project = data.body;
            //console.log(data);
            this.dataSource.data = this.project.financials;
            this.dataSources.data = this.project.rewards;
        });
        this.subscribtions[1] = this.dataS.onImg.subscribe(data => {
            this.project.images.push(...data.images);
            this.submitForm();
            this.uploading = false;
            //console.log('evint');
        });
        this.subscribtions[2] = this.dataS.onRmImg.subscribe(data => {
            this.project.images.forEach((im, i) => {
                if (data.uri === im.uri) {
                    this.project.images.splice(i, 1);
                }
            });
        });
        //console.log('constructed');
    }
    submitForm() {
        this.res = this.dataS.submitForm(this.isNew, {
            id: this.id,
            project: this.project,
        }, true);
    }
    img(uri) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api.form.images.dist(uri);
    }
    rmImg(uri) {
        const dialogRef = this.dialog.open(DeleteImgDialog, {
            width: 'auto',
            data: {
                delete: null,
                uri
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataS.deleteFile(uri);
            }
        });
    }
    onFileSelected(event) {
        this.selectedFiles = [];
        for (const file of event.target.files) {
            if (file.type.slice(0, 5) == 'image' && file.size < 2097152) {
                this.selectedFiles.push(file);
            }
        }
        //this.selectedFiles = event.target.files;
        //console.log(this.selectedFiles.length);
    }
    getValidationErrors() {
        let errors = [];
        if (!this.project.name) {
            errors.push("name error");
        }
        else if (!this.project.field) {
            errors.push("field error");
        }
        return errors;
    }
    upload() {
        if (this.getValidationErrors().length != 0) {
            this.hasErrors == true;
            return;
        }
        if (this.selectedFiles.length != 0) {
            this.uploading = true;
            this.dataS.upload(this.selectedFiles);
        }
        else {
            this.submitForm();
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscribtions.forEach(el => {
            el.unsubscribe();
        });
    }
};
AddComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/add/add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.css */ "./src/app/form/add/add.component.css")).default]
    })
], AddComponent);

let DeleteImgDialog = class DeleteImgDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.validation = '';
    }
    img(uri) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api.form.images.dist(uri);
    }
    action(state) {
        this.data.delete = state;
        this.dialogRef.close(this.data.delete);
    }
};
DeleteImgDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DeleteImgDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'delete-img-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/add/delete.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DeleteImgDialog);



/***/ }),

/***/ "./src/app/form/data/data.component.css":
/*!**********************************************!*\
  !*** ./src/app/form/data/data.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    color: #01579b;\n}\n\ntable {\n    width: 100% !important;\n}\n\ntable th {\n    background-color: #FCE4EC;\n    color: black;\n}\n\nmat-icon {\n    cursor: pointer;\n}\n\n/* button { */\n\n/*     background-color: #01579b !important; */\n\n/*     color: white; */\n\n/* } */\n\ndiv.wrap {\n    /* margin:30px; */\n    padding: 30px 0;\n}\n\n#paginator button {\n    display: inline-block;\n    width: 23%;\n    margin: 0 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9kYXRhL2RhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsYUFBYTs7QUFDYiw4Q0FBOEM7O0FBQzlDLHNCQUFzQjs7QUFDdEIsTUFBTTs7QUFFTjtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9kYXRhL2RhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGNvbG9yOiAjMDE1NzliO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0U0RUM7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5tYXQtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBidXR0b24geyAqL1xuLyogICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTU3OWIgIWltcG9ydGFudDsgKi9cbi8qICAgICBjb2xvcjogd2hpdGU7ICovXG4vKiB9ICovXG5cbmRpdi53cmFwIHtcbiAgICAvKiBtYXJnaW46MzBweDsgKi9cbiAgICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbiNwYWdpbmF0b3IgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIzJTtcbiAgICBtYXJnaW46IDAgMSU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/form/data/data.component.ts":
/*!*********************************************!*\
  !*** ./src/app/form/data/data.component.ts ***!
  \*********************************************/
/*! exports provided: DataComponent, DeleteDialog, ShowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialog", function() { return DeleteDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDialog", function() { return ShowDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "./src/app/form/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let DataComponent = class DataComponent {
    constructor(router, dataS, dialog, datepipe, changeDetectorRefs, http) {
        this.router = router;
        this.dataS = dataS;
        this.dialog = dialog;
        this.datepipe = datepipe;
        this.changeDetectorRefs = changeDetectorRefs;
        this.http = http;
        this.displayedColumns = ['index', 'name', 'field', 'date', 'dateCreated', 'edit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.res = {
            type: null,
            body: null,
            meta: null
        };
        this.query = {
            filter: null,
            per: 10,
            page: 1,
            current_page: null,
            last_page: null,
            index: null
        };
    }
    search(p) {
        this.query.page = p;
        this.dataS.getAllData(this.query, true);
    }
    data(d) {
        var result = [];
        d.forEach((e, i) => {
            let index = i + 1;
            let name = e.name;
            let dateCreated = this.datepipe.transform(e.created_at, 'yyyy/MM/dd HH:mm');
            let date = this.datepipe.transform(e.date, 'yyyy/MM/dd');
            let field = e.field;
            let id = e.id;
            result.push({
                id,
                index,
                name,
                field,
                dateCreated,
                date
            });
        });
        return result;
    }
    deleteForm(e) {
        const dialogRef = this.dialog.open(DeleteDialog, {
            width: 'auto',
            data: {
                delete: null,
                element: e
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataS.deleteForm(e);
            }
        });
    }
    showForm(e) {
        let total = 0;
        this.res.body[(e.index - 1)].financials.forEach(el => {
            total += el.budget;
        });
        const dialogRef = this.dialog.open(ShowDialog, {
            width: '100vw',
            height: "90vh",
            data: {
                element: this.res.body[(e.index - 1)],
                total,
                host: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            switch (result) {
                case 'edit':
                    this.router.navigate(['/edit', e.id]);
                    break;
                case 'delete':
                    this.deleteForm(e);
                    break;
                default:
                    break;
            }
        });
    }
    updateData() {
        this.dataS.getAllData(this.query, true);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    toDate(id) {
        var result = new Date(parseInt(id.substring(0, 8), 16) * 1000);
        return result;
    }
    updateTable() {
        this.dataSource.data = this.data(this.res.body);
    }
    ngOnInit() {
        this.dataS.onDataUpdate.subscribe((data) => {
            this.res = data;
            this.query.current_page = data.meta.current_page;
            this.query.last_page = data.meta.last_page;
            this.query.index = data.meta.from - 1;
            this.updateTable();
        });
        this.search(1);
    }
};
DataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true })
], DataComponent.prototype, "paginator", void 0);
DataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data.component.css */ "./src/app/form/data/data.component.css")).default]
    })
], DataComponent);

let DeleteDialog = class DeleteDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.validation = '';
    }
    action(state) {
        this.data.delete = state;
        this.dialogRef.close(this.data.delete);
    }
};
DeleteDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
];
DeleteDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'delete-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/delete.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], DeleteDialog);

let ShowDialog = class ShowDialog {
    constructor(datepipe, dialogRef, data) {
        this.datepipe = datepipe;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    img(uri) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.form.images.dist(uri);
    }
    action(state) {
        this.dialogRef.close(state);
    }
};
ShowDialog.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
];
ShowDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'show-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/data/show.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show.css */ "./src/app/form/data/show.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], ShowDialog);



/***/ }),

/***/ "./src/app/form/data/show.css":
/*!************************************!*\
  !*** ./src/app/form/data/show.css ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @import url(\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"); */\n\n.main {\n\n    width: 100%;\n    height: 100%;\n}\n\n.box1 {\n    width: 100%;\n    border: 4px solid #fff;\n    outline: 4px solid #84bdec;\n    background: rgb(217, 234, 245);\n    margin: auto auto;\n    padding: 20px;\n    margin-bottom: 30px\n}\n\nh2 {\n    text-align: center;\n    margin: 10px 0\n}\n\ntable td {\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px;\n    text-align: center\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntable tr td,\nth {\n    border: .5px solid #fff\n}\n\np {\n    font-size: 18px;\n    font-weight: 400\n}\n\n/* table,\ntr,\ntd,\nth {\n    width: 100%\n} */\n\nli {\n    text-align: right\n}\n\nhr {\n    border-top: 1px solid #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9kYXRhL3Nob3cuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZGQUE2Rjs7QUFFN0Y7O0lBRUksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFHQTs7Ozs7R0FLRzs7QUFFSDtJQUNJO0FBQ0o7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2RhdGEvc2hvdy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybChcImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTsgKi9cblxuLm1haW4ge1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmJveDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG4gICAgb3V0bGluZTogNHB4IHNvbGlkICM4NGJkZWM7XG4gICAgYmFja2dyb3VuZDogcmdiKDIxNywgMjM0LCAyNDUpO1xuICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweFxufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwXG59XG5cbnRhYmxlIHRkIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRhYmxlIHRyIHRkLFxudGgge1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCAjZmZmXG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwXG59XG5cblxuLyogdGFibGUsXG50cixcbnRkLFxudGgge1xuICAgIHdpZHRoOiAxMDAlXG59ICovXG5cbmxpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodFxufVxuXG5ociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/form/form-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/form/form-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function() { return FormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/form/add/add.component.ts");





const routes = [
    {
        path: '',
        component: _form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
        children: [
            {
                path: 'add',
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
            },
            {
                path: 'edit/:id',
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
            },
            {
                path: 'edit',
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
            }
        ]
    }
];
let FormRoutingModule = class FormRoutingModule {
};
FormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormRoutingModule);



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-data{\n\twidth: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1kYXRhe1xuXHR3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormComponent = class FormComponent {
    constructor() { }
    ngOnInit() {
    }
};
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/form/form.module.ts":
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/form/form-routing.module.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/form/add/add.component.ts");
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/data.component */ "./src/app/form/data/data.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let FormModule = class FormModule {
};
FormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
            _data_data_component__WEBPACK_IMPORTED_MODULE_7__["DataComponent"],
            _data_data_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"],
            _data_data_component__WEBPACK_IMPORTED_MODULE_7__["ShowDialog"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_6__["DeleteImgDialog"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _form_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ], exports: [_data_data_component__WEBPACK_IMPORTED_MODULE_7__["DataComponent"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        entryComponents: [_data_data_component__WEBPACK_IMPORTED_MODULE_7__["ShowDialog"], _data_data_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"], _add_add_component__WEBPACK_IMPORTED_MODULE_6__["DeleteImgDialog"]]
    })
], FormModule);



/***/ }),

/***/ "./src/app/form/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/form/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
//TOTO(walid): find out the exact useage of res.type;






let DataService = class DataService {
    constructor(datepipe, router, http) {
        this.datepipe = datepipe;
        this.router = router;
        this.http = http;
        this.onDataUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onImg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRmImg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    upload(files) {
        let fd = new FormData();
        for (let i = 0; i < files.length; i++) {
            const el = files[i];
            fd.append("images[]", el, el.name);
        }
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.form.images.post(), fd)
            .subscribe(response => {
            console.log(response);
            this.onImg.emit(response);
        }, err => {
            console.log(err);
        });
    }
    deleteFile(id) {
        let res;
        this.http
            .delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.form.images.delete(id))
            .subscribe(response => {
            console.log(response);
            res = response;
            res.uri = id;
            this.onRmImg.emit(res);
        }, err => {
            console.log(err);
            res = err;
        });
        return res;
    }
    deleteForm(e) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        let res = {
            type: null,
            body: null
        };
        let options = { headers: headers };
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.form.delete(e.id.toString()), options).toPromise().then((data) => {
            res.type = true;
            res.body = data;
            this.getAllData(null, true);
        }).catch((err) => {
            res.type = false;
            res.body = err;
            this.getAllData(null, true);
        });
    }
    getAllData(query, willSohw) {
        let link = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.form.getAll();
        if (query) {
            let par = [];
            if (query.filter) {
                par.push(`q=${query.filter}`);
            }
            if (query.page) {
                par.push(`page=${query.page}`);
            }
            if (query.per) {
                par.push(`per=${query.per}`);
            }
            link += `?${par.join('&')}`;
        }
        else {
            link += '?per=10';
        }
        console.log(link);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        let options = { headers: headers };
        let res = {
            type: null,
            meta: null,
            body: null
        };
        this.http.get(link, options).toPromise().then((data) => {
            res.type = true;
            res.body = data.wrapper.data;
            delete data.wrapper.data;
            res.meta = data.wrapper;
            console.log(res);
            if (willSohw) {
                this.onDataUpdate.emit(res);
            }
            else {
                return res;
            }
        }).catch((err) => {
            res.type = false;
            res.body = err;
            if (willSohw) {
                this.onDataUpdate.emit(res);
            }
            else {
                return res;
            }
        });
    }
    getOne(id, forEdit) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        let options = { headers: headers };
        let res = {
            type: null,
            body: null
        };
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.form.getOne(id), options).toPromise().then((data) => {
            res.type = true;
            res.body = data.wrapper[0];
            res.body.date = this.datepipe.transform(res.body.date, 'yyyy-MM-dd');
            if (forEdit) {
                this.onEdit.emit(res);
            }
            else {
                return res;
            }
        }).catch((err) => {
            res.type = false;
            res.body = err;
            if (forEdit) {
                this.onEdit.emit(res);
            }
            else {
                return res;
            }
        });
        return res;
    }
    submitForm(isNew, data, redirect) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json' /*,
            'Authorization': this.basic */
        });
        let options = { headers: headers };
        let res = {
            type: null,
            body: null
        };
        data.project.date = this.datepipe.transform(data.project.date, 'yyyy-MM-dd 00:00:00');
        console.log(data.project.date);
        let proj = { main_form: data.project };
        let url = isNew ? src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.form.post() : src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.form.update(data.id);
        this.http.post(url, proj, options).toPromise().then((data) => {
            res.type = true;
            res.body = data;
            if (redirect) {
                this.router.navigate(['/projects']);
            }
            this.getAllData(null, true);
        }).catch((data) => {
            res.type = false;
            res.body = data;
        });
        return res;
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");













/**
 * NgModule that includes all Material modules.
*/
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            // CDK
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
            // Material
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./host */ "./src/environments/host.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const environment = {
    production: false,
    host: _host__WEBPACK_IMPORTED_MODULE_1__["host"],
    api: {
        form: {
            post() {
                get: {
                    return `${_host__WEBPACK_IMPORTED_MODULE_1__["host"]}api/projects`;
                }
            },
            getAll() {
                get: {
                    return `${_host__WEBPACK_IMPORTED_MODULE_1__["host"]}api/projects`;
                }
            },
            getOne(id) {
                get: {
                    return `${_host__WEBPACK_IMPORTED_MODULE_1__["host"]}api/projects/${id}`;
                }
            },
            update(id) {
                get: {
                    return `${_host__WEBPACK_IMPORTED_MODULE_1__["host"]}api/projects/update/${id}`;
                }
            },
            delete(id) {
                get: {
                    return `${_host__WEBPACK_IMPORTED_MODULE_1__["host"]}api/projects/${id}`;
                }
            },
            images: {
                post() {
                    get: {
                        return `${_host__WEBPACK_IMPORTED_MODULE_1__["host"]}api/upload/images`;
                    }
                },
                delete(id) {
                    get: {
                        return `${_host__WEBPACK_IMPORTED_MODULE_1__["host"]}api/upload/images/${id}`;
                    }
                },
                dist(uri) {
                    get: {
                        return `${_host__WEBPACK_IMPORTED_MODULE_1__["host"]}uploads/${uri}`;
                    }
                },
            }
        }
    }
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

/***/ "./src/environments/host.ts":
/*!**********************************!*\
  !*** ./src/environments/host.ts ***!
  \**********************************/
/*! exports provided: host */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const host = '/'; //Add your Host Here ie: 'http://google.com/'


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/home/walid/workspace/youth/youth-front-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map