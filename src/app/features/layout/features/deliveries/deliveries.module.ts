import { MapModule } from '@shared/components/map/map.module';
import { AvatarModule } from '@shared/components/avatar';
import { CardModule } from '@shared/components/card';
import { TitleModule } from '@shared/components/title';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateFacadeModule } from '@lib/common-services/services/translate-facade';
import { DELIVERY_PAGES } from './pages';
import { DeliveryRoutingModule } from './deliveries-routing.module';

@NgModule({
  declarations: [...DELIVERY_PAGES],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    TranslateFacadeModule,
    CardModule,
    TitleModule,
    AvatarModule,
    MapModule
  ]
})
export class DeliveriesModule {}
