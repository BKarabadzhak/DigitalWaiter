import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ClarityModule} from '@clr/angular';
import {ContainerModule} from "../header/container.module";
import {AdminToolComponent} from './admin-tool/admin-tool.component';
import {DishCardModule} from "../dish-card/dish-card.module";
import {SaveModalModule} from "../save-modal/save-modal.module";
import { QueueComponent } from './queue/queue.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path:"",
                redirectTo: "general",
                pathMatch: "full"
            },
            {
                path: "general",
                component: AdminToolComponent
            },
            {
                path: "queue",
                component: QueueComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        AdminComponent,
        AdminToolComponent,
        QueueComponent
    ],
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild(routes),
        ContainerModule,
        DishCardModule,
        SaveModalModule
    ],
    exports: [RouterModule]
})
export class AdminModule {
}
