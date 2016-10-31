import { Injectable } from '@angular/core';
import { OrderDetail } from '../../model/order_detail/order_detail';
import { list_order_detail } from '../../model/order_detail/mock_order_detail';

@Injectable()
export class OrderDetailService {

    constructor() { }

    getListOrderDetail() {
        return list_order_detail;
    }

    getListOrderDetailPromise():Promise<OrderDetail[]> {
        return Promise.resolve(list_order_detail);
    }
}