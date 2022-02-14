import { Deliver } from '@shared/types/interfaces/deliver.interface';

import { DeliveryStatus } from '@shared/types/enums/delivery-status.enum';
import { DeliveryDetail } from '@shared/types';
import { Component, Input } from '@angular/core';
import { ModalService } from '@lib/ui-components/modal/utils/modal.service';
import { CarouselImagesComponent } from '@shared/components/carousel-images/carousel-images.component';

@Component({
  selector: 'app-delivery-tracking-line',
  templateUrl: './delivery-tracking-line.component.html',
  styleUrls: ['./delivery-tracking-line.component.scss']
})
export class DeliveryTrackingLineComponent {

  @Input() public deliveryDetail: DeliveryDetail;
  public deliveryStatus: typeof DeliveryStatus;


  constructor(  private readonly modal: ModalService) {
    this.deliveryStatus = DeliveryStatus;
  }

  public viewDeliverEvidenceImages(): void{
    this.modal.open(CarouselImagesComponent, {
      images : this.deliveryDetail.evidence.deliver.map((deliver:Deliver)=> deliver.url)
    });
  }

}
