import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModule } from './products/products.module';
import { HeaderComponent } from './products/components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';
import { CartComponent } from './carts/components/cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [HeaderComponent, FormsModule],
})
export class SharedModule {}
