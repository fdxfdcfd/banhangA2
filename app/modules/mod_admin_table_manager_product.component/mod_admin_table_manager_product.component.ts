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
    constructor(private service_product: ProductService) { }
    ngOnInit(): void {
    this.service_product.getListProductApi().subscribe(
        data => this.list_product_display = data, // put the data returned from the server in our variable
        error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
        () => console.log(this.list_product_display)//run this code in all cases
    );
  }
}