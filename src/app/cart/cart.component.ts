import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import CartItemModel from "../../models/cart.item.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItemModel[] = []
  sum: number = 0;
  fullName: string= "";
  address: string = "";
  ccNumber: string = "";

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = cartService.items;
    this.cartService.itemsEvent.subscribe(emitted => {
      this.cartItems = emitted;
    })
    this.cartService.totalAmountChanged.subscribe(() =>{
      this.recalculateSum();
    })
  }


  recalculateSum(): void{
    this.sum=0;
    this.cartItems.map(item=>{
      this.sum+= item.quantity*item.product.price;
    })
    this.sum=Number(this.sum.toFixed(2));
  }

  ngOnInit(): void {
    this.recalculateSum();
  }

  submitOrder() {
    console.log(this.fullName);
    console.log(this.cartItems);
    console.log(this.address);
    console.log(this.ccNumber);
    this.router.navigate(['/success'], {queryParams: {name: this.fullName, total: this.sum}});
    this.cartService.clearCart();
  }
}
