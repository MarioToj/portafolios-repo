import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Product } from '../interfaces/products.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'https://fakestoreapi.com';

  public http = inject( HttpClient );

  getProds(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProdsById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }
}
