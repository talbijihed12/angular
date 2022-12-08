import { StmtModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../core/product';
import { CalculService } from '../services/calcul.service';
import { ProductConsumerService } from '../services/product-consumer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:product[]=[]
m!:number
  constructor(private _productService: ProductService,private calcul:CalculService,private ProductConsumer:ProductConsumerService,private router:Router) { }

  ngOnInit(): void {
   
   // this.products=this._productService.productsList;
   this.ProductConsumer.getProducts().subscribe({
    next :(data)=> this.products = data,
    error : (error) => console.log(error),
    complete : ()=> console.log("!!!1 done ")
  })
     
  }
  Buy(id:string){
    this.products.map((product)=>product.id.match(id)&&product.quantity--)
    }
    message(){
      this.calcul.getNumberOf(this.products,"quantity",0)
    }
    supprimer(id:string){
      this.ProductConsumer.deleteProduct(id).subscribe({
        next: ()=>this.router.navigateByUrl('/products'),
        error: (error)=>console.log(error),
        complete:()=>console.log("Supprimer avec succes")
        
      })
      window.location.reload()
     

    }
   
  }


