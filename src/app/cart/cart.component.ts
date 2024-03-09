import { Component, inject } from '@angular/core';
import { CartAddedService } from '../services/cart-added.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  CartAddedService = inject(CartAddedService);

  products: any[] = [
    {
      id: 1,
      image: 'assets/images/pngegg.png',
      name: 'Monestera Deliciosa',
      price: 244
    },
  ]

  addToCart(product: any) {
    this.CartAddedService.addToCart(product);
  }
}
