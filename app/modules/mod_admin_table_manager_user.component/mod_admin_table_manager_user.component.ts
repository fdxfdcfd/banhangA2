import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user/user';
import { UserService } from '../../services/service_user/service_user';

@Component({
    moduleId: module.id,
    selector: 'mod_admin_table_manager_user',
    templateUrl: 'mod_admin_table_manager_user.component.html'
})
export class ModAdminTableManagerUserComponent implements OnInit {
    list_user_display: User[];
    constructor(private service_user: UserService) { }

    ngOnInit(): void {
    this.service_user.getListUserApi().subscribe(
        data => this.list_user_display = data.sort((item1, item2) => item1.id - item2.id), // put the data returned from the server in our variable
        error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
        () => console.log(this.list_user_display)//run this code in all cases
    );
  }
}