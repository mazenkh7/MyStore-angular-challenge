import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductItemComponent} from './product/product-item/product-item.component';
import {ProductDetailComponent} from './product/product-item-detail/product-detail.component';
import {ProductListComponent} from './product/product-list.component';
import {CartComponent} from './cart/cart.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductsService} from "../services/products.service";
import {CartService} from "../services/cart.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    OrderConfirmedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
