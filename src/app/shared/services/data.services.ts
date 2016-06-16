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
      return this.http.get(this._baseUrl + 'friends.json')
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
