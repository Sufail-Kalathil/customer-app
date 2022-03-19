import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {HeaderComponent} from "./shared/header/header.component";
import {OrderComponent} from "./order/order.component";
import {AboutComponent} from "./about/about.component";
import {CustomerComponent} from "./customer/customer.component";
import {CustomerSlideComponent} from "./shared/customer-slide/customer-slide.component";


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    OrderComponent,
    AboutComponent,
    CustomerComponent,
    CustomerSlideComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
