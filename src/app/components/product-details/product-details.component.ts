// W tym fragmencie kodu mamy komponent Angulara o nazwie ProductDetailsComponent.
// Komponent ten jest związany z usługami ProductService, CartService i ActivatedRoute, które dostarczają metody do zarządzania produktami, koszykiem i trasami.

// Właściwość product to obiekt Product, który przechowuje szczegóły produktu.

// W konstruktorze wstrzykujemy zależności od ProductService, CartService i ActivatedRoute.

// Metoda ngOnInit() jest metodą cyklu życia komponentu, która jest wywoływana po utworzeniu komponentu.
// Wewnątrz tej metody subskrybujemy paramMap z ActivatedRoute. Gdy paramMap się zmienia, wywołujemy metodę handleProductDetails().

// Metoda handleProductDetails() odczytuje id produktu z paramMap, konwertuje je na liczbę i przypisuje do zmiennej theProductId.
// W tym fragmencie kodu nie widać, co dalej dzieje się z tą zmienną.
import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
  handleProductDetails() {
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart() {
    // console.log(
    //   `Adding to cart: ${this.product.name}, ${this.product.unitPrice}`
    // );

    const theCartItem = new CartItem(this.product);

    this.cartService.addToCart(theCartItem);
  }
}







