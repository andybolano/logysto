import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

import {LogoComponent} from './logo.component';

@NgModule( {
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [
    LogoComponent
  ]
} )
export class LogoModule {}
