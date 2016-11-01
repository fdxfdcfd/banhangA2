"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var service_cate_product_1 = require('../../services/service_cate_product/service_cate_product');
var router_1 = require('@angular/router');
var ModMainMenuComponent = (function () {
    function ModMainMenuComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ModMainMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getListCateProductApi().subscribe(function (data) { return _this.list_cate_product_display = data; }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Lỗi xảy ra ở HTTP service"); }, // in case of failure show this message
        function () { return console.log(_this.list_cate_product_display); } //run this code in all cases
         //run this code in all cases
        );
    };
    ModMainMenuComponent.prototype.gotoListProducts = function (cate_product) {
        var link = ['/products', cate_product.id];
        this.router.navigate(link);
    };
    ModMainMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_main_menu',
            templateUrl: 'mod_main_menu.component.html'
        }), 
        __metadata('design:paramtypes', [service_cate_product_1.CateProductService, router_1.Router])
    ], ModMainMenuComponent);
    return ModMainMenuComponent;
}());
exports.ModMainMenuComponent = ModMainMenuComponent;
//# sourceMappingURL=mod_main_menu.component.js.map