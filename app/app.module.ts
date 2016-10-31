import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent }   from './app.component';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ProductService } from './services/service_product/service_product';
import { UserService } from './services/service_user/service_user';
import { PartnerService } from './services/service_partner/service_partner';
import { OrderService } from './services/service_order/service_order';
import { OrderDetailService } from './services/service_order_detail/service_order_detail';
import { CustomerService } from './services/service_customer/service_customer';
import { CommentService } from './services/service_comment/service_comment';
import { CateProductService } from './services/service_cate_product/service_cate_product';

import { HomeComponent } from './pages/home.component/home.component';
import { ProductsComponent } from './pages/products.component/products.component';
import { AccountComponent } from './pages/account.component/account.component';
import { CheckOutComponent } from './pages/checkout.component/checkout.component';
import { ContactComponent } from './pages/contact.component/contact.component';
import { RegisterComponent } from './pages/register.component/register.component';
import { SingleComponent } from './pages/single.component/single.component';
import { AdminHomeComponent } from './pages/admin_home.component/admin_home.component';
import { AdminManagerProductComponent } from './pages/admin_manager_product.component/admin_manager_product.component';
import { AdminManagerCustomerComponent } from './pages/admin_manager_customer.component/admin_manager_customer.component';
import { AdminManagerUserComponent } from './pages/admin_manager_user.component/admin_manager_user.component';
import { AdminManagerPromotionComponent } from './pages/admin_manager_promotion.component/admin_manager_promotion.component';
import { AdminManagerPartnerComponent  } from './pages/admin_manager_partner.component/admin_manager_partner.component';
import { AdminManagerBillComponent } from './pages/admin_manager_bill.component/admin_manager_bill.component';
import { AdminManagerNewsComponent } from './pages/admin_manager_news.component/admin_manager_news.component';
import { AdminManagerCategoryProductComponent } from './pages/admin_manager_category_product.component/admin_manager_categoty_product.component';
import { AdminManagerCategoryUserComponent } from './pages/admin_manager_category_user.component/admin_manager_category_user.component';
import { AdminManagerCategoryCustomerComponent } from './pages/admin_manager_category_customer.component/admin_manager_category_customer.component';
import { AdminManagerMenuComponent } from './pages/admin_manager_menu.component/admin_manager_menu.component';
import { AdminProductFormComponent } from './pages/admin_product_form.component/admin_product_form.component';
import { AdminUserFormComponent } from './pages/admin_user_form.component/admin_user_form.component';
import { AdminComponent } from './pages/admin.component/admin.component';

import {  WidHeaderComponent  } from './widgets/wid_header.component/wid_header.component';
import {  WidFooterComponent  } from './widgets/wid_footer.component/wid_footer.component';
import {  WidAdminHeaderComponent } from './widgets/wid_admin_header.component/wid_admin_header.component';
import { WidAdminFooterComponent } from './widgets/wid_admin_footer.component/wid_admin_footer.component';

