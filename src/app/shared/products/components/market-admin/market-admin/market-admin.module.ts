import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketAdminComponent } from '../market-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../../select/select.component';
import { ProductsModule } from '../../../products.module';


@NgModule({
  declarations: [MarketAdminComponent],
  imports: [CommonModule, ReactiveFormsModule, ProductsModule],

})
export class MarketAdminModule {}
