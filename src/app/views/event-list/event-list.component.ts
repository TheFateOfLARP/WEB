import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EventItem } from '../../models/event-item';
import { State } from '../../reducers';
import * as eventActions from '../../actions/event.action';

@Component({
    selector: 'larp-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit {

    public eventList: Observable<EventItem[]>;

    constructor(
        private cdr: ChangeDetectorRef,
        private store: Store<State>
    ) {
        store.dispatch(new eventActions.EventFetchRequestAction());
    }

    ngOnInit() {
        this.eventList = this.store.select('events')
            .pipe(
                tap(() => this.cdr.markForCheck())
            );
    }

}
