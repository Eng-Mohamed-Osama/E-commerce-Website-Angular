import { Component, OnInit } from '@angular/core';
import { ProductsIncartService } from '../products-incart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items:any=0;

  constructor(private purchaseitems:ProductsIncartService) { 
     this.purchaseitems.purchased.subscribe(data => this.items = data)

  }

  ngOnInit(): void {
  }

}
