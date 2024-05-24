// W tym fragmencie kodu mamy komponent Angulara o nazwie WelcomePageComponent.
// Komponent ten nie ma żadnych zależności ani właściwości.

// Komponent ten jest dekorowany za pomocą dekoratora @Component, który określa selektor, szablon HTML i arkusz stylów CSS dla tego komponentu.

// Selektor 'app-welcome-page' jest używany do umieszczenia tego komponentu w szablonie innego komponentu.

// Szablon HTML dla tego komponentu jest zdefiniowany w pliku './welcome-page.component.html'.

// Styl CSS dla tego komponentu jest zdefiniowany w pliku './welcome-page.component.css'.
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
})
export class WelcomePageComponent {}
