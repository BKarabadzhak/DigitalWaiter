import {Injectable} from '@angular/core';
import {Dish} from '../dish-card/dish-card.component';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    public dishesInCardConfirmed: Dish[] = [];
    public dishesInCardUnconfirmed: Dish[] = [];

    constructor() {
    }

    public addToCard(item: Dish) {
        const itemRef = JSON.parse(JSON.stringify(item));
        this.dishesInCardUnconfirmed.push(itemRef);
    }

    public removeFromCard(item: Dish) {
        const index = this.dishesInCardUnconfirmed.indexOf(item);
        if (index !== -1) {
            this.dishesInCardUnconfirmed.splice(index, 1);
        }
    }

    public changeStatusOfSelectedUnconfirmedDishes(items: Dish[]) {
        items.forEach((item) => {
            const index = this.dishesInCardUnconfirmed.indexOf(item);
            const arr = this.dishesInCardUnconfirmed.slice(index, index + 1);
            this.dishesInCardConfirmed.push(arr[0]);
        });
        this.dishesInCardUnconfirmed = [];
    }

    public changeStatusOfAllUnconfirmedDishes() {
        this.dishesInCardUnconfirmed.forEach((item) => {
            this.dishesInCardConfirmed.push(item);
        });
        this.dishesInCardUnconfirmed = [];
    }
}
