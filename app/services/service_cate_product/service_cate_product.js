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
var mock_cate_product_1 = require('../../model/cate_product/mock_cate_product');
var CateProductService = (function () {
    function CateProductService() {
    }
    CateProductService.prototype.getListCateProduct = function () {
        return mock_cate_product_1.list_cate_product;
    };
    CateProductService.prototype.getListCateProductPromise = function () {
        return Promise.resolve(mock_cate_product_1.list_cate_product);
    };
    CateProductService.prototype.getCateProduct = function (id) {
        return this.getListCateProductPromise()
            .then(function (list_cate_product) { return list_cate_product.find(function (cate_product) { return cate_product.id == id; }); });
    };
    CateProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CateProductService);
    return CateProductService;
}());
exports.CateProductService = CateProductService;
//# sourceMappingURL=service_cate_product.js.map