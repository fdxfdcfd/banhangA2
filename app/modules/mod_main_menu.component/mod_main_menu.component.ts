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
    constructor(private service_cate_product: CateProductService, private router: Router) {
        this.service_cate_product.getListCateProductPromise().then(list => this.list_cate_product_display 
        = list.filter(item => item.status == 1));
    }
    ngOnInit() { }
    gotoListProducts(cate_product: CateProduct): void {
        let link = ['/products', cate_product.id];
        this.router.navigate(link);
    }
}