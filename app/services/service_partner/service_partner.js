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
var mock_partner_1 = require('../../model/partner/mock_partner');
var PartnerService = (function () {
    function PartnerService() {
    }
    PartnerService.prototype.getListPartner = function () {
        return mock_partner_1.list_partner;
    };
    PartnerService.prototype.getListPartnerPromise = function () {
        return Promise.resolve(mock_partner_1.list_partner);
    };
    PartnerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PartnerService);
    return PartnerService;
}());
exports.PartnerService = PartnerService;
//# sourceMappingURL=service_partner.js.map