import { Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataService } from '../shared/services/data.services';
import { IFriend } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'friends',
  templateUrl: 'friends.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class FriendsComponent implements OnInit {

  friends: IFriend[] = [];

  constructor(private dataService:DataService) {
  }

  ngOnInit() {

    this.dataService.getFriends()
      .subscribe((friends:IFriend[]) => {
        this.friends = friends;
      });
  }
}

