import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardService} from '../card.service';
import {DataService} from '../../data.service';

@Component({
    selector: 'app-ingredients-modal',
    templateUrl: './ingredients-modal.component.html',
    styleUrls: ['./ingredients-modal.component.css']
})
export class IngredientsModalComponent implements OnInit {

    public ingredients: string[] = [];
    public selectedIngredients: string[] = [];

    @Input()
    modalOpen = false;

    @Output()
    modalOpenOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    selectedIngredientsOutput: EventEmitter<string[]> = new EventEmitter<string[]>();

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.dataService.allIngredients.subscribe((ing) => {
            this.ingredients = ing;
        });
    }

    closeModal() {
        this.modalOpen = false;
        this.modalOpenOutput.emit(this.modalOpen);
    }

    addIngredients() {
        this.selectedIngredientsOutput.emit(this.selectedIngredients);
        this.modalOpen = false;
        this.modalOpenOutput.emit(this.modalOpen);
    }
}
