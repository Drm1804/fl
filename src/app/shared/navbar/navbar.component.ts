import { Component, OnInit } from '@angular/core';

import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'FL'
  }

  ngOnInit() {
  }

}
