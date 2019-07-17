import { Favorites } from '../util';
import { FetchError } from '../action-creators';

export interface FavoritesState {
  favorites?: Favorites;
  error?: FetchError;
  isLoading?: boolean;
}

export const favoritesDefaultState: FavoritesState = {
  favorites: undefined,
  error: undefined,
  isLoading: false,
};
