import { Reducer } from 'redux';

import { FavoritesAction, FAVORITES_ACTIONS_TYPES } from '../actions';
import { FavoritesState, favoritesDefaultState } from '../states';

export const favoritesReducer: Reducer<FavoritesState, FavoritesAction> = (
  state: FavoritesState = favoritesDefaultState,
  { type, payload, error }: FavoritesAction
): FavoritesState => {
  const { resolve, reject, get } = FAVORITES_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, favorites: payload, isLoading: false };
    case reject:
      return { ...state, error: error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
