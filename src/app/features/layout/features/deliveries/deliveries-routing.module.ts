import { DeliveryDetailPageComponent } from './pages';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryRoutesMap } from '@shared/dictionaries';

const routes: Routes = [
  {
    path: '',
    redirectTo: DeliveryRoutesMap.deliveryDetail
  },
  {
    path: '',
    children: [
      {
        path: DeliveryRoutesMap.deliveryDetail,
        component: DeliveryDetailPageComponent,
        data: {
          title: ''
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule {}
