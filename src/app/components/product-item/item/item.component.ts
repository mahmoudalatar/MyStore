import { Component, Input, OnInit } from '@angular/core';
import { CartItemsService } from '../../cart-items.service';
import { ProductModule } from '../../product/product.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() data: ProductModule = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    number: 0,
  };

  constructor(private cartItems: CartItemsService) {}

  ngOnInit(): void {}

  submit(item: ProductModule) {
    this.cartItems.addItem(item);
    alert(`${item['number']} : Item Add`);
  }
}
