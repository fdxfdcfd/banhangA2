import { Injectable } from '@angular/core';
import { Product } from '../../model/product/product';
import { list_product } from '../../model/product/mock_product';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
    url_api = "/app/service_api/api_product.php";
    handleError = 'lỗi rồi';

    constructor(private http: Http) { }

    getListProductApi() {
        return this.http.get(this.url_api).map(res => res.json());
    }

    getListProductByCateApi(id)
    {
        let body = JSON.stringify({ "product_cate_id": id });
        let option = new RequestOptions({ method: "post" });
        return this.http.post(this.url_api, body, option).map(res => res.json());
    }

    getListProductPromise():Promise<Product[]> {
        return Promise.resolve(list_product);
    }
}