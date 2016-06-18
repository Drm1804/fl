import { Component, OnInit, NgZone} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.services';
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
  isAuth: boolean;
  friends: IFriend[] = [];

  constructor(private dataService:DataService, private zone:NgZone) {
    this.sortBy = 'last_name';


    this.zone.onMicrotaskEmpty
      .subscribe(() => this.zone.run(() => this.tick()));
  }

  ngOnInit() {

  }

  getMyFriends(){
    this.dataService.getFriends()
      .subscribe((friends:IFriend[]) => {
        this.friends = friends;
      });
  }

  tick() {
    if(localStorage.getItem('user.session') !== null){
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }

  }

  changeSort(sort:string){
    this.sortBy = sort;
  }
}

