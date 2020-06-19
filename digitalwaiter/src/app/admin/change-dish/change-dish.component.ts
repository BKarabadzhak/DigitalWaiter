import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Dish} from "../../dish-card/dish-card.component";
import {DataService} from "../../data.service";
import {combineLatest, Observable, Subject} from "rxjs";

enum FormFields {
    "name",
    "description",
    "price",
    "imgUrl",
    "type",
    "ingredients",
}

export interface ChangeDishEvent {
    newDish: Dish;
    oldDishName: string;
}

@Component({
    selector: 'app-change-dish',
    templateUrl: './change-dish.component.html',
    styleUrls: ['./change-dish.component.css']
})
export class ChangeDishComponent implements OnInit {
    open: boolean;
    ingredients: string[];
    types: string[];
    formFields = FormFields;
    selectedIngredients: string[];
    dishSubject = new Subject<Dish>()
    oldDishName: string;

    @Input() title: string = "";

    set dish(dish: Dish) {
        this.dishSubject.next(dish);
    }

    @Output() public okClicked = new EventEmitter<ChangeDishEvent>();

    @ViewChild("form")
    private form: ElementRef<any>;

    constructor(private dataService: DataService) {
        combineLatest([this.dataService.typesObs, this.dishSubject.asObservable()])
            .subscribe(([types, dish]) => {
                this.types = types;
                this.form.nativeElement[FormFields.name].value = dish.name;
                this.oldDishName = dish.name;
                this.form.nativeElement[FormFields.description].value = dish.description ? dish.description : "" ;
                this.form.nativeElement[FormFields.type].value = dish.type;
                this.form.nativeElement[FormFields.imgUrl].value = dish.imgUrl ? dish.imgUrl : "";
                this.form.nativeElement[FormFields.price].value = dish.price ? dish.price : "";
                this.selectedIngredients = dish.ingredients ? dish.ingredients : [];
            })

        this.dataService.typesObs.subscribe((types) => this.types = types);
        this.dataService.allIngredients.subscribe((ingredients) => this.ingredients = ingredients);
    }

    ngOnInit(): void {
    }

    public openModal(dish: Dish) {
        this.open = true;
        this.dish = dish;
    }

    public closeModal() {
        this.open = false;
    }

    public onCancel() {
        this.closeModal();
    }

    public onOk() {
        const newDish = {
            name: this.form.nativeElement[FormFields.name].value,
            description: this.form.nativeElement[FormFields.description].value,
            type: this.form.nativeElement[FormFields.type].value,
            price: this.form.nativeElement[FormFields.price].value,
            ingredients: this.selectedIngredients,
            imgUrl: this.form.nativeElement[FormFields.imgUrl].value
        }

        this.okClicked.emit({newDish, oldDishName: this.oldDishName});

        this.closeModal();
    }
}
