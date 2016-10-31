"use strict";
var Order = (function () {
    function Order(id, user_id, created, updated, status) {
        this.id = id;
        this.user_id = user_id;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map