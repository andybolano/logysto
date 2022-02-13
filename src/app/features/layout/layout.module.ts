import { ButtonModule } from '@lib/ui-components/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateFacadeModule } from '@lib/common-services/services/translate-facade';
import { LayoutComponent } from './layout.component';
import { LAYOUT_COMPONENTS } from './components';
import { LayoutRoutingModule } from './layout-routing.module';
import { LogoModule } from '@shared/components/logo';

@NgModule({
  declarations: [LayoutComponent, ...LAYOUT_COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    TranslateFacadeModule,
    LayoutRoutingModule,
    LogoModule,
    ButtonModule
  ],
  exports: [LayoutComponent, ...LAYOUT_COMPONENTS]
})
export class LayoutModule {}
