import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductConsumerService {
apiUrl:string ="http://localhost:3000/products"
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<product[]>(this.apiUrl)
  }
  getProductsById(id:number){
    return this.http.get<product>(this.apiUrl+"/"+id)
  }
  addProduct(product:product){
    return this.http.post(this.apiUrl,product)
  }
  updateProduct(product:product){
    return this.http.put(this.apiUrl+'/'+product.id,product)
  }
  deleteProduct(id:string){
    return this.http.delete(this.apiUrl+"/"+id)
  }
}
