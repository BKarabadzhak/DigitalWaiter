import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ClarityModule} from '@clr/angular';
import {ContainerModule} from '../header/container.module';
import {AdminToolComponent} from './admin-tool/admin-tool.component';
import {DishCardModule} from "../dish-card/dish-card.module";
import {SaveModalModule} from "../save-modal/save-modal.module";
import { QueueComponent } from './queue/queue.component';
import { ChangeDishComponent } from './change-dish/change-dish.component';
import {AddNewDishComponent} from './add-new-dish/add-new-dish.component';
import {FormsModule} from '@angular/forms';

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
            },
           {path: 'add-new-dish', component: AddNewDishComponent}
        ]
    }
];

@NgModule({
    declarations: [
        AdminComponent,
        AdminToolComponent,
        QueueComponent,
        ChangeDishComponent,
        AddNewDishComponent
    ],
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild(routes),
        ContainerModule,
        DishCardModule,
        SaveModalModule,
        FormsModule
    ],
    exports: [RouterModule]
})
export class AdminModule {
}
