import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartAddedComponent } from './cart-added/cart-added.component';

export const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
  {
    path: 'yourCart',
    component: CartAddedComponent
  },
];



