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
    public selectedDishTypes: DishTypes[] = [];
    public dishes: Dish[];
    public selectedPaymentType;

    private subs = new Array<Subscription>();

    constructor(
        private dataService: DataService
    ) {
    }

    ngOnInit(): void {
        let sub = this.dataService.dishesObs.subscribe(dishes => {
            this.dishes = dishes;
        });
        this.subs.push(sub);
    }

    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }

    log(type) {
        console.dir(type)
    }
}
