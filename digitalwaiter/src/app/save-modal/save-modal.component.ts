import {Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-save-modal',
    templateUrl: './save-modal.component.html',
    styleUrls: ['./save-modal.component.css']
})
export class SaveModalComponent<T> {

    public open: boolean = false;

    @Input() title: string = "";

    @Output() public okClicked = new EventEmitter<T>();

    @ContentChild("form")
    private form: ElementRef<T>;

    constructor() {
    }

    public openModal() {
        this.open = true;
    }

    public closeModal() {
        this.open = false;
    }

    public onCancel() {
        this.closeModal();
    }

    public onOk() {
        this.okClicked.emit(this.form.nativeElement);
        this.closeModal();
    }

}
