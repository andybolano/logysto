import { Messenger } from '@shared/types/interfaces/messenger.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-messenger',
  templateUrl: './delivery-messenger.component.html',
  styleUrls: ['./delivery-messenger.component.scss']
})
export class DeliveryMessengerComponent implements OnInit {

  @Input() public messenger: Messenger;
  constructor() { }

  ngOnInit(): void {
  }

}
