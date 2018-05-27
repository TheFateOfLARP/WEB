import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventItem } from '../../models/event-item';

@Component({
    selector: 'larp-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit {

    public eventList: EventItem[];

    constructor(
        private cdr: ChangeDetectorRef,
        private eventService: EventService
    ) { }

    ngOnInit() {
        this.eventService.events()
            .subscribe(x => {
                this.eventList = [...x];
                this.cdr.markForCheck();
            });
    }

}
