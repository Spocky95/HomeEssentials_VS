// W tym fragmencie kodu mamy komponent Angulara o nazwie ProductCategoryMenuComponent.
// Komponent ten jest związany z usługą ProductService, która dostarcza metody do zarządzania produktami.

// Właściwość productCategories to tablica obiektów ProductCategory, która przechowuje kategorie produktów.

// W konstruktorze wstrzykujemy zależność od ProductService.

// Metoda ngOnInit() jest metodą cyklu życia komponentu, która jest wywoływana po utworzeniu komponentu.
// Wewnątrz tej metody wywołujemy metodę listProductCategories().

// Metoda listProductCategories() wywołuje metodę getProductCategories() z usługi ProductService, która zwraca Observable.
// Subskrybujemy ten Observable, aby otrzymać dane.
// Gdy dane są dostępne, przypisujemy je do właściwości productCategories.
import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css',
})
export class ProductCategoryMenuComponent implements OnInit {
  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe((data) => {
      console.log('Product Categories=' + JSON.stringify(data));
      this.productCategories = data;
    });
  }
}
