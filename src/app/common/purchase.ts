// W tej części kodu definiujemy klasę Purchase, która reprezentuje zakup.
// Klasa Purchase posiada pięć właściwości: customer, shippingAddress, billingAddress, order i orderItems.
// Właściwość customer to obiekt klasy Customer, który reprezentuje klienta dokonującego zakupu.
// Właściwość shippingAddress to obiekt klasy Address, który reprezentuje adres wysyłki.
// Właściwość billingAddress to obiekt klasy Address, który reprezentuje adres rozliczeniowy.
// Właściwość order to obiekt klasy Order, który reprezentuje zamówienie.
// Właściwość orderItems to tablica obiektów klasy OrderItem, która reprezentuje elementy zamówienia.
// Wszystkie te właściwości są inicjalizowane jako undefined za pomocą operatora "!".
// Operator "!" jest używany do zapewnienia, że te właściwości zostaną zainicjalizowane później.
import { Address } from './address';
import { Customer } from './customer';
import { Order } from './order';
import { OrderItem } from './order-item';

export class Purchase {
  customer!: Customer;
  shippingAddress!: Address;
  billingAddress!: Address;
  order!: Order;
  orderItems!: OrderItem[];
}
