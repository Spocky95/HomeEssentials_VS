// W tym fragmencie kodu mamy komponent Angulara o nazwie OrderHistoryComponent.
// Komponent ten jest związany z usługą OrderHistoryService, która dostarcza metody do zarządzania historią zamówień.

// Właściwość orderHistoryList to lista zamówień użytkownika.
// Właściwość storage to obiekt Storage, który jest używany do przechowywania danych w sesji.

// W konstruktorze wstrzykujemy zależność od OrderHistoryService.

// Metoda ngOnInit() jest metodą cyklu życia komponentu, która jest wywoływana po utworzeniu komponentu.
// Wewnątrz tej metody wywołujemy metodę handleOrderHistory().

// Metoda handleOrderHistory() odczytuje adres e-mail użytkownika z pamięci przeglądarki, a następnie wywołuje metodę getOrderHistory() z usługi OrderHistoryService, przekazując ten adres e-mail jako argument.
// Metoda getOrderHistory() zwraca Observable, na który subskrybujemy, aby otrzymać dane.
// Gdy dane są dostępne, przypisujemy je do właściwości orderHistoryList.
import { Component, OnInit } from '@angular/core';
import { OrderHistory } from '../../common/order-history';
import { OrderHistoryService } from '../../services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history2.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor(private orderHistoryService: OrderHistoryService) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    // read the user's email address from browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // retrieve data from the service
    this.orderHistoryService.getOrderHistory(theEmail).subscribe((data) => {
      this.orderHistoryList = data._embedded.orders;
    });
  }
}
