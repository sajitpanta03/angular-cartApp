import { Component, inject } from '@angular/core';
import { CartAddedService } from '../services/cart-added.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-added',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-added.component.html',
  styleUrl: './cart-added.component.css'
})
export class CartAddedComponent {
  cartAddedService = inject(CartAddedService);

  deleteFromCart(item: any) {
    this.cartAddedService.delete(item);
  }
}
