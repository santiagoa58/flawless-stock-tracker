import * as React from 'react';

import { FavoritesListItem } from './favoritesListItem';
import { FavoritesState } from '../../states';
import { Favorites } from '../../util';

export const FavoritesList = ({
  favorites,
  getFavorites,
}: FavoriteListProps) => {
  React.useEffect(() => {
    getFavorites();
  }, []);
  return (
    <ul>
      {favorites &&
        Object.values(favorites).map(({ quote }) => (
          <FavoritesListItem
            key={quote.symbol}
            latestPrice={quote.latestPrice}
            change={quote.change}
            changePercent={quote.changePercent}
            symbol={quote.symbol}
          />
        ))}
    </ul>
  );
};

export interface FavoriteListProps extends FavoritesState {
  favorites: Favorites;
  getFavorites: () => void;
}
