import { CartItemsService } from './../cart-items.service';
import { StoreData } from './../storeData.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  datas: [] = [];
  selectedNumber: number = 1;

  constructor(
    private storeData: StoreData,
    private cartItems: CartItemsService
  ) {}

  ngOnInit(): void {
    this.storeData.getData().subscribe((data) => {
      this.datas = data;
    });
  }

  value(event: number) {
    this.selectedNumber = event;
  }
  submit(item: any) {
    this.cartItems.addItem(item, this.selectedNumber);
    alert(`${this.selectedNumber} : Item Add`);
  }
}
