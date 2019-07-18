import { Favorites, FetchError } from '../util';

export interface FavoritesState {
  payload?: Favorites;
  error?: FetchError;
  isLoading?: boolean;
}

export const favoritesDefaultState: FavoritesState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
