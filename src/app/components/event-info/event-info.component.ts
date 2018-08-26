import { Component, OnInit } from '@angular/core';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { EventItem } from '../../models/event-item.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'larp-event-info',
    templateUrl: './event-info.component.html',
    styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

    public event: Observable<EventItem>;
    private eventService: EntityCollectionService<EventItem>;

    constructor(
        private entityService: EntityServices
    ) {
        this.eventService = this.entityService.getEntityCollectionService('Event');
    }

    ngOnInit() {
        this.event = this.eventService.getByKey(1);
    }

}
