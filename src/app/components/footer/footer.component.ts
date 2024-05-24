// W tym fragmencie kodu mamy komponent Angulara o nazwie FooterComponent.
// Komponent ten nie ma żadnych zależności ani właściwości.

// Komponent ten jest dekorowany za pomocą dekoratora @Component, który określa selektor, szablon HTML i arkusz stylów CSS dla tego komponentu.

// Selektor 'app-footer' jest używany do umieszczenia tego komponentu w szablonie innego komponentu.

// Szablon HTML dla tego komponentu jest zdefiniowany w pliku './footer.component.html'.

// Styl CSS dla tego komponentu jest zdefiniowany w pliku './footer.component.css'.
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
