import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {ModalComponent} from './modal.component';
import {TranslateFacadeModule} from '@lib/common-services/services/translate-facade';



@NgModule( {
  declarations: [ ModalComponent ],
  imports: [
    CommonModule,
    OverlayModule,
    TranslateFacadeModule
  ],
  exports: [
    ModalComponent
  ]
} )
export class ModalModule {}
