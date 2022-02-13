import { DeliveryStatus } from '@shared/types/enums/delivery-status.enum';
import { DeliveryDetail } from '@shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-tracking-line',
  templateUrl: './delivery-tracking-line.component.html',
  styleUrls: ['./delivery-tracking-line.component.scss']
})
export class DeliveryTrackingLineComponent implements OnInit {

  @Input() public deliveryDetail: DeliveryDetail;
  public deliveryStatus: typeof DeliveryStatus;

  constructor() {
    this.deliveryStatus = DeliveryStatus;
  }

  ngOnInit(): void {
  }

}
