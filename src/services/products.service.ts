import {Injectable} from "@angular/core";
import ProductModel from "../models/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductsService{

  jsonFilePath: string = '../assets/data.json';

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<ProductModel[]>{
    //mocking http get request with local json file
    return this.httpClient.get<ProductModel[]>(this.jsonFilePath);
  }

  getProduct(id: number): ProductModel{
    let product: ProductModel;
    this.httpClient.get<ProductModel[]>(this.jsonFilePath).subscribe(response =>
    {
      product = response.filter(p=>p.id==id)[0];
      console.log("hi",product);
      return product;
    });
    // @ts-ignore
    return product;
  }
}
