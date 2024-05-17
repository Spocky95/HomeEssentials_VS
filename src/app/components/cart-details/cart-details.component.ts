// W tej części kodu mamy komponent Angulara o nazwie CartDetailsComponent.
// Komponent ten jest związany z usługą CartService, która dostarcza metody i dane dotyczące koszyka.

// Właściwość cartItems to tablica, która przechowuje elementy w koszyku.
// Właściwość totalPrice to suma cen wszystkich produktów w koszyku.
// Właściwość totalQuantity to suma ilości wszystkich produktów w koszyku.

// W konstruktorze wstrzykujemy zależność od CartService.

// Metoda ngOnInit() jest metodą cyklu życia komponentu, która jest wywoływana po utworzeniu komponentu.
// Wewnątrz tej metody wywołujemy metodę listCartDetails().

// Metoda listCartDetails() pobiera elementy koszyka z usługi CartService i przypisuje je do właściwości cartItems.
// Następnie subskrybuje ona wartości totalPrice i totalQuantity z usługi CartService i przypisuje je do odpowiednich właściwości komponentu.
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';
@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details2.component.html',
  styleUrl: './cart-details.component.css',
})
export class CartDetailsComponent implements OnInit {
  // Tablica do przechowywania elementów koszyka
  cartItems: CartItem[] = [];
  // Zmienne do przechowywania całkowitej ceny i ilości
  totalPrice = 0;
  totalQuantity = 0;
  // Wstrzykiwanie zależności CartService
  constructor(private cartService: CartService) {}
  // Metoda cyklu życia wywoływana po utworzeniu komponentu
  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    // Implementacja
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));

    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );

    this.cartService.computeCartTotals();
  }
  incrementUnits(theCartItem: CartItem) {
    if (theCartItem) {
      this.cartService.addToCart(theCartItem);
    } else {
      console.error('theCartItem is undefined');
    }
  }
  decrementUnits(theCartItem: CartItem) {
    this.cartService.deleteFromCart(theCartItem);
  }
  remove(theCartItem: CartItem) {
    this.cartService.deletePositionFromCart(theCartItem);
  }
}
