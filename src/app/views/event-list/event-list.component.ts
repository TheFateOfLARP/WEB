import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventItem } from '../../models/event-item';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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
        private eventService: EventService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.data
            .pipe(
                map(data => data['events'])
            )
            .subscribe((events: EventItem[]) => {
                this.eventList = [...events];
                this.cdr.markForCheck();
            });
    }

}
