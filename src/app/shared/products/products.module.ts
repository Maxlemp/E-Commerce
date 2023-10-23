import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarketAdminComponent } from './components/market-admin/market-admin.component';
import { MarketAdminModule } from './components/market-admin/market-admin/market-admin.module';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    HeaderComponent,
    SpinnerComponent,
    ProductComponent,
    SelectComponent
    
    
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HeaderComponent, SpinnerComponent, FormsModule, SelectComponent]
})
export class ProductsModule {}
