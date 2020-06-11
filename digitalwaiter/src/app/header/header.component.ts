import {Component, Input, OnInit} from '@angular/core';

export interface Link {
  name: string;
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input()
  links: Link[];

  ngOnInit(): void {
  }

}
