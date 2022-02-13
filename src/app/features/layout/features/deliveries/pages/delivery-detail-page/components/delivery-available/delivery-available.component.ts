import { Location } from '@shared/types/interfaces/location.interface';
import { Contact } from '@shared/types/interfaces/contact.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-available',
  templateUrl: './delivery-available.component.html',
  styleUrls: ['./delivery-available.component.scss']
})
export class DeliveryAvailableComponent implements OnInit {

  @Input() public orderNumber: string | undefined;
  @Input() public contact:Contact;
  @Input() public locations:Location[];
  @Input() public vueltapGuide: number;


  constructor() { }

  ngOnInit(): void {
  }

}
