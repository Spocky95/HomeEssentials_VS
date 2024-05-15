// W tym fragmencie kodu mamy deklarację modułu TypeScript dla '@okta/okta-signin-widget'.
// Deklaracja modułu jest używana, gdy chcemy korzystać z modułu JavaScript w TypeScript.

// Deklaracja 'declare module '@okta/okta-signin-widget'' pozwala na importowanie '@okta/okta-signin-widget' w innych plikach TypeScript bez błędów kompilacji.
// Nie definiuje ona jednak żadnych typów dla tego modułu, więc wszystkie importowane wartości będą miały typ 'any'.
declare module '@okta/okta-signin-widget';
