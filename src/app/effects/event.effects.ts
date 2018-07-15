import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import * as eventActions from '../actions/event.action';
import { switchMap, mergeMap, catchError, tap, debounceTime } from 'rxjs/operators';
import { EventService } from '../services/event.service';
import { EventItem } from '../models/event-item';

@Injectable()
export class EventEffects {

  @Effect() fetch$: Observable<Action> = this.actions$.ofType(eventActions.EVENT_FETCH_REQUEST)
    .pipe(
      debounceTime(200),
      switchMap((action: eventActions.EventFetchRequestAction) =>
        this.eventService.events()
          .pipe(
            mergeMap((data: EventItem[]) => [new eventActions.EventFetchSuccessAction(data)]),
            catchError(error => [new eventActions.EventFetchFailureAction(error)])
          )
      )
    );

  constructor(
    private actions$: Actions,
    public eventService: EventService,
  ) {}
}
