import { Component, OnInit } from '@angular/core';
import { CateProduct } from '../../model/cate_product/cate_product';
import { CateProductService } from '../../services/service_cate_product/service_cate_product';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'mod_main_menu',
    templateUrl: 'mod_main_menu.component.html'
})
export class ModMainMenuComponent implements OnInit {
    list_cate_product_display: CateProduct[];
    constructor(private service: CateProductService, private router: Router) { }
    ngOnInit(): void {
        this.service.getListCateProductApi().subscribe(
            data => this.list_cate_product_display = data, // put the data returned from the server in our variable
            error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
            () => console.log(this.list_cate_product_display)//run this code in all cases
        );
    }
    gotoListProducts(cate_product: CateProduct): void {
        let link = ['/products', cate_product.id];
        this.router.navigate(link);
    }
}