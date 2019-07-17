export interface Favorites {
  [k: string]: FavoriteStock;
}

export interface FavoriteStock {
  quote: {
    symbol: string;
    latestPrice: number;
    change: number;
    changePercent: number;
  };
}
