import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Dish, DishTypes} from "../../dish-card/dish-card.component";
import {DataService} from "../../data.service";
import {fromEvent, Subscription} from "rxjs";
import {debounce, debounceTime} from "rxjs/operators";

@Component({
    selector: 'app-admin-tool',
    templateUrl: './admin-tool.component.html',
    styleUrls: ["./admin-tool.component.css"]
})
export class AdminToolComponent implements OnInit, OnDestroy, AfterViewInit {

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


    @ViewChild("search") private searchInputField: ElementRef<HTMLInputElement>;

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

    ngAfterViewInit(): void {
        let eventSub = fromEvent(this.searchInputField.nativeElement, "keyup")
            .pipe(debounceTime(10))
            .subscribe((event) => {
                this.filterByName(this.searchInputField.nativeElement.value);
            });

        this.subs.push(eventSub);
    }

    ngOnDestroy(): void {
        this.subs.forEach((sub) => sub.unsubscribe());
    }

    log(type) {
        console.dir(type)
    }

    filterByType(type: string) {
        if(!type) {
            this.dishes = this.immutableDishes;
        }

        this.dishes = this.immutableDishes.filter((dish: Dish) => {
            return dish.type.toLowerCase() === type.toLowerCase();
        })
    }

    filterByName(value: string) {
        if(!value) {
            this.dishes = this.immutableDishes;
        }

        this.dishes = this.immutableDishes.filter((dish: Dish) => {
            return dish.name.toLowerCase().includes(value.toLowerCase());
        })
    }
}
