import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateLoader,TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@NgModule( {
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild( {} )
  ],
  exports: [
    TranslateModule
  ]
} )
export class TranslateFacadeModule {}

export const TranslateFacadeRootModule = TranslateModule.forRoot( {
  loader: {
    provide: TranslateLoader,
    useFactory: httpTranslateLoader,
    deps: [ HttpClient ]
  }
} );

@NgModule( {
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateFacadeRootModule
  ],
  exports: [
    TranslateModule
  ]
} )
export class TranslateFacadeTestingModule {}

// AOT compilation support
export function httpTranslateLoader( http: HttpClient ) {
  return new TranslateHttpLoader( http );
}

