import { Component, OnInit } from '@angular/core';
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

  title: string;

  constructor(public router: Router, private authService:AuthService) {
    this.title = 'FL'
  }

  ngOnInit() {
  }


  isActiveRoute(route: string){
    return this.router.serializeUrl(this.router.urlTree) == this.router.serializeUrl((this.router.createUrlTree([route])));
  }
  logIn(){
    this.authService.checkLoginStatus()
  }

}
