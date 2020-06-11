import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Link} from "./header.component";

@Injectable({
    providedIn: 'root'
})
export class ClickedHeaderService {

    private clickedSubj = new Subject<Link>();
    public clickedObs: Observable<Link> = this.clickedSubj.asObservable();

    constructor() {
    }

    public sendClick(headerItem: Link) {
        this.clickedSubj.next(headerItem);
    }
}
