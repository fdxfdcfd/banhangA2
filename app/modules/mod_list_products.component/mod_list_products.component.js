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
var service_product_1 = require('../../services/service_product/service_product');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var router_2 = require('@angular/router');
var ModListProductsComponent = (function () {
    function ModListProductsComponent(service_product, router, route, location) {
        this.service_product = service_product;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    ModListProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.service_product.getListProductByCateApi(id).subscribe(function (data) { return _this.list_product_display = data; }, // put the data returned from the server in our variable
            function (// put the data returned from the server in our variable
                error) { return console.log("Lỗi xảy ra ở HTTP service"); }, // in case of failure show this message
            function () { return console.log(_this.list_product_display); } //run this code in all cases
             //run this code in all cases
            );
        });
    };
    ModListProductsComponent.prototype.gotoDetail = function (product) {
        var link = ['/single', product.id];
        this.router.navigate(link);
    };
    ModListProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_list_products',
            templateUrl: 'mod_list_products.component.html'
        }), 
        __metadata('design:paramtypes', [service_product_1.ProductService, router_2.Router, router_1.ActivatedRoute, common_1.Location])
    ], ModListProductsComponent);
    return ModListProductsComponent;
}());
exports.ModListProductsComponent = ModListProductsComponent;
//# sourceMappingURL=mod_list_products.component.js.map