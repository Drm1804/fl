///<reference path="../../globals.d.ts"/>
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public isAuth:boolean;

  constructor() {
    this.isAuth = false;
  }


  private getUsers() {
    VK.Api.call('friends.get', {fields: ['photo_50', 'education']}, function (r) {
      if (r.response) {
        this._users = r.response;
      }
    });
  }

  // Инициализируем vk.com
  init() {
    VK.init({
      apiId: 4986848
    });

    if (localStorage.getItem('user.session') !== null) {
      console.log(localStorage.getItem('user.session'))
      this.isAuth = true;
    }
  }

  logIn() {

    VK.Auth.login((response)=> {
      localStorage.setItem('user.session', JSON.stringify(response.session));
      this.isAuth = true;
    });
  }

  logOut() {

    localStorage.removeItem('user.session');
    VK.Auth.logout(()=> {
      localStorage.removeItem('user.session');
      this.isAuth = false;

    });

  }

  checkLoginStatus() {

    var _this = this;

    VK.Auth.getLoginStatus(function (response) {
      if (response.session && localStorage.getItem('user.session')!== null) {
        _this.isAuth = true;
      }
    });
  }
}
