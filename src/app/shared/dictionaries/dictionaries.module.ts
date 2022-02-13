import {CommonModule} from '@angular/common';
import {ModuleWithProviders,NgModule} from '@angular/core';

@NgModule( {
  declarations: [],
  imports: [
    CommonModule
  ]
} )
export class DictionariesModule {

  static forRoot(
    environment: {}
  ): ModuleWithProviders<DictionariesModule> {
    return {
      ngModule: DictionariesModule,
      providers: [
        {provide: 'env',useValue: environment}
      ]
    };
  }

}
