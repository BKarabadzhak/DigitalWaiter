import {Component, OnInit} from '@angular/core';
import {Dish} from "../../dish-card/dish-card.component";

@Component({
    selector: 'app-admin-tool',
    templateUrl: './admin-tool.component.html'
})
export class AdminToolComponent implements OnInit {

    public dishes: Dish[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
