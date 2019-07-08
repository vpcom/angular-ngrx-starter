import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromLocalStorage from '../local-storage/local-storage.reducer';
import { RouterStateUrl } from '../router.state';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  localStorage: fromLocalStorage.LocalStorageState;
}

// Added the routing Actions to the Actions map aimed at the store
export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  localStorage: fromLocalStorage.reducer
};

// Added storeFreeze
export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];

export const selectLocalStorageState = createFeatureSelector<fromLocalStorage.LocalStorageState>("localStorage");

export const selectLocalStorageIsInit = createSelector(
  selectLocalStorageState,
  (localStorageState: fromLocalStorage.LocalStorageState) => localStorageState.isInit
);

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');
