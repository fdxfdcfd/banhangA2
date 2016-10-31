"use strict";
var Product = (function () {
    function Product(id, name, price, price_sale, img, brief, detail, inventory, state, views, partner_id, product_cate_id, created, updated, status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.price_sale = price_sale;
        this.img = img;
        this.brief = brief;
        this.detail = detail;
        this.product_cate_id = product_cate_id;
        this.partner_id = partner_id;
        this.views = views;
        this.state = state;
        this.inventory = inventory;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map