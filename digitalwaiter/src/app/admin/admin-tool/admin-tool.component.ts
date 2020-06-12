import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish, DishTypes} from "../../dish-card/dish-card.component";
import {DataService} from "../../data.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-admin-tool',
    templateUrl: './admin-tool.component.html',
    styleUrls: ["./admin-tool.component.css"]
})
export class AdminToolComponent implements OnInit, OnDestroy {

    public dishTypes = Object.keys(DishTypes);
    public dishes: Dish[];
    public immutableDishes: Dish[];
    public selectedPaymentType;

    public set selectedDishType(type: DishTypes) {
        this.filterByType(type)
        this._selectedDishType = type;
    }

    public get selectedDishType(): DishTypes {
        return this._selectedDishType;
    }

    private subs = new Array<Subscription>();
    private _selectedDishType: DishTypes;

    constructor(
        private dataService: DataService
    ) {}

    ngOnInit(): void {
        let sub = this.dataService.dishesObs.subscribe(dishes => {
            this.dishes = dishes;
            this.immutableDishes = dishes;
        });
        this.subs.push(sub);
    }

    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }

    log(type) {
        console.dir(type)
    }

    filterByType(type) {
        if(!type) {
            this.dishes = this.immutableDishes;
        }

        this.dishes = this.immutableDishes.filter((dish: Dish) => {
            return dish.type.toLowerCase() === type.toLowerCase();
        })
    }
}
