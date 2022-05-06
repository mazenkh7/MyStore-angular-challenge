import ProductModel from "./product.model";

export default class CartItemModel{
  //design to be used in cart only
  product: ProductModel;
  quantity: number;

  constructor(product: ProductModel, quantity: number) {
    this.quantity = quantity;
    this.product = product;
  }

}
