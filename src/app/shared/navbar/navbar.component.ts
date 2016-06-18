import { Component, OnInit, NgZone } from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

import {AuthService} from '../services/auth.services';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  title:string;
  isAuth: boolean;

  constructor(public router:Router, private authService:AuthService, private zone:NgZone) {
    this.title = 'FL';
    this.zone.onMicrotaskEmpty
      .subscribe(() => this.zone.run(() => this.tick()));
  }

  ngOnInit() {
  }

  tick() {

    // На этом этапе у меня возникла проблема с сихронизацие данных между сущностями, и я спользовал localstorage в качесве сервиса по хранению данных
    // думаю, это не очень хорошая идея
    // Если тут попробовать получить состояние isAuth, то всегда приходит одно и тоже значение, не знаю,  с чем это связано


    if(localStorage.getItem('user.session') !== null){
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }

  }

  logIn() {
    this.authService.logIn();
  }

  logOut() {
    this.authService.logOut()
  }

  isActiveRoute(route:string) {
    return this.router.serializeUrl(this.router.urlTree) == this.router.serializeUrl((this.router.createUrlTree([route])));
  }


}
