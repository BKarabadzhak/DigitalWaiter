import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveModalComponent } from './save-modal.component';
import {ClarityModule} from "@clr/angular";

@NgModule({
    declarations: [SaveModalComponent],
    exports: [
        SaveModalComponent
    ],
    imports: [
        CommonModule,
        ClarityModule
    ]
})
export class SaveModalModule { }
