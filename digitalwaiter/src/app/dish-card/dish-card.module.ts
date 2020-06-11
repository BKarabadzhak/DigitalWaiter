import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {DishCardComponent} from "./dish-card.component";

@NgModule({
    declarations: [DishCardComponent],
    exports: [DishCardComponent],
    imports: [
        CommonModule
    ]
})
export class DishCardModule {
}
