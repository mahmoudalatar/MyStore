import { CartItemsService } from './../cart-items.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreData } from './../storeData.service';
import { ProductModule } from '../product/product.module';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  itemData: ProductModule = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    number: 0,
  };

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
          console.log(data);
          this.itemData = data[i];
          this.itemData.number = 1;
        }
      }
    });
  }

  submit(item: ProductModule) {
    this.cartItems.addItem(item);
    alert(`${this.itemData.number} : Item Add`);
  }
}
