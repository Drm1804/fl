import { Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

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
  friends: IFriend[] = [];

  constructor(private dataService:DataService) {
    this.sortBy = 'last_name'
  }

  ngOnInit() {

    this.dataService.getFriends()
      .subscribe((friends:IFriend[]) => {
        this.friends = friends;
      });
  }

  changeSort(sort:string){
    this.sortBy = sort;
    console.log( this.sortBy)
  }
}

