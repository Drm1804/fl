import { Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.services';
import { AuthService } from '../shared/services/auth.services';
import { IFriend } from '../shared/interfaces';
import { OrderFriendsByPipe } from './shared/orderfriendsby.pipe';

@Component({
  moduleId: module.id,
  selector: 'friends',
  templateUrl: 'friends.component.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [ OrderFriendsByPipe ]
})

export class FriendsComponent implements OnInit {

  sortBy: string;
  friends: IFriend[] = [];

  constructor(private dataService:DataService, private authService:AuthService) {
    this.sortBy = 'last_name'
  }

  ngOnInit() {
    this.dataService.getFriends()
      .subscribe((friends:IFriend[]) => {
        this.friends = friends;
      });
  }

  isAuth() {
    return (this.authService.isAuth)
  }

  logIn(){
    this.authService.logIn();
  }

  logOut(){
    this.authService.logOut()
  }

  changeSort(sort:string){
    this.sortBy = sort;
  }
}

