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
var ModAdminTableManagerProductComponent = (function () {
    function ModAdminTableManagerProductComponent(service_product) {
        this.service_product = service_product;
    }
    ModAdminTableManagerProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service_product.getListProductApi().subscribe(function (data) { return _this.list_product_display = data; }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Lỗi xảy ra ở HTTP service"); }, // in case of failure show this message
        function () { return console.log(_this.list_product_display); } //run this code in all cases
         //run this code in all cases
        );
    };
    ModAdminTableManagerProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_admin_table_manager_product',
            templateUrl: 'mod_admin_table_manager_product.component.html'
        }), 
        __metadata('design:paramtypes', [service_product_1.ProductService])
    ], ModAdminTableManagerProductComponent);
    return ModAdminTableManagerProductComponent;
}());
exports.ModAdminTableManagerProductComponent = ModAdminTableManagerProductComponent;
//# sourceMappingURL=mod_admin_table_manager_product.component.js.map