///<reference path="../../globals.d.ts"/>
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public users: any;
  private _usersObserver: any;
  private _users:any = [];

  constructor() {
    // this.users = new Observable(observer => {
    //   this._usersObserver = observer;
    // });
  }


  private getUsers () {
    VK.Api.call('friends.get', {fields: ['photo_50','education']}, function(r){
      console.log(r)
      if(r.response) {
        this._users = r.response;
        console.log("Пользователи загружены!");
        // this.fetchUsers();
      }else{
        console.log("Ошибка получения пользователей!");
      }
    });
  }

  // Инициализируем vk.com
  init() {
      VK.init({
        apiId: 5419902
      });
  }

  checkLoginStatus(){
    VK.Auth.getLoginStatus(function(response){
      if (response.session && localStorage.getItem('user.session')!== null) {
        this.getUsers();
      } else {
        VK.Auth.login(function(response){
          if (response.session) {
            localStorage.setItem('user.session', JSON.stringify(response.session) );
            this.getUsers();
          } else {
            console.log('/* Пользователь нажал кнопку Отмена в окне авторизации */');
            return false;
          }
        });
      }
    });
  }
}
