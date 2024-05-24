// W tym fragmencie kodu mamy komponent Angulara o nazwie CartStatusComponent.
// Komponent ten jest związany z usługą CartService, która dostarcza metody i dane dotyczące koszyka.

// Właściwość totalQuantity to suma ilości wszystkich produktów w koszyku.
// Właściwość totalPrice to suma cen wszystkich produktów w koszyku.

// W konstruktorze wstrzykujemy zależność od CartService.

// Metoda ngOnInit() jest metodą cyklu życia komponentu, która jest wywoływana po utworzeniu komponentu.
// Wewnątrz tej metody wywołujemy metodę updateCartStatus().

// Metoda updateCartStatus() subskrybuje wartości totalPrice i totalQuantity z usługi CartService i przypisuje je do odpowiednich właściwości komponentu.
// Subskrypcja jest potrzebna, ponieważ wartości te mogą się zmieniać w czasie, a komponent musi być na bieżąco z tymi zmianami.
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  // Zmienne do przechowywania całkowitej ilości i ceny
  totalQuantity: number = 0;
  totalPrice: number = 0.0;

  // Wstrzykiwanie zależności CartService
  constructor(private cartService: CartService) {}

  // Metoda cyklu życia wywoływana po utworzeniu komponentu
  ngOnInit(): void {
    this.updateCartStatus();
  }

  // Metoda do aktualizacji statusu koszyka
  updateCartStatus(): void {
    // Subskrypcja do totalQuantity z CartService
    this.cartService.totalQuantity.subscribe(
      (data: number) => (this.totalQuantity = data)
    );
    // Subskrypcja do totalPrice z CartService
    this.cartService.totalPrice.subscribe(
      (data: number) => (this.totalPrice = data)
    );
  }
}
