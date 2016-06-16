import { Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'friends',
    templateUrl: 'friends.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class FriendsComponent implements OnInit {

    ngOnInit() {
    }
}

