"use strict";
var CateProduct = (function () {
    function CateProduct(id, name, sex, detail, created, updated, status) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.created = created;
        this.updated = updated;
        this.sex = sex;
        this.status = status;
    }
    return CateProduct;
}());
exports.CateProduct = CateProduct;
//# sourceMappingURL=cate_product.js.map