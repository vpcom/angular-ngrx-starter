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
import * as fromLocalStorage from '../local-storage/local-storage.reducer';

export interface AppState {

}

// Added the routing Actions to the Actions map aimed at the store
export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  localStorage: fromLocalStorage.reducer
};

// Added storeFreeze to initial Schematic
export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];

export const selectLocalStorageState = createFeatureSelector<fromLocalStorage.LocalStorageState>("localStorage");

export const selectLocalStorageIsInit = createSelector(
  selectLocalStorageState,
  (localStorageState: fromLocalStorage.LocalStorageState) => localStorageState.isInit
);
