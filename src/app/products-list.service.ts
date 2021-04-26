import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  cartItems=[];
  updateItem;
  constructor(private http:HttpClient) { 
    
  }
  getProduct(){
    return this.http.get('https://fakestoreapi.com/products/')
  }
  getProductid(id){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
  addproductTochart(item){
    if(this.cartItems.length > 0){
    
    if(this.cartItems.some(el  => el.id ==  item.id)){
      return null
    }else{
      item.counterItem = 1
      this.cartItems.push(item)

    }
  }else{
      item.counterItem = 1
      this.cartItems.push(item)

    }
    console.log(this.cartItems.length)
  }
   
  deleteItem(id){
    for (var i = this.cartItems.length - 1; i >= 0; --i) {
      if (this.cartItems[i].id == id) {
          this.cartItems.splice(i,1);
      }
  }
    
      return this.cartItems
  }
}


