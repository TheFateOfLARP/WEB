import { Action } from '@ngrx/store';
import { EventItem } from '../../models/event-item.model';

export const EVENT_FETCH_REQUEST = 'EVENT:FETCH_REQUEST';
export const EVENT_FETCH_SUCCESS = 'EVENT:FETCH_SUCCESS';
export const EVENT_FETCH_FAILURE = 'EVENT:FETCH_FAILURE';

export class EventFetchRequestAction implements Action {
    readonly type = EVENT_FETCH_REQUEST;
}

export class EventFetchSuccessAction implements Action {
    readonly type = EVENT_FETCH_SUCCESS;
    constructor(public payload: EventItem[]) { }
}

export class EventFetchFailureAction implements Action {
    readonly type = EVENT_FETCH_FAILURE;
    constructor(public error: any) { }
}

export type Actions = EventFetchRequestAction | EventFetchSuccessAction | EventFetchFailureAction;
