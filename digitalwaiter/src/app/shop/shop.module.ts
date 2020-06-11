import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {ShopComponent} from './shop.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import {ContainerModule} from '../header/container.module';

const routes: Routes = [
  {path: 'shop', component: ShopComponent, children: [
      {path: 'createOrder', component: CreateOrderComponent}
    ]}
];

@NgModule({
  declarations: [
    ShopComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(routes),
    ContainerModule
  ],
  exports: [RouterModule]
})
export class ShopModule { }
