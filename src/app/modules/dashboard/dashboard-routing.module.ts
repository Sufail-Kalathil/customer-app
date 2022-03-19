import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {CustomerComponent} from "./customer/customer.component";
import {OrderComponent} from "./order/order.component";
import {AboutComponent} from "./about/about.component";
import {AuthGuard} from "../../includes/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'customer',
        component: CustomerComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'order',
        component: OrderComponent,
        canActivate: [AuthGuard]

      },
      {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuard]

      },
      {
        path: '',
        redirectTo: 'customer'
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
