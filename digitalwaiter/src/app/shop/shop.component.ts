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
    public dishCards: Dish[];

    constructor() {
    }

    ngOnInit(): void {
        this.links = [
            {name: this.dishTypes.main, path: ''},
            {name: this.dishTypes.soups, path: ''},
            {name: this.dishTypes.deserts, path: ''},
            {name: this.dishTypes.spaghetti, path: ''},
            {name: this.dishTypes.drinks, path: ''}
        ];
    }

}
