import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { LayoutRoutesMap } from '@shared/dictionaries';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${LayoutRoutesMap.dashboard}/${LayoutRoutesMap.delivery}`,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: `${LayoutRoutesMap.dashboard}/${LayoutRoutesMap.delivery}`
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {}
