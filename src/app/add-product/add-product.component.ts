import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../core/product';
import { ProductConsumerService } from '../services/product-consumer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product!:product
  constructor(private _produitService:ProductService,private router: Router,private ProductConsumer:ProductConsumerService ) { }

  ngOnInit(): void {
    this.product=new product();
  }
ajouter(){
  //this._produitService.addproduct(this.product)
  this.ProductConsumer.addProduct(this.product).subscribe({
    next:()=> this.router.navigateByUrl('/products'),
    error:(error)=>console.log(error),
    complete:()=>console.log("DONE")
  })
 
  console.log(this.product)
 
  }
}

