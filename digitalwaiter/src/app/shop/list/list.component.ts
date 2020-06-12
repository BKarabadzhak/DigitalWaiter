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
    }

    onEdit() {
        console.log(this.selectedDishes);
    }

    addNewDish() {
        this.router.navigate(['/shop/create-order']);
    }

    onDelete() {
        this.card.removeFromCard(this.selectedDishes[0]);
    }

    confirmSelectedDishes() {
        this.card.changeStatusOfSelectedUnconfirmedDishes(this.selectedDishes);
    }

    confirmAllDishes() {
        this.card.changeStatusOfAllUnconfirmedDishes();
    }
}
