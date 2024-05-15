// W tej części kodu definiujemy klasę OrderItem, która reprezentuje element zamówienia.
// Klasa OrderItem posiada cztery właściwości: imageUrl, unitPrice, quantity i productId.
// Właściwość imageUrl to URL obrazu produktu, domyślnie ustawiony na pusty string.
// Właściwość unitPrice to cena jednostkowa produktu, domyślnie ustawiona na 0.
// Właściwość quantity to ilość produktu, domyślnie ustawiona na 0.
// Właściwość productId to identyfikator produktu, domyślnie ustawiony na pusty string.
// Klasa posiada konstruktor, który przyjmuje jako argument obiekt typu CartItem.
// W konstruktorze właściwości klasy OrderItem są inicjalizowane wartościami z obiektu CartItem.
import { CartItem } from './cart-item';

export class OrderItem {
    public imageUrl: string = '';
    public unitPrice: number = 0;
    public quantity: number = 0;
    public productId: string = '';

  constructor(cartItem: CartItem) {
    this.imageUrl = cartItem.imageUrl;
    this.quantity = cartItem.quantity;
    this.unitPrice = cartItem.unitPrice;
    this.productId = cartItem.id;
  }
}
