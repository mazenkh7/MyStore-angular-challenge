import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product/product-list.component";
import {CartComponent} from "./cart/cart.component";
import {ProductDetailComponent} from "./product/product-item-detail/product-detail.component";
import {OrderConfirmedComponent} from "./order-confirmed/order-confirmed.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'success', component: OrderConfirmedComponent},
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
