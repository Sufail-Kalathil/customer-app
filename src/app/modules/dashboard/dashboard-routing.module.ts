import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {CustomerComponent} from "./customer/customer.component";
import {OrderComponent} from "./order/order.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'',
        redirectTo:'customer'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
