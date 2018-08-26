import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';

import { EventItem } from '../models/event-item.model';

@Injectable({
    providedIn: 'root'
})
export class EventService  extends EntityCollectionServiceBase<EventItem> {

    constructor(
        private entityServiceFactory: EntityCollectionServiceElementsFactory
    ) {
        super('EntityItem', entityServiceFactory);
    }

}
