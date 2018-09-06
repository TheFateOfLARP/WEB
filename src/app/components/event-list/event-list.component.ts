import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
        private entityService: EntityServices
    ) {
        this.eventService = this.entityService.getEntityCollectionService('Event');
        this.eventList$ = this.eventService.entities$;
    }

    ngOnInit() {
        this.eventService.getAll();
    }

}
