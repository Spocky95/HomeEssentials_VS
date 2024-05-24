// W tym fragmencie kodu mamy komponent Angulara o nazwie LoginStatusComponent.
// Komponent ten jest związany z usługą OktaAuthStateService, która dostarcza metody do zarządzania stanem uwierzytelniania użytkowników.

// Właściwość isAuthenticated to flaga, która wskazuje, czy użytkownik jest uwierzytelniony.
// Właściwość userFullName to pełne imię i nazwisko uwierzytelnionego użytkownika.
// Właściwość userEmail to email uwierzytelnionego użytkownika.
// Właściwość storage to obiekt Storage, który jest używany do przechowywania danych w sesji.

// W konstruktorze wstrzykujemy zależność od OktaAuthStateService i OktaAuth.

// Metoda ngOnInit() jest metodą cyklu życia komponentu, która jest wywoływana po utworzeniu komponentu.
// Wewnątrz tej metody subskrybujemy stan uwierzytelniania z usługi OktaAuthStateService.
// Jeśli stan uwierzytelniania jest zdefiniowany, przypisujemy go do właściwości isAuthenticated.
// Następnie wywołujemy metodę getUserDetails(), która nie jest zdefiniowana w tym fragmencie kodu.
import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrl: './login-status.component.css',
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  userFullName: string = '';
  userEmail = 'userEmailPlaceholder';

  storage: Storage = sessionStorage;

  constructor(
    private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth
  ) {}

  ngOnInit(): void {
    this.oktaAuthService.authState$.subscribe((result) => {
      if (result.isAuthenticated !== undefined) {
        this.isAuthenticated = result.isAuthenticated;
      }
      this.getUserDetails();
    });
  }
  getUserDetails() {
    if (this.isAuthenticated) {
      this.oktaAuth.getUser().then((res) => {
        this.userFullName = res.name as string;
        // retrieve the user's email from authentication response
        const theEmail = res.email;
        // store the email in the browser storage
        this.storage.setItem('userEmail', JSON.stringify(theEmail));
        this.userEmail = theEmail ?? '';
      });
    }
  }

  logout() {
    this.oktaAuth.signOut();
  }
}
