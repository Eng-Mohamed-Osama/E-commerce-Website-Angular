import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsIncartService {
 count=0;
 private counter = new ReplaySubject(0);
 purchased=this.counter.asObservable();
  constructor() {

  }
  addproduct(){
    this.count++;
    console.log('counter' +this.count)
    this.counter.next(this.count);
   }
   deleteCounterforItem(totalnumber:number){
    this.count= this.count-totalnumber;
    this.counter.next(this.count);
   }
  removeproduct(){
    if(this.count <= 0){
      this.count;
      this.counter.next(this.count);

    }
    else{
      this.count--;
    this.counter.next(this.count);
    }
  }
}
