import { Injectable } from '@angular/core';
import { Partner } from '../../model/partner/partner';
import { list_partner } from '../../model/partner/mock_partner';

@Injectable()
export class PartnerService {

    constructor() { }

    getListPartner() {
        return list_partner;
    }

    getListPartnerPromise():Promise<Partner[]> {
        return Promise.resolve(list_partner);
    }
}