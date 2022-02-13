import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRoutesMap } from '@shared/dictionaries';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
 {
    path: LayoutRoutesMap.dashboard,
    component: LayoutComponent,
    children: [
      {
        path: LayoutRoutesMap.delivery,
        loadChildren: () =>
          import(`./features/deliveries`).then(
            module => module.DeliveriesModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
