import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    
    
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HeaderComponent, SelectComponent, SpinnerComponent, FormsModule],
})
export class ProductsModule {}
