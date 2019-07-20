import * as React from 'react';

import { TickerPrice, PriceOutputProps } from '../ticker-price/tickerPrice';

export const FavoritesListItem = ({
  latestPrice,
  change,
  changePercent,
  symbol,
}: FavoritesProps) => {
  return (
    <li>
      <div className="footer__stock">
        <span className="footer__stock--symbol">{symbol}</span>
        <TickerPrice
          latestPrice={latestPrice}
          change={change}
          changePercent={changePercent}
        />
      </div>
    </li>
  );
};

export interface FavoritesProps extends PriceOutputProps {
  symbol: string;
}
