import {Component, Input, OnInit} from '@angular/core';
import ProductModel from "../../../models/product.model";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private cartService: CartService ) {
  }

  @Input() product: ProductModel = new ProductModel();
  quantity: number = 1;

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.quantity)
  }

}
