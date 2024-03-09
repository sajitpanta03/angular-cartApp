import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartAddedService {

  private items: any[] = [];

  constructor() { }

  addToCart(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  getItems() {
    return this.items;
  }

  getQuantityNumber() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  getItemNumber() {
    return this.items.length;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
  }

  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity--;
    }
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
}
