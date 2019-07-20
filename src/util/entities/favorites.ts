export interface Favorites {
  [k: string]: FavoriteStock;
}

export interface FavoriteStock {
  quote: {
    symbol: string | undefined;
    latestPrice: number | undefined;
    change: number;
    changePercent: number;
  };
}
