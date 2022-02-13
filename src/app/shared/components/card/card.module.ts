import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardComponent} from './card.component';
import {TranslateFacadeModule} from '@lib/common-services/services/translate-facade';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    TranslateFacadeModule
  ],exports: [
    CardComponent
  ]
} )
export class CardModule {}
