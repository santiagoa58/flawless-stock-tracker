import { FavoritesAction, FAVORITES_ACTIONS_TYPES } from '../actions';
import { favoritesDefaultState } from '../states';

export const favoritesReducer = (
  state = favoritesDefaultState,
  { type, payload, error }: FavoritesAction
) => {
  const { resolve, reject, get } = FAVORITES_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, payload, isLoading: false };
    case reject:
      return { ...state, error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
