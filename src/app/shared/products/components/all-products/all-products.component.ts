import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  index:any
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    // this.deleteNullProduct(event,this.index);
  }
  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) {}

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('error');
      }
    );
  }
  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
        console.log(res);
      },
      (error) => {
        this.loading = false;
        alert('error');
      }
    );
  }
  filterCategory(event: any) {
    let value = event.target.value;

    if (value == 'all') {
      this.getProducts();
    } else {
      this.getProductsCategory(value);
    }
  }
  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.loading = false;
      this.products = res;
    });
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find((item) => item.item.id == event.item.id);
      console.log(event.quantity)
      if (exist) {
        alert('Product Already Added to Cart!');
      } else {
        this.cartProducts.push(event);
        console.log(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      console.log(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
    
  } /*JSON.stringify() // saves data just like u sent it
  JSON.parse() // gets data just like it's saved in the localStorage*/
  //this.carProducts= localStorage.getItem("cart")

//   deleteNullProduct(event:any,index:number){
//     if(item.quantity === 0 ){

//       this.cartProducts.splice(index,1)
//       localStorage.setItem("cart", JSON.stringify(this.cartProducts))
//     }
//  console.log(event.quantity)
//     }
}
