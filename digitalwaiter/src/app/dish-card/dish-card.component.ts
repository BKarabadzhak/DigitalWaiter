import {Component, Input, OnInit} from '@angular/core';

export interface Dish {
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  ingredients: string[]
}

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {

  @Input() public dish: Dish;
  @Input() public isAdminView = false;

  constructor() { }

  ngOnInit(): void {
  }

}
