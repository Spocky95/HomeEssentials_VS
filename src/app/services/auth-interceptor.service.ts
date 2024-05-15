// W tym fragmencie kodu mamy serwis Angulara o nazwie AuthInterceptorService, który implementuje interfejs HttpInterceptor.
// Interceptor HTTP to klasa middleware, która może przechwytywać i modyfikować zapytania HTTP przed ich wysłaniem.

// W konstruktorze wstrzykujemy zależność od OktaAuth, który jest usługą do uwierzytelniania użytkowników za pomocą Okta.

// Metoda intercept() jest wymagana przez interfejs HttpInterceptor. Jest wywoływana dla każdego zapytania HTTP i ma możliwość modyfikacji zapytania przed jego wysłaniem.
// Wewnątrz tej metody wywołujemy metodę handleAccess(), która jest asynchroniczna i zwraca Promise. Konwertujemy ten Promise na Observable za pomocą operatora from().

// Metoda handleAccess() jest prywatna i jest wywoływana wewnątrz metody intercept(). W tym fragmencie kodu nie widać, co dalej dzieje się w tej metodzie.
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { Observable, from, lastValueFrom } from 'rxjs';
import { environment } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Promise<HttpEvent<any>> {
    const theEndpoint = environment.homeessentialsApiUrl + '/orders';
    // Only add an access token for secured endpoints
    const securedEndpoints = [theEndpoint];

    if (securedEndpoints.some((url) => request.urlWithParams.includes(url))) {
      // get access token
      const accessToken = this.oktaAuth.getAccessToken();

      // clone the request and add new header with access token
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken,
        },
      });
    }

    return await lastValueFrom(next.handle(request));
  }
}
