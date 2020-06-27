import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { 
        path: "products", component: ProductComponent,
            children: [
                { path: "", component: ProductListComponent },
                { path: "detail/:productId", component: ProductDetailComponent }
            ]
    },
  ];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
  ],
  imports: [
      RouterModule.forChild(routes),
      CommonModule,
    ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
