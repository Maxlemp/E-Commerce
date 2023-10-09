import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shared/carts/components/cart/cart.component';
import { AllProductsComponent } from './shared/products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './shared/products/components/products-details/products-details.component';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
