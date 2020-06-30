import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {      
      const productObserbable = this.productService.getProductById(params.get('productId'));

      productObserbable.subscribe(
        data => {
          this.product = data;
          console.log(this.product);
          
        },
        error => {
          console.error('次のエラーが発生しました: ' + error)
        }
      )
    })
  }

}
