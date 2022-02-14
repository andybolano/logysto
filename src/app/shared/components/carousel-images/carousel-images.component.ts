import { Component, Input } from '@angular/core';
import { ModalService } from '@lib/ui-components/modal/utils/modal.service';

@Component({
  selector: 'app-carousel-images',
  templateUrl: './carousel-images.component.html',
  styleUrls: ['./carousel-images.component.scss']
})
export class CarouselImagesComponent {


  public images: string[] = [];

  constructor (private readonly modal: ModalService) {

  }
  public ngOnInit(): void {
    if (this.modal.getModalRef()) {
      this.setValues();
    }
  }

  private setValues(): void{
    const data: Record<'images', [string]> = this.modal.getModalRef().data as Record<'images', [string]>;
    this.images = data.images;
  }

  public close(): void {
    this.modal.close();
  }

}
