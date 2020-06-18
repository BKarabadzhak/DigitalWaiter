import {Injectable} from '@angular/core';
import {Dish} from '../dish-card/dish-card.component';
import {IngredientsAndAmount} from './ingredients-modal/ingredients-modal.component';
import {DataService} from "../data.service";

@Injectable({
    providedIn: 'root'
})
export class CardService {

    public dishesInCardConfirmed: Dish[] = [];
    public dishesInCardUnconfirmed: Dish[] = [];
    public totalAmount = 0;

    constructor(private dataService: DataService) {
    }

    public addToCard(item: Dish) {
        const itemRef = JSON.parse(JSON.stringify(item));
        this.dishesInCardUnconfirmed.push(itemRef);
        this.totalAmount += item.price;
    }

    public addIngredients(item: Dish, ingredientsAndAmount: IngredientsAndAmount) {
        const index = this.dishesInCardUnconfirmed.indexOf(item);
        this.dishesInCardUnconfirmed[index].ingredients.push(...ingredientsAndAmount.ingredients);
        item.price += ingredientsAndAmount.amount;
        this.totalAmount += ingredientsAndAmount.amount;
    }

    public removeIngredients(item: Dish, ingredientsAndAmount: IngredientsAndAmount) {
        const index = this.dishesInCardUnconfirmed.indexOf(item);
        ingredientsAndAmount.ingredients.forEach((ing) => {
            const indx = this.dishesInCardUnconfirmed[index].ingredients.indexOf(ing);
            if (indx !== -1) {
                this.dishesInCardUnconfirmed[index].ingredients.splice(indx, 1);
                item.price -= 0.5;
                this.totalAmount -= 0.5;
            }
        });
    }

    public removeFromCard(items: Dish[]) {
        items.forEach((item) => {
            const index = this.dishesInCardUnconfirmed.indexOf(item);
            if (index !== -1) {
                this.dishesInCardUnconfirmed.splice(index, 1);
                this.totalAmount -= item.price;
            }
        });
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
        this.dataService.updateQueue(this.dishesInCardConfirmed);
    }
}
