import {Component, OnInit} from '@angular/core';
import {Link} from "../header/header.component";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    public links: Link[] = [
        {
            name: "Admin Tool",
            path: "general",
        },
        {
            name: "Queue",
            path: "queue"
        }
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

}
