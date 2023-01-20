import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() confirmation = new EventEmitter<{}>();
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.confirmation.emit(this.fullName);
  }
}
