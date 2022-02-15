
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateFacadeRootModule} from '@lib/common-services/services/translate-facade';
import { LayoutModule } from '@features/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateFacadeRootModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
