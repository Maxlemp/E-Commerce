import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private service: CartsService,
    private build: FormBuilder,
    private productService: ProductsService
  ) {}
  // cartProducts: any[] = [];
  carts: any[] = [];
  products: any[] = [];
  total = 0;
  form!: FormGroup;
  details: any;
  // success: boolean = false;
  ngOnInit(): void {
    // this.getCartProducts();
    this.form = this.build.group({
      start: [''],
      end: [''],
    });
    this.getAllCarts();
  }
  // getCartProducts() {
  //   if ('cart' in localStorage) {
  //     this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
  //   }
  //   this.getCartTotal();
  // }
  // getCartTotal() {
  //   this.total = 0;
  //   for (let x in this.cartProducts) {
  //     this.total +=
  //       this.cartProducts[x].item.price * this.cartProducts[x].quantity;
  //   }
  // }
  // addAmount(index: number) {
  //   this.cartProducts[index].quantity++;
  //   this.getCartTotal();
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }
  // minsAmount(index: number) {
  //   this.cartProducts[index].quantity--;
  //   this.getCartTotal();
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }
  // detectChange() {
  //   this.getCartTotal();
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }
  // deleteProduct(index: number) {
  //   this.cartProducts.splice(index, 1);
  //   this.getCartTotal();
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }
  // clearCart() {
  //   this.cartProducts = [];
  //   this.getCartTotal();
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }
  // addCart() {
  //   let products = this.cartProducts.map((item) => {
  //     return { productId: item.item.id, quantity: item.quantity };
  //   });
  //   let Model = {
  //     userId: 5,
  //     date: new Date(),
  //     products: products,
  //   };
  //   this.service.createNewCart(Model).subscribe((res) => {
  //     this.success = true;
  //   });
  // }
  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res;
    });
  }
  applyFilter() {
    let date = this.form.value;
    this.service.getAllCarts(date).subscribe((res: any) => {
      this.carts = res;
    });
  }
  deleteCart(id: number) {
    this.service.deleteCart(id).subscribe((res) => {
      this.getAllCarts();
      alert('Cart Deleted Successfully');
    });
  }

  view(index: number) {
    this.products = [];
    this.details = this.carts[index];
    for (let x in this.details.products) {
      this.productService
        .getProductById(this.details.products[x].productId)
        .subscribe((res) => {
          this.products.push({
            item: res,
            quantity: this.details.products[x].quantity,
          });
        });
    }
  }
}
