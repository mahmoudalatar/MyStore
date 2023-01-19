import { Injectable } from '@angular/core';
import { ProductModule } from './product/product.module';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  cartItems: ProductModule[] = [];

  constructor() {}
  addItem(item: ProductModule) {
    if (this.cartItems.length !== 0) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (item['name'] == this.cartItems[i]['name']) {
          this.cartItems[i]['number'] = Number(item.number);
          return;
        }
      }
      this.cartItems.push(item);
    } else {
      this.cartItems.push(item);
    }
  }

  getItems(): ProductModule[] {
    return this.cartItems;
  }

  removeItem(id: number): ProductModule[] {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (id === this.cartItems[i]['id']) {
        this.cartItems.splice(i, 1);
        return this.cartItems;
      }
    }
    return [];
  }

  removeItems(): ProductModule[] {
    return (this.cartItems = []);
  }
}
