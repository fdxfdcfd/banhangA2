"use strict";
var User = (function () {
    function User(id, first_name, last_name, username, password, password_salt, email, img, level, last_login, created, updated, status) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
        this.password_salt = password_salt;
        this.img = img;
        this.email = email;
        this.level = level;
        this.last_login = last_login;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map