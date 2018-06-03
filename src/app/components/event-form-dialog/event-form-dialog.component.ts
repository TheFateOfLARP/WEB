import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'larp-event-form-dialog',
    templateUrl: './event-form-dialog.component.html',
    styleUrls: ['./event-form-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventFormDialogComponent implements OnInit {

    public event = {name: 'aaaa'};
    constructor() { }

    ngOnInit() {
    }

}
