import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderFriendsBy"
})


export class OrderFriendsByPipe implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {
    array.sort(function(a: any, b: any){
        if (a[args] < b[args]) {
          return -1;
        } else if (a[args] > b[args]) {
          return 1;
        } else {
          return 0;
        }
    });
    return array;
  }
}
