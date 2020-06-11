import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ClarityModule} from '@clr/angular';
import {ContainerModule} from "../header/container.module";

const routes: Routes = [
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations: [
    AdminComponent
  ],
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild(routes),
        ContainerModule
    ],
  exports: [RouterModule]
})
export class AdminModule { }
