import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromLocalStorage from '../local-storage/local-storage.reducer';
import { RouterStateUrl } from '../router/router.state';

// Base state entries are the router and the local storage
export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  localStorage: fromLocalStorage.LocalStorageState;
}

// Adds the base entries to the Actions map
export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  localStorage: fromLocalStorage.reducer
};
// Router selector
export const selectRouterState =
  createFeatureSelector<AppState, RouterReducerState<RouterStateUrl>>('router');
// Local storage selector
export const selectLocalStorageState =
  createFeatureSelector<fromLocalStorage.LocalStorageState>('localStorage');
export const selectLocalStorageIsInit = createSelector(
  selectLocalStorageState,
  (localStorageState: fromLocalStorage.LocalStorageState) => localStorageState.isInit
);

// Adds the storeFreeze security on dev mode
export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
