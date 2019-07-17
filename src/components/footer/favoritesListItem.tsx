import * as React from 'react';
import { TickerPrice, PriceOutputProps } from '../ticker-price/tickerPrice';

export interface FavoritesType extends PriceOutputProps {
  symbol: string;
}

export const FavoritesListItem: React.SFC<FavoritesType> = ({
  latestPrice,
  change,
  changePercent,
  symbol,
}) => {
  return (
    <li>
      <div>
        <span className="footer__stock-symbol">{symbol}</span>
        <TickerPrice
          latestPrice={latestPrice}
          change={change}
          changePercent={changePercent}
        />
      </div>
    </li>
  );
};
