import {Component, OnInit} from '@angular/core';
import {Dish, DishTypes} from "../../dish-card/dish-card.component";

@Component({
    selector: 'app-admin-tool',
    templateUrl: './admin-tool.component.html'
})
export class AdminToolComponent implements OnInit {

    public dishTypes = DishTypes;
    public dishes: Dish[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
