import {Component, Input, OnInit} from '@angular/core';
import {ClickedHeaderService} from "./clicked-header.service";

export interface Link {
    name: string;
    path?: string;
    active?: boolean;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private lastLink: Link;
    private _links: Link[];

    constructor(
        private clickService: ClickedHeaderService
    ) {
    }

    @Input()
    set links(links: Link[]) {
        this._links = links;
        this.lastLink = links[0];
        this.lastLink.active = true;
    }

    get links(): Link[] {
        return this._links;
    }

    ngOnInit(): void {
    }

    clickOnLink(link: Link) {
        link.active = true;
        this.lastLink.active = false;
        this.lastLink = link;
    }

    clickOnItem(link: Link) {
        this.clickOnLink(link);
        this.clickService.sendClick(link);
    }

}
