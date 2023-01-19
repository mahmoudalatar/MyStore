import { CartItemsService } from './../cart-items.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreData } from './../storeData.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  itemData: { [key: string]: string } = {};
  selectedNumber: number = 1;

  constructor(
    private storeData: StoreData,
    private route: ActivatedRoute,
    private cartItems: CartItemsService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.storeData.getData().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (id == data[i]['id']) {
          this.itemData = data[i];
        }
      }
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
