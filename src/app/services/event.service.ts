import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { EventItem } from '../models/event-item';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private baseUrl = '/events';
    private eventCache: Observable<EventItem[]>;

    constructor(
        public http: HttpClient
    ) { }

    public events(): Observable<EventItem[]> {
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

    private fetchModel(data: any): EventItem {
        return new EventItem(data);
    }
}
