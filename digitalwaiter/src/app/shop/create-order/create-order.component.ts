import {Component, OnInit} from '@angular/core';
import {Link} from '../../header/header.component';
import {ClickedHeaderService} from '../../header/clicked-header.service';
import {Dish} from '../../dish-card/dish-card.component';
import {Router} from '@angular/router';
import {DataService} from '../../data.service';

@Component({
    selector: 'app-create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

    constructor(
        private clickedHeaderService: ClickedHeaderService, private router: Router, private dataService: DataService
    ) {}

    public dishTypes: string[];
    public dishCards: Dish[];
    private dishes: Dish[];

    ngOnInit(): void {
        this.dataService.dishesObs.subscribe((dishes) => {
            this.dishCards = dishes;
        });

        this.dataService.typesObs.subscribe((types) => {
            this.dishTypes = types;
        });

        this.clickedHeaderService.clickedObs.subscribe((link: Link) => {
            this.dishCards = this.dishes?.filter(s => s.type.toLowerCase() === link.name.toLowerCase());
        });
        this.dishes = this.dishCards;
        const link: Link = {name: 'main'};
        this.clickedHeaderService.sendClick(link);
    }

    moveToList() {
        this.router.navigate(['/shop/list']);
    }
}
