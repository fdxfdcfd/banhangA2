"use strict";
var SlideBanner = (function () {
    function SlideBanner(id, title, content, state, created, updated, status) {
        this.title = title;
        this.content = content;
        this.state = state;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return SlideBanner;
}());
exports.SlideBanner = SlideBanner;
//# sourceMappingURL=slide_banner.js.map