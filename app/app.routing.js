"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./pages/home.component/home.component');
var products_component_1 = require('./pages/products.component/products.component');
var account_component_1 = require('./pages/account.component/account.component');
var checkout_component_1 = require('./pages/checkout.component/checkout.component');
var contact_component_1 = require('./pages/contact.component/contact.component');
var register_component_1 = require('./pages/register.component/register.component');
var single_component_1 = require('./pages/single.component/single.component');
var admin_home_component_1 = require('./pages/admin_home.component/admin_home.component');
var admin_manager_product_component_1 = require('./pages/admin_manager_product.component/admin_manager_product.component');
var admin_manager_customer_component_1 = require('./pages/admin_manager_customer.component/admin_manager_customer.component');
var admin_manager_user_component_1 = require('./pages/admin_manager_user.component/admin_manager_user.component');
var admin_manager_promotion_component_1 = require('./pages/admin_manager_promotion.component/admin_manager_promotion.component');
var admin_manager_partner_component_1 = require('./pages/admin_manager_partner.component/admin_manager_partner.component');
var admin_manager_bill_component_1 = require('./pages/admin_manager_bill.component/admin_manager_bill.component');
var admin_manager_news_component_1 = require('./pages/admin_manager_news.component/admin_manager_news.component');
var admin_manager_categoty_product_component_1 = require('./pages/admin_manager_category_product.component/admin_manager_categoty_product.component');
var admin_manager_category_user_component_1 = require('./pages/admin_manager_category_user.component/admin_manager_category_user.component');
var admin_manager_category_customer_component_1 = require('./pages/admin_manager_category_customer.component/admin_manager_category_customer.component');
var admin_manager_menu_component_1 = require('./pages/admin_manager_menu.component/admin_manager_menu.component');
var admin_product_form_component_1 = require('./pages/admin_product_form.component/admin_product_form.component');
var admin_user_form_component_1 = require('./pages/admin_user_form.component/admin_user_form.component');
var admin_component_1 = require('./pages/admin.component/admin.component');
var appRoutes = [
    { path: 'admin', component: admin_component_1.AdminComponent,
        children: [
            { path: '', component: admin_home_component_1.AdminHomeComponent },
            { path: 'quan-ly-san-pham', component: admin_manager_product_component_1.AdminManagerProductComponent },
            { path: 'quan-ly-khach-hang', component: admin_manager_customer_component_1.AdminManagerCustomerComponent },
            { path: 'quan-ly-nhan-vien', component: admin_manager_user_component_1.AdminManagerUserComponent },
            { path: 'quan-ly-khuyen-mai', component: admin_manager_promotion_component_1.AdminManagerPromotionComponent },
            { path: 'quan-ly-doi-tac', component: admin_manager_partner_component_1.AdminManagerPartnerComponent },
            { path: 'quan-ly-hoa-don', component: admin_manager_bill_component_1.AdminManagerBillComponent },
            { path: 'quan-ly-tin-tuc', component: admin_manager_news_component_1.AdminManagerNewsComponent },
            { path: 'quan-ly-loai-san-pham', component: admin_manager_categoty_product_component_1.AdminManagerCategoryProductComponent },
            { path: 'quan-ly-loai-nhan-vien', component: admin_manager_category_user_component_1.AdminManagerCategoryUserComponent },
            { path: 'quan-ly-loai-khach-hang', component: admin_manager_category_customer_component_1.AdminManagerCategoryCustomerComponent },
            { path: 'quan-ly-menu', component: admin_manager_menu_component_1.AdminManagerMenuComponent },
            { path: 'them-san-pham', component: admin_product_form_component_1.AdminProductFormComponent },
            { path: 'them-nhan-vien', component: admin_user_form_component_1.AdminUserFormComponent },
        ] },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'products/:id', component: products_component_1.ProductsComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'single', component: single_component_1.SingleComponent },
    { path: 'single/:id', component: single_component_1.SingleComponent },
    { path: 'account', component: account_component_1.AccountComponent },
    { path: 'checkout', component: checkout_component_1.CheckOutComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map