"use strict";
var OrderDetail = (function () {
    function OrderDetail(id, order_id, product_id, quantity, price, created, updated, status) {
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.price = price;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=order_detail.js.map