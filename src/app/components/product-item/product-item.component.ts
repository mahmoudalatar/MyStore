import { CartItemsService } from './../cart-items.service';
import { StoreData } from './../storeData.service';
import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../product/product.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  datas: ProductModule[] = [];

  constructor(private storeData: StoreData) {}

  ngOnInit(): void {
    this.storeData.getData().subscribe((data) => {
      this.datas = data;
      for (let i = 0; i < this.datas.length; i++) {
        this.datas[i]['number'] = 1;
      }
    });
  }
}
