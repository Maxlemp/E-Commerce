import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any = {};
  loading: boolean = false;
  rates:any[]=[]
  counts:any[]=[]
  constructor(private route:ActivatedRoute, private service:ProductsService){
    this.id= this.route.snapshot.paramMap.get("id")
    
  }
ngOnInit(): void {
    this.getProduct();
}
getProduct(){
  this.loading=true;
  this.service.getProductById(this.id).subscribe(res =>{
    this.loading = false;
    this.data=res;
    this.rates=this.data.rating.rate;
    this.counts=this.data.rating.count;
  }, error=>{
    this.loading = false;
    alert(error)
  })
}
}
