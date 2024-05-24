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
import { Product } from '../../common/product';
@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details2.component.html',
  styleUrl: './cart-details.component.css',
})
export class CartDetailsComponent implements OnInit {


  

  outOfStock = false;


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
  // incrementUnits(theCartItem: CartItem) {
  //   if (theCartItem) {
  //     this.cartService.addToCart(theCartItem);
  //     // console.log('incrementUnits' + this.totalQuantity + ' ' + this.totalPrice);
  //     console.log('available in stock' + theCartItem.unitsInStock);
  //   } else {
  //     console.error('theCartItem is undefined');
  //   }
  // }

  incrementUnits(theCartItem: CartItem) {
    if (theCartItem) {
      console.log('Units in stock for product ' + theCartItem.name + ': ' + theCartItem.unitsInStock);
      if (theCartItem.unitsInStock > theCartItem.quantity) {
        this.cartService.addToCart(theCartItem);
      } else {
        this.outOfStock = true;
        // console.error('Cannot add more units. Not enough stock.');
        // alert('Cannot add more units. Not enough stock.')
        console.log('When product is out of stock you can see this: ' + theCartItem.unitsInStock);
      }
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
