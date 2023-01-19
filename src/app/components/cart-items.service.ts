import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  cartItems: any = [];

  constructor() {}
  addItem(item: any, num: number) {
    if (this.cartItems.length !== 0) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (item['name'] == this.cartItems[i]['name']) {
          let tempNum = Number(this.cartItems[i]['number']) + Number(num);

          this.cartItems[i]['number'] = tempNum;
          return;
        }
      }
      item['number'] = num;
      this.cartItems.push(item);
    } else {
      item['number'] = num;
      this.cartItems.push(item);
    }
  }

  getItems(): [] {
    return this.cartItems;
  }

  removeItem(id: number) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (id === this.cartItems[i]['id']) {
        this.cartItems.splice(i, 1);
        return this.cartItems;
      }
    }
  }

  removeItems() {
    return (this.cartItems = '');
  }
}
