import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';



import { IFriend } from '../interfaces';

@Injectable()
export class DataService {

  _baseUrl: string = '';
  friends: IFriend[];

  constructor(private http: Http) { }

  getFriends() : Observable<IFriend[]> {
    if (!this.friends) {
      var dataUser = JSON.parse(localStorage.getItem('user.session'))
      console.log(dataUser)
      console.log(dataUser.user.id)
      return this.http.post('https://api.vk.com/method/friends.get?user_id='+dataUser.user.id+'&count=100&fields=bdate&v=5.52', dataUser)
        .map((res: Response) => {
          this.friends = res.json();
          return this.friends;
        })
        .catch(this.handleError);
    }
    else {
      //return cached data
      return this.createObservable(this.friends);
    }
  }

  private createObservable(data: any) : Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next(data);
      observer.complete();
    });
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
