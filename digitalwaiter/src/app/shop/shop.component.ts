import {Component, OnInit} from '@angular/core';
import {Link} from '../header/header.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public links: Link[];

  constructor() {
  }

  ngOnInit(): void {
    this.links = [
      {name: 'Основно ястие', path: ''},
      {name: 'Супи', path: ''},
      {name: 'Десерти', path: ''},
      {name: 'Спагети и ризото', path: ''},
      {name: 'Алкохолни напитки', path: ''},
      {name: 'Безалкохолни напитки', path: ''}
    ];
  }

}
