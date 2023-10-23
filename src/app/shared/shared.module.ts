import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModule } from './products/products.module';
import { HeaderComponent } from './products/components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';
import { CartComponent } from './carts/components/cart/cart.component';
import { MarketAdminModule } from './products/components/market-admin/market-admin/market-admin.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MarketAdminModule
  ],
  exports: [HeaderComponent, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
