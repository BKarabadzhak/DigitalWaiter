import {Component, OnInit} from '@angular/core';
import {Link} from '../../header/header.component';
import {ClickedHeaderService} from "../../header/clicked-header.service";
import {Dish, DishTypes} from '../../dish-card/dish-card.component';

@Component({
    selector: 'app-create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(
      private clickedHeaderService: ClickedHeaderService
  ) {
      this.clickedHeaderService.clickedObs.subscribe((link: Link) => {
          console.log(link);
      });
  }

    public dishTypes = DishTypes;
    public dishCards: Dish[];

    ngOnInit(): void {
        this.dishCards = [
            {name: 'Spicy Pork Tenderloin with Apples and Potatoes', description: 'Jazz up your pork tenderloin with this spicy-sweet combo of apples, cider, sweet potatoes, and as much or as little heat as your palate requires!', price: 30, ingredients: ['cooking spray', 'tablespoon ground ginger',
                'tablespoon light brown sugar', 'tablespoons butter'], imgUrl: './assets/', type: this.dishTypes.main}
        ];
    }

}
