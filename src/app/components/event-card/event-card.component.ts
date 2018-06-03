import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EventItem } from '../../models/event-item';

@Component({
    selector: 'larp-event-card',
    templateUrl: './event-card.component.html',
    styleUrls: ['./event-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class EventCardComponent implements OnInit {

    @Input() event: EventItem;
    public maxLength = 250;

    constructor() { }

    ngOnInit() { }

}
