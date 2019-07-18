import { Favorites } from '../util';
import { FetchError } from '../action-creators';

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
