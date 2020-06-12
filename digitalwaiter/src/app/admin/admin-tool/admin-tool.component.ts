import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Dish} from "../../dish-card/dish-card.component";
import {DataService} from "../../data.service";
import {fromEvent, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {SaveModalComponent} from "../../save-modal/save-modal.component";

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

    public set selectedDishType(type: string) {
        this.filterByType(type)
        this._selectedDishType = type;
    }

    public get selectedDishType(): string {
        return this._selectedDishType;
    }


    @ViewChild("search") private searchInputField: ElementRef<HTMLInputElement>;
    @ViewChild("newDishType") private addDishTypeModal: SaveModalComponent<HTMLFormElement>;

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
        console.log(type)
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
        });
    }

    openNewDishModal() {
        this.addDishTypeModal.openModal();
    }

    addNewDishType(value: HTMLInputElement) {
        this.dishTypes.push(value['newDishType'].value);
        this.dataService.updateDishTypesArray(this.dishTypes);
    }
}
