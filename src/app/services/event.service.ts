import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { EventItem } from '../models/event-item.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private baseUrl = '/events';
    private eventCache: Observable<EventItem[]>;

    constructor(
        private http: HttpClient
    ) { }

    public listEvents(): Observable<EventItem[]> {
        if (!this.eventCache) {
            this.eventCache = this.http.get(this.baseUrl)
                .pipe(
                    map( (result: EventItem[]) => result.map(x => this.fetchModel(x)) )
                );
        }

        return this.eventCache;
    }

    public eventInfo(id: number): Observable<EventItem> {
        return this.http.get(`${this.baseUrl}/${id}`)
            .pipe(
                map(x => this.fetchModel(x))
            );
    }

    public createEvent(): void {}

    private fetchModel(data: any): EventItem {
        return new EventItem(data);
    }
}
