import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from '../../dish-card/dish-card.component';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-add-new-dish',
  templateUrl: './add-new-dish.component.html',
  styleUrls: ['./add-new-dish.component.css']
})
export class AddNewDishComponent implements OnInit {

    @Input()
    modalIsOpen = true;

    @Output()
    modalOpenOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    dishOutput: EventEmitter<Dish> = new EventEmitter<Dish>();

    public ingredients: string[] = [];
    public selectedIngredients: string[] = [];
    fileUrl: string;
    dishName: string;
    dishDescription: string;
    price: number;
    dishType: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.dataService.allIngredients.subscribe((ing) => {
          this.ingredients = ing;
      });
  }

    closeModal() {
        this.modalIsOpen = false;
        this.selectedIngredients = [];
        this.modalOpenOutput.emit(this.modalIsOpen);
    }

    addDish() {
        const dishToAdd: Dish = {
            name: this.dishName,
            description: this.dishDescription,
            price: this.price,
            imgUrl: this.fileUrl,
            ingredients: this.selectedIngredients,
            type: this.dishType
        };

        this.closeModal();
        this.selectedIngredients = [];
        
        this.dishOutput.emit(dishToAdd);
        this.modalOpenOutput.emit(this.modalIsOpen);
    }

}
