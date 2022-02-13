import { delivery } from '@shared/mocks/delivery.mock';

import { Component, OnInit } from '@angular/core';
import { DeliveryDetail } from '@shared/types';
@Component({
  selector: 'app-delivery-detail-page',
  templateUrl: './delivery-detail-page.component.html',
  styleUrls: ['./delivery-detail-page.component.scss']
})
export class DeliveryDetailPageComponent implements OnInit {

  public deliveryDetail: DeliveryDetail;

  constructor() {
    this.deliveryDetail = delivery;
  }

  ngOnInit(): void {

  }
}
