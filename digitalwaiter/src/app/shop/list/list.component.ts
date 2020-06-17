import {Component, OnInit} from '@angular/core';
import {Dish} from '../../dish-card/dish-card.component';
import {ClickedHeaderService} from '../../header/clicked-header.service';
import {Link} from '../../header/header.component';
import {Router} from '@angular/router';
import {CardService} from '../card.service';
import {IngredientsAndAmount} from '../ingredients-modal/ingredients-modal.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public selectedDishes: Dish[] = [];
    public confirmedIsVisible = false;
    public modalOpen = false;
    public removeIng = false;

    constructor(public card: CardService, private clickedHeaderService: ClickedHeaderService, private router: Router) {
        this.clickedHeaderService.clickedObs.subscribe((link: Link) => {
            this.router.navigate(['/shop/create-order']);
        });
    }

    ngOnInit(): void {
    }

    showConfirmed() {
        this.confirmedIsVisible = true;
    }

    showUnconfirmed() {
        this.confirmedIsVisible = false;
        this.selectedDishes = [];
    }

    onAddIng() {
        this.modalOpen = true;
    }

    onRemoveIng() {
        this.modalOpen = true;
        this.removeIng = true;
    }

    addNewDish() {
        this.router.navigate(['/shop/create-order']);
    }

    onDelete() {
        this.card.removeFromCard(this.selectedDishes);
    }

    confirmSelectedDishes() {
        this.card.changeStatusOfSelectedUnconfirmedDishes(this.selectedDishes);
    }

    confirmAllDishes() {
        this.card.changeStatusOfAllUnconfirmedDishes();
    }

    closeModal(b: boolean) {
        this.modalOpen = b;
        this.removeIng = false;
    }

    addIngredientsToDish(ingredientsAndAmount: IngredientsAndAmount) {
        this.card.addIngredients(this.selectedDishes[0], ingredientsAndAmount);
    }

    removeIngredientsFromDish(ingredientsAndAmount: IngredientsAndAmount) {
        this.card.removeIngredients(this.selectedDishes[0], ingredientsAndAmount);
    }

    moveToPayment() {
        this.router.navigate(['/shop/payment']);
    }
}
