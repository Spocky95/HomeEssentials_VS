import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Moduł `HttpClient` dostarcza funkcjonalności do wykonywania żądań HTTP w aplikacjach Angularowych.
import { Purchase } from '../common/purchase';
import { Observable } from 'rxjs';
import { environment } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = environment.homeessentialsApiUrl + '/checkout/purchase';



  constructor(private httpClient: HttpClient) {

  }
  placeOrder(purchase: Purchase): Observable<any> {
  return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);

  
  }
}
