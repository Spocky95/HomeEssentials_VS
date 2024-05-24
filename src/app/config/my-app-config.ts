// W tym fragmencie kodu mamy plik konfiguracyjny dla aplikacji Angulara.
// Plik ten eksportuje obiekt konfiguracyjny, który zawiera konfigurację dla OpenID Connect (OIDC).

// Właściwość clientId to identyfikator klienta dla aplikacji w usłudze Okta.
// Właściwość issuer to URL serwera autoryzacji Okta.
// Właściwość redirectUri to URL, na który użytkownik zostanie przekierowany po pomyślnym uwierzytelnieniu.
// Właściwość scopes to tablica zakresów, które aplikacja chce uzyskać dostęp. 'openid' jest wymagany dla autoryzacji OpenID Connect, 'profile' i 'email' są używane do uzyskania dodatkowych informacji o użytkowniku.
export default {
  oidc: {
    clientId: '0oagyir3xcfb2g9L65d7',
    issuer: 'https://dev-29561319.okta.com/oauth2/default',
    redirectUri: 'https://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
  },
};
