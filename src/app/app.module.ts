import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule, withFetch } from '@angular/common/http';
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

import {
  OktaCallbackComponent,
  OKTA_CONFIG 
} from '@okta/okta-angular';

//Tutaj albo do app-routing.modules.ts <Start>
import myAppConfig from './config/my-app-config';
import { ProductService } from './services/product.service';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
const oktaConfig = myAppConfig.oidc;
const oktaAuth = new OktaAuth(oktaConfig);

//Tutaj albo do app-routing.modules.ts <End>


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
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OktaAuthModule
  ],
  providers: [ProductService,
    {provide: OKTA_CONFIG, useValue: { oktaAuth}},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    provideClientHydration(),
    provideHttpClient(withFetch())],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
