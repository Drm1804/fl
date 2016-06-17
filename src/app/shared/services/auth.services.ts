///<reference path="../../globals.d.ts"/>
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {


  constructor() {
    // this.users = new Observable(observer => {
    //   this._usersObserver = observer;
    // });
    // this.init();
  }

  // Инициализируем vk.com
  init() {
      VK.init({
        apiId: 5419902
      });
    // window.onload = function() {

    //
    //   // this.CheckStatusLogin();
    // };

  }
}
