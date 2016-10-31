import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer/customer';
import { list_customer } from '../../model/customer/mock_customer';

@Injectable()
export class CustomerService {

    constructor() { }

    getListCustomer() {
        return list_customer;
    }

    getListCustomerPromise():Promise<Customer[]> {
        return Promise.resolve(list_customer);
    }
}