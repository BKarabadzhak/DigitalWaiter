import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {ShopComponent} from './shop.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {ContainerModule} from '../header/container.module';
import {DishCardModule} from "../dish-card/dish-card.module";
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: 'shop',
        component: ShopComponent,
        children: [
            {
                path: "",
                redirectTo: "create-order",
                pathMatch: "full"
            },
            {path: 'create-order', component: CreateOrderComponent},
            {path: 'list', component: ListComponent}
        ],
    },
    {path: '**', redirectTo: '/shop/create-order', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        ShopComponent,
        CreateOrderComponent,
        ListComponent
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
