import { ButtonModule } from '@lib/ui-components/button';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

import {TitleComponent} from './title.component';
import { TranslateFacadeModule } from '@lib/common-services/services/translate-facade';

@NgModule( {
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateFacadeModule,
    ButtonModule
  ],exports: [
    TitleComponent
  ]
} )
export class TitleModule {}
