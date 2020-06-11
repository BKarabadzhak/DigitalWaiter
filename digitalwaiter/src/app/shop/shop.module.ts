import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {ShopComponent} from './shop.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {ContainerModule} from '../header/container.module';
import {DishCardModule} from "../dish-card/dish-card.module";

const routes: Routes = [
    {
        path: 'shop', component: ShopComponent
    }
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
        ContainerModule,
        DishCardModule
    ],
    exports: [RouterModule]
})
export class ShopModule {
}
