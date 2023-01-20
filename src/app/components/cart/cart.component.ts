import { ProductModule } from './../product/product.module';
import { CartItemsService } from './../cart-items.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  selectedNumber: number = 0;
  items: ProductModule[] = [];
  totalCost: number = 0;
  fullName: string = '';
  creditCard: number = 0;

  done: boolean = false;

  constructor(private cartItems: CartItemsService) {}

  ngOnInit(): void {
    this.items = this.cartItems.getItems();
    this.clacTotal();
  }

  value(itemNum: number, name: string): void {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i]['name'] == name && itemNum > 0) {
        this.items[i]['number'] = itemNum;
        this.clacTotal();
      } else if (this.items[i]['name'] == name && itemNum == 0) {
        alert(`${this.items[i].name} : Item Removed`);
        this.cartItems.removeItem(this.items[i]['id']);
      }
    }
  }

  clacTotal(): void {
    this.totalCost = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.totalCost +=
        Number(this.items[i]['number']) * Number(this.items[i]['price']);
    }
  }

  onSubmit(massage: string): void {
    this.fullName = massage;
    // console.log(massage);

    this.done = true;
    this.cartItems.removeItems();
  }
}
