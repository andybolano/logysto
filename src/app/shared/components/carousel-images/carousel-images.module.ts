import { ButtonModule } from './../../../lib/ui-components/button/button.module';
import { CarouselImagesComponent } from './carousel-images.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {TranslateFacadeModule} from '@lib/common-services/services/translate-facade';
import { CarouselModule } from '@lib/ui-components/carousel';

@NgModule({
  declarations: [
    CarouselImagesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateFacadeModule,
    ButtonModule
  ],exports: [
    CarouselImagesComponent
  ]
} )
export class CarouselImagesModule {}
