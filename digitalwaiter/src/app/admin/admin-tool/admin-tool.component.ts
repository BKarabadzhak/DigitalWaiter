import {Component, OnInit} from '@angular/core';
import {Dish, DishTypes} from "../../dish-card/dish-card.component";

@Component({
    selector: 'app-admin-tool',
    templateUrl: './admin-tool.component.html',
    styleUrls: ["./admin-tool.component.css"]
})
export class AdminToolComponent implements OnInit {

    public dishTypes = Object.keys(DishTypes);
    public selectedDishTypes: DishTypes[] = [];
    public dishes: Dish[];
    public selectedPaymentType;

    constructor() {
    }

    ngOnInit(): void {
    }

    log(type) {
        console.dir(type)
    }
}
