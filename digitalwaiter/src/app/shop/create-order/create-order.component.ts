import { Component, OnInit } from '@angular/core';
import {Link} from '../../header/header.component';
import {ClickedHeaderService} from "../../header/clicked-header.service";

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

      })
  }

  ngOnInit(): void {
  }

}
