import {Component, OnInit} from '@angular/core';
import {Dish} from "../../dish-card/dish-card.component";
import {DataService} from "../../data.service";

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
    public dishes: Dish[];
    public selectedDish: Dish;

    constructor(
        private dataService: DataService
    ) {
        this.dataService.queueObs.subscribe((queue: Dish[]) => {
            this.dishes = queue;
        });
    }

    ngOnInit(): void {
    }

    delete() {
        const typeIndx = this.dishes.findIndex((type) => this.selectedDish === type);
        this.selectedDish = null;
        this.dishes.splice(typeIndx, 1);
        this.dataService.updateQueue(this.dishes);
    }

}
