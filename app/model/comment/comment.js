"use strict";
var Comment = (function () {
    function Comment(id, content, email, username, product_id, created, updated, status) {
        this.id = id;
        this.content = content;
        this.email = email;
        this.username = username;
        this.product_id = product_id;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map