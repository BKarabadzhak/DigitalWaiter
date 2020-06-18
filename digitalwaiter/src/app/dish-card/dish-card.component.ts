import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardService} from '../shop/card.service';

export interface Dish {
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    ingredients: string[];
    type: string;
}

@Component({
    selector: 'app-dish-card',
    templateUrl: './dish-card.component.html',
    styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {

    @Input() public dish: Dish;
    @Input() public isAdminView = false;

    @Output() public deleteClicked = new EventEmitter();
    @Output() public changeClicked = new EventEmitter();

    constructor(private card: CardService) {
    }

    ngOnInit(): void {
    }

    addOrder() {
        this.card.addToCard(this.dish);
    }

    onDeleteClick() {
        this.deleteClicked.emit();
    }

    onChangeClick() {
        this.changeClicked.emit();
    }
}
