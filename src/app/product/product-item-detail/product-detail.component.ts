import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import ProductModel from "../../../models/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // @ts-ignore
  product: ProductModel;
  quantity: number = 1;

  constructor(private productsService: ProductsService, private activeRoute: ActivatedRoute, private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    let id: number = Number(this.activeRoute.snapshot.paramMap.get('id'))
    if (isNaN(id)){
      this.router.navigate(['/404']);
    }else{
      this.productsService.getAllProducts().subscribe(response=>{
        this.product = response.filter(p=>p.id==id)[0];
        if (this.product === undefined)
          this.router.navigate(['/404']);
      });
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.quantity);
  }
}
