import {Component, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {ClickedHeaderService} from '../../header/clicked-header.service';
import {Router} from '@angular/router';
import {Link} from '../../header/header.component';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    constructor(public card: CardService, private clickedHeaderService: ClickedHeaderService, private router: Router) {
        this.clickedHeaderService.clickedObs.subscribe((link: Link) => {
            this.router.navigate(['/shop/create-order']);
        });
    }

    ngOnInit(): void {
    }

    moveToList() {
        this.router.navigate(['/shop/list']);
    }
}
