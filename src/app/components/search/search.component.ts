// W tym fragmencie kodu mamy komponent Angulara o nazwie SearchComponent.
// Komponent ten jest związany z usługą Router, która dostarcza metody do zarządzania trasami.

// W konstruktorze wstrzykujemy zależność od Router.

// Metoda ngOnInit() jest metodą cyklu życia komponentu, która jest wywoływana po utworzeniu komponentu. W tym momencie nie jest jeszcze zaimplementowana.

// Metoda doSearch() jest wywoływana z przekazaną wartością jako argument. Wewnątrz tej metody, wartość jest logowana do konsoli, a następnie jest używana do nawigacji do trasy '/search/{value}'.

// Komponent ten jest dekorowany za pomocą dekoratora @Component, który określa selektor, szablon HTML i arkusz stylów CSS dla tego komponentu.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doSearch(value: string) {
    // console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
}
