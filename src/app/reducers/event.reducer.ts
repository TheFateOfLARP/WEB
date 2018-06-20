import { EventItem } from '../models/event-item';
import * as eventActions from '../actions/event.action';

export type State = EventItem[];

export const initialState = [];

export function reducer(state = initialState, action: eventActions.Actions) {
  switch (action.type) {
    case eventActions.EVENT_FETCH_SUCCESS: return [ ...action.payload ];
    default: return state;
  }
}
