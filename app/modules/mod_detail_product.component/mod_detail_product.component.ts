import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product/product';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/service_product/service_product';


@Component({
    moduleId: module.id,
    selector: 'mod_detail_product',
    templateUrl: 'mod_detail_product.component.html'
})
export class ModDetailProductComponent implements OnInit {
    constructor(
        private service_product: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input() product: Product;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.service_product.getListProductApi().subscribe(
                data => this.product = data.find(item => item.id == id), // put the data returned from the server in our variable
                error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
                () => console.log(this.product)//run this code in all cases
            );
        });
    }
}