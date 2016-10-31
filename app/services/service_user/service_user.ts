import { Injectable } from '@angular/core';
import { User } from '../../model/user/user';
import { list_user } from '../../model/user/mock_user';

@Injectable()
export class UserService {

    constructor() { }
    getListUser() {
        return list_user;
    }

    getListUserPromise():Promise<User[]> {
        return Promise.resolve(list_user);
    }
}