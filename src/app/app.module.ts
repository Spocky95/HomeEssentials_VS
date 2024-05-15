// W tym fragmencie kodu mamy główny moduł Angulara o nazwie AppModule.
// Moduł ten importuje różne inne moduły, komponenty i serwisy, które są używane w aplikacji.

// Dekorator @NgModule określa metadane dla modułu.

// Właściwość declarations zawiera listę komponentów, które są deklarowane w tym module.
// Właściwość imports zawiera listę modułów, które są importowane do tego modułu.
// Właściwość providers zawiera listę serwisów, które są dostarczane przez ten moduł.
// Właściwość bootstrap zawiera listę komponentów, które są inicjalizowane, gdy aplikacja jest uruchamiana.

// W konstruktorze wstrzykujemy zależność od HttpClient, który jest używany do wykonywania zapytań HTTP.
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  withFetch,
} from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { OktaAuthModule, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { LoginStatusComponent } from './components/login-status/login-status.component';

import { OktaCallbackComponent, OKTA_CONFIG } from '@okta/okta-angular';

import myAppConfig from './config/my-app-config';
import { ProductService } from './services/product.service';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
const oktaConfig = myAppConfig.oidc;
const oktaAuth = new OktaAuth(oktaConfig);

export const environment = {
  production: false, // Prod mode is disabled, prod mode is reducing logging messages, eliminates dead code etc.
  homeessentialsApiUrl: 'https://localhost:4090/api',
};

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    WelcomePageComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    MembersPageComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OktaAuthModule,
  ],
  providers: [
    ProductService,
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
