// W tym fragmencie kodu mamy serwis Angulara o nazwie ProductService.
// Serwis ten jest związany z usługą HttpClient, która dostarcza metody do wykonywania zapytań HTTP.

// Właściwości baseUrl i categoryUrl to adresy URL do API, które są używane do pobierania produktów i kategorii produktów.

// W konstruktorze wstrzykujemy zależność od HttpClient.

// Metoda getProductListPaginate() jest wywoływana z numerem strony, rozmiarem strony i identyfikatorem kategorii jako argumenty. Wewnątrz tej metody, tworzymy URL do wyszukiwania produktów dla danej kategorii i strony, a następnie wywołujemy zapytanie GET do tego URL. Zwraca Observable, który emituje odpowiedź od serwera.

// Interfejs GetResponseProducts definiuje strukturę odpowiedzi od serwera. Właściwość _embedded.products to tablica obiektów Product.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';
import { environment } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.homeessentialsApiUrl + '/products';

  private categoryUrl = environment.homeessentialsApiUrl + '/product-category';

  constructor(private httpClient: HttpClient) {}

  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    theCategoryId: number
  ): Observable<GetResponseProducts> {
    //URL based on category id, page and size
    const searchUrl =
      `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}` +
      `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  getProductList(theCategoryId: number) {
    //URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<GetResponseProductCategory>(this.categoryUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  searchProductsPaginate(
    thePage: number,
    thePageSize: number,
    theKeyword: string
  ): Observable<GetResponseProducts> {
    const searchUrl =
      `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}` +
      `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
