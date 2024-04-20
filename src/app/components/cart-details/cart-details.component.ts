import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent implements OnInit{
  
  cartItems: any[] = [];
  totalPrice = 0;
  totalQuantity = 0;
  
  
  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.listCartDetails();
  }
  
  listCartDetails() {
    
    this.cartItems = this.cartService.cartItems;
    
    
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
    
    this.cartService.computeCartTotals();
  }

  incrementUnits(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }
  decrementUnits(theCartItem: CartItem) {
    this.cartService.deleteFromCart(theCartItem);
  }
  remove(theCartItem: CartItem) {
    this.cartService.deletePositionFromCart(theCartItem);
  }
  
}
