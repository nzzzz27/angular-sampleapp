import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: any;
  
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    const productObserbable = this.productService.getProducts();

    productObserbable.subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error('次のエラーが発生しました: ' + error)
      }
    )
  }

}
