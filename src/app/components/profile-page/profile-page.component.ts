// W tym fragmencie kodu mamy komponent Angulara o nazwie MembersPageComponent.
// Komponent ten nie ma żadnych zależności ani właściwości.

// Komponent ten jest dekorowany za pomocą dekoratora @Component, który określa selektor, szablon HTML i arkusz stylów CSS dla tego komponentu.

// Selektor 'app-members-page' jest używany do umieszczenia tego komponentu w szablonie innego komponentu.

// Szablon HTML dla tego komponentu jest zdefiniowany w pliku './members-page.component.html'.

// Styl CSS dla tego komponentu jest zdefiniowany w pliku './members-page.component.css'.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  constructor() {}
}
