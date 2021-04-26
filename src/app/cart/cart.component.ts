import { Component, OnInit } from '@angular/core';
import { ProductsIncartService } from '../products-incart.service';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any=0;
  cartItems=[];
  // counterItem=1;
  constructor(private purchaseitems:ProductsIncartService , private PrdocutService:ProductsListService) {
    
    this.items = this.purchaseitems.purchased
  }
  
  ngOnInit(): void {
    this.cartItems= this.PrdocutService.cartItems;
  }
  removeItemFromCart(id){
    
    let cartNumberOfitems:Array<any> = this.cartItems.filter(x => x.id === id)
    // this.cartItems.indexOf(this.cartItems.some((el:any) => el.id == id))  
    // myArray.filter(x => x.id === '45').map(x => x.foo)
    if(cartNumberOfitems[0].counterItem <=1){
      cartNumberOfitems[0].counterItem=1;


    }
    else{
      cartNumberOfitems[0].counterItem--
    this.purchaseitems.removeproduct()

    }
  }
  addItemFromCart(id){
    this.purchaseitems.addproduct()
    
    let cartNumberOfitems:Array<any> = this.cartItems.filter(x => x.id === id)
    cartNumberOfitems[0].counterItem++
  }
  removeItem(id:any , counterItem){
    this.purchaseitems.deleteCounterforItem(counterItem)
    console.log(counterItem)
    this.PrdocutService.deleteItem(id)
    
  }

}
