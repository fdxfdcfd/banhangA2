"use strict";
var Customer = (function () {
    function Customer(id, first_name, last_name, sex, username, password, password_salt, email, address, phone, img, last_login, created, updated, status) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.sex = sex;
        this.username = username;
        this.password = password;
        this.password_salt = password_salt;
        this.img = img;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.last_login = last_login;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map