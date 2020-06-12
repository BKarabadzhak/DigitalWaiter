import {Component, OnInit} from '@angular/core';
import {Dish} from '../../dish-card/dish-card.component';
import {ClickedHeaderService} from '../../header/clicked-header.service';
import {Link} from '../../header/header.component';
import {Router} from '@angular/router';
import {CardService} from '../card.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public selectedDishes: Dish[] = [];
    public confirmedIsVisible = true;
    public modalOpen = false;

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

    onEdit() {
        this.modalOpen = true;
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
    }

    addIngredientsToDish(ing: string[]) {
        this.card.addIngredients(this.selectedDishes[0], ing);
    }
}
