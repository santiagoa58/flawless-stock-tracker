import * as React from 'react';

import { FavoritesListItem } from './favoritesListItem';
import { FavoritesState } from '../../states';
import { Favorites } from '../../util';
import { FavoriteStock } from '../../util/entities/favorites';

export const FavoritesList = ({
  favorites,
  getFavorites,
}: FavoriteListProps) => {
  React.useEffect(() => {
    getFavorites();
  }, []);
  return (
    <ul>
      {favorites
        ? favorites &&
          Object.values(favorites).map(
            ({ latestPrice, change, changePercent, symbol }: FavoriteStock) => (
              <FavoritesListItem
                key={symbol}
                latestPrice={latestPrice}
                change={change}
                changePercent={changePercent}
                symbol={String(symbol)}
              />
            )
          )
        : undefined}
    </ul>
  );
};

export interface FavoriteListProps extends FavoritesState {
  favorites: Favorites | undefined;
  getFavorites: () => void;
}
