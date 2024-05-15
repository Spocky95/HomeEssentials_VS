// W tym fragmencie kodu mamy serwis Angulara o nazwie CheckoutService.
// Serwis ten jest związany z usługą HttpClient, która dostarcza metody do wykonywania zapytań HTTP.

// Właściwość purchaseUrl to adres URL do API, który jest używany do składania zamówień.

// W konstruktorze wstrzykujemy zależność od HttpClient.

// Metoda placeOrder() jest wywoływana z obiektem Purchase jako argument. Wewnątrz tej metody, wywołujemy zapytanie POST do API zamówień z obiektem Purchase jako ciałem zapytania. Zwraca Observable, który emituje odpowiedź od serwera.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Moduł `HttpClient` dostarcza funkcjonalności do wykonywania żądań HTTP w aplikacjach Angularowych.
import { Purchase } from '../common/purchase';
import { Observable } from 'rxjs';
import { environment } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private purchaseUrl = environment.homeessentialsApiUrl + '/checkout/purchase';

  constructor(private httpClient: HttpClient) {}
  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);
  }
}
