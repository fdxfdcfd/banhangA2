import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';

@Component({
    moduleId: module.id,
    selector: 'mod_admin_table_manager_product',
    templateUrl: 'mod_admin_table_manager_product.component.html'
})
export class ModAdminTableManagerProductComponent implements OnInit {
    list_product_display: Product[];
    constructor(private service_product: ProductService) {
        this.service_product.getListProductPromise().then(list => this.list_product_display 
        = list);
    }
    ngOnInit() { }
}