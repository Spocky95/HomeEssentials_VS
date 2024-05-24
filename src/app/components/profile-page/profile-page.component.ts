// W tym fragmencie kodu mamy komponent Angulara o nazwie MembersPageComponent.
// Komponent ten nie ma żadnych zależności ani właściwości.

// Komponent ten jest dekorowany za pomocą dekoratora @Component, który określa selektor, szablon HTML i arkusz stylów CSS dla tego komponentu.

// Selektor 'app-members-page' jest używany do umieszczenia tego komponentu w szablonie innego komponentu.

// Szablon HTML dla tego komponentu jest zdefiniowany w pliku './members-page.component.html'.

// Styl CSS dla tego komponentu jest zdefiniowany w pliku './members-page.component.css'.
import { Component, OnInit } from '@angular/core';
import OktaAuth from '@okta/okta-auth-js';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  isAuthenticated: boolean = false;

  userEmail = 'userEmailPlaceholder';
  userUsername = 'userUsernamePlaceholder';
  userGivenName = 'userGivenNamePlaceholder';
  userFamilyName = 'familyNamePlaceholder';
  userLocale = 'localePlaceholder';
  userZoneinfo = 'zoneinfoPlaceholder';
  userUpdatedAt = 'updatedAtPlaceholder';
  userEmailVerified = 'emailVerifiedPlaceholder';
  userAuth = 'authPlaceholder';
  userFullName: string = '';


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

      const theEmail = res.email;
      const preferredUsername = res.preferred_username;
      const givenName = res.given_name;
      const familyName = res.family_name;
      const locale = res.locale;
      const zoneinfo = res.zoneinfo;
      const updatedAt = res.updated_at;
      const emailVerified = res.email_verified;
      const auth = res.auth_time;


        this.storage.setItem('userEmail', JSON.stringify(theEmail));
        this.storage.setItem('preferredUsername', JSON.stringify(preferredUsername));
        this.storage.setItem('givenName', JSON.stringify(givenName));
        this.storage.setItem('familyName', JSON.stringify(familyName));
        this.storage.setItem('locale', JSON.stringify(locale));
        this.storage.setItem('zoneinfo', JSON.stringify(zoneinfo));
        this.storage.setItem('updatedAt', JSON.stringify(updatedAt));
        this.storage.setItem('emailVerified', JSON.stringify(emailVerified));
        this.storage.setItem('phoneNumber', JSON.stringify(auth));

        this.userEmail = theEmail ?? '';
        this.userUsername = preferredUsername ?? '';
        this.userGivenName = givenName ?? '';
        this.userFamilyName = familyName ?? '';
        this.userLocale = locale ?? '';
        this.userZoneinfo = zoneinfo ?? '';
        this.userUpdatedAt = String(updatedAt) ?? '';
        this.userEmailVerified = String(emailVerified) ?? '';


      });
    }
  }
}
