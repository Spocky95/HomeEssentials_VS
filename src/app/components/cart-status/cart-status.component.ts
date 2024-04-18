import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css'
})
export class CartStatusComponent implements OnInit{

  totalQuantity: number = 0;
  totalPrice: number = 0.00;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    console.log(`compute cart total price and total quantity`);
    this.cartService.totalQuantity.subscribe(
      (data: number) => this.totalQuantity = data
    );
    this.cartService.totalPrice.subscribe(
      (data: number) => this.totalPrice = data
    );
  }
}
