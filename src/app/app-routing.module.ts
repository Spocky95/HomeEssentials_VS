import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'category/:id', component: ProductListComponent }, // Add route for ProductListComponent
  { path: 'category', component: ProductListComponent }, // Add route for ProductListComponent
  { path: 'products', component: ProductListComponent }, // Add route for ProductListComponent
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect to /products
  { path: '**', redirectTo: '/products', pathMatch: 'full' } // Redirect to /products
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
