import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  constructor(private http: HttpClient) {}
  item:any;
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getProductsByCategory(keyword: string) {
    return this.http.get(
      'https://fakestoreapi.com/products/category/' + keyword
    );
  }
  getProductById(id:any) {
    return this.http.get('https://fakestoreapi.com/products/' +id);
  }
}
