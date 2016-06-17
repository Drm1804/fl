import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

import {APP_PROVIDERS} from './fl.providers';
import {FriendsComponent} from './friends.component/friends.component';
import {NavbarComponent} from './shared/index'
import {AboutComponent} from './about/index'
import {AuthService} from './shared/services/auth.services';

@Component({
    moduleId: module.id,
    selector: 'fl-app',
    styleUrls: ['fl.component.css'],
    templateUrl: 'fl.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    providers: [APP_PROVIDERS, AuthService]
})

@Routes([
    {path: '/', component: FriendsComponent},
    {path: '/about', component: AboutComponent},
    // { path: '/customer/:id', component: CustomerComponent },
    {path: '*', component: FriendsComponent}
])

export class FlAppComponent implements OnInit {


  constructor(private authService:AuthService) {}

  ngOnInit() {
    console.log(this.authService)
    this.authService.init()

  }


}
