import * as React from 'react';
import { SearchContainer } from '../search/searchInputContainer';
import { TickerPrice } from '../ticker-price/tickerPrice';

interface PriceSearchProps {
  latestPrice: number;
  change: number;
  changePercent: number;
  companyName: string;
  symbol: string;
}

export const PriceSearchLayout: React.FunctionComponent<PriceSearchProps> = ({
  latestPrice,
  change,
  changePercent,
  companyName,
  symbol,
}: PriceSearchProps) => {
  return (
    <div className="header__search-layout">
      <SearchContainer
        companyName={companyName ? companyName : undefined}
        symbol={symbol ? symbol : undefined}
      />
      {latestPrice && (
        <TickerPrice
          latestPrice={latestPrice}
          change={change}
          changePercent={changePercent}
        />
      )}
    </div>
  );
};
