import { Component, OnInit } from '@angular/core';
import {ListService} from './list.service';
import {Dish} from '../../dish-card/dish-card.component';
import {ClickedHeaderService} from '../../header/clicked-header.service';
import {Link} from '../../header/header.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public selectedDish: Dish;
    public confirmedIsVisible = true;

  constructor(public listService: ListService,  private clickedHeaderService: ClickedHeaderService, private router: Router) {
      this.clickedHeaderService.clickedObs.subscribe((link: Link) => {
          this.router.navigate(['/shop/create-order']);
      });
  }

  ngOnInit(): void {
  }

  showConfirmed() {
      this.confirmedIsVisible = true;
  }

  showUnconfirmed() {
    this.confirmedIsVisible = false;
  }

    onEdit() {
        console.log(this.selectedDish);
    }
}
