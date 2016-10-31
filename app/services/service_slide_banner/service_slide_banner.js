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
var mock_slide_banner_1 = require('../../model/slide_banner/mock_slide_banner');
var SlideBannerService = (function () {
    function SlideBannerService() {
    }
    SlideBannerService.prototype.getDanhSachSlideBannerPromise = function () {
        return Promise.resolve(mock_slide_banner_1.list_slide_banner);
    };
    SlideBannerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SlideBannerService);
    return SlideBannerService;
}());
exports.SlideBannerService = SlideBannerService;
//# sourceMappingURL=service_slide_banner.js.map