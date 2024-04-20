import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent}, // Add route for CartDetailsComponent reached by /cart-details
  { path: 'cart-details', component: CartDetailsComponent}, // Add route for CartDetailsComponent reached by /cart-details
  { path: 'products/:id', component: ProductDetailsComponent}, // Add route for ProductDetailsComponent reached by /products/:id
  { path: 'search/:keyword', component: ProductListComponent}, // Add route for ProductListComponent reached by /search/:keyword
  { path: 'welcome', component: WelcomePageComponent}, // Add route for WelcomePageComponent reached by /welcome
  { path: 'category/:id', component: ProductListComponent }, // Add route for ProductListComponent reach by /category/:id
  { path: 'category', component: ProductListComponent }, // Add route for ProductListComponent reached by /category
  { path: 'products', component: ProductListComponent }, // Add route for ProductListComponent reached by /products
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect to /products when path is empty
  { path: '**', redirectTo: '/products', pathMatch: 'full' } // Redirect to /products when path is not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
