// W tym fragmencie kodu mamy komponent Angulara o nazwie NavbarComponent.
// Komponent ten nie ma żadnych zależności ani właściwości.

// Komponent ten jest dekorowany za pomocą dekoratora @Component, który określa selektor, szablon HTML i arkusz stylów CSS dla tego komponentu.

// Selektor 'app-navbar' jest używany do umieszczenia tego komponentu w szablonie innego komponentu.

// Szablon HTML dla tego komponentu jest zdefiniowany w pliku './navbar.component.html'.

// Styl CSS dla tego komponentu jest zdefiniowany w pliku './navbar.component.css'.
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component-bootstrap.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
