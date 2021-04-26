import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  currentProduct:any;
  productId;
  constructor(private PrdocutService:ProductsListService , private activated : ActivatedRoute) { 
    this.activated.params.subscribe(params =>this.productId = params.id)
  }

  ngOnInit(): void {
    this.PrdocutService.getProductid(this.productId).subscribe((data) =>{this.currentProduct = data})
    
      
}

}
