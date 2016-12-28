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
var service_slide_banner_1 = require('../../services/service_slide_banner/service_slide_banner');
var ModBannerComponent = (function () {
    function ModBannerComponent(service) {
        this.service = service;
        this.slide_display = 0;
    }
    ModBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getListSlideBannerApi().subscribe(function (data) { return _this.list_slide_banner = data; }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Lỗi xảy ra ở HTTP service"); }, // in case of failure show this message
        function () { return console.log(_this.list_slide_banner); } //run this code in all cases
         //run this code in all cases
        );
        setInterval(function () { _this.click_next(); }, 3000);
    };
    ModBannerComponent.prototype.hien_thi_slide = function () {
        for (var i = 0; i < this.list_slide_banner.length; i++) {
            var last = this.list_slide_banner.length - 1;
            var now = this.slide_display;
            this.list_slide_banner[now].state = "inactive";
            if (now == 0) {
                this.list_slide_banner[last].state = "left";
                this.list_slide_banner[now + 1].state = "right";
            }
            else if (now == last) {
                this.list_slide_banner[now - 1].state = "left";
                this.list_slide_banner[0].state = "right";
            }
            else {
                this.list_slide_banner[now - 1].state = "left";
                this.list_slide_banner[now + 1].state = "right";
            }
        }
    };
    ModBannerComponent.prototype.click_next = function () {
        if (this.slide_display >= this.list_slide_banner.length - 1) {
            this.slide_display = 0;
        }
        else {
            this.slide_display += 1;
        }
        this.hien_thi_slide();
    };
    ModBannerComponent.prototype.click_prev = function () {
        if (this.slide_display <= 0) {
            this.slide_display = this.list_slide_banner.length - 1;
        }
        else {
            this.slide_display -= 1;
        }
        this.hien_thi_slide();
    };
    ModBannerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_banner',
            templateUrl: 'mod_banner.component.html',
            providers: [service_slide_banner_1.SlideBannerService],
            animations: [
                core_1.trigger("anSlideBanner", [
                    core_1.state("left", core_1.style({
                        "opacity": 0,
                        "transform": "translateX(-30%)",
                    })),
                    core_1.state("inactive", core_1.style({
                        "opacity": 1,
                        "transform": "translateX(0)",
                    })),
                    core_1.state("right", core_1.style({
                        "opacity": 0,
                        "transform": "translateX(30%)",
                    })),
                    core_1.transition("right => inactive", core_1.animate("2000ms ease-in")),
                    core_1.transition("inactive => left", core_1.animate("1500ms ease-out")),
                    core_1.transition("left => right", core_1.animate("1000ms ease")),
                    core_1.transition("left => inactive", core_1.animate("2000ms ease-in")),
                    core_1.transition("inactive => right", core_1.animate("1500ms ease-out")),
                    core_1.transition("right=> left", core_1.animate("1000ms ease")),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [service_slide_banner_1.SlideBannerService])
    ], ModBannerComponent);
    return ModBannerComponent;
}());
exports.ModBannerComponent = ModBannerComponent;
//# sourceMappingURL=mod_banner.component.js.map