import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

    public confirmed: string[];
    public unconfirmed: string[];

  constructor() {
      this.confirmed = ['Dish', 'Desert', 'Rizotto'];
      this.unconfirmed = ['Beer'];
  }
}
