// W tym fragmencie kodu mamy serwis Angulara o nazwie OrderHistoryService.
// Serwis ten jest związany z usługą HttpClient, która dostarcza metody do wykonywania zapytań HTTP.

// Właściwość orderUrl to adres URL do API, który jest używany do pobierania historii zamówień.

// W konstruktorze wstrzykujemy zależność od HttpClient.

// Metoda getOrderHistory() jest wywoływana z adresem e-mail jako argument. Wewnątrz tej metody, tworzymy URL do wyszukiwania historii zamówień dla danego adresu e-mail, a następnie wywołujemy zapytanie GET do tego URL. Zwraca Observable, który emituje odpowiedź
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../common/order-history';
import { environment } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  private orderUrl = environment.homeessentialsApiUrl + '/orders';

  constructor(private httpClient: HttpClient) {}

  getOrderHistory(theEmail: string): Observable<GetResponseOrderHistory> {
    // need to build URL based on the customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${theEmail}`;

    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }
}

///search/findByCustomerEmail?email=

interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  };
}
