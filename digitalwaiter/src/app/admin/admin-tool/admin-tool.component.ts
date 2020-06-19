import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Dish} from "../../dish-card/dish-card.component";
import {DataService} from "../../data.service";
import {fromEvent, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {SaveModalComponent} from "../../save-modal/save-modal.component";
import {ChangeDishComponent, ChangeDishEvent} from "../change-dish/change-dish.component";

interface Filter<T extends any, V extends any> {
    filter(dish: T, value: V): boolean;
    values: V[];
}

@Component({
    selector: 'app-admin-tool',
    templateUrl: './admin-tool.component.html',
    styleUrls: ["./admin-tool.component.css"]
})
export class AdminToolComponent implements OnInit, OnDestroy, AfterViewInit {

    public dishTypes: string[];
    public dishes: Dish[];
    public immutableDishes: Dish[];
    public selectedPaymentType;
    public paymentTypes: string[];
    public dishForDelete: Dish;
    public openNewDishModalBoolean: boolean = false
    private filters = new Object();

    public set selectedDishType(type: string) {
        this.filterByType(type)
        this._selectedDishType = type;
    }

    public get selectedDishType(): string {
        return this._selectedDishType;
    }

    @ViewChild("search") private searchInputField: ElementRef<HTMLInputElement>;
    @ViewChild("newDishType") private addDishTypeModal: SaveModalComponent<HTMLFormElement>;
    @ViewChild("newPaymentType") private addPaymentTypeModal: SaveModalComponent<HTMLFormElement>;
    @ViewChild("deleteDishModal") private deleteDishModal: SaveModalComponent<HTMLFormElement>;
    @ViewChild("changeDishModal") private changeDishModal: ChangeDishComponent;

    private subs = new Array<Subscription>();
    private _selectedDishType: string;

    constructor(
        private dataService: DataService
    ) {}

    ngOnInit(): void {
        let sub = this.dataService.dishesObs.subscribe(dishes => {
            this.dishes = dishes;
            this.immutableDishes = dishes;
        });

        let typeSub = this.dataService.typesObs.subscribe(types => {
            this.dishTypes= types;
        })

        let paySub = this.dataService.paymentTypesObs.subscribe(types => {
            this.paymentTypes= types;
        })

        this.subs.push(sub);
        this.subs.push(typeSub);
        this.subs.push(paySub);
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
        console.log(type)
    }

    filterByType(type: string) {
        if(!type) {
            delete this.filters["type"];
            this.filterDishes();
            return;
        }

        const filter = (dish: Dish, value: string) => {
            return dish.type.toLowerCase() === value.toLowerCase();
        };

        this.filters["type"] = {
            filter,
            values: [type]
        };
        this.filterDishes();
    }

    filterByName(value: string) {
        if(!value) {
            delete this.filters["name"];
            this.filterDishes();
            return;
        }

        const filter = (dish: Dish, value: string) => {
            return dish.name.toLowerCase().includes(value.toLowerCase());
        };

        this.filters["name"] = {
            filter,
            values: [value]
        };
        this.filterDishes();
    }

    filterDishes() {
        const keys = Object.keys(this.filters);
        if(keys.length === 0) {
            this.dishes = this.immutableDishes;
            return;
        }

        this.dishes = this.immutableDishes.filter((dish: Dish) => {
            let filtered = true;
            keys.forEach((key) => {
                const filter = this.filters[key];
                if(!filter.filter(dish, filter.values[0])) {
                    filtered = false;
                }
            });
            return filtered;
        });
    }

    openNewDishTypeModal() {
        this.addDishTypeModal.openModal();
    }

    openNewPaymentModal() {
        this.addPaymentTypeModal.openModal();
    }

    addNewDishType(value: HTMLInputElement) {
        this.dishTypes.push(value['newDishType'].value);
        this.dataService.updateDishTypesArray(this.dishTypes);
    }

    deleteType() {
        const typeIndx = this.dishTypes.findIndex((type) => this.selectedDishType === type);
        this.selectedDishType = null;
        this.dishTypes.splice(typeIndx, 1);
        this.dataService.updateDishTypesArray(this.dishTypes);
    }

    addNewPaymentType(value) {
        this.paymentTypes.push(value['newPaymentType'].value);
        this.dataService.updatePaymentTypesArray(this.paymentTypes);
    }

    deletePaymentType() {
        const typeIndx = this.paymentTypes.findIndex((type) => this.selectedPaymentType === type);
        this.selectedPaymentType = null;
        this.paymentTypes.splice(typeIndx, 1);
        this.dataService.updatePaymentTypesArray(this.paymentTypes);
    }

    openDeleteDishModal(dish) {
        this.dishForDelete = dish;
        this.deleteDishModal.openModal();
    }

    addNewDish(dish) {
        this.immutableDishes.push(dish);
        this.dataService.updateDishesArray(this.immutableDishes);
    }

    updateDish(event: ChangeDishEvent) {
        const dishIndx = this.immutableDishes.findIndex((dish) => dish.name === event.oldDishName);
        this.immutableDishes[dishIndx] = event.newDish;
        this.dataService.updateDishesArray(this.immutableDishes);
    }

    deleteDish() {
        const typeIndx = this.immutableDishes.findIndex((value) => this.dishForDelete === value);
        this.dishForDelete = null;
        this.immutableDishes.splice(typeIndx, 1);
        this.dataService.updateDishesArray(this.immutableDishes);
    }

    openChangeDishModal(dish) {
        this.changeDishModal.openModal(dish);
    }

    public openNewDishModal() {
        this.openNewDishModalBoolean = true;
    }
}
