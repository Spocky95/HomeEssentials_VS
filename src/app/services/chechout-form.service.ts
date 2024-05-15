// W tym fragmencie kodu mamy serwis Angulara o nazwie ChechoutFormService.
// Serwis ten jest związany z usługą HttpClient, która dostarcza metody do wykonywania zapytań HTTP.

// Właściwości countriesUrl i statesUrl to adresy URL do API, które zwracają listę krajów i stanów.

// W konstruktorze wstrzykujemy zależność od HttpClient.

// Metoda getCountries() wywołuje zapytanie GET do API krajów, a następnie mapuje odpowiedź na tablicę obiektów Country.

// Metoda getStates() jest wywoływana z kodem kraju jako argument. Wewnątrz tej metody, tworzymy URL do wyszukiwania stanów dla danego kraju, a następnie wywołujemy zapytanie GET do tego URL i mapujemy odpowiedź na tablicę obiektów State.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../common/country';
import { map } from 'rxjs/operators';
import { State } from '../common/state';
import { environment } from '../app.module';
@Injectable({
  providedIn: 'root',
})
export class ChechoutFormService {
  private countriesUrl = environment.homeessentialsApiUrl + '/countries';
  private statesUrl = environment.homeessentialsApiUrl + '/states';

  constructor(private httpClient: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.httpClient
      .get<GetResponseCountries>(this.countriesUrl)
      .pipe(map((response) => response._embedded.countries));
  }

  getStates(theCountryCode: string): Observable<State[]> {
    const searchStatesUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;
    return this.httpClient
      .get<GetResponseStates>(searchStatesUrl)
      .pipe(map((response) => response._embedded.states));
  }

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];

    for (let month = startMonth; month <= 12; month++) {
      data.push(month);
    }
    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let year = startYear; year <= endYear; year++) {
      data.push(year);
    }
    return of(data);
  }
}

//unwrapped response
interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  };
}

//unwrapped response
interface GetResponseStates {
  _embedded: {
    states: State[];
  };
}
