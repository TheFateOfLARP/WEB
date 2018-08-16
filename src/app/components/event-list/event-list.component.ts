import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityServices, EntityCollectionService } from 'ngrx-data';

import { EventItem } from '../../models/event-item.model';

@Component({
    selector: 'larp-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit {

    public eventList$: Observable<EventItem[]>;
    private eventService: EntityCollectionService<EventItem>;

    constructor(
        private entityService: EntityServices,
        private cdr: ChangeDetectorRef
    ) {
        this.eventService = entityService.getEntityCollectionService('Event');
    }

    ngOnInit() {
        this.eventList$ = this.eventService.entities$;
        this.eventService.getAll();
    }

}
