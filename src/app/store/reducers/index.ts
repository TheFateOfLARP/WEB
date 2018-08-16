import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromEvent from './event.reducer';

export interface State {
  events: fromEvent.State;
}

export const reducers: ActionReducerMap<State> = {
  events: fromEvent.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
