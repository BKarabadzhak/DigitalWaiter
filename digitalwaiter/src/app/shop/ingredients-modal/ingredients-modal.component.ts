import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DataService} from '../../data.service';

export interface IngredientsAndAmount {
    ingredients: string[];
    amount?: number;
}

@Component({
    selector: 'app-ingredients-modal',
    templateUrl: './ingredients-modal.component.html',
    styleUrls: ['./ingredients-modal.component.css']
})
export class IngredientsModalComponent implements OnChanges {

    public ingredients: string[] = [];
    public selectedIngredients: string[] = [];

    @Input()
    modalOpen = false;

    @Input()
    removeIng = false;

    @Input()
    allDishIngredients: string[] = [];

    @Output()
    modalOpenOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    selectedIngredientsToAddOutput: EventEmitter<IngredientsAndAmount> = new EventEmitter<IngredientsAndAmount>();

    @Output()
    selectedIngredientsToRemoveOutput: EventEmitter<IngredientsAndAmount> = new EventEmitter<IngredientsAndAmount>();

    constructor(private dataService: DataService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.removeIng) {
            this.ingredients = this.allDishIngredients;
        } else {
            this.dataService.allIngredients.subscribe((ing) => {
                this.ingredients = ing;
            });
        }
    }

    closeModal() {
        this.modalOpen = false;
        this.modalOpenOutput.emit(this.modalOpen);
    }

    addIngredients() {
        const output: IngredientsAndAmount = {ingredients: this.selectedIngredients, amount: this.selectedIngredients.length * 0.5};
        this.selectedIngredientsToAddOutput.emit(output);
        this.modalOpen = false;
        this.modalOpenOutput.emit(this.modalOpen);
        this.selectedIngredients = [];
    }

    removeIngredients() {
        const output: IngredientsAndAmount = {ingredients: this.selectedIngredients};
        this.selectedIngredientsToRemoveOutput.emit(output);
        this.modalOpen = false;
        this.modalOpenOutput.emit(this.modalOpen);
        this.selectedIngredients = [];
    }
}
