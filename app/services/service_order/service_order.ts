import { Injectable } from '@angular/core';
import { Order } from '../../model/order/order';
import { list_order } from '../../model/order/mock_order';

@Injectable()
export class OrderService {

    constructor() { }

    getListOrder() {
        return list_order;
    }

    getListOrderPromise():Promise<Order[]> {
        return Promise.resolve(list_order);
    }
}