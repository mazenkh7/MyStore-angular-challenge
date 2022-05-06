import {EventEmitter, Injectable, Output} from "@angular/core";
import ProductModel from "../models/product.model";
import CartItemModel from "../models/cart.item.model";

@Injectable()
export class CartService {

  items: CartItemModel[] = [];
  @Output() itemsEvent = new EventEmitter<CartItemModel[]>();
  @Output() totalAmountChanged = new EventEmitter<number>();

  constructor() {
    // @ts-ignore
    let data = JSON.parse(localStorage.getItem("cart"));
    if (data){
      this.items = data;
    }
  }

  addToCart(product: ProductModel, quantity: number) {
    let id: number = this.items.findIndex(item => item.product.id === product.id)
    if (id === -1) {
      this.items.push(new CartItemModel(product, quantity));
    }
    else{
      this.items[id].quantity+=Number(quantity);
    }
    this.itemsEvent.emit(this.items);
    this.totalAmountChanged.emit();
    this.updateCache();
    alert("Item added successfully!");
  }

  updateItem(updatedItem: CartItemModel) {
    console.log(updatedItem);
    let id: number = this.items.findIndex(item => item.product.id === updatedItem.product.id)
    this.items[id] = updatedItem;
    this.itemsEvent.emit(this.items);
    this.totalAmountChanged.emit();
    this.updateCache();
  }

  removeItem(id: number){
    this.items = this.items.filter(item=>item.product.id!==id)
    this.itemsEvent.emit(this.items);
    this.totalAmountChanged.emit();
    this.updateCache();
  }

  clearCart(){
    this.items = [];
    this.itemsEvent.emit(this.items);
    this.totalAmountChanged.emit();
    this.updateCache();
  }

  updateCache(){
    localStorage.setItem("cart",JSON.stringify(this.items));
  }
}
