import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

    constructor(
        private http: HttpClient
    ) { }


        //product-list
        getProducts(): Observable<any> {
            console.log(this.http.get('/api/v1/products'));
            
            return this.http.get('/api/v1/products');
        }
    
        //product-detail
        getProductById(productId: string): Observable<any> {
            // return products[productId];
            console.log(productId);
            
            return this.http.get('/api/v1/products/' + productId);
        }

}