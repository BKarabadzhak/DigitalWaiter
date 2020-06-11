import {Component, OnInit} from '@angular/core';
import {Link} from '../header/header.component';
import {Dish, DishTypes} from '../dish-card/dish-card.component';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

    public links: Link[];
    public dishTypes = DishTypes;

    constructor() {
    }

    ngOnInit(): void {
        this.links = [
            {name: this.dishTypes.main},
            {name: this.dishTypes.soups},
            {name: this.dishTypes.deserts},
            {name: this.dishTypes.spaghetti},
            {name: this.dishTypes.drinks}
        ];
    }

}
