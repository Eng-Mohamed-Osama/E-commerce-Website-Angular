import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';
import { ProductsIncartService } from '../products-incart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private PrdocutService:ProductsListService , private addToCarct:ProductsIncartService , private items:ProductsListService) {
    

  }

  ngOnInit(): void {
    this.PrdocutService.getProduct().subscribe((data) =>this.products = data)
      
}
addtocart(id){
  if(this.items.cartItems.length > 0){
    
    if(this.items.cartItems.some(el  => el.id ==  id)){
      return null
    }else{
      this.addToCarct.addproduct()

    }
  }else{
      
    this.addToCarct.addproduct()

    }

  this.PrdocutService.getProductid(id).subscribe((data) => this.PrdocutService.addproductTochart(data))
} 

}
