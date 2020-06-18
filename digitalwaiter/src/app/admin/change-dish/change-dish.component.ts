import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Dish} from "../../dish-card/dish-card.component";
import {DataService} from "../../data.service";

enum FormFields {
    "name",
    "description",
    "price",
    "imgUrl",
    "ingredients",
    "type"
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

    @Input() title: string = "";
    @Input() set dish(dish: Dish) {
    }

    @Output() public okClicked = new EventEmitter<Dish>();

    @ViewChild("form")
    private form: ElementRef<HTMLFormElement>;

    constructor(private dataService: DataService) {
        this.dataService.typesObs.subscribe((types) => this.types = types);
        this.dataService.allIngredients.subscribe((ingredients) => this.ingredients = ingredients);
    }

    ngOnInit(): void {
    }

    public openModal() {
        this.open = true;
    }

    public closeModal() {
        this.open = false;
    }

    public onCancel() {
        this.closeModal();
    }

    public onOk() {
        this.okClicked.emit();

        this.closeModal();
    }
}
