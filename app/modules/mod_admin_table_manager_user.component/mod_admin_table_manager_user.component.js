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
var service_user_1 = require('../../services/service_user/service_user');
var ModAdminTableManagerUserComponent = (function () {
    function ModAdminTableManagerUserComponent(service_user) {
        var _this = this;
        this.service_user = service_user;
        //Sắp xếp id tăng dần
        this.service_user.getListUserPromise().then(function (list) { return _this.list_user = list.sort(function (item1, item2) { return item1.id - item2.id; }); });
    }
    ModAdminTableManagerUserComponent.prototype.ngOnInit = function () { };
    ModAdminTableManagerUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_admin_table_manager_user',
            templateUrl: 'mod_admin_table_manager_user.component.html'
        }), 
        __metadata('design:paramtypes', [service_user_1.UserService])
    ], ModAdminTableManagerUserComponent);
    return ModAdminTableManagerUserComponent;
}());
exports.ModAdminTableManagerUserComponent = ModAdminTableManagerUserComponent;
//# sourceMappingURL=mod_admin_table_manager_user.component.js.map