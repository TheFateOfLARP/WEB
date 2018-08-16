import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventItem } from '../models/event-item.model';
import { EventService } from './event.service';

@Injectable({
    providedIn: 'root'
})
export class EventResolver implements Resolve<Observable<EventItem[]>> {

    constructor(
        private eventService: EventService
    ) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<EventItem[]> {
        return this.eventService.listEvents();
    }
}
