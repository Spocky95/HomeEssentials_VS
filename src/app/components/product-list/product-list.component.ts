// W tym fragmencie kodu mamy komponent Angulara o nazwie ProductListComponent.
// Komponent ten jest związany z usługami ProductService, CartService i ActivatedRoute, które dostarczają metody do zarządzania produktami, koszykiem i trasami.

// Właściwość products to tablica obiektów Product, która przechowuje listę produktów.
// Właściwości currentCategoryId i previousCategoryId to numery identyfikacyjne kategorii produktów.
// Właściwość searchMode to flaga, która wskazuje, czy jest aktywny tryb wyszukiwania.
// Właściwości thePageNumber, thePageSize i theTotalElements to właściwości związane z paginacją.
// Właściwość previousKeyword to poprzednie słowo kluczowe używane do wyszukiwania.

// W konstruktorze wstrzykujemy zależności od ProductService, CartService i ActivatedRoute.

// Metoda ngOnInit() jest metodą cyklu życia komponentu, która jest wywoływana po utworzeniu komponentu. W tym momencie nie jest jeszcze zaimplementowana.

// Komponent ten jest dekorowany za pomocą dekoratora @Component, który określa selektor, szablon HTML i arkusz stylów CSS dla tego komponentu.
// Szablon HTML dla tego komponentu jest zdefiniowany w pliku './product-list-grid.component.html'.
// Styl CSS dla tego komponentu jest zdefiniowany w pliku './product-list.component.css'.
import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid2.component.html',
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  //properties
  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  //pagination properties
  thePageNumber: number = 1;
  thePageSize: number = 8;
  theTotalElements: number = 0;

  previousKeyword: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryId = 1;
    }

    // Check if we have a different category than previous
    // if we have a different category id than previous
    // then set thePageNumber back to 1
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }
    this.previousCategoryId = this.currentCategoryId;

    console.log(
      `currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`
    );
    // if (this.currentCategoryId != 1) {
    //   this.productService.getProductListPaginate(this.thePageNumber - 1,
    //                                             this.thePageSize,
    //                                             this.currentCategoryId)
    //                                             .subscribe(this.processResult());
    // }

    // Spring - zero based page index
    this.productService
      .getProductListPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId
      )
      .subscribe((data) => {
        // Angular - one based page index
        this.products = data._embedded.products;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      });
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }
    this.previousKeyword = theKeyword;
    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    this.productService
      .searchProductsPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        theKeyword
      )
      .subscribe(this.processResult());
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  processResult() {
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  addToCart(theProduct: Product) {
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);

    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }
}
