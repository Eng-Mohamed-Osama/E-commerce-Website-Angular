import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path : '' , component : ProductsComponent},
{path: 'cart' , component: CartComponent},
{path: 'profile' , component: ProfileComponent},
{path:'product/:id' , component: ProductsDetailsComponent},
{path:'**' , component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
