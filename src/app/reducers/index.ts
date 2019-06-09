import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {

}

// Added the routing Actions to the Actions map aimed at the store
export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

// Added storeFreeze to initial Schematic
export const metaReducers: MetaReducer<State>[] =
  !environment.production ? [storeFreeze] : [];
