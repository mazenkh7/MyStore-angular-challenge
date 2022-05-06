import {Component, Input, OnInit} from '@angular/core';
import CartItemModel from "../../../models/cart.item.model";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  // @ts-ignore
  @Input() item: CartItemModel;
  // @ts-ignore
  quantity: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.quantity = this.item.quantity;
  }

  updateItemQuantity() {
    if (this.quantity<1)
      this.quantity = 1;
    if (this.quantity>10)
      this.quantity=10;
    this.item.quantity = this.quantity;
    this.cartService.updateItem(this.item);
  }

  removeCartItem() {
    this.cartService.removeItem(this.item.product.id);
  }
}
