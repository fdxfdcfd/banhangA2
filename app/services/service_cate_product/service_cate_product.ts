import { Injectable } from '@angular/core';
import { CateProduct } from '../../model/cate_product/cate_product';
import { list_cate_product } from '../../model/cate_product/mock_cate_product';

@Injectable()
export class CateProductService {

    constructor() { }

    getListCateProduct() {
        return list_cate_product;
    }

    getListCateProductPromise(): Promise<CateProduct[]> {
        return Promise.resolve(list_cate_product);
    }

    getCateProduct(id: number): Promise<CateProduct> {
        return this.getListCateProductPromise()
            .then(list_cate_product => list_cate_product.find(cate_product => cate_product.id == id));
    }
}