import { ModMainMenuComponent } from './modules/mod_main_menu.component/mod_main_menu.component';
import { ModBannerComponent } from './modules/mod_banner.component/mod_banner.component';
import { ModOnlineTripComponent } from './modules/mod_online_trip.component/mod_online_trip.component';
import { ModLatestProductsComponent } from './modules/mod_latest_products.component/mod_latest_products.component';
import { ModSaleProductsComponent } from './modules/mod_sale_products.component/mod_sale_products.component';
import { ModNewsLetterComponent } from './modules/mod_news_letter.component/mod_news_letter.component';
import { ModSidebarComponent } from './modules/mod_sidebar.component/mod_sidebar.component';
import { ModListProductsComponent } from './modules/mod_list_products.component/mod_list_products.component';
import { ModPagingComponent } from './modules/mod_paging.component/mod_paging.component';
import { ModLoginComponent } from './modules/mod_login.component/mod_login.component';
import { ModCartComponent } from './modules/mod_cart.component/mod_cart.component';
import { ModContactComponent } from './modules/mod_contact.component/mod_contact.component';
import { ModRegisterComponent } from './modules/mod_register.component/mod_register.component';
import { ModDetailProductComponent } from './modules/mod_detail_product.component/mod_detail_product.component';
import { ModRelatedProductsComponent } from './modules/mod_related_products.component/mod_related_products.component';
import { ModReviewsTabsComponent } from './modules/mod_comment.component/mod_comment.component';
import { ModAdminLeftSidebarComponent } from './modules/mod_admin_left_sidebar.component/mod_admin_left_sidebar.component';
import { ModAdminContentHeaderComponent } from './modules/mod_admin_content_header.component/mod_admin_content_header.component';
import { ModAdminGeneralInfoComponent } from './modules/mod_admin_general_info.component/mod_admin_general_info.component';
import { ModAdminChartComponent } from './modules/mod_admin_chart.component/mod_admin_chart.component';
import { ModAdminInfoComponent } from './modules/mod_admin_info.component/mod_admin_info.component';
import { ModAdminTableManagerProductComponent } from './modules/mod_admin_table_manager_product.component/mod_admin_table_manager_product.component';
import { ModAdminTableManagerCustomerComponent } from './modules/mod_admin_table_manager_customer.component/mod_admin_table_manager_customer.component';
import { ModAdminTableManagerUserComponent } from './modules/mod_admin_table_manager_user.component/mod_admin_table_manager_user.component';
import { ModAdminTableManagerPromotionComponent } from './modules/mod_admin_table_manager_promotion.component/mod_admin_table_manager_promotion.component';
import { ModAdminTableManagerPartnerComponent } from './modules/mod_admin_table_manager_partner.component/mod_admin_table_manager_partner.component';
import { ModAdminTableManagerBillComponent } from './modules/mod_admin_table_manager_bill.component/mod_admin_table_manager_bill.component';
import { ModAdminTableManagerNewsComponent } from './modules/mod_admin_table_manager_news.component/mod_admin_table_manager_news.component';
import { ModAdminTableManagerCategoryProductComponent } from './modules/mod_admin_table_manager_category_product.component/mod_admin_table_manager_category_product.component';
import { ModAdminTableManagerCategoryUserComponent } from './modules/mod_admin_table_manager_category_user.component/mod_admin_table_manager_category_user.component';
import { ModAdminTableManagerCategoryCustomerComponent } from './modules/mod_admin_table_manager_category_customer.component/mod_admin_table_manager_category_customer.component';
import { ModAdminTableManagerMenuComponent } from './modules/mod_admin_table_manager_menu.component/mod_admin_table_manager_menu.component';
import { ModAdminProductFormComponent } from './modules/mod_admin_product_form.component/mod_admin_product_form.component';
import { ModAdminUserFormComponent } from './modules/mod_admin_user_form.component/mod_admin_user_form.component';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, WidHeaderComponent, HomeComponent,AccountComponent,ProductsComponent, ModMainMenuComponent,
                ModBannerComponent, ModOnlineTripComponent, ModLatestProductsComponent, 
                ModSaleProductsComponent, ModNewsLetterComponent, WidFooterComponent,
                ModSidebarComponent, ModListProductsComponent, ModLoginComponent, ModCartComponent,ModContactComponent ,
                ModRegisterComponent, AdminHomeComponent, ModAdminLeftSidebarComponent,
                WidAdminHeaderComponent, ModAdminContentHeaderComponent, ModAdminGeneralInfoComponent,
                ModAdminChartComponent, ModAdminInfoComponent,WidAdminFooterComponent, AdminManagerProductComponent,
                ModAdminTableManagerProductComponent, AdminManagerCustomerComponent,ModAdminTableManagerCustomerComponent,
                AdminManagerUserComponent,AdminManagerUserComponent, ModAdminTableManagerUserComponent,AdminManagerPromotionComponent,
                ModAdminTableManagerPromotionComponent, AdminManagerPartnerComponent, ModAdminTableManagerPartnerComponent,
                AdminManagerBillComponent, ModAdminTableManagerBillComponent, AdminManagerNewsComponent, ModAdminTableManagerNewsComponent,
                AdminManagerCategoryProductComponent,ModAdminTableManagerCategoryProductComponent,AdminManagerCategoryUserComponent,
                ModAdminTableManagerCategoryUserComponent, AdminManagerCategoryCustomerComponent, ModAdminTableManagerCategoryCustomerComponent,
                AdminManagerMenuComponent, ModAdminTableManagerMenuComponent, SingleComponent, ModDetailProductComponent,
                ModReviewsTabsComponent, ModRelatedProductsComponent, ContactComponent, CheckOutComponent, RegisterComponent,
                AdminProductFormComponent, ModAdminProductFormComponent,AdminUserFormComponent, ModAdminUserFormComponent, ModPagingComponent,
                AdminComponent
                ],
  providers: [ ProductService, UserService, PartnerService, OrderService, OrderDetailService,
              CustomerService, CommentService, CateProductService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
