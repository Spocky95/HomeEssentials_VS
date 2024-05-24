// W tym fragmencie kodu mamy serwis Angulara o nazwie CartService.
// Serwis ten nie ma żadnych zależności.

// Właściwość cartItems to tablica, która przechowuje elementy w koszyku.
// Właściwości totalPrice i totalQuantity to obiekty Subject, które przechowują łączną cenę i ilość elementów w koszyku.
// Właściwość storage to obiekt Storage, który jest używany do przechowywania danych w localStorage.

// W konstruktorze odczytujemy dane z localStorage i jeśli dane nie są puste, przypisujemy je do właściwości cartItems i wywołujemy metodę computeCartTotals().

// Metoda addToCart() jest wywoływana z przekazanym elementem jako argument. W tym fragmencie kodu nie widać, co dalej dzieje się w tej metodzie.
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  storage: Storage = localStorage; // localStorage keeps the data even after the browser is closed
  //storage: Storage = sessionStorage; // sessionStorage clears the data when the browser is closed

  constructor() {
    // read data from storage
    let data = JSON.parse(this.storage.getItem('cartItems')!);
    if (data != null) {
      this.cartItems = data;

      // compute totals based on the data that is read from storage
      this.computeCartTotals();
    }
  }

  addToCart(theCartItem: any) {
    // check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: any = undefined;

    if (this.cartItems.length > 0) {
      // find the item in the cart based on item id
      existingCartItem = this.cartItems.find(
        (tempCartItem: any) => tempCartItem.id === theCartItem.id
      );

      // check if we found it
      alreadyExistsInCart = existingCartItem != undefined;
    }

    if (alreadyExistsInCart) {
      // increment the quantity
      existingCartItem.quantity++;
    } else {
      // just add the item to the array
      this.cartItems.push(theCartItem);
    }

    // compute cart total price and total quantity
    this.computeCartTotals();
  }
  deletePositionFromCart(theCartItem: any) {
    // get index of item in the array
    const itemIndex = this.cartItems.findIndex(
      (tempCartItem: any) => tempCartItem.id === theCartItem.id
    );

    // if found, remove the item from the array at the given index
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      // compute cart total price and total quantity
      this.computeCartTotals();
    }
  }
  deleteFromCart(theCartItem: any) {
    // find the item in the cart based on item id
    const existingCartItem = this.cartItems.find(
      (tempCartItem: any) => tempCartItem.id === theCartItem.id
    );

    if (existingCartItem) {
      if (existingCartItem.quantity > 1) {
        // decrement the quantity
        existingCartItem.quantity--;
      } else {
        // get index of item in the array
        const itemIndex = this.cartItems.findIndex(
          (tempCartItem: any) => tempCartItem.id === theCartItem.id
        );

        // if found, remove the item from the array at the given index
        if (itemIndex > -1) {
          this.cartItems.splice(itemIndex, 1);
        }
      }

      // compute cart total price and total quantity
      this.computeCartTotals();
    }
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);

    // persist cart data
    this.persistCartItems();
  }
  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    // console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      // console.log(
      //   `name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`
      // );
    }

    // console.log(
    //   `totalPrice: ${totalPriceValue.toFixed(
    //     2
    //   )}, totalQuantity: ${totalQuantityValue}`
    // )
    ;

    // console.log('=================');
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
