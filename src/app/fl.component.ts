import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { APP_PROVIDERS } from './fl.providers';
import { FriendsComponent } from './friends.component/friends.component';

@Component({
  moduleId: module.id,
  selector: 'fl-app',
  templateUrl: 'fl.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [APP_PROVIDERS]
})

@Routes([
  { path: '/', component: FriendsComponent },
  // { path: '/customer/:id', component: CustomerComponent },
  { path: '*', component: FriendsComponent }
])

export class FlAppComponent {

}
