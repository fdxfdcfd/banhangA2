import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user/user';
@Component({
    moduleId: module.id,
    selector: 'mod_register',
    templateUrl: 'mod_register.component.html'
})
export class ModRegisterComponent implements OnInit {
    model = new User(1,'', '', '', '', '','','',1,'','','',0);
    constructor() { }

    ngOnInit() { }
}