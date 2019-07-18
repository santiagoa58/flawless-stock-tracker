import { FAVORITES_ACTIONS_TYPES } from './constants';
import { Favorites, fetchFavorites, favoritesFilter } from '../util';
import {
  createAction,
  createThunkAction,
  FetchError,
  FluxStandardAction,
} from '../action-creators';

export type FavoritesAction = FluxStandardAction<
  FAVORITES_ACTIONS_TYPES,
  Favorites,
  FetchError
>;

const favoritesParameter = (symbols: string) => ({
  ...favoritesFilter,
  symbols,
  types: 'quote',
});

export const favoritesActions = {
  setPayload: (type: FAVORITES_ACTIONS_TYPES, payload: Favorites) =>
    createAction({ type, payload }),
  setError: (type: FAVORITES_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: FAVORITES_ACTIONS_TYPES) => createAction({ type }),
  getData: (companySymbols: string) =>
    createThunkAction(
      fetchFavorites(favoritesParameter(companySymbols)),
      favoritesActions,
      FAVORITES_ACTIONS_TYPES
    ),
};
