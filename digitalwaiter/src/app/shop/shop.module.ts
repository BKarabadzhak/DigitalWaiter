import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {ShopComponent} from './shop.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopModule { }
