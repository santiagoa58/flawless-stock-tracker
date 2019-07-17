import * as React from 'react';
import { FavoritesListItem } from './favoritesListItem';
import { FavoritesState } from '../../states';

export interface FavoriteListProps extends FavoritesState {
  getFavorites: () => void;
}

export const FavoritesList: React.FunctionComponent<FavoriteListProps> = ({
  favorites,
  getFavorites,
}) => {
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
