import {Component, OnInit} from '@angular/core';
import {Link} from '../header/header.component';
import {DataService} from "../data.service";

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

    public links: Link[];

    constructor(
        private dataService: DataService
    ) {
    }

    ngOnInit(): void {
        this.links = new Array<Link>();
        this.dataService.typesObs
            .subscribe(types => {
                types.forEach(type => {
                    this.links.push({
                        name: type.toUpperCase()
                    });
                });
            });
    }

}
