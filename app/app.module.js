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
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var service_product_1 = require('./services/service_product/service_product');
var service_user_1 = require('./services/service_user/service_user');
var service_partner_1 = require('./services/service_partner/service_partner');
var service_order_1 = require('./services/service_order/service_order');
var service_order_detail_1 = require('./services/service_order_detail/service_order_detail');
var service_customer_1 = require('./services/service_customer/service_customer');
var service_comment_1 = require('./services/service_comment/service_comment');
var service_cate_product_1 = require('./services/service_cate_product/service_cate_product');
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
var wid_header_component_1 = require('./widgets/wid_header.component/wid_header.component');
var wid_footer_component_1 = require('./widgets/wid_footer.component/wid_footer.component');
var wid_admin_header_component_1 = require('./widgets/wid_admin_header.component/wid_admin_header.component');
var wid_admin_footer_component_1 = require('./widgets/wid_admin_footer.component/wid_admin_footer.component');
var mod_main_menu_component_1 = require('./modules/mod_main_menu.component/mod_main_menu.component');
var mod_banner_component_1 = require('./modules/mod_banner.component/mod_banner.component');
var mod_online_trip_component_1 = require('./modules/mod_online_trip.component/mod_online_trip.component');
var mod_latest_products_component_1 = require('./modules/mod_latest_products.component/mod_latest_products.component');
var mod_sale_products_component_1 = require('./modules/mod_sale_products.component/mod_sale_products.component');
var mod_news_letter_component_1 = require('./modules/mod_news_letter.component/mod_news_letter.component');
var mod_sidebar_component_1 = require('./modules/mod_sidebar.component/mod_sidebar.component');
var mod_list_products_component_1 = require('./modules/mod_list_products.component/mod_list_products.component');
var mod_paging_component_1 = require('./modules/mod_paging.component/mod_paging.component');
var mod_login_component_1 = require('./modules/mod_login.component/mod_login.component');
var mod_cart_component_1 = require('./modules/mod_cart.component/mod_cart.component');
var mod_contact_component_1 = require('./modules/mod_contact.component/mod_contact.component');
var mod_register_component_1 = require('./modules/mod_register.component/mod_register.component');
var mod_detail_product_component_1 = require('./modules/mod_detail_product.component/mod_detail_product.component');
var mod_related_products_component_1 = require('./modules/mod_related_products.component/mod_related_products.component');
var mod_comment_component_1 = require('./modules/mod_comment.component/mod_comment.component');
var mod_admin_left_sidebar_component_1 = require('./modules/mod_admin_left_sidebar.component/mod_admin_left_sidebar.component');
var mod_admin_content_header_component_1 = require('./modules/mod_admin_content_header.component/mod_admin_content_header.component');
var mod_admin_general_info_component_1 = require('./modules/mod_admin_general_info.component/mod_admin_general_info.component');
var mod_admin_chart_component_1 = require('./modules/mod_admin_chart.component/mod_admin_chart.component');
var mod_admin_info_component_1 = require('./modules/mod_admin_info.component/mod_admin_info.component');
var mod_admin_table_manager_product_component_1 = require('./modules/mod_admin_table_manager_product.component/mod_admin_table_manager_product.component');
var mod_admin_table_manager_customer_component_1 = require('./modules/mod_admin_table_manager_customer.component/mod_admin_table_manager_customer.component');
var mod_admin_table_manager_user_component_1 = require('./modules/mod_admin_table_manager_user.component/mod_admin_table_manager_user.component');
var mod_admin_table_manager_promotion_component_1 = require('./modules/mod_admin_table_manager_promotion.component/mod_admin_table_manager_promotion.component');
var mod_admin_table_manager_partner_component_1 = require('./modules/mod_admin_table_manager_partner.component/mod_admin_table_manager_partner.component');
var mod_admin_table_manager_bill_component_1 = require('./modules/mod_admin_table_manager_bill.component/mod_admin_table_manager_bill.component');
var mod_admin_table_manager_news_component_1 = require('./modules/mod_admin_table_manager_news.component/mod_admin_table_manager_news.component');
var mod_admin_table_manager_category_product_component_1 = require('./modules/mod_admin_table_manager_category_product.component/mod_admin_table_manager_category_product.component');
var mod_admin_table_manager_category_user_component_1 = require('./modules/mod_admin_table_manager_category_user.component/mod_admin_table_manager_category_user.component');
var mod_admin_table_manager_category_customer_component_1 = require('./modules/mod_admin_table_manager_category_customer.component/mod_admin_table_manager_category_customer.component');
var mod_admin_table_manager_menu_component_1 = require('./modules/mod_admin_table_manager_menu.component/mod_admin_table_manager_menu.component');
var mod_admin_product_form_component_1 = require('./modules/mod_admin_product_form.component/mod_admin_product_form.component');
var mod_admin_user_form_component_1 = require('./modules/mod_admin_user_form.component/mod_admin_user_form.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, wid_header_component_1.WidHeaderComponent, home_component_1.HomeComponent, account_component_1.AccountComponent, products_component_1.ProductsComponent, mod_main_menu_component_1.ModMainMenuComponent,
                mod_banner_component_1.ModBannerComponent, mod_online_trip_component_1.ModOnlineTripComponent, mod_latest_products_component_1.ModLatestProductsComponent,
                mod_sale_products_component_1.ModSaleProductsComponent, mod_news_letter_component_1.ModNewsLetterComponent, wid_footer_component_1.WidFooterComponent,
                mod_sidebar_component_1.ModSidebarComponent, mod_list_products_component_1.ModListProductsComponent, mod_login_component_1.ModLoginComponent, mod_cart_component_1.ModCartComponent, mod_contact_component_1.ModContactComponent,
                mod_register_component_1.ModRegisterComponent, admin_home_component_1.AdminHomeComponent, mod_admin_left_sidebar_component_1.ModAdminLeftSidebarComponent,
                wid_admin_header_component_1.WidAdminHeaderComponent, mod_admin_content_header_component_1.ModAdminContentHeaderComponent, mod_admin_general_info_component_1.ModAdminGeneralInfoComponent,
                mod_admin_chart_component_1.ModAdminChartComponent, mod_admin_info_component_1.ModAdminInfoComponent, wid_admin_footer_component_1.WidAdminFooterComponent, admin_manager_product_component_1.AdminManagerProductComponent,
                mod_admin_table_manager_product_component_1.ModAdminTableManagerProductComponent, admin_manager_customer_component_1.AdminManagerCustomerComponent, mod_admin_table_manager_customer_component_1.ModAdminTableManagerCustomerComponent,
                admin_manager_user_component_1.AdminManagerUserComponent, admin_manager_user_component_1.AdminManagerUserComponent, mod_admin_table_manager_user_component_1.ModAdminTableManagerUserComponent, admin_manager_promotion_component_1.AdminManagerPromotionComponent,
                mod_admin_table_manager_promotion_component_1.ModAdminTableManagerPromotionComponent, admin_manager_partner_component_1.AdminManagerPartnerComponent, mod_admin_table_manager_partner_component_1.ModAdminTableManagerPartnerComponent,
                admin_manager_bill_component_1.AdminManagerBillComponent, mod_admin_table_manager_bill_component_1.ModAdminTableManagerBillComponent, admin_manager_news_component_1.AdminManagerNewsComponent, mod_admin_table_manager_news_component_1.ModAdminTableManagerNewsComponent,
                admin_manager_categoty_product_component_1.AdminManagerCategoryProductComponent, mod_admin_table_manager_category_product_component_1.ModAdminTableManagerCategoryProductComponent, admin_manager_category_user_component_1.AdminManagerCategoryUserComponent,
                mod_admin_table_manager_category_user_component_1.ModAdminTableManagerCategoryUserComponent, admin_manager_category_customer_component_1.AdminManagerCategoryCustomerComponent, mod_admin_table_manager_category_customer_component_1.ModAdminTableManagerCategoryCustomerComponent,
                admin_manager_menu_component_1.AdminManagerMenuComponent, mod_admin_table_manager_menu_component_1.ModAdminTableManagerMenuComponent, single_component_1.SingleComponent, mod_detail_product_component_1.ModDetailProductComponent,
                mod_comment_component_1.ModReviewsTabsComponent, mod_related_products_component_1.ModRelatedProductsComponent, contact_component_1.ContactComponent, checkout_component_1.CheckOutComponent, register_component_1.RegisterComponent,
                admin_product_form_component_1.AdminProductFormComponent, mod_admin_product_form_component_1.ModAdminProductFormComponent, admin_user_form_component_1.AdminUserFormComponent, mod_admin_user_form_component_1.ModAdminUserFormComponent, mod_paging_component_1.ModPagingComponent,
                admin_component_1.AdminComponent
            ],
            providers: [service_product_1.ProductService, service_user_1.UserService, service_partner_1.PartnerService, service_order_1.OrderService, service_order_detail_1.OrderDetailService,
                service_customer_1.CustomerService, service_comment_1.CommentService, service_cate_product_1.CateProductService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